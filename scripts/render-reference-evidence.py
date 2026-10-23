"""Render exported, real model geometry using standalone EGL, WITHOUT a browser.

This deliberately does not claim to test Three.js WebGL, DOM or interactions.
The independent shader verifies silhouette, depth, roof closure and layout.
Requires numpy, Pillow and moderngl; no browser/security switches are used.
"""
from pathlib import Path
import json, os
import numpy as np
import moderngl
from PIL import Image, ImageDraw, ImageFont

root=Path(os.environ.get('SERENITY_3D_OUTPUT','/workspace/outputs/serenity-reference-3d/geometry'))
info=json.loads((root/'geometry-manifest.json').read_text())
ctx=moderngl.create_standalone_context(backend='egl')
ctx.enable(moderngl.DEPTH_TEST)
vertex='''#version 330
in vec3 in_pos; in vec3 in_normal; in vec3 in_color; in float in_roughness; in float in_metal; in float in_alpha;
uniform mat4 view; uniform mat4 projection; uniform mat4 light_matrix;
out vec3 position; out vec3 normal; out vec3 color; out float roughness; out float metal; out float alpha; out vec4 light_position;
void main(){position=in_pos;normal=in_normal;color=in_color;roughness=in_roughness;metal=in_metal;alpha=in_alpha;light_position=light_matrix*vec4(in_pos,1.);gl_Position=projection*view*vec4(in_pos,1.);}
'''
fragment='''#version 330
in vec3 position; in vec3 normal; in vec3 color; in float roughness; in float metal; in float alpha; in vec4 light_position;
uniform sampler2D shadow_map; uniform vec3 eye;
out vec4 out_color;
float hash(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,38.71)))*43758.5453);}
vec3 aces(vec3 c){return clamp((c*(2.51*c+.03))/(c*(2.43*c+.59)+.14),0.,1.);}
void main(){
 vec3 n=normalize(normal);if(!gl_FrontFacing)n=-n;
 vec3 l=normalize(vec3(-80.,135.,90.)-vec3(12.,0.,-4.));vec3 v=normalize(eye-position);
 vec3 coord=light_position.xyz/light_position.w*.5+.5;float shadow=0.;
 if(coord.x>0.&&coord.x<1.&&coord.y>0.&&coord.y<1.){
  float bias=max(.0012*(1.-dot(n,l)),.00025);
  for(int x=-1;x<=1;x++)for(int y=-1;y<=1;y++){float d=texture(shadow_map,coord.xy+vec2(x,y)/2048.).r;shadow+=coord.z-bias>d?1.:0.;}shadow/=9.;
 }
 float diffuse=max(dot(n,l),0.);float noise=.95+hash(floor(position*7.))*.05;
 vec3 ambient=mix(vec3(.37,.39,.27),vec3(.72,.82,.91),n.y*.5+.5);
 vec3 c=color*noise*(ambient*.85+vec3(1.8,1.65,1.38)*diffuse*(1.-shadow*.7));
 float spec=pow(max(dot(n,normalize(l+v)),0.),mix(150.,12.,roughness))*(.06+metal*.22)*(1.-shadow*.8);
 c+=vec3(spec);c=pow(aces(c),vec3(1./2.2));
 float fog=smoothstep(260.,720.,length(eye-position));c=mix(c,vec3(.77,.85,.88),fog);
 out_color=vec4(c,alpha);
}
'''
program=ctx.program(vertex_shader=vertex,fragment_shader=fragment)
depth_program=ctx.program(vertex_shader='''#version 330
in vec3 in_pos;uniform mat4 light_matrix;void main(){gl_Position=light_matrix*vec4(in_pos,1.);}
''',fragment_shader='''#version 330
void main(){}
''')
data={name:np.fromfile(root/(name+'.bin'),dtype=np.float32).reshape(-1,12) for name in ['opaque','transparent','lines']}
buffers={name:ctx.buffer(a.tobytes()) for name,a in data.items()}
vaos={name:ctx.vertex_array(program,[(b,'3f 3f 3f 1f 1f 1f','in_pos','in_normal','in_color','in_roughness','in_metal','in_alpha')]) for name,b in buffers.items()}
depth_vao=ctx.vertex_array(depth_program,[(buffers['opaque'],'3f 36x','in_pos')])
matrix=lambda values:np.array(values,dtype='f4').reshape(4,4,order='F')
light=matrix(info['light']['projection'])@matrix(info['light']['view'])
for p in [program,depth_program]:p['light_matrix'].write(light.T.astype('f4').tobytes())
shadow=ctx.depth_texture((2048,2048));shadow.compare_func='';shadow.repeat_x=shadow.repeat_y=False
shadow_fbo=ctx.framebuffer(depth_attachment=shadow);shadow_fbo.use();shadow_fbo.clear(depth=1);depth_vao.render()
shadow.use(0);program['shadow_map']=0
for camera in info['cameras']:
 w,h=camera['width'],camera['height'];fbo=ctx.simple_framebuffer((w,h),components=4);fbo.use();fbo.clear(.773,.867,.918,1,depth=1)
 program['view'].write(np.array(camera['view'],dtype='f4').tobytes());program['projection'].write(np.array(camera['projection'],dtype='f4').tobytes());program['eye']=tuple(camera['position'])
 ctx.disable(moderngl.BLEND);ctx.depth_mask=True;vaos['opaque'].render();vaos['lines'].render(mode=moderngl.LINES)
 ctx.enable(moderngl.BLEND);ctx.blend_func=moderngl.SRC_ALPHA,moderngl.ONE_MINUS_SRC_ALPHA;ctx.depth_mask=False;vaos['transparent'].render();ctx.depth_mask=True
 image=Image.frombytes('RGBA',(w,h),fbo.read(components=4)).transpose(Image.Transpose.FLIP_TOP_BOTTOM).convert('RGB')
 draw=ImageDraw.Draw(image);draw.rectangle((0,h-33,w,h),fill='#f4efdf')
 label='GEOMETRY REVIEW / EGL · exact model meshes · independent shader · not a browser/WebGL screenshot'
 font=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',14)
 draw.text((16,h-25),label,fill='#184b42',font=font)
 image.save(root/(camera['name']+'.jpg'),quality=94,subsampling=0);fbo.release()
print(json.dumps({'renderer':ctx.info['GL_RENDERER'],'method':'standalone EGL / independent shader; browser WebGL NOT tested','views':[c['name']+'.jpg' for c in info['cameras']]},indent=2))
(root/'render-receipt.json').write_text(json.dumps({'renderer':ctx.info['GL_RENDERER'],'version':ctx.version_code,'browserWebGLTested':False,'securityFlagsUsed':[]},indent=2)+'\n')
ctx.release()
