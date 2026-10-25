import{t as Fa}from"./index-C3IiJ7hI.js";const oa="180",li={ROTATE:0,DOLLY:1,PAN:2},xn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ul=0,Oa=1,Nl=2,jo=1,Ko=2,on=3,En=0,Te=1,je=2,Mn=0,ci=1,Ba=2,za=3,ka=4,Fl=5,In=100,Ol=101,Bl=102,zl=103,kl=104,Hl=200,Vl=201,Gl=202,Wl=203,_r=204,gr=205,Xl=206,Yl=207,ql=208,jl=209,Kl=210,Zl=211,$l=212,Jl=213,Ql=214,xr=0,vr=1,Mr=2,ui=3,Sr=4,Er=5,yr=6,Tr=7,la=0,tc=1,ec=2,Sn=0,nc=1,ic=2,sc=3,Zo=4,rc=5,ac=6,oc=7,$o=300,di=301,fi=302,br=303,Ar=304,Ds=306,Ss=1e3,Nn=1001,wr=1002,Ue=1003,lc=1004,Gi=1005,Ke=1006,Os=1007,Fn=1008,Qe=1009,Jo=1010,Qo=1011,Ui=1012,ca=1013,On=1014,Ze=1015,ki=1016,ha=1017,ua=1018,Ni=1020,tl=35902,el=35899,nl=1021,il=1022,Be=1023,Fi=1026,Oi=1027,da=1028,fa=1029,sl=1030,pa=1031,ma=1033,_s=33776,gs=33777,xs=33778,vs=33779,Rr=35840,Cr=35841,Pr=35842,Dr=35843,Lr=36196,Ir=37492,Ur=37496,Nr=37808,Fr=37809,Or=37810,Br=37811,zr=37812,kr=37813,Hr=37814,Vr=37815,Gr=37816,Wr=37817,Xr=37818,Yr=37819,qr=37820,jr=37821,Kr=36492,Zr=36494,$r=36495,Jr=36283,Qr=36284,ta=36285,ea=36286,cc=3200,hc=3201,_a=0,uc=1,_n="",Re="srgb",pi="srgb-linear",Es="linear",te="srgb",Wn=7680,Ha=519,dc=512,fc=513,pc=514,rl=515,mc=516,_c=517,gc=518,xc=519,Va=35044,Ga="300 es",$e=2e3,ys=2001;class kn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wa=1234567;const Di=Math.PI/180,Bi=180/Math.PI;function gi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function ga(i,t){return(i%t+t)%t}function vc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Mc(i,t,e){return i!==t?(e-i)/(t-i):0}function Li(i,t,e){return(1-e)*i+e*t}function Sc(i,t,e,n){return Li(i,t,1-Math.exp(-e*n))}function Ec(i,t=1){return t-Math.abs(ga(i,t*2)-t)}function yc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Tc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function bc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ac(i,t){return i+Math.random()*(t-i)}function wc(i){return i*(.5-Math.random())}function Rc(i){i!==void 0&&(Wa=i);let t=Wa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cc(i){return i*Di}function Pc(i){return i*Bi}function Dc(i){return(i&i-1)===0&&i!==0}function Lc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ic(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Uc(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),h=o(e/2),l=r((t+n)/2),f=o((t+n)/2),d=r((t-n)/2),m=o((t-n)/2),x=r((n-t)/2),v=o((n-t)/2);switch(s){case"XYX":i.set(a*f,h*d,h*m,a*l);break;case"YZY":i.set(h*m,a*f,h*d,a*l);break;case"ZXZ":i.set(h*d,h*m,a*f,a*l);break;case"XZX":i.set(a*f,h*v,h*x,a*l);break;case"YXY":i.set(h*x,a*f,h*v,a*l);break;case"ZYZ":i.set(h*v,h*x,a*f,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gn={DEG2RAD:Di,RAD2DEG:Bi,generateUUID:gi,clamp:Xt,euclideanModulo:ga,mapLinear:vc,inverseLerp:Mc,lerp:Li,damp:Sc,pingpong:Ec,smoothstep:yc,smootherstep:Tc,randInt:bc,randFloat:Ac,randFloatSpread:wc,seededRandom:Rc,degToRad:Cc,radToDeg:Pc,isPowerOfTwo:Dc,ceilPowerOfTwo:Lc,floorPowerOfTwo:Ic,setQuaternionFromProperEuler:Uc,normalize:Ee,denormalize:ai};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let h=n[s+0],l=n[s+1],f=n[s+2],d=n[s+3];const m=r[o+0],x=r[o+1],v=r[o+2],g=r[o+3];if(a===0){t[e+0]=h,t[e+1]=l,t[e+2]=f,t[e+3]=d;return}if(a===1){t[e+0]=m,t[e+1]=x,t[e+2]=v,t[e+3]=g;return}if(d!==g||h!==m||l!==x||f!==v){let _=1-a;const c=h*m+l*x+f*v+d*g,w=c>=0?1:-1,A=1-c*c;if(A>Number.EPSILON){const D=Math.sqrt(A),P=Math.atan2(D,c*w);_=Math.sin(_*P)/D,a=Math.sin(a*P)/D}const T=a*w;if(h=h*_+m*T,l=l*_+x*T,f=f*_+v*T,d=d*_+g*T,_===1-a){const D=1/Math.sqrt(h*h+l*l+f*f+d*d);h*=D,l*=D,f*=D,d*=D}}t[e]=h,t[e+1]=l,t[e+2]=f,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],h=n[s+1],l=n[s+2],f=n[s+3],d=r[o],m=r[o+1],x=r[o+2],v=r[o+3];return t[e]=a*v+f*d+h*x-l*m,t[e+1]=h*v+f*m+l*d-a*x,t[e+2]=l*v+f*x+a*m-h*d,t[e+3]=f*v-a*d-h*m-l*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,h=Math.sin,l=a(n/2),f=a(s/2),d=a(r/2),m=h(n/2),x=h(s/2),v=h(r/2);switch(o){case"XYZ":this._x=m*f*d+l*x*v,this._y=l*x*d-m*f*v,this._z=l*f*v+m*x*d,this._w=l*f*d-m*x*v;break;case"YXZ":this._x=m*f*d+l*x*v,this._y=l*x*d-m*f*v,this._z=l*f*v-m*x*d,this._w=l*f*d+m*x*v;break;case"ZXY":this._x=m*f*d-l*x*v,this._y=l*x*d+m*f*v,this._z=l*f*v+m*x*d,this._w=l*f*d-m*x*v;break;case"ZYX":this._x=m*f*d-l*x*v,this._y=l*x*d+m*f*v,this._z=l*f*v-m*x*d,this._w=l*f*d+m*x*v;break;case"YZX":this._x=m*f*d+l*x*v,this._y=l*x*d+m*f*v,this._z=l*f*v-m*x*d,this._w=l*f*d-m*x*v;break;case"XZY":this._x=m*f*d-l*x*v,this._y=l*x*d-m*f*v,this._z=l*f*v+m*x*d,this._w=l*f*d+m*x*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],h=e[9],l=e[2],f=e[6],d=e[10],m=n+a+d;if(m>0){const x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(f-h)*x,this._y=(r-l)*x,this._z=(o-s)*x}else if(n>a&&n>d){const x=2*Math.sqrt(1+n-a-d);this._w=(f-h)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+l)/x}else if(a>d){const x=2*Math.sqrt(1+a-n-d);this._w=(r-l)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(h+f)/x}else{const x=2*Math.sqrt(1+d-n-a);this._w=(o-s)/x,this._x=(r+l)/x,this._y=(h+f)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,h=e._y,l=e._z,f=e._w;return this._x=n*f+o*a+s*l-r*h,this._y=s*f+o*h+r*a-n*l,this._z=r*f+o*l+n*h-s*a,this._w=o*f-n*a-s*h-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const h=1-a*a;if(h<=Number.EPSILON){const x=1-e;return this._w=x*o+e*this._w,this._x=x*n+e*this._x,this._y=x*s+e*this._y,this._z=x*r+e*this._z,this.normalize(),this}const l=Math.sqrt(h),f=Math.atan2(l,a),d=Math.sin((1-e)*f)/l,m=Math.sin(e*f)/l;return this._w=o*d+this._w*m,this._x=n*d+this._x*m,this._y=s*d+this._y*m,this._z=r*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,h=t.w,l=2*(o*s-a*n),f=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+h*l+o*d-a*f,this.y=n+h*f+a*l-r*d,this.z=s+h*d+r*f-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,h=e.z;return this.x=s*h-r*a,this.y=r*o-n*h,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bs.copy(this).projectOnVector(t),this.sub(Bs)}reflect(t){return this.sub(Bs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new N,Xa=new Bn;class kt{constructor(t,e,n,s,r,o,a,h,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,h,l)}set(t,e,n,s,r,o,a,h,l){const f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=h,f[6]=n,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],h=n[6],l=n[1],f=n[4],d=n[7],m=n[2],x=n[5],v=n[8],g=s[0],_=s[3],c=s[6],w=s[1],A=s[4],T=s[7],D=s[2],P=s[5],L=s[8];return r[0]=o*g+a*w+h*D,r[3]=o*_+a*A+h*P,r[6]=o*c+a*T+h*L,r[1]=l*g+f*w+d*D,r[4]=l*_+f*A+d*P,r[7]=l*c+f*T+d*L,r[2]=m*g+x*w+v*D,r[5]=m*_+x*A+v*P,r[8]=m*c+x*T+v*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],f=t[8];return e*o*f-e*a*l-n*r*f+n*a*h+s*r*l-s*o*h}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],f=t[8],d=f*o-a*l,m=a*h-f*r,x=l*r-o*h,v=e*d+n*m+s*x;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=d*g,t[1]=(s*l-f*n)*g,t[2]=(a*n-s*o)*g,t[3]=m*g,t[4]=(f*e-s*h)*g,t[5]=(s*r-a*e)*g,t[6]=x*g,t[7]=(n*h-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const h=Math.cos(r),l=Math.sin(r);return this.set(n*h,n*l,-n*(h*o+l*a)+o+t,-s*l,s*h,-s*(-l*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zs.makeScale(t,e)),this}rotate(t){return this.premultiply(zs.makeRotation(-t)),this}translate(t,e){return this.premultiply(zs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new kt;function al(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nc(){const i=Ts("canvas");return i.style.display="block",i}const Ya={};function zi(i){i in Ya||(Ya[i]=!0,console.warn(i))}function Fc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const qa=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ja=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Oc(){const i={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===te&&(s.r=ln(s.r),s.g=ln(s.g),s.b=ln(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===te&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_n?Es:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pi]:{primaries:t,whitePoint:n,transfer:Es,toXYZ:qa,fromXYZ:ja,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:n,transfer:te,toXYZ:qa,fromXYZ:ja,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),i}const Zt=Oc();function ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xn;class Bc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Xn===void 0&&(Xn=Ts("canvas")),Xn.width=t.width,Xn.height=t.height;const s=Xn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Xn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ts("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ln(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ln(e[n]/255)*255):e[n]=ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zc=0;class xa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ks(s[o].image)):r.push(ks(s[o]))}else r=ks(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ks(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kc=0;const Hs=new N;class be extends kn{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=Nn,s=Nn,r=Ke,o=Fn,a=Be,h=Qe,l=be.DEFAULT_ANISOTROPY,f=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=gi(),this.name="",this.source=new xa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hs).x}get height(){return this.source.getSize(Hs).y}get depth(){return this.source.getSize(Hs).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$o)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ss:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case wr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ss:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case wr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=$o;be.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const h=t.elements,l=h[0],f=h[4],d=h[8],m=h[1],x=h[5],v=h[9],g=h[2],_=h[6],c=h[10];if(Math.abs(f-m)<.01&&Math.abs(d-g)<.01&&Math.abs(v-_)<.01){if(Math.abs(f+m)<.1&&Math.abs(d+g)<.1&&Math.abs(v+_)<.1&&Math.abs(l+x+c-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(l+1)/2,T=(x+1)/2,D=(c+1)/2,P=(f+m)/4,L=(d+g)/4,O=(v+_)/4;return A>T&&A>D?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=P/n,r=L/n):T>D?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=P/s,r=O/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=L/r,s=O/r),this.set(n,s,r,e),this}let w=Math.sqrt((_-v)*(_-v)+(d-g)*(d-g)+(m-f)*(m-f));return Math.abs(w)<.001&&(w=1),this.x=(_-v)/w,this.y=(d-g)/w,this.z=(m-f)/w,this.w=Math.acos((l+x+c-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hc extends kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new be(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new xa(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Hc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ol extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vc extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Je{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ke):ke.fromBufferAttribute(r,o),ke.applyMatrix4(t.matrixWorld),this.expandByPoint(ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wi.copy(n.boundingBox)),Wi.applyMatrix4(t.matrixWorld),this.union(Wi)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ei),Xi.subVectors(this.max,Ei),Yn.subVectors(t.a,Ei),qn.subVectors(t.b,Ei),jn.subVectors(t.c,Ei),cn.subVectors(qn,Yn),hn.subVectors(jn,qn),An.subVectors(Yn,jn);let e=[0,-cn.z,cn.y,0,-hn.z,hn.y,0,-An.z,An.y,cn.z,0,-cn.x,hn.z,0,-hn.x,An.z,0,-An.x,-cn.y,cn.x,0,-hn.y,hn.x,0,-An.y,An.x,0];return!Vs(e,Yn,qn,jn,Xi)||(e=[1,0,0,0,1,0,0,0,1],!Vs(e,Yn,qn,jn,Xi))?!1:(Yi.crossVectors(cn,hn),e=[Yi.x,Yi.y,Yi.z],Vs(e,Yn,qn,jn,Xi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const en=[new N,new N,new N,new N,new N,new N,new N,new N],ke=new N,Wi=new Je,Yn=new N,qn=new N,jn=new N,cn=new N,hn=new N,An=new N,Ei=new N,Xi=new N,Yi=new N,wn=new N;function Vs(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wn.fromArray(i,r);const a=s.x*Math.abs(wn.x)+s.y*Math.abs(wn.y)+s.z*Math.abs(wn.z),h=t.dot(wn),l=e.dot(wn),f=n.dot(wn);if(Math.max(-Math.max(h,l,f),Math.min(h,l,f))>a)return!1}return!0}const Gc=new Je,yi=new N,Gs=new N;class xi{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yi.subVectors(t,this.center);const e=yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yi.copy(t.center).add(Gs)),this.expandByPoint(yi.copy(t.center).sub(Gs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const nn=new N,Ws=new N,qi=new N,un=new N,Xs=new N,ji=new N,Ys=new N;class Ls{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.origin).addScaledVector(this.direction,e),nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ws.copy(t).add(e).multiplyScalar(.5),qi.copy(e).sub(t).normalize(),un.copy(this.origin).sub(Ws);const r=t.distanceTo(e)*.5,o=-this.direction.dot(qi),a=un.dot(this.direction),h=-un.dot(qi),l=un.lengthSq(),f=Math.abs(1-o*o);let d,m,x,v;if(f>0)if(d=o*h-a,m=o*a-h,v=r*f,d>=0)if(m>=-v)if(m<=v){const g=1/f;d*=g,m*=g,x=d*(d+o*m+2*a)+m*(o*d+m+2*h)+l}else m=r,d=Math.max(0,-(o*m+a)),x=-d*d+m*(m+2*h)+l;else m=-r,d=Math.max(0,-(o*m+a)),x=-d*d+m*(m+2*h)+l;else m<=-v?(d=Math.max(0,-(-o*r+a)),m=d>0?-r:Math.min(Math.max(-r,-h),r),x=-d*d+m*(m+2*h)+l):m<=v?(d=0,m=Math.min(Math.max(-r,-h),r),x=m*(m+2*h)+l):(d=Math.max(0,-(o*r+a)),m=d>0?r:Math.min(Math.max(-r,-h),r),x=-d*d+m*(m+2*h)+l);else m=o>0?-r:r,d=Math.max(0,-(o*m+a)),x=-d*d+m*(m+2*h)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ws).addScaledVector(qi,m),x}intersectSphere(t,e){nn.subVectors(t.center,this.origin);const n=nn.dot(this.direction),s=nn.dot(nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,h;const l=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,m=this.origin;return l>=0?(n=(t.min.x-m.x)*l,s=(t.max.x-m.x)*l):(n=(t.max.x-m.x)*l,s=(t.min.x-m.x)*l),f>=0?(r=(t.min.y-m.y)*f,o=(t.max.y-m.y)*f):(r=(t.max.y-m.y)*f,o=(t.min.y-m.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-m.z)*d,h=(t.max.z-m.z)*d):(a=(t.max.z-m.z)*d,h=(t.min.z-m.z)*d),n>h||a>s)||((a>n||n!==n)&&(n=a),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,n,s,r){Xs.subVectors(e,t),ji.subVectors(n,t),Ys.crossVectors(Xs,ji);let o=this.direction.dot(Ys),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;un.subVectors(this.origin,t);const h=a*this.direction.dot(ji.crossVectors(un,ji));if(h<0)return null;const l=a*this.direction.dot(Xs.cross(un));if(l<0||h+l>o)return null;const f=-a*un.dot(Ys);return f<0?null:this.at(f/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,o,a,h,l,f,d,m,x,v,g,_){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,h,l,f,d,m,x,v,g,_)}set(t,e,n,s,r,o,a,h,l,f,d,m,x,v,g,_){const c=this.elements;return c[0]=t,c[4]=e,c[8]=n,c[12]=s,c[1]=r,c[5]=o,c[9]=a,c[13]=h,c[2]=l,c[6]=f,c[10]=d,c[14]=m,c[3]=x,c[7]=v,c[11]=g,c[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Kn.setFromMatrixColumn(t,0).length(),r=1/Kn.setFromMatrixColumn(t,1).length(),o=1/Kn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(s),l=Math.sin(s),f=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const m=o*f,x=o*d,v=a*f,g=a*d;e[0]=h*f,e[4]=-h*d,e[8]=l,e[1]=x+v*l,e[5]=m-g*l,e[9]=-a*h,e[2]=g-m*l,e[6]=v+x*l,e[10]=o*h}else if(t.order==="YXZ"){const m=h*f,x=h*d,v=l*f,g=l*d;e[0]=m+g*a,e[4]=v*a-x,e[8]=o*l,e[1]=o*d,e[5]=o*f,e[9]=-a,e[2]=x*a-v,e[6]=g+m*a,e[10]=o*h}else if(t.order==="ZXY"){const m=h*f,x=h*d,v=l*f,g=l*d;e[0]=m-g*a,e[4]=-o*d,e[8]=v+x*a,e[1]=x+v*a,e[5]=o*f,e[9]=g-m*a,e[2]=-o*l,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){const m=o*f,x=o*d,v=a*f,g=a*d;e[0]=h*f,e[4]=v*l-x,e[8]=m*l+g,e[1]=h*d,e[5]=g*l+m,e[9]=x*l-v,e[2]=-l,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){const m=o*h,x=o*l,v=a*h,g=a*l;e[0]=h*f,e[4]=g-m*d,e[8]=v*d+x,e[1]=d,e[5]=o*f,e[9]=-a*f,e[2]=-l*f,e[6]=x*d+v,e[10]=m-g*d}else if(t.order==="XZY"){const m=o*h,x=o*l,v=a*h,g=a*l;e[0]=h*f,e[4]=-d,e[8]=l*f,e[1]=m*d+g,e[5]=o*f,e[9]=x*d-v,e[2]=v*d-x,e[6]=a*f,e[10]=g*d+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wc,t,Xc)}lookAt(t,e,n){const s=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),dn.crossVectors(n,De),dn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),dn.crossVectors(n,De)),dn.normalize(),Ki.crossVectors(De,dn),s[0]=dn.x,s[4]=Ki.x,s[8]=De.x,s[1]=dn.y,s[5]=Ki.y,s[9]=De.y,s[2]=dn.z,s[6]=Ki.z,s[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],h=n[8],l=n[12],f=n[1],d=n[5],m=n[9],x=n[13],v=n[2],g=n[6],_=n[10],c=n[14],w=n[3],A=n[7],T=n[11],D=n[15],P=s[0],L=s[4],O=s[8],y=s[12],M=s[1],F=s[5],V=s[9],X=s[13],$=s[2],J=s[6],q=s[10],at=s[14],j=s[3],ut=s[7],gt=s[11],bt=s[15];return r[0]=o*P+a*M+h*$+l*j,r[4]=o*L+a*F+h*J+l*ut,r[8]=o*O+a*V+h*q+l*gt,r[12]=o*y+a*X+h*at+l*bt,r[1]=f*P+d*M+m*$+x*j,r[5]=f*L+d*F+m*J+x*ut,r[9]=f*O+d*V+m*q+x*gt,r[13]=f*y+d*X+m*at+x*bt,r[2]=v*P+g*M+_*$+c*j,r[6]=v*L+g*F+_*J+c*ut,r[10]=v*O+g*V+_*q+c*gt,r[14]=v*y+g*X+_*at+c*bt,r[3]=w*P+A*M+T*$+D*j,r[7]=w*L+A*F+T*J+D*ut,r[11]=w*O+A*V+T*q+D*gt,r[15]=w*y+A*X+T*at+D*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],h=t[9],l=t[13],f=t[2],d=t[6],m=t[10],x=t[14],v=t[3],g=t[7],_=t[11],c=t[15];return v*(+r*h*d-s*l*d-r*a*m+n*l*m+s*a*x-n*h*x)+g*(+e*h*x-e*l*m+r*o*m-s*o*x+s*l*f-r*h*f)+_*(+e*l*d-e*a*x-r*o*d+n*o*x+r*a*f-n*l*f)+c*(-s*a*f-e*h*d+e*a*m+s*o*d-n*o*m+n*h*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],f=t[8],d=t[9],m=t[10],x=t[11],v=t[12],g=t[13],_=t[14],c=t[15],w=d*_*l-g*m*l+g*h*x-a*_*x-d*h*c+a*m*c,A=v*m*l-f*_*l-v*h*x+o*_*x+f*h*c-o*m*c,T=f*g*l-v*d*l+v*a*x-o*g*x-f*a*c+o*d*c,D=v*d*h-f*g*h-v*a*m+o*g*m+f*a*_-o*d*_,P=e*w+n*A+s*T+r*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return t[0]=w*L,t[1]=(g*m*r-d*_*r-g*s*x+n*_*x+d*s*c-n*m*c)*L,t[2]=(a*_*r-g*h*r+g*s*l-n*_*l-a*s*c+n*h*c)*L,t[3]=(d*h*r-a*m*r-d*s*l+n*m*l+a*s*x-n*h*x)*L,t[4]=A*L,t[5]=(f*_*r-v*m*r+v*s*x-e*_*x-f*s*c+e*m*c)*L,t[6]=(v*h*r-o*_*r-v*s*l+e*_*l+o*s*c-e*h*c)*L,t[7]=(o*m*r-f*h*r+f*s*l-e*m*l-o*s*x+e*h*x)*L,t[8]=T*L,t[9]=(v*d*r-f*g*r-v*n*x+e*g*x+f*n*c-e*d*c)*L,t[10]=(o*g*r-v*a*r+v*n*l-e*g*l-o*n*c+e*a*c)*L,t[11]=(f*a*r-o*d*r-f*n*l+e*d*l+o*n*x-e*a*x)*L,t[12]=D*L,t[13]=(f*g*s-v*d*s+v*n*m-e*g*m-f*n*_+e*d*_)*L,t[14]=(v*a*s-o*g*s-v*n*h+e*g*h+o*n*_-e*a*_)*L,t[15]=(o*d*s-f*a*s+f*n*h-e*d*h-o*n*m+e*a*m)*L,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,h=t.z,l=r*o,f=r*a;return this.set(l*o+n,l*a-s*h,l*h+s*a,0,l*a+s*h,f*a+n,f*h-s*o,0,l*h-s*a,f*h+s*o,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,h=e._w,l=r+r,f=o+o,d=a+a,m=r*l,x=r*f,v=r*d,g=o*f,_=o*d,c=a*d,w=h*l,A=h*f,T=h*d,D=n.x,P=n.y,L=n.z;return s[0]=(1-(g+c))*D,s[1]=(x+T)*D,s[2]=(v-A)*D,s[3]=0,s[4]=(x-T)*P,s[5]=(1-(m+c))*P,s[6]=(_+w)*P,s[7]=0,s[8]=(v+A)*L,s[9]=(_-w)*L,s[10]=(1-(m+g))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Kn.set(s[0],s[1],s[2]).length();const o=Kn.set(s[4],s[5],s[6]).length(),a=Kn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],He.copy(this);const l=1/r,f=1/o,d=1/a;return He.elements[0]*=l,He.elements[1]*=l,He.elements[2]*=l,He.elements[4]*=f,He.elements[5]*=f,He.elements[6]*=f,He.elements[8]*=d,He.elements[9]*=d,He.elements[10]*=d,e.setFromRotationMatrix(He),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=$e,h=!1){const l=this.elements,f=2*r/(e-t),d=2*r/(n-s),m=(e+t)/(e-t),x=(n+s)/(n-s);let v,g;if(h)v=r/(o-r),g=o*r/(o-r);else if(a===$e)v=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ys)v=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=d,l[9]=x,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=$e,h=!1){const l=this.elements,f=2/(e-t),d=2/(n-s),m=-(e+t)/(e-t),x=-(n+s)/(n-s);let v,g;if(h)v=1/(o-r),g=o/(o-r);else if(a===$e)v=-2/(o-r),g=-(o+r)/(o-r);else if(a===ys)v=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=d,l[9]=0,l[13]=x,l[2]=0,l[6]=0,l[10]=v,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Kn=new N,He=new se,Wc=new N(0,0,0),Xc=new N(1,1,1),dn=new N,Ki=new N,De=new N,Ka=new se,Za=new Bn;class We{constructor(t=0,e=0,n=0,s=We.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],h=s[1],l=s[5],f=s[9],d=s[2],m=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,x),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ka.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ka,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Za.setFromEuler(this),this.setFromQuaternion(Za,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}We.DEFAULT_ORDER="XYZ";class va{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yc=0;const $a=new N,Zn=new Bn,sn=new se,Zi=new N,Ti=new N,qc=new N,jc=new Bn,Ja=new N(1,0,0),Qa=new N(0,1,0),to=new N(0,0,1),eo={type:"added"},Kc={type:"removed"},$n={type:"childadded",child:null},qs={type:"childremoved",child:null};class pe extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new N,e=new We,n=new Bn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new kt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zn.setFromAxisAngle(t,e),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(t,e){return Zn.setFromAxisAngle(t,e),this.quaternion.premultiply(Zn),this}rotateX(t){return this.rotateOnAxis(Ja,t)}rotateY(t){return this.rotateOnAxis(Qa,t)}rotateZ(t){return this.rotateOnAxis(to,t)}translateOnAxis(t,e){return $a.copy(t).applyQuaternion(this.quaternion),this.position.add($a.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ja,t)}translateY(t){return this.translateOnAxis(Qa,t)}translateZ(t){return this.translateOnAxis(to,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zi.copy(t):Zi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Ti,Zi,this.up):sn.lookAt(Zi,Ti,this.up),this.quaternion.setFromRotationMatrix(sn),s&&(sn.extractRotation(s.matrixWorld),Zn.setFromRotationMatrix(sn),this.quaternion.premultiply(Zn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eo),$n.child=t,this.dispatchEvent($n),$n.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kc),qs.child=t,this.dispatchEvent(qs),qs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eo),$n.child=t,this.dispatchEvent($n),$n.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,t,qc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ti,jc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let l=0,f=h.length;l<f;l++){const d=h[l];r(t.shapes,d)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(r(t.materials,this.material[h]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];s.animations.push(r(t.animations,h))}}if(e){const a=o(t.geometries),h=o(t.materials),l=o(t.textures),f=o(t.images),d=o(t.shapes),m=o(t.skeletons),x=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),x.length>0&&(n.animations=x),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const h=[];for(const l in a){const f=a[l];delete f.metadata,h.push(f)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}pe.DEFAULT_UP=new N(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ve=new N,rn=new N,js=new N,an=new N,Jn=new N,Qn=new N,no=new N,Ks=new N,Zs=new N,$s=new N,Js=new ne,Qs=new ne,tr=new ne;class Ge{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ve.subVectors(t,e),s.cross(Ve);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ve.subVectors(s,e),rn.subVectors(n,e),js.subVectors(t,e);const o=Ve.dot(Ve),a=Ve.dot(rn),h=Ve.dot(js),l=rn.dot(rn),f=rn.dot(js),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const m=1/d,x=(l*h-a*f)*m,v=(o*f-a*h)*m;return r.set(1-x-v,v,x)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(t,e,n,s,r,o,a,h){return this.getBarycoord(t,e,n,s,an)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,an.x),h.addScaledVector(o,an.y),h.addScaledVector(a,an.z),h)}static getInterpolatedAttribute(t,e,n,s,r,o){return Js.setScalar(0),Qs.setScalar(0),tr.setScalar(0),Js.fromBufferAttribute(t,e),Qs.fromBufferAttribute(t,n),tr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Js,r.x),o.addScaledVector(Qs,r.y),o.addScaledVector(tr,r.z),o}static isFrontFacing(t,e,n,s){return Ve.subVectors(n,e),rn.subVectors(t,e),Ve.cross(rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ve.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Ve.cross(rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ge.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ge.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ge.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ge.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ge.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Jn.subVectors(s,n),Qn.subVectors(r,n),Ks.subVectors(t,n);const h=Jn.dot(Ks),l=Qn.dot(Ks);if(h<=0&&l<=0)return e.copy(n);Zs.subVectors(t,s);const f=Jn.dot(Zs),d=Qn.dot(Zs);if(f>=0&&d<=f)return e.copy(s);const m=h*d-f*l;if(m<=0&&h>=0&&f<=0)return o=h/(h-f),e.copy(n).addScaledVector(Jn,o);$s.subVectors(t,r);const x=Jn.dot($s),v=Qn.dot($s);if(v>=0&&x<=v)return e.copy(r);const g=x*l-h*v;if(g<=0&&l>=0&&v<=0)return a=l/(l-v),e.copy(n).addScaledVector(Qn,a);const _=f*v-x*d;if(_<=0&&d-f>=0&&x-v>=0)return no.subVectors(r,s),a=(d-f)/(d-f+(x-v)),e.copy(s).addScaledVector(no,a);const c=1/(_+g+m);return o=g*c,a=m*c,e.copy(n).addScaledVector(Jn,o).addScaledVector(Qn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},$i={h:0,s:0,l:0};function er(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=ga(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=er(o,r,t+1/3),this.g=er(o,r,t),this.b=er(o,r,t-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const n=ll[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return Zt.workingToColorSpace(Me.copy(this),t),Math.round(Xt(Me.r*255,0,255))*65536+Math.round(Xt(Me.g*255,0,255))*256+Math.round(Xt(Me.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(Me.copy(this),e);const n=Me.r,s=Me.g,r=Me.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let h,l;const f=(a+o)/2;if(a===o)h=0,l=0;else{const d=o-a;switch(l=f<=.5?d/(o+a):d/(2-o-a),o){case n:h=(s-r)/d+(s<r?6:0);break;case s:h=(r-n)/d+2;break;case r:h=(n-s)/d+4;break}h/=6}return t.h=h,t.s=l,t.l=f,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Re){Zt.workingToColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,s=Me.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fn),this.setHSL(fn.h+t,fn.s+e,fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fn),t.getHSL($i);const n=Li(fn.h,$i.h,e),s=Li(fn.s,$i.s,e),r=Li(fn.l,$i.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new Ht;Ht.NAMES=ll;let Zc=0;class Hn extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=ci,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_r,this.blendDst=gr,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_r&&(n.blendSrc=this.blendSrc),this.blendDst!==gr&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ha&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const h=r[a];delete h.metadata,o.push(h)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Is extends Hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new N,Ji=new It;let $c=0;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$c++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Va,this.updateRanges=[],this.gpuType=Ze,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ji.fromBufferAttribute(this,e),Ji.applyMatrix3(t),this.setXY(e,Ji.x,Ji.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Va&&(t.usage=this.usage),t}}class cl extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hl extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jc=0;const Oe=new se,nr=new pe,ti=new N,Le=new Je,bi=new Je,ge=new N;class xe extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(al(t)?hl:cl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oe.makeRotationFromQuaternion(t),this.applyMatrix4(Oe),this}rotateX(t){return Oe.makeRotationX(t),this.applyMatrix4(Oe),this}rotateY(t){return Oe.makeRotationY(t),this.applyMatrix4(Oe),this}rotateZ(t){return Oe.makeRotationZ(t),this.applyMatrix4(Oe),this}translate(t,e,n){return Oe.makeTranslation(t,e,n),this.applyMatrix4(Oe),this}scale(t,e,n){return Oe.makeScale(t,e,n),this.applyMatrix4(Oe),this}lookAt(t){return nr.lookAt(t),nr.updateMatrix(),this.applyMatrix4(nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Je);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Le.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];bi.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(Le.min,bi.min),Le.expandByPoint(ge),ge.addVectors(Le.max,bi.max),Le.expandByPoint(ge)):(Le.expandByPoint(bi.min),Le.expandByPoint(bi.max))}Le.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],h=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)ge.fromBufferAttribute(a,l),h&&(ti.fromBufferAttribute(t,l),ge.add(ti)),s=Math.max(s,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],h=[];for(let O=0;O<n.count;O++)a[O]=new N,h[O]=new N;const l=new N,f=new N,d=new N,m=new It,x=new It,v=new It,g=new N,_=new N;function c(O,y,M){l.fromBufferAttribute(n,O),f.fromBufferAttribute(n,y),d.fromBufferAttribute(n,M),m.fromBufferAttribute(r,O),x.fromBufferAttribute(r,y),v.fromBufferAttribute(r,M),f.sub(l),d.sub(l),x.sub(m),v.sub(m);const F=1/(x.x*v.y-v.x*x.y);isFinite(F)&&(g.copy(f).multiplyScalar(v.y).addScaledVector(d,-x.y).multiplyScalar(F),_.copy(d).multiplyScalar(x.x).addScaledVector(f,-v.x).multiplyScalar(F),a[O].add(g),a[y].add(g),a[M].add(g),h[O].add(_),h[y].add(_),h[M].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let O=0,y=w.length;O<y;++O){const M=w[O],F=M.start,V=M.count;for(let X=F,$=F+V;X<$;X+=3)c(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const A=new N,T=new N,D=new N,P=new N;function L(O){D.fromBufferAttribute(s,O),P.copy(D);const y=a[O];A.copy(y),A.sub(D.multiplyScalar(D.dot(y))).normalize(),T.crossVectors(P,y);const F=T.dot(h[O])<0?-1:1;o.setXYZW(O,A.x,A.y,A.z,F)}for(let O=0,y=w.length;O<y;++O){const M=w[O],F=M.start,V=M.count;for(let X=F,$=F+V;X<$;X+=3)L(t.getX(X+0)),L(t.getX(X+1)),L(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,x=n.count;m<x;m++)n.setXYZ(m,0,0,0);const s=new N,r=new N,o=new N,a=new N,h=new N,l=new N,f=new N,d=new N;if(t)for(let m=0,x=t.count;m<x;m+=3){const v=t.getX(m+0),g=t.getX(m+1),_=t.getX(m+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),f.subVectors(o,r),d.subVectors(s,r),f.cross(d),a.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),a.add(f),h.add(f),l.add(f),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,h.x,h.y,h.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let m=0,x=e.count;m<x;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),f.subVectors(o,r),d.subVectors(s,r),f.cross(d),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,h){const l=a.array,f=a.itemSize,d=a.normalized,m=new l.constructor(h.length*f);let x=0,v=0;for(let g=0,_=h.length;g<_;g++){a.isInterleavedBufferAttribute?x=h[g]*a.data.stride+a.offset:x=h[g]*f;for(let c=0;c<f;c++)m[v++]=l[x++]}return new ze(m,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,s=this.attributes;for(const a in s){const h=s[a],l=t(h,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const h=[],l=r[a];for(let f=0,d=l.length;f<d;f++){const m=l[f],x=t(m,n);h.push(x)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const l=n[h];t.data.attributes[h]=l.toJSON(t.data)}const s={};let r=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],f=[];for(let d=0,m=l.length;d<m;d++){const x=l[d];f.push(x.toJSON(t.data))}f.length>0&&(s[h]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const f=s[l];this.setAttribute(l,f.clone(e))}const r=t.morphAttributes;for(const l in r){const f=[],d=r[l];for(let m=0,x=d.length;m<x;m++)f.push(d[m].clone(e));this.morphAttributes[l]=f}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,f=o.length;l<f;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const io=new se,Rn=new Ls,Qi=new xi,so=new N,ts=new N,es=new N,ns=new N,ir=new N,is=new N,ro=new N,ss=new N;class ue extends pe{constructor(t=new xe,e=new Is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){is.set(0,0,0);for(let h=0,l=r.length;h<l;h++){const f=a[h],d=r[h];f!==0&&(ir.fromBufferAttribute(d,t),o?is.addScaledVector(ir,f):is.addScaledVector(ir.sub(e),f))}e.add(is)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(r),Rn.copy(t.ray).recast(t.near),!(Qi.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(Qi,so)===null||Rn.origin.distanceToSquared(so)>(t.far-t.near)**2))&&(io.copy(r).invert(),Rn.copy(t.ray).applyMatrix4(io),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,d=r.attributes.normal,m=r.groups,x=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=m.length;v<g;v++){const _=m[v],c=o[_.materialIndex],w=Math.max(_.start,x.start),A=Math.min(a.count,Math.min(_.start+_.count,x.start+x.count));for(let T=w,D=A;T<D;T+=3){const P=a.getX(T),L=a.getX(T+1),O=a.getX(T+2);s=rs(this,c,t,n,l,f,d,P,L,O),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const v=Math.max(0,x.start),g=Math.min(a.count,x.start+x.count);for(let _=v,c=g;_<c;_+=3){const w=a.getX(_),A=a.getX(_+1),T=a.getX(_+2);s=rs(this,o,t,n,l,f,d,w,A,T),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let v=0,g=m.length;v<g;v++){const _=m[v],c=o[_.materialIndex],w=Math.max(_.start,x.start),A=Math.min(h.count,Math.min(_.start+_.count,x.start+x.count));for(let T=w,D=A;T<D;T+=3){const P=T,L=T+1,O=T+2;s=rs(this,c,t,n,l,f,d,P,L,O),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const v=Math.max(0,x.start),g=Math.min(h.count,x.start+x.count);for(let _=v,c=g;_<c;_+=3){const w=_,A=_+1,T=_+2;s=rs(this,o,t,n,l,f,d,w,A,T),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}}function Qc(i,t,e,n,s,r,o,a){let h;if(t.side===Te?h=n.intersectTriangle(o,r,s,!0,a):h=n.intersectTriangle(s,r,o,t.side===En,a),h===null)return null;ss.copy(a),ss.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ss);return l<e.near||l>e.far?null:{distance:l,point:ss.clone(),object:i}}function rs(i,t,e,n,s,r,o,a,h,l){i.getVertexPosition(a,ts),i.getVertexPosition(h,es),i.getVertexPosition(l,ns);const f=Qc(i,t,e,n,ts,es,ns,ro);if(f){const d=new N;Ge.getBarycoord(ro,ts,es,ns,d),s&&(f.uv=Ge.getInterpolatedAttribute(s,a,h,l,d,new It)),r&&(f.uv1=Ge.getInterpolatedAttribute(r,a,h,l,d,new It)),o&&(f.normal=Ge.getInterpolatedAttribute(o,a,h,l,d,new N),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const m={a,b:h,c:l,normal:new N,materialIndex:0};Ge.getNormal(ts,es,ns,m.normal),f.face=m,f.barycoord=d}return f}class Vn extends xe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const h=[],l=[],f=[],d=[];let m=0,x=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(d,2));function v(g,_,c,w,A,T,D,P,L,O,y){const M=T/L,F=D/O,V=T/2,X=D/2,$=P/2,J=L+1,q=O+1;let at=0,j=0;const ut=new N;for(let gt=0;gt<q;gt++){const bt=gt*F-X;for(let Dt=0;Dt<J;Dt++){const Wt=Dt*M-V;ut[g]=Wt*w,ut[_]=bt*A,ut[c]=$,l.push(ut.x,ut.y,ut.z),ut[g]=0,ut[_]=0,ut[c]=P>0?1:-1,f.push(ut.x,ut.y,ut.z),d.push(Dt/L),d.push(1-gt/O),at+=1}}for(let gt=0;gt<O;gt++)for(let bt=0;bt<L;bt++){const Dt=m+bt+J*gt,Wt=m+bt+J*(gt+1),Ot=m+(bt+1)+J*(gt+1),qt=m+(bt+1)+J*gt;h.push(Dt,Wt,qt),h.push(Wt,Ot,qt),j+=6}a.addGroup(x,j,y),x+=j,m+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ye(i){const t={};for(let e=0;e<i.length;e++){const n=mi(i[e]);for(const s in n)t[s]=n[s]}return t}function th(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ul(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const eh={clone:mi,merge:ye};var nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nh,this.fragmentShader=ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mi(t.uniforms),this.uniformsGroups=th(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class dl extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=$e,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pn=new N,ao=new It,oo=new It;class Ie extends dl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Di*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(Di*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pn.x,pn.y).multiplyScalar(-t/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pn.x,pn.y).multiplyScalar(-t/pn.z)}getViewSize(t,e){return this.getViewBounds(t,ao,oo),e.subVectors(oo,ao)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Di*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/h,e-=o.offsetY*n/l,s*=o.width/h,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ei=-90,ni=1;class sh extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ie(ei,ni,t,e);s.layers=this.layers,this.add(s);const r=new Ie(ei,ni,t,e);r.layers=this.layers,this.add(r);const o=new Ie(ei,ni,t,e);o.layers=this.layers,this.add(o);const a=new Ie(ei,ni,t,e);a.layers=this.layers,this.add(a);const h=new Ie(ei,ni,t,e);h.layers=this.layers,this.add(h);const l=new Ie(ei,ni,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,h]=e;for(const l of e)this.remove(l);if(t===$e)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,h,l,f]=this.children,d=t.getRenderTarget(),m=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,h),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,f),t.setRenderTarget(d,m,x),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class fl extends be{constructor(t=[],e=di,n,s,r,o,a,h,l,f){super(t,e,n,s,r,o,a,h,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rh extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new fl(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vn(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:Mn});r.uniforms.tEquirect.value=e;const o=new ue(s,r),a=e.minFilter;return e.minFilter===Fn&&(e.minFilter=Ke),new sh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class vn extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ah={type:"move"};class sr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const _=e.getJointPose(g,n),c=this._getHandJoint(l,g);_!==null&&(c.matrix.fromArray(_.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=_.radius),c.visible=_!==null}const f=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],m=f.position.distanceTo(d.position),x=.02,v=.005;l.inputState.pinching&&m>x+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&m<=x-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ah)))}return a!==null&&(a.visible=s!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ma{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new Ma(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pl extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new We,this.environmentIntensity=1,this.environmentRotation=new We,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ml extends be{constructor(t=null,e=1,n=1,s,r,o,a,h,l=Ue,f=Ue,d,m){super(null,o,a,h,l,f,s,r,d,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lo extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ii=new se,co=new se,as=[],ho=new Je,oh=new se,Ai=new ue,wi=new xi;class _l extends ue{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new lo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,oh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Je),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ii),ho.copy(t.boundingBox).applyMatrix4(ii),this.boundingBox.union(ho)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ii),wi.copy(t.boundingSphere).applyMatrix4(ii),this.boundingSphere.union(wi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ai.geometry=this.geometry,Ai.material=this.material,Ai.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wi.copy(this.boundingSphere),wi.applyMatrix4(n),t.ray.intersectsSphere(wi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ii),co.multiplyMatrices(n,ii),Ai.matrixWorld=co,Ai.raycast(t,as);for(let o=0,a=as.length;o<a;o++){const h=as[o];h.instanceId=r,h.object=this,e.push(h)}as.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new lo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ml(new Float32Array(s*this.count),s,this.count,da,Ze));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,h=s*t;r[h]=a,r.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rr=new N,lh=new N,ch=new kt;class mn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=rr.subVectors(n,e).cross(lh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(rr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ch.getNormalMatrix(t),s=this.coplanarPoint(rr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cn=new xi,hh=new It(.5,.5),os=new N;class Sa{constructor(t=new mn,e=new mn,n=new mn,s=new mn,r=new mn,o=new mn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$e,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],h=r[2],l=r[3],f=r[4],d=r[5],m=r[6],x=r[7],v=r[8],g=r[9],_=r[10],c=r[11],w=r[12],A=r[13],T=r[14],D=r[15];if(s[0].setComponents(l-o,x-f,c-v,D-w).normalize(),s[1].setComponents(l+o,x+f,c+v,D+w).normalize(),s[2].setComponents(l+a,x+d,c+g,D+A).normalize(),s[3].setComponents(l-a,x-d,c-g,D-A).normalize(),n)s[4].setComponents(h,m,_,T).normalize(),s[5].setComponents(l-h,x-m,c-_,D-T).normalize();else if(s[4].setComponents(l-h,x-m,c-_,D-T).normalize(),e===$e)s[5].setComponents(l+h,x+m,c+_,D+T).normalize();else if(e===ys)s[5].setComponents(h,m,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(t){Cn.center.set(0,0,0);const e=hh.distanceTo(t.center);return Cn.radius=.7071067811865476+e,Cn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(os.x=s.normal.x>0?t.max.x:t.min.x,os.y=s.normal.y>0?t.max.y:t.min.y,os.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ea extends Hn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const bs=new N,As=new N,uo=new se,Ri=new Ls,ls=new xi,ar=new N,fo=new N;class uh extends pe{constructor(t=new xe,e=new Ea){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)bs.fromBufferAttribute(e,s-1),As.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=bs.distanceTo(As);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(s),ls.radius+=r,t.ray.intersectsSphere(ls)===!1)return;uo.copy(s).invert(),Ri.copy(t.ray).applyMatrix4(uo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){const x=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let g=x,_=v-1;g<_;g+=l){const c=f.getX(g),w=f.getX(g+1),A=cs(this,t,Ri,h,c,w,g);A&&e.push(A)}if(this.isLineLoop){const g=f.getX(v-1),_=f.getX(x),c=cs(this,t,Ri,h,g,_,v-1);c&&e.push(c)}}else{const x=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let g=x,_=v-1;g<_;g+=l){const c=cs(this,t,Ri,h,g,g+1,g);c&&e.push(c)}if(this.isLineLoop){const g=cs(this,t,Ri,h,v-1,x,v-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function cs(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(bs.fromBufferAttribute(a,s),As.fromBufferAttribute(a,r),e.distanceSqToSegment(bs,As,ar,fo)>n)return;ar.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ar);if(!(l<t.near||l>t.far))return{distance:l,point:fo.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const po=new N,mo=new N;class gl extends uh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)po.fromBufferAttribute(e,s),mo.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+po.distanceTo(mo);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xl extends be{constructor(t,e,n=On,s,r,o,a=Ue,h=Ue,l,f=Fi,d=1){if(f!==Fi&&f!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:t,height:e,depth:d};super(m,s,r,o,a,h,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class vl extends be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ya extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],h=[],l=new N,f=new It;o.push(0,0,0),a.push(0,0,1),h.push(.5,.5);for(let d=0,m=3;d<=e;d++,m+=3){const x=n+d/e*s;l.x=t*Math.cos(x),l.y=t*Math.sin(x),o.push(l.x,l.y,l.z),a.push(0,0,1),f.x=(o[m]/t+1)/2,f.y=(o[m+1]/t+1)/2,h.push(f.x,f.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ya(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class _i extends xe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:h};const l=this;s=Math.floor(s),r=Math.floor(r);const f=[],d=[],m=[],x=[];let v=0;const g=[],_=n/2;let c=0;w(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(f),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(m,3)),this.setAttribute("uv",new Jt(x,2));function w(){const T=new N,D=new N;let P=0;const L=(e-t)/n;for(let O=0;O<=r;O++){const y=[],M=O/r,F=M*(e-t)+t;for(let V=0;V<=s;V++){const X=V/s,$=X*h+a,J=Math.sin($),q=Math.cos($);D.x=F*J,D.y=-M*n+_,D.z=F*q,d.push(D.x,D.y,D.z),T.set(J,L,q).normalize(),m.push(T.x,T.y,T.z),x.push(X,1-M),y.push(v++)}g.push(y)}for(let O=0;O<s;O++)for(let y=0;y<r;y++){const M=g[y][O],F=g[y+1][O],V=g[y+1][O+1],X=g[y][O+1];(t>0||y!==0)&&(f.push(M,F,X),P+=3),(e>0||y!==r-1)&&(f.push(F,V,X),P+=3)}l.addGroup(c,P,0),c+=P}function A(T){const D=v,P=new It,L=new N;let O=0;const y=T===!0?t:e,M=T===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,_*M,0),m.push(0,M,0),x.push(.5,.5),v++;const F=v;for(let V=0;V<=s;V++){const $=V/s*h+a,J=Math.cos($),q=Math.sin($);L.x=y*q,L.y=_*M,L.z=y*J,d.push(L.x,L.y,L.z),m.push(0,M,0),P.x=J*.5+.5,P.y=q*.5*M+.5,x.push(P.x,P.y),v++}for(let V=0;V<s;V++){const X=D+V,$=F+V;T===!0?f.push($,$+1,X):f.push($+1,$,X),O+=3}l.addGroup(c,O,T===!0?1:2),c+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ws extends _i{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ws(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ta extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),f(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const A=new N,T=new N,D=new N;for(let P=0;P<e.length;P+=3)x(e[P+0],A),x(e[P+1],T),x(e[P+2],D),h(A,T,D,w)}function h(w,A,T,D){const P=D+1,L=[];for(let O=0;O<=P;O++){L[O]=[];const y=w.clone().lerp(T,O/P),M=A.clone().lerp(T,O/P),F=P-O;for(let V=0;V<=F;V++)V===0&&O===P?L[O][V]=y:L[O][V]=y.clone().lerp(M,V/F)}for(let O=0;O<P;O++)for(let y=0;y<2*(P-O)-1;y++){const M=Math.floor(y/2);y%2===0?(m(L[O][M+1]),m(L[O+1][M]),m(L[O][M])):(m(L[O][M+1]),m(L[O+1][M+1]),m(L[O+1][M]))}}function l(w){const A=new N;for(let T=0;T<r.length;T+=3)A.x=r[T+0],A.y=r[T+1],A.z=r[T+2],A.normalize().multiplyScalar(w),r[T+0]=A.x,r[T+1]=A.y,r[T+2]=A.z}function f(){const w=new N;for(let A=0;A<r.length;A+=3){w.x=r[A+0],w.y=r[A+1],w.z=r[A+2];const T=_(w)/2/Math.PI+.5,D=c(w)/Math.PI+.5;o.push(T,1-D)}v(),d()}function d(){for(let w=0;w<o.length;w+=6){const A=o[w+0],T=o[w+2],D=o[w+4],P=Math.max(A,T,D),L=Math.min(A,T,D);P>.9&&L<.1&&(A<.2&&(o[w+0]+=1),T<.2&&(o[w+2]+=1),D<.2&&(o[w+4]+=1))}}function m(w){r.push(w.x,w.y,w.z)}function x(w,A){const T=w*3;A.x=t[T+0],A.y=t[T+1],A.z=t[T+2]}function v(){const w=new N,A=new N,T=new N,D=new N,P=new It,L=new It,O=new It;for(let y=0,M=0;y<r.length;y+=9,M+=6){w.set(r[y+0],r[y+1],r[y+2]),A.set(r[y+3],r[y+4],r[y+5]),T.set(r[y+6],r[y+7],r[y+8]),P.set(o[M+0],o[M+1]),L.set(o[M+2],o[M+3]),O.set(o[M+4],o[M+5]),D.copy(w).add(A).add(T).divideScalar(3);const F=_(D);g(P,M+0,w,F),g(L,M+2,A,F),g(O,M+4,T,F)}}function g(w,A,T,D){D<0&&w.x===1&&(o[A]=w.x-1),T.x===0&&T.z===0&&(o[A]=D/2/Math.PI+.5)}function _(w){return Math.atan2(w.z,-w.x)}function c(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.vertices,t.indices,t.radius,t.details)}}class Rs extends Ta{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Rs(t.radius,t.detail)}}class vi extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),h=Math.floor(s),l=a+1,f=h+1,d=t/a,m=e/h,x=[],v=[],g=[],_=[];for(let c=0;c<f;c++){const w=c*m-o;for(let A=0;A<l;A++){const T=A*d-r;v.push(T,-w,0),g.push(0,0,1),_.push(A/a),_.push(1-c/h)}}for(let c=0;c<h;c++)for(let w=0;w<a;w++){const A=w+l*c,T=w+l*(c+1),D=w+1+l*(c+1),P=w+1+l*c;x.push(A,T,P),x.push(T,D,P)}this.setIndex(x),this.setAttribute("position",new Jt(v,3)),this.setAttribute("normal",new Jt(g,3)),this.setAttribute("uv",new Jt(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.width,t.height,t.widthSegments,t.heightSegments)}}class ba extends xe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],h=[],l=[],f=[];let d=t;const m=(e-t)/s,x=new N,v=new It;for(let g=0;g<=s;g++){for(let _=0;_<=n;_++){const c=r+_/n*o;x.x=d*Math.cos(c),x.y=d*Math.sin(c),h.push(x.x,x.y,x.z),l.push(0,0,1),v.x=(x.x/e+1)/2,v.y=(x.y/e+1)/2,f.push(v.x,v.y)}d+=m}for(let g=0;g<s;g++){const _=g*(n+1);for(let c=0;c<n;c++){const w=c+_,A=w,T=w+n+1,D=w+n+2,P=w+1;a.push(A,T,P),a.push(T,D,P)}}this.setIndex(a),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Aa extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],h=[],l=[],f=new N,d=new N,m=new N;for(let x=0;x<=n;x++)for(let v=0;v<=s;v++){const g=v/s*r,_=x/n*Math.PI*2;d.x=(t+e*Math.cos(_))*Math.cos(g),d.y=(t+e*Math.cos(_))*Math.sin(g),d.z=e*Math.sin(_),a.push(d.x,d.y,d.z),f.x=t*Math.cos(g),f.y=t*Math.sin(g),m.subVectors(d,f).normalize(),h.push(m.x,m.y,m.z),l.push(v/s),l.push(x/n)}for(let x=1;x<=n;x++)for(let v=1;v<=s;v++){const g=(s+1)*x+v-1,_=(s+1)*(x-1)+v-1,c=(s+1)*(x-1)+v,w=(s+1)*x+v;o.push(g,_,w),o.push(_,c,w)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Cs extends Hn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dh extends Hn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_a,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fh extends Hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ph extends Hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class wa extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class mh extends wa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const or=new se,_o=new N,go=new N;class Ml{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_o.setFromMatrixPosition(t.matrixWorld),e.position.copy(_o),go.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(go),e.updateMatrixWorld(),or.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(or,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(or)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const xo=new se,Ci=new N,lr=new N;class _h extends Ml{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ci.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ci),lr.copy(n.position),lr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(lr),n.updateMatrixWorld(),s.makeTranslation(-Ci.x,-Ci.y,-Ci.z),xo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xo,n.coordinateSystem,n.reversedDepth)}}class gh extends wa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _h}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Sl extends dl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,h=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=f*this.view.offsetY,h=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class xh extends Ml{constructor(){super(new Sl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vh extends wa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new xh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Mh extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const vo=new se;class Sh{constructor(t,e,n=0,s=1/0){this.ray=new Ls(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vo),this}intersectObject(t,e=!0,n=[]){return na(t,this,n,e),n.sort(Mo),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)na(t[s],this,n,e);return n.sort(Mo),n}}function Mo(i,t){return i.distance-t.distance}function na(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)na(r[o],t,e,!0)}}class ia{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Xt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Eh extends gl{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new xe;r.setIndex(new ze(n,1)),r.setAttribute("position",new Jt(s,3)),super(r,new Ea({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class yh extends kn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function So(i,t,e,n){const s=Th(n);switch(e){case nl:return i*t;case da:return i*t/s.components*s.byteLength;case fa:return i*t/s.components*s.byteLength;case sl:return i*t*2/s.components*s.byteLength;case pa:return i*t*2/s.components*s.byteLength;case il:return i*t*3/s.components*s.byteLength;case Be:return i*t*4/s.components*s.byteLength;case ma:return i*t*4/s.components*s.byteLength;case _s:case gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xs:case vs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cr:case Dr:return Math.max(i,16)*Math.max(t,8)/4;case Rr:case Pr:return Math.max(i,8)*Math.max(t,8)/2;case Lr:case Ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Or:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Br:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case zr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case kr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Gr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case qr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case jr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Kr:case Zr:case $r:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jr:case Qr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ta:case ea:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Th(i){switch(i){case Qe:case Jo:return{byteLength:1,components:1};case Ui:case Qo:case ki:return{byteLength:2,components:1};case ha:case ua:return{byteLength:2,components:4};case On:case ca:case Ze:return{byteLength:4,components:1};case tl:case el:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oa);function El(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function bh(i){const t=new WeakMap;function e(a,h){const l=a.array,f=a.usage,d=l.byteLength,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,l,f),a.onUploadCallback();let x;if(l instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)x=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?x=i.HALF_FLOAT:x=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)x=i.SHORT;else if(l instanceof Uint32Array)x=i.UNSIGNED_INT;else if(l instanceof Int32Array)x=i.INT;else if(l instanceof Int8Array)x=i.BYTE;else if(l instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:x,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,h,l){const f=h.array,d=h.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,f);else{d.sort((x,v)=>x.start-v.start);let m=0;for(let x=1;x<d.length;x++){const v=d[m],g=d[x];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++m,d[m]=g)}d.length=m+1;for(let x=0,v=d.length;x<v;x++){const g=d[x];i.bufferSubData(l,g.start*f.BYTES_PER_ELEMENT,f,g.start,g.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const h=t.get(a);h&&(i.deleteBuffer(h.buffer),t.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,h));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,h),l.version=a.version}}return{get:s,remove:r,update:o}}var Ah=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ch=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ph=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ih=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Oh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$h=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nu="gl_FragColor = linearToOutputTexel( gl_FragColor );",iu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,su=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,au=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,du=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Su=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Au=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ru=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Du=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ou=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ku=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ju=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ku=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$u=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ju=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,td=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ed=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,id=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,od=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ld=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,md=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Md=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ad=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ld=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Id=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ud=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Od=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ef=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Ah,alphahash_pars_fragment:wh,alphamap_fragment:Rh,alphamap_pars_fragment:Ch,alphatest_fragment:Ph,alphatest_pars_fragment:Dh,aomap_fragment:Lh,aomap_pars_fragment:Ih,batching_pars_vertex:Uh,batching_vertex:Nh,begin_vertex:Fh,beginnormal_vertex:Oh,bsdfs:Bh,iridescence_fragment:zh,bumpmap_pars_fragment:kh,clipping_planes_fragment:Hh,clipping_planes_pars_fragment:Vh,clipping_planes_pars_vertex:Gh,clipping_planes_vertex:Wh,color_fragment:Xh,color_pars_fragment:Yh,color_pars_vertex:qh,color_vertex:jh,common:Kh,cube_uv_reflection_fragment:Zh,defaultnormal_vertex:$h,displacementmap_pars_vertex:Jh,displacementmap_vertex:Qh,emissivemap_fragment:tu,emissivemap_pars_fragment:eu,colorspace_fragment:nu,colorspace_pars_fragment:iu,envmap_fragment:su,envmap_common_pars_fragment:ru,envmap_pars_fragment:au,envmap_pars_vertex:ou,envmap_physical_pars_fragment:xu,envmap_vertex:lu,fog_vertex:cu,fog_pars_vertex:hu,fog_fragment:uu,fog_pars_fragment:du,gradientmap_pars_fragment:fu,lightmap_pars_fragment:pu,lights_lambert_fragment:mu,lights_lambert_pars_fragment:_u,lights_pars_begin:gu,lights_toon_fragment:vu,lights_toon_pars_fragment:Mu,lights_phong_fragment:Su,lights_phong_pars_fragment:Eu,lights_physical_fragment:yu,lights_physical_pars_fragment:Tu,lights_fragment_begin:bu,lights_fragment_maps:Au,lights_fragment_end:wu,logdepthbuf_fragment:Ru,logdepthbuf_pars_fragment:Cu,logdepthbuf_pars_vertex:Pu,logdepthbuf_vertex:Du,map_fragment:Lu,map_pars_fragment:Iu,map_particle_fragment:Uu,map_particle_pars_fragment:Nu,metalnessmap_fragment:Fu,metalnessmap_pars_fragment:Ou,morphinstance_vertex:Bu,morphcolor_vertex:zu,morphnormal_vertex:ku,morphtarget_pars_vertex:Hu,morphtarget_vertex:Vu,normal_fragment_begin:Gu,normal_fragment_maps:Wu,normal_pars_fragment:Xu,normal_pars_vertex:Yu,normal_vertex:qu,normalmap_pars_fragment:ju,clearcoat_normal_fragment_begin:Ku,clearcoat_normal_fragment_maps:Zu,clearcoat_pars_fragment:$u,iridescence_pars_fragment:Ju,opaque_fragment:Qu,packing:td,premultiplied_alpha_fragment:ed,project_vertex:nd,dithering_fragment:id,dithering_pars_fragment:sd,roughnessmap_fragment:rd,roughnessmap_pars_fragment:ad,shadowmap_pars_fragment:od,shadowmap_pars_vertex:ld,shadowmap_vertex:cd,shadowmask_pars_fragment:hd,skinbase_vertex:ud,skinning_pars_vertex:dd,skinning_vertex:fd,skinnormal_vertex:pd,specularmap_fragment:md,specularmap_pars_fragment:_d,tonemapping_fragment:gd,tonemapping_pars_fragment:xd,transmission_fragment:vd,transmission_pars_fragment:Md,uv_pars_fragment:Sd,uv_pars_vertex:Ed,uv_vertex:yd,worldpos_vertex:Td,background_vert:bd,background_frag:Ad,backgroundCube_vert:wd,backgroundCube_frag:Rd,cube_vert:Cd,cube_frag:Pd,depth_vert:Dd,depth_frag:Ld,distanceRGBA_vert:Id,distanceRGBA_frag:Ud,equirect_vert:Nd,equirect_frag:Fd,linedashed_vert:Od,linedashed_frag:Bd,meshbasic_vert:zd,meshbasic_frag:kd,meshlambert_vert:Hd,meshlambert_frag:Vd,meshmatcap_vert:Gd,meshmatcap_frag:Wd,meshnormal_vert:Xd,meshnormal_frag:Yd,meshphong_vert:qd,meshphong_frag:jd,meshphysical_vert:Kd,meshphysical_frag:Zd,meshtoon_vert:$d,meshtoon_frag:Jd,points_vert:Qd,points_frag:tf,shadow_vert:ef,shadow_frag:nf,sprite_vert:sf,sprite_frag:rf},xt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},qe={basic:{uniforms:ye([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:ye([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:ye([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:ye([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:ye([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:ye([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:ye([xt.points,xt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:ye([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:ye([xt.common,xt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:ye([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:ye([xt.sprite,xt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:ye([xt.common,xt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:ye([xt.lights,xt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};qe.physical={uniforms:ye([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const hs={r:0,b:0,g:0},Pn=new We,af=new se;function of(i,t,e,n,s,r,o){const a=new Ht(0);let h=r===!0?0:1,l,f,d=null,m=0,x=null;function v(A){let T=A.isScene===!0?A.background:null;return T&&T.isTexture&&(T=(A.backgroundBlurriness>0?e:t).get(T)),T}function g(A){let T=!1;const D=v(A);D===null?c(a,h):D&&D.isColor&&(c(D,1),T=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(A,T){const D=v(T);D&&(D.isCubeTexture||D.mapping===Ds)?(f===void 0&&(f=new ue(new Vn(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:mi(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),Pn.copy(T.backgroundRotation),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),f.material.uniforms.envMap.value=D,f.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(af.makeRotationFromEuler(Pn)),f.material.toneMapped=Zt.getTransfer(D.colorSpace)!==te,(d!==D||m!==D.version||x!==i.toneMapping)&&(f.material.needsUpdate=!0,d=D,m=D.version,x=i.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new ue(new vi(2,2),new yn({name:"BackgroundMaterial",uniforms:mi(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(D.colorSpace)!==te,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||m!==D.version||x!==i.toneMapping)&&(l.material.needsUpdate=!0,d=D,m=D.version,x=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function c(A,T){A.getRGB(hs,ul(i)),n.buffers.color.setClear(hs.r,hs.g,hs.b,T,o)}function w(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,T=1){a.set(A),h=T,c(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(A){h=A,c(a,h)},render:g,addToRenderList:_,dispose:w}}function lf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null);let r=s,o=!1;function a(M,F,V,X,$){let J=!1;const q=d(X,V,F);r!==q&&(r=q,l(r.object)),J=x(M,X,V,$),J&&v(M,X,V,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,T(M,F,V,X),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function h(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function f(M){return i.deleteVertexArray(M)}function d(M,F,V){const X=V.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let J=$[F.id];J===void 0&&(J={},$[F.id]=J);let q=J[X];return q===void 0&&(q=m(h()),J[X]=q),q}function m(M){const F=[],V=[],X=[];for(let $=0;$<e;$++)F[$]=0,V[$]=0,X[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:X,object:M,attributes:{},index:null}}function x(M,F,V,X){const $=r.attributes,J=F.attributes;let q=0;const at=V.getAttributes();for(const j in at)if(at[j].location>=0){const gt=$[j];let bt=J[j];if(bt===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(bt=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(bt=M.instanceColor)),gt===void 0||gt.attribute!==bt||bt&&gt.data!==bt.data)return!0;q++}return r.attributesNum!==q||r.index!==X}function v(M,F,V,X){const $={},J=F.attributes;let q=0;const at=V.getAttributes();for(const j in at)if(at[j].location>=0){let gt=J[j];gt===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor));const bt={};bt.attribute=gt,gt&&gt.data&&(bt.data=gt.data),$[j]=bt,q++}r.attributes=$,r.attributesNum=q,r.index=X}function g(){const M=r.newAttributes;for(let F=0,V=M.length;F<V;F++)M[F]=0}function _(M){c(M,0)}function c(M,F){const V=r.newAttributes,X=r.enabledAttributes,$=r.attributeDivisors;V[M]=1,X[M]===0&&(i.enableVertexAttribArray(M),X[M]=1),$[M]!==F&&(i.vertexAttribDivisor(M,F),$[M]=F)}function w(){const M=r.newAttributes,F=r.enabledAttributes;for(let V=0,X=F.length;V<X;V++)F[V]!==M[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function A(M,F,V,X,$,J,q){q===!0?i.vertexAttribIPointer(M,F,V,$,J):i.vertexAttribPointer(M,F,V,X,$,J)}function T(M,F,V,X){g();const $=X.attributes,J=V.getAttributes(),q=F.defaultAttributeValues;for(const at in J){const j=J[at];if(j.location>=0){let ut=$[at];if(ut===void 0&&(at==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),at==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor)),ut!==void 0){const gt=ut.normalized,bt=ut.itemSize,Dt=t.get(ut);if(Dt===void 0)continue;const Wt=Dt.buffer,Ot=Dt.type,qt=Dt.bytesPerElement,tt=Ot===i.INT||Ot===i.UNSIGNED_INT||ut.gpuType===ca;if(ut.isInterleavedBufferAttribute){const nt=ut.data,Et=nt.stride,mt=ut.offset;if(nt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<j.locationSize;Mt++)c(j.location+Mt,nt.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Mt=0;Mt<j.locationSize;Mt++)_(j.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Mt=0;Mt<j.locationSize;Mt++)A(j.location+Mt,bt/j.locationSize,Ot,gt,Et*qt,(mt+bt/j.locationSize*Mt)*qt,tt)}else{if(ut.isInstancedBufferAttribute){for(let nt=0;nt<j.locationSize;nt++)c(j.location+nt,ut.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let nt=0;nt<j.locationSize;nt++)_(j.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let nt=0;nt<j.locationSize;nt++)A(j.location+nt,bt/j.locationSize,Ot,gt,bt*qt,bt/j.locationSize*nt*qt,tt)}}else if(q!==void 0){const gt=q[at];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(j.location,gt);break;case 3:i.vertexAttrib3fv(j.location,gt);break;case 4:i.vertexAttrib4fv(j.location,gt);break;default:i.vertexAttrib1fv(j.location,gt)}}}}w()}function D(){O();for(const M in n){const F=n[M];for(const V in F){const X=F[V];for(const $ in X)f(X[$].object),delete X[$];delete F[V]}delete n[M]}}function P(M){if(n[M.id]===void 0)return;const F=n[M.id];for(const V in F){const X=F[V];for(const $ in X)f(X[$].object),delete X[$];delete F[V]}delete n[M.id]}function L(M){for(const F in n){const V=n[F];if(V[M.id]===void 0)continue;const X=V[M.id];for(const $ in X)f(X[$].object),delete X[$];delete V[M.id]}}function O(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:_,disableUnusedAttributes:w}}function cf(i,t,e){let n;function s(l){n=l}function r(l,f){i.drawArrays(n,l,f),e.update(f,n,1)}function o(l,f,d){d!==0&&(i.drawArraysInstanced(n,l,f,d),e.update(f,n,d))}function a(l,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,d);let x=0;for(let v=0;v<d;v++)x+=f[v];e.update(x,n,1)}function h(l,f,d,m){if(d===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<l.length;v++)o(l[v],f[v],m[v]);else{x.multiDrawArraysInstancedWEBGL(n,l,0,f,0,m,0,d);let v=0;for(let g=0;g<d;g++)v+=f[g]*m[g];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function hf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Be&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const O=L===ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Qe&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Ze&&!O)}function h(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const f=h(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const d=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),c=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=v>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:_,maxAttributes:c,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:T,vertexTextures:D,maxSamples:P}}function uf(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new mn,a=new kt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const x=d.length!==0||m||n!==0||s;return s=m,n=d.length,x},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,m){e=f(d,m,0)},this.setState=function(d,m,x){const v=d.clippingPlanes,g=d.clipIntersection,_=d.clipShadows,c=i.get(d);if(!s||v===null||v.length===0||r&&!_)r?f(null):l();else{const w=r?0:n,A=w*4;let T=c.clippingState||null;h.value=T,T=f(v,m,A,x);for(let D=0;D!==A;++D)T[D]=e[D];c.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(d,m,x,v){const g=d!==null?d.length:0;let _=null;if(g!==0){if(_=h.value,v!==!0||_===null){const c=x+g*4,w=m.matrixWorldInverse;a.getNormalMatrix(w),(_===null||_.length<c)&&(_=new Float32Array(c));for(let A=0,T=x;A!==g;++A,T+=4)o.copy(d[A]).applyMatrix4(w,a),o.normal.toArray(_,T),_[T+3]=o.constant}h.value=_,h.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,_}}function df(i){let t=new WeakMap;function e(o,a){return a===br?o.mapping=di:a===Ar&&(o.mapping=fi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===br||a===Ar)if(t.has(o)){const h=t.get(o).texture;return e(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const l=new rh(h.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const oi=4,Eo=[.125,.215,.35,.446,.526,.582],Un=20,cr=new Sl,yo=new Ht;let hr=null,ur=0,dr=0,fr=!1;const Ln=(1+Math.sqrt(5))/2,si=1/Ln,To=[new N(-Ln,si,0),new N(Ln,si,0),new N(-si,0,Ln),new N(si,0,Ln),new N(0,Ln,-si),new N(0,Ln,si),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],ff=new N;class sa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=ff}=r;hr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),dr=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hr,ur,dr),this._renderer.xr.enabled=fr,t.scissorTest=!1,us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===di||t.mapping===fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),dr=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:ki,format:Be,colorSpace:pi,depthBuffer:!1},s=bo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pf(r)),this._blurMaterial=mf(r,t,e)}return s}_compileMaterial(t){const e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,cr)}_sceneToCubeUV(t,e,n,s,r){const h=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,x=d.toneMapping;d.getClearColor(yo),d.toneMapping=Sn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const g=new Is({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),_=new ue(new Vn,g);let c=!1;const w=t.background;w?w.isColor&&(g.color.copy(w),t.background=null,c=!0):(g.color.copy(yo),c=!0);for(let A=0;A<6;A++){const T=A%3;T===0?(h.up.set(0,l[A],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+f[A],r.y,r.z)):T===1?(h.up.set(0,0,l[A]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+f[A],r.z)):(h.up.set(0,l[A],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+f[A]));const D=this._cubeSize;us(s,T*D,A>2?D:0,D,D),d.setRenderTarget(s),c&&d.render(_,h),d.render(t,h)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=x,d.autoClear=m,t.background=w}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===di||t.mapping===fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ao());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ue(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const h=this._cubeSize;us(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,cr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=To[(s-r-1)%To.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const h=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new ue(this._lodPlanes[s],l),m=l.uniforms,x=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*x):2*Math.PI/(2*Un-1),g=r/v,_=isFinite(r)?1+Math.floor(f*g):Un;_>Un&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Un}`);const c=[];let w=0;for(let L=0;L<Un;++L){const O=L/g,y=Math.exp(-O*O/2);c.push(y),L===0?w+=y:L<_&&(w+=2*y)}for(let L=0;L<c.length;L++)c[L]=c[L]/w;m.envMap.value=t.texture,m.samples.value=_,m.weights.value=c,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:A}=this;m.dTheta.value=v,m.mipInt.value=A-n;const T=this._sizeLods[s],D=3*T*(s>A-oi?s-A+oi:0),P=4*(this._cubeSize-T);us(e,D,P,3*T,2*T),h.setRenderTarget(e),h.render(d,cr)}}function pf(i){const t=[],e=[],n=[];let s=i;const r=i-oi+1+Eo.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let h=1/a;o>i-oi?h=Eo[o-i+oi-1]:o===0&&(h=0),n.push(h);const l=1/(a-2),f=-l,d=1+l,m=[f,f,d,f,d,d,f,f,d,d,f,d],x=6,v=6,g=3,_=2,c=1,w=new Float32Array(g*v*x),A=new Float32Array(_*v*x),T=new Float32Array(c*v*x);for(let P=0;P<x;P++){const L=P%3*2/3-1,O=P>2?0:-1,y=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];w.set(y,g*v*P),A.set(m,_*v*P);const M=[P,P,P,P,P,P];T.set(M,c*v*P)}const D=new xe;D.setAttribute("position",new ze(w,g)),D.setAttribute("uv",new ze(A,_)),D.setAttribute("faceIndex",new ze(T,c)),t.push(D),s>oi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bo(i,t,e){const n=new zn(i,t,e);return n.texture.mapping=Ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function mf(i,t,e){const n=new Float32Array(Un),s=new N(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ao(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function wo(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ra(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _f(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const h=a.mapping,l=h===br||h===Ar,f=h===di||h===fi;if(l||f){let d=t.get(a);const m=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new sa(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const x=a.image;return l&&x&&x.height>0||f&&x&&s(x)?(e===null&&(e=new sa(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let h=0;const l=6;for(let f=0;f<l;f++)a[f]!==void 0&&h++;return h===l}function r(a){const h=a.target;h.removeEventListener("dispose",r);const l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function gf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&zi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xf(i,t,e,n){const s={},r=new WeakMap;function o(d){const m=d.target;m.index!==null&&t.remove(m.index);for(const v in m.attributes)t.remove(m.attributes[v]);m.removeEventListener("dispose",o),delete s[m.id];const x=r.get(m);x&&(t.remove(x),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(d,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,e.memory.geometries++),m}function h(d){const m=d.attributes;for(const x in m)t.update(m[x],i.ARRAY_BUFFER)}function l(d){const m=[],x=d.index,v=d.attributes.position;let g=0;if(x!==null){const w=x.array;g=x.version;for(let A=0,T=w.length;A<T;A+=3){const D=w[A+0],P=w[A+1],L=w[A+2];m.push(D,P,P,L,L,D)}}else if(v!==void 0){const w=v.array;g=v.version;for(let A=0,T=w.length/3-1;A<T;A+=3){const D=A+0,P=A+1,L=A+2;m.push(D,P,P,L,L,D)}}else return;const _=new(al(m)?hl:cl)(m,1);_.version=g;const c=r.get(d);c&&t.remove(c),r.set(d,_)}function f(d){const m=r.get(d);if(m){const x=d.index;x!==null&&m.version<x.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:h,getWireframeAttribute:f}}function vf(i,t,e){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function h(m,x){i.drawElements(n,x,r,m*o),e.update(x,n,1)}function l(m,x,v){v!==0&&(i.drawElementsInstanced(n,x,r,m*o,v),e.update(x,n,v))}function f(m,x,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,x,0,r,m,0,v);let _=0;for(let c=0;c<v;c++)_+=x[c];e.update(_,n,1)}function d(m,x,v,g){if(v===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let c=0;c<m.length;c++)l(m[c]/o,x[c],g[c]);else{_.multiDrawElementsInstancedWEBGL(n,x,0,r,m,0,g,0,v);let c=0;for(let w=0;w<v;w++)c+=x[w]*g[w];e.update(c,n,1)}}this.setMode=s,this.setIndex=a,this.render=h,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function Mf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Sf(i,t,e){const n=new WeakMap,s=new ne;function r(o,a,h){const l=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let m=n.get(a);if(m===void 0||m.count!==d){let y=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",y)};m!==void 0&&m.texture.dispose();const x=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],c=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let A=0;x===!0&&(A=1),v===!0&&(A=2),g===!0&&(A=3);let T=a.attributes.position.count*A,D=1;T>t.maxTextureSize&&(D=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const P=new Float32Array(T*D*4*d),L=new ol(P,T,D,d);L.type=Ze,L.needsUpdate=!0;const O=A*4;for(let M=0;M<d;M++){const F=_[M],V=c[M],X=w[M],$=T*D*4*M;for(let J=0;J<F.count;J++){const q=J*O;x===!0&&(s.fromBufferAttribute(F,J),P[$+q+0]=s.x,P[$+q+1]=s.y,P[$+q+2]=s.z,P[$+q+3]=0),v===!0&&(s.fromBufferAttribute(V,J),P[$+q+4]=s.x,P[$+q+5]=s.y,P[$+q+6]=s.z,P[$+q+7]=0),g===!0&&(s.fromBufferAttribute(X,J),P[$+q+8]=s.x,P[$+q+9]=s.y,P[$+q+10]=s.z,P[$+q+11]=X.itemSize===4?s.w:1)}}m={count:d,texture:L,size:new It(T,D)},n.set(a,m),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let x=0;for(let g=0;g<l.length;g++)x+=l[g];const v=a.morphTargetsRelative?1:1-x;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",l)}h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function Ef(i,t,e,n){let s=new WeakMap;function r(h){const l=n.render.frame,f=h.geometry,d=t.get(h,f);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),s.get(h)!==l&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,l))),h.isSkinnedMesh){const m=h.skeleton;s.get(m)!==l&&(m.update(),s.set(m,l))}return d}function o(){s=new WeakMap}function a(h){const l=h.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const yl=new be,Ro=new xl(1,1),Tl=new ol,bl=new Vc,Al=new fl,Co=[],Po=[],Do=new Float32Array(16),Lo=new Float32Array(9),Io=new Float32Array(4);function Mi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Co[s];if(r===void 0&&(r=new Float32Array(s),Co[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Us(i,t){let e=Po[t];e===void 0&&(e=new Int32Array(t),Po[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Tf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function bf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function Af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function wf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;Io.set(n),i.uniformMatrix2fv(this.addr,!1,Io),_e(e,n)}}function Rf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;Lo.set(n),i.uniformMatrix3fv(this.addr,!1,Lo),_e(e,n)}}function Cf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;Do.set(n),i.uniformMatrix4fv(this.addr,!1,Do),_e(e,n)}}function Pf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function Lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function If(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function Uf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function Ff(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function Of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function Bf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ro.compareFunction=rl,r=Ro):r=yl,e.setTexture2D(t||r,s)}function zf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bl,s)}function kf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Al,s)}function Hf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Tl,s)}function Vf(i){switch(i){case 5126:return yf;case 35664:return Tf;case 35665:return bf;case 35666:return Af;case 35674:return wf;case 35675:return Rf;case 35676:return Cf;case 5124:case 35670:return Pf;case 35667:case 35671:return Df;case 35668:case 35672:return Lf;case 35669:case 35673:return If;case 5125:return Uf;case 36294:return Nf;case 36295:return Ff;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return Bf;case 35679:case 36299:case 36307:return zf;case 35680:case 36300:case 36308:case 36293:return kf;case 36289:case 36303:case 36311:case 36292:return Hf}}function Gf(i,t){i.uniform1fv(this.addr,t)}function Wf(i,t){const e=Mi(t,this.size,2);i.uniform2fv(this.addr,e)}function Xf(i,t){const e=Mi(t,this.size,3);i.uniform3fv(this.addr,e)}function Yf(i,t){const e=Mi(t,this.size,4);i.uniform4fv(this.addr,e)}function qf(i,t){const e=Mi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jf(i,t){const e=Mi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Kf(i,t){const e=Mi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zf(i,t){i.uniform1iv(this.addr,t)}function $f(i,t){i.uniform2iv(this.addr,t)}function Jf(i,t){i.uniform3iv(this.addr,t)}function Qf(i,t){i.uniform4iv(this.addr,t)}function tp(i,t){i.uniform1uiv(this.addr,t)}function ep(i,t){i.uniform2uiv(this.addr,t)}function np(i,t){i.uniform3uiv(this.addr,t)}function ip(i,t){i.uniform4uiv(this.addr,t)}function sp(i,t,e){const n=this.cache,s=t.length,r=Us(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||yl,r[o])}function rp(i,t,e){const n=this.cache,s=t.length,r=Us(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||bl,r[o])}function ap(i,t,e){const n=this.cache,s=t.length,r=Us(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Al,r[o])}function op(i,t,e){const n=this.cache,s=t.length,r=Us(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Tl,r[o])}function lp(i){switch(i){case 5126:return Gf;case 35664:return Wf;case 35665:return Xf;case 35666:return Yf;case 35674:return qf;case 35675:return jf;case 35676:return Kf;case 5124:case 35670:return Zf;case 35667:case 35671:return $f;case 35668:case 35672:return Jf;case 35669:case 35673:return Qf;case 5125:return tp;case 36294:return ep;case 36295:return np;case 36296:return ip;case 35678:case 36198:case 36298:case 36306:case 35682:return sp;case 35679:case 36299:case 36307:return rp;case 35680:case 36300:case 36308:case 36293:return ap;case 36289:case 36303:case 36311:case 36292:return op}}class cp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vf(e.type)}}class hp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lp(e.type)}}class up{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const pr=/(\w+)(\])?(\[|\.)?/g;function Uo(i,t){i.seq.push(t),i.map[t.id]=t}function dp(i,t,e){const n=i.name,s=n.length;for(pr.lastIndex=0;;){const r=pr.exec(n),o=pr.lastIndex;let a=r[1];const h=r[2]==="]",l=r[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===s){Uo(e,l===void 0?new cp(a,i,t):new hp(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new up(a),Uo(e,d)),e=d}}}class Ms{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);dp(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],h=n[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function No(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const fp=37297;let pp=0;function mp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Fo=new kt;function _p(i){Zt._getMatrix(Fo,Zt.workingColorSpace,i);const t=`mat3( ${Fo.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case Es:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Oo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+mp(i.getShaderSource(t),a)}else return r}function gp(i,t){const e=_p(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xp(i,t){let e;switch(t){case nc:e="Linear";break;case ic:e="Reinhard";break;case sc:e="Cineon";break;case Zo:e="ACESFilmic";break;case ac:e="AgX";break;case oc:e="Neutral";break;case rc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ds=new N;function vp(){Zt.getLuminanceCoefficients(ds);const i=ds.x.toFixed(4),t=ds.y.toFixed(4),e=ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pi).join(`
`)}function Sp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ep(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Pi(i){return i!==""}function Bo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ra(i){return i.replace(yp,bp)}const Tp=new Map;function bp(i,t){let e=Gt[t];if(e===void 0){const n=Tp.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ra(e)}const Ap=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ko(i){return i.replace(Ap,wp)}function wp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ho(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ko?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===on&&(t="SHADOWMAP_TYPE_VSM"),t}function Cp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case di:case fi:t="ENVMAP_TYPE_CUBE";break;case Ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pp(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===fi&&(t="ENVMAP_MODE_REFRACTION"),t}function Dp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case la:t="ENVMAP_BLENDING_MULTIPLY";break;case tc:t="ENVMAP_BLENDING_MIX";break;case ec:t="ENVMAP_BLENDING_ADD";break}return t}function Lp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ip(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const h=Rp(e),l=Cp(e),f=Pp(e),d=Dp(e),m=Lp(e),x=Mp(e),v=Sp(r),g=s.createProgram();let _,c,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Pi).join(`
`),_.length>0&&(_+=`
`),c=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Pi).join(`
`),c.length>0&&(c+=`
`)):(_=[Ho(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),c=[Ho(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?xp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,gp("linearToOutputTexel",e.outputColorSpace),vp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pi).join(`
`)),o=ra(o),o=Bo(o,e),o=zo(o,e),a=ra(a),a=Bo(a,e),a=zo(a,e),o=ko(o),a=ko(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,c=["#define varying in",e.glslVersion===Ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const A=w+_+o,T=w+c+a,D=No(s,s.VERTEX_SHADER,A),P=No(s,s.FRAGMENT_SHADER,T);s.attachShader(g,D),s.attachShader(g,P),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function L(F){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(g)||"",X=s.getShaderInfoLog(D)||"",$=s.getShaderInfoLog(P)||"",J=V.trim(),q=X.trim(),at=$.trim();let j=!0,ut=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,D,P);else{const gt=Oo(s,D,"vertex"),bt=Oo(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+J+`
`+gt+`
`+bt)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(q===""||at==="")&&(ut=!1);ut&&(F.diagnostics={runnable:j,programLog:J,vertexShader:{log:q,prefix:_},fragmentShader:{log:at,prefix:c}})}s.deleteShader(D),s.deleteShader(P),O=new Ms(s,g),y=Ep(s,g)}let O;this.getUniforms=function(){return O===void 0&&L(this),O};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,fp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pp++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=D,this.fragmentShader=P,this}let Up=0;class Np{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fp(t),e.set(t,n)),n}}class Fp{constructor(t){this.id=Up++,this.code=t,this.usedTimes=0}}function Op(i,t,e,n,s,r,o){const a=new va,h=new Np,l=new Set,f=[],d=s.logarithmicDepthBuffer,m=s.vertexTextures;let x=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,M,F,V,X){const $=V.fog,J=X.geometry,q=y.isMeshStandardMaterial?V.environment:null,at=(y.isMeshStandardMaterial?e:t).get(y.envMap||q),j=at&&at.mapping===Ds?at.image.height:null,ut=v[y.type];y.precision!==null&&(x=s.getMaxPrecision(y.precision),x!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",x,"instead."));const gt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,bt=gt!==void 0?gt.length:0;let Dt=0;J.morphAttributes.position!==void 0&&(Dt=1),J.morphAttributes.normal!==void 0&&(Dt=2),J.morphAttributes.color!==void 0&&(Dt=3);let Wt,Ot,qt,tt;if(ut){const $t=qe[ut];Wt=$t.vertexShader,Ot=$t.fragmentShader}else Wt=y.vertexShader,Ot=y.fragmentShader,h.update(y),qt=h.getVertexShaderID(y),tt=h.getFragmentShaderID(y);const nt=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),mt=X.isInstancedMesh===!0,Mt=X.isBatchedMesh===!0,Rt=!!y.map,jt=!!y.matcap,C=!!at,Q=!!y.aoMap,dt=!!y.lightMap,ot=!!y.bumpMap,st=!!y.normalMap,Vt=!!y.displacementMap,ft=!!y.emissiveMap,Ut=!!y.metalnessMap,oe=!!y.roughnessMap,b=y.anisotropy>0,p=y.clearcoat>0,u=y.dispersion>0,E=y.iridescence>0,R=y.sheen>0,I=y.transmission>0,U=b&&!!y.anisotropyMap,G=p&&!!y.clearcoatMap,H=p&&!!y.clearcoatNormalMap,it=p&&!!y.clearcoatRoughnessMap,K=E&&!!y.iridescenceMap,Z=E&&!!y.iridescenceThicknessMap,rt=R&&!!y.sheenColorMap,Tt=R&&!!y.sheenRoughnessMap,St=!!y.specularMap,_t=!!y.specularColorMap,Nt=!!y.specularIntensityMap,B=I&&!!y.transmissionMap,ht=I&&!!y.thicknessMap,pt=!!y.gradientMap,At=!!y.alphaMap,lt=y.alphaTest>0,et=!!y.alphaHash,Ct=!!y.extensions;let zt=Sn;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(zt=i.toneMapping);const re={shaderID:ut,shaderType:y.type,shaderName:y.name,vertexShader:Wt,fragmentShader:Ot,defines:y.defines,customVertexShaderID:qt,customFragmentShaderID:tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:x,batching:Mt,batchingColor:Mt&&X._colorsTexture!==null,instancing:mt,instancingColor:mt&&X.instanceColor!==null,instancingMorph:mt&&X.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:pi,alphaToCoverage:!!y.alphaToCoverage,map:Rt,matcap:jt,envMap:C,envMapMode:C&&at.mapping,envMapCubeUVHeight:j,aoMap:Q,lightMap:dt,bumpMap:ot,normalMap:st,displacementMap:m&&Vt,emissiveMap:ft,normalMapObjectSpace:st&&y.normalMapType===uc,normalMapTangentSpace:st&&y.normalMapType===_a,metalnessMap:Ut,roughnessMap:oe,anisotropy:b,anisotropyMap:U,clearcoat:p,clearcoatMap:G,clearcoatNormalMap:H,clearcoatRoughnessMap:it,dispersion:u,iridescence:E,iridescenceMap:K,iridescenceThicknessMap:Z,sheen:R,sheenColorMap:rt,sheenRoughnessMap:Tt,specularMap:St,specularColorMap:_t,specularIntensityMap:Nt,transmission:I,transmissionMap:B,thicknessMap:ht,gradientMap:pt,opaque:y.transparent===!1&&y.blending===ci&&y.alphaToCoverage===!1,alphaMap:At,alphaTest:lt,alphaHash:et,combine:y.combine,mapUv:Rt&&g(y.map.channel),aoMapUv:Q&&g(y.aoMap.channel),lightMapUv:dt&&g(y.lightMap.channel),bumpMapUv:ot&&g(y.bumpMap.channel),normalMapUv:st&&g(y.normalMap.channel),displacementMapUv:Vt&&g(y.displacementMap.channel),emissiveMapUv:ft&&g(y.emissiveMap.channel),metalnessMapUv:Ut&&g(y.metalnessMap.channel),roughnessMapUv:oe&&g(y.roughnessMap.channel),anisotropyMapUv:U&&g(y.anisotropyMap.channel),clearcoatMapUv:G&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:H&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&g(y.sheenRoughnessMap.channel),specularMapUv:St&&g(y.specularMap.channel),specularColorMapUv:_t&&g(y.specularColorMap.channel),specularIntensityMapUv:Nt&&g(y.specularIntensityMap.channel),transmissionMapUv:B&&g(y.transmissionMap.channel),thicknessMapUv:ht&&g(y.thicknessMap.channel),alphaMapUv:At&&g(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(st||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!J.attributes.uv&&(Rt||At),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Et,skinning:X.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Dt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:Rt&&y.map.isVideoTexture===!0&&Zt.getTransfer(y.map.colorSpace)===te,decodeVideoTextureEmissive:ft&&y.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(y.emissiveMap.colorSpace)===te,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===je,flipSided:y.side===Te,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ct&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&y.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function c(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)M.push(F),M.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(w(M,y),A(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function w(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function A(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function T(y){const M=v[y.type];let F;if(M){const V=qe[M];F=eh.clone(V.uniforms)}else F=y.uniforms;return F}function D(y,M){let F;for(let V=0,X=f.length;V<X;V++){const $=f[V];if($.cacheKey===M){F=$,++F.usedTimes;break}}return F===void 0&&(F=new Ip(i,M,y,r),f.push(F)),F}function P(y){if(--y.usedTimes===0){const M=f.indexOf(y);f[M]=f[f.length-1],f.pop(),y.destroy()}}function L(y){h.remove(y)}function O(){h.dispose()}return{getParameters:_,getProgramCacheKey:c,getUniforms:T,acquireProgram:D,releaseProgram:P,releaseShaderCache:L,programs:f,dispose:O}}function Bp(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,h){i.get(o)[a]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Vo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Go(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,m,x,v,g,_){let c=i[t];return c===void 0?(c={id:d.id,object:d,geometry:m,material:x,groupOrder:v,renderOrder:d.renderOrder,z:g,group:_},i[t]=c):(c.id=d.id,c.object=d,c.geometry=m,c.material=x,c.groupOrder=v,c.renderOrder=d.renderOrder,c.z=g,c.group=_),t++,c}function a(d,m,x,v,g,_){const c=o(d,m,x,v,g,_);x.transmission>0?n.push(c):x.transparent===!0?s.push(c):e.push(c)}function h(d,m,x,v,g,_){const c=o(d,m,x,v,g,_);x.transmission>0?n.unshift(c):x.transparent===!0?s.unshift(c):e.unshift(c)}function l(d,m){e.length>1&&e.sort(d||zp),n.length>1&&n.sort(m||Vo),s.length>1&&s.sort(m||Vo)}function f(){for(let d=t,m=i.length;d<m;d++){const x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:h,finish:f,sort:l}}function kp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Go,i.set(n,[o])):s>=r.length?(o=new Go,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Ht};break;case"SpotLight":e={position:new N,direction:new N,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Vp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gp=0;function Wp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xp(i){const t=new Hp,e=Vp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new se,o=new se;function a(l){let f=0,d=0,m=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let x=0,v=0,g=0,_=0,c=0,w=0,A=0,T=0,D=0,P=0,L=0;l.sort(Wp);for(let y=0,M=l.length;y<M;y++){const F=l[y],V=F.color,X=F.intensity,$=F.distance,J=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=V.r*X,d+=V.g*X,m+=V.b*X;else if(F.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(F.sh.coefficients[q],X);L++}else if(F.isDirectionalLight){const q=t.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const at=F.shadow,j=e.get(F);j.shadowIntensity=at.intensity,j.shadowBias=at.bias,j.shadowNormalBias=at.normalBias,j.shadowRadius=at.radius,j.shadowMapSize=at.mapSize,n.directionalShadow[x]=j,n.directionalShadowMap[x]=J,n.directionalShadowMatrix[x]=F.shadow.matrix,w++}n.directional[x]=q,x++}else if(F.isSpotLight){const q=t.get(F);q.position.setFromMatrixPosition(F.matrixWorld),q.color.copy(V).multiplyScalar(X),q.distance=$,q.coneCos=Math.cos(F.angle),q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),q.decay=F.decay,n.spot[g]=q;const at=F.shadow;if(F.map&&(n.spotLightMap[D]=F.map,D++,at.updateMatrices(F),F.castShadow&&P++),n.spotLightMatrix[g]=at.matrix,F.castShadow){const j=e.get(F);j.shadowIntensity=at.intensity,j.shadowBias=at.bias,j.shadowNormalBias=at.normalBias,j.shadowRadius=at.radius,j.shadowMapSize=at.mapSize,n.spotShadow[g]=j,n.spotShadowMap[g]=J,T++}g++}else if(F.isRectAreaLight){const q=t.get(F);q.color.copy(V).multiplyScalar(X),q.halfWidth.set(F.width*.5,0,0),q.halfHeight.set(0,F.height*.5,0),n.rectArea[_]=q,_++}else if(F.isPointLight){const q=t.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),q.distance=F.distance,q.decay=F.decay,F.castShadow){const at=F.shadow,j=e.get(F);j.shadowIntensity=at.intensity,j.shadowBias=at.bias,j.shadowNormalBias=at.normalBias,j.shadowRadius=at.radius,j.shadowMapSize=at.mapSize,j.shadowCameraNear=at.camera.near,j.shadowCameraFar=at.camera.far,n.pointShadow[v]=j,n.pointShadowMap[v]=J,n.pointShadowMatrix[v]=F.shadow.matrix,A++}n.point[v]=q,v++}else if(F.isHemisphereLight){const q=t.get(F);q.skyColor.copy(F.color).multiplyScalar(X),q.groundColor.copy(F.groundColor).multiplyScalar(X),n.hemi[c]=q,c++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=m;const O=n.hash;(O.directionalLength!==x||O.pointLength!==v||O.spotLength!==g||O.rectAreaLength!==_||O.hemiLength!==c||O.numDirectionalShadows!==w||O.numPointShadows!==A||O.numSpotShadows!==T||O.numSpotMaps!==D||O.numLightProbes!==L)&&(n.directional.length=x,n.spot.length=g,n.rectArea.length=_,n.point.length=v,n.hemi.length=c,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=T+D-P,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,O.directionalLength=x,O.pointLength=v,O.spotLength=g,O.rectAreaLength=_,O.hemiLength=c,O.numDirectionalShadows=w,O.numPointShadows=A,O.numSpotShadows=T,O.numSpotMaps=D,O.numLightProbes=L,n.version=Gp++)}function h(l,f){let d=0,m=0,x=0,v=0,g=0;const _=f.matrixWorldInverse;for(let c=0,w=l.length;c<w;c++){const A=l[c];if(A.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),d++}else if(A.isSpotLight){const T=n.spot[x];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),x++}else if(A.isRectAreaLight){const T=n.rectArea[v];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(_),o.identity(),r.copy(A.matrixWorld),r.premultiply(_),o.extractRotation(r),T.halfWidth.set(A.width*.5,0,0),T.halfHeight.set(0,A.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(A.isPointLight){const T=n.point[m];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(_),m++}else if(A.isHemisphereLight){const T=n.hemi[g];T.direction.setFromMatrixPosition(A.matrixWorld),T.direction.transformDirection(_),g++}}}return{setup:a,setupView:h,state:n}}function Wo(i){const t=new Xp(i),e=[],n=[];function s(f){l.camera=f,e.length=0,n.length=0}function r(f){e.push(f)}function o(f){n.push(f)}function a(){t.setup(e)}function h(f){t.setupView(e,f)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:h,pushLight:r,pushShadow:o}}function Yp(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Wo(i),t.set(s,[a])):r>=o.length?(a=new Wo(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kp(i,t,e){let n=new Sa;const s=new It,r=new It,o=new ne,a=new fh({depthPacking:hc}),h=new ph,l={},f=e.maxTextureSize,d={[En]:Te,[Te]:En,[je]:je},m=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:qp,fragmentShader:jp}),x=m.clone();x.defines.HORIZONTAL_PASS=1;const v=new xe;v.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ue(v,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jo;let c=this.type;this.render=function(P,L,O){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Mn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const X=c!==on&&this.type===on,$=c===on&&this.type!==on;for(let J=0,q=P.length;J<q;J++){const at=P[J],j=at.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const ut=j.getFrameExtents();if(s.multiply(ut),r.copy(j.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/ut.x),s.x=r.x*ut.x,j.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/ut.y),s.y=r.y*ut.y,j.mapSize.y=r.y)),j.map===null||X===!0||$===!0){const bt=this.type!==on?{minFilter:Ue,magFilter:Ue}:{};j.map!==null&&j.map.dispose(),j.map=new zn(s.x,s.y,bt),j.map.texture.name=at.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const gt=j.getViewportCount();for(let bt=0;bt<gt;bt++){const Dt=j.getViewport(bt);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),V.viewport(o),j.updateMatrices(at,bt),n=j.getFrustum(),T(L,O,j.camera,at,this.type)}j.isPointLightShadow!==!0&&this.type===on&&w(j,O),j.needsUpdate=!1}c=this.type,_.needsUpdate=!1,i.setRenderTarget(y,M,F)};function w(P,L){const O=t.update(g);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new zn(s.x,s.y)),m.uniforms.shadow_pass.value=P.map.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(L,null,O,m,g,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(L,null,O,x,g,null)}function A(P,L,O,y){let M=null;const F=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)M=F;else if(M=O.isPointLight===!0?h:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const V=M.uuid,X=L.uuid;let $=l[V];$===void 0&&($={},l[V]=$);let J=$[X];J===void 0&&(J=M.clone(),$[X]=J,L.addEventListener("dispose",D)),M=J}if(M.visible=L.visible,M.wireframe=L.wireframe,y===on?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:d[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=O}return M}function T(P,L,O,y,M){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===on)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const X=t.update(P),$=P.material;if(Array.isArray($)){const J=X.groups;for(let q=0,at=J.length;q<at;q++){const j=J[q],ut=$[j.materialIndex];if(ut&&ut.visible){const gt=A(P,ut,y,M);P.onBeforeShadow(i,P,L,O,X,gt,j),i.renderBufferDirect(O,null,X,gt,P,j),P.onAfterShadow(i,P,L,O,X,gt,j)}}}else if($.visible){const J=A(P,$,y,M);P.onBeforeShadow(i,P,L,O,X,J,null),i.renderBufferDirect(O,null,X,J,P,null),P.onAfterShadow(i,P,L,O,X,J,null)}}const V=P.children;for(let X=0,$=V.length;X<$;X++)T(V[X],L,O,y,M)}function D(P){P.target.removeEventListener("dispose",D);for(const O in l){const y=l[O],M=P.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Zp={[xr]:vr,[Mr]:yr,[Sr]:Tr,[ui]:Er,[vr]:xr,[yr]:Mr,[Tr]:Sr,[Er]:ui};function $p(i,t){function e(){let B=!1;const ht=new ne;let pt=null;const At=new ne(0,0,0,0);return{setMask:function(lt){pt!==lt&&!B&&(i.colorMask(lt,lt,lt,lt),pt=lt)},setLocked:function(lt){B=lt},setClear:function(lt,et,Ct,zt,re){re===!0&&(lt*=zt,et*=zt,Ct*=zt),ht.set(lt,et,Ct,zt),At.equals(ht)===!1&&(i.clearColor(lt,et,Ct,zt),At.copy(ht))},reset:function(){B=!1,pt=null,At.set(-1,0,0,0)}}}function n(){let B=!1,ht=!1,pt=null,At=null,lt=null;return{setReversed:function(et){if(ht!==et){const Ct=t.get("EXT_clip_control");et?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),ht=et;const zt=lt;lt=null,this.setClear(zt)}},getReversed:function(){return ht},setTest:function(et){et?nt(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(et){pt!==et&&!B&&(i.depthMask(et),pt=et)},setFunc:function(et){if(ht&&(et=Zp[et]),At!==et){switch(et){case xr:i.depthFunc(i.NEVER);break;case vr:i.depthFunc(i.ALWAYS);break;case Mr:i.depthFunc(i.LESS);break;case ui:i.depthFunc(i.LEQUAL);break;case Sr:i.depthFunc(i.EQUAL);break;case Er:i.depthFunc(i.GEQUAL);break;case yr:i.depthFunc(i.GREATER);break;case Tr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=et}},setLocked:function(et){B=et},setClear:function(et){lt!==et&&(ht&&(et=1-et),i.clearDepth(et),lt=et)},reset:function(){B=!1,pt=null,At=null,lt=null,ht=!1}}}function s(){let B=!1,ht=null,pt=null,At=null,lt=null,et=null,Ct=null,zt=null,re=null;return{setTest:function($t){B||($t?nt(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function($t){ht!==$t&&!B&&(i.stencilMask($t),ht=$t)},setFunc:function($t,tn,Xe){(pt!==$t||At!==tn||lt!==Xe)&&(i.stencilFunc($t,tn,Xe),pt=$t,At=tn,lt=Xe)},setOp:function($t,tn,Xe){(et!==$t||Ct!==tn||zt!==Xe)&&(i.stencilOp($t,tn,Xe),et=$t,Ct=tn,zt=Xe)},setLocked:function($t){B=$t},setClear:function($t){re!==$t&&(i.clearStencil($t),re=$t)},reset:function(){B=!1,ht=null,pt=null,At=null,lt=null,et=null,Ct=null,zt=null,re=null}}}const r=new e,o=new n,a=new s,h=new WeakMap,l=new WeakMap;let f={},d={},m=new WeakMap,x=[],v=null,g=!1,_=null,c=null,w=null,A=null,T=null,D=null,P=null,L=new Ht(0,0,0),O=0,y=!1,M=null,F=null,V=null,X=null,$=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,at=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=at>=1):j.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=at>=2);let ut=null,gt={};const bt=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),Wt=new ne().fromArray(bt),Ot=new ne().fromArray(Dt);function qt(B,ht,pt,At){const lt=new Uint8Array(4),et=i.createTexture();i.bindTexture(B,et),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<pt;Ct++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(ht+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return et}const tt={};tt[i.TEXTURE_2D]=qt(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),o.setFunc(ui),ot(!1),st(Oa),nt(i.CULL_FACE),Q(Mn);function nt(B){f[B]!==!0&&(i.enable(B),f[B]=!0)}function Et(B){f[B]!==!1&&(i.disable(B),f[B]=!1)}function mt(B,ht){return d[B]!==ht?(i.bindFramebuffer(B,ht),d[B]=ht,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ht),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Mt(B,ht){let pt=x,At=!1;if(B){pt=m.get(ht),pt===void 0&&(pt=[],m.set(ht,pt));const lt=B.textures;if(pt.length!==lt.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let et=0,Ct=lt.length;et<Ct;et++)pt[et]=i.COLOR_ATTACHMENT0+et;pt.length=lt.length,At=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,At=!0);At&&i.drawBuffers(pt)}function Rt(B){return v!==B?(i.useProgram(B),v=B,!0):!1}const jt={[In]:i.FUNC_ADD,[Ol]:i.FUNC_SUBTRACT,[Bl]:i.FUNC_REVERSE_SUBTRACT};jt[zl]=i.MIN,jt[kl]=i.MAX;const C={[Hl]:i.ZERO,[Vl]:i.ONE,[Gl]:i.SRC_COLOR,[_r]:i.SRC_ALPHA,[Kl]:i.SRC_ALPHA_SATURATE,[ql]:i.DST_COLOR,[Xl]:i.DST_ALPHA,[Wl]:i.ONE_MINUS_SRC_COLOR,[gr]:i.ONE_MINUS_SRC_ALPHA,[jl]:i.ONE_MINUS_DST_COLOR,[Yl]:i.ONE_MINUS_DST_ALPHA,[Zl]:i.CONSTANT_COLOR,[$l]:i.ONE_MINUS_CONSTANT_COLOR,[Jl]:i.CONSTANT_ALPHA,[Ql]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(B,ht,pt,At,lt,et,Ct,zt,re,$t){if(B===Mn){g===!0&&(Et(i.BLEND),g=!1);return}if(g===!1&&(nt(i.BLEND),g=!0),B!==Fl){if(B!==_||$t!==y){if((c!==In||T!==In)&&(i.blendEquation(i.FUNC_ADD),c=In,T=In),$t)switch(B){case ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ba:i.blendFunc(i.ONE,i.ONE);break;case za:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ka:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ba:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case za:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ka:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,A=null,D=null,P=null,L.set(0,0,0),O=0,_=B,y=$t}return}lt=lt||ht,et=et||pt,Ct=Ct||At,(ht!==c||lt!==T)&&(i.blendEquationSeparate(jt[ht],jt[lt]),c=ht,T=lt),(pt!==w||At!==A||et!==D||Ct!==P)&&(i.blendFuncSeparate(C[pt],C[At],C[et],C[Ct]),w=pt,A=At,D=et,P=Ct),(zt.equals(L)===!1||re!==O)&&(i.blendColor(zt.r,zt.g,zt.b,re),L.copy(zt),O=re),_=B,y=!1}function dt(B,ht){B.side===je?Et(i.CULL_FACE):nt(i.CULL_FACE);let pt=B.side===Te;ht&&(pt=!pt),ot(pt),B.blending===ci&&B.transparent===!1?Q(Mn):Q(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const At=B.stencilWrite;a.setTest(At),At&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ft(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(B){M!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),M=B)}function st(B){B!==Ul?(nt(i.CULL_FACE),B!==F&&(B===Oa?i.cullFace(i.BACK):B===Nl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),F=B}function Vt(B){B!==V&&(q&&i.lineWidth(B),V=B)}function ft(B,ht,pt){B?(nt(i.POLYGON_OFFSET_FILL),(X!==ht||$!==pt)&&(i.polygonOffset(ht,pt),X=ht,$=pt)):Et(i.POLYGON_OFFSET_FILL)}function Ut(B){B?nt(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function oe(B){B===void 0&&(B=i.TEXTURE0+J-1),ut!==B&&(i.activeTexture(B),ut=B)}function b(B,ht,pt){pt===void 0&&(ut===null?pt=i.TEXTURE0+J-1:pt=ut);let At=gt[pt];At===void 0&&(At={type:void 0,texture:void 0},gt[pt]=At),(At.type!==B||At.texture!==ht)&&(ut!==pt&&(i.activeTexture(pt),ut=pt),i.bindTexture(B,ht||tt[B]),At.type=B,At.texture=ht)}function p(){const B=gt[ut];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function u(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function R(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function I(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function U(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function H(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function rt(B){Wt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Wt.copy(B))}function Tt(B){Ot.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Ot.copy(B))}function St(B,ht){let pt=l.get(ht);pt===void 0&&(pt=new WeakMap,l.set(ht,pt));let At=pt.get(B);At===void 0&&(At=i.getUniformBlockIndex(ht,B.name),pt.set(B,At))}function _t(B,ht){const At=l.get(ht).get(B);h.get(ht)!==At&&(i.uniformBlockBinding(ht,At,B.__bindingPointIndex),h.set(ht,At))}function Nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ut=null,gt={},d={},m=new WeakMap,x=[],v=null,g=!1,_=null,c=null,w=null,A=null,T=null,D=null,P=null,L=new Ht(0,0,0),O=0,y=!1,M=null,F=null,V=null,X=null,$=null,Wt.set(0,0,i.canvas.width,i.canvas.height),Ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:Et,bindFramebuffer:mt,drawBuffers:Mt,useProgram:Rt,setBlending:Q,setMaterial:dt,setFlipSided:ot,setCullFace:st,setLineWidth:Vt,setPolygonOffset:ft,setScissorTest:Ut,activeTexture:oe,bindTexture:b,unbindTexture:p,compressedTexImage2D:u,compressedTexImage3D:E,texImage2D:K,texImage3D:Z,updateUBOMapping:St,uniformBlockBinding:_t,texStorage2D:H,texStorage3D:it,texSubImage2D:R,texSubImage3D:I,compressedTexSubImage2D:U,compressedTexSubImage3D:G,scissor:rt,viewport:Tt,reset:Nt}}function Jp(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new It,f=new WeakMap;let d;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(p,u){return x?new OffscreenCanvas(p,u):Ts("canvas")}function g(p,u,E){let R=1;const I=b(p);if((I.width>E||I.height>E)&&(R=E/Math.max(I.width,I.height)),R<1)if(typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&p instanceof ImageBitmap||typeof VideoFrame<"u"&&p instanceof VideoFrame){const U=Math.floor(R*I.width),G=Math.floor(R*I.height);d===void 0&&(d=v(U,G));const H=u?v(U,G):d;return H.width=U,H.height=G,H.getContext("2d").drawImage(p,0,0,U,G),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+U+"x"+G+")."),H}else return"data"in p&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),p;return p}function _(p){return p.generateMipmaps}function c(p){i.generateMipmap(p)}function w(p){return p.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:p.isWebGL3DRenderTarget?i.TEXTURE_3D:p.isWebGLArrayRenderTarget||p.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(p,u,E,R,I=!1){if(p!==null){if(i[p]!==void 0)return i[p];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+p+"'")}let U=u;if(u===i.RED&&(E===i.FLOAT&&(U=i.R32F),E===i.HALF_FLOAT&&(U=i.R16F),E===i.UNSIGNED_BYTE&&(U=i.R8)),u===i.RED_INTEGER&&(E===i.UNSIGNED_BYTE&&(U=i.R8UI),E===i.UNSIGNED_SHORT&&(U=i.R16UI),E===i.UNSIGNED_INT&&(U=i.R32UI),E===i.BYTE&&(U=i.R8I),E===i.SHORT&&(U=i.R16I),E===i.INT&&(U=i.R32I)),u===i.RG&&(E===i.FLOAT&&(U=i.RG32F),E===i.HALF_FLOAT&&(U=i.RG16F),E===i.UNSIGNED_BYTE&&(U=i.RG8)),u===i.RG_INTEGER&&(E===i.UNSIGNED_BYTE&&(U=i.RG8UI),E===i.UNSIGNED_SHORT&&(U=i.RG16UI),E===i.UNSIGNED_INT&&(U=i.RG32UI),E===i.BYTE&&(U=i.RG8I),E===i.SHORT&&(U=i.RG16I),E===i.INT&&(U=i.RG32I)),u===i.RGB_INTEGER&&(E===i.UNSIGNED_BYTE&&(U=i.RGB8UI),E===i.UNSIGNED_SHORT&&(U=i.RGB16UI),E===i.UNSIGNED_INT&&(U=i.RGB32UI),E===i.BYTE&&(U=i.RGB8I),E===i.SHORT&&(U=i.RGB16I),E===i.INT&&(U=i.RGB32I)),u===i.RGBA_INTEGER&&(E===i.UNSIGNED_BYTE&&(U=i.RGBA8UI),E===i.UNSIGNED_SHORT&&(U=i.RGBA16UI),E===i.UNSIGNED_INT&&(U=i.RGBA32UI),E===i.BYTE&&(U=i.RGBA8I),E===i.SHORT&&(U=i.RGBA16I),E===i.INT&&(U=i.RGBA32I)),u===i.RGB&&(E===i.UNSIGNED_INT_5_9_9_9_REV&&(U=i.RGB9_E5),E===i.UNSIGNED_INT_10F_11F_11F_REV&&(U=i.R11F_G11F_B10F)),u===i.RGBA){const G=I?Es:Zt.getTransfer(R);E===i.FLOAT&&(U=i.RGBA32F),E===i.HALF_FLOAT&&(U=i.RGBA16F),E===i.UNSIGNED_BYTE&&(U=G===te?i.SRGB8_ALPHA8:i.RGBA8),E===i.UNSIGNED_SHORT_4_4_4_4&&(U=i.RGBA4),E===i.UNSIGNED_SHORT_5_5_5_1&&(U=i.RGB5_A1)}return(U===i.R16F||U===i.R32F||U===i.RG16F||U===i.RG32F||U===i.RGBA16F||U===i.RGBA32F)&&t.get("EXT_color_buffer_float"),U}function T(p,u){let E;return p?u===null||u===On||u===Ni?E=i.DEPTH24_STENCIL8:u===Ze?E=i.DEPTH32F_STENCIL8:u===Ui&&(E=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):u===null||u===On||u===Ni?E=i.DEPTH_COMPONENT24:u===Ze?E=i.DEPTH_COMPONENT32F:u===Ui&&(E=i.DEPTH_COMPONENT16),E}function D(p,u){return _(p)===!0||p.isFramebufferTexture&&p.minFilter!==Ue&&p.minFilter!==Ke?Math.log2(Math.max(u.width,u.height))+1:p.mipmaps!==void 0&&p.mipmaps.length>0?p.mipmaps.length:p.isCompressedTexture&&Array.isArray(p.image)?u.mipmaps.length:1}function P(p){const u=p.target;u.removeEventListener("dispose",P),O(u),u.isVideoTexture&&f.delete(u)}function L(p){const u=p.target;u.removeEventListener("dispose",L),M(u)}function O(p){const u=n.get(p);if(u.__webglInit===void 0)return;const E=p.source,R=m.get(E);if(R){const I=R[u.__cacheKey];I.usedTimes--,I.usedTimes===0&&y(p),Object.keys(R).length===0&&m.delete(E)}n.remove(p)}function y(p){const u=n.get(p);i.deleteTexture(u.__webglTexture);const E=p.source,R=m.get(E);delete R[u.__cacheKey],o.memory.textures--}function M(p){const u=n.get(p);if(p.depthTexture&&(p.depthTexture.dispose(),n.remove(p.depthTexture)),p.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(u.__webglFramebuffer[R]))for(let I=0;I<u.__webglFramebuffer[R].length;I++)i.deleteFramebuffer(u.__webglFramebuffer[R][I]);else i.deleteFramebuffer(u.__webglFramebuffer[R]);u.__webglDepthbuffer&&i.deleteRenderbuffer(u.__webglDepthbuffer[R])}else{if(Array.isArray(u.__webglFramebuffer))for(let R=0;R<u.__webglFramebuffer.length;R++)i.deleteFramebuffer(u.__webglFramebuffer[R]);else i.deleteFramebuffer(u.__webglFramebuffer);if(u.__webglDepthbuffer&&i.deleteRenderbuffer(u.__webglDepthbuffer),u.__webglMultisampledFramebuffer&&i.deleteFramebuffer(u.__webglMultisampledFramebuffer),u.__webglColorRenderbuffer)for(let R=0;R<u.__webglColorRenderbuffer.length;R++)u.__webglColorRenderbuffer[R]&&i.deleteRenderbuffer(u.__webglColorRenderbuffer[R]);u.__webglDepthRenderbuffer&&i.deleteRenderbuffer(u.__webglDepthRenderbuffer)}const E=p.textures;for(let R=0,I=E.length;R<I;R++){const U=n.get(E[R]);U.__webglTexture&&(i.deleteTexture(U.__webglTexture),o.memory.textures--),n.remove(E[R])}n.remove(p)}let F=0;function V(){F=0}function X(){const p=F;return p>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+p+" texture units while this GPU supports only "+s.maxTextures),F+=1,p}function $(p){const u=[];return u.push(p.wrapS),u.push(p.wrapT),u.push(p.wrapR||0),u.push(p.magFilter),u.push(p.minFilter),u.push(p.anisotropy),u.push(p.internalFormat),u.push(p.format),u.push(p.type),u.push(p.generateMipmaps),u.push(p.premultiplyAlpha),u.push(p.flipY),u.push(p.unpackAlignment),u.push(p.colorSpace),u.join()}function J(p,u){const E=n.get(p);if(p.isVideoTexture&&Ut(p),p.isRenderTargetTexture===!1&&p.isExternalTexture!==!0&&p.version>0&&E.__version!==p.version){const R=p.image;if(R===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(E,p,u);return}}else p.isExternalTexture&&(E.__webglTexture=p.sourceTexture?p.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,E.__webglTexture,i.TEXTURE0+u)}function q(p,u){const E=n.get(p);if(p.isRenderTargetTexture===!1&&p.version>0&&E.__version!==p.version){tt(E,p,u);return}e.bindTexture(i.TEXTURE_2D_ARRAY,E.__webglTexture,i.TEXTURE0+u)}function at(p,u){const E=n.get(p);if(p.isRenderTargetTexture===!1&&p.version>0&&E.__version!==p.version){tt(E,p,u);return}e.bindTexture(i.TEXTURE_3D,E.__webglTexture,i.TEXTURE0+u)}function j(p,u){const E=n.get(p);if(p.version>0&&E.__version!==p.version){nt(E,p,u);return}e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+u)}const ut={[Ss]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[wr]:i.MIRRORED_REPEAT},gt={[Ue]:i.NEAREST,[lc]:i.NEAREST_MIPMAP_NEAREST,[Gi]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Os]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},bt={[dc]:i.NEVER,[xc]:i.ALWAYS,[fc]:i.LESS,[rl]:i.LEQUAL,[pc]:i.EQUAL,[gc]:i.GEQUAL,[mc]:i.GREATER,[_c]:i.NOTEQUAL};function Dt(p,u){if(u.type===Ze&&t.has("OES_texture_float_linear")===!1&&(u.magFilter===Ke||u.magFilter===Os||u.magFilter===Gi||u.magFilter===Fn||u.minFilter===Ke||u.minFilter===Os||u.minFilter===Gi||u.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(p,i.TEXTURE_WRAP_S,ut[u.wrapS]),i.texParameteri(p,i.TEXTURE_WRAP_T,ut[u.wrapT]),(p===i.TEXTURE_3D||p===i.TEXTURE_2D_ARRAY)&&i.texParameteri(p,i.TEXTURE_WRAP_R,ut[u.wrapR]),i.texParameteri(p,i.TEXTURE_MAG_FILTER,gt[u.magFilter]),i.texParameteri(p,i.TEXTURE_MIN_FILTER,gt[u.minFilter]),u.compareFunction&&(i.texParameteri(p,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(p,i.TEXTURE_COMPARE_FUNC,bt[u.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(u.magFilter===Ue||u.minFilter!==Gi&&u.minFilter!==Fn||u.type===Ze&&t.has("OES_texture_float_linear")===!1)return;if(u.anisotropy>1||n.get(u).__currentAnisotropy){const E=t.get("EXT_texture_filter_anisotropic");i.texParameterf(p,E.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(u.anisotropy,s.getMaxAnisotropy())),n.get(u).__currentAnisotropy=u.anisotropy}}}function Wt(p,u){let E=!1;p.__webglInit===void 0&&(p.__webglInit=!0,u.addEventListener("dispose",P));const R=u.source;let I=m.get(R);I===void 0&&(I={},m.set(R,I));const U=$(u);if(U!==p.__cacheKey){I[U]===void 0&&(I[U]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,E=!0),I[U].usedTimes++;const G=I[p.__cacheKey];G!==void 0&&(I[p.__cacheKey].usedTimes--,G.usedTimes===0&&y(u)),p.__cacheKey=U,p.__webglTexture=I[U].texture}return E}function Ot(p,u,E){return Math.floor(Math.floor(p/E)/u)}function qt(p,u,E,R){const U=p.updateRanges;if(U.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,u.width,u.height,E,R,u.data);else{U.sort((Z,rt)=>Z.start-rt.start);let G=0;for(let Z=1;Z<U.length;Z++){const rt=U[G],Tt=U[Z],St=rt.start+rt.count,_t=Ot(Tt.start,u.width,4),Nt=Ot(rt.start,u.width,4);Tt.start<=St+1&&_t===Nt&&Ot(Tt.start+Tt.count-1,u.width,4)===_t?rt.count=Math.max(rt.count,Tt.start+Tt.count-rt.start):(++G,U[G]=Tt)}U.length=G+1;const H=i.getParameter(i.UNPACK_ROW_LENGTH),it=i.getParameter(i.UNPACK_SKIP_PIXELS),K=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,u.width);for(let Z=0,rt=U.length;Z<rt;Z++){const Tt=U[Z],St=Math.floor(Tt.start/4),_t=Math.ceil(Tt.count/4),Nt=St%u.width,B=Math.floor(St/u.width),ht=_t,pt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,Nt,B,ht,pt,E,R,u.data)}p.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,H),i.pixelStorei(i.UNPACK_SKIP_PIXELS,it),i.pixelStorei(i.UNPACK_SKIP_ROWS,K)}}function tt(p,u,E){let R=i.TEXTURE_2D;(u.isDataArrayTexture||u.isCompressedArrayTexture)&&(R=i.TEXTURE_2D_ARRAY),u.isData3DTexture&&(R=i.TEXTURE_3D);const I=Wt(p,u),U=u.source;e.bindTexture(R,p.__webglTexture,i.TEXTURE0+E);const G=n.get(U);if(U.version!==G.__version||I===!0){e.activeTexture(i.TEXTURE0+E);const H=Zt.getPrimaries(Zt.workingColorSpace),it=u.colorSpace===_n?null:Zt.getPrimaries(u.colorSpace),K=u.colorSpace===_n||H===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,u.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,u.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let Z=g(u.image,!1,s.maxTextureSize);Z=oe(u,Z);const rt=r.convert(u.format,u.colorSpace),Tt=r.convert(u.type);let St=A(u.internalFormat,rt,Tt,u.colorSpace,u.isVideoTexture);Dt(R,u);let _t;const Nt=u.mipmaps,B=u.isVideoTexture!==!0,ht=G.__version===void 0||I===!0,pt=U.dataReady,At=D(u,Z);if(u.isDepthTexture)St=T(u.format===Oi,u.type),ht&&(B?e.texStorage2D(i.TEXTURE_2D,1,St,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,St,Z.width,Z.height,0,rt,Tt,null));else if(u.isDataTexture)if(Nt.length>0){B&&ht&&e.texStorage2D(i.TEXTURE_2D,At,St,Nt[0].width,Nt[0].height);for(let lt=0,et=Nt.length;lt<et;lt++)_t=Nt[lt],B?pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,_t.width,_t.height,rt,Tt,_t.data):e.texImage2D(i.TEXTURE_2D,lt,St,_t.width,_t.height,0,rt,Tt,_t.data);u.generateMipmaps=!1}else B?(ht&&e.texStorage2D(i.TEXTURE_2D,At,St,Z.width,Z.height),pt&&qt(u,Z,rt,Tt)):e.texImage2D(i.TEXTURE_2D,0,St,Z.width,Z.height,0,rt,Tt,Z.data);else if(u.isCompressedTexture)if(u.isCompressedArrayTexture){B&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,St,Nt[0].width,Nt[0].height,Z.depth);for(let lt=0,et=Nt.length;lt<et;lt++)if(_t=Nt[lt],u.format!==Be)if(rt!==null)if(B){if(pt)if(u.layerUpdates.size>0){const Ct=So(_t.width,_t.height,u.format,u.type);for(const zt of u.layerUpdates){const re=_t.data.subarray(zt*Ct/_t.data.BYTES_PER_ELEMENT,(zt+1)*Ct/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,zt,_t.width,_t.height,1,rt,re)}u.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,_t.width,_t.height,Z.depth,rt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,St,_t.width,_t.height,Z.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?pt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,_t.width,_t.height,Z.depth,rt,Tt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,St,_t.width,_t.height,Z.depth,0,rt,Tt,_t.data)}else{B&&ht&&e.texStorage2D(i.TEXTURE_2D,At,St,Nt[0].width,Nt[0].height);for(let lt=0,et=Nt.length;lt<et;lt++)_t=Nt[lt],u.format!==Be?rt!==null?B?pt&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,_t.width,_t.height,rt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,St,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,_t.width,_t.height,rt,Tt,_t.data):e.texImage2D(i.TEXTURE_2D,lt,St,_t.width,_t.height,0,rt,Tt,_t.data)}else if(u.isDataArrayTexture)if(B){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,St,Z.width,Z.height,Z.depth),pt)if(u.layerUpdates.size>0){const lt=So(Z.width,Z.height,u.format,u.type);for(const et of u.layerUpdates){const Ct=Z.data.subarray(et*lt/Z.data.BYTES_PER_ELEMENT,(et+1)*lt/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,Z.width,Z.height,1,rt,Tt,Ct)}u.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,rt,Tt,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,Z.width,Z.height,Z.depth,0,rt,Tt,Z.data);else if(u.isData3DTexture)B?(ht&&e.texStorage3D(i.TEXTURE_3D,At,St,Z.width,Z.height,Z.depth),pt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,rt,Tt,Z.data)):e.texImage3D(i.TEXTURE_3D,0,St,Z.width,Z.height,Z.depth,0,rt,Tt,Z.data);else if(u.isFramebufferTexture){if(ht)if(B)e.texStorage2D(i.TEXTURE_2D,At,St,Z.width,Z.height);else{let lt=Z.width,et=Z.height;for(let Ct=0;Ct<At;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,St,lt,et,0,rt,Tt,null),lt>>=1,et>>=1}}else if(Nt.length>0){if(B&&ht){const lt=b(Nt[0]);e.texStorage2D(i.TEXTURE_2D,At,St,lt.width,lt.height)}for(let lt=0,et=Nt.length;lt<et;lt++)_t=Nt[lt],B?pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,rt,Tt,_t):e.texImage2D(i.TEXTURE_2D,lt,St,rt,Tt,_t);u.generateMipmaps=!1}else if(B){if(ht){const lt=b(Z);e.texStorage2D(i.TEXTURE_2D,At,St,lt.width,lt.height)}pt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt,Tt,Z)}else e.texImage2D(i.TEXTURE_2D,0,St,rt,Tt,Z);_(u)&&c(R),G.__version=U.version,u.onUpdate&&u.onUpdate(u)}p.__version=u.version}function nt(p,u,E){if(u.image.length!==6)return;const R=Wt(p,u),I=u.source;e.bindTexture(i.TEXTURE_CUBE_MAP,p.__webglTexture,i.TEXTURE0+E);const U=n.get(I);if(I.version!==U.__version||R===!0){e.activeTexture(i.TEXTURE0+E);const G=Zt.getPrimaries(Zt.workingColorSpace),H=u.colorSpace===_n?null:Zt.getPrimaries(u.colorSpace),it=u.colorSpace===_n||G===H?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,u.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,u.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const K=u.isCompressedTexture||u.image[0].isCompressedTexture,Z=u.image[0]&&u.image[0].isDataTexture,rt=[];for(let et=0;et<6;et++)!K&&!Z?rt[et]=g(u.image[et],!0,s.maxCubemapSize):rt[et]=Z?u.image[et].image:u.image[et],rt[et]=oe(u,rt[et]);const Tt=rt[0],St=r.convert(u.format,u.colorSpace),_t=r.convert(u.type),Nt=A(u.internalFormat,St,_t,u.colorSpace),B=u.isVideoTexture!==!0,ht=U.__version===void 0||R===!0,pt=I.dataReady;let At=D(u,Tt);Dt(i.TEXTURE_CUBE_MAP,u);let lt;if(K){B&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Nt,Tt.width,Tt.height);for(let et=0;et<6;et++){lt=rt[et].mipmaps;for(let Ct=0;Ct<lt.length;Ct++){const zt=lt[Ct];u.format!==Be?St!==null?B?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,0,0,zt.width,zt.height,St,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,Nt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,0,0,zt.width,zt.height,St,_t,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct,Nt,zt.width,zt.height,0,St,_t,zt.data)}}}else{if(lt=u.mipmaps,B&&ht){lt.length>0&&At++;const et=b(rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Nt,et.width,et.height)}for(let et=0;et<6;et++)if(Z){B?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,rt[et].width,rt[et].height,St,_t,rt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Nt,rt[et].width,rt[et].height,0,St,_t,rt[et].data);for(let Ct=0;Ct<lt.length;Ct++){const re=lt[Ct].image[et].image;B?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,0,0,re.width,re.height,St,_t,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,Nt,re.width,re.height,0,St,_t,re.data)}}else{B?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,St,_t,rt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Nt,St,_t,rt[et]);for(let Ct=0;Ct<lt.length;Ct++){const zt=lt[Ct];B?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,0,0,St,_t,zt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ct+1,Nt,St,_t,zt.image[et])}}}_(u)&&c(i.TEXTURE_CUBE_MAP),U.__version=I.version,u.onUpdate&&u.onUpdate(u)}p.__version=u.version}function Et(p,u,E,R,I,U){const G=r.convert(E.format,E.colorSpace),H=r.convert(E.type),it=A(E.internalFormat,G,H,E.colorSpace),K=n.get(u),Z=n.get(E);if(Z.__renderTarget=u,!K.__hasExternalTextures){const rt=Math.max(1,u.width>>U),Tt=Math.max(1,u.height>>U);I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?e.texImage3D(I,U,it,rt,Tt,u.depth,0,G,H,null):e.texImage2D(I,U,it,rt,Tt,0,G,H,null)}e.bindFramebuffer(i.FRAMEBUFFER,p),ft(u)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,R,I,Z.__webglTexture,0,Vt(u)):(I===i.TEXTURE_2D||I>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,R,I,Z.__webglTexture,U),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(p,u,E){if(i.bindRenderbuffer(i.RENDERBUFFER,p),u.depthBuffer){const R=u.depthTexture,I=R&&R.isDepthTexture?R.type:null,U=T(u.stencilBuffer,I),G=u.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=Vt(u);ft(u)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,H,U,u.width,u.height):E?i.renderbufferStorageMultisample(i.RENDERBUFFER,H,U,u.width,u.height):i.renderbufferStorage(i.RENDERBUFFER,U,u.width,u.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,p)}else{const R=u.textures;for(let I=0;I<R.length;I++){const U=R[I],G=r.convert(U.format,U.colorSpace),H=r.convert(U.type),it=A(U.internalFormat,G,H,U.colorSpace),K=Vt(u);E&&ft(u)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,it,u.width,u.height):ft(u)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,it,u.width,u.height):i.renderbufferStorage(i.RENDERBUFFER,it,u.width,u.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(p,u){if(u&&u.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,p),!(u.depthTexture&&u.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const R=n.get(u.depthTexture);R.__renderTarget=u,(!R.__webglTexture||u.depthTexture.image.width!==u.width||u.depthTexture.image.height!==u.height)&&(u.depthTexture.image.width=u.width,u.depthTexture.image.height=u.height,u.depthTexture.needsUpdate=!0),J(u.depthTexture,0);const I=R.__webglTexture,U=Vt(u);if(u.depthTexture.format===Fi)ft(u)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,I,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,I,0);else if(u.depthTexture.format===Oi)ft(u)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,I,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function Rt(p){const u=n.get(p),E=p.isWebGLCubeRenderTarget===!0;if(u.__boundDepthTexture!==p.depthTexture){const R=p.depthTexture;if(u.__depthDisposeCallback&&u.__depthDisposeCallback(),R){const I=()=>{delete u.__boundDepthTexture,delete u.__depthDisposeCallback,R.removeEventListener("dispose",I)};R.addEventListener("dispose",I),u.__depthDisposeCallback=I}u.__boundDepthTexture=R}if(p.depthTexture&&!u.__autoAllocateDepthBuffer){if(E)throw new Error("target.depthTexture not supported in Cube render targets");const R=p.texture.mipmaps;R&&R.length>0?Mt(u.__webglFramebuffer[0],p):Mt(u.__webglFramebuffer,p)}else if(E){u.__webglDepthbuffer=[];for(let R=0;R<6;R++)if(e.bindFramebuffer(i.FRAMEBUFFER,u.__webglFramebuffer[R]),u.__webglDepthbuffer[R]===void 0)u.__webglDepthbuffer[R]=i.createRenderbuffer(),mt(u.__webglDepthbuffer[R],p,!1);else{const I=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=u.__webglDepthbuffer[R];i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,U)}}else{const R=p.texture.mipmaps;if(R&&R.length>0?e.bindFramebuffer(i.FRAMEBUFFER,u.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,u.__webglFramebuffer),u.__webglDepthbuffer===void 0)u.__webglDepthbuffer=i.createRenderbuffer(),mt(u.__webglDepthbuffer,p,!1);else{const I=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=u.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,U)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(p,u,E){const R=n.get(p);u!==void 0&&Et(R.__webglFramebuffer,p,p.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),E!==void 0&&Rt(p)}function C(p){const u=p.texture,E=n.get(p),R=n.get(u);p.addEventListener("dispose",L);const I=p.textures,U=p.isWebGLCubeRenderTarget===!0,G=I.length>1;if(G||(R.__webglTexture===void 0&&(R.__webglTexture=i.createTexture()),R.__version=u.version,o.memory.textures++),U){E.__webglFramebuffer=[];for(let H=0;H<6;H++)if(u.mipmaps&&u.mipmaps.length>0){E.__webglFramebuffer[H]=[];for(let it=0;it<u.mipmaps.length;it++)E.__webglFramebuffer[H][it]=i.createFramebuffer()}else E.__webglFramebuffer[H]=i.createFramebuffer()}else{if(u.mipmaps&&u.mipmaps.length>0){E.__webglFramebuffer=[];for(let H=0;H<u.mipmaps.length;H++)E.__webglFramebuffer[H]=i.createFramebuffer()}else E.__webglFramebuffer=i.createFramebuffer();if(G)for(let H=0,it=I.length;H<it;H++){const K=n.get(I[H]);K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture(),o.memory.textures++)}if(p.samples>0&&ft(p)===!1){E.__webglMultisampledFramebuffer=i.createFramebuffer(),E.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,E.__webglMultisampledFramebuffer);for(let H=0;H<I.length;H++){const it=I[H];E.__webglColorRenderbuffer[H]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,E.__webglColorRenderbuffer[H]);const K=r.convert(it.format,it.colorSpace),Z=r.convert(it.type),rt=A(it.internalFormat,K,Z,it.colorSpace,p.isXRRenderTarget===!0),Tt=Vt(p);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,rt,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,E.__webglColorRenderbuffer[H])}i.bindRenderbuffer(i.RENDERBUFFER,null),p.depthBuffer&&(E.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(E.__webglDepthRenderbuffer,p,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(U){e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,u);for(let H=0;H<6;H++)if(u.mipmaps&&u.mipmaps.length>0)for(let it=0;it<u.mipmaps.length;it++)Et(E.__webglFramebuffer[H][it],p,u,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+H,it);else Et(E.__webglFramebuffer[H],p,u,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);_(u)&&c(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(G){for(let H=0,it=I.length;H<it;H++){const K=I[H],Z=n.get(K);let rt=i.TEXTURE_2D;(p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(rt=p.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Z.__webglTexture),Dt(rt,K),Et(E.__webglFramebuffer,p,K,i.COLOR_ATTACHMENT0+H,rt,0),_(K)&&c(rt)}e.unbindTexture()}else{let H=i.TEXTURE_2D;if((p.isWebGL3DRenderTarget||p.isWebGLArrayRenderTarget)&&(H=p.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(H,R.__webglTexture),Dt(H,u),u.mipmaps&&u.mipmaps.length>0)for(let it=0;it<u.mipmaps.length;it++)Et(E.__webglFramebuffer[it],p,u,i.COLOR_ATTACHMENT0,H,it);else Et(E.__webglFramebuffer,p,u,i.COLOR_ATTACHMENT0,H,0);_(u)&&c(H),e.unbindTexture()}p.depthBuffer&&Rt(p)}function Q(p){const u=p.textures;for(let E=0,R=u.length;E<R;E++){const I=u[E];if(_(I)){const U=w(p),G=n.get(I).__webglTexture;e.bindTexture(U,G),c(U),e.unbindTexture()}}}const dt=[],ot=[];function st(p){if(p.samples>0){if(ft(p)===!1){const u=p.textures,E=p.width,R=p.height;let I=i.COLOR_BUFFER_BIT;const U=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=n.get(p),H=u.length>1;if(H)for(let K=0;K<u.length;K++)e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,G.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,G.__webglMultisampledFramebuffer);const it=p.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,G.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,G.__webglFramebuffer);for(let K=0;K<u.length;K++){if(p.resolveDepthBuffer&&(p.depthBuffer&&(I|=i.DEPTH_BUFFER_BIT),p.stencilBuffer&&p.resolveStencilBuffer&&(I|=i.STENCIL_BUFFER_BIT)),H){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,G.__webglColorRenderbuffer[K]);const Z=n.get(u[K]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,E,R,0,0,E,R,I,i.NEAREST),h===!0&&(dt.length=0,ot.length=0,dt.push(i.COLOR_ATTACHMENT0+K),p.depthBuffer&&p.resolveDepthBuffer===!1&&(dt.push(U),ot.push(U),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),H)for(let K=0;K<u.length;K++){e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,G.__webglColorRenderbuffer[K]);const Z=n.get(u[K]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,G.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,Z,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,G.__webglMultisampledFramebuffer)}else if(p.depthBuffer&&p.resolveDepthBuffer===!1&&h){const u=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[u])}}}function Vt(p){return Math.min(s.maxSamples,p.samples)}function ft(p){const u=n.get(p);return p.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&u.__useRenderToTexture!==!1}function Ut(p){const u=o.render.frame;f.get(p)!==u&&(f.set(p,u),p.update())}function oe(p,u){const E=p.colorSpace,R=p.format,I=p.type;return p.isCompressedTexture===!0||p.isVideoTexture===!0||E!==pi&&E!==_n&&(Zt.getTransfer(E)===te?(R!==Be||I!==Qe)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",E)),u}function b(p){return typeof HTMLImageElement<"u"&&p instanceof HTMLImageElement?(l.width=p.naturalWidth||p.width,l.height=p.naturalHeight||p.height):typeof VideoFrame<"u"&&p instanceof VideoFrame?(l.width=p.displayWidth,l.height=p.displayHeight):(l.width=p.width,l.height=p.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=V,this.setTexture2D=J,this.setTexture2DArray=q,this.setTexture3D=at,this.setTextureCube=j,this.rebindTextures=jt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=ft}function Qp(i,t){function e(n,s=_n){let r;const o=Zt.getTransfer(s);if(n===Qe)return i.UNSIGNED_BYTE;if(n===ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ua)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===el)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jo)return i.BYTE;if(n===Qo)return i.SHORT;if(n===Ui)return i.UNSIGNED_SHORT;if(n===ca)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===Ze)return i.FLOAT;if(n===ki)return i.HALF_FLOAT;if(n===nl)return i.ALPHA;if(n===il)return i.RGB;if(n===Be)return i.RGBA;if(n===Fi)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===da)return i.RED;if(n===fa)return i.RED_INTEGER;if(n===sl)return i.RG;if(n===pa)return i.RG_INTEGER;if(n===ma)return i.RGBA_INTEGER;if(n===_s||n===gs||n===xs||n===vs)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rr||n===Cr||n===Pr||n===Dr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lr||n===Ir||n===Ur)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lr||n===Ir)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ur)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nr||n===Fr||n===Or||n===Br||n===zr||n===kr||n===Hr||n===Vr||n===Gr||n===Wr||n===Xr||n===Yr||n===qr||n===jr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Or)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Br)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jr)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kr||n===Zr||n===$r)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Kr)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$r)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jr||n===Qr||n===ta||n===ea)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ea)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const tm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,em=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new vl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new yn({vertexShader:tm,fragmentShader:em,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class im extends kn{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",h=1,l=null,f=null,d=null,m=null,x=null,v=null;const g=typeof XRWebGLBinding<"u",_=new nm,c={},w=e.getContextAttributes();let A=null,T=null;const D=[],P=[],L=new It;let O=null;const y=new Ie;y.viewport=new ne;const M=new Ie;M.viewport=new ne;const F=[y,M],V=new Mh;let X=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let nt=D[tt];return nt===void 0&&(nt=new sr,D[tt]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(tt){let nt=D[tt];return nt===void 0&&(nt=new sr,D[tt]=nt),nt.getGripSpace()},this.getHand=function(tt){let nt=D[tt];return nt===void 0&&(nt=new sr,D[tt]=nt),nt.getHandSpace()};function J(tt){const nt=P.indexOf(tt.inputSource);if(nt===-1)return;const Et=D[nt];Et!==void 0&&(Et.update(tt.inputSource,tt.frame,l||o),Et.dispatchEvent({type:tt.type,data:tt.inputSource}))}function q(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",at);for(let tt=0;tt<D.length;tt++){const nt=P[tt];nt!==null&&(P[tt]=null,D[tt].disconnect(nt))}X=null,$=null,_.reset();for(const tt in c)delete c[tt];t.setRenderTarget(A),x=null,m=null,d=null,s=null,T=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(tt){l=tt},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",q),s.addEventListener("inputsourceschange",at),w.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(L),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,mt=null,Mt=null;w.depth&&(Mt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=w.stencil?Oi:Fi,mt=w.stencil?Ni:On);const Rt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};d=this.getBinding(),m=d.createProjectionLayer(Rt),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),T=new zn(m.textureWidth,m.textureHeight,{format:Be,type:Qe,depthTexture:new xl(m.textureWidth,m.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const Et={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),T=new zn(x.framebufferWidth,x.framebufferHeight,{format:Be,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function at(tt){for(let nt=0;nt<tt.removed.length;nt++){const Et=tt.removed[nt],mt=P.indexOf(Et);mt>=0&&(P[mt]=null,D[mt].disconnect(Et))}for(let nt=0;nt<tt.added.length;nt++){const Et=tt.added[nt];let mt=P.indexOf(Et);if(mt===-1){for(let Rt=0;Rt<D.length;Rt++)if(Rt>=P.length){P.push(Et),mt=Rt;break}else if(P[Rt]===null){P[Rt]=Et,mt=Rt;break}if(mt===-1)break}const Mt=D[mt];Mt&&Mt.connect(Et)}}const j=new N,ut=new N;function gt(tt,nt,Et){j.setFromMatrixPosition(nt.matrixWorld),ut.setFromMatrixPosition(Et.matrixWorld);const mt=j.distanceTo(ut),Mt=nt.projectionMatrix.elements,Rt=Et.projectionMatrix.elements,jt=Mt[14]/(Mt[10]-1),C=Mt[14]/(Mt[10]+1),Q=(Mt[9]+1)/Mt[5],dt=(Mt[9]-1)/Mt[5],ot=(Mt[8]-1)/Mt[0],st=(Rt[8]+1)/Rt[0],Vt=jt*ot,ft=jt*st,Ut=mt/(-ot+st),oe=Ut*-ot;if(nt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(oe),tt.translateZ(Ut),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Mt[10]===-1)tt.projectionMatrix.copy(nt.projectionMatrix),tt.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const b=jt+Ut,p=C+Ut,u=Vt-oe,E=ft+(mt-oe),R=Q*C/p*b,I=dt*C/p*b;tt.projectionMatrix.makePerspective(u,E,R,I,b,p),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function bt(tt,nt){nt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(nt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let nt=tt.near,Et=tt.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),V.near=M.near=y.near=nt,V.far=M.far=y.far=Et,(X!==V.near||$!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),X=V.near,$=V.far),V.layers.mask=tt.layers.mask|6,y.layers.mask=V.layers.mask&3,M.layers.mask=V.layers.mask&5;const mt=tt.parent,Mt=V.cameras;bt(V,mt);for(let Rt=0;Rt<Mt.length;Rt++)bt(Mt[Rt],mt);Mt.length===2?gt(V,y,M):V.projectionMatrix.copy(y.projectionMatrix),Dt(tt,V,mt)};function Dt(tt,nt,Et){Et===null?tt.matrix.copy(nt.matrixWorld):(tt.matrix.copy(Et.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(nt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(nt.projectionMatrix),tt.projectionMatrixInverse.copy(nt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Bi*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(m===null&&x===null))return h},this.setFoveation=function(tt){h=tt,m!==null&&(m.fixedFoveation=tt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=tt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(V)},this.getCameraTexture=function(tt){return c[tt]};let Wt=null;function Ot(tt,nt){if(f=nt.getViewerPose(l||o),v=nt,f!==null){const Et=f.views;x!==null&&(t.setRenderTargetFramebuffer(T,x.framebuffer),t.setRenderTarget(T));let mt=!1;Et.length!==V.cameras.length&&(V.cameras.length=0,mt=!0);for(let C=0;C<Et.length;C++){const Q=Et[C];let dt=null;if(x!==null)dt=x.getViewport(Q);else{const st=d.getViewSubImage(m,Q);dt=st.viewport,C===0&&(t.setRenderTargetTextures(T,st.colorTexture,st.depthStencilTexture),t.setRenderTarget(T))}let ot=F[C];ot===void 0&&(ot=new Ie,ot.layers.enable(C),ot.viewport=new ne,F[C]=ot),ot.matrix.fromArray(Q.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Q.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(dt.x,dt.y,dt.width,dt.height),C===0&&(V.matrix.copy(ot.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),mt===!0&&V.cameras.push(ot)}const Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const C=d.getDepthInformation(Et[0]);C&&C.isValid&&C.texture&&_.init(C,s.renderState)}if(Mt&&Mt.includes("camera-access")&&g){t.state.unbindTexture(),d=n.getBinding();for(let C=0;C<Et.length;C++){const Q=Et[C].camera;if(Q){let dt=c[Q];dt||(dt=new vl,c[Q]=dt);const ot=d.getCameraImage(Q);dt.sourceTexture=ot}}}}for(let Et=0;Et<D.length;Et++){const mt=P[Et],Mt=D[Et];mt!==null&&Mt!==void 0&&Mt.update(mt,nt,l||o)}Wt&&Wt(tt,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),v=null}const qt=new El;qt.setAnimationLoop(Ot),this.setAnimationLoop=function(tt){Wt=tt},this.dispose=function(){}}}const Dn=new We,sm=new se;function rm(i,t){function e(_,c){_.matrixAutoUpdate===!0&&_.updateMatrix(),c.value.copy(_.matrix)}function n(_,c){c.color.getRGB(_.fogColor.value,ul(i)),c.isFog?(_.fogNear.value=c.near,_.fogFar.value=c.far):c.isFogExp2&&(_.fogDensity.value=c.density)}function s(_,c,w,A,T){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(_,c):c.isMeshToonMaterial?(r(_,c),d(_,c)):c.isMeshPhongMaterial?(r(_,c),f(_,c)):c.isMeshStandardMaterial?(r(_,c),m(_,c),c.isMeshPhysicalMaterial&&x(_,c,T)):c.isMeshMatcapMaterial?(r(_,c),v(_,c)):c.isMeshDepthMaterial?r(_,c):c.isMeshDistanceMaterial?(r(_,c),g(_,c)):c.isMeshNormalMaterial?r(_,c):c.isLineBasicMaterial?(o(_,c),c.isLineDashedMaterial&&a(_,c)):c.isPointsMaterial?h(_,c,w,A):c.isSpriteMaterial?l(_,c):c.isShadowMaterial?(_.color.value.copy(c.color),_.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(_,c){_.opacity.value=c.opacity,c.color&&_.diffuse.value.copy(c.color),c.emissive&&_.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(_.map.value=c.map,e(c.map,_.mapTransform)),c.alphaMap&&(_.alphaMap.value=c.alphaMap,e(c.alphaMap,_.alphaMapTransform)),c.bumpMap&&(_.bumpMap.value=c.bumpMap,e(c.bumpMap,_.bumpMapTransform),_.bumpScale.value=c.bumpScale,c.side===Te&&(_.bumpScale.value*=-1)),c.normalMap&&(_.normalMap.value=c.normalMap,e(c.normalMap,_.normalMapTransform),_.normalScale.value.copy(c.normalScale),c.side===Te&&_.normalScale.value.negate()),c.displacementMap&&(_.displacementMap.value=c.displacementMap,e(c.displacementMap,_.displacementMapTransform),_.displacementScale.value=c.displacementScale,_.displacementBias.value=c.displacementBias),c.emissiveMap&&(_.emissiveMap.value=c.emissiveMap,e(c.emissiveMap,_.emissiveMapTransform)),c.specularMap&&(_.specularMap.value=c.specularMap,e(c.specularMap,_.specularMapTransform)),c.alphaTest>0&&(_.alphaTest.value=c.alphaTest);const w=t.get(c),A=w.envMap,T=w.envMapRotation;A&&(_.envMap.value=A,Dn.copy(T),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),_.envMapRotation.value.setFromMatrix4(sm.makeRotationFromEuler(Dn)),_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=c.reflectivity,_.ior.value=c.ior,_.refractionRatio.value=c.refractionRatio),c.lightMap&&(_.lightMap.value=c.lightMap,_.lightMapIntensity.value=c.lightMapIntensity,e(c.lightMap,_.lightMapTransform)),c.aoMap&&(_.aoMap.value=c.aoMap,_.aoMapIntensity.value=c.aoMapIntensity,e(c.aoMap,_.aoMapTransform))}function o(_,c){_.diffuse.value.copy(c.color),_.opacity.value=c.opacity,c.map&&(_.map.value=c.map,e(c.map,_.mapTransform))}function a(_,c){_.dashSize.value=c.dashSize,_.totalSize.value=c.dashSize+c.gapSize,_.scale.value=c.scale}function h(_,c,w,A){_.diffuse.value.copy(c.color),_.opacity.value=c.opacity,_.size.value=c.size*w,_.scale.value=A*.5,c.map&&(_.map.value=c.map,e(c.map,_.uvTransform)),c.alphaMap&&(_.alphaMap.value=c.alphaMap,e(c.alphaMap,_.alphaMapTransform)),c.alphaTest>0&&(_.alphaTest.value=c.alphaTest)}function l(_,c){_.diffuse.value.copy(c.color),_.opacity.value=c.opacity,_.rotation.value=c.rotation,c.map&&(_.map.value=c.map,e(c.map,_.mapTransform)),c.alphaMap&&(_.alphaMap.value=c.alphaMap,e(c.alphaMap,_.alphaMapTransform)),c.alphaTest>0&&(_.alphaTest.value=c.alphaTest)}function f(_,c){_.specular.value.copy(c.specular),_.shininess.value=Math.max(c.shininess,1e-4)}function d(_,c){c.gradientMap&&(_.gradientMap.value=c.gradientMap)}function m(_,c){_.metalness.value=c.metalness,c.metalnessMap&&(_.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,_.metalnessMapTransform)),_.roughness.value=c.roughness,c.roughnessMap&&(_.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,_.roughnessMapTransform)),c.envMap&&(_.envMapIntensity.value=c.envMapIntensity)}function x(_,c,w){_.ior.value=c.ior,c.sheen>0&&(_.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),_.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(_.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,_.sheenColorMapTransform)),c.sheenRoughnessMap&&(_.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,_.sheenRoughnessMapTransform))),c.clearcoat>0&&(_.clearcoat.value=c.clearcoat,_.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(_.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,_.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(_.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Te&&_.clearcoatNormalScale.value.negate())),c.dispersion>0&&(_.dispersion.value=c.dispersion),c.iridescence>0&&(_.iridescence.value=c.iridescence,_.iridescenceIOR.value=c.iridescenceIOR,_.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(_.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,_.iridescenceMapTransform)),c.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),c.transmission>0&&(_.transmission.value=c.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),c.transmissionMap&&(_.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,_.transmissionMapTransform)),_.thickness.value=c.thickness,c.thicknessMap&&(_.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=c.attenuationDistance,_.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(_.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(_.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=c.specularIntensity,_.specularColor.value.copy(c.specularColor),c.specularColorMap&&(_.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,_.specularColorMapTransform)),c.specularIntensityMap&&(_.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,c){c.matcap&&(_.matcap.value=c.matcap)}function g(_,c){const w=t.get(c).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function am(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(w,A){const T=A.program;n.uniformBlockBinding(w,T)}function l(w,A){let T=s[w.id];T===void 0&&(v(w),T=f(w),s[w.id]=T,w.addEventListener("dispose",_));const D=A.program;n.updateUBOMapping(w,D);const P=t.render.frame;r[w.id]!==P&&(m(w),r[w.id]=P)}function f(w){const A=d();w.__bindingPointIndex=A;const T=i.createBuffer(),D=w.__size,P=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,D,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,T),T}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(w){const A=s[w.id],T=w.uniforms,D=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let P=0,L=T.length;P<L;P++){const O=Array.isArray(T[P])?T[P]:[T[P]];for(let y=0,M=O.length;y<M;y++){const F=O[y];if(x(F,P,y,D)===!0){const V=F.__offset,X=Array.isArray(F.value)?F.value:[F.value];let $=0;for(let J=0;J<X.length;J++){const q=X[J],at=g(q);typeof q=="number"||typeof q=="boolean"?(F.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,V+$,F.__data)):q.isMatrix3?(F.__data[0]=q.elements[0],F.__data[1]=q.elements[1],F.__data[2]=q.elements[2],F.__data[3]=0,F.__data[4]=q.elements[3],F.__data[5]=q.elements[4],F.__data[6]=q.elements[5],F.__data[7]=0,F.__data[8]=q.elements[6],F.__data[9]=q.elements[7],F.__data[10]=q.elements[8],F.__data[11]=0):(q.toArray(F.__data,$),$+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(w,A,T,D){const P=w.value,L=A+"_"+T;if(D[L]===void 0)return typeof P=="number"||typeof P=="boolean"?D[L]=P:D[L]=P.clone(),!0;{const O=D[L];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return D[L]=P,!0}else if(O.equals(P)===!1)return O.copy(P),!0}return!1}function v(w){const A=w.uniforms;let T=0;const D=16;for(let L=0,O=A.length;L<O;L++){const y=Array.isArray(A[L])?A[L]:[A[L]];for(let M=0,F=y.length;M<F;M++){const V=y[M],X=Array.isArray(V.value)?V.value:[V.value];for(let $=0,J=X.length;$<J;$++){const q=X[$],at=g(q),j=T%D,ut=j%at.boundary,gt=j+ut;T+=ut,gt!==0&&D-gt<at.storage&&(T+=D-gt),V.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=at.storage}}}const P=T%D;return P>0&&(T+=D-P),w.__size=T,w.__cache={},this}function g(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function _(w){const A=w.target;A.removeEventListener("dispose",_);const T=o.indexOf(A.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function c(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:h,update:l,dispose:c}}class om{constructor(t={}){const{canvas:e=Nc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;const v=new Uint32Array(4),g=new Int32Array(4);let _=null,c=null;const w=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let D=!1;this._outputColorSpace=Re;let P=0,L=0,O=null,y=-1,M=null;const F=new ne,V=new ne;let X=null;const $=new Ht(0);let J=0,q=e.width,at=e.height,j=1,ut=null,gt=null;const bt=new ne(0,0,q,at),Dt=new ne(0,0,q,at);let Wt=!1;const Ot=new Sa;let qt=!1,tt=!1;const nt=new se,Et=new N,mt=new ne,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function jt(){return O===null?j:1}let C=n;function Q(S,z){return e.getContext(S,z)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oa}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",lt,!1),C===null){const z="webgl2";if(C=Q(z,S),C===null)throw Q(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let dt,ot,st,Vt,ft,Ut,oe,b,p,u,E,R,I,U,G,H,it,K,Z,rt,Tt,St,_t,Nt;function B(){dt=new gf(C),dt.init(),St=new Qp(C,dt),ot=new hf(C,dt,t,St),st=new $p(C,dt),ot.reversedDepthBuffer&&m&&st.buffers.depth.setReversed(!0),Vt=new Mf(C),ft=new Bp,Ut=new Jp(C,dt,st,ft,ot,St,Vt),oe=new df(T),b=new _f(T),p=new bh(C),_t=new lf(C,p),u=new xf(C,p,Vt,_t),E=new Ef(C,u,p,Vt),Z=new Sf(C,ot,Ut),H=new uf(ft),R=new Op(T,oe,b,dt,ot,_t,H),I=new rm(T,ft),U=new kp,G=new Yp(dt),K=new of(T,oe,b,st,E,x,h),it=new Kp(T,E,ot),Nt=new am(C,Vt,ot,st),rt=new cf(C,dt,Vt),Tt=new vf(C,dt,Vt),Vt.programs=R.programs,T.capabilities=ot,T.extensions=dt,T.properties=ft,T.renderLists=U,T.shadowMap=it,T.state=st,T.info=Vt}B();const ht=new im(T,C);this.xr=ht,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=dt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=dt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(q,at,!1))},this.getSize=function(S){return S.set(q,at)},this.setSize=function(S,z,W=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,at=z,e.width=Math.floor(S*j),e.height=Math.floor(z*j),W===!0&&(e.style.width=S+"px",e.style.height=z+"px"),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(q*j,at*j).floor()},this.setDrawingBufferSize=function(S,z,W){q=S,at=z,j=W,e.width=Math.floor(S*W),e.height=Math.floor(z*W),this.setViewport(0,0,S,z)},this.getCurrentViewport=function(S){return S.copy(F)},this.getViewport=function(S){return S.copy(bt)},this.setViewport=function(S,z,W,Y){S.isVector4?bt.set(S.x,S.y,S.z,S.w):bt.set(S,z,W,Y),st.viewport(F.copy(bt).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(Dt)},this.setScissor=function(S,z,W,Y){S.isVector4?Dt.set(S.x,S.y,S.z,S.w):Dt.set(S,z,W,Y),st.scissor(V.copy(Dt).multiplyScalar(j).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(S){st.setScissorTest(Wt=S)},this.setOpaqueSort=function(S){ut=S},this.setTransparentSort=function(S){gt=S},this.getClearColor=function(S){return S.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor(...arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha(...arguments)},this.clear=function(S=!0,z=!0,W=!0){let Y=0;if(S){let k=!1;if(O!==null){const ct=O.texture.format;k=ct===ma||ct===pa||ct===fa}if(k){const ct=O.texture.type,vt=ct===Qe||ct===On||ct===Ui||ct===Ni||ct===ha||ct===ua,wt=K.getClearColor(),yt=K.getClearAlpha(),Ft=wt.r,Bt=wt.g,Pt=wt.b;vt?(v[0]=Ft,v[1]=Bt,v[2]=Pt,v[3]=yt,C.clearBufferuiv(C.COLOR,0,v)):(g[0]=Ft,g[1]=Bt,g[2]=Pt,g[3]=yt,C.clearBufferiv(C.COLOR,0,g))}else Y|=C.COLOR_BUFFER_BIT}z&&(Y|=C.DEPTH_BUFFER_BIT),W&&(Y|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),K.dispose(),U.dispose(),G.dispose(),ft.dispose(),oe.dispose(),b.dispose(),E.dispose(),_t.dispose(),Nt.dispose(),R.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Xe),ht.removeEventListener("sessionend",Pa),Tn.stop()};function pt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const S=Vt.autoReset,z=it.enabled,W=it.autoUpdate,Y=it.needsUpdate,k=it.type;B(),Vt.autoReset=S,it.enabled=z,it.autoUpdate=W,it.needsUpdate=Y,it.type=k}function lt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function et(S){const z=S.target;z.removeEventListener("dispose",et),Ct(z)}function Ct(S){zt(S),ft.remove(S)}function zt(S){const z=ft.get(S).programs;z!==void 0&&(z.forEach(function(W){R.releaseProgram(W)}),S.isShaderMaterial&&R.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,W,Y,k,ct){z===null&&(z=Mt);const vt=k.isMesh&&k.matrixWorld.determinant()<0,wt=Rl(S,z,W,Y,k);st.setMaterial(Y,vt);let yt=W.index,Ft=1;if(Y.wireframe===!0){if(yt=u.getWireframeAttribute(W),yt===void 0)return;Ft=2}const Bt=W.drawRange,Pt=W.attributes.position;let Yt=Bt.start*Ft,Qt=(Bt.start+Bt.count)*Ft;ct!==null&&(Yt=Math.max(Yt,ct.start*Ft),Qt=Math.min(Qt,(ct.start+ct.count)*Ft)),yt!==null?(Yt=Math.max(Yt,0),Qt=Math.min(Qt,yt.count)):Pt!=null&&(Yt=Math.max(Yt,0),Qt=Math.min(Qt,Pt.count));const he=Qt-Yt;if(he<0||he===1/0)return;_t.setup(k,Y,wt,W,yt);let ae,ie=rt;if(yt!==null&&(ae=p.get(yt),ie=Tt,ie.setIndex(ae)),k.isMesh)Y.wireframe===!0?(st.setLineWidth(Y.wireframeLinewidth*jt()),ie.setMode(C.LINES)):ie.setMode(C.TRIANGLES);else if(k.isLine){let Lt=Y.linewidth;Lt===void 0&&(Lt=1),st.setLineWidth(Lt*jt()),k.isLineSegments?ie.setMode(C.LINES):k.isLineLoop?ie.setMode(C.LINE_LOOP):ie.setMode(C.LINE_STRIP)}else k.isPoints?ie.setMode(C.POINTS):k.isSprite&&ie.setMode(C.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)zi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))ie.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Lt=k._multiDrawStarts,le=k._multiDrawCounts,Kt=k._multiDrawCount,Ce=yt?p.get(yt).bytesPerElement:1,Gn=ft.get(Y).currentProgram.getUniforms();for(let Pe=0;Pe<Kt;Pe++)Gn.setValue(C,"_gl_DrawID",Pe),ie.render(Lt[Pe]/Ce,le[Pe])}else if(k.isInstancedMesh)ie.renderInstances(Yt,he,k.count);else if(W.isInstancedBufferGeometry){const Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,le=Math.min(W.instanceCount,Lt);ie.renderInstances(Yt,he,le)}else ie.render(Yt,he)};function re(S,z,W){S.transparent===!0&&S.side===je&&S.forceSinglePass===!1?(S.side=Te,S.needsUpdate=!0,Vi(S,z,W),S.side=En,S.needsUpdate=!0,Vi(S,z,W),S.side=je):Vi(S,z,W)}this.compile=function(S,z,W=null){W===null&&(W=S),c=G.get(W),c.init(z),A.push(c),W.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(c.pushLight(k),k.castShadow&&c.pushShadow(k))}),S!==W&&S.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(c.pushLight(k),k.castShadow&&c.pushShadow(k))}),c.setupLights();const Y=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ct=k.material;if(ct)if(Array.isArray(ct))for(let vt=0;vt<ct.length;vt++){const wt=ct[vt];re(wt,W,k),Y.add(wt)}else re(ct,W,k),Y.add(ct)}),c=A.pop(),Y},this.compileAsync=function(S,z,W=null){const Y=this.compile(S,z,W);return new Promise(k=>{function ct(){if(Y.forEach(function(vt){ft.get(vt).currentProgram.isReady()&&Y.delete(vt)}),Y.size===0){k(S);return}setTimeout(ct,10)}dt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let $t=null;function tn(S){$t&&$t(S)}function Xe(){Tn.stop()}function Pa(){Tn.start()}const Tn=new El;Tn.setAnimationLoop(tn),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(S){$t=S,ht.setAnimationLoop(S),S===null?Tn.stop():Tn.start()},ht.addEventListener("sessionstart",Xe),ht.addEventListener("sessionend",Pa),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(z),z=ht.getCamera()),S.isScene===!0&&S.onBeforeRender(T,S,z,O),c=G.get(S,A.length),c.init(z),A.push(c),nt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ot.setFromProjectionMatrix(nt,$e,z.reversedDepth),tt=this.localClippingEnabled,qt=H.init(this.clippingPlanes,tt),_=U.get(S,w.length),_.init(),w.push(_),ht.enabled===!0&&ht.isPresenting===!0){const ct=T.xr.getDepthSensingMesh();ct!==null&&Ns(ct,z,-1/0,T.sortObjects)}Ns(S,z,0,T.sortObjects),_.finish(),T.sortObjects===!0&&_.sort(ut,gt),Rt=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Rt&&K.addToRenderList(_,S),this.info.render.frame++,qt===!0&&H.beginShadows();const W=c.state.shadowsArray;it.render(W,S,z),qt===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=_.opaque,k=_.transmissive;if(c.setupLights(),z.isArrayCamera){const ct=z.cameras;if(k.length>0)for(let vt=0,wt=ct.length;vt<wt;vt++){const yt=ct[vt];La(Y,k,S,yt)}Rt&&K.render(S);for(let vt=0,wt=ct.length;vt<wt;vt++){const yt=ct[vt];Da(_,S,yt,yt.viewport)}}else k.length>0&&La(Y,k,S,z),Rt&&K.render(S),Da(_,S,z);O!==null&&L===0&&(Ut.updateMultisampleRenderTarget(O),Ut.updateRenderTargetMipmap(O)),S.isScene===!0&&S.onAfterRender(T,S,z),_t.resetDefaultState(),y=-1,M=null,A.pop(),A.length>0?(c=A[A.length-1],qt===!0&&H.setGlobalState(T.clippingPlanes,c.state.camera)):c=null,w.pop(),w.length>0?_=w[w.length-1]:_=null};function Ns(S,z,W,Y){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)c.pushLight(S),S.castShadow&&c.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ot.intersectsSprite(S)){Y&&mt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(nt);const vt=E.update(S),wt=S.material;wt.visible&&_.push(S,vt,wt,W,mt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ot.intersectsObject(S))){const vt=E.update(S),wt=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),mt.copy(S.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),mt.copy(vt.boundingSphere.center)),mt.applyMatrix4(S.matrixWorld).applyMatrix4(nt)),Array.isArray(wt)){const yt=vt.groups;for(let Ft=0,Bt=yt.length;Ft<Bt;Ft++){const Pt=yt[Ft],Yt=wt[Pt.materialIndex];Yt&&Yt.visible&&_.push(S,vt,Yt,W,mt.z,Pt)}}else wt.visible&&_.push(S,vt,wt,W,mt.z,null)}}const ct=S.children;for(let vt=0,wt=ct.length;vt<wt;vt++)Ns(ct[vt],z,W,Y)}function Da(S,z,W,Y){const k=S.opaque,ct=S.transmissive,vt=S.transparent;c.setupLightsView(W),qt===!0&&H.setGlobalState(T.clippingPlanes,W),Y&&st.viewport(F.copy(Y)),k.length>0&&Hi(k,z,W),ct.length>0&&Hi(ct,z,W),vt.length>0&&Hi(vt,z,W),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function La(S,z,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[Y.id]===void 0&&(c.state.transmissionRenderTarget[Y.id]=new zn(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?ki:Qe,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const ct=c.state.transmissionRenderTarget[Y.id],vt=Y.viewport||F;ct.setSize(vt.z*T.transmissionResolutionScale,vt.w*T.transmissionResolutionScale);const wt=T.getRenderTarget(),yt=T.getActiveCubeFace(),Ft=T.getActiveMipmapLevel();T.setRenderTarget(ct),T.getClearColor($),J=T.getClearAlpha(),J<1&&T.setClearColor(16777215,.5),T.clear(),Rt&&K.render(W);const Bt=T.toneMapping;T.toneMapping=Sn;const Pt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),c.setupLightsView(Y),qt===!0&&H.setGlobalState(T.clippingPlanes,Y),Hi(S,W,Y),Ut.updateMultisampleRenderTarget(ct),Ut.updateRenderTargetMipmap(ct),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Qt=0,he=z.length;Qt<he;Qt++){const ae=z[Qt],ie=ae.object,Lt=ae.geometry,le=ae.material,Kt=ae.group;if(le.side===je&&ie.layers.test(Y.layers)){const Ce=le.side;le.side=Te,le.needsUpdate=!0,Ia(ie,W,Y,Lt,le,Kt),le.side=Ce,le.needsUpdate=!0,Yt=!0}}Yt===!0&&(Ut.updateMultisampleRenderTarget(ct),Ut.updateRenderTargetMipmap(ct))}T.setRenderTarget(wt,yt,Ft),T.setClearColor($,J),Pt!==void 0&&(Y.viewport=Pt),T.toneMapping=Bt}function Hi(S,z,W){const Y=z.isScene===!0?z.overrideMaterial:null;for(let k=0,ct=S.length;k<ct;k++){const vt=S[k],wt=vt.object,yt=vt.geometry,Ft=vt.group;let Bt=vt.material;Bt.allowOverride===!0&&Y!==null&&(Bt=Y),wt.layers.test(W.layers)&&Ia(wt,z,W,yt,Bt,Ft)}}function Ia(S,z,W,Y,k,ct){S.onBeforeRender(T,z,W,Y,k,ct),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(T,z,W,Y,S,ct),k.transparent===!0&&k.side===je&&k.forceSinglePass===!1?(k.side=Te,k.needsUpdate=!0,T.renderBufferDirect(W,z,Y,k,S,ct),k.side=En,k.needsUpdate=!0,T.renderBufferDirect(W,z,Y,k,S,ct),k.side=je):T.renderBufferDirect(W,z,Y,k,S,ct),S.onAfterRender(T,z,W,Y,k,ct)}function Vi(S,z,W){z.isScene!==!0&&(z=Mt);const Y=ft.get(S),k=c.state.lights,ct=c.state.shadowsArray,vt=k.state.version,wt=R.getParameters(S,k.state,ct,z,W),yt=R.getProgramCacheKey(wt);let Ft=Y.programs;Y.environment=S.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(S.isMeshStandardMaterial?b:oe).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,Ft===void 0&&(S.addEventListener("dispose",et),Ft=new Map,Y.programs=Ft);let Bt=Ft.get(yt);if(Bt!==void 0){if(Y.currentProgram===Bt&&Y.lightsStateVersion===vt)return Na(S,wt),Bt}else wt.uniforms=R.getUniforms(S),S.onBeforeCompile(wt,T),Bt=R.acquireProgram(wt,yt),Ft.set(yt,Bt),Y.uniforms=wt.uniforms;const Pt=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pt.clippingPlanes=H.uniform),Na(S,wt),Y.needsLights=Pl(S),Y.lightsStateVersion=vt,Y.needsLights&&(Pt.ambientLightColor.value=k.state.ambient,Pt.lightProbe.value=k.state.probe,Pt.directionalLights.value=k.state.directional,Pt.directionalLightShadows.value=k.state.directionalShadow,Pt.spotLights.value=k.state.spot,Pt.spotLightShadows.value=k.state.spotShadow,Pt.rectAreaLights.value=k.state.rectArea,Pt.ltc_1.value=k.state.rectAreaLTC1,Pt.ltc_2.value=k.state.rectAreaLTC2,Pt.pointLights.value=k.state.point,Pt.pointLightShadows.value=k.state.pointShadow,Pt.hemisphereLights.value=k.state.hemi,Pt.directionalShadowMap.value=k.state.directionalShadowMap,Pt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pt.spotShadowMap.value=k.state.spotShadowMap,Pt.spotLightMatrix.value=k.state.spotLightMatrix,Pt.spotLightMap.value=k.state.spotLightMap,Pt.pointShadowMap.value=k.state.pointShadowMap,Pt.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=Bt,Y.uniformsList=null,Bt}function Ua(S){if(S.uniformsList===null){const z=S.currentProgram.getUniforms();S.uniformsList=Ms.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function Na(S,z){const W=ft.get(S);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Rl(S,z,W,Y,k){z.isScene!==!0&&(z=Mt),Ut.resetTextureUnits();const ct=z.fog,vt=Y.isMeshStandardMaterial?z.environment:null,wt=O===null?T.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:pi,yt=(Y.isMeshStandardMaterial?b:oe).get(Y.envMap||vt),Ft=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Bt=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pt=!!W.morphAttributes.position,Yt=!!W.morphAttributes.normal,Qt=!!W.morphAttributes.color;let he=Sn;Y.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(he=T.toneMapping);const ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ie=ae!==void 0?ae.length:0,Lt=ft.get(Y),le=c.state.lights;if(qt===!0&&(tt===!0||S!==M)){const Se=S===M&&Y.id===y;H.setState(Y,S,Se)}let Kt=!1;Y.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==le.state.version||Lt.outputColorSpace!==wt||k.isBatchedMesh&&Lt.batching===!1||!k.isBatchedMesh&&Lt.batching===!0||k.isBatchedMesh&&Lt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Lt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Lt.instancing===!1||!k.isInstancedMesh&&Lt.instancing===!0||k.isSkinnedMesh&&Lt.skinning===!1||!k.isSkinnedMesh&&Lt.skinning===!0||k.isInstancedMesh&&Lt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Lt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Lt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Lt.instancingMorph===!1&&k.morphTexture!==null||Lt.envMap!==yt||Y.fog===!0&&Lt.fog!==ct||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==H.numPlanes||Lt.numIntersection!==H.numIntersection)||Lt.vertexAlphas!==Ft||Lt.vertexTangents!==Bt||Lt.morphTargets!==Pt||Lt.morphNormals!==Yt||Lt.morphColors!==Qt||Lt.toneMapping!==he||Lt.morphTargetsCount!==ie)&&(Kt=!0):(Kt=!0,Lt.__version=Y.version);let Ce=Lt.currentProgram;Kt===!0&&(Ce=Vi(Y,z,k));let Gn=!1,Pe=!1,Si=!1;const ce=Ce.getUniforms(),Ne=Lt.uniforms;if(st.useProgram(Ce.program)&&(Gn=!0,Pe=!0,Si=!0),Y.id!==y&&(y=Y.id,Pe=!0),Gn||M!==S){st.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ce.setValue(C,"projectionMatrix",S.projectionMatrix),ce.setValue(C,"viewMatrix",S.matrixWorldInverse);const Ae=ce.map.cameraPosition;Ae!==void 0&&Ae.setValue(C,Et.setFromMatrixPosition(S.matrixWorld)),ot.logarithmicDepthBuffer&&ce.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ce.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Pe=!0,Si=!0)}if(k.isSkinnedMesh){ce.setOptional(C,k,"bindMatrix"),ce.setOptional(C,k,"bindMatrixInverse");const Se=k.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ce.setValue(C,"boneTexture",Se.boneTexture,Ut))}k.isBatchedMesh&&(ce.setOptional(C,k,"batchingTexture"),ce.setValue(C,"batchingTexture",k._matricesTexture,Ut),ce.setOptional(C,k,"batchingIdTexture"),ce.setValue(C,"batchingIdTexture",k._indirectTexture,Ut),ce.setOptional(C,k,"batchingColorTexture"),k._colorsTexture!==null&&ce.setValue(C,"batchingColorTexture",k._colorsTexture,Ut));const Fe=W.morphAttributes;if((Fe.position!==void 0||Fe.normal!==void 0||Fe.color!==void 0)&&Z.update(k,W,Ce),(Pe||Lt.receiveShadow!==k.receiveShadow)&&(Lt.receiveShadow=k.receiveShadow,ce.setValue(C,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ne.envMap.value=yt,Ne.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(Ne.envMapIntensity.value=z.environmentIntensity),Pe&&(ce.setValue(C,"toneMappingExposure",T.toneMappingExposure),Lt.needsLights&&Cl(Ne,Si),ct&&Y.fog===!0&&I.refreshFogUniforms(Ne,ct),I.refreshMaterialUniforms(Ne,Y,j,at,c.state.transmissionRenderTarget[S.id]),Ms.upload(C,Ua(Lt),Ne,Ut)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ms.upload(C,Ua(Lt),Ne,Ut),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ce.setValue(C,"center",k.center),ce.setValue(C,"modelViewMatrix",k.modelViewMatrix),ce.setValue(C,"normalMatrix",k.normalMatrix),ce.setValue(C,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Se=Y.uniformsGroups;for(let Ae=0,Fs=Se.length;Ae<Fs;Ae++){const bn=Se[Ae];Nt.update(bn,Ce),Nt.bind(bn,Ce)}}return Ce}function Cl(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function Pl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,z,W){const Y=ft.get(S);Y.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ft.get(S.texture).__webglTexture=z,ft.get(S.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:W,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,z){const W=ft.get(S);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const Dl=C.createFramebuffer();this.setRenderTarget=function(S,z=0,W=0){O=S,P=z,L=W;let Y=!0,k=null,ct=!1,vt=!1;if(S){const yt=ft.get(S);if(yt.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(C.FRAMEBUFFER,null),Y=!1;else if(yt.__webglFramebuffer===void 0)Ut.setupRenderTarget(S);else if(yt.__hasExternalTextures)Ut.rebindTextures(S,ft.get(S.texture).__webglTexture,ft.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Pt=S.depthTexture;if(yt.__boundDepthTexture!==Pt){if(Pt!==null&&ft.has(Pt)&&(S.width!==Pt.image.width||S.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ut.setupDepthRenderbuffer(S)}}const Ft=S.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(vt=!0);const Bt=ft.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Bt[z])?k=Bt[z][W]:k=Bt[z],ct=!0):S.samples>0&&Ut.useMultisampledRTT(S)===!1?k=ft.get(S).__webglMultisampledFramebuffer:Array.isArray(Bt)?k=Bt[W]:k=Bt,F.copy(S.viewport),V.copy(S.scissor),X=S.scissorTest}else F.copy(bt).multiplyScalar(j).floor(),V.copy(Dt).multiplyScalar(j).floor(),X=Wt;if(W!==0&&(k=Dl),st.bindFramebuffer(C.FRAMEBUFFER,k)&&Y&&st.drawBuffers(S,k),st.viewport(F),st.scissor(V),st.setScissorTest(X),ct){const yt=ft.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+z,yt.__webglTexture,W)}else if(vt){const yt=z;for(let Ft=0;Ft<S.textures.length;Ft++){const Bt=ft.get(S.textures[Ft]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ft,Bt.__webglTexture,W,yt)}}else if(S!==null&&W!==0){const yt=ft.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,yt.__webglTexture,W)}y=-1},this.readRenderTargetPixels=function(S,z,W,Y,k,ct,vt,wt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=ft.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt]),yt){st.bindFramebuffer(C.FRAMEBUFFER,yt);try{const Ft=S.textures[wt],Bt=Ft.format,Pt=Ft.type;if(!ot.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-Y&&W>=0&&W<=S.height-k&&(S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+wt),C.readPixels(z,W,Y,k,St.convert(Bt),St.convert(Pt),ct))}finally{const Ft=O!==null?ft.get(O).__webglFramebuffer:null;st.bindFramebuffer(C.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(S,z,W,Y,k,ct,vt,wt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=ft.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt]),yt)if(z>=0&&z<=S.width-Y&&W>=0&&W<=S.height-k){st.bindFramebuffer(C.FRAMEBUFFER,yt);const Ft=S.textures[wt],Bt=Ft.format,Pt=Ft.type;if(!ot.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Yt),C.bufferData(C.PIXEL_PACK_BUFFER,ct.byteLength,C.STREAM_READ),S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+wt),C.readPixels(z,W,Y,k,St.convert(Bt),St.convert(Pt),0);const Qt=O!==null?ft.get(O).__webglFramebuffer:null;st.bindFramebuffer(C.FRAMEBUFFER,Qt);const he=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Fc(C,he,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Yt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ct),C.deleteBuffer(Yt),C.deleteSync(he),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,z=null,W=0){const Y=Math.pow(2,-W),k=Math.floor(S.image.width*Y),ct=Math.floor(S.image.height*Y),vt=z!==null?z.x:0,wt=z!==null?z.y:0;Ut.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,W,0,0,vt,wt,k,ct),st.unbindTexture()};const Ll=C.createFramebuffer(),Il=C.createFramebuffer();this.copyTextureToTexture=function(S,z,W=null,Y=null,k=0,ct=null){ct===null&&(k!==0?(zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=k,k=0):ct=0);let vt,wt,yt,Ft,Bt,Pt,Yt,Qt,he;const ae=S.isCompressedTexture?S.mipmaps[ct]:S.image;if(W!==null)vt=W.max.x-W.min.x,wt=W.max.y-W.min.y,yt=W.isBox3?W.max.z-W.min.z:1,Ft=W.min.x,Bt=W.min.y,Pt=W.isBox3?W.min.z:0;else{const Fe=Math.pow(2,-k);vt=Math.floor(ae.width*Fe),wt=Math.floor(ae.height*Fe),S.isDataArrayTexture?yt=ae.depth:S.isData3DTexture?yt=Math.floor(ae.depth*Fe):yt=1,Ft=0,Bt=0,Pt=0}Y!==null?(Yt=Y.x,Qt=Y.y,he=Y.z):(Yt=0,Qt=0,he=0);const ie=St.convert(z.format),Lt=St.convert(z.type);let le;z.isData3DTexture?(Ut.setTexture3D(z,0),le=C.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ut.setTexture2DArray(z,0),le=C.TEXTURE_2D_ARRAY):(Ut.setTexture2D(z,0),le=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,z.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,z.unpackAlignment);const Kt=C.getParameter(C.UNPACK_ROW_LENGTH),Ce=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Gn=C.getParameter(C.UNPACK_SKIP_PIXELS),Pe=C.getParameter(C.UNPACK_SKIP_ROWS),Si=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ae.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ae.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ft),C.pixelStorei(C.UNPACK_SKIP_ROWS,Bt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Pt);const ce=S.isDataArrayTexture||S.isData3DTexture,Ne=z.isDataArrayTexture||z.isData3DTexture;if(S.isDepthTexture){const Fe=ft.get(S),Se=ft.get(z),Ae=ft.get(Fe.__renderTarget),Fs=ft.get(Se.__renderTarget);st.bindFramebuffer(C.READ_FRAMEBUFFER,Ae.__webglFramebuffer),st.bindFramebuffer(C.DRAW_FRAMEBUFFER,Fs.__webglFramebuffer);for(let bn=0;bn<yt;bn++)ce&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ft.get(S).__webglTexture,k,Pt+bn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ft.get(z).__webglTexture,ct,he+bn)),C.blitFramebuffer(Ft,Bt,vt,wt,Yt,Qt,vt,wt,C.DEPTH_BUFFER_BIT,C.NEAREST);st.bindFramebuffer(C.READ_FRAMEBUFFER,null),st.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||ft.has(S)){const Fe=ft.get(S),Se=ft.get(z);st.bindFramebuffer(C.READ_FRAMEBUFFER,Ll),st.bindFramebuffer(C.DRAW_FRAMEBUFFER,Il);for(let Ae=0;Ae<yt;Ae++)ce?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Fe.__webglTexture,k,Pt+Ae):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Fe.__webglTexture,k),Ne?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Se.__webglTexture,ct,he+Ae):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Se.__webglTexture,ct),k!==0?C.blitFramebuffer(Ft,Bt,vt,wt,Yt,Qt,vt,wt,C.COLOR_BUFFER_BIT,C.NEAREST):Ne?C.copyTexSubImage3D(le,ct,Yt,Qt,he+Ae,Ft,Bt,vt,wt):C.copyTexSubImage2D(le,ct,Yt,Qt,Ft,Bt,vt,wt);st.bindFramebuffer(C.READ_FRAMEBUFFER,null),st.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ne?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(le,ct,Yt,Qt,he,vt,wt,yt,ie,Lt,ae.data):z.isCompressedArrayTexture?C.compressedTexSubImage3D(le,ct,Yt,Qt,he,vt,wt,yt,ie,ae.data):C.texSubImage3D(le,ct,Yt,Qt,he,vt,wt,yt,ie,Lt,ae):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ct,Yt,Qt,vt,wt,ie,Lt,ae.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ct,Yt,Qt,ae.width,ae.height,ie,ae.data):C.texSubImage2D(C.TEXTURE_2D,ct,Yt,Qt,vt,wt,ie,Lt,ae);C.pixelStorei(C.UNPACK_ROW_LENGTH,Kt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ce),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Gn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Pe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Si),ct===0&&z.generateMipmaps&&C.generateMipmap(le),st.unbindTexture()},this.initRenderTarget=function(S){ft.get(S).__webglFramebuffer===void 0&&Ut.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ut.setTextureCube(S,0):S.isData3DTexture?Ut.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ut.setTexture2DArray(S,0):Ut.setTexture2D(S,0),st.unbindTexture()},this.resetState=function(){P=0,L=0,O=null,st.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $e}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const Xo={type:"change"},Ca={type:"start"},wl={type:"end"},fs=new Ls,Yo=new mn,lm=Math.cos(70*gn.DEG2RAD),fe=new N,we=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},mr=1e-6;class cm extends yh{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:xn.ROTATE,TWO:xn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Bn,this._lastTargetPosition=new N,this._quat=new Bn().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ia,this._sphericalDelta=new ia,this._scale=1,this._panOffset=new N,this._rotateStart=new It,this._rotateEnd=new It,this._rotateDelta=new It,this._panStart=new It,this._panEnd=new It,this._panDelta=new It,this._dollyStart=new It,this._dollyEnd=new It,this._dollyDelta=new It,this._dollyDirection=new N,this._mouse=new It,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=um.bind(this),this._onPointerDown=hm.bind(this),this._onPointerUp=dm.bind(this),this._onContextMenu=vm.bind(this),this._onMouseWheel=mm.bind(this),this._onKeyDown=_m.bind(this),this._onTouchStart=gm.bind(this),this._onTouchMove=xm.bind(this),this._onMouseDown=fm.bind(this),this._onMouseMove=pm.bind(this),this._interceptControlDown=Mm.bind(this),this._interceptControlUp=Sm.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xo),this.update(),this.state=ee.NONE}update(t=null){const e=this.object.position;fe.copy(e).sub(this.target),fe.applyQuaternion(this._quat),this._spherical.setFromVector3(fe),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=we:n>Math.PI&&(n-=we),s<-Math.PI?s+=we:s>Math.PI&&(s-=we),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(fe.setFromSpherical(this._spherical),fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=fe.length();o=this._clampDistance(a*this._scale);const h=a-o;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),r=!!h}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=h!==this.object.zoom;const l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(fs.origin.copy(this.object.position),fs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fs.direction))<lm?this.object.lookAt(this.target):(Yo.setFromNormalAndCoplanarPoint(this.object.up,this.target),fs.intersectPlane(Yo,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>mr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>mr||this._lastTargetPosition.distanceToSquared(this.target)>mr?(this.dispatchEvent(Xo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?we/60*this.autoRotateSpeed*t:we/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){fe.setFromMatrixColumn(e,0),fe.multiplyScalar(-t),this._panOffset.add(fe)}_panUp(t,e){this.screenSpacePanning===!0?fe.setFromMatrixColumn(e,1):(fe.setFromMatrixColumn(e,0),fe.crossVectors(this.object.up,fe)),fe.multiplyScalar(t),this._panOffset.add(fe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;fe.copy(s).sub(this.target);let r=fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(we*this._rotateDelta.x/e.clientHeight),this._rotateUp(we*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(we*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-we*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(we*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-we*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(we*this._rotateDelta.x/e.clientHeight),this._rotateUp(we*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new It,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function hm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function um(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function dm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wl),this.state=ee.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function fm(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ee.DOLLY;break;case li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}break;case li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Ca)}function pm(i){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function mm(i){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(i.preventDefault(),this.dispatchEvent(Ca),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(wl))}function _m(i){this.enabled!==!1&&this._handleKeyDown(i)}function gm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case xn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ee.TOUCH_ROTATE;break;case xn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case xn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ee.TOUCH_DOLLY_PAN;break;case xn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Ca)}function xm(i){switch(this._trackPointer(i),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ee.NONE}}function vm(i){this.enabled!==!1&&i.preventDefault()}function Mm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Em extends pl{constructor(){super();const t=new Vn;t.deleteAttribute("uv");const e=new Cs({side:Te}),n=new Cs,s=new gh(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new ue(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new _l(t,n,6),a=new pe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const h=new ue(t,ri(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const l=new ue(t,ri(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const f=new ue(t,ri(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);const d=new ue(t,ri(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const m=new ue(t,ri(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const x=new ue(t,ri(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function ri(i){return new dh({color:0,emissive:16777215,emissiveIntensity:i})}const qo=[{id:"main-building",key:"west-hall",x:-39,z:-5,w:34,d:12,y:6,h:7.4,roof:"gable-x"},{id:"main-building",key:"west-gable",x:-53,z:-2,w:9,d:19,y:6,h:6.3,roof:"gable-z"},{id:"main-building",key:"rear-gable",x:-42,z:-15,w:13,d:22,y:6,h:7.4,roof:"gable-z"},{id:"learning-wing",key:"rear-gallery",x:-2,z:-20,w:56,d:10,y:6,h:7.4,roof:"gable-x",gallery:!0},{id:"tech-lab",key:"technology",x:30,z:-3,w:28,d:22,y:6,h:6.7,roof:"hip",glass:!0},{id:"dining-a",key:"lakeside-dining",x:-40,z:31,w:24,d:15,y:2,h:4.7,roof:"gable-x",dining:!0},{id:"dining-b",key:"garden-dining",x:-6,z:48,w:25,d:16,y:0,h:5,roof:"hip",dining:!0},{id:"workshop",key:"workshop",x:32,z:44,w:15,d:11,y:0,h:4.6,roof:"gable-x"},{id:"residence",key:"residence",x:69,z:-40,w:37,d:11,y:8,h:7,roof:"gable-x",gallery:!0},{id:"library",key:"mountain-library",x:66,z:-67,w:33,d:10,y:24,h:4.9,roof:"planted",glass:!0}],Ps={"main-building":{point:[-28,24,-3],focus:[-35,10,-3],radius:34},"learning-wing":{point:[-1,17,-19],focus:[-2,10,-17],radius:34},courtyard:{point:[-6,20,8],focus:[-6,9,8],radius:28},"tech-lab":{point:[30,19,-3],focus:[30,9,0],radius:31},"dining-a":{point:[-40,10,31],focus:[-40,4,34],radius:28},"dining-b":{point:[-6,9,48],focus:[-6,3,50],radius:28},workshop:{point:[32,8,44],focus:[40,3,45],radius:29},"football-field":{point:[73,3,13],focus:[73,3,10],radius:43},residence:{point:[69,19,-40],focus:[69,11,-38],radius:34},library:{point:[66,31,-66],focus:[66,26,-63],radius:32},"ideas-garden":{point:[20,3,67],focus:[20,1,65],radius:27}},Ii={"gaming-zone":"tech-lab","quiet-room":"learning-wing"},ym=i=>Ps[Ii[i]||i],aa={"main-building":[[-23,6.2,4],[-23,6.2,10]],courtyard:[[-23,6.2,4],[-23,6.2,10],[-18,6.2,16],[-9,6.2,20]],"learning-wing":[[-23,6.2,4],[-23,6.2,10],[-20,6.2,-8],[-3,6.2,-12]],"tech-lab":[[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[7,6.2,20],[17,6.2,11],[24,6.2,10]],"dining-a":[[-23,6.2,4],[-23,6.2,10],[-25,6.2,18],[-26,2.2,25],[-28,2.2,38]],"dining-b":[[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[-20,2.2,28],[-21,2.2,38],[-21,.2,48]],workshop:[[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[7,6.2,20],[14,.2,32],[22,.2,49],[27,.2,51]],"football-field":[[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[7,6.2,20],[18,2.2,24],[48,2.2,24],[49,2.2,15]],residence:[[-23,6.2,4],[-23,6.2,10],[-20,6.2,-8],[8,6.2,-12],[12,6.2,-29],[45,8.2,-29],[69,8.2,-32]],library:[[-23,6.2,4],[-23,6.2,10],[-20,6.2,-8],[8,6.2,-12],[12,6.2,-29],[36,8.2,-29],[40,13,-44],[51,18,-48],[49,24.2,-58],[58,24.2,-60]],"ideas-garden":[[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[7,6.2,20],[14,.2,32],[22,.2,49],[20,.2,66]]},Tm=i=>aa[Ii[i]||i]||[],Ye={x:-6,z:8},bm={x:73,z:11,y:2.12,w:43,d:64};function ps(i,t){const e=(o,a,h)=>{const l=Math.max(0,Math.min(1,(h-o)/(a-o)));return l*l*(3-2*l)},n=6*(1-e(17,33,t))*(1-e(42,53,i))*e(-69,-60,i),s=-4*(1-e(-65,-43,t)),r=44*Math.exp(-(((i-94)/46)**2)-((t+91)/48)**2)*e(25,48,i)*(1-e(-29,-23,t));return Math.max(n,r)+s}function Am({width:i=400,depth:t=75,height:e=48,seed:n=0}={}){const s=new vi(i,t,112,22);s.rotateX(-Math.PI/2);const r=s.attributes.position,o=[],a=new Ht("#274b3c"),h=new Ht("#6a7975"),l=new Ht("#e5ebe8"),f=new Ht;for(let d=0;d<r.count;d++){const m=r.getX(d),x=r.getZ(d),v=m/i,g=.46+.17*Math.sin(v*21+n)+.12*Math.sin(v*43+n*1.7)+.065*Math.sin(v*81+n),_=Math.pow(Math.max(0,1-Math.abs(x/(t*.56))),.85),c=Math.sin(m*.27+x*.33+n)*2.2+Math.sin(m*.61-x*.22)*1.2+Math.sin(m*1.7+x*.75)*.45,w=Math.max(-2,e*g*_+c*_-1);r.setY(d,w);const A=w/e;f.copy(a).lerp(h,gn.smoothstep(A+Math.sin(m*.61+x*.9)*.04,.24,.53)),f.lerp(l,gn.smoothstep(A+Math.sin(m*.21)*.025,.55,.65)),o.push(f.r,f.g,f.b)}return s.setAttribute("color",new Jt(o,3)),s.computeVertexNormals(),new ue(s,new Cs({vertexColors:!0,roughness:1}))}function wm(i,t=()=>!1){i.updateMatrixWorld(!0);const e=new Map;i.traverse(n=>{if(!n.isMesh||n.isInstancedMesh||n.material.transparent||Array.isArray(n.material)||t(n))return;const s=[n.geometry.uuid,n.material.uuid,n.castShadow,n.receiveShadow,n.customDepthMaterial?.uuid].join(":");e.has(s)||e.set(s,[]),e.get(s).push(n)});for(const n of e.values()){if(n.length<4)continue;const s=n[0],r=new _l(s.geometry,s.material,n.length);r.castShadow=s.castShadow,r.receiveShadow=s.receiveShadow,r.customDepthMaterial=s.customDepthMaterial,n.forEach((o,a)=>{r.setMatrixAt(a,o.matrixWorld),o.removeFromParent()}),r.computeBoundingSphere(),i.add(r)}}function Rm({vegetation:i=!0}={}){const t=new vn;t.name="Serenity reference campus";const e={},n=[],s=[],r=[];let o=241026;const a=()=>(o=1664525*o+1013904223>>>0)/4294967296,h=new Vn(1,1,1),l=new _i(1,1,1,12),f=new Rs(1,1),d=new Rs(1,1),m=new ws(1,1,9,1);function x(b){const u=new Uint8Array(65536);for(let R=0;R<128;R++)for(let I=0;I<128;I++){let U=.9+a()*.1;if(b==="stone"){const H=Math.floor(R/24);(R%24<2||(I+H%2*32)%64<2)&&(U=.67)}b==="wood"&&(U=.82+.09*Math.sin(I*.7+Math.sin(R*.07)*.7)+a()*.09),b==="grass"&&(U=.72+a()*.28);const G=(R*128+I)*4;u[G]=u[G+1]=u[G+2]=Math.round(U*255),u[G+3]=255}const E=new ml(u,128,128,Be);return E.needsUpdate=!0,E.wrapS=E.wrapT=Ss,E.repeat.set(b==="grass"?28:3,b==="grass"?28:2),E.colorSpace=Re,r.push(E),E}const v=(b,p={})=>new Cs({color:b,roughness:.83,...p}),g={stone:v("#e9ddbf",{map:x("stone")}),pale:v("#e9dfc9"),oak:v("#b98543",{map:x("wood")}),oakLight:v("#d4a55f"),darkWood:v("#664e32"),roof:v("#434e55",{roughness:.48,metalness:.32}),seam:v("#68777e",{roughness:.42,metalness:.4}),trim:v("#36493e"),glass:v("#b9bcb0",{roughness:.19,metalness:.28,transparent:!0,opacity:.34,depthWrite:!1}),window:v("#818c87",{roughness:.2,metalness:.42,emissive:"#d0a04d",emissiveIntensity:.15}),warm:v("#dbbc79",{emissive:"#ad7428",emissiveIntensity:.16}),floor:v("#b7aa8e"),path:v("#d5cab1"),pathEdge:v("#b6ac92"),grass:v("#7c8c46",{map:x("grass")}),turf:v("#577b3d"),turf2:v("#66864b"),leaves:[v("#657b32"),v("#869348"),v("#476b35"),v("#a3a15a")],pines:[v("#294937"),v("#385e3b"),v("#4d6a3b"),v("#6b7c42")],rock:[v("#7e8171"),v("#a4a391"),v("#c0bba7")],water:v("#4c92aa",{metalness:.45,roughness:.27}),waterLine:v("#9bc4c4",{metalness:.3,roughness:.3}),white:v("#eeeadd"),metal:v("#5e6b62",{metalness:.55,roughness:.45}),soil:v("#6a6248"),skin:v("#b48b65"),clothes:[v("#344e62"),v("#c0b691"),v("#687a88"),v("#975c3f"),v("#405d4c")],flowers:[v("#d5c580"),v("#b896b2"),v("#d6d8bd")]};function _(b,p,u,E=[1,1,1],R=t){const I=new ue(b,p);return I.position.set(...u),I.scale.set(...E),I.castShadow=!0,I.receiveShadow=!0,R.add(I),I}const c=(b,p,u,E=t)=>_(h,b,p,u,E),w=(b,p,u,E,R=t)=>_(l,b,p,[u,E,u],R);function A(b,p,u,E=g.oak,R=t,I=u){const U=new N(...b),G=new N(...p),H=U.clone().add(G).multiplyScalar(.5),it=c(E,H.toArray(),[u,U.distanceTo(G),I],R);return it.quaternion.setFromUnitVectors(new N(0,1,0),G.sub(U).normalize()),it}function T(b,p,u=t,E=1.05){const R=Math.hypot(p[0]-b[0],p[2]-b[2]),I=Math.max(1,Math.ceil(R/1.8));A([b[0],b[1]+E,b[2]],[p[0],p[1]+E,p[2]],.09,g.metal,u),A([b[0],b[1]+.5,b[2]],[p[0],p[1]+.5,p[2]],.045,g.metal,u);for(let U=0;U<=I;U++){const G=U/I,H=b[0]+(p[0]-b[0])*G,it=b[1]+(p[1]-b[1])*G,K=b[2]+(p[2]-b[2])*G;c(g.metal,[H,it+E/2,K],[.065,E,.065],u)}}function D(b,p,u=2.4,E=t,R=g.path){const I=A(b,p,u,R,E,.13);I.quaternion.setFromUnitVectors(new N(0,1,0),new N(p[0]-b[0],p[1]-b[1],p[2]-b[2]).normalize());const U=Math.hypot(p[0]-b[0],p[2]-b[2]);I.removeFromParent();const G=new xe;b[0],b[1],b[2],p[0],p[1],p[2];const H=(p[0]-b[0])/U,it=(p[2]-b[2])/U,K=[b[0]-it*u/2,b[1],b[2]+H*u/2,b[0]+it*u/2,b[1],b[2]-H*u/2,p[0]+it*u/2,p[1],p[2]-H*u/2,p[0]-it*u/2,p[1],p[2]+H*u/2];G.setAttribute("position",new Jt(K,3)),G.setIndex([0,2,1,0,3,2]),G.computeVertexNormals();const Z=_(G,R,[0,0,0],[1,1,1],E);return Z.material.side=je,Z.castShadow=!1,Z}function P(b=!1){const p=b?.29:.5,u=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[-p,1,0],[p,1,0]],E=[[0,1,5,4],[3,4,5,2],[0,4,3],[1,2,5],[0,3,2,1]],R=[],I=[];for(const G of E)for(let H=1;H<G.length-1;H++){let it=[G[0],G[H],G[H+1]];const K=it.map(Tt=>new N(...u[Tt])),Z=K[1].clone().sub(K[0]).cross(K[2].clone().sub(K[0])),rt=K[0].clone().add(K[1]).add(K[2]).multiplyScalar(1/3).sub(new N(0,.25,0));Z.dot(rt)<0&&(it=[it[0],it[2],it[1]]);for(const Tt of it)R.push(...u[Tt]),I.push(u[Tt][0]+.5,u[Tt][2]+.5)}const U=new xe;return U.setAttribute("position",new Jt(R,3)),U.setAttribute("uv",new Jt(I,2)),U.computeVertexNormals(),U}const L=P(),O=P(!0),y=[];function M(b,p,u,E,R,I,U,G,H){const it=U==="gable-z",K=it?R:E,Z=it?E:R,rt=_(U==="hip"?O:L,g.roof,[b,p,u],[K,I,Z],G);it&&(rt.rotation.y=Math.PI/2),rt.name=`Closed roof · ${H}`,rt.userData={roof:!0,closed:!0,place:H},n.push(rt),c(g.roof,[b,p-.09,u],[E,.22,R],G);for(const St of[-1,1])c(g.trim,[b,p-.18,u+St*R/2],[E+.08,.19,.16],G),c(g.trim,[b+St*E/2,p-.18,u],[.16,.19,R+.08],G);const Tt=(St,_t)=>{for(const Nt of[St,_t])y.push(it?b+Nt[2]:b+Nt[0],p+Nt[1]+.035,it?u-Nt[0]:u+Nt[2])};for(let St=-K/2+.2;St<K/2;St+=.58){const _t=U==="hip"?Math.min(1,(K/2-Math.abs(St))/(K*.21)):1,Nt=U==="hip"?Math.min(K*.29,Math.max(-K*.29,St)):St;for(const B of[-1,1])Tt([St,0,B*Z/2],[Nt,I*_t,0])}return c(g.seam,[b,p+I+.05,u],it?[.15,.12,R*(U==="hip"?.58:1)]:[E*(U==="hip"?.58:1),.12,.15],G),rt}function F(b,p,u,E,R,I,U=!1){const G=(it,K,Z)=>U?[u+Z,p+K,b+it]:[b+it,p+K,u+Z],H=(it,K,Z)=>U?[Z,K,it]:[it,K,Z];c(g.window,G(0,0,.035),H(E,R,.08),I);for(const it of[-E/2,0,E/2])c(g.darkWood,G(it,0,.12),H(.085,R+.15,.13),I);for(const it of[-R/2,0,R/2])c(g.oak,G(0,it,.13),H(E+.15,.08,.14),I);c(g.pale,G(0,-R/2-.12,.1),H(E+.35,.16,.45),I)}function V(b,p){const{x:u,y:E,z:R,w:I,d:U}=b,G=R+U/2+1.3;c(g.floor,[u,E+3.4,G],[I+.6,.28,2.7],p);for(let H=u-I/2;H<=u+I/2+.1;H+=3.1)c(g.oak,[H,E+3.6,G+1.1],[.23,7.1,.23],p),c(g.oakLight,[H,E+6.65,G+.75],[.75,.18,.7],p);T([u-I/2,E+3.55,G+1.3],[u+I/2,E+3.55,G+1.3],p),c(g.oak,[u,E+6.9,G+1.1],[I+.7,.24,.27],p)}function X(b,p,u,E=t){const R=c(new Is({visible:!1}),p,u,E);R.name=`Pick volume · ${b}`,R.visible=!1,R.userData.place=b,s.push(R)}function $(b){const{id:p,x:u,y:E,z:R,w:I,d:U,h:G}=b,H=new vn;if(H.name=b.key,H.userData={place:p,architecturalVolume:!0,...b},t.add(H),(e[p]||=[]).push(H),c(g.stone,[u,E-.25,R],[I+.6,.5,U+.6],H),b.glass||b.dining){c(g.pale,[u,E+G/2,R-U/2],[I,G,.45],H),c(g.floor,[u,E+.15,R],[I,.3,U],H),c(g.oak,[u,E+G-.12,R],[I,.25,U],H);for(const K of[-1,1]){c(g.glass,[u+K*I/2,E+G/2,R],[.07,G-.3,U],H);for(let Z=R-U/2;Z<=R+U/2+.01;Z+=2)c(g.oak,[u+K*I/2,E+G/2,Z],[.15,G,.15],H)}c(g.glass,[u,E+G/2,R+U/2],[I,G-.25,.08],H);for(let K=u-I/2;K<=u+I/2+.01;K+=2)c(g.oak,[K,E+G/2,R+U/2],[.16,G,.18],H),b.dining&&c(g.oak,[K,E+G/2,R+U/2+1.5],[.19,G,.19],H);for(const K of[.25,G*.66,G-.05])c(g.oak,[u,E+K,R+U/2],[I,.13,.18],H);for(let K=u-I/2+2;K<u+I/2-1;K+=4)for(let Z=R-U/2+3;Z<R+U/2-1;Z+=3.8){c(g.oakLight,[K,E+1,Z],[2.1,.13,1.15],H);for(const rt of[-.8,.8]){c(g.darkWood,[K+rt,E+.5,Z],[.1,1,.1],H);for(const Tt of[-1,1])c(g.oak,[K+rt,E+.54,Z+Tt],[.5,.12,.5],H),c(g.oak,[K+rt,E+.87,Z+Tt*1.2],[.5,.7,.1],H)}}for(let K=u-I/2+2;K<u+I/2;K+=4)c(g.warm,[K,E+G-.5,R],[1.4,.08,.35],H)}else{c(g.stone,[u,E+G/2,R],[I,G,U],H);for(const K of[-1,1]){c(g.oak,[u,E+G*.75,R+K*(U/2+.02)],[I,G*.42,.12],H);for(let Z=u-I/2+1.8;Z<u+I/2-1;Z+=2.8)for(let rt=0;rt<2;rt++)F(Z,E+1.85+rt*3.35,R+K*(U/2+.14),1.65,2.1,H);for(let Z=R-U/2+2;Z<R+U/2-1;Z+=3)for(let rt=0;rt<2;rt++)F(Z,E+1.85+rt*3.35,u+K*(I/2+.14),1.6,2.1,H,!0);c(g.pale,[u,E+3.35,R+K*(U/2+.09)],[I+.2,.22,.3],H)}for(let K=u-I/2+.6;K<u+I/2;K+=1.4)c(g.pale,[K,E+.35,R+U/2+.12],[1.2,.5,.3],H)}if(b.gallery&&V(b,H),b.roof==="planted"){c(g.pale,[u,E+G+.18,R],[I+1,.4,U+1],H),c(g.grass,[u,E+G+.43,R-1],[I+.4,.16,U-1],H);const K=H.children.at(-2);K.userData={roof:!0,closed:!0,place:p},n.push(K);for(const Z of[-1,1])c(g.stone,[u+Z*(I/2+.1),E+G/2,R],[.8,G+1,U+1],H);for(let Z=u-I/2+1;Z<u+I/2;Z+=2){c(g.oak,[Z,E+2.35,R-2],[1.3,4,.35],H);for(let rt=.6;rt<4.3;rt+=.65){c(g.oakLight,[Z,E+rt,R-1.8],[1.3,.09,.75],H);for(let Tt=0;Tt<6;Tt++)c(g.clothes[Tt%5],[Z-.5+Tt*.17,E+rt+.22,R-1.7],[.12,.35,.3],H)}}}else M(u,E+G,R,I+1.7,U+1.8,b.roof==="hip"?3:2.8,b.roof,H,p);return X(p,[u,E+G/2+1,R],[I,G+3,U],H),H}const J=new vi(340,245,100,80);J.rotateX(-Math.PI/2);for(let b=0;b<J.attributes.position.count;b++){const p=J.attributes.position,u=p.getX(b)+25,E=p.getZ(b)+5;p.setXYZ(b,u,ps(u,E),E)}J.computeVertexNormals();const q=_(J,g.grass,[0,0,0]);q.name="Sculpted campus terraces and hillside",q.castShadow=!1;const at=c(g.water,[-140,-2.6,-165],[560,.15,215]);at.name="Lake",at.castShadow=!1;for(let b=0;b<95;b++){const p=-230+a()*420,u=-66-a()*160;c(g.waterLine,[p,-2.49,u],[2+a()*9,.012,.025]).castShadow=!1}for(let b=0;b<4;b++){const p=Am({width:850,depth:110,height:120+b*24,seed:8+b*7});p.position.set(-70+b*40,-5,-280-b*65),p.name="Distant alpine ridgeline",t.add(p)}c(g.stone,[-7,3,0],[106,6,43]),c(g.grass,[-7,6.03,0],[105,.12,42]),c(g.stone,[30,3,-2],[31,6,25]);const j=(b,p,u,E,R)=>{c(g.stone,[b,R-1.1,p],[u,2.2,E]),c(g.path,[b,R+.025,p],[u-.25,.15,E-.25]),T([b-u/2,R+.12,p+E/2],[b+u/2,R+.12,p+E/2])};j(-40,35,31,29,1.85),j(-6,52,33,30,-.1),j(42,47,39,21,-.1);function ut(b,p,u){const E=Math.max(3,Math.ceil(Math.abs(p[1]-b[1])/.21)),R=(p[0]-b[0])/E,I=(p[2]-b[2])/E,U=(p[1]-b[1])/E;for(let K=0;K<E;K++){const Z=c(g.path,[b[0]+R*(K+.5),b[1]+U*(K+.5)-.12,b[2]+I*(K+.5)],[u,.25,Math.hypot(R,I)+.1]);Z.rotation.y=Math.atan2(R,I)}const G=Math.hypot(p[0]-b[0],p[2]-b[2]),H=-(p[2]-b[2])/G,it=(p[0]-b[0])/G;for(const K of[-1,1])T([b[0]+K*H*u/2,b[1],b[2]+K*it*u/2],[p[0]+K*H*u/2,p[1],p[2]+K*it*u/2])}ut([-26,6.1,18],[-26,2,26],4.2),ut([11,6.1,20],[15,0,33],5),ut([-21,2,38],[-21,0,45],3.5),ut([-6,0,67],[-6,-1.4,72],5);const gt=new Set;for(const b of Object.values(aa))for(let p=1;p<b.length;p++){const u=b[p-1],E=b[p],R=[u,E].sort().join("|");gt.has(R)||(gt.add(R),D(u,E,2.3),Math.abs(u[1]-E[1])>1&&ut(u,E,2.8))}qo.forEach($);const bt=e["tech-lab"][0];c(g.glass,[30,3.4,9.14],[25,4.4,.1],bt);for(let b=18;b<=42;b+=2)c(g.oak,[b,3.4,9.22],[.15,4.5,.2],bt);for(let b=19;b<=40;b+=3)c(g.warm,[b,2.2,8.3],[1.5,.13,.8],bt);c(g.path,[30,6.08,12],[31,.2,5]),T([14.5,6.2,14.5],[45.5,6.2,14.5]),M(30,15,-5,18,13,1.7,"hip",bt,"tech-lab");const Dt=e["main-building"][0],Wt=-28,Ot=-3;c(g.stone,[Wt,14.6,Ot],[5.2,17.2,5.2],Dt);for(const b of[-1,1])c(g.pale,[Wt,21.9,Ot+b*2.65],[5.6,.3,.3],Dt),F(Wt,13,Ot+b*2.65,1,4.3,Dt);c(g.darkWood,[Wt,22.3,Ot],[5.25,.8,5.25],Dt);for(let b=-4;b<=4;b++)for(const p of[-1,1])c(g.oakLight,[Wt+b*.52,22.35,Ot+p*2.65],[.14,.7,.12],Dt);M(Wt,22.8,Ot,6.7,6.7,1.65,"hip",Dt,"main-building");function qt(b,p,u,E){const R=new vn;R.position.set(b,p,u),R.rotation.y=E,Dt.add(R);const I=_(new ya(1.17,48),g.white,[0,0,0],[1,1,1],R);I.castShadow=!1;for(let U=0;U<12;U++){const G=U*Math.PI/6,H=c(g.trim,[Math.sin(G)*.95,Math.cos(G)*.95,.04],[.055,.16,.035],R);H.rotation.z=-G}A([0,0,.075],[-.38,.53,.075],.055,g.trim,R),A([0,0,.09],[.7,.14,.09],.045,g.trim,R)}qt(Wt,20,Ot+2.64,0),qt(Wt+2.64,20,Ot,Math.PI/2),M(-23,9.8,4.3,7.4,5.8,1.8,"gable-z",Dt,"main-building");for(const b of[-25.7,-20.3])c(g.oak,[b,7.9,6.5],[.26,3.8,.26],Dt);A([-25.7,9.65,6.8],[-23,11.2,6.8],.18,g.oak,Dt),A([-23,11.2,6.8],[-20.3,9.65,6.8],.18,g.oak,Dt),w(g.path,[Ye.x,6.08,Ye.z],14,.16),w(g.pale,[Ye.x,6.2,Ye.z],5.2,.3),w(g.grass,[Ye.x,6.4,Ye.z],4.8,.2);const tt=(b,p,u,E=0,R=Math.PI*2,I=.09)=>{const U=new Aa(b,I,6,96,R),G=_(U,p,[Ye.x,u,Ye.z]);return G.rotation.x=Math.PI/2,G.rotation.z=E,G};tt(13.5,g.pathEdge,6.19,0,Math.PI*2,.08);for(let b=0;b<4;b++){const p=b*Math.PI/2+.12;for(const u of[5.45,5.65,5.85])tt(u,g.oakLight,6.85,p,1.22,.085);tt(6.03,g.oak,7.4,p,1.22,.09);for(let u=0;u<4;u++){const E=p+u*.38,R=Ye.x+Math.cos(E)*5.8,I=Ye.z-Math.sin(E)*5.8;c(g.metal,[R,6.57,I],[.14,.8,.14])}}function nt(b,p,u,E=7,R=3.5,I=t){_(new _i(.22,.4,1,8),g.darkWood,[b,p+E*.35,u],[E/7,E*.7,E/7],I);for(let G=0;G<7;G++){const H=G*2.3999,it=Math.cos(H)*R*.6,K=Math.sin(H)*R*.6;A([b,p+E*.38,u],[b+it,p+E*(.7+G%2*.1),u+K],.18*E/8,g.darkWood,I)}const U=E>11?64:13;for(let G=0;G<U;G++){const H=a()*Math.PI*2,it=Math.sqrt(a())*R,K=.7+a()*.65;_(f,g.leaves[G%4],[b+Math.cos(H)*it,p+E*.72+a()*E*.24,u+Math.sin(H)*it],[R*.38*K,E*.14*K,R*.37*K],I)}}nt(-6,6.5,8,14,7.8),X("courtyard",[-6,7.4,8],[25,2.5,25]);function Et(b,p,u,E=t,R=!1){w(g.oakLight,[b,p+.84,u],.74,.12,E),w(g.metal,[b,p+.4,u],.065,.8,E);for(let I=0;I<4;I++){const U=I*Math.PI/2,G=b+Math.cos(U)*1.05,H=u+Math.sin(U)*1.05;c(g.oak,[G,p+.48,H],[.46,.12,.46],E),c(g.darkWood,[G,p+.24,H],[.07,.48,.07],E);const it=c(g.oak,[G+Math.cos(U)*.2,p+.75,H+Math.sin(U)*.2],[.49,.6,.08],E);it.rotation.y=Math.PI/2-U}R&&(w(g.oak,[b,p+1.55,u],.055,3.1,E),_(new ws(1.55,.4,8,1,!1),g.white,[b,p+3.12,u],[1,1,1],E))}for(const[b,p,u]of[[-40,43,2],[-6,61,.05]])for(let E=-2;E<=2;E++)Et(b+E*4.8,u,p,t,E%2===0),E%2&&Et(b+E*4.8,u,p-3.4);for(const b of[40,52])for(let p=41;p<=60;p+=4.75)c(g.oak,[p,1.8,b],[.22,3.6,.22]);for(const b of[40,52])c(g.oak,[50.5,3.55,b],[20,.27,.27]);for(let b=40.5;b<=60.5;b+=.9)c(g.oakLight,[b,3.78,46],[.16,.24,12.8]);for(let b=0;b<12;b++)_(f,g.leaves[b%4],[42+a()*17,3.95,40+a()*11],[1.2,.3,.7]);for(let b=43;b<=58;b+=5)Et(b,.05,47);const{x:mt,z:Mt,y:Rt,w:jt,d:C}=bm;c(g.stone,[mt,Rt-.6,Mt],[jt+5,1.15,C+5]),c(g.turf,[mt,Rt,Mt],[jt,.15,C]);for(let b=0;b<10;b++)c(b%2?g.turf:g.turf2,[mt,Rt+.09,Mt-C/2+(b+.5)*C/10],[jt,.02,C/10]);const Q=(b,p,u=.13)=>D([b[0],Rt+.13,b[1]],[p[0],Rt+.13,p[1]],u,t,g.white),dt=(b,p,u,E)=>{Q([b-u/2,p-E/2],[b+u/2,p-E/2]),Q([b+u/2,p-E/2],[b+u/2,p+E/2]),Q([b+u/2,p+E/2],[b-u/2,p+E/2]),Q([b-u/2,p+E/2],[b-u/2,p-E/2])};dt(mt,Mt,jt-.8,C-.8),Q([mt-jt/2+.4,Mt],[mt+jt/2-.4,Mt]);const ot=_(new ba(6,6.13,64),g.white,[mt,Rt+.14,Mt]);ot.rotation.x=-Math.PI/2,ot.castShadow=!1;for(const b of[-1,1]){const p=Mt+b*(C/2-.4);dt(mt,p-b*6.5,22,13),dt(mt,p-b*2.5,10,5),w(g.white,[mt,Rt+.15,p-b*9],.16,.015);for(const u of[-3.66,3.66])A([mt+u,Rt,p],[mt+u,Rt+2.44,p],.1,g.white);A([mt-3.66,Rt+2.44,p],[mt+3.66,Rt+2.44,p],.1,g.white);for(let u=0;u<=15;u++){const E=mt-3.66+u*7.32/15;A([E,Rt,p+b*1.8],[E,Rt+2.44,p],.016,g.white)}for(let u=0;u<=6;u++)A([mt-3.66,Rt+u*.4,p+b*(1.8-u*.3)],[mt+3.66,Rt+u*.4,p+b*(1.8-u*.3)],.016,g.white);for(const u of[-1,1])A([mt+u*(jt/2-.45),Rt,p],[mt+u*(jt/2-.45),Rt+1.4,p],.035,g.white),c(g.warm,[mt+u*(jt/2-.45)+.2,Rt+1.2,p],[.4,.32,.02])}for(const b of[-1,1])T([mt+b*(jt/2+1.2),Rt-.1,Mt-C/2],[mt+b*(jt/2+1.2),Rt-.1,Mt+C/2],t,.85);for(let b=0;b<5;b++)c(g.pale,[mt,2.4+b*.42,-24-b*.75],[37,.4,1]),c(g.oak,[mt,2.8+b*.42,-24-b*.75],[36,.12,.4]);for(let b=mt-18;b<=mt+18;b+=6)c(g.oak,[b,5,-28],[.18,5,.18]);c(g.oak,[mt,7.4,-27],[38,.25,3.4]),X("football-field",[mt,Rt+.3,Mt],[jt,1,C]);for(let b=0;b<82;b++){const p=44+a()*55,u=-58-a()*52;if(p>48&&p<84&&u>-73&&u<-58)continue;const E=Math.max(ps(p,u),u<-72&&p>47&&p<88?28.7:0),R=1+a()*2.3;_(d,g.rock[b%3],[p,E-.1,u],[R,R*.7,R*.8]).rotation.set(a(),a()*3,a())}c(g.grass,[66,29.4,-74],[35,1,6]);for(let b=51;b<82;b+=3.7)_(f,g.leaves[Math.floor(b)%4],[b,29.7,-70],[1,.5,.8]);const st=[[39,14,-45],[47,19,-51],[49,24,-58]];for(let b=1;b<st.length;b++){const p=st[b-1],u=st[b];Math.hypot(u[0]-p[0],u[2]-p[2]),D(p,u,3),D([p[0],p[1]+3,p[2]],[u[0],u[1]+3,u[2]],3.7,t,g.roof);for(let E=0;E<=4;E++){const R=E/4,I=p[0]+(u[0]-p[0])*R,U=p[1]+(u[1]-p[1])*R,G=p[2]+(u[2]-p[2])*R;for(const H of[-1,1])c(g.oak,[I+H*1.2,U+1.5,G],[.14,3,.14])}}D([48,24.15,-58],[82,24.15,-59],3.3),T([48,24.15,-56.5],[82,24.15,-57.5]),c(g.grass,[20,.08,66],[31,.15,20]),D([4,.2,74],[35,.2,74],2.5),D([20,.2,56],[20,.2,76],2);for(let b=8;b<35;b+=8)c(g.stone,[b,.3,62],[4,.6,3]),c(g.soil,[b,.63,62],[3.7,.07,2.7]);X("ideas-garden",[20,1.5,66],[30,3,20]);function Vt(b,p,u,E=1){_(f,g.leaves[Math.floor(a()*4)],[b,p+.5*E,u],[E,.65*E,E*.75])}for(let b=0;b<210;b++){const p=-58+a()*110,u=19+a()*56;if(qo.some(I=>Math.abs(p-I.x)<I.w/2+3&&Math.abs(u-I.z)<I.d/2+5)||Math.abs(p-15)<3||Math.abs(p+21)<3||u>58&&p<9)continue;const R=ps(p,u);Vt(p,R,u,.5+a()*.8),b%4===0&&_(f,g.flowers[b%3],[p,R+.65,u],[.3,.25,.3])}for(let b=0;b<18;b++){const p=b/18*Math.PI*2;Vt(-6+Math.cos(p)*15.5,6.1,8+Math.sin(p)*15.5,.7)}for(const[b,p,u,E]of[[-59,17,3,7],[-20,28,2,6],[11,29,1,6],[47,22,2,8],[47,-27,8,7],[-17,-11,6,7],[18,63,0,7],[28,69,0,6],[-54,38,2,5]])nt(b,u,p,E,E*.38);function ft(b,p,u){const E=ps(b,p);w(g.darkWood,[b,E+u*.44,p],u*.021,u*.88);for(let R=0;R<6;R++){const I=R/6,U=u*(.19-I*.14),G=E+u*(.28+I*.65),H=_(m,g.pines[(R+Math.floor(b))%4<0?0:(R+Math.floor(b))%4],[b,G,p],[U,u*.33,U]);H.rotation.y=a()*6}}if(i)for(let b=0;b<720;b++){const p=-135+a()*290,u=-111+a()*220;p>-65&&p<100&&u>-51&&u<80||p>37&&p<87&&u>-82&&u<-48||u<-48&&p<32||ft(p,u,5+a()*9)}function Ut(b,p,u,E){const R=g.clothes[E%5];w(R,[b,p+.97,u],.17,.62),_(f,g.skin,[b,p+1.49,u],[.14,.17,.14]);for(const I of[-1,1])A([b+I*.08,p+.65,u],[b+I*.1,p+.12,u+(I<0?.12:-.1)],.09,g.trim),A([b+I*.19,p+1.18,u],[b+I*.22,p+.73,u+.04],.075,R)}for(let b=0;b<48;b++){const p=Object.values(aa),u=p[b%p.length],E=Math.floor(a()*(u.length-1)),R=u[E],I=u[E+1],U=a();Ut(R[0]+(I[0]-R[0])*U+(a()-.5),R[1]+(I[1]-R[1])*U,R[2]+(I[2]-R[2])*U,b)}for(let b=0;b<10;b++)Ut(mt-15+a()*30,Rt+.15,Mt-24+a()*48,b);for(const[b,p,u]of[[-22,14,6],[13,15,6],[-23,32,2],[18,36,0],[48,-29,8],[45,25,2],[12,72,0]])w(g.metal,[b,u+1.8,p],.055,3.6),c(g.metal,[b,u+3.65,p],[.45,.08,.45]),c(g.warm,[b,u+3.45,p],[.23,.32,.23]);if(y.length){const b=new xe;b.setAttribute("position",new Jt(y,3));const p=new gl(b,new Ea({color:"#879093",transparent:!0,opacity:.45}));p.name="Standing roof seams",t.add(p)}t.updateMatrixWorld(!0);const oe={meshes:0,triangles:0};return t.traverse(b=>{b.isMesh&&b.visible&&(oe.meshes++,oe.triangles+=(b.geometry.index?.count||b.geometry.attributes.position.count)/3)}),wm(t,b=>b.userData.roof||!b.visible),t.updateMatrixWorld(!0),t.userData={reference:"User supplied aerial image, October 2026",approximateHiddenSides:!0,units:"metres",geometryBefore:oe,canonicalPlaces:13,externalPlaces:11,closedRoofs:!0},{root:t,objects:e,roofs:n,pickVolumes:s,materials:g,textures:r,referencePlaces:Ps}}function ms(i=16/9){const t=new N(11,8,-1),e=Math.max(1,1.5/i);return{position:t.clone().add(new N(78,100,192).multiplyScalar(e)),target:t}}function Pm(i,{places:t,onSelect:e,onError:n=()=>{},home:s=!1}){const r=matchMedia("(prefers-reduced-motion: reduce)").matches,o=matchMedia("(max-width: 900px)").matches,a=new om({antialias:!0,alpha:!1,powerPreference:"high-performance"});a.outputColorSpace=Re,a.toneMapping=Zo,a.toneMappingExposure=1.05,a.setPixelRatio(Math.min(devicePixelRatio,o?1.25:1.65)),a.shadowMap.enabled=!0,a.shadowMap.type=Ko,a.shadowMap.autoUpdate=!1;const h=a.domElement;h.className="reference-viewport",h.tabIndex=0,h.setAttribute("role","group"),h.setAttribute("aria-label",Fa("Пространственная модель кампуса. Перетаскивание — ракурс, правая кнопка — перемещение, колесо — масштаб. Стрелки меняют ракурс, Shift со стрелками перемещает, Home возвращает обзор.","Spatial campus model. Drag to orbit, right-drag to pan, wheel to zoom. Arrow keys orbit, Shift with arrows pans, Home restores the overview.")),i.querySelectorAll("canvas,.reference-labels,.reference-badge").forEach(Q=>Q.remove()),i.classList.remove("video-campus"),i.classList.add("reference-campus"),i.dataset.engine="three-reference",i.dataset.webgl="webgl2",i.append(h);const l=new pl;l.background=new Ht("#c5ddeb"),l.fog=new Ma("#c5d9df",310,760);const f=new Ie(36,1,.5,1100),d=new cm(f,h);d.enableDamping=!1,d.enablePan=!0,d.screenSpacePanning=!1,d.minDistance=35,d.maxDistance=390,d.minPolarAngle=.48,d.maxPolarAngle=1.28,d.minAzimuthAngle=-.72,d.maxAzimuthAngle=1.18,d.rotateSpeed=.46,d.zoomSpeed=.8,d.panSpeed=.55,d.touches.ONE=xn.ROTATE,d.touches.TWO=xn.DOLLY_PAN,h.style.touchAction="none",l.add(new mh("#dbeaff","#6f7045",2.15));const m=new vh("#fff1d4",3.5);m.position.set(-80,135,90),m.target.position.set(12,0,-4),m.castShadow=!0,m.shadow.mapSize.set(o?1024:2048,o?1024:2048),Object.assign(m.shadow.camera,{left:-115,right:115,top:115,bottom:-115,near:5,far:330}),m.shadow.bias=-18e-5,m.shadow.normalBias=.1,m.shadow.radius=3,l.add(m,m.target);const x=new Em,v=new sa(a),g=v.fromScene(x,.08);l.environment=g.texture,l.environmentIntensity=.24,x.dispose(),v.dispose();const _=Rm();l.add(_.root);for(const Q of _.textures)Q.anisotropy=Math.min(8,a.capabilities.getMaxAnisotropy());const c=document.createElement("div");c.className="reference-labels",i.append(c);const w=Object.entries(Ps).map(([Q,dt])=>{const ot=document.createElement("button");ot.className="reference-marker",ot.dataset.campusPlace=Q;const st=t.findIndex(oe=>oe.id===Q),Vt=t[st]?.name||Q,ft=document.createElement("span");ft.className="reference-number",ft.textContent=String(st+1).padStart(2,"0");const Ut=document.createElement("span");return Ut.className="reference-name",Ut.textContent=Vt,ot.append(ft,Ut),ot.setAttribute("aria-label",Vt),ot.setAttribute("aria-pressed","false"),ot.onclick=()=>e(Q),c.append(ot),{id:Q,button:ot,point:new N(...dt.point)}}),A=document.createElement("div");A.className="reference-badge",A.textContent=Fa("3D · по архитектурному референсу","3D · reference-based architecture"),i.append(A);const T=new Sh,D=new It,P=new Is({color:"#f5d28b",depthTest:!0}),L=new vn;l.add(L);const O=new Eh(new Je,12953447);O.visible=!1,l.add(O);let y=1,M=1,F=0,V=!1,X=!1,$=!0,J=null,q=null,at=null,j=!1;const ut=new AbortController,gt=ut.signal;function bt(){return{engine:"reference-3d",position:f.position.toArray(),target:d.target.toArray()}}function Dt(){for(const Q of w){const dt=Q.point.clone().project(f),ot=(dt.x*.5+.5)*y,st=(-dt.y*.5+.5)*M;Q.button.hidden=dt.z>1||dt.z<0||ot<14||ot>y-14||st<14||st>M-14,Q.button.style.left=ot+"px",Q.button.style.top=st+"px",Q.button.classList.toggle("label-left",ot>y*.68),Q.button.classList.toggle("selected",Q.id===(Ii[J]||J)),Q.button.setAttribute("aria-pressed",String(Q.id===(Ii[J]||J)))}i.dataset.camera=JSON.stringify(bt()),i.dataset.zoom=String(ms(y/M).position.distanceTo(ms(y/M).target)/f.position.distanceTo(d.target))}function Wt(Q=performance.now()){if(F=0,!(V||X||!$||document.hidden)){if(q){const dt=Math.min(1,(Q-q.start)/820),ot=1-(1-dt)**3;f.position.lerpVectors(q.fromPosition,q.position,ot),d.target.lerpVectors(q.fromTarget,q.target,ot),f.lookAt(d.target),dt===1&&(q=null,d.update())}a.render(l,f),Dt(),i.dataset.drawCalls=String(a.info.render.calls),q&&Ot()}}function Ot(){!F&&!V&&!X&&$&&!document.hidden&&(F=requestAnimationFrame(Wt))}function qt(){d.target.x=gn.clamp(d.target.x,-65,100),d.target.y=gn.clamp(d.target.y,0,30),d.target.z=gn.clamp(d.target.z,-80,78),Ot()}d.addEventListener("change",qt),d.addEventListener("start",()=>{q=null});function tt(){if(!V){if(y=Math.max(1,i.clientWidth),M=Math.max(1,i.clientHeight-(o&&!s?54:0)),a.setSize(y,M,!1),h.style.height=M+"px",c.style.height=M+"px",f.aspect=y/M,f.updateProjectionMatrix(),!j){const Q=ms(f.aspect);f.position.copy(Q.position),d.target.copy(Q.target),d.update(),j=!0}a.shadowMap.needsUpdate=!0,Ot()}}function nt(Q,dt){if(r){f.position.copy(Q),d.target.copy(dt),d.update(),Ot();return}q={fromPosition:f.position.clone(),fromTarget:d.target.clone(),position:Q,target:dt,start:performance.now()},Ot()}function Et(Q,dt=!0){J=Q,i.dataset.selected=Q||"";const ot=ym(Q);if(O.visible=!!ot,ot){const st=_.pickVolumes.filter(ft=>ft.userData.place===(Ii[Q]||Q)),Vt=new Je;for(const ft of st)Vt.union(new Je().setFromObject(ft));if(O.box.copy(Vt),O.updateMatrixWorld(!0),dt){const ft=new N(...ot.focus),Ut=f.position.clone().sub(d.target).normalize();nt(ft.clone().add(Ut.multiplyScalar(ot.radius*2.05)),ft)}}Ot()}function mt(){for(;L.children.length;){const Q=L.children[0];Q.geometry.dispose(),L.remove(Q)}}function Mt(Q){if(mt(),!Q.length)return;const dt=Tm(Q.at(-1));for(let ot=1;ot<dt.length;ot++){const st=new N(...dt[ot-1]).add(new N(0,.18,0)),Vt=new N(...dt[ot]).add(new N(0,.18,0)),ft=new ue(new _i(.16,.16,st.distanceTo(Vt),8),P);ft.position.copy(st).add(Vt).multiplyScalar(.5),ft.quaternion.setFromUnitVectors(new N(0,1,0),Vt.sub(st).normalize()),L.add(ft)}Ot()}h.addEventListener("pointerdown",Q=>{at={x:Q.clientX,y:Q.clientY,button:Q.button}},{signal:gt}),h.addEventListener("pointerup",Q=>{if(!at||at.button!==0||Math.hypot(Q.clientX-at.x,Q.clientY-at.y)>6)return;const dt=h.getBoundingClientRect();D.set((Q.clientX-dt.left)/dt.width*2-1,-(Q.clientY-dt.top)/dt.height*2+1),T.setFromCamera(D,f);const ot=T.intersectObjects(_.pickVolumes,!1)[0];ot&&e(ot.object.userData.place)},{signal:gt}),h.addEventListener("keydown",Q=>{if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","+","=","-"].includes(Q.key))return;if(Q.preventDefault(),q=null,Q.key==="Home"){C.reset();return}if(["+","=","-"].includes(Q.key)){C.zoom(Q.key==="-"?-1:1);return}const dt=["ArrowLeft","ArrowDown"].includes(Q.key)?-1:1;if(Q.shiftKey){const ot=new N(["ArrowLeft","ArrowRight"].includes(Q.key)?dt*3:0,0,["ArrowUp","ArrowDown"].includes(Q.key)?-dt*3:0);f.position.add(ot),d.target.add(ot)}else{const ot=f.position.clone().sub(d.target),st=new ia().setFromVector3(ot);["ArrowLeft","ArrowRight"].includes(Q.key)?st.theta+=dt*.09:st.phi-=dt*.065,st.theta=gn.clamp(st.theta,d.minAzimuthAngle,d.maxAzimuthAngle),st.phi=gn.clamp(st.phi,d.minPolarAngle,d.maxPolarAngle),f.position.copy(d.target).add(new N().setFromSpherical(st))}d.update(),Ot()},{signal:gt}),h.addEventListener("webglcontextlost",Q=>{Q.preventDefault(),n(new Error("WebGL context lost"))},{signal:gt}),document.addEventListener("visibilitychange",()=>{document.hidden||Ot()},{signal:gt});const Rt=new ResizeObserver(tt);Rt.observe(i);const jt=new IntersectionObserver(Q=>{$=Q[0].isIntersecting,$&&Ot()});jt.observe(i);const C={select:Et,route:Mt,snapshot:bt,reset(){const Q=ms(y/M);nt(Q.position,Q.target)},zoom(Q){q=null;const dt=f.position.clone().sub(d.target).multiplyScalar(Q>0?.84:1.19).clampLength(d.minDistance,d.maxDistance);f.position.copy(d.target).add(dt),d.update(),Ot()},pause(Q){X=Q,d.enabled=!Q,Q||Ot()},restore(Q){Q?.engine!=="reference-3d"||Q.position?.length!==3||Q.target?.length!==3||![...Q.position,...Q.target].every(Number.isFinite)||(q=null,f.position.fromArray(Q.position),d.target.fromArray(Q.target),d.update(),Ot())},diagnostics(){const Q=a.getContext(),dt=Q.getExtension("WEBGL_debug_renderer_info");return{engine:"Three.js WebGL2",renderer:dt?Q.getParameter(dt.UNMASKED_RENDERER_WEBGL):Q.getParameter(Q.RENDERER),camera:bt(),roofs:_.roofs.map(ot=>({place:ot.userData.place,visible:ot.visible,position:ot.position.toArray()})),calls:a.info.render.calls,triangles:a.info.render.triangles,geometries:a.info.memory.geometries,places:Object.keys(Ps),imagePlanes:0,videoPlanes:0}},dispose(){V=!0,cancelAnimationFrame(F),ut.abort(),d.dispose(),Rt.disconnect(),jt.disconnect(),mt();const Q=new Set,dt=new Set,ot=new Set;l.traverse(st=>{st.geometry&&Q.add(st.geometry);for(const Vt of Array.isArray(st.material)?st.material:st.material?[st.material]:[]){dt.add(Vt);for(const ft of Object.values(Vt))ft?.isTexture&&ot.add(ft)}});for(const st of Q)st.dispose();for(const st of dt)st.dispose();for(const st of ot)st.dispose();g.dispose(),a.dispose(),h.remove(),c.remove(),A.remove(),i.classList.remove("reference-campus","scene-ready"),delete i.serenity}};return i.serenity=C,tt(),a.shadowMap.needsUpdate=!0,Wt(),i.classList.add("scene-ready"),C}export{Pm as createCampus,ms as overviewCamera};
