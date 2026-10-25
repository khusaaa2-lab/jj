import{t as ko}from"./index-D47SVBJP.js";const uo="180",ui={ROTATE:0,DOLLY:1,PAN:2},En={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ol=0,Ho=1,Bl=2,$a=1,Ja=2,un=3,bn=0,we=1,Ze=2,yn=0,di=1,Vo=2,Go=3,Wo=4,zl=5,Fn=100,kl=101,Hl=102,Vl=103,Gl=104,Wl=200,Xl=201,Yl=202,ql=203,Mr=204,Sr=205,jl=206,Zl=207,Kl=208,$l=209,Jl=210,Ql=211,tc=212,ec=213,nc=214,Er=0,yr=1,Tr=2,pi=3,br=4,Ar=5,wr=6,Rr=7,fo=0,ic=1,sc=2,Tn=0,rc=1,oc=2,ac=3,Qa=4,lc=5,cc=6,hc=7,tl=300,mi=301,_i=302,Cr=303,Pr=304,Ns=306,As=1e3,Bn=1001,Dr=1002,ze=1003,uc=1004,Zi=1005,tn=1006,ks=1007,zn=1008,sn=1009,el=1010,nl=1011,zi=1012,po=1013,kn=1014,en=1015,Yi=1016,mo=1017,_o=1018,ki=1020,il=35902,sl=35899,rl=1021,ol=1022,Ge=1023,Hi=1026,Vi=1027,go=1028,xo=1029,al=1030,vo=1031,Mo=1033,Ss=33776,Es=33777,ys=33778,Ts=33779,Lr=35840,Ir=35841,Ur=35842,Nr=35843,Fr=36196,Or=37492,Br=37496,zr=37808,kr=37809,Hr=37810,Vr=37811,Gr=37812,Wr=37813,Xr=37814,Yr=37815,qr=37816,jr=37817,Zr=37818,Kr=37819,$r=37820,Jr=37821,Qr=36492,to=36494,eo=36495,no=36283,io=36284,so=36285,ro=36286,dc=3200,fc=3201,So=0,pc=1,Sn="",De="srgb",gi="srgb-linear",ws="linear",ie="srgb",Yn=7680,Xo=519,mc=512,_c=513,gc=514,ll=515,xc=516,vc=517,Mc=518,Sc=519,Yo=35044,qo="300 es",nn=2e3,Rs=2001;class Vn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jo=1234567;const Fi=Math.PI/180,Gi=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function Eo(i,t){return(i%t+t)%t}function Ec(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function yc(i,t,e){return i!==t?(e-i)/(t-i):0}function Oi(i,t,e){return(1-e)*i+e*t}function Tc(i,t,e,n){return Oi(i,t,1-Math.exp(-e*n))}function bc(i,t=1){return t-Math.abs(Eo(i,t*2)-t)}function Ac(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function wc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Rc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Cc(i,t){return i+Math.random()*(t-i)}function Pc(i){return i*(.5-Math.random())}function Dc(i){i!==void 0&&(jo=i);let t=jo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lc(i){return i*Fi}function Ic(i){return i*Gi}function Uc(i){return(i&i-1)===0&&i!==0}function Nc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Fc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Oc(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),h=o(e/2),l=r((t+n)/2),d=o((t+n)/2),c=r((t-n)/2),f=o((t-n)/2),m=r((n-t)/2),S=o((n-t)/2);switch(s){case"XYX":i.set(a*d,h*c,h*f,a*l);break;case"YZY":i.set(h*f,a*d,h*c,a*l);break;case"ZXZ":i.set(h*c,h*f,a*d,a*l);break;case"XZX":i.set(a*d,h*S,h*m,a*l);break;case"YXY":i.set(h*m,a*d,h*S,a*l);break;case"ZYZ":i.set(h*S,h*m,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ci(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Be={DEG2RAD:Fi,RAD2DEG:Gi,generateUUID:Si,clamp:Yt,euclideanModulo:Eo,mapLinear:Ec,inverseLerp:yc,lerp:Oi,damp:Tc,pingpong:bc,smoothstep:Ac,smootherstep:wc,randInt:Rc,randFloat:Cc,randFloatSpread:Pc,seededRandom:Dc,degToRad:Lc,radToDeg:Ic,isPowerOfTwo:Uc,ceilPowerOfTwo:Nc,floorPowerOfTwo:Fc,setQuaternionFromProperEuler:Oc,normalize:be,denormalize:ci};class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class An{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let h=n[s+0],l=n[s+1],d=n[s+2],c=n[s+3];const f=r[o+0],m=r[o+1],S=r[o+2],T=r[o+3];if(a===0){t[e+0]=h,t[e+1]=l,t[e+2]=d,t[e+3]=c;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=S,t[e+3]=T;return}if(c!==T||h!==f||l!==m||d!==S){let _=1-a;const u=h*f+l*m+d*S+c*T,w=u>=0?1:-1,p=1-u*u;if(p>Number.EPSILON){const b=Math.sqrt(p),D=Math.atan2(b,u*w);_=Math.sin(_*D)/b,a=Math.sin(a*D)/b}const E=a*w;if(h=h*_+f*E,l=l*_+m*E,d=d*_+S*E,c=c*_+T*E,_===1-a){const b=1/Math.sqrt(h*h+l*l+d*d+c*c);h*=b,l*=b,d*=b,c*=b}}t[e]=h,t[e+1]=l,t[e+2]=d,t[e+3]=c}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],h=n[s+1],l=n[s+2],d=n[s+3],c=r[o],f=r[o+1],m=r[o+2],S=r[o+3];return t[e]=a*S+d*c+h*m-l*f,t[e+1]=h*S+d*f+l*c-a*m,t[e+2]=l*S+d*m+a*f-h*c,t[e+3]=d*S-a*c-h*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,h=Math.sin,l=a(n/2),d=a(s/2),c=a(r/2),f=h(n/2),m=h(s/2),S=h(r/2);switch(o){case"XYZ":this._x=f*d*c+l*m*S,this._y=l*m*c-f*d*S,this._z=l*d*S+f*m*c,this._w=l*d*c-f*m*S;break;case"YXZ":this._x=f*d*c+l*m*S,this._y=l*m*c-f*d*S,this._z=l*d*S-f*m*c,this._w=l*d*c+f*m*S;break;case"ZXY":this._x=f*d*c-l*m*S,this._y=l*m*c+f*d*S,this._z=l*d*S+f*m*c,this._w=l*d*c-f*m*S;break;case"ZYX":this._x=f*d*c-l*m*S,this._y=l*m*c+f*d*S,this._z=l*d*S-f*m*c,this._w=l*d*c+f*m*S;break;case"YZX":this._x=f*d*c+l*m*S,this._y=l*m*c+f*d*S,this._z=l*d*S-f*m*c,this._w=l*d*c-f*m*S;break;case"XZY":this._x=f*d*c-l*m*S,this._y=l*m*c-f*d*S,this._z=l*d*S+f*m*c,this._w=l*d*c+f*m*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],h=e[9],l=e[2],d=e[6],c=e[10],f=n+a+c;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-h)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>c){const m=2*Math.sqrt(1+n-a-c);this._w=(d-h)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>c){const m=2*Math.sqrt(1+a-n-c);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(h+d)/m}else{const m=2*Math.sqrt(1+c-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(h+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,h=e._y,l=e._z,d=e._w;return this._x=n*d+o*a+s*l-r*h,this._y=s*d+o*h+r*a-n*l,this._z=r*d+o*l+n*h-s*a,this._w=o*d-n*a-s*h-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const h=1-a*a;if(h<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(h),d=Math.atan2(l,a),c=Math.sin((1-e)*d)/l,f=Math.sin(e*d)/l;return this._w=o*c+this._w*f,this._x=n*c+this._x*f,this._y=s*c+this._y*f,this._z=r*c+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,h=t.w,l=2*(o*s-a*n),d=2*(a*e-r*s),c=2*(r*n-o*e);return this.x=e+h*l+o*c-a*d,this.y=n+h*d+a*l-r*c,this.z=s+h*c+r*d-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,h=e.z;return this.x=s*h-r*a,this.y=r*o-n*h,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hs.copy(this).projectOnVector(t),this.sub(Hs)}reflect(t){return this.sub(Hs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new F,Zo=new An;class Gt{constructor(t,e,n,s,r,o,a,h,l){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,h,l)}set(t,e,n,s,r,o,a,h,l){const d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=h,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],h=n[6],l=n[1],d=n[4],c=n[7],f=n[2],m=n[5],S=n[8],T=s[0],_=s[3],u=s[6],w=s[1],p=s[4],E=s[7],b=s[2],D=s[5],I=s[8];return r[0]=o*T+a*w+h*b,r[3]=o*_+a*p+h*D,r[6]=o*u+a*E+h*I,r[1]=l*T+d*w+c*b,r[4]=l*_+d*p+c*D,r[7]=l*u+d*E+c*I,r[2]=f*T+m*w+S*b,r[5]=f*_+m*p+S*D,r[8]=f*u+m*E+S*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],d=t[8];return e*o*d-e*a*l-n*r*d+n*a*h+s*r*l-s*o*h}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],d=t[8],c=d*o-a*l,f=a*h-d*r,m=l*r-o*h,S=e*c+n*f+s*m;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=c*T,t[1]=(s*l-d*n)*T,t[2]=(a*n-s*o)*T,t[3]=f*T,t[4]=(d*e-s*h)*T,t[5]=(s*r-a*e)*T,t[6]=m*T,t[7]=(n*h-l*e)*T,t[8]=(o*e-n*r)*T,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const h=Math.cos(r),l=Math.sin(r);return this.set(n*h,n*l,-n*(h*o+l*a)+o+t,-s*l,s*h,-s*(-l*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vs.makeScale(t,e)),this}rotate(t){return this.premultiply(Vs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vs=new Gt;function cl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bc(){const i=Cs("canvas");return i.style.display="block",i}const Ko={};function Wi(i){i in Ko||(Ko[i]=!0,console.warn(i))}function zc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const $o=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jo=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kc(){const i={enabled:!0,workingColorSpace:gi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ie&&(s.r=dn(s.r),s.g=dn(s.g),s.b=dn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sn?ws:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Wi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Wi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gi]:{primaries:t,whitePoint:n,transfer:ws,toXYZ:$o,fromXYZ:Jo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:$o,fromXYZ:Jo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}const Qt=kc();function dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qn;class Hc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qn===void 0&&(qn=Cs("canvas")),qn.width=t.width,qn.height=t.height;const s=qn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=qn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Cs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=dn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(dn(e[n]/255)*255):e[n]=dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vc=0;class yo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gs(s[o].image)):r.push(Gs(s[o]))}else r=Gs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Gs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gc=0;const Ws=new F;class Re extends Vn{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Bn,s=Bn,r=tn,o=zn,a=Ge,h=sn,l=Re.DEFAULT_ANISOTROPY,d=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=Si(),this.name="",this.source=new yo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ws).x}get height(){return this.source.getSize(Ws).y}get depth(){return this.source.getSize(Ws).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case As:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case Dr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case As:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case Dr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=tl;Re.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const h=t.elements,l=h[0],d=h[4],c=h[8],f=h[1],m=h[5],S=h[9],T=h[2],_=h[6],u=h[10];if(Math.abs(d-f)<.01&&Math.abs(c-T)<.01&&Math.abs(S-_)<.01){if(Math.abs(d+f)<.1&&Math.abs(c+T)<.1&&Math.abs(S+_)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const p=(l+1)/2,E=(m+1)/2,b=(u+1)/2,D=(d+f)/4,I=(c+T)/4,O=(S+_)/4;return p>E&&p>b?p<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(p),s=D/n,r=I/n):E>b?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=D/s,r=O/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=I/r,s=O/r),this.set(n,s,r,e),this}let w=Math.sqrt((_-S)*(_-S)+(c-T)*(c-T)+(f-d)*(f-d));return Math.abs(w)<.001&&(w=1),this.x=(_-S)/w,this.y=(c-T)/w,this.z=(f-d)/w,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wc extends Vn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Re(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new yo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends Wc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class hl extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xc extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Le{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ye):Ye.fromBufferAttribute(r,o),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ki.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ki.copy(n.boundingBox)),Ki.applyMatrix4(t.matrixWorld),this.union(Ki)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wi),$i.subVectors(this.max,wi),jn.subVectors(t.a,wi),Zn.subVectors(t.b,wi),Kn.subVectors(t.c,wi),pn.subVectors(Zn,jn),mn.subVectors(Kn,Zn),Cn.subVectors(jn,Kn);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-Cn.z,Cn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,Cn.z,0,-Cn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-Cn.y,Cn.x,0];return!Xs(e,jn,Zn,Kn,$i)||(e=[1,0,0,0,1,0,0,0,1],!Xs(e,jn,Zn,Kn,$i))?!1:(Ji.crossVectors(pn,mn),e=[Ji.x,Ji.y,Ji.z],Xs(e,jn,Zn,Kn,$i))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const rn=[new F,new F,new F,new F,new F,new F,new F,new F],Ye=new F,Ki=new Le,jn=new F,Zn=new F,Kn=new F,pn=new F,mn=new F,Cn=new F,wi=new F,$i=new F,Ji=new F,Pn=new F;function Xs(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pn.fromArray(i,r);const a=s.x*Math.abs(Pn.x)+s.y*Math.abs(Pn.y)+s.z*Math.abs(Pn.z),h=t.dot(Pn),l=e.dot(Pn),d=n.dot(Pn);if(Math.max(-Math.max(h,l,d),Math.min(h,l,d))>a)return!1}return!0}const Yc=new Le,Ri=new F,Ys=new F;class Ei{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ri.subVectors(t,this.center);const e=Ri.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ri,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ys.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ri.copy(t.center).add(Ys)),this.expandByPoint(Ri.copy(t.center).sub(Ys))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const on=new F,qs=new F,Qi=new F,_n=new F,js=new F,ts=new F,Zs=new F;class Fs{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qs.copy(t).add(e).multiplyScalar(.5),Qi.copy(e).sub(t).normalize(),_n.copy(this.origin).sub(qs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Qi),a=_n.dot(this.direction),h=-_n.dot(Qi),l=_n.lengthSq(),d=Math.abs(1-o*o);let c,f,m,S;if(d>0)if(c=o*h-a,f=o*a-h,S=r*d,c>=0)if(f>=-S)if(f<=S){const T=1/d;c*=T,f*=T,m=c*(c+o*f+2*a)+f*(o*c+f+2*h)+l}else f=r,c=Math.max(0,-(o*f+a)),m=-c*c+f*(f+2*h)+l;else f=-r,c=Math.max(0,-(o*f+a)),m=-c*c+f*(f+2*h)+l;else f<=-S?(c=Math.max(0,-(-o*r+a)),f=c>0?-r:Math.min(Math.max(-r,-h),r),m=-c*c+f*(f+2*h)+l):f<=S?(c=0,f=Math.min(Math.max(-r,-h),r),m=f*(f+2*h)+l):(c=Math.max(0,-(o*r+a)),f=c>0?r:Math.min(Math.max(-r,-h),r),m=-c*c+f*(f+2*h)+l);else f=o>0?-r:r,c=Math.max(0,-(o*f+a)),m=-c*c+f*(f+2*h)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(qs).addScaledVector(Qi,f),m}intersectSphere(t,e){on.subVectors(t.center,this.origin);const n=on.dot(this.direction),s=on.dot(on)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,h;const l=1/this.direction.x,d=1/this.direction.y,c=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),d>=0?(r=(t.min.y-f.y)*d,o=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,o=(t.min.y-f.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),c>=0?(a=(t.min.z-f.z)*c,h=(t.max.z-f.z)*c):(a=(t.max.z-f.z)*c,h=(t.min.z-f.z)*c),n>h||a>s)||((a>n||n!==n)&&(n=a),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,n,s,r){js.subVectors(e,t),ts.subVectors(n,t),Zs.crossVectors(js,ts);let o=this.direction.dot(Zs),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_n.subVectors(this.origin,t);const h=a*this.direction.dot(ts.crossVectors(_n,ts));if(h<0)return null;const l=a*this.direction.dot(js.cross(_n));if(l<0||h+l>o)return null;const d=-a*_n.dot(Zs);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,o,a,h,l,d,c,f,m,S,T,_){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,h,l,d,c,f,m,S,T,_)}set(t,e,n,s,r,o,a,h,l,d,c,f,m,S,T,_){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=h,u[2]=l,u[6]=d,u[10]=c,u[14]=f,u[3]=m,u[7]=S,u[11]=T,u[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/$n.setFromMatrixColumn(t,0).length(),r=1/$n.setFromMatrixColumn(t,1).length(),o=1/$n.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(s),l=Math.sin(s),d=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){const f=o*d,m=o*c,S=a*d,T=a*c;e[0]=h*d,e[4]=-h*c,e[8]=l,e[1]=m+S*l,e[5]=f-T*l,e[9]=-a*h,e[2]=T-f*l,e[6]=S+m*l,e[10]=o*h}else if(t.order==="YXZ"){const f=h*d,m=h*c,S=l*d,T=l*c;e[0]=f+T*a,e[4]=S*a-m,e[8]=o*l,e[1]=o*c,e[5]=o*d,e[9]=-a,e[2]=m*a-S,e[6]=T+f*a,e[10]=o*h}else if(t.order==="ZXY"){const f=h*d,m=h*c,S=l*d,T=l*c;e[0]=f-T*a,e[4]=-o*c,e[8]=S+m*a,e[1]=m+S*a,e[5]=o*d,e[9]=T-f*a,e[2]=-o*l,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){const f=o*d,m=o*c,S=a*d,T=a*c;e[0]=h*d,e[4]=S*l-m,e[8]=f*l+T,e[1]=h*c,e[5]=T*l+f,e[9]=m*l-S,e[2]=-l,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){const f=o*h,m=o*l,S=a*h,T=a*l;e[0]=h*d,e[4]=T-f*c,e[8]=S*c+m,e[1]=c,e[5]=o*d,e[9]=-a*d,e[2]=-l*d,e[6]=m*c+S,e[10]=f-T*c}else if(t.order==="XZY"){const f=o*h,m=o*l,S=a*h,T=a*l;e[0]=h*d,e[4]=-c,e[8]=l*d,e[1]=f*c+T,e[5]=o*d,e[9]=m*c-S,e[2]=S*c-m,e[6]=a*d,e[10]=T*c+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qc,t,jc)}lookAt(t,e,n){const s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),gn.crossVectors(n,Ne),gn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),gn.crossVectors(n,Ne)),gn.normalize(),es.crossVectors(Ne,gn),s[0]=gn.x,s[4]=es.x,s[8]=Ne.x,s[1]=gn.y,s[5]=es.y,s[9]=Ne.y,s[2]=gn.z,s[6]=es.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],h=n[8],l=n[12],d=n[1],c=n[5],f=n[9],m=n[13],S=n[2],T=n[6],_=n[10],u=n[14],w=n[3],p=n[7],E=n[11],b=n[15],D=s[0],I=s[4],O=s[8],A=s[12],y=s[1],N=s[5],W=s[9],Y=s[13],K=s[2],tt=s[6],Z=s[10],lt=s[14],$=s[3],mt=s[7],_t=s[11],Pt=s[15];return r[0]=o*D+a*y+h*K+l*$,r[4]=o*I+a*N+h*tt+l*mt,r[8]=o*O+a*W+h*Z+l*_t,r[12]=o*A+a*Y+h*lt+l*Pt,r[1]=d*D+c*y+f*K+m*$,r[5]=d*I+c*N+f*tt+m*mt,r[9]=d*O+c*W+f*Z+m*_t,r[13]=d*A+c*Y+f*lt+m*Pt,r[2]=S*D+T*y+_*K+u*$,r[6]=S*I+T*N+_*tt+u*mt,r[10]=S*O+T*W+_*Z+u*_t,r[14]=S*A+T*Y+_*lt+u*Pt,r[3]=w*D+p*y+E*K+b*$,r[7]=w*I+p*N+E*tt+b*mt,r[11]=w*O+p*W+E*Z+b*_t,r[15]=w*A+p*Y+E*lt+b*Pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],h=t[9],l=t[13],d=t[2],c=t[6],f=t[10],m=t[14],S=t[3],T=t[7],_=t[11],u=t[15];return S*(+r*h*c-s*l*c-r*a*f+n*l*f+s*a*m-n*h*m)+T*(+e*h*m-e*l*f+r*o*f-s*o*m+s*l*d-r*h*d)+_*(+e*l*c-e*a*m-r*o*c+n*o*m+r*a*d-n*l*d)+u*(-s*a*d-e*h*c+e*a*f+s*o*c-n*o*f+n*h*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],d=t[8],c=t[9],f=t[10],m=t[11],S=t[12],T=t[13],_=t[14],u=t[15],w=c*_*l-T*f*l+T*h*m-a*_*m-c*h*u+a*f*u,p=S*f*l-d*_*l-S*h*m+o*_*m+d*h*u-o*f*u,E=d*T*l-S*c*l+S*a*m-o*T*m-d*a*u+o*c*u,b=S*c*h-d*T*h-S*a*f+o*T*f+d*a*_-o*c*_,D=e*w+n*p+s*E+r*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return t[0]=w*I,t[1]=(T*f*r-c*_*r-T*s*m+n*_*m+c*s*u-n*f*u)*I,t[2]=(a*_*r-T*h*r+T*s*l-n*_*l-a*s*u+n*h*u)*I,t[3]=(c*h*r-a*f*r-c*s*l+n*f*l+a*s*m-n*h*m)*I,t[4]=p*I,t[5]=(d*_*r-S*f*r+S*s*m-e*_*m-d*s*u+e*f*u)*I,t[6]=(S*h*r-o*_*r-S*s*l+e*_*l+o*s*u-e*h*u)*I,t[7]=(o*f*r-d*h*r+d*s*l-e*f*l-o*s*m+e*h*m)*I,t[8]=E*I,t[9]=(S*c*r-d*T*r-S*n*m+e*T*m+d*n*u-e*c*u)*I,t[10]=(o*T*r-S*a*r+S*n*l-e*T*l-o*n*u+e*a*u)*I,t[11]=(d*a*r-o*c*r-d*n*l+e*c*l+o*n*m-e*a*m)*I,t[12]=b*I,t[13]=(d*T*s-S*c*s+S*n*f-e*T*f-d*n*_+e*c*_)*I,t[14]=(S*a*s-o*T*s-S*n*h+e*T*h+o*n*_-e*a*_)*I,t[15]=(o*c*s-d*a*s+d*n*h-e*c*h-o*n*f+e*a*f)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,h=t.z,l=r*o,d=r*a;return this.set(l*o+n,l*a-s*h,l*h+s*a,0,l*a+s*h,d*a+n,d*h-s*o,0,l*h-s*a,d*h+s*o,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,h=e._w,l=r+r,d=o+o,c=a+a,f=r*l,m=r*d,S=r*c,T=o*d,_=o*c,u=a*c,w=h*l,p=h*d,E=h*c,b=n.x,D=n.y,I=n.z;return s[0]=(1-(T+u))*b,s[1]=(m+E)*b,s[2]=(S-p)*b,s[3]=0,s[4]=(m-E)*D,s[5]=(1-(f+u))*D,s[6]=(_+w)*D,s[7]=0,s[8]=(S+p)*I,s[9]=(_-w)*I,s[10]=(1-(f+T))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=$n.set(s[0],s[1],s[2]).length();const o=$n.set(s[4],s[5],s[6]).length(),a=$n.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qe.copy(this);const l=1/r,d=1/o,c=1/a;return qe.elements[0]*=l,qe.elements[1]*=l,qe.elements[2]*=l,qe.elements[4]*=d,qe.elements[5]*=d,qe.elements[6]*=d,qe.elements[8]*=c,qe.elements[9]*=c,qe.elements[10]*=c,e.setFromRotationMatrix(qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=nn,h=!1){const l=this.elements,d=2*r/(e-t),c=2*r/(n-s),f=(e+t)/(e-t),m=(n+s)/(n-s);let S,T;if(h)S=r/(o-r),T=o*r/(o-r);else if(a===nn)S=-(o+r)/(o-r),T=-2*o*r/(o-r);else if(a===Rs)S=-o/(o-r),T=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=S,l[14]=T,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=nn,h=!1){const l=this.elements,d=2/(e-t),c=2/(n-s),f=-(e+t)/(e-t),m=-(n+s)/(n-s);let S,T;if(h)S=1/(o-r),T=o/(o-r);else if(a===nn)S=-2/(o-r),T=-(o+r)/(o-r);else if(a===Rs)S=-1/(o-r),T=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=c,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=S,l[14]=T,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $n=new F,qe=new oe,qc=new F(0,0,0),jc=new F(1,1,1),gn=new F,es=new F,Ne=new F,Qo=new oe,ta=new An;class Xe{constructor(t=0,e=0,n=0,s=Xe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],h=s[1],l=s[5],d=s[9],c=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ta.setFromEuler(this),this.setFromQuaternion(ta,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xe.DEFAULT_ORDER="XYZ";class To{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zc=0;const ea=new F,Jn=new An,an=new oe,ns=new F,Ci=new F,Kc=new F,$c=new An,na=new F(1,0,0),ia=new F(0,1,0),sa=new F(0,0,1),ra={type:"added"},Jc={type:"removed"},Qn={type:"childadded",child:null},Ks={type:"childremoved",child:null};class _e extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new F,e=new Xe,n=new An,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Gt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.premultiply(Jn),this}rotateX(t){return this.rotateOnAxis(na,t)}rotateY(t){return this.rotateOnAxis(ia,t)}rotateZ(t){return this.rotateOnAxis(sa,t)}translateOnAxis(t,e){return ea.copy(t).applyQuaternion(this.quaternion),this.position.add(ea.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(na,t)}translateY(t){return this.translateOnAxis(ia,t)}translateZ(t){return this.translateOnAxis(sa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ns.copy(t):ns.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Ci,ns,this.up):an.lookAt(ns,Ci,this.up),this.quaternion.setFromRotationMatrix(an),s&&(an.extractRotation(s.matrixWorld),Jn.setFromRotationMatrix(an),this.quaternion.premultiply(Jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ra),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jc),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ra),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,t,Kc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,$c,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let l=0,d=h.length;l<d;l++){const c=h[l];r(t.shapes,c)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(r(t.materials,this.material[h]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];s.animations.push(r(t.animations,h))}}if(e){const a=o(t.geometries),h=o(t.materials),l=o(t.textures),d=o(t.images),c=o(t.shapes),f=o(t.skeletons),m=o(t.animations),S=o(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),c.length>0&&(n.shapes=c),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),S.length>0&&(n.nodes=S)}return n.object=s,n;function o(a){const h=[];for(const l in a){const d=a[l];delete d.metadata,h.push(d)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}_e.DEFAULT_UP=new F(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new F,ln=new F,$s=new F,cn=new F,ti=new F,ei=new F,oa=new F,Js=new F,Qs=new F,tr=new F,er=new re,nr=new re,ir=new re;class Ke{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),je.subVectors(t,e),s.cross(je);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){je.subVectors(s,e),ln.subVectors(n,e),$s.subVectors(t,e);const o=je.dot(je),a=je.dot(ln),h=je.dot($s),l=ln.dot(ln),d=ln.dot($s),c=o*l-a*a;if(c===0)return r.set(0,0,0),null;const f=1/c,m=(l*h-a*d)*f,S=(o*d-a*h)*f;return r.set(1-m-S,S,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,n,s,r,o,a,h){return this.getBarycoord(t,e,n,s,cn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,cn.x),h.addScaledVector(o,cn.y),h.addScaledVector(a,cn.z),h)}static getInterpolatedAttribute(t,e,n,s,r,o){return er.setScalar(0),nr.setScalar(0),ir.setScalar(0),er.fromBufferAttribute(t,e),nr.fromBufferAttribute(t,n),ir.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(er,r.x),o.addScaledVector(nr,r.y),o.addScaledVector(ir,r.z),o}static isFrontFacing(t,e,n,s){return je.subVectors(n,e),ln.subVectors(t,e),je.cross(ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),je.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ti.subVectors(s,n),ei.subVectors(r,n),Js.subVectors(t,n);const h=ti.dot(Js),l=ei.dot(Js);if(h<=0&&l<=0)return e.copy(n);Qs.subVectors(t,s);const d=ti.dot(Qs),c=ei.dot(Qs);if(d>=0&&c<=d)return e.copy(s);const f=h*c-d*l;if(f<=0&&h>=0&&d<=0)return o=h/(h-d),e.copy(n).addScaledVector(ti,o);tr.subVectors(t,r);const m=ti.dot(tr),S=ei.dot(tr);if(S>=0&&m<=S)return e.copy(r);const T=m*l-h*S;if(T<=0&&l>=0&&S<=0)return a=l/(l-S),e.copy(n).addScaledVector(ei,a);const _=d*S-m*c;if(_<=0&&c-d>=0&&m-S>=0)return oa.subVectors(r,s),a=(c-d)/(c-d+(m-S)),e.copy(s).addScaledVector(oa,a);const u=1/(_+T+f);return o=T*u,a=f*u,e.copy(n).addScaledVector(ti,o).addScaledVector(ei,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},is={h:0,s:0,l:0};function sr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Eo(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=sr(o,r,t+1/3),this.g=sr(o,r,t),this.b=sr(o,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=ul[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dn(t.r),this.g=dn(t.g),this.b=dn(t.b),this}copyLinearToSRGB(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return Qt.workingToColorSpace(Ee.copy(this),t),Math.round(Yt(Ee.r*255,0,255))*65536+Math.round(Yt(Ee.g*255,0,255))*256+Math.round(Yt(Ee.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Ee.copy(this),e);const n=Ee.r,s=Ee.g,r=Ee.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let h,l;const d=(a+o)/2;if(a===o)h=0,l=0;else{const c=o-a;switch(l=d<=.5?c/(o+a):c/(2-o-a),o){case n:h=(s-r)/c+(s<r?6:0);break;case s:h=(r-n)/c+2;break;case r:h=(n-s)/c+4;break}h/=6}return t.h=h,t.s=l,t.l=d,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=De){Qt.workingToColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,s=Ee.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xn),this.setHSL(xn.h+t,xn.s+e,xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(is);const n=Oi(xn.h,is.h,e),s=Oi(xn.s,is.s,e),r=Oi(xn.l,is.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new kt;kt.NAMES=ul;let Qc=0;class Gn extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qc++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=di,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mr,this.blendDst=Sr,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mr&&(n.blendSrc=this.blendSrc),this.blendDst!==Sr&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const h=r[a];delete h.metadata,o.push(h)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Os extends Gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new F,ss=new Nt;let th=0;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:th++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yo,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ss.fromBufferAttribute(this,e),ss.applyMatrix3(t),this.setXY(e,ss.x,ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yo&&(t.usage=this.usage),t}}class dl extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class fl extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kt extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let eh=0;const Ve=new oe,rr=new _e,ni=new F,Fe=new Le,Pi=new Le,ve=new F;class Me extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cl(t)?fl:dl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return rr.lookAt(t),rr.updateMatrix(),this.applyMatrix4(rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Le);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Pi.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Fe.min,Pi.min),Fe.expandByPoint(ve),ve.addVectors(Fe.max,Pi.max),Fe.expandByPoint(ve)):(Fe.expandByPoint(Pi.min),Fe.expandByPoint(Pi.max))}Fe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],h=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)ve.fromBufferAttribute(a,l),h&&(ni.fromBufferAttribute(t,l),ve.add(ni)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],h=[];for(let O=0;O<n.count;O++)a[O]=new F,h[O]=new F;const l=new F,d=new F,c=new F,f=new Nt,m=new Nt,S=new Nt,T=new F,_=new F;function u(O,A,y){l.fromBufferAttribute(n,O),d.fromBufferAttribute(n,A),c.fromBufferAttribute(n,y),f.fromBufferAttribute(r,O),m.fromBufferAttribute(r,A),S.fromBufferAttribute(r,y),d.sub(l),c.sub(l),m.sub(f),S.sub(f);const N=1/(m.x*S.y-S.x*m.y);isFinite(N)&&(T.copy(d).multiplyScalar(S.y).addScaledVector(c,-m.y).multiplyScalar(N),_.copy(c).multiplyScalar(m.x).addScaledVector(d,-S.x).multiplyScalar(N),a[O].add(T),a[A].add(T),a[y].add(T),h[O].add(_),h[A].add(_),h[y].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let O=0,A=w.length;O<A;++O){const y=w[O],N=y.start,W=y.count;for(let Y=N,K=N+W;Y<K;Y+=3)u(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const p=new F,E=new F,b=new F,D=new F;function I(O){b.fromBufferAttribute(s,O),D.copy(b);const A=a[O];p.copy(A),p.sub(b.multiplyScalar(b.dot(A))).normalize(),E.crossVectors(D,A);const N=E.dot(h[O])<0?-1:1;o.setXYZW(O,p.x,p.y,p.z,N)}for(let O=0,A=w.length;O<A;++O){const y=w[O],N=y.start,W=y.count;for(let Y=N,K=N+W;Y<K;Y+=3)I(t.getX(Y+0)),I(t.getX(Y+1)),I(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new F,r=new F,o=new F,a=new F,h=new F,l=new F,d=new F,c=new F;if(t)for(let f=0,m=t.count;f<m;f+=3){const S=t.getX(f+0),T=t.getX(f+1),_=t.getX(f+2);s.fromBufferAttribute(e,S),r.fromBufferAttribute(e,T),o.fromBufferAttribute(e,_),d.subVectors(o,r),c.subVectors(s,r),d.cross(c),a.fromBufferAttribute(n,S),h.fromBufferAttribute(n,T),l.fromBufferAttribute(n,_),a.add(d),h.add(d),l.add(d),n.setXYZ(S,a.x,a.y,a.z),n.setXYZ(T,h.x,h.y,h.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),d.subVectors(o,r),c.subVectors(s,r),d.cross(c),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,h){const l=a.array,d=a.itemSize,c=a.normalized,f=new l.constructor(h.length*d);let m=0,S=0;for(let T=0,_=h.length;T<_;T++){a.isInterleavedBufferAttribute?m=h[T]*a.data.stride+a.offset:m=h[T]*d;for(let u=0;u<d;u++)f[S++]=l[m++]}return new We(f,d,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const a in s){const h=s[a],l=t(h,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const h=[],l=r[a];for(let d=0,c=l.length;d<c;d++){const f=l[d],m=t(f,n);h.push(m)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const l=n[h];t.data.attributes[h]=l.toJSON(t.data)}const s={};let r=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],d=[];for(let c=0,f=l.length;c<f;c++){const m=l[c];d.push(m.toJSON(t.data))}d.length>0&&(s[h]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(e))}const r=t.morphAttributes;for(const l in r){const d=[],c=r[l];for(let f=0,m=c.length;f<m;f++)d.push(c[f].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,d=o.length;l<d;l++){const c=o[l];this.addGroup(c.start,c.count,c.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const aa=new oe,Dn=new Fs,rs=new Ei,la=new F,os=new F,as=new F,ls=new F,or=new F,cs=new F,ca=new F,hs=new F;class fe extends _e{constructor(t=new Me,e=new Os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){cs.set(0,0,0);for(let h=0,l=r.length;h<l;h++){const d=a[h],c=r[h];d!==0&&(or.fromBufferAttribute(c,t),o?cs.addScaledVector(or,d):cs.addScaledVector(or.sub(e),d))}e.add(cs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(r),Dn.copy(t.ray).recast(t.near),!(rs.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(rs,la)===null||Dn.origin.distanceToSquared(la)>(t.far-t.near)**2))&&(aa.copy(r).invert(),Dn.copy(t.ray).applyMatrix4(aa),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Dn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,c=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let S=0,T=f.length;S<T;S++){const _=f[S],u=o[_.materialIndex],w=Math.max(_.start,m.start),p=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let E=w,b=p;E<b;E+=3){const D=a.getX(E),I=a.getX(E+1),O=a.getX(E+2);s=us(this,u,t,n,l,d,c,D,I,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const S=Math.max(0,m.start),T=Math.min(a.count,m.start+m.count);for(let _=S,u=T;_<u;_+=3){const w=a.getX(_),p=a.getX(_+1),E=a.getX(_+2);s=us(this,o,t,n,l,d,c,w,p,E),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let S=0,T=f.length;S<T;S++){const _=f[S],u=o[_.materialIndex],w=Math.max(_.start,m.start),p=Math.min(h.count,Math.min(_.start+_.count,m.start+m.count));for(let E=w,b=p;E<b;E+=3){const D=E,I=E+1,O=E+2;s=us(this,u,t,n,l,d,c,D,I,O),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const S=Math.max(0,m.start),T=Math.min(h.count,m.start+m.count);for(let _=S,u=T;_<u;_+=3){const w=_,p=_+1,E=_+2;s=us(this,o,t,n,l,d,c,w,p,E),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}}function nh(i,t,e,n,s,r,o,a){let h;if(t.side===we?h=n.intersectTriangle(o,r,s,!0,a):h=n.intersectTriangle(s,r,o,t.side===bn,a),h===null)return null;hs.copy(a),hs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(hs);return l<e.near||l>e.far?null:{distance:l,point:hs.clone(),object:i}}function us(i,t,e,n,s,r,o,a,h,l){i.getVertexPosition(a,os),i.getVertexPosition(h,as),i.getVertexPosition(l,ls);const d=nh(i,t,e,n,os,as,ls,ca);if(d){const c=new F;Ke.getBarycoord(ca,os,as,ls,c),s&&(d.uv=Ke.getInterpolatedAttribute(s,a,h,l,c,new Nt)),r&&(d.uv1=Ke.getInterpolatedAttribute(r,a,h,l,c,new Nt)),o&&(d.normal=Ke.getInterpolatedAttribute(o,a,h,l,c,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:h,c:l,normal:new F,materialIndex:0};Ke.getNormal(os,as,ls,f.normal),d.face=f,d.barycoord=c}return d}class Wn extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const h=[],l=[],d=[],c=[];let f=0,m=0;S("z","y","x",-1,-1,n,e,t,o,r,0),S("z","y","x",1,-1,n,e,-t,o,r,1),S("x","z","y",1,1,t,n,e,s,o,2),S("x","z","y",1,-1,t,n,-e,s,o,3),S("x","y","z",1,-1,t,e,n,s,r,4),S("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(c,2));function S(T,_,u,w,p,E,b,D,I,O,A){const y=E/I,N=b/O,W=E/2,Y=b/2,K=D/2,tt=I+1,Z=O+1;let lt=0,$=0;const mt=new F;for(let _t=0;_t<Z;_t++){const Pt=_t*N-Y;for(let Ht=0;Ht<tt;Ht++){const $t=Ht*y-W;mt[T]=$t*w,mt[_]=Pt*p,mt[u]=K,l.push(mt.x,mt.y,mt.z),mt[T]=0,mt[_]=0,mt[u]=D>0?1:-1,d.push(mt.x,mt.y,mt.z),c.push(Ht/I),c.push(1-_t/O),lt+=1}}for(let _t=0;_t<O;_t++)for(let Pt=0;Pt<I;Pt++){const Ht=f+Pt+tt*_t,$t=f+Pt+tt*(_t+1),Vt=f+(Pt+1)+tt*(_t+1),qt=f+(Pt+1)+tt*_t;h.push(Ht,$t,qt),h.push($t,Vt,qt),$+=6}a.addGroup(m,$,A),m+=$,f+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ae(i){const t={};for(let e=0;e<i.length;e++){const n=xi(i[e]);for(const s in n)t[s]=n[s]}return t}function ih(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function pl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const sh={clone:xi,merge:Ae};var rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rh,this.fragmentShader=oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xi(t.uniforms),this.uniformsGroups=ih(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ml extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vn=new F,ha=new Nt,ua=new Nt;class Oe extends ml{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gi*2*Math.atan(Math.tan(Fi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vn.x,vn.y).multiplyScalar(-t/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vn.x,vn.y).multiplyScalar(-t/vn.z)}getViewSize(t,e){return this.getViewBounds(t,ha,ua),e.subVectors(ua,ha)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/h,e-=o.offsetY*n/l,s*=o.width/h,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ii=-90,si=1;class ah extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Oe(ii,si,t,e);s.layers=this.layers,this.add(s);const r=new Oe(ii,si,t,e);r.layers=this.layers,this.add(r);const o=new Oe(ii,si,t,e);o.layers=this.layers,this.add(o);const a=new Oe(ii,si,t,e);a.layers=this.layers,this.add(a);const h=new Oe(ii,si,t,e);h.layers=this.layers,this.add(h);const l=new Oe(ii,si,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,h]=e;for(const l of e)this.remove(l);if(t===nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,h,l,d]=this.children,c=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,h),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=T,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(c,f,m),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class _l extends Re{constructor(t=[],e=mi,n,s,r,o,a,h,l,d){super(t,e,n,s,r,o,a,h,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lh extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _l(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wn(5,5,5),r=new wn({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:yn});r.uniforms.tEquirect.value=e;const o=new fe(s,r),a=e.minFilter;return e.minFilter===zn&&(e.minFilter=tn),new ah(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class $e extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ch={type:"move"};class ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const T of t.hand.values()){const _=e.getJointPose(T,n),u=this._getHandJoint(l,T);_!==null&&(u.matrix.fromArray(_.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=_.radius),u.visible=_!==null}const d=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],f=d.position.distanceTo(c.position),m=.02,S=.005;l.inputState.pinching&&f>m+S?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-S&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ch)))}return a!==null&&(a.visible=s!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class bo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new bo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gl extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xe,this.environmentIntensity=1,this.environmentRotation=new Xe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class xl extends Re{constructor(t=null,e=1,n=1,s,r,o,a,h,l=ze,d=ze,c,f){super(null,o,a,h,l,d,s,r,c,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class da extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ri=new oe,fa=new oe,ds=[],pa=new Le,hh=new oe,Di=new fe,Li=new Ei;class Ao extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new da(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Le),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ri),pa.copy(t.boundingBox).applyMatrix4(ri),this.boundingBox.union(pa)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ri),Li.copy(t.boundingSphere).applyMatrix4(ri),this.boundingSphere.union(Li)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Di.geometry=this.geometry,Di.material=this.material,Di.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Li.copy(this.boundingSphere),Li.applyMatrix4(n),t.ray.intersectsSphere(Li)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ri),fa.multiplyMatrices(n,ri),Di.matrixWorld=fa,Di.raycast(t,ds);for(let o=0,a=ds.length;o<a;o++){const h=ds[o];h.instanceId=r,h.object=this,e.push(h)}ds.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new da(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xl(new Float32Array(s*this.count),s,this.count,go,en));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,h=s*t;r[h]=a,r.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const lr=new F,uh=new F,dh=new Gt;class Mn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=lr.subVectors(n,e).cross(uh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(lr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||dh.getNormalMatrix(t),s=this.coplanarPoint(lr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ln=new Ei,fh=new Nt(.5,.5),fs=new F;class wo{constructor(t=new Mn,e=new Mn,n=new Mn,s=new Mn,r=new Mn,o=new Mn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=nn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],h=r[2],l=r[3],d=r[4],c=r[5],f=r[6],m=r[7],S=r[8],T=r[9],_=r[10],u=r[11],w=r[12],p=r[13],E=r[14],b=r[15];if(s[0].setComponents(l-o,m-d,u-S,b-w).normalize(),s[1].setComponents(l+o,m+d,u+S,b+w).normalize(),s[2].setComponents(l+a,m+c,u+T,b+p).normalize(),s[3].setComponents(l-a,m-c,u-T,b-p).normalize(),n)s[4].setComponents(h,f,_,E).normalize(),s[5].setComponents(l-h,m-f,u-_,b-E).normalize();else if(s[4].setComponents(l-h,m-f,u-_,b-E).normalize(),e===nn)s[5].setComponents(l+h,m+f,u+_,b+E).normalize();else if(e===Rs)s[5].setComponents(h,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(t){Ln.center.set(0,0,0);const e=fh.distanceTo(t.center);return Ln.radius=.7071067811865476+e,Ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(fs.x=s.normal.x>0?t.max.x:t.min.x,fs.y=s.normal.y>0?t.max.y:t.min.y,fs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ro extends Gn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ps=new F,Ds=new F,ma=new oe,Ii=new Fs,ps=new Ei,cr=new F,_a=new F;class ph extends _e{constructor(t=new Me,e=new Ro){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ps.fromBufferAttribute(e,s-1),Ds.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ps.distanceTo(Ds);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(s),ps.radius+=r,t.ray.intersectsSphere(ps)===!1)return;ma.copy(s).invert(),Ii.copy(t.ray).applyMatrix4(ma);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const m=Math.max(0,o.start),S=Math.min(d.count,o.start+o.count);for(let T=m,_=S-1;T<_;T+=l){const u=d.getX(T),w=d.getX(T+1),p=ms(this,t,Ii,h,u,w,T);p&&e.push(p)}if(this.isLineLoop){const T=d.getX(S-1),_=d.getX(m),u=ms(this,t,Ii,h,T,_,S-1);u&&e.push(u)}}else{const m=Math.max(0,o.start),S=Math.min(f.count,o.start+o.count);for(let T=m,_=S-1;T<_;T+=l){const u=ms(this,t,Ii,h,T,T+1,T);u&&e.push(u)}if(this.isLineLoop){const T=ms(this,t,Ii,h,S-1,m,S-1);T&&e.push(T)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ms(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Ps.fromBufferAttribute(a,s),Ds.fromBufferAttribute(a,r),e.distanceSqToSegment(Ps,Ds,cr,_a)>n)return;cr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(cr);if(!(l<t.near||l>t.far))return{distance:l,point:_a.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const ga=new F,xa=new F;class vl extends ph{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ga.fromBufferAttribute(e,s),xa.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ga.distanceTo(xa);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ml extends Re{constructor(t,e,n=kn,s,r,o,a=ze,h=ze,l,d=Hi,c=1){if(d!==Hi&&d!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:c};super(f,s,r,o,a,h,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Sl extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Co extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],h=[],l=new F,d=new Nt;o.push(0,0,0),a.push(0,0,1),h.push(.5,.5);for(let c=0,f=3;c<=e;c++,f+=3){const m=n+c/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[f]/t+1)/2,d.y=(o[f+1]/t+1)/2,h.push(d.x,d.y)}for(let c=1;c<=e;c++)r.push(c,c+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class vi extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:h};const l=this;s=Math.floor(s),r=Math.floor(r);const d=[],c=[],f=[],m=[];let S=0;const T=[],_=n/2;let u=0;w(),o===!1&&(t>0&&p(!0),e>0&&p(!1)),this.setIndex(d),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(m,2));function w(){const E=new F,b=new F;let D=0;const I=(e-t)/n;for(let O=0;O<=r;O++){const A=[],y=O/r,N=y*(e-t)+t;for(let W=0;W<=s;W++){const Y=W/s,K=Y*h+a,tt=Math.sin(K),Z=Math.cos(K);b.x=N*tt,b.y=-y*n+_,b.z=N*Z,c.push(b.x,b.y,b.z),E.set(tt,I,Z).normalize(),f.push(E.x,E.y,E.z),m.push(Y,1-y),A.push(S++)}T.push(A)}for(let O=0;O<s;O++)for(let A=0;A<r;A++){const y=T[A][O],N=T[A+1][O],W=T[A+1][O+1],Y=T[A][O+1];(t>0||A!==0)&&(d.push(y,N,Y),D+=3),(e>0||A!==r-1)&&(d.push(N,W,Y),D+=3)}l.addGroup(u,D,0),u+=D}function p(E){const b=S,D=new Nt,I=new F;let O=0;const A=E===!0?t:e,y=E===!0?1:-1;for(let W=1;W<=s;W++)c.push(0,_*y,0),f.push(0,y,0),m.push(.5,.5),S++;const N=S;for(let W=0;W<=s;W++){const K=W/s*h+a,tt=Math.cos(K),Z=Math.sin(K);I.x=A*Z,I.y=_*y,I.z=A*tt,c.push(I.x,I.y,I.z),f.push(0,y,0),D.x=tt*.5+.5,D.y=Z*.5*y+.5,m.push(D.x,D.y),S++}for(let W=0;W<s;W++){const Y=b+W,K=N+W;E===!0?d.push(K,K+1,Y):d.push(K+1,K,Y),O+=3}l.addGroup(u,O,E===!0?1:2),u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ls extends vi{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ls(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Po extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),d(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const p=new F,E=new F,b=new F;for(let D=0;D<e.length;D+=3)m(e[D+0],p),m(e[D+1],E),m(e[D+2],b),h(p,E,b,w)}function h(w,p,E,b){const D=b+1,I=[];for(let O=0;O<=D;O++){I[O]=[];const A=w.clone().lerp(E,O/D),y=p.clone().lerp(E,O/D),N=D-O;for(let W=0;W<=N;W++)W===0&&O===D?I[O][W]=A:I[O][W]=A.clone().lerp(y,W/N)}for(let O=0;O<D;O++)for(let A=0;A<2*(D-O)-1;A++){const y=Math.floor(A/2);A%2===0?(f(I[O][y+1]),f(I[O+1][y]),f(I[O][y])):(f(I[O][y+1]),f(I[O+1][y+1]),f(I[O+1][y]))}}function l(w){const p=new F;for(let E=0;E<r.length;E+=3)p.x=r[E+0],p.y=r[E+1],p.z=r[E+2],p.normalize().multiplyScalar(w),r[E+0]=p.x,r[E+1]=p.y,r[E+2]=p.z}function d(){const w=new F;for(let p=0;p<r.length;p+=3){w.x=r[p+0],w.y=r[p+1],w.z=r[p+2];const E=_(w)/2/Math.PI+.5,b=u(w)/Math.PI+.5;o.push(E,1-b)}S(),c()}function c(){for(let w=0;w<o.length;w+=6){const p=o[w+0],E=o[w+2],b=o[w+4],D=Math.max(p,E,b),I=Math.min(p,E,b);D>.9&&I<.1&&(p<.2&&(o[w+0]+=1),E<.2&&(o[w+2]+=1),b<.2&&(o[w+4]+=1))}}function f(w){r.push(w.x,w.y,w.z)}function m(w,p){const E=w*3;p.x=t[E+0],p.y=t[E+1],p.z=t[E+2]}function S(){const w=new F,p=new F,E=new F,b=new F,D=new Nt,I=new Nt,O=new Nt;for(let A=0,y=0;A<r.length;A+=9,y+=6){w.set(r[A+0],r[A+1],r[A+2]),p.set(r[A+3],r[A+4],r[A+5]),E.set(r[A+6],r[A+7],r[A+8]),D.set(o[y+0],o[y+1]),I.set(o[y+2],o[y+3]),O.set(o[y+4],o[y+5]),b.copy(w).add(p).add(E).divideScalar(3);const N=_(b);T(D,y+0,w,N),T(I,y+2,p,N),T(O,y+4,E,N)}}function T(w,p,E,b){b<0&&w.x===1&&(o[p]=w.x-1),E.x===0&&E.z===0&&(o[p]=b/2/Math.PI+.5)}function _(w){return Math.atan2(w.z,-w.x)}function u(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Po(t.vertices,t.indices,t.radius,t.details)}}class Xi extends Po{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xi(t.radius,t.detail)}}class yi extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),h=Math.floor(s),l=a+1,d=h+1,c=t/a,f=e/h,m=[],S=[],T=[],_=[];for(let u=0;u<d;u++){const w=u*f-o;for(let p=0;p<l;p++){const E=p*c-r;S.push(E,-w,0),T.push(0,0,1),_.push(p/a),_.push(1-u/h)}}for(let u=0;u<h;u++)for(let w=0;w<a;w++){const p=w+l*u,E=w+l*(u+1),b=w+1+l*(u+1),D=w+1+l*u;m.push(p,E,D),m.push(E,b,D)}this.setIndex(m),this.setAttribute("position",new Kt(S,3)),this.setAttribute("normal",new Kt(T,3)),this.setAttribute("uv",new Kt(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Is extends Me{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],h=[],l=[],d=[];let c=t;const f=(e-t)/s,m=new F,S=new Nt;for(let T=0;T<=s;T++){for(let _=0;_<=n;_++){const u=r+_/n*o;m.x=c*Math.cos(u),m.y=c*Math.sin(u),h.push(m.x,m.y,m.z),l.push(0,0,1),S.x=(m.x/e+1)/2,S.y=(m.y/e+1)/2,d.push(S.x,S.y)}c+=f}for(let T=0;T<s;T++){const _=T*(n+1);for(let u=0;u<n;u++){const w=u+_,p=w,E=w+n+1,b=w+n+2,D=w+1;a.push(p,E,D),a.push(E,b,D)}}this.setIndex(a),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Do extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],h=[],l=[],d=new F,c=new F,f=new F;for(let m=0;m<=n;m++)for(let S=0;S<=s;S++){const T=S/s*r,_=m/n*Math.PI*2;c.x=(t+e*Math.cos(_))*Math.cos(T),c.y=(t+e*Math.cos(_))*Math.sin(T),c.z=e*Math.sin(_),a.push(c.x,c.y,c.z),d.x=t*Math.cos(T),d.y=t*Math.sin(T),f.subVectors(c,d).normalize(),h.push(f.x,f.y,f.z),l.push(S/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let S=1;S<=s;S++){const T=(s+1)*m+S-1,_=(s+1)*(m-1)+S-1,u=(s+1)*(m-1)+S,w=(s+1)*m+S;o.push(T,_,w),o.push(_,u,w)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Mi extends Gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mh extends Gn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xe,this.combine=fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _h extends Gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class gh extends Gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Lo extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class xh extends Lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const hr=new oe,va=new F,Ma=new F;class El{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wo,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;va.setFromMatrixPosition(t.matrixWorld),e.position.copy(va),Ma.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ma),e.updateMatrixWorld(),hr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Sa=new oe,Ui=new F,ur=new F;class vh extends El{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ui.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ui),ur.copy(n.position),ur.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ur),n.updateMatrixWorld(),s.makeTranslation(-Ui.x,-Ui.y,-Ui.z),Sa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa,n.coordinateSystem,n.reversedDepth)}}class Mh extends Lo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class yl extends ml{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,h=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,h=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Sh extends El{constructor(){super(new yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eh extends Lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new Sh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yh extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ea=new oe;class Th{constructor(t,e,n=0,s=1/0){this.ray=new Fs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new To,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ea.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ea),this}intersectObject(t,e=!0,n=[]){return oo(t,this,n,e),n.sort(ya),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)oo(t[s],this,n,e);return n.sort(ya),n}}function ya(i,t){return i.distance-t.distance}function oo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)oo(r[o],t,e,!0)}}class ao{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Yt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bh extends vl{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Me;r.setIndex(new We(n,1)),r.setAttribute("position",new Kt(s,3)),super(r,new Ro({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ah extends Vn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ta(i,t,e,n){const s=wh(n);switch(e){case rl:return i*t;case go:return i*t/s.components*s.byteLength;case xo:return i*t/s.components*s.byteLength;case al:return i*t*2/s.components*s.byteLength;case vo:return i*t*2/s.components*s.byteLength;case ol:return i*t*3/s.components*s.byteLength;case Ge:return i*t*4/s.components*s.byteLength;case Mo:return i*t*4/s.components*s.byteLength;case Ss:case Es:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ys:case Ts:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ir:case Nr:return Math.max(i,16)*Math.max(t,8)/4;case Lr:case Ur:return Math.max(i,8)*Math.max(t,8)/2;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Hr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Gr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Yr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case jr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Kr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $r:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qr:case to:case eo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case no:case io:return Math.ceil(i/4)*Math.ceil(t/4)*8;case so:case ro:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wh(i){switch(i){case sn:case el:return{byteLength:1,components:1};case zi:case nl:case Yi:return{byteLength:2,components:1};case mo:case _o:return{byteLength:2,components:4};case kn:case po:case en:return{byteLength:4,components:1};case il:case sl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uo);function Tl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Rh(i){const t=new WeakMap;function e(a,h){const l=a.array,d=a.usage,c=l.byteLength,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,l,d),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:c}}function n(a,h,l){const d=h.array,c=h.updateRanges;if(i.bindBuffer(l,a),c.length===0)i.bufferSubData(l,0,d);else{c.sort((m,S)=>m.start-S.start);let f=0;for(let m=1;m<c.length;m++){const S=c[f],T=c[m];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++f,c[f]=T)}c.length=f+1;for(let m=0,S=c.length;m<S;m++){const T=c[m];i.bufferSubData(l,T.start*d.BYTES_PER_ELEMENT,d,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const h=t.get(a);h&&(i.deleteBuffer(h.buffer),t.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,h));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,h),l.version=a.version}}return{get:s,remove:r,update:o}}var Ch=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ph=`#ifdef USE_ALPHAHASH
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
#endif`,Dh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ih=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nh=`#ifdef USE_AOMAP
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
#endif`,Fh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oh=`#ifdef USE_BATCHING
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
#endif`,Bh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vh=`#ifdef USE_IRIDESCENCE
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
#endif`,Gh=`#ifdef USE_BUMPMAP
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
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jh=`#define PI 3.141592653589793
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
} // validated`,Qh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tu=`vec3 transformedNormal = objectNormal;
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
#endif`,eu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,su=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ru="gl_FragColor = linearToOutputTexel( gl_FragColor );",ou=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,au=`#ifdef USE_ENVMAP
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
#endif`,lu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cu=`#ifdef USE_ENVMAP
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
#endif`,hu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uu=`#ifdef USE_ENVMAP
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
#endif`,du=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_u=`#ifdef USE_GRADIENTMAP
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
}`,gu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mu=`uniform bool receiveShadow;
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
#endif`,Su=`#ifdef USE_ENVMAP
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
#endif`,Eu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Au=`PhysicalMaterial material;
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
#endif`,wu=`struct PhysicalMaterial {
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
}`,Ru=`
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
#endif`,Cu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Du=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ou=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bu=`#if defined( USE_POINTS_UV )
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
#endif`,zu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wu=`#ifdef USE_MORPHTARGETS
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
#endif`,Xu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$u=`#ifdef USE_NORMALMAP
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
#endif`,Ju=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,td=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,id=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,od=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fd=`float getShadowMask() {
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
}`,pd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,md=`#ifdef USE_SKINNING
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
#endif`,_d=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gd=`#ifdef USE_SKINNING
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
#endif`,xd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ed=`#ifdef USE_TRANSMISSION
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
#endif`,yd=`#ifdef USE_TRANSMISSION
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
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cd=`uniform sampler2D t2D;
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
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Id=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`#include <common>
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
}`,Nd=`#if DEPTH_PACKING == 3200
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
}`,Fd=`#define DISTANCE
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
}`,Od=`#define DISTANCE
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
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`uniform float scale;
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
}`,Hd=`uniform vec3 diffuse;
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
}`,Vd=`#include <common>
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
}`,Gd=`uniform vec3 diffuse;
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
}`,Wd=`#define LAMBERT
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
}`,Xd=`#define LAMBERT
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
}`,Yd=`#define MATCAP
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
}`,qd=`#define MATCAP
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
}`,jd=`#define NORMAL
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
}`,Zd=`#define NORMAL
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
}`,Kd=`#define PHONG
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
}`,$d=`#define PHONG
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
}`,Jd=`#define STANDARD
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
}`,Qd=`#define STANDARD
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
}`,tf=`#define TOON
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
}`,ef=`#define TOON
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
}`,nf=`uniform float size;
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
}`,sf=`uniform vec3 diffuse;
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
}`,rf=`#include <common>
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
}`,of=`uniform vec3 color;
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
}`,af=`uniform float rotation;
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
}`,lf=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Ch,alphahash_pars_fragment:Ph,alphamap_fragment:Dh,alphamap_pars_fragment:Lh,alphatest_fragment:Ih,alphatest_pars_fragment:Uh,aomap_fragment:Nh,aomap_pars_fragment:Fh,batching_pars_vertex:Oh,batching_vertex:Bh,begin_vertex:zh,beginnormal_vertex:kh,bsdfs:Hh,iridescence_fragment:Vh,bumpmap_pars_fragment:Gh,clipping_planes_fragment:Wh,clipping_planes_pars_fragment:Xh,clipping_planes_pars_vertex:Yh,clipping_planes_vertex:qh,color_fragment:jh,color_pars_fragment:Zh,color_pars_vertex:Kh,color_vertex:$h,common:Jh,cube_uv_reflection_fragment:Qh,defaultnormal_vertex:tu,displacementmap_pars_vertex:eu,displacementmap_vertex:nu,emissivemap_fragment:iu,emissivemap_pars_fragment:su,colorspace_fragment:ru,colorspace_pars_fragment:ou,envmap_fragment:au,envmap_common_pars_fragment:lu,envmap_pars_fragment:cu,envmap_pars_vertex:hu,envmap_physical_pars_fragment:Su,envmap_vertex:uu,fog_vertex:du,fog_pars_vertex:fu,fog_fragment:pu,fog_pars_fragment:mu,gradientmap_pars_fragment:_u,lightmap_pars_fragment:gu,lights_lambert_fragment:xu,lights_lambert_pars_fragment:vu,lights_pars_begin:Mu,lights_toon_fragment:Eu,lights_toon_pars_fragment:yu,lights_phong_fragment:Tu,lights_phong_pars_fragment:bu,lights_physical_fragment:Au,lights_physical_pars_fragment:wu,lights_fragment_begin:Ru,lights_fragment_maps:Cu,lights_fragment_end:Pu,logdepthbuf_fragment:Du,logdepthbuf_pars_fragment:Lu,logdepthbuf_pars_vertex:Iu,logdepthbuf_vertex:Uu,map_fragment:Nu,map_pars_fragment:Fu,map_particle_fragment:Ou,map_particle_pars_fragment:Bu,metalnessmap_fragment:zu,metalnessmap_pars_fragment:ku,morphinstance_vertex:Hu,morphcolor_vertex:Vu,morphnormal_vertex:Gu,morphtarget_pars_vertex:Wu,morphtarget_vertex:Xu,normal_fragment_begin:Yu,normal_fragment_maps:qu,normal_pars_fragment:ju,normal_pars_vertex:Zu,normal_vertex:Ku,normalmap_pars_fragment:$u,clearcoat_normal_fragment_begin:Ju,clearcoat_normal_fragment_maps:Qu,clearcoat_pars_fragment:td,iridescence_pars_fragment:ed,opaque_fragment:nd,packing:id,premultiplied_alpha_fragment:sd,project_vertex:rd,dithering_fragment:od,dithering_pars_fragment:ad,roughnessmap_fragment:ld,roughnessmap_pars_fragment:cd,shadowmap_pars_fragment:hd,shadowmap_pars_vertex:ud,shadowmap_vertex:dd,shadowmask_pars_fragment:fd,skinbase_vertex:pd,skinning_pars_vertex:md,skinning_vertex:_d,skinnormal_vertex:gd,specularmap_fragment:xd,specularmap_pars_fragment:vd,tonemapping_fragment:Md,tonemapping_pars_fragment:Sd,transmission_fragment:Ed,transmission_pars_fragment:yd,uv_pars_fragment:Td,uv_pars_vertex:bd,uv_vertex:Ad,worldpos_vertex:wd,background_vert:Rd,background_frag:Cd,backgroundCube_vert:Pd,backgroundCube_frag:Dd,cube_vert:Ld,cube_frag:Id,depth_vert:Ud,depth_frag:Nd,distanceRGBA_vert:Fd,distanceRGBA_frag:Od,equirect_vert:Bd,equirect_frag:zd,linedashed_vert:kd,linedashed_frag:Hd,meshbasic_vert:Vd,meshbasic_frag:Gd,meshlambert_vert:Wd,meshlambert_frag:Xd,meshmatcap_vert:Yd,meshmatcap_frag:qd,meshnormal_vert:jd,meshnormal_frag:Zd,meshphong_vert:Kd,meshphong_frag:$d,meshphysical_vert:Jd,meshphysical_frag:Qd,meshtoon_vert:tf,meshtoon_frag:ef,points_vert:nf,points_frag:sf,shadow_vert:rf,shadow_frag:of,sprite_vert:af,sprite_frag:lf},gt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Qe={basic:{uniforms:Ae([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ae([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ae([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ae([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ae([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ae([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ae([gt.points,gt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ae([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ae([gt.common,gt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ae([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ae([gt.sprite,gt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ae([gt.common,gt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ae([gt.lights,gt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Qe.physical={uniforms:Ae([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const _s={r:0,b:0,g:0},In=new Xe,cf=new oe;function hf(i,t,e,n,s,r,o){const a=new kt(0);let h=r===!0?0:1,l,d,c=null,f=0,m=null;function S(p){let E=p.isScene===!0?p.background:null;return E&&E.isTexture&&(E=(p.backgroundBlurriness>0?e:t).get(E)),E}function T(p){let E=!1;const b=S(p);b===null?u(a,h):b&&b.isColor&&(u(b,1),E=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(p,E){const b=S(E);b&&(b.isCubeTexture||b.mapping===Ns)?(d===void 0&&(d=new fe(new Wn(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:xi(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),In.copy(E.backgroundRotation),In.x*=-1,In.y*=-1,In.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(cf.makeRotationFromEuler(In)),d.material.toneMapped=Qt.getTransfer(b.colorSpace)!==ie,(c!==b||f!==b.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,c=b,f=b.version,m=i.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new fe(new yi(2,2),new wn({name:"BackgroundMaterial",uniforms:xi(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(b.colorSpace)!==ie,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(c!==b||f!==b.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,c=b,f=b.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function u(p,E){p.getRGB(_s,pl(i)),n.buffers.color.setClear(_s.r,_s.g,_s.b,E,o)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,E=1){a.set(p),h=E,u(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(p){h=p,u(a,h)},render:T,addToRenderList:_,dispose:w}}function uf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,N,W,Y,K){let tt=!1;const Z=c(Y,W,N);r!==Z&&(r=Z,l(r.object)),tt=m(y,Y,W,K),tt&&S(y,Y,W,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,E(y,N,W,Y),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function h(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function d(y){return i.deleteVertexArray(y)}function c(y,N,W){const Y=W.wireframe===!0;let K=n[y.id];K===void 0&&(K={},n[y.id]=K);let tt=K[N.id];tt===void 0&&(tt={},K[N.id]=tt);let Z=tt[Y];return Z===void 0&&(Z=f(h()),tt[Y]=Z),Z}function f(y){const N=[],W=[],Y=[];for(let K=0;K<e;K++)N[K]=0,W[K]=0,Y[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:Y,object:y,attributes:{},index:null}}function m(y,N,W,Y){const K=r.attributes,tt=N.attributes;let Z=0;const lt=W.getAttributes();for(const $ in lt)if(lt[$].location>=0){const _t=K[$];let Pt=tt[$];if(Pt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(Pt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(Pt=y.instanceColor)),_t===void 0||_t.attribute!==Pt||Pt&&_t.data!==Pt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==Y}function S(y,N,W,Y){const K={},tt=N.attributes;let Z=0;const lt=W.getAttributes();for(const $ in lt)if(lt[$].location>=0){let _t=tt[$];_t===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor));const Pt={};Pt.attribute=_t,_t&&_t.data&&(Pt.data=_t.data),K[$]=Pt,Z++}r.attributes=K,r.attributesNum=Z,r.index=Y}function T(){const y=r.newAttributes;for(let N=0,W=y.length;N<W;N++)y[N]=0}function _(y){u(y,0)}function u(y,N){const W=r.newAttributes,Y=r.enabledAttributes,K=r.attributeDivisors;W[y]=1,Y[y]===0&&(i.enableVertexAttribArray(y),Y[y]=1),K[y]!==N&&(i.vertexAttribDivisor(y,N),K[y]=N)}function w(){const y=r.newAttributes,N=r.enabledAttributes;for(let W=0,Y=N.length;W<Y;W++)N[W]!==y[W]&&(i.disableVertexAttribArray(W),N[W]=0)}function p(y,N,W,Y,K,tt,Z){Z===!0?i.vertexAttribIPointer(y,N,W,K,tt):i.vertexAttribPointer(y,N,W,Y,K,tt)}function E(y,N,W,Y){T();const K=Y.attributes,tt=W.getAttributes(),Z=N.defaultAttributeValues;for(const lt in tt){const $=tt[lt];if($.location>=0){let mt=K[lt];if(mt===void 0&&(lt==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),lt==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),mt!==void 0){const _t=mt.normalized,Pt=mt.itemSize,Ht=t.get(mt);if(Ht===void 0)continue;const $t=Ht.buffer,Vt=Ht.type,qt=Ht.bytesPerElement,it=Vt===i.INT||Vt===i.UNSIGNED_INT||mt.gpuType===po;if(mt.isInterleavedBufferAttribute){const ot=mt.data,yt=ot.stride,Tt=mt.offset;if(ot.isInstancedInterleavedBuffer){for(let Et=0;Et<$.locationSize;Et++)u($.location+Et,ot.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Et=0;Et<$.locationSize;Et++)_($.location+Et);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Et=0;Et<$.locationSize;Et++)p($.location+Et,Pt/$.locationSize,Vt,_t,yt*qt,(Tt+Pt/$.locationSize*Et)*qt,it)}else{if(mt.isInstancedBufferAttribute){for(let ot=0;ot<$.locationSize;ot++)u($.location+ot,mt.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ot=0;ot<$.locationSize;ot++)_($.location+ot);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let ot=0;ot<$.locationSize;ot++)p($.location+ot,Pt/$.locationSize,Vt,_t,Pt*qt,Pt/$.locationSize*ot*qt,it)}}else if(Z!==void 0){const _t=Z[lt];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv($.location,_t);break;case 3:i.vertexAttrib3fv($.location,_t);break;case 4:i.vertexAttrib4fv($.location,_t);break;default:i.vertexAttrib1fv($.location,_t)}}}}w()}function b(){O();for(const y in n){const N=n[y];for(const W in N){const Y=N[W];for(const K in Y)d(Y[K].object),delete Y[K];delete N[W]}delete n[y]}}function D(y){if(n[y.id]===void 0)return;const N=n[y.id];for(const W in N){const Y=N[W];for(const K in Y)d(Y[K].object),delete Y[K];delete N[W]}delete n[y.id]}function I(y){for(const N in n){const W=n[N];if(W[y.id]===void 0)continue;const Y=W[y.id];for(const K in Y)d(Y[K].object),delete Y[K];delete W[y.id]}}function O(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:_,disableUnusedAttributes:w}}function df(i,t,e){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),e.update(d,n,1)}function o(l,d,c){c!==0&&(i.drawArraysInstanced(n,l,d,c),e.update(d,n,c))}function a(l,d,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,c);let m=0;for(let S=0;S<c;S++)m+=d[S];e.update(m,n,1)}function h(l,d,c,f){if(c===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let S=0;S<l.length;S++)o(l[S],d[S],f[S]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,f,0,c);let S=0;for(let T=0;T<c;T++)S+=d[T]*f[T];e.update(S,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function ff(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Ge&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const O=I===Yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==sn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==en&&!O)}function h(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=h(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const c=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=S>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:c,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:w,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:b,maxSamples:D}}function pf(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Mn,a=new Gt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(c,f){const m=c.length!==0||f||n!==0||s;return s=f,n=c.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,f){e=d(c,f,0)},this.setState=function(c,f,m){const S=c.clippingPlanes,T=c.clipIntersection,_=c.clipShadows,u=i.get(c);if(!s||S===null||S.length===0||r&&!_)r?d(null):l();else{const w=r?0:n,p=w*4;let E=u.clippingState||null;h.value=E,E=d(S,f,p,m);for(let b=0;b!==p;++b)E[b]=e[b];u.clippingState=E,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(c,f,m,S){const T=c!==null?c.length:0;let _=null;if(T!==0){if(_=h.value,S!==!0||_===null){const u=m+T*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(_===null||_.length<u)&&(_=new Float32Array(u));for(let p=0,E=m;p!==T;++p,E+=4)o.copy(c[p]).applyMatrix4(w,a),o.normal.toArray(_,E),_[E+3]=o.constant}h.value=_,h.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,_}}function mf(i){let t=new WeakMap;function e(o,a){return a===Cr?o.mapping=mi:a===Pr&&(o.mapping=_i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cr||a===Pr)if(t.has(o)){const h=t.get(o).texture;return e(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const l=new lh(h.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const hi=4,ba=[.125,.215,.35,.446,.526,.582],On=20,dr=new yl,Aa=new kt;let fr=null,pr=0,mr=0,_r=!1;const Nn=(1+Math.sqrt(5))/2,oi=1/Nn,wa=[new F(-Nn,oi,0),new F(Nn,oi,0),new F(-oi,0,Nn),new F(oi,0,Nn),new F(0,Nn,-oi),new F(0,Nn,oi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],_f=new F;class lo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=_f}=r;fr=this._renderer.getRenderTarget(),pr=this._renderer.getActiveCubeFace(),mr=this._renderer.getActiveMipmapLevel(),_r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ca(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fr,pr,mr),this._renderer.xr.enabled=_r,t.scissorTest=!1,gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fr=this._renderer.getRenderTarget(),pr=this._renderer.getActiveCubeFace(),mr=this._renderer.getActiveMipmapLevel(),_r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Yi,format:Ge,colorSpace:gi,depthBuffer:!1},s=Ra(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ra(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gf(r)),this._blurMaterial=xf(r,t,e)}return s}_compileMaterial(t){const e=new fe(this._lodPlanes[0],t);this._renderer.compile(e,dr)}_sceneToCubeUV(t,e,n,s,r){const h=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,m=c.toneMapping;c.getClearColor(Aa),c.toneMapping=Tn,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(s),c.clearDepth(),c.setRenderTarget(null));const T=new Os({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),_=new fe(new Wn,T);let u=!1;const w=t.background;w?w.isColor&&(T.color.copy(w),t.background=null,u=!0):(T.color.copy(Aa),u=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(h.up.set(0,l[p],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+d[p],r.y,r.z)):E===1?(h.up.set(0,0,l[p]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+d[p],r.z)):(h.up.set(0,l[p],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+d[p]));const b=this._cubeSize;gs(s,E*b,p>2?b:0,b,b),c.setRenderTarget(s),u&&c.render(_,h),c.render(t,h)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=m,c.autoClear=f,t.background=w}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===mi||t.mapping===_i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ca());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const h=this._cubeSize;gs(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,dr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wa[(s-r-1)%wa.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const h=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,c=new fe(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,S=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*On-1),T=r/S,_=isFinite(r)?1+Math.floor(d*T):On;_>On&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${On}`);const u=[];let w=0;for(let I=0;I<On;++I){const O=I/T,A=Math.exp(-O*O/2);u.push(A),I===0?w+=A:I<_&&(w+=2*A)}for(let I=0;I<u.length;I++)u[I]=u[I]/w;f.envMap.value=t.texture,f.samples.value=_,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:p}=this;f.dTheta.value=S,f.mipInt.value=p-n;const E=this._sizeLods[s],b=3*E*(s>p-hi?s-p+hi:0),D=4*(this._cubeSize-E);gs(e,b,D,3*E,2*E),h.setRenderTarget(e),h.render(c,dr)}}function gf(i){const t=[],e=[],n=[];let s=i;const r=i-hi+1+ba.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let h=1/a;o>i-hi?h=ba[o-i+hi-1]:o===0&&(h=0),n.push(h);const l=1/(a-2),d=-l,c=1+l,f=[d,d,c,d,c,c,d,d,c,c,d,c],m=6,S=6,T=3,_=2,u=1,w=new Float32Array(T*S*m),p=new Float32Array(_*S*m),E=new Float32Array(u*S*m);for(let D=0;D<m;D++){const I=D%3*2/3-1,O=D>2?0:-1,A=[I,O,0,I+2/3,O,0,I+2/3,O+1,0,I,O,0,I+2/3,O+1,0,I,O+1,0];w.set(A,T*S*D),p.set(f,_*S*D);const y=[D,D,D,D,D,D];E.set(y,u*S*D)}const b=new Me;b.setAttribute("position",new We(w,T)),b.setAttribute("uv",new We(p,_)),b.setAttribute("faceIndex",new We(E,u)),t.push(b),s>hi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ra(i,t,e){const n=new Hn(i,t,e);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xf(i,t,e){const n=new Float32Array(On),s=new F(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Io(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ca(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Pa(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Io(){return`

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
	`}function vf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const h=a.mapping,l=h===Cr||h===Pr,d=h===mi||h===_i;if(l||d){let c=t.get(a);const f=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new lo(i)),c=l?e.fromEquirectangular(a,c):e.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),c.texture;if(c!==void 0)return c.texture;{const m=a.image;return l&&m&&m.height>0||d&&m&&s(m)?(e===null&&(e=new lo(i)),c=l?e.fromEquirectangular(a):e.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),a.addEventListener("dispose",r),c.texture):null}}}return a}function s(a){let h=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&h++;return h===l}function r(a){const h=a.target;h.removeEventListener("dispose",r);const l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Mf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Wi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Sf(i,t,e,n){const s={},r=new WeakMap;function o(c){const f=c.target;f.index!==null&&t.remove(f.index);for(const S in f.attributes)t.remove(f.attributes[S]);f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(c,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function h(c){const f=c.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER)}function l(c){const f=[],m=c.index,S=c.attributes.position;let T=0;if(m!==null){const w=m.array;T=m.version;for(let p=0,E=w.length;p<E;p+=3){const b=w[p+0],D=w[p+1],I=w[p+2];f.push(b,D,D,I,I,b)}}else if(S!==void 0){const w=S.array;T=S.version;for(let p=0,E=w.length/3-1;p<E;p+=3){const b=p+0,D=p+1,I=p+2;f.push(b,D,D,I,I,b)}}else return;const _=new(cl(f)?fl:dl)(f,1);_.version=T;const u=r.get(c);u&&t.remove(u),r.set(c,_)}function d(c){const f=r.get(c);if(f){const m=c.index;m!==null&&f.version<m.version&&l(c)}else l(c);return r.get(c)}return{get:a,update:h,getWireframeAttribute:d}}function Ef(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function h(f,m){i.drawElements(n,m,r,f*o),e.update(m,n,1)}function l(f,m,S){S!==0&&(i.drawElementsInstanced(n,m,r,f*o,S),e.update(m,n,S))}function d(f,m,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,S);let _=0;for(let u=0;u<S;u++)_+=m[u];e.update(_,n,1)}function c(f,m,S,T){if(S===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let u=0;u<f.length;u++)l(f[u]/o,m[u],T[u]);else{_.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,T,0,S);let u=0;for(let w=0;w<S;w++)u+=m[w]*T[w];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=h,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=c}function yf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Tf(i,t,e){const n=new WeakMap,s=new re;function r(o,a,h){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=d!==void 0?d.length:0;let f=n.get(a);if(f===void 0||f.count!==c){let A=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,T=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let p=0;m===!0&&(p=1),S===!0&&(p=2),T===!0&&(p=3);let E=a.attributes.position.count*p,b=1;E>t.maxTextureSize&&(b=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const D=new Float32Array(E*b*4*c),I=new hl(D,E,b,c);I.type=en,I.needsUpdate=!0;const O=p*4;for(let y=0;y<c;y++){const N=_[y],W=u[y],Y=w[y],K=E*b*4*y;for(let tt=0;tt<N.count;tt++){const Z=tt*O;m===!0&&(s.fromBufferAttribute(N,tt),D[K+Z+0]=s.x,D[K+Z+1]=s.y,D[K+Z+2]=s.z,D[K+Z+3]=0),S===!0&&(s.fromBufferAttribute(W,tt),D[K+Z+4]=s.x,D[K+Z+5]=s.y,D[K+Z+6]=s.z,D[K+Z+7]=0),T===!0&&(s.fromBufferAttribute(Y,tt),D[K+Z+8]=s.x,D[K+Z+9]=s.y,D[K+Z+10]=s.z,D[K+Z+11]=Y.itemSize===4?s.w:1)}}f={count:c,texture:I,size:new Nt(E,b)},n.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let T=0;T<l.length;T++)m+=l[T];const S=a.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",l)}h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function bf(i,t,e,n){let s=new WeakMap;function r(h){const l=n.render.frame,d=h.geometry,c=t.get(h,d);if(s.get(c)!==l&&(t.update(c),s.set(c,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),s.get(h)!==l&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,l))),h.isSkinnedMesh){const f=h.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return c}function o(){s=new WeakMap}function a(h){const l=h.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const bl=new Re,Da=new Ml(1,1),Al=new hl,wl=new Xc,Rl=new _l,La=[],Ia=[],Ua=new Float32Array(16),Na=new Float32Array(9),Fa=new Float32Array(4);function Ti(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=La[s];if(r===void 0&&(r=new Float32Array(s),La[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Bs(i,t){let e=Ia[t];e===void 0&&(e=new Int32Array(t),Ia[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Af(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function Rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function Cf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function Pf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ge(e,n))return;Fa.set(n),i.uniformMatrix2fv(this.addr,!1,Fa),xe(e,n)}}function Df(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ge(e,n))return;Na.set(n),i.uniformMatrix3fv(this.addr,!1,Na),xe(e,n)}}function Lf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ge(e,n))return;Ua.set(n),i.uniformMatrix4fv(this.addr,!1,Ua),xe(e,n)}}function If(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function Nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function Ff(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Of(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function kf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function Hf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Da.compareFunction=ll,r=Da):r=bl,e.setTexture2D(t||r,s)}function Vf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wl,s)}function Gf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Rl,s)}function Wf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Al,s)}function Xf(i){switch(i){case 5126:return Af;case 35664:return wf;case 35665:return Rf;case 35666:return Cf;case 35674:return Pf;case 35675:return Df;case 35676:return Lf;case 5124:case 35670:return If;case 35667:case 35671:return Uf;case 35668:case 35672:return Nf;case 35669:case 35673:return Ff;case 5125:return Of;case 36294:return Bf;case 36295:return zf;case 36296:return kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Hf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return Gf;case 36289:case 36303:case 36311:case 36292:return Wf}}function Yf(i,t){i.uniform1fv(this.addr,t)}function qf(i,t){const e=Ti(t,this.size,2);i.uniform2fv(this.addr,e)}function jf(i,t){const e=Ti(t,this.size,3);i.uniform3fv(this.addr,e)}function Zf(i,t){const e=Ti(t,this.size,4);i.uniform4fv(this.addr,e)}function Kf(i,t){const e=Ti(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $f(i,t){const e=Ti(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jf(i,t){const e=Ti(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qf(i,t){i.uniform1iv(this.addr,t)}function tp(i,t){i.uniform2iv(this.addr,t)}function ep(i,t){i.uniform3iv(this.addr,t)}function np(i,t){i.uniform4iv(this.addr,t)}function ip(i,t){i.uniform1uiv(this.addr,t)}function sp(i,t){i.uniform2uiv(this.addr,t)}function rp(i,t){i.uniform3uiv(this.addr,t)}function op(i,t){i.uniform4uiv(this.addr,t)}function ap(i,t,e){const n=this.cache,s=t.length,r=Bs(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||bl,r[o])}function lp(i,t,e){const n=this.cache,s=t.length,r=Bs(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||wl,r[o])}function cp(i,t,e){const n=this.cache,s=t.length,r=Bs(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Rl,r[o])}function hp(i,t,e){const n=this.cache,s=t.length,r=Bs(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Al,r[o])}function up(i){switch(i){case 5126:return Yf;case 35664:return qf;case 35665:return jf;case 35666:return Zf;case 35674:return Kf;case 35675:return $f;case 35676:return Jf;case 5124:case 35670:return Qf;case 35667:case 35671:return tp;case 35668:case 35672:return ep;case 35669:case 35673:return np;case 5125:return ip;case 36294:return sp;case 36295:return rp;case 36296:return op;case 35678:case 36198:case 36298:case 36306:case 35682:return ap;case 35679:case 36299:case 36307:return lp;case 35680:case 36300:case 36308:case 36293:return cp;case 36289:case 36303:case 36311:case 36292:return hp}}class dp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xf(e.type)}}class fp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=up(e.type)}}class pp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const gr=/(\w+)(\])?(\[|\.)?/g;function Oa(i,t){i.seq.push(t),i.map[t.id]=t}function mp(i,t,e){const n=i.name,s=n.length;for(gr.lastIndex=0;;){const r=gr.exec(n),o=gr.lastIndex;let a=r[1];const h=r[2]==="]",l=r[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===s){Oa(e,l===void 0?new dp(a,i,t):new fp(a,i,t));break}else{let c=e.map[a];c===void 0&&(c=new pp(a),Oa(e,c)),e=c}}}class bs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);mp(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],h=n[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ba(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const _p=37297;let gp=0;function xp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const za=new Gt;function vp(i){Qt._getMatrix(za,Qt.workingColorSpace,i);const t=`mat3( ${za.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case ws:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ka(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+xp(i.getShaderSource(t),a)}else return r}function Mp(i,t){const e=vp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sp(i,t){let e;switch(t){case rc:e="Linear";break;case oc:e="Reinhard";break;case ac:e="Cineon";break;case Qa:e="ACESFilmic";break;case cc:e="AgX";break;case hc:e="Neutral";break;case lc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xs=new F;function Ep(){Qt.getLuminanceCoefficients(xs);const i=xs.x.toFixed(4),t=xs.y.toFixed(4),e=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ni).join(`
`)}function Tp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ni(i){return i!==""}function Ha(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Va(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(i){return i.replace(Ap,Rp)}const wp=new Map;function Rp(i,t){let e=Wt[t];if(e===void 0){const n=wp.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return co(e)}const Cp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ga(i){return i.replace(Cp,Pp)}function Pp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wa(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Dp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$a?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ja?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===un&&(t="SHADOWMAP_TYPE_VSM"),t}function Lp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mi:case _i:t="ENVMAP_TYPE_CUBE";break;case Ns:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ip(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===_i&&(t="ENVMAP_MODE_REFRACTION"),t}function Up(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fo:t="ENVMAP_BLENDING_MULTIPLY";break;case ic:t="ENVMAP_BLENDING_MIX";break;case sc:t="ENVMAP_BLENDING_ADD";break}return t}function Np(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Fp(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const h=Dp(e),l=Lp(e),d=Ip(e),c=Up(e),f=Np(e),m=yp(e),S=Tp(r),T=s.createProgram();let _,u,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Ni).join(`
`),_.length>0&&(_+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Ni).join(`
`),u.length>0&&(u+=`
`)):(_=[Wa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),u=[Wa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+c:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Tn?Sp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Mp("linearToOutputTexel",e.outputColorSpace),Ep(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ni).join(`
`)),o=co(o),o=Ha(o,e),o=Va(o,e),a=co(a),a=Ha(a,e),a=Va(a,e),o=Ga(o),a=Ga(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,u=["#define varying in",e.glslVersion===qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const p=w+_+o,E=w+u+a,b=Ba(s,s.VERTEX_SHADER,p),D=Ba(s,s.FRAGMENT_SHADER,E);s.attachShader(T,b),s.attachShader(T,D),e.index0AttributeName!==void 0?s.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function I(N){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(T)||"",Y=s.getShaderInfoLog(b)||"",K=s.getShaderInfoLog(D)||"",tt=W.trim(),Z=Y.trim(),lt=K.trim();let $=!0,mt=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,T,b,D);else{const _t=ka(s,b,"vertex"),Pt=ka(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+tt+`
`+_t+`
`+Pt)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(Z===""||lt==="")&&(mt=!1);mt&&(N.diagnostics={runnable:$,programLog:tt,vertexShader:{log:Z,prefix:_},fragmentShader:{log:lt,prefix:u}})}s.deleteShader(b),s.deleteShader(D),O=new bs(s,T),A=bp(s,T)}let O;this.getUniforms=function(){return O===void 0&&I(this),O};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(T,_p)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gp++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=b,this.fragmentShader=D,this}let Op=0;class Bp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new zp(t),e.set(t,n)),n}}class zp{constructor(t){this.id=Op++,this.code=t,this.usedTimes=0}}function kp(i,t,e,n,s,r,o){const a=new To,h=new Bp,l=new Set,d=[],c=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return l.add(A),A===0?"uv":`uv${A}`}function _(A,y,N,W,Y){const K=W.fog,tt=Y.geometry,Z=A.isMeshStandardMaterial?W.environment:null,lt=(A.isMeshStandardMaterial?e:t).get(A.envMap||Z),$=lt&&lt.mapping===Ns?lt.image.height:null,mt=S[A.type];A.precision!==null&&(m=s.getMaxPrecision(A.precision),m!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const _t=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Pt=_t!==void 0?_t.length:0;let Ht=0;tt.morphAttributes.position!==void 0&&(Ht=1),tt.morphAttributes.normal!==void 0&&(Ht=2),tt.morphAttributes.color!==void 0&&(Ht=3);let $t,Vt,qt,it;if(mt){const Dt=Qe[mt];$t=Dt.vertexShader,Vt=Dt.fragmentShader}else $t=A.vertexShader,Vt=A.fragmentShader,h.update(A),qt=h.getVertexShaderID(A),it=h.getFragmentShaderID(A);const ot=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Tt=Y.isInstancedMesh===!0,Et=Y.isBatchedMesh===!0,Ot=!!A.map,te=!!A.matcap,U=!!lt,nt=!!A.aoMap,pt=!!A.lightMap,ht=!!A.bumpMap,ct=!!A.normalMap,Xt=!!A.displacementMap,rt=!!A.emissiveMap,At=!!A.metalnessMap,Bt=!!A.roughnessMap,Zt=A.anisotropy>0,P=A.clearcoat>0,M=A.dispersion>0,X=A.iridescence>0,Q=A.sheen>0,at=A.transmission>0,J=Zt&&!!A.anisotropyMap,Mt=P&&!!A.clearcoatMap,ft=P&&!!A.clearcoatNormalMap,wt=P&&!!A.clearcoatRoughnessMap,Rt=X&&!!A.iridescenceMap,ut=X&&!!A.iridescenceThicknessMap,xt=Q&&!!A.sheenColorMap,It=Q&&!!A.sheenRoughnessMap,g=!!A.specularMap,v=!!A.specularColorMap,C=!!A.specularIntensityMap,x=at&&!!A.transmissionMap,L=at&&!!A.thicknessMap,k=!!A.gradientMap,V=!!A.alphaMap,B=A.alphaTest>0,z=!!A.alphaHash,st=!!A.extensions;let et=Tn;A.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(et=i.toneMapping);const vt={shaderID:mt,shaderType:A.type,shaderName:A.name,vertexShader:$t,fragmentShader:Vt,defines:A.defines,customVertexShaderID:qt,customFragmentShaderID:it,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:Et,batchingColor:Et&&Y._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&Y.instanceColor!==null,instancingMorph:Tt&&Y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:gi,alphaToCoverage:!!A.alphaToCoverage,map:Ot,matcap:te,envMap:U,envMapMode:U&&lt.mapping,envMapCubeUVHeight:$,aoMap:nt,lightMap:pt,bumpMap:ht,normalMap:ct,displacementMap:f&&Xt,emissiveMap:rt,normalMapObjectSpace:ct&&A.normalMapType===pc,normalMapTangentSpace:ct&&A.normalMapType===So,metalnessMap:At,roughnessMap:Bt,anisotropy:Zt,anisotropyMap:J,clearcoat:P,clearcoatMap:Mt,clearcoatNormalMap:ft,clearcoatRoughnessMap:wt,dispersion:M,iridescence:X,iridescenceMap:Rt,iridescenceThicknessMap:ut,sheen:Q,sheenColorMap:xt,sheenRoughnessMap:It,specularMap:g,specularColorMap:v,specularIntensityMap:C,transmission:at,transmissionMap:x,thicknessMap:L,gradientMap:k,opaque:A.transparent===!1&&A.blending===di&&A.alphaToCoverage===!1,alphaMap:V,alphaTest:B,alphaHash:z,combine:A.combine,mapUv:Ot&&T(A.map.channel),aoMapUv:nt&&T(A.aoMap.channel),lightMapUv:pt&&T(A.lightMap.channel),bumpMapUv:ht&&T(A.bumpMap.channel),normalMapUv:ct&&T(A.normalMap.channel),displacementMapUv:Xt&&T(A.displacementMap.channel),emissiveMapUv:rt&&T(A.emissiveMap.channel),metalnessMapUv:At&&T(A.metalnessMap.channel),roughnessMapUv:Bt&&T(A.roughnessMap.channel),anisotropyMapUv:J&&T(A.anisotropyMap.channel),clearcoatMapUv:Mt&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:ft&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:It&&T(A.sheenRoughnessMap.channel),specularMapUv:g&&T(A.specularMap.channel),specularColorMapUv:v&&T(A.specularColorMap.channel),specularIntensityMapUv:C&&T(A.specularIntensityMap.channel),transmissionMapUv:x&&T(A.transmissionMap.channel),thicknessMapUv:L&&T(A.thicknessMap.channel),alphaMapUv:V&&T(A.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(ct||Zt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!tt.attributes.uv&&(Ot||V),fog:!!K,useFog:A.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:yt,skinning:Y.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Ht,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:et,decodeVideoTexture:Ot&&A.map.isVideoTexture===!0&&Qt.getTransfer(A.map.colorSpace)===ie,decodeVideoTextureEmissive:rt&&A.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(A.emissiveMap.colorSpace)===ie,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ze,flipSided:A.side===we,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:st&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&A.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function u(A){const y=[];if(A.shaderID?y.push(A.shaderID):(y.push(A.customVertexShaderID),y.push(A.customFragmentShaderID)),A.defines!==void 0)for(const N in A.defines)y.push(N),y.push(A.defines[N]);return A.isRawShaderMaterial===!1&&(w(y,A),p(y,A),y.push(i.outputColorSpace)),y.push(A.customProgramCacheKey),y.join()}function w(A,y){A.push(y.precision),A.push(y.outputColorSpace),A.push(y.envMapMode),A.push(y.envMapCubeUVHeight),A.push(y.mapUv),A.push(y.alphaMapUv),A.push(y.lightMapUv),A.push(y.aoMapUv),A.push(y.bumpMapUv),A.push(y.normalMapUv),A.push(y.displacementMapUv),A.push(y.emissiveMapUv),A.push(y.metalnessMapUv),A.push(y.roughnessMapUv),A.push(y.anisotropyMapUv),A.push(y.clearcoatMapUv),A.push(y.clearcoatNormalMapUv),A.push(y.clearcoatRoughnessMapUv),A.push(y.iridescenceMapUv),A.push(y.iridescenceThicknessMapUv),A.push(y.sheenColorMapUv),A.push(y.sheenRoughnessMapUv),A.push(y.specularMapUv),A.push(y.specularColorMapUv),A.push(y.specularIntensityMapUv),A.push(y.transmissionMapUv),A.push(y.thicknessMapUv),A.push(y.combine),A.push(y.fogExp2),A.push(y.sizeAttenuation),A.push(y.morphTargetsCount),A.push(y.morphAttributeCount),A.push(y.numDirLights),A.push(y.numPointLights),A.push(y.numSpotLights),A.push(y.numSpotLightMaps),A.push(y.numHemiLights),A.push(y.numRectAreaLights),A.push(y.numDirLightShadows),A.push(y.numPointLightShadows),A.push(y.numSpotLightShadows),A.push(y.numSpotLightShadowsWithMaps),A.push(y.numLightProbes),A.push(y.shadowMapType),A.push(y.toneMapping),A.push(y.numClippingPlanes),A.push(y.numClipIntersection),A.push(y.depthPacking)}function p(A,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),A.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),A.push(a.mask)}function E(A){const y=S[A.type];let N;if(y){const W=Qe[y];N=sh.clone(W.uniforms)}else N=A.uniforms;return N}function b(A,y){let N;for(let W=0,Y=d.length;W<Y;W++){const K=d[W];if(K.cacheKey===y){N=K,++N.usedTimes;break}}return N===void 0&&(N=new Fp(i,y,A,r),d.push(N)),N}function D(A){if(--A.usedTimes===0){const y=d.indexOf(A);d[y]=d[d.length-1],d.pop(),A.destroy()}}function I(A){h.remove(A)}function O(){h.dispose()}return{getParameters:_,getProgramCacheKey:u,getUniforms:E,acquireProgram:b,releaseProgram:D,releaseShaderCache:I,programs:d,dispose:O}}function Hp(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,h){i.get(o)[a]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Vp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ya(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(c,f,m,S,T,_){let u=i[t];return u===void 0?(u={id:c.id,object:c,geometry:f,material:m,groupOrder:S,renderOrder:c.renderOrder,z:T,group:_},i[t]=u):(u.id=c.id,u.object=c,u.geometry=f,u.material=m,u.groupOrder=S,u.renderOrder=c.renderOrder,u.z=T,u.group=_),t++,u}function a(c,f,m,S,T,_){const u=o(c,f,m,S,T,_);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function h(c,f,m,S,T,_){const u=o(c,f,m,S,T,_);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function l(c,f){e.length>1&&e.sort(c||Vp),n.length>1&&n.sort(f||Xa),s.length>1&&s.sort(f||Xa)}function d(){for(let c=t,f=i.length;c<f;c++){const m=i[c];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:h,finish:d,sort:l}}function Gp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ya,i.set(n,[o])):s>=r.length?(o=new Ya,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Wp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new kt};break;case"SpotLight":e={position:new F,direction:new F,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Xp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Yp=0;function qp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jp(i){const t=new Wp,e=Xp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const s=new F,r=new oe,o=new oe;function a(l){let d=0,c=0,f=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let m=0,S=0,T=0,_=0,u=0,w=0,p=0,E=0,b=0,D=0,I=0;l.sort(qp);for(let A=0,y=l.length;A<y;A++){const N=l[A],W=N.color,Y=N.intensity,K=N.distance,tt=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=W.r*Y,c+=W.g*Y,f+=W.b*Y;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(N.sh.coefficients[Z],Y);I++}else if(N.isDirectionalLight){const Z=t.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const lt=N.shadow,$=e.get(N);$.shadowIntensity=lt.intensity,$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=tt,n.directionalShadowMatrix[m]=N.shadow.matrix,w++}n.directional[m]=Z,m++}else if(N.isSpotLight){const Z=t.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(W).multiplyScalar(Y),Z.distance=K,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,n.spot[T]=Z;const lt=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,lt.updateMatrices(N),N.castShadow&&D++),n.spotLightMatrix[T]=lt.matrix,N.castShadow){const $=e.get(N);$.shadowIntensity=lt.intensity,$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,n.spotShadow[T]=$,n.spotShadowMap[T]=tt,E++}T++}else if(N.isRectAreaLight){const Z=t.get(N);Z.color.copy(W).multiplyScalar(Y),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),n.rectArea[_]=Z,_++}else if(N.isPointLight){const Z=t.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){const lt=N.shadow,$=e.get(N);$.shadowIntensity=lt.intensity,$.shadowBias=lt.bias,$.shadowNormalBias=lt.normalBias,$.shadowRadius=lt.radius,$.shadowMapSize=lt.mapSize,$.shadowCameraNear=lt.camera.near,$.shadowCameraFar=lt.camera.far,n.pointShadow[S]=$,n.pointShadowMap[S]=tt,n.pointShadowMatrix[S]=N.shadow.matrix,p++}n.point[S]=Z,S++}else if(N.isHemisphereLight){const Z=t.get(N);Z.skyColor.copy(N.color).multiplyScalar(Y),Z.groundColor.copy(N.groundColor).multiplyScalar(Y),n.hemi[u]=Z,u++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=c,n.ambient[2]=f;const O=n.hash;(O.directionalLength!==m||O.pointLength!==S||O.spotLength!==T||O.rectAreaLength!==_||O.hemiLength!==u||O.numDirectionalShadows!==w||O.numPointShadows!==p||O.numSpotShadows!==E||O.numSpotMaps!==b||O.numLightProbes!==I)&&(n.directional.length=m,n.spot.length=T,n.rectArea.length=_,n.point.length=S,n.hemi.length=u,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=p,n.pointShadowMap.length=p,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=p,n.spotLightMatrix.length=E+b-D,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=I,O.directionalLength=m,O.pointLength=S,O.spotLength=T,O.rectAreaLength=_,O.hemiLength=u,O.numDirectionalShadows=w,O.numPointShadows=p,O.numSpotShadows=E,O.numSpotMaps=b,O.numLightProbes=I,n.version=Yp++)}function h(l,d){let c=0,f=0,m=0,S=0,T=0;const _=d.matrixWorldInverse;for(let u=0,w=l.length;u<w;u++){const p=l[u];if(p.isDirectionalLight){const E=n.directional[c];E.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),c++}else if(p.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(p.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(p.matrixWorld),s.setFromMatrixPosition(p.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),m++}else if(p.isRectAreaLight){const E=n.rectArea[S];E.position.setFromMatrixPosition(p.matrixWorld),E.position.applyMatrix4(_),o.identity(),r.copy(p.matrixWorld),r.premultiply(_),o.extractRotation(r),E.halfWidth.set(p.width*.5,0,0),E.halfHeight.set(0,p.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),S++}else if(p.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(p.matrixWorld),E.position.applyMatrix4(_),f++}else if(p.isHemisphereLight){const E=n.hemi[T];E.direction.setFromMatrixPosition(p.matrixWorld),E.direction.transformDirection(_),T++}}}return{setup:a,setupView:h,state:n}}function qa(i){const t=new jp(i),e=[],n=[];function s(d){l.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function h(d){t.setupView(e,d)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:h,pushLight:r,pushShadow:o}}function Zp(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new qa(i),t.set(s,[a])):r>=o.length?(a=new qa(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$p=`uniform sampler2D shadow_pass;
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
}`;function Jp(i,t,e){let n=new wo;const s=new Nt,r=new Nt,o=new re,a=new _h({depthPacking:fc}),h=new gh,l={},d=e.maxTextureSize,c={[bn]:we,[we]:bn,[Ze]:Ze},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Kp,fragmentShader:$p}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const S=new Me;S.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new fe(S,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$a;let u=this.type;this.render=function(D,I,O){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||D.length===0)return;const A=i.getRenderTarget(),y=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),W=i.state;W.setBlending(yn),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Y=u!==un&&this.type===un,K=u===un&&this.type!==un;for(let tt=0,Z=D.length;tt<Z;tt++){const lt=D[tt],$=lt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",lt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const mt=$.getFrameExtents();if(s.multiply(mt),r.copy($.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/mt.x),s.x=r.x*mt.x,$.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/mt.y),s.y=r.y*mt.y,$.mapSize.y=r.y)),$.map===null||Y===!0||K===!0){const Pt=this.type!==un?{minFilter:ze,magFilter:ze}:{};$.map!==null&&$.map.dispose(),$.map=new Hn(s.x,s.y,Pt),$.map.texture.name=lt.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const _t=$.getViewportCount();for(let Pt=0;Pt<_t;Pt++){const Ht=$.getViewport(Pt);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),W.viewport(o),$.updateMatrices(lt,Pt),n=$.getFrustum(),E(I,O,$.camera,lt,this.type)}$.isPointLightShadow!==!0&&this.type===un&&w($,O),$.needsUpdate=!1}u=this.type,_.needsUpdate=!1,i.setRenderTarget(A,y,N)};function w(D,I){const O=t.update(T);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Hn(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(I,null,O,f,T,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(I,null,O,m,T,null)}function p(D,I,O,A){let y=null;const N=O.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(N!==void 0)y=N;else if(y=O.isPointLight===!0?h:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const W=y.uuid,Y=I.uuid;let K=l[W];K===void 0&&(K={},l[W]=K);let tt=K[Y];tt===void 0&&(tt=y.clone(),K[Y]=tt,I.addEventListener("dispose",b)),y=tt}if(y.visible=I.visible,y.wireframe=I.wireframe,A===un?y.side=I.shadowSide!==null?I.shadowSide:I.side:y.side=I.shadowSide!==null?I.shadowSide:c[I.side],y.alphaMap=I.alphaMap,y.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,y.map=I.map,y.clipShadows=I.clipShadows,y.clippingPlanes=I.clippingPlanes,y.clipIntersection=I.clipIntersection,y.displacementMap=I.displacementMap,y.displacementScale=I.displacementScale,y.displacementBias=I.displacementBias,y.wireframeLinewidth=I.wireframeLinewidth,y.linewidth=I.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=i.properties.get(y);W.light=O}return y}function E(D,I,O,A,y){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&y===un)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,D.matrixWorld);const Y=t.update(D),K=D.material;if(Array.isArray(K)){const tt=Y.groups;for(let Z=0,lt=tt.length;Z<lt;Z++){const $=tt[Z],mt=K[$.materialIndex];if(mt&&mt.visible){const _t=p(D,mt,A,y);D.onBeforeShadow(i,D,I,O,Y,_t,$),i.renderBufferDirect(O,null,Y,_t,D,$),D.onAfterShadow(i,D,I,O,Y,_t,$)}}}else if(K.visible){const tt=p(D,K,A,y);D.onBeforeShadow(i,D,I,O,Y,tt,null),i.renderBufferDirect(O,null,Y,tt,D,null),D.onAfterShadow(i,D,I,O,Y,tt,null)}}const W=D.children;for(let Y=0,K=W.length;Y<K;Y++)E(W[Y],I,O,A,y)}function b(D){D.target.removeEventListener("dispose",b);for(const O in l){const A=l[O],y=D.target.uuid;y in A&&(A[y].dispose(),delete A[y])}}}const Qp={[Er]:yr,[Tr]:wr,[br]:Rr,[pi]:Ar,[yr]:Er,[wr]:Tr,[Rr]:br,[Ar]:pi};function tm(i,t){function e(){let x=!1;const L=new re;let k=null;const V=new re(0,0,0,0);return{setMask:function(B){k!==B&&!x&&(i.colorMask(B,B,B,B),k=B)},setLocked:function(B){x=B},setClear:function(B,z,st,et,vt){vt===!0&&(B*=et,z*=et,st*=et),L.set(B,z,st,et),V.equals(L)===!1&&(i.clearColor(B,z,st,et),V.copy(L))},reset:function(){x=!1,k=null,V.set(-1,0,0,0)}}}function n(){let x=!1,L=!1,k=null,V=null,B=null;return{setReversed:function(z){if(L!==z){const st=t.get("EXT_clip_control");z?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),L=z;const et=B;B=null,this.setClear(et)}},getReversed:function(){return L},setTest:function(z){z?ot(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(z){k!==z&&!x&&(i.depthMask(z),k=z)},setFunc:function(z){if(L&&(z=Qp[z]),V!==z){switch(z){case Er:i.depthFunc(i.NEVER);break;case yr:i.depthFunc(i.ALWAYS);break;case Tr:i.depthFunc(i.LESS);break;case pi:i.depthFunc(i.LEQUAL);break;case br:i.depthFunc(i.EQUAL);break;case Ar:i.depthFunc(i.GEQUAL);break;case wr:i.depthFunc(i.GREATER);break;case Rr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}V=z}},setLocked:function(z){x=z},setClear:function(z){B!==z&&(L&&(z=1-z),i.clearDepth(z),B=z)},reset:function(){x=!1,k=null,V=null,B=null,L=!1}}}function s(){let x=!1,L=null,k=null,V=null,B=null,z=null,st=null,et=null,vt=null;return{setTest:function(Dt){x||(Dt?ot(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(Dt){L!==Dt&&!x&&(i.stencilMask(Dt),L=Dt)},setFunc:function(Dt,ee,le){(k!==Dt||V!==ee||B!==le)&&(i.stencilFunc(Dt,ee,le),k=Dt,V=ee,B=le)},setOp:function(Dt,ee,le){(z!==Dt||st!==ee||et!==le)&&(i.stencilOp(Dt,ee,le),z=Dt,st=ee,et=le)},setLocked:function(Dt){x=Dt},setClear:function(Dt){vt!==Dt&&(i.clearStencil(Dt),vt=Dt)},reset:function(){x=!1,L=null,k=null,V=null,B=null,z=null,st=null,et=null,vt=null}}}const r=new e,o=new n,a=new s,h=new WeakMap,l=new WeakMap;let d={},c={},f=new WeakMap,m=[],S=null,T=!1,_=null,u=null,w=null,p=null,E=null,b=null,D=null,I=new kt(0,0,0),O=0,A=!1,y=null,N=null,W=null,Y=null,K=null;const tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,lt=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=lt>=1):$.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=lt>=2);let mt=null,_t={};const Pt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),$t=new re().fromArray(Pt),Vt=new re().fromArray(Ht);function qt(x,L,k,V){const B=new Uint8Array(4),z=i.createTexture();i.bindTexture(x,z),i.texParameteri(x,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(x,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<k;st++)x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY?i.texImage3D(L,0,i.RGBA,1,1,V,0,i.RGBA,i.UNSIGNED_BYTE,B):i.texImage2D(L+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,B);return z}const it={};it[i.TEXTURE_2D]=qt(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(pi),ht(!1),ct(Ho),ot(i.CULL_FACE),nt(yn);function ot(x){d[x]!==!0&&(i.enable(x),d[x]=!0)}function yt(x){d[x]!==!1&&(i.disable(x),d[x]=!1)}function Tt(x,L){return c[x]!==L?(i.bindFramebuffer(x,L),c[x]=L,x===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=L),x===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=L),!0):!1}function Et(x,L){let k=m,V=!1;if(x){k=f.get(L),k===void 0&&(k=[],f.set(L,k));const B=x.textures;if(k.length!==B.length||k[0]!==i.COLOR_ATTACHMENT0){for(let z=0,st=B.length;z<st;z++)k[z]=i.COLOR_ATTACHMENT0+z;k.length=B.length,V=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,V=!0);V&&i.drawBuffers(k)}function Ot(x){return S!==x?(i.useProgram(x),S=x,!0):!1}const te={[Fn]:i.FUNC_ADD,[kl]:i.FUNC_SUBTRACT,[Hl]:i.FUNC_REVERSE_SUBTRACT};te[Vl]=i.MIN,te[Gl]=i.MAX;const U={[Wl]:i.ZERO,[Xl]:i.ONE,[Yl]:i.SRC_COLOR,[Mr]:i.SRC_ALPHA,[Jl]:i.SRC_ALPHA_SATURATE,[Kl]:i.DST_COLOR,[jl]:i.DST_ALPHA,[ql]:i.ONE_MINUS_SRC_COLOR,[Sr]:i.ONE_MINUS_SRC_ALPHA,[$l]:i.ONE_MINUS_DST_COLOR,[Zl]:i.ONE_MINUS_DST_ALPHA,[Ql]:i.CONSTANT_COLOR,[tc]:i.ONE_MINUS_CONSTANT_COLOR,[ec]:i.CONSTANT_ALPHA,[nc]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(x,L,k,V,B,z,st,et,vt,Dt){if(x===yn){T===!0&&(yt(i.BLEND),T=!1);return}if(T===!1&&(ot(i.BLEND),T=!0),x!==zl){if(x!==_||Dt!==A){if((u!==Fn||E!==Fn)&&(i.blendEquation(i.FUNC_ADD),u=Fn,E=Fn),Dt)switch(x){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFunc(i.ONE,i.ONE);break;case Go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Go:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}w=null,p=null,b=null,D=null,I.set(0,0,0),O=0,_=x,A=Dt}return}B=B||L,z=z||k,st=st||V,(L!==u||B!==E)&&(i.blendEquationSeparate(te[L],te[B]),u=L,E=B),(k!==w||V!==p||z!==b||st!==D)&&(i.blendFuncSeparate(U[k],U[V],U[z],U[st]),w=k,p=V,b=z,D=st),(et.equals(I)===!1||vt!==O)&&(i.blendColor(et.r,et.g,et.b,vt),I.copy(et),O=vt),_=x,A=!1}function pt(x,L){x.side===Ze?yt(i.CULL_FACE):ot(i.CULL_FACE);let k=x.side===we;L&&(k=!k),ht(k),x.blending===di&&x.transparent===!1?nt(yn):nt(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),o.setFunc(x.depthFunc),o.setTest(x.depthTest),o.setMask(x.depthWrite),r.setMask(x.colorWrite);const V=x.stencilWrite;a.setTest(V),V&&(a.setMask(x.stencilWriteMask),a.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),a.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),rt(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(x){y!==x&&(x?i.frontFace(i.CW):i.frontFace(i.CCW),y=x)}function ct(x){x!==Ol?(ot(i.CULL_FACE),x!==N&&(x===Ho?i.cullFace(i.BACK):x===Bl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),N=x}function Xt(x){x!==W&&(Z&&i.lineWidth(x),W=x)}function rt(x,L,k){x?(ot(i.POLYGON_OFFSET_FILL),(Y!==L||K!==k)&&(i.polygonOffset(L,k),Y=L,K=k)):yt(i.POLYGON_OFFSET_FILL)}function At(x){x?ot(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function Bt(x){x===void 0&&(x=i.TEXTURE0+tt-1),mt!==x&&(i.activeTexture(x),mt=x)}function Zt(x,L,k){k===void 0&&(mt===null?k=i.TEXTURE0+tt-1:k=mt);let V=_t[k];V===void 0&&(V={type:void 0,texture:void 0},_t[k]=V),(V.type!==x||V.texture!==L)&&(mt!==k&&(i.activeTexture(k),mt=k),i.bindTexture(x,L||it[x]),V.type=x,V.texture=L)}function P(){const x=_t[mt];x!==void 0&&x.type!==void 0&&(i.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Q(){try{i.texSubImage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function at(){try{i.texSubImage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Mt(){try{i.compressedTexSubImage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ft(){try{i.texStorage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function wt(){try{i.texStorage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Rt(){try{i.texImage2D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ut(){try{i.texImage3D(...arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function xt(x){$t.equals(x)===!1&&(i.scissor(x.x,x.y,x.z,x.w),$t.copy(x))}function It(x){Vt.equals(x)===!1&&(i.viewport(x.x,x.y,x.z,x.w),Vt.copy(x))}function g(x,L){let k=l.get(L);k===void 0&&(k=new WeakMap,l.set(L,k));let V=k.get(x);V===void 0&&(V=i.getUniformBlockIndex(L,x.name),k.set(x,V))}function v(x,L){const V=l.get(L).get(x);h.get(L)!==V&&(i.uniformBlockBinding(L,V,x.__bindingPointIndex),h.set(L,V))}function C(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},mt=null,_t={},c={},f=new WeakMap,m=[],S=null,T=!1,_=null,u=null,w=null,p=null,E=null,b=null,D=null,I=new kt(0,0,0),O=0,A=!1,y=null,N=null,W=null,Y=null,K=null,$t.set(0,0,i.canvas.width,i.canvas.height),Vt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:yt,bindFramebuffer:Tt,drawBuffers:Et,useProgram:Ot,setBlending:nt,setMaterial:pt,setFlipSided:ht,setCullFace:ct,setLineWidth:Xt,setPolygonOffset:rt,setScissorTest:At,activeTexture:Bt,bindTexture:Zt,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:X,texImage2D:Rt,texImage3D:ut,updateUBOMapping:g,uniformBlockBinding:v,texStorage2D:ft,texStorage3D:wt,texSubImage2D:Q,texSubImage3D:at,compressedTexSubImage2D:J,compressedTexSubImage3D:Mt,scissor:xt,viewport:It,reset:C}}function em(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,d=new WeakMap;let c;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,M){return m?new OffscreenCanvas(P,M):Cs("canvas")}function T(P,M,X){let Q=1;const at=Zt(P);if((at.width>X||at.height>X)&&(Q=X/Math.max(at.width,at.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(Q*at.width),Mt=Math.floor(Q*at.height);c===void 0&&(c=S(J,Mt));const ft=M?S(J,Mt):c;return ft.width=J,ft.height=Mt,ft.getContext("2d").drawImage(P,0,0,J,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+J+"x"+Mt+")."),ft}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),P;return P}function _(P){return P.generateMipmaps}function u(P){i.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function p(P,M,X,Q,at=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=M;if(M===i.RED&&(X===i.FLOAT&&(J=i.R32F),X===i.HALF_FLOAT&&(J=i.R16F),X===i.UNSIGNED_BYTE&&(J=i.R8)),M===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.R8UI),X===i.UNSIGNED_SHORT&&(J=i.R16UI),X===i.UNSIGNED_INT&&(J=i.R32UI),X===i.BYTE&&(J=i.R8I),X===i.SHORT&&(J=i.R16I),X===i.INT&&(J=i.R32I)),M===i.RG&&(X===i.FLOAT&&(J=i.RG32F),X===i.HALF_FLOAT&&(J=i.RG16F),X===i.UNSIGNED_BYTE&&(J=i.RG8)),M===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.RG8UI),X===i.UNSIGNED_SHORT&&(J=i.RG16UI),X===i.UNSIGNED_INT&&(J=i.RG32UI),X===i.BYTE&&(J=i.RG8I),X===i.SHORT&&(J=i.RG16I),X===i.INT&&(J=i.RG32I)),M===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.RGB8UI),X===i.UNSIGNED_SHORT&&(J=i.RGB16UI),X===i.UNSIGNED_INT&&(J=i.RGB32UI),X===i.BYTE&&(J=i.RGB8I),X===i.SHORT&&(J=i.RGB16I),X===i.INT&&(J=i.RGB32I)),M===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),X===i.UNSIGNED_INT&&(J=i.RGBA32UI),X===i.BYTE&&(J=i.RGBA8I),X===i.SHORT&&(J=i.RGBA16I),X===i.INT&&(J=i.RGBA32I)),M===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),M===i.RGBA){const Mt=at?ws:Qt.getTransfer(Q);X===i.FLOAT&&(J=i.RGBA32F),X===i.HALF_FLOAT&&(J=i.RGBA16F),X===i.UNSIGNED_BYTE&&(J=Mt===ie?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function E(P,M){let X;return P?M===null||M===kn||M===ki?X=i.DEPTH24_STENCIL8:M===en?X=i.DEPTH32F_STENCIL8:M===zi&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===kn||M===ki?X=i.DEPTH_COMPONENT24:M===en?X=i.DEPTH_COMPONENT32F:M===zi&&(X=i.DEPTH_COMPONENT16),X}function b(P,M){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==ze&&P.minFilter!==tn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function D(P){const M=P.target;M.removeEventListener("dispose",D),O(M),M.isVideoTexture&&d.delete(M)}function I(P){const M=P.target;M.removeEventListener("dispose",I),y(M)}function O(P){const M=n.get(P);if(M.__webglInit===void 0)return;const X=P.source,Q=f.get(X);if(Q){const at=Q[M.__cacheKey];at.usedTimes--,at.usedTimes===0&&A(P),Object.keys(Q).length===0&&f.delete(X)}n.remove(P)}function A(P){const M=n.get(P);i.deleteTexture(M.__webglTexture);const X=P.source,Q=f.get(X);delete Q[M.__cacheKey],o.memory.textures--}function y(P){const M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let at=0;at<M.__webglFramebuffer[Q].length;at++)i.deleteFramebuffer(M.__webglFramebuffer[Q][at]);else i.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=P.textures;for(let Q=0,at=X.length;Q<at;Q++){const J=n.get(X[Q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(X[Q])}n.remove(P)}let N=0;function W(){N=0}function Y(){const P=N;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function K(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function tt(P,M){const X=n.get(P);if(P.isVideoTexture&&At(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(X,P,M);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+M)}function Z(P,M){const X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){it(X,P,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+M)}function lt(P,M){const X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){it(X,P,M);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+M)}function $(P,M){const X=n.get(P);if(P.version>0&&X.__version!==P.version){ot(X,P,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+M)}const mt={[As]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[Dr]:i.MIRRORED_REPEAT},_t={[ze]:i.NEAREST,[uc]:i.NEAREST_MIPMAP_NEAREST,[Zi]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[ks]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},Pt={[mc]:i.NEVER,[Sc]:i.ALWAYS,[_c]:i.LESS,[ll]:i.LEQUAL,[gc]:i.EQUAL,[Mc]:i.GEQUAL,[xc]:i.GREATER,[vc]:i.NOTEQUAL};function Ht(P,M){if(M.type===en&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===tn||M.magFilter===ks||M.magFilter===Zi||M.magFilter===zn||M.minFilter===tn||M.minFilter===ks||M.minFilter===Zi||M.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,mt[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,mt[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,mt[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,_t[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,_t[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Pt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ze||M.minFilter!==Zi&&M.minFilter!==zn||M.type===en&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function $t(P,M){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",D));const Q=M.source;let at=f.get(Q);at===void 0&&(at={},f.set(Q,at));const J=K(M);if(J!==P.__cacheKey){at[J]===void 0&&(at[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),at[J].usedTimes++;const Mt=at[P.__cacheKey];Mt!==void 0&&(at[P.__cacheKey].usedTimes--,Mt.usedTimes===0&&A(M)),P.__cacheKey=J,P.__webglTexture=at[J].texture}return X}function Vt(P,M,X){return Math.floor(Math.floor(P/X)/M)}function qt(P,M,X,Q){const J=P.updateRanges;if(J.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,X,Q,M.data);else{J.sort((ut,xt)=>ut.start-xt.start);let Mt=0;for(let ut=1;ut<J.length;ut++){const xt=J[Mt],It=J[ut],g=xt.start+xt.count,v=Vt(It.start,M.width,4),C=Vt(xt.start,M.width,4);It.start<=g+1&&v===C&&Vt(It.start+It.count-1,M.width,4)===v?xt.count=Math.max(xt.count,It.start+It.count-xt.start):(++Mt,J[Mt]=It)}J.length=Mt+1;const ft=i.getParameter(i.UNPACK_ROW_LENGTH),wt=i.getParameter(i.UNPACK_SKIP_PIXELS),Rt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let ut=0,xt=J.length;ut<xt;ut++){const It=J[ut],g=Math.floor(It.start/4),v=Math.ceil(It.count/4),C=g%M.width,x=Math.floor(g/M.width),L=v,k=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,C),i.pixelStorei(i.UNPACK_SKIP_ROWS,x),e.texSubImage2D(i.TEXTURE_2D,0,C,x,L,k,X,Q,M.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function it(P,M,X){let Q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=i.TEXTURE_3D);const at=$t(P,M),J=M.source;e.bindTexture(Q,P.__webglTexture,i.TEXTURE0+X);const Mt=n.get(J);if(J.version!==Mt.__version||at===!0){e.activeTexture(i.TEXTURE0+X);const ft=Qt.getPrimaries(Qt.workingColorSpace),wt=M.colorSpace===Sn?null:Qt.getPrimaries(M.colorSpace),Rt=M.colorSpace===Sn||ft===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let ut=T(M.image,!1,s.maxTextureSize);ut=Bt(M,ut);const xt=r.convert(M.format,M.colorSpace),It=r.convert(M.type);let g=p(M.internalFormat,xt,It,M.colorSpace,M.isVideoTexture);Ht(Q,M);let v;const C=M.mipmaps,x=M.isVideoTexture!==!0,L=Mt.__version===void 0||at===!0,k=J.dataReady,V=b(M,ut);if(M.isDepthTexture)g=E(M.format===Vi,M.type),L&&(x?e.texStorage2D(i.TEXTURE_2D,1,g,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,g,ut.width,ut.height,0,xt,It,null));else if(M.isDataTexture)if(C.length>0){x&&L&&e.texStorage2D(i.TEXTURE_2D,V,g,C[0].width,C[0].height);for(let B=0,z=C.length;B<z;B++)v=C[B],x?k&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,v.width,v.height,xt,It,v.data):e.texImage2D(i.TEXTURE_2D,B,g,v.width,v.height,0,xt,It,v.data);M.generateMipmaps=!1}else x?(L&&e.texStorage2D(i.TEXTURE_2D,V,g,ut.width,ut.height),k&&qt(M,ut,xt,It)):e.texImage2D(i.TEXTURE_2D,0,g,ut.width,ut.height,0,xt,It,ut.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){x&&L&&e.texStorage3D(i.TEXTURE_2D_ARRAY,V,g,C[0].width,C[0].height,ut.depth);for(let B=0,z=C.length;B<z;B++)if(v=C[B],M.format!==Ge)if(xt!==null)if(x){if(k)if(M.layerUpdates.size>0){const st=Ta(v.width,v.height,M.format,M.type);for(const et of M.layerUpdates){const vt=v.data.subarray(et*st/v.data.BYTES_PER_ELEMENT,(et+1)*st/v.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,et,v.width,v.height,1,xt,vt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,v.width,v.height,ut.depth,xt,v.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,g,v.width,v.height,ut.depth,0,v.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else x?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,v.width,v.height,ut.depth,xt,It,v.data):e.texImage3D(i.TEXTURE_2D_ARRAY,B,g,v.width,v.height,ut.depth,0,xt,It,v.data)}else{x&&L&&e.texStorage2D(i.TEXTURE_2D,V,g,C[0].width,C[0].height);for(let B=0,z=C.length;B<z;B++)v=C[B],M.format!==Ge?xt!==null?x?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,v.width,v.height,xt,v.data):e.compressedTexImage2D(i.TEXTURE_2D,B,g,v.width,v.height,0,v.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):x?k&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,v.width,v.height,xt,It,v.data):e.texImage2D(i.TEXTURE_2D,B,g,v.width,v.height,0,xt,It,v.data)}else if(M.isDataArrayTexture)if(x){if(L&&e.texStorage3D(i.TEXTURE_2D_ARRAY,V,g,ut.width,ut.height,ut.depth),k)if(M.layerUpdates.size>0){const B=Ta(ut.width,ut.height,M.format,M.type);for(const z of M.layerUpdates){const st=ut.data.subarray(z*B/ut.data.BYTES_PER_ELEMENT,(z+1)*B/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,z,ut.width,ut.height,1,xt,It,st)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,xt,It,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,g,ut.width,ut.height,ut.depth,0,xt,It,ut.data);else if(M.isData3DTexture)x?(L&&e.texStorage3D(i.TEXTURE_3D,V,g,ut.width,ut.height,ut.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,xt,It,ut.data)):e.texImage3D(i.TEXTURE_3D,0,g,ut.width,ut.height,ut.depth,0,xt,It,ut.data);else if(M.isFramebufferTexture){if(L)if(x)e.texStorage2D(i.TEXTURE_2D,V,g,ut.width,ut.height);else{let B=ut.width,z=ut.height;for(let st=0;st<V;st++)e.texImage2D(i.TEXTURE_2D,st,g,B,z,0,xt,It,null),B>>=1,z>>=1}}else if(C.length>0){if(x&&L){const B=Zt(C[0]);e.texStorage2D(i.TEXTURE_2D,V,g,B.width,B.height)}for(let B=0,z=C.length;B<z;B++)v=C[B],x?k&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,xt,It,v):e.texImage2D(i.TEXTURE_2D,B,g,xt,It,v);M.generateMipmaps=!1}else if(x){if(L){const B=Zt(ut);e.texStorage2D(i.TEXTURE_2D,V,g,B.width,B.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,It,ut)}else e.texImage2D(i.TEXTURE_2D,0,g,xt,It,ut);_(M)&&u(Q),Mt.__version=J.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ot(P,M,X){if(M.image.length!==6)return;const Q=$t(P,M),at=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);const J=n.get(at);if(at.version!==J.__version||Q===!0){e.activeTexture(i.TEXTURE0+X);const Mt=Qt.getPrimaries(Qt.workingColorSpace),ft=M.colorSpace===Sn?null:Qt.getPrimaries(M.colorSpace),wt=M.colorSpace===Sn||Mt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Rt=M.isCompressedTexture||M.image[0].isCompressedTexture,ut=M.image[0]&&M.image[0].isDataTexture,xt=[];for(let z=0;z<6;z++)!Rt&&!ut?xt[z]=T(M.image[z],!0,s.maxCubemapSize):xt[z]=ut?M.image[z].image:M.image[z],xt[z]=Bt(M,xt[z]);const It=xt[0],g=r.convert(M.format,M.colorSpace),v=r.convert(M.type),C=p(M.internalFormat,g,v,M.colorSpace),x=M.isVideoTexture!==!0,L=J.__version===void 0||Q===!0,k=at.dataReady;let V=b(M,It);Ht(i.TEXTURE_CUBE_MAP,M);let B;if(Rt){x&&L&&e.texStorage2D(i.TEXTURE_CUBE_MAP,V,C,It.width,It.height);for(let z=0;z<6;z++){B=xt[z].mipmaps;for(let st=0;st<B.length;st++){const et=B[st];M.format!==Ge?g!==null?x?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,st,0,0,et.width,et.height,g,et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,st,C,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):x?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,st,0,0,et.width,et.height,g,v,et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,st,C,et.width,et.height,0,g,v,et.data)}}}else{if(B=M.mipmaps,x&&L){B.length>0&&V++;const z=Zt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,V,C,z.width,z.height)}for(let z=0;z<6;z++)if(ut){x?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,xt[z].width,xt[z].height,g,v,xt[z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,C,xt[z].width,xt[z].height,0,g,v,xt[z].data);for(let st=0;st<B.length;st++){const vt=B[st].image[z].image;x?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,st+1,0,0,vt.width,vt.height,g,v,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,st+1,C,vt.width,vt.height,0,g,v,vt.data)}}else{x?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,g,v,xt[z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,C,g,v,xt[z]);for(let st=0;st<B.length;st++){const et=B[st];x?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,st+1,0,0,g,v,et.image[z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+z,st+1,C,g,v,et.image[z])}}}_(M)&&u(i.TEXTURE_CUBE_MAP),J.__version=at.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function yt(P,M,X,Q,at,J){const Mt=r.convert(X.format,X.colorSpace),ft=r.convert(X.type),wt=p(X.internalFormat,Mt,ft,X.colorSpace),Rt=n.get(M),ut=n.get(X);if(ut.__renderTarget=M,!Rt.__hasExternalTextures){const xt=Math.max(1,M.width>>J),It=Math.max(1,M.height>>J);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,J,wt,xt,It,M.depth,0,Mt,ft,null):e.texImage2D(at,J,wt,xt,It,0,Mt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),rt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,at,ut.__webglTexture,0,Xt(M)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,at,ut.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(P,M,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){const Q=M.depthTexture,at=Q&&Q.isDepthTexture?Q.type:null,J=E(M.stencilBuffer,at),Mt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=Xt(M);rt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,J,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,J,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,J,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,P)}else{const Q=M.textures;for(let at=0;at<Q.length;at++){const J=Q[at],Mt=r.convert(J.format,J.colorSpace),ft=r.convert(J.type),wt=p(J.internalFormat,Mt,ft,J.colorSpace),Rt=Xt(M);X&&rt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,wt,M.width,M.height):rt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,wt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,wt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),tt(M.depthTexture,0);const at=Q.__webglTexture,J=Xt(M);if(M.depthTexture.format===Hi)rt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(M.depthTexture.format===Vi)rt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Ot(P){const M=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const at=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",at)};Q.addEventListener("dispose",at),M.__depthDisposeCallback=at}M.__boundDepthTexture=Q}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const Q=P.texture.mipmaps;Q&&Q.length>0?Et(M.__webglFramebuffer[0],P):Et(M.__webglFramebuffer,P)}else if(X){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=i.createRenderbuffer(),Tt(M.__webglDepthbuffer[Q],P,!1);else{const at=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,J)}}else{const Q=P.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Tt(M.__webglDepthbuffer,P,!1);else{const at=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,J)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(P,M,X){const Q=n.get(P);M!==void 0&&yt(Q.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Ot(P)}function U(P){const M=P.texture,X=n.get(P),Q=n.get(M);P.addEventListener("dispose",I);const at=P.textures,J=P.isWebGLCubeRenderTarget===!0,Mt=at.length>1;if(Mt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=M.version,o.memory.textures++),J){X.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[ft]=[];for(let wt=0;wt<M.mipmaps.length;wt++)X.__webglFramebuffer[ft][wt]=i.createFramebuffer()}else X.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let ft=0;ft<M.mipmaps.length;ft++)X.__webglFramebuffer[ft]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ft=0,wt=at.length;ft<wt;ft++){const Rt=n.get(at[ft]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&rt(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ft=0;ft<at.length;ft++){const wt=at[ft];X.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ft]);const Rt=r.convert(wt.format,wt.colorSpace),ut=r.convert(wt.type),xt=p(wt.internalFormat,Rt,ut,wt.colorSpace,P.isXRRenderTarget===!0),It=Xt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,xt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,X.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Tt(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,M);for(let ft=0;ft<6;ft++)if(M.mipmaps&&M.mipmaps.length>0)for(let wt=0;wt<M.mipmaps.length;wt++)yt(X.__webglFramebuffer[ft][wt],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,wt);else yt(X.__webglFramebuffer[ft],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);_(M)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ft=0,wt=at.length;ft<wt;ft++){const Rt=at[ft],ut=n.get(Rt);let xt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,ut.__webglTexture),Ht(xt,Rt),yt(X.__webglFramebuffer,P,Rt,i.COLOR_ATTACHMENT0+ft,xt,0),_(Rt)&&u(xt)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Q.__webglTexture),Ht(ft,M),M.mipmaps&&M.mipmaps.length>0)for(let wt=0;wt<M.mipmaps.length;wt++)yt(X.__webglFramebuffer[wt],P,M,i.COLOR_ATTACHMENT0,ft,wt);else yt(X.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,ft,0);_(M)&&u(ft),e.unbindTexture()}P.depthBuffer&&Ot(P)}function nt(P){const M=P.textures;for(let X=0,Q=M.length;X<Q;X++){const at=M[X];if(_(at)){const J=w(P),Mt=n.get(at).__webglTexture;e.bindTexture(J,Mt),u(J),e.unbindTexture()}}}const pt=[],ht=[];function ct(P){if(P.samples>0){if(rt(P)===!1){const M=P.textures,X=P.width,Q=P.height;let at=i.COLOR_BUFFER_BIT;const J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(P),ft=M.length>1;if(ft)for(let Rt=0;Rt<M.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const wt=P.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Rt=0;Rt<M.length;Rt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Rt]);const ut=n.get(M[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,X,Q,0,0,X,Q,at,i.NEAREST),h===!0&&(pt.length=0,ht.length=0,pt.push(i.COLOR_ATTACHMENT0+Rt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(pt.push(J),ht.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Rt=0;Rt<M.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Rt]);const ut=n.get(M[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Xt(P){return Math.min(s.maxSamples,P.samples)}function rt(P){const M=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(P){const M=o.render.frame;d.get(P)!==M&&(d.set(P,M),P.update())}function Bt(P,M){const X=P.colorSpace,Q=P.format,at=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==gi&&X!==Sn&&(Qt.getTransfer(X)===ie?(Q!==Ge||at!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function Zt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=W,this.setTexture2D=tt,this.setTexture2DArray=Z,this.setTexture3D=lt,this.setTextureCube=$,this.rebindTextures=te,this.setupRenderTarget=U,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=rt}function nm(i,t){function e(n,s=Sn){let r;const o=Qt.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===il)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===el)return i.BYTE;if(n===nl)return i.SHORT;if(n===zi)return i.UNSIGNED_SHORT;if(n===po)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===Yi)return i.HALF_FLOAT;if(n===rl)return i.ALPHA;if(n===ol)return i.RGB;if(n===Ge)return i.RGBA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===go)return i.RED;if(n===xo)return i.RED_INTEGER;if(n===al)return i.RG;if(n===vo)return i.RG_INTEGER;if(n===Mo)return i.RGBA_INTEGER;if(n===Ss||n===Es||n===ys||n===Ts)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ss)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ss)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lr||n===Ir||n===Ur||n===Nr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ir)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ur)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fr||n===Or||n===Br)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fr||n===Or)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Br)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zr||n===kr||n===Hr||n===Vr||n===Gr||n===Wr||n===Xr||n===Yr||n===qr||n===jr||n===Zr||n===Kr||n===$r||n===Jr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$r)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qr||n===to||n===eo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qr)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===no||n===io||n===so||n===ro)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===no)return r.COMPRESSED_RED_RGTC1_EXT;if(n===io)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===so)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const im=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sm=`
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

}`;class rm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Sl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wn({vertexShader:im,fragmentShader:sm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class om extends Vn{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",h=1,l=null,d=null,c=null,f=null,m=null,S=null;const T=typeof XRWebGLBinding<"u",_=new rm,u={},w=e.getContextAttributes();let p=null,E=null;const b=[],D=[],I=new Nt;let O=null;const A=new Oe;A.viewport=new re;const y=new Oe;y.viewport=new re;const N=[A,y],W=new yh;let Y=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ot=b[it];return ot===void 0&&(ot=new ar,b[it]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(it){let ot=b[it];return ot===void 0&&(ot=new ar,b[it]=ot),ot.getGripSpace()},this.getHand=function(it){let ot=b[it];return ot===void 0&&(ot=new ar,b[it]=ot),ot.getHandSpace()};function tt(it){const ot=D.indexOf(it.inputSource);if(ot===-1)return;const yt=b[ot];yt!==void 0&&(yt.update(it.inputSource,it.frame,l||o),yt.dispatchEvent({type:it.type,data:it.inputSource}))}function Z(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",lt);for(let it=0;it<b.length;it++){const ot=D[it];ot!==null&&(D[it]=null,b[it].disconnect(ot))}Y=null,K=null,_.reset();for(const it in u)delete u[it];t.setRenderTarget(p),m=null,f=null,c=null,s=null,E=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(it){l=it},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return c===null&&T&&(c=new XRWebGLBinding(s,e)),c},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",lt),w.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Tt=null,Et=null;w.depth&&(Et=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=w.stencil?Vi:Hi,Tt=w.stencil?ki:kn);const Ot={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};c=this.getBinding(),f=c.createProjectionLayer(Ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Hn(f.textureWidth,f.textureHeight,{format:Ge,type:sn,depthTexture:new Ml(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const yt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Hn(m.framebufferWidth,m.framebufferHeight,{format:Ge,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function lt(it){for(let ot=0;ot<it.removed.length;ot++){const yt=it.removed[ot],Tt=D.indexOf(yt);Tt>=0&&(D[Tt]=null,b[Tt].disconnect(yt))}for(let ot=0;ot<it.added.length;ot++){const yt=it.added[ot];let Tt=D.indexOf(yt);if(Tt===-1){for(let Ot=0;Ot<b.length;Ot++)if(Ot>=D.length){D.push(yt),Tt=Ot;break}else if(D[Ot]===null){D[Ot]=yt,Tt=Ot;break}if(Tt===-1)break}const Et=b[Tt];Et&&Et.connect(yt)}}const $=new F,mt=new F;function _t(it,ot,yt){$.setFromMatrixPosition(ot.matrixWorld),mt.setFromMatrixPosition(yt.matrixWorld);const Tt=$.distanceTo(mt),Et=ot.projectionMatrix.elements,Ot=yt.projectionMatrix.elements,te=Et[14]/(Et[10]-1),U=Et[14]/(Et[10]+1),nt=(Et[9]+1)/Et[5],pt=(Et[9]-1)/Et[5],ht=(Et[8]-1)/Et[0],ct=(Ot[8]+1)/Ot[0],Xt=te*ht,rt=te*ct,At=Tt/(-ht+ct),Bt=At*-ht;if(ot.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Bt),it.translateZ(At),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Et[10]===-1)it.projectionMatrix.copy(ot.projectionMatrix),it.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Zt=te+At,P=U+At,M=Xt-Bt,X=rt+(Tt-Bt),Q=nt*U/P*Zt,at=pt*U/P*Zt;it.projectionMatrix.makePerspective(M,X,Q,at,Zt,P),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Pt(it,ot){ot===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ot.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let ot=it.near,yt=it.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),W.near=y.near=A.near=ot,W.far=y.far=A.far=yt,(Y!==W.near||K!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),Y=W.near,K=W.far),W.layers.mask=it.layers.mask|6,A.layers.mask=W.layers.mask&3,y.layers.mask=W.layers.mask&5;const Tt=it.parent,Et=W.cameras;Pt(W,Tt);for(let Ot=0;Ot<Et.length;Ot++)Pt(Et[Ot],Tt);Et.length===2?_t(W,A,y):W.projectionMatrix.copy(A.projectionMatrix),Ht(it,W,Tt)};function Ht(it,ot,yt){yt===null?it.matrix.copy(ot.matrixWorld):(it.matrix.copy(yt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ot.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ot.projectionMatrix),it.projectionMatrixInverse.copy(ot.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Gi*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(f===null&&m===null))return h},this.setFoveation=function(it){h=it,f!==null&&(f.fixedFoveation=it),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=it)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(W)},this.getCameraTexture=function(it){return u[it]};let $t=null;function Vt(it,ot){if(d=ot.getViewerPose(l||o),S=ot,d!==null){const yt=d.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let Tt=!1;yt.length!==W.cameras.length&&(W.cameras.length=0,Tt=!0);for(let U=0;U<yt.length;U++){const nt=yt[U];let pt=null;if(m!==null)pt=m.getViewport(nt);else{const ct=c.getViewSubImage(f,nt);pt=ct.viewport,U===0&&(t.setRenderTargetTextures(E,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(E))}let ht=N[U];ht===void 0&&(ht=new Oe,ht.layers.enable(U),ht.viewport=new re,N[U]=ht),ht.matrix.fromArray(nt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(nt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(pt.x,pt.y,pt.width,pt.height),U===0&&(W.matrix.copy(ht.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Tt===!0&&W.cameras.push(ht)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){c=n.getBinding();const U=c.getDepthInformation(yt[0]);U&&U.isValid&&U.texture&&_.init(U,s.renderState)}if(Et&&Et.includes("camera-access")&&T){t.state.unbindTexture(),c=n.getBinding();for(let U=0;U<yt.length;U++){const nt=yt[U].camera;if(nt){let pt=u[nt];pt||(pt=new Sl,u[nt]=pt);const ht=c.getCameraImage(nt);pt.sourceTexture=ht}}}}for(let yt=0;yt<b.length;yt++){const Tt=D[yt],Et=b[yt];Tt!==null&&Et!==void 0&&Et.update(Tt,ot,l||o)}$t&&$t(it,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),S=null}const qt=new Tl;qt.setAnimationLoop(Vt),this.setAnimationLoop=function(it){$t=it},this.dispose=function(){}}}const Un=new Xe,am=new oe;function lm(i,t){function e(_,u){_.matrixAutoUpdate===!0&&_.updateMatrix(),u.value.copy(_.matrix)}function n(_,u){u.color.getRGB(_.fogColor.value,pl(i)),u.isFog?(_.fogNear.value=u.near,_.fogFar.value=u.far):u.isFogExp2&&(_.fogDensity.value=u.density)}function s(_,u,w,p,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(_,u):u.isMeshToonMaterial?(r(_,u),c(_,u)):u.isMeshPhongMaterial?(r(_,u),d(_,u)):u.isMeshStandardMaterial?(r(_,u),f(_,u),u.isMeshPhysicalMaterial&&m(_,u,E)):u.isMeshMatcapMaterial?(r(_,u),S(_,u)):u.isMeshDepthMaterial?r(_,u):u.isMeshDistanceMaterial?(r(_,u),T(_,u)):u.isMeshNormalMaterial?r(_,u):u.isLineBasicMaterial?(o(_,u),u.isLineDashedMaterial&&a(_,u)):u.isPointsMaterial?h(_,u,w,p):u.isSpriteMaterial?l(_,u):u.isShadowMaterial?(_.color.value.copy(u.color),_.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(_,u){_.opacity.value=u.opacity,u.color&&_.diffuse.value.copy(u.color),u.emissive&&_.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(_.map.value=u.map,e(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,e(u.alphaMap,_.alphaMapTransform)),u.bumpMap&&(_.bumpMap.value=u.bumpMap,e(u.bumpMap,_.bumpMapTransform),_.bumpScale.value=u.bumpScale,u.side===we&&(_.bumpScale.value*=-1)),u.normalMap&&(_.normalMap.value=u.normalMap,e(u.normalMap,_.normalMapTransform),_.normalScale.value.copy(u.normalScale),u.side===we&&_.normalScale.value.negate()),u.displacementMap&&(_.displacementMap.value=u.displacementMap,e(u.displacementMap,_.displacementMapTransform),_.displacementScale.value=u.displacementScale,_.displacementBias.value=u.displacementBias),u.emissiveMap&&(_.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,_.emissiveMapTransform)),u.specularMap&&(_.specularMap.value=u.specularMap,e(u.specularMap,_.specularMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest);const w=t.get(u),p=w.envMap,E=w.envMapRotation;p&&(_.envMap.value=p,Un.copy(E),Un.x*=-1,Un.y*=-1,Un.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),_.envMapRotation.value.setFromMatrix4(am.makeRotationFromEuler(Un)),_.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=u.reflectivity,_.ior.value=u.ior,_.refractionRatio.value=u.refractionRatio),u.lightMap&&(_.lightMap.value=u.lightMap,_.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,_.lightMapTransform)),u.aoMap&&(_.aoMap.value=u.aoMap,_.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,_.aoMapTransform))}function o(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,u.map&&(_.map.value=u.map,e(u.map,_.mapTransform))}function a(_,u){_.dashSize.value=u.dashSize,_.totalSize.value=u.dashSize+u.gapSize,_.scale.value=u.scale}function h(_,u,w,p){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.size.value=u.size*w,_.scale.value=p*.5,u.map&&(_.map.value=u.map,e(u.map,_.uvTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,e(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function l(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.rotation.value=u.rotation,u.map&&(_.map.value=u.map,e(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,e(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function d(_,u){_.specular.value.copy(u.specular),_.shininess.value=Math.max(u.shininess,1e-4)}function c(_,u){u.gradientMap&&(_.gradientMap.value=u.gradientMap)}function f(_,u){_.metalness.value=u.metalness,u.metalnessMap&&(_.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,_.metalnessMapTransform)),_.roughness.value=u.roughness,u.roughnessMap&&(_.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,_.roughnessMapTransform)),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)}function m(_,u,w){_.ior.value=u.ior,u.sheen>0&&(_.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),_.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(_.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,_.sheenColorMapTransform)),u.sheenRoughnessMap&&(_.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,_.sheenRoughnessMapTransform))),u.clearcoat>0&&(_.clearcoat.value=u.clearcoat,_.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(_.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,_.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(_.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===we&&_.clearcoatNormalScale.value.negate())),u.dispersion>0&&(_.dispersion.value=u.dispersion),u.iridescence>0&&(_.iridescence.value=u.iridescence,_.iridescenceIOR.value=u.iridescenceIOR,_.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(_.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,_.iridescenceMapTransform)),u.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),u.transmission>0&&(_.transmission.value=u.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(_.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,_.transmissionMapTransform)),_.thickness.value=u.thickness,u.thicknessMap&&(_.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=u.attenuationDistance,_.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(_.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(_.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=u.specularIntensity,_.specularColor.value.copy(u.specularColor),u.specularColorMap&&(_.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,_.specularColorMapTransform)),u.specularIntensityMap&&(_.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,_.specularIntensityMapTransform))}function S(_,u){u.matcap&&(_.matcap.value=u.matcap)}function T(_,u){const w=t.get(u).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cm(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(w,p){const E=p.program;n.uniformBlockBinding(w,E)}function l(w,p){let E=s[w.id];E===void 0&&(S(w),E=d(w),s[w.id]=E,w.addEventListener("dispose",_));const b=p.program;n.updateUBOMapping(w,b);const D=t.render.frame;r[w.id]!==D&&(f(w),r[w.id]=D)}function d(w){const p=c();w.__bindingPointIndex=p;const E=i.createBuffer(),b=w.__size,D=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,b,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,p,E),E}function c(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const p=s[w.id],E=w.uniforms,b=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,p);for(let D=0,I=E.length;D<I;D++){const O=Array.isArray(E[D])?E[D]:[E[D]];for(let A=0,y=O.length;A<y;A++){const N=O[A];if(m(N,D,A,b)===!0){const W=N.__offset,Y=Array.isArray(N.value)?N.value:[N.value];let K=0;for(let tt=0;tt<Y.length;tt++){const Z=Y[tt],lt=T(Z);typeof Z=="number"||typeof Z=="boolean"?(N.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,W+K,N.__data)):Z.isMatrix3?(N.__data[0]=Z.elements[0],N.__data[1]=Z.elements[1],N.__data[2]=Z.elements[2],N.__data[3]=0,N.__data[4]=Z.elements[3],N.__data[5]=Z.elements[4],N.__data[6]=Z.elements[5],N.__data[7]=0,N.__data[8]=Z.elements[6],N.__data[9]=Z.elements[7],N.__data[10]=Z.elements[8],N.__data[11]=0):(Z.toArray(N.__data,K),K+=lt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,p,E,b){const D=w.value,I=p+"_"+E;if(b[I]===void 0)return typeof D=="number"||typeof D=="boolean"?b[I]=D:b[I]=D.clone(),!0;{const O=b[I];if(typeof D=="number"||typeof D=="boolean"){if(O!==D)return b[I]=D,!0}else if(O.equals(D)===!1)return O.copy(D),!0}return!1}function S(w){const p=w.uniforms;let E=0;const b=16;for(let I=0,O=p.length;I<O;I++){const A=Array.isArray(p[I])?p[I]:[p[I]];for(let y=0,N=A.length;y<N;y++){const W=A[y],Y=Array.isArray(W.value)?W.value:[W.value];for(let K=0,tt=Y.length;K<tt;K++){const Z=Y[K],lt=T(Z),$=E%b,mt=$%lt.boundary,_t=$+mt;E+=mt,_t!==0&&b-_t<lt.storage&&(E+=b-_t),W.__data=new Float32Array(lt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=lt.storage}}}const D=E%b;return D>0&&(E+=b-D),w.__size=E,w.__cache={},this}function T(w){const p={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(p.boundary=4,p.storage=4):w.isVector2?(p.boundary=8,p.storage=8):w.isVector3||w.isColor?(p.boundary=16,p.storage=12):w.isVector4?(p.boundary=16,p.storage=16):w.isMatrix3?(p.boundary=48,p.storage=48):w.isMatrix4?(p.boundary=64,p.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),p}function _(w){const p=w.target;p.removeEventListener("dispose",_);const E=o.indexOf(p.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[p.id]),delete s[p.id],delete r[p.id]}function u(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:h,update:l,dispose:u}}class hm{constructor(t={}){const{canvas:e=Bc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const S=new Uint32Array(4),T=new Int32Array(4);let _=null,u=null;const w=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let b=!1;this._outputColorSpace=De;let D=0,I=0,O=null,A=-1,y=null;const N=new re,W=new re;let Y=null;const K=new kt(0);let tt=0,Z=e.width,lt=e.height,$=1,mt=null,_t=null;const Pt=new re(0,0,Z,lt),Ht=new re(0,0,Z,lt);let $t=!1;const Vt=new wo;let qt=!1,it=!1;const ot=new oe,yt=new F,Tt=new re,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function te(){return O===null?$:1}let U=n;function nt(R,H){return e.getContext(R,H)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uo}`),e.addEventListener("webglcontextlost",k,!1),e.addEventListener("webglcontextrestored",V,!1),e.addEventListener("webglcontextcreationerror",B,!1),U===null){const H="webgl2";if(U=nt(H,R),U===null)throw nt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let pt,ht,ct,Xt,rt,At,Bt,Zt,P,M,X,Q,at,J,Mt,ft,wt,Rt,ut,xt,It,g,v,C;function x(){pt=new Mf(U),pt.init(),g=new nm(U,pt),ht=new ff(U,pt,t,g),ct=new tm(U,pt),ht.reversedDepthBuffer&&f&&ct.buffers.depth.setReversed(!0),Xt=new yf(U),rt=new Hp,At=new em(U,pt,ct,rt,ht,g,Xt),Bt=new mf(E),Zt=new vf(E),P=new Rh(U),v=new uf(U,P),M=new Sf(U,P,Xt,v),X=new bf(U,M,P,Xt),ut=new Tf(U,ht,At),ft=new pf(rt),Q=new kp(E,Bt,Zt,pt,ht,v,ft),at=new lm(E,rt),J=new Gp,Mt=new Zp(pt),Rt=new hf(E,Bt,Zt,ct,X,m,h),wt=new Jp(E,X,ht),C=new cm(U,Xt,ht,ct),xt=new df(U,pt,Xt),It=new Ef(U,pt,Xt),Xt.programs=Q.programs,E.capabilities=ht,E.extensions=pt,E.properties=rt,E.renderLists=J,E.shadowMap=wt,E.state=ct,E.info=Xt}x();const L=new om(E,U);this.xr=L,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=pt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=pt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(Z,lt,!1))},this.getSize=function(R){return R.set(Z,lt)},this.setSize=function(R,H,q=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=R,lt=H,e.width=Math.floor(R*$),e.height=Math.floor(H*$),q===!0&&(e.style.width=R+"px",e.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(Z*$,lt*$).floor()},this.setDrawingBufferSize=function(R,H,q){Z=R,lt=H,$=q,e.width=Math.floor(R*q),e.height=Math.floor(H*q),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(Pt)},this.setViewport=function(R,H,q,j){R.isVector4?Pt.set(R.x,R.y,R.z,R.w):Pt.set(R,H,q,j),ct.viewport(N.copy(Pt).multiplyScalar($).round())},this.getScissor=function(R){return R.copy(Ht)},this.setScissor=function(R,H,q,j){R.isVector4?Ht.set(R.x,R.y,R.z,R.w):Ht.set(R,H,q,j),ct.scissor(W.copy(Ht).multiplyScalar($).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(R){ct.setScissorTest($t=R)},this.setOpaqueSort=function(R){mt=R},this.setTransparentSort=function(R){_t=R},this.getClearColor=function(R){return R.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,q=!0){let j=0;if(R){let G=!1;if(O!==null){const dt=O.texture.format;G=dt===Mo||dt===vo||dt===xo}if(G){const dt=O.texture.type,St=dt===sn||dt===kn||dt===zi||dt===ki||dt===mo||dt===_o,Ct=Rt.getClearColor(),bt=Rt.getClearAlpha(),Ft=Ct.r,zt=Ct.g,Lt=Ct.b;St?(S[0]=Ft,S[1]=zt,S[2]=Lt,S[3]=bt,U.clearBufferuiv(U.COLOR,0,S)):(T[0]=Ft,T[1]=zt,T[2]=Lt,T[3]=bt,U.clearBufferiv(U.COLOR,0,T))}else j|=U.COLOR_BUFFER_BIT}H&&(j|=U.DEPTH_BUFFER_BIT),q&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",k,!1),e.removeEventListener("webglcontextrestored",V,!1),e.removeEventListener("webglcontextcreationerror",B,!1),Rt.dispose(),J.dispose(),Mt.dispose(),rt.dispose(),Bt.dispose(),Zt.dispose(),X.dispose(),v.dispose(),C.dispose(),Q.dispose(),L.dispose(),L.removeEventListener("sessionstart",le),L.removeEventListener("sessionend",fn),ye.stop()};function k(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=Xt.autoReset,H=wt.enabled,q=wt.autoUpdate,j=wt.needsUpdate,G=wt.type;x(),Xt.autoReset=R,wt.enabled=H,wt.autoUpdate=q,wt.needsUpdate=j,wt.type=G}function B(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function z(R){const H=R.target;H.removeEventListener("dispose",z),st(H)}function st(R){et(R),rt.remove(R)}function et(R){const H=rt.get(R).programs;H!==void 0&&(H.forEach(function(q){Q.releaseProgram(q)}),R.isShaderMaterial&&Q.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,q,j,G,dt){H===null&&(H=Et);const St=G.isMesh&&G.matrixWorld.determinant()<0,Ct=Dl(R,H,q,j,G);ct.setMaterial(j,St);let bt=q.index,Ft=1;if(j.wireframe===!0){if(bt=M.getWireframeAttribute(q),bt===void 0)return;Ft=2}const zt=q.drawRange,Lt=q.attributes.position;let jt=zt.start*Ft,ne=(zt.start+zt.count)*Ft;dt!==null&&(jt=Math.max(jt,dt.start*Ft),ne=Math.min(ne,(dt.start+dt.count)*Ft)),bt!==null?(jt=Math.max(jt,0),ne=Math.min(ne,bt.count)):Lt!=null&&(jt=Math.max(jt,0),ne=Math.min(ne,Lt.count));const de=ne-jt;if(de<0||de===1/0)return;v.setup(G,j,Ct,q,bt);let ce,ae=xt;if(bt!==null&&(ce=P.get(bt),ae=It,ae.setIndex(ce)),G.isMesh)j.wireframe===!0?(ct.setLineWidth(j.wireframeLinewidth*te()),ae.setMode(U.LINES)):ae.setMode(U.TRIANGLES);else if(G.isLine){let Ut=j.linewidth;Ut===void 0&&(Ut=1),ct.setLineWidth(Ut*te()),G.isLineSegments?ae.setMode(U.LINES):G.isLineLoop?ae.setMode(U.LINE_LOOP):ae.setMode(U.LINE_STRIP)}else G.isPoints?ae.setMode(U.POINTS):G.isSprite&&ae.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Wi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))ae.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ut=G._multiDrawStarts,he=G._multiDrawCounts,Jt=G._multiDrawCount,Ie=bt?P.get(bt).bytesPerElement:1,Xn=rt.get(j).currentProgram.getUniforms();for(let Ue=0;Ue<Jt;Ue++)Xn.setValue(U,"_gl_DrawID",Ue),ae.render(Ut[Ue]/Ie,he[Ue])}else if(G.isInstancedMesh)ae.renderInstances(jt,de,G.count);else if(q.isInstancedBufferGeometry){const Ut=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,he=Math.min(q.instanceCount,Ut);ae.renderInstances(jt,de,he)}else ae.render(jt,de)};function vt(R,H,q){R.transparent===!0&&R.side===Ze&&R.forceSinglePass===!1?(R.side=we,R.needsUpdate=!0,ji(R,H,q),R.side=bn,R.needsUpdate=!0,ji(R,H,q),R.side=Ze):ji(R,H,q)}this.compile=function(R,H,q=null){q===null&&(q=R),u=Mt.get(q),u.init(H),p.push(u),q.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(u.pushLight(G),G.castShadow&&u.pushShadow(G))}),R!==q&&R.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(u.pushLight(G),G.castShadow&&u.pushShadow(G))}),u.setupLights();const j=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const dt=G.material;if(dt)if(Array.isArray(dt))for(let St=0;St<dt.length;St++){const Ct=dt[St];vt(Ct,q,G),j.add(Ct)}else vt(dt,q,G),j.add(dt)}),u=p.pop(),j},this.compileAsync=function(R,H,q=null){const j=this.compile(R,H,q);return new Promise(G=>{function dt(){if(j.forEach(function(St){rt.get(St).currentProgram.isReady()&&j.delete(St)}),j.size===0){G(R);return}setTimeout(dt,10)}pt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Dt=null;function ee(R){Dt&&Dt(R)}function le(){ye.stop()}function fn(){ye.start()}const ye=new Tl;ye.setAnimationLoop(ee),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(R){Dt=R,L.setAnimationLoop(R),R===null?ye.stop():ye.start()},L.addEventListener("sessionstart",le),L.addEventListener("sessionend",fn),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(H),H=L.getCamera()),R.isScene===!0&&R.onBeforeRender(E,R,H,O),u=Mt.get(R,p.length),u.init(H),p.push(u),ot.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Vt.setFromProjectionMatrix(ot,nn,H.reversedDepth),it=this.localClippingEnabled,qt=ft.init(this.clippingPlanes,it),_=J.get(R,w.length),_.init(),w.push(_),L.enabled===!0&&L.isPresenting===!0){const dt=E.xr.getDepthSensingMesh();dt!==null&&bi(dt,H,-1/0,E.sortObjects)}bi(R,H,0,E.sortObjects),_.finish(),E.sortObjects===!0&&_.sort(mt,_t),Ot=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,Ot&&Rt.addToRenderList(_,R),this.info.render.frame++,qt===!0&&ft.beginShadows();const q=u.state.shadowsArray;wt.render(q,R,H),qt===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=_.opaque,G=_.transmissive;if(u.setupLights(),H.isArrayCamera){const dt=H.cameras;if(G.length>0)for(let St=0,Ct=dt.length;St<Ct;St++){const bt=dt[St];Fo(j,G,R,bt)}Ot&&Rt.render(R);for(let St=0,Ct=dt.length;St<Ct;St++){const bt=dt[St];No(_,R,bt,bt.viewport)}}else G.length>0&&Fo(j,G,R,H),Ot&&Rt.render(R),No(_,R,H);O!==null&&I===0&&(At.updateMultisampleRenderTarget(O),At.updateRenderTargetMipmap(O)),R.isScene===!0&&R.onAfterRender(E,R,H),v.resetDefaultState(),A=-1,y=null,p.pop(),p.length>0?(u=p[p.length-1],qt===!0&&ft.setGlobalState(E.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?_=w[w.length-1]:_=null};function bi(R,H,q,j){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)u.pushLight(R),R.castShadow&&u.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){j&&Tt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ot);const St=X.update(R),Ct=R.material;Ct.visible&&_.push(R,St,Ct,q,Tt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const St=X.update(R),Ct=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Tt.copy(R.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Tt.copy(St.boundingSphere.center)),Tt.applyMatrix4(R.matrixWorld).applyMatrix4(ot)),Array.isArray(Ct)){const bt=St.groups;for(let Ft=0,zt=bt.length;Ft<zt;Ft++){const Lt=bt[Ft],jt=Ct[Lt.materialIndex];jt&&jt.visible&&_.push(R,St,jt,q,Tt.z,Lt)}}else Ct.visible&&_.push(R,St,Ct,q,Tt.z,null)}}const dt=R.children;for(let St=0,Ct=dt.length;St<Ct;St++)bi(dt[St],H,q,j)}function No(R,H,q,j){const G=R.opaque,dt=R.transmissive,St=R.transparent;u.setupLightsView(q),qt===!0&&ft.setGlobalState(E.clippingPlanes,q),j&&ct.viewport(N.copy(j)),G.length>0&&qi(G,H,q),dt.length>0&&qi(dt,H,q),St.length>0&&qi(St,H,q),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function Fo(R,H,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[j.id]===void 0&&(u.state.transmissionRenderTarget[j.id]=new Hn(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Yi:sn,minFilter:zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const dt=u.state.transmissionRenderTarget[j.id],St=j.viewport||N;dt.setSize(St.z*E.transmissionResolutionScale,St.w*E.transmissionResolutionScale);const Ct=E.getRenderTarget(),bt=E.getActiveCubeFace(),Ft=E.getActiveMipmapLevel();E.setRenderTarget(dt),E.getClearColor(K),tt=E.getClearAlpha(),tt<1&&E.setClearColor(16777215,.5),E.clear(),Ot&&Rt.render(q);const zt=E.toneMapping;E.toneMapping=Tn;const Lt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),u.setupLightsView(j),qt===!0&&ft.setGlobalState(E.clippingPlanes,j),qi(R,q,j),At.updateMultisampleRenderTarget(dt),At.updateRenderTargetMipmap(dt),pt.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let ne=0,de=H.length;ne<de;ne++){const ce=H[ne],ae=ce.object,Ut=ce.geometry,he=ce.material,Jt=ce.group;if(he.side===Ze&&ae.layers.test(j.layers)){const Ie=he.side;he.side=we,he.needsUpdate=!0,Oo(ae,q,j,Ut,he,Jt),he.side=Ie,he.needsUpdate=!0,jt=!0}}jt===!0&&(At.updateMultisampleRenderTarget(dt),At.updateRenderTargetMipmap(dt))}E.setRenderTarget(Ct,bt,Ft),E.setClearColor(K,tt),Lt!==void 0&&(j.viewport=Lt),E.toneMapping=zt}function qi(R,H,q){const j=H.isScene===!0?H.overrideMaterial:null;for(let G=0,dt=R.length;G<dt;G++){const St=R[G],Ct=St.object,bt=St.geometry,Ft=St.group;let zt=St.material;zt.allowOverride===!0&&j!==null&&(zt=j),Ct.layers.test(q.layers)&&Oo(Ct,H,q,bt,zt,Ft)}}function Oo(R,H,q,j,G,dt){R.onBeforeRender(E,H,q,j,G,dt),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(E,H,q,j,R,dt),G.transparent===!0&&G.side===Ze&&G.forceSinglePass===!1?(G.side=we,G.needsUpdate=!0,E.renderBufferDirect(q,H,j,G,R,dt),G.side=bn,G.needsUpdate=!0,E.renderBufferDirect(q,H,j,G,R,dt),G.side=Ze):E.renderBufferDirect(q,H,j,G,R,dt),R.onAfterRender(E,H,q,j,G,dt)}function ji(R,H,q){H.isScene!==!0&&(H=Et);const j=rt.get(R),G=u.state.lights,dt=u.state.shadowsArray,St=G.state.version,Ct=Q.getParameters(R,G.state,dt,H,q),bt=Q.getProgramCacheKey(Ct);let Ft=j.programs;j.environment=R.isMeshStandardMaterial?H.environment:null,j.fog=H.fog,j.envMap=(R.isMeshStandardMaterial?Zt:Bt).get(R.envMap||j.environment),j.envMapRotation=j.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Ft===void 0&&(R.addEventListener("dispose",z),Ft=new Map,j.programs=Ft);let zt=Ft.get(bt);if(zt!==void 0){if(j.currentProgram===zt&&j.lightsStateVersion===St)return zo(R,Ct),zt}else Ct.uniforms=Q.getUniforms(R),R.onBeforeCompile(Ct,E),zt=Q.acquireProgram(Ct,bt),Ft.set(bt,zt),j.uniforms=Ct.uniforms;const Lt=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Lt.clippingPlanes=ft.uniform),zo(R,Ct),j.needsLights=Il(R),j.lightsStateVersion=St,j.needsLights&&(Lt.ambientLightColor.value=G.state.ambient,Lt.lightProbe.value=G.state.probe,Lt.directionalLights.value=G.state.directional,Lt.directionalLightShadows.value=G.state.directionalShadow,Lt.spotLights.value=G.state.spot,Lt.spotLightShadows.value=G.state.spotShadow,Lt.rectAreaLights.value=G.state.rectArea,Lt.ltc_1.value=G.state.rectAreaLTC1,Lt.ltc_2.value=G.state.rectAreaLTC2,Lt.pointLights.value=G.state.point,Lt.pointLightShadows.value=G.state.pointShadow,Lt.hemisphereLights.value=G.state.hemi,Lt.directionalShadowMap.value=G.state.directionalShadowMap,Lt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Lt.spotShadowMap.value=G.state.spotShadowMap,Lt.spotLightMatrix.value=G.state.spotLightMatrix,Lt.spotLightMap.value=G.state.spotLightMap,Lt.pointShadowMap.value=G.state.pointShadowMap,Lt.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=zt,j.uniformsList=null,zt}function Bo(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=bs.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function zo(R,H){const q=rt.get(R);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function Dl(R,H,q,j,G){H.isScene!==!0&&(H=Et),At.resetTextureUnits();const dt=H.fog,St=j.isMeshStandardMaterial?H.environment:null,Ct=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:gi,bt=(j.isMeshStandardMaterial?Zt:Bt).get(j.envMap||St),Ft=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,zt=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Lt=!!q.morphAttributes.position,jt=!!q.morphAttributes.normal,ne=!!q.morphAttributes.color;let de=Tn;j.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(de=E.toneMapping);const ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ae=ce!==void 0?ce.length:0,Ut=rt.get(j),he=u.state.lights;if(qt===!0&&(it===!0||R!==y)){const Te=R===y&&j.id===A;ft.setState(j,R,Te)}let Jt=!1;j.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==he.state.version||Ut.outputColorSpace!==Ct||G.isBatchedMesh&&Ut.batching===!1||!G.isBatchedMesh&&Ut.batching===!0||G.isBatchedMesh&&Ut.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ut.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ut.instancing===!1||!G.isInstancedMesh&&Ut.instancing===!0||G.isSkinnedMesh&&Ut.skinning===!1||!G.isSkinnedMesh&&Ut.skinning===!0||G.isInstancedMesh&&Ut.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ut.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ut.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ut.instancingMorph===!1&&G.morphTexture!==null||Ut.envMap!==bt||j.fog===!0&&Ut.fog!==dt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ft.numPlanes||Ut.numIntersection!==ft.numIntersection)||Ut.vertexAlphas!==Ft||Ut.vertexTangents!==zt||Ut.morphTargets!==Lt||Ut.morphNormals!==jt||Ut.morphColors!==ne||Ut.toneMapping!==de||Ut.morphTargetsCount!==ae)&&(Jt=!0):(Jt=!0,Ut.__version=j.version);let Ie=Ut.currentProgram;Jt===!0&&(Ie=ji(j,H,G));let Xn=!1,Ue=!1,Ai=!1;const ue=Ie.getUniforms(),ke=Ut.uniforms;if(ct.useProgram(Ie.program)&&(Xn=!0,Ue=!0,Ai=!0),j.id!==A&&(A=j.id,Ue=!0),Xn||y!==R){ct.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ue.setValue(U,"projectionMatrix",R.projectionMatrix),ue.setValue(U,"viewMatrix",R.matrixWorldInverse);const Ce=ue.map.cameraPosition;Ce!==void 0&&Ce.setValue(U,yt.setFromMatrixPosition(R.matrixWorld)),ht.logarithmicDepthBuffer&&ue.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ue.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,Ue=!0,Ai=!0)}if(G.isSkinnedMesh){ue.setOptional(U,G,"bindMatrix"),ue.setOptional(U,G,"bindMatrixInverse");const Te=G.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),ue.setValue(U,"boneTexture",Te.boneTexture,At))}G.isBatchedMesh&&(ue.setOptional(U,G,"batchingTexture"),ue.setValue(U,"batchingTexture",G._matricesTexture,At),ue.setOptional(U,G,"batchingIdTexture"),ue.setValue(U,"batchingIdTexture",G._indirectTexture,At),ue.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&ue.setValue(U,"batchingColorTexture",G._colorsTexture,At));const He=q.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&ut.update(G,q,Ie),(Ue||Ut.receiveShadow!==G.receiveShadow)&&(Ut.receiveShadow=G.receiveShadow,ue.setValue(U,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(ke.envMap.value=bt,ke.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&H.environment!==null&&(ke.envMapIntensity.value=H.environmentIntensity),Ue&&(ue.setValue(U,"toneMappingExposure",E.toneMappingExposure),Ut.needsLights&&Ll(ke,Ai),dt&&j.fog===!0&&at.refreshFogUniforms(ke,dt),at.refreshMaterialUniforms(ke,j,$,lt,u.state.transmissionRenderTarget[R.id]),bs.upload(U,Bo(Ut),ke,At)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(bs.upload(U,Bo(Ut),ke,At),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ue.setValue(U,"center",G.center),ue.setValue(U,"modelViewMatrix",G.modelViewMatrix),ue.setValue(U,"normalMatrix",G.normalMatrix),ue.setValue(U,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Te=j.uniformsGroups;for(let Ce=0,zs=Te.length;Ce<zs;Ce++){const Rn=Te[Ce];C.update(Rn,Ie),C.bind(Rn,Ie)}}return Ie}function Ll(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function Il(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,H,q){const j=rt.get(R);j.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),rt.get(R.texture).__webglTexture=H,rt.get(R.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){const q=rt.get(R);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const Ul=U.createFramebuffer();this.setRenderTarget=function(R,H=0,q=0){O=R,D=H,I=q;let j=!0,G=null,dt=!1,St=!1;if(R){const bt=rt.get(R);if(bt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(U.FRAMEBUFFER,null),j=!1;else if(bt.__webglFramebuffer===void 0)At.setupRenderTarget(R);else if(bt.__hasExternalTextures)At.rebindTextures(R,rt.get(R.texture).__webglTexture,rt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Lt=R.depthTexture;if(bt.__boundDepthTexture!==Lt){if(Lt!==null&&rt.has(Lt)&&(R.width!==Lt.image.width||R.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");At.setupDepthRenderbuffer(R)}}const Ft=R.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(St=!0);const zt=rt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(zt[H])?G=zt[H][q]:G=zt[H],dt=!0):R.samples>0&&At.useMultisampledRTT(R)===!1?G=rt.get(R).__webglMultisampledFramebuffer:Array.isArray(zt)?G=zt[q]:G=zt,N.copy(R.viewport),W.copy(R.scissor),Y=R.scissorTest}else N.copy(Pt).multiplyScalar($).floor(),W.copy(Ht).multiplyScalar($).floor(),Y=$t;if(q!==0&&(G=Ul),ct.bindFramebuffer(U.FRAMEBUFFER,G)&&j&&ct.drawBuffers(R,G),ct.viewport(N),ct.scissor(W),ct.setScissorTest(Y),dt){const bt=rt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,bt.__webglTexture,q)}else if(St){const bt=H;for(let Ft=0;Ft<R.textures.length;Ft++){const zt=rt.get(R.textures[Ft]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ft,zt.__webglTexture,q,bt)}}else if(R!==null&&q!==0){const bt=rt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bt.__webglTexture,q)}A=-1},this.readRenderTargetPixels=function(R,H,q,j,G,dt,St,Ct=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&St!==void 0&&(bt=bt[St]),bt){ct.bindFramebuffer(U.FRAMEBUFFER,bt);try{const Ft=R.textures[Ct],zt=Ft.format,Lt=Ft.type;if(!ht.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-j&&q>=0&&q<=R.height-G&&(R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ct),U.readPixels(H,q,j,G,g.convert(zt),g.convert(Lt),dt))}finally{const Ft=O!==null?rt.get(O).__webglFramebuffer:null;ct.bindFramebuffer(U.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(R,H,q,j,G,dt,St,Ct=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&St!==void 0&&(bt=bt[St]),bt)if(H>=0&&H<=R.width-j&&q>=0&&q<=R.height-G){ct.bindFramebuffer(U.FRAMEBUFFER,bt);const Ft=R.textures[Ct],zt=Ft.format,Lt=Ft.type;if(!ht.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,jt),U.bufferData(U.PIXEL_PACK_BUFFER,dt.byteLength,U.STREAM_READ),R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ct),U.readPixels(H,q,j,G,g.convert(zt),g.convert(Lt),0);const ne=O!==null?rt.get(O).__webglFramebuffer:null;ct.bindFramebuffer(U.FRAMEBUFFER,ne);const de=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await zc(U,de,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,jt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,dt),U.deleteBuffer(jt),U.deleteSync(de),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,q=0){const j=Math.pow(2,-q),G=Math.floor(R.image.width*j),dt=Math.floor(R.image.height*j),St=H!==null?H.x:0,Ct=H!==null?H.y:0;At.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,St,Ct,G,dt),ct.unbindTexture()};const Nl=U.createFramebuffer(),Fl=U.createFramebuffer();this.copyTextureToTexture=function(R,H,q=null,j=null,G=0,dt=null){dt===null&&(G!==0?(Wi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dt=G,G=0):dt=0);let St,Ct,bt,Ft,zt,Lt,jt,ne,de;const ce=R.isCompressedTexture?R.mipmaps[dt]:R.image;if(q!==null)St=q.max.x-q.min.x,Ct=q.max.y-q.min.y,bt=q.isBox3?q.max.z-q.min.z:1,Ft=q.min.x,zt=q.min.y,Lt=q.isBox3?q.min.z:0;else{const He=Math.pow(2,-G);St=Math.floor(ce.width*He),Ct=Math.floor(ce.height*He),R.isDataArrayTexture?bt=ce.depth:R.isData3DTexture?bt=Math.floor(ce.depth*He):bt=1,Ft=0,zt=0,Lt=0}j!==null?(jt=j.x,ne=j.y,de=j.z):(jt=0,ne=0,de=0);const ae=g.convert(H.format),Ut=g.convert(H.type);let he;H.isData3DTexture?(At.setTexture3D(H,0),he=U.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(At.setTexture2DArray(H,0),he=U.TEXTURE_2D_ARRAY):(At.setTexture2D(H,0),he=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const Jt=U.getParameter(U.UNPACK_ROW_LENGTH),Ie=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Xn=U.getParameter(U.UNPACK_SKIP_PIXELS),Ue=U.getParameter(U.UNPACK_SKIP_ROWS),Ai=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ce.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ce.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ft),U.pixelStorei(U.UNPACK_SKIP_ROWS,zt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Lt);const ue=R.isDataArrayTexture||R.isData3DTexture,ke=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){const He=rt.get(R),Te=rt.get(H),Ce=rt.get(He.__renderTarget),zs=rt.get(Te.__renderTarget);ct.bindFramebuffer(U.READ_FRAMEBUFFER,Ce.__webglFramebuffer),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,zs.__webglFramebuffer);for(let Rn=0;Rn<bt;Rn++)ue&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,rt.get(R).__webglTexture,G,Lt+Rn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,rt.get(H).__webglTexture,dt,de+Rn)),U.blitFramebuffer(Ft,zt,St,Ct,jt,ne,St,Ct,U.DEPTH_BUFFER_BIT,U.NEAREST);ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||R.isRenderTargetTexture||rt.has(R)){const He=rt.get(R),Te=rt.get(H);ct.bindFramebuffer(U.READ_FRAMEBUFFER,Nl),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,Fl);for(let Ce=0;Ce<bt;Ce++)ue?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,He.__webglTexture,G,Lt+Ce):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,He.__webglTexture,G),ke?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.__webglTexture,dt,de+Ce):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Te.__webglTexture,dt),G!==0?U.blitFramebuffer(Ft,zt,St,Ct,jt,ne,St,Ct,U.COLOR_BUFFER_BIT,U.NEAREST):ke?U.copyTexSubImage3D(he,dt,jt,ne,de+Ce,Ft,zt,St,Ct):U.copyTexSubImage2D(he,dt,jt,ne,Ft,zt,St,Ct);ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ke?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(he,dt,jt,ne,de,St,Ct,bt,ae,Ut,ce.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(he,dt,jt,ne,de,St,Ct,bt,ae,ce.data):U.texSubImage3D(he,dt,jt,ne,de,St,Ct,bt,ae,Ut,ce):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,dt,jt,ne,St,Ct,ae,Ut,ce.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,dt,jt,ne,ce.width,ce.height,ae,ce.data):U.texSubImage2D(U.TEXTURE_2D,dt,jt,ne,St,Ct,ae,Ut,ce);U.pixelStorei(U.UNPACK_ROW_LENGTH,Jt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ie),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Xn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ue),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ai),dt===0&&H.generateMipmaps&&U.generateMipmap(he),ct.unbindTexture()},this.initRenderTarget=function(R){rt.get(R).__webglFramebuffer===void 0&&At.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?At.setTextureCube(R,0):R.isData3DTexture?At.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?At.setTexture2DArray(R,0):At.setTexture2D(R,0),ct.unbindTexture()},this.resetState=function(){D=0,I=0,O=null,ct.reset(),v.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const ja={type:"change"},Uo={type:"start"},Cl={type:"end"},vs=new Fs,Za=new Mn,um=Math.cos(70*Be.DEG2RAD),me=new F,Pe=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xr=1e-6;class dm extends Ah{constructor(t,e=null){super(t,e),this.state=se.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:En.ROTATE,TWO:En.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new An,this._lastTargetPosition=new F,this._quat=new An().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ao,this._sphericalDelta=new ao,this._scale=1,this._panOffset=new F,this._rotateStart=new Nt,this._rotateEnd=new Nt,this._rotateDelta=new Nt,this._panStart=new Nt,this._panEnd=new Nt,this._panDelta=new Nt,this._dollyStart=new Nt,this._dollyEnd=new Nt,this._dollyDelta=new Nt,this._dollyDirection=new F,this._mouse=new Nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pm.bind(this),this._onPointerDown=fm.bind(this),this._onPointerUp=mm.bind(this),this._onContextMenu=Em.bind(this),this._onMouseWheel=xm.bind(this),this._onKeyDown=vm.bind(this),this._onTouchStart=Mm.bind(this),this._onTouchMove=Sm.bind(this),this._onMouseDown=_m.bind(this),this._onMouseMove=gm.bind(this),this._interceptControlDown=ym.bind(this),this._interceptControlUp=Tm.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ja),this.update(),this.state=se.NONE}update(t=null){const e=this.object.position;me.copy(e).sub(this.target),me.applyQuaternion(this._quat),this._spherical.setFromVector3(me),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Pe:n>Math.PI&&(n-=Pe),s<-Math.PI?s+=Pe:s>Math.PI&&(s-=Pe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(me.setFromSpherical(this._spherical),me.applyQuaternion(this._quatInverse),e.copy(this.target).add(me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=me.length();o=this._clampDistance(a*this._scale);const h=a-o;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),r=!!h}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=h!==this.object.zoom;const l=new F(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(vs.origin.copy(this.object.position),vs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vs.direction))<um?this.object.lookAt(this.target):(Za.setFromNormalAndCoplanarPoint(this.object.up,this.target),vs.intersectPlane(Za,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>xr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xr||this._lastTargetPosition.distanceToSquared(this.target)>xr?(this.dispatchEvent(ja),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pe/60*this.autoRotateSpeed*t:Pe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){me.setFromMatrixColumn(e,0),me.multiplyScalar(-t),this._panOffset.add(me)}_panUp(t,e){this.screenSpacePanning===!0?me.setFromMatrixColumn(e,1):(me.setFromMatrixColumn(e,0),me.crossVectors(this.object.up,me)),me.multiplyScalar(t),this._panOffset.add(me)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;me.copy(s).sub(this.target);let r=me.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Pe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function fm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function pm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function mm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cl),this.state=se.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function _m(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=se.DOLLY;break;case ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}break;case ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Uo)}function gm(i){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function xm(i){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(i.preventDefault(),this.dispatchEvent(Uo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Cl))}function vm(i){this.enabled!==!1&&this._handleKeyDown(i)}function Mm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case En.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=se.TOUCH_ROTATE;break;case En.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case En.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=se.TOUCH_DOLLY_PAN;break;case En.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Uo)}function Sm(i){switch(this._trackPointer(i),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=se.NONE}}function Em(i){this.enabled!==!1&&i.preventDefault()}function ym(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Tm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class bm extends gl{constructor(){super();const t=new Wn;t.deleteAttribute("uv");const e=new Mi({side:we}),n=new Mi,s=new Mh(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new fe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Ao(t,n,6),a=new _e;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const h=new fe(t,ai(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const l=new fe(t,ai(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const d=new fe(t,ai(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);const c=new fe(t,ai(43));c.position.set(-.462,8.89,14.52),c.scale.set(4.38,5.441,.088),this.add(c);const f=new fe(t,ai(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const m=new fe(t,ai(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function ai(i){return new mh({color:0,emissive:16777215,emissiveIntensity:i})}const vr=[{id:"main-building",key:"west-hall",x:-39,z:-5,w:34,d:12,y:6,h:7.4,roof:"gable-x"},{id:"main-building",key:"west-gable",x:-53,z:-2,w:9,d:19,y:6,h:6.3,roof:"gable-z"},{id:"main-building",key:"rear-gable",x:-42,z:-15,w:13,d:22,y:6,h:7.4,roof:"gable-z"},{id:"learning-wing",key:"rear-gallery",x:-2,z:-20,w:56,d:10,y:6,h:7.4,roof:"gable-x",gallery:!0},{id:"tech-lab",key:"technology",x:30,z:-3,w:28,d:22,y:6,h:6.7,roof:"hip",glass:!0},{id:"dining-a",key:"lakeside-dining",x:-40,z:31,w:24,d:15,y:2,h:4.7,roof:"gable-x",dining:!0},{id:"dining-b",key:"garden-dining",x:-6,z:48,w:25,d:16,y:0,h:5,roof:"hip",dining:!0},{id:"workshop",key:"workshop",x:32,z:44,w:15,d:11,y:0,h:4.6,roof:"gable-x"},{id:"residence",key:"residence",x:69,z:-40,w:37,d:11,y:8,h:7,roof:"gable-x",gallery:!0},{id:"library",key:"mountain-library",x:66,z:-67,w:33,d:10,y:24,h:4.9,roof:"planted",glass:!0}],Us={"main-building":{point:[-28,32,-3],focus:[-35,15,-3],radius:38},"learning-wing":{point:[-1,17,-19],focus:[-2,10,-17],radius:34},courtyard:{point:[-6,20,8],focus:[-6,9,8],radius:28},"tech-lab":{point:[30,19,-3],focus:[30,9,0],radius:31},"dining-a":{point:[-40,10,31],focus:[-40,4,34],radius:28},"dining-b":{point:[-6,9,48],focus:[-6,3,50],radius:28},workshop:{point:[32,8,44],focus:[40,3,45],radius:29},"football-field":{point:[87.1,3,13],focus:[87.1,3,10],radius:43},residence:{point:[69,19,-40],focus:[69,11,-38],radius:34},library:{point:[66,31,-66],focus:[66,26,-63],radius:32},"ideas-garden":{point:[20,3,67],focus:[20,1,65],radius:27}},Bi={"gaming-zone":"tech-lab","quiet-room":"learning-wing"},Pl=i=>Us[Bi[i]||i],ho={"main-building":[[-23,6.2,4],[-23,6.2,10]],courtyard:[[-23,6.2,4],[-23,6.2,10],[-18,6.2,16],[-9,6.2,20]],"learning-wing":[[-23,6.2,4],[-23,6.2,10],[-20,6.2,-8],[-3,6.2,-12]],"tech-lab":[[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[7,6.2,20],[17,6.2,11],[24,6.2,10]],"dining-a":[[-23,6.2,4],[-23,6.2,10],[-25,6.2,18],[-26,2.2,25],[-28,2.2,38]],"dining-b":[[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[-20,2.2,28],[-21,2.2,38],[-21,.2,48]],workshop:[[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[7,6.2,20],[14,.2,32],[22,.2,49],[27,.2,51]],"football-field":[[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[7,6.2,20],[18,2.2,24],[48,2.2,24],[64.9,2.2,15]],residence:[[-23,6.2,4],[-23,6.2,10],[-20,6.2,-8],[8,6.2,-12],[12,6.2,-29],[45,8.2,-29],[69,8.2,-32]],library:[[-23,6.2,4],[-23,6.2,10],[-20,6.2,-8],[8,6.2,-12],[12,6.2,-29],[36,8.2,-29],[40,13,-44],[51,18,-48],[49,24.2,-58],[58,24.2,-60]],"ideas-garden":[[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[7,6.2,20],[14,.2,32],[22,.2,49],[20,.2,66]]},Am=i=>ho[Bi[i]||i]||[],Je={x:-6,z:8},Ms={x:87.1,z:11,y:2.12,w:43,d:64,yaw:0};function hn(i,t){const e=(h,l,d)=>{const c=Math.max(0,Math.min(1,(d-h)/(l-h)));return c*c*(3-2*c)},n=6*e(-48,-30,t)*(1-e(17,33,t))*(1-e(42,53,i))*e(-69,-60,i),s=-50+5*Math.sin(i*.06)+3*Math.sin(i*.14),r=-4*(1-e(s-12,s+10,t)),o=44*Math.exp(-(((i-94)/46)**2)-((t+91)/48)**2)*e(25,48,i)*(1-e(-29,-23,t));let a=Math.max(n,o)+r-.6;return i>14&&i<48&&t>8&&t<28&&(a=Math.min(a,1)),i>48&&i<85&&t>-73&&t<-57&&(a=Math.min(a,23.65)),a}function wm({width:i,depth:t,height:e,seed:n}){const s=new yi(i,t,260,38);s.rotateX(-Math.PI/2);const r=s.attributes.position,o=[],a=new kt("#667f8b"),h=new kt("#38574f"),l=new kt("#e6edf0"),d=Array.from({length:19},(c,f)=>({x:-i/2+f*i/18,w:38+22*(1+Math.sin(f*3.7+n)),h:.48+.5*(.5+.5*Math.sin(f*2.31+n))}));for(let c=0;c<r.count;c++){const f=r.getX(c),m=r.getZ(c),S=Math.sin(f*.018+n)*13,T=Math.max(...d.map(D=>Math.max(0,1-Math.abs(f-D.x)/D.w)*D.h)),_=Math.max(0,1-Math.abs((m-S)/(t*.6))),u=(Math.abs(Math.sin(f*.087+m*.065+n))-.5)*.12*_,w=Math.max(0,T*_+u),p=w*e-3;r.setY(c,p);const E=h.clone().lerp(a,Be.smoothstep(w,.14,.48)),b=.57+Math.sin(f*.12+m*.08)*.07;E.lerp(l,Be.smoothstep(w,b,b+.09)),o.push(...E.toArray())}return s.setAttribute("color",new Kt(o,3)),s.computeVertexNormals(),new fe(s,new Mi({vertexColors:!0,roughness:1}))}function Ka(i,t=()=>!1){i.updateMatrixWorld(!0);const e=new Map;i.traverse(n=>{if(!n.isMesh||n.isInstancedMesh||n.material.transparent||Array.isArray(n.material)||t(n))return;const s=[n.geometry.uuid,n.material.uuid,n.castShadow,n.receiveShadow,n.customDepthMaterial?.uuid].join(":");e.has(s)||e.set(s,[]),e.get(s).push(n)});for(const n of e.values()){if(n.length<4)continue;const s=n[0],r=new Ao(s.geometry,s.material,n.length);r.castShadow=s.castShadow,r.receiveShadow=s.receiveShadow,r.customDepthMaterial=s.customDepthMaterial,n.forEach((o,a)=>{r.setMatrixAt(a,o.matrixWorld),o.removeFromParent()}),r.computeBoundingSphere(),i.add(r)}}function Rm(){const i=new $e;i.name="Peripheral mountain terrain",i.userData={layer:"periphery",seed:251026,independent:!0};const t=200,e=52,n=[],s=[],r=[],o=new kt("#596e39"),a=new kt("#778175"),h=new kt("#4b6251"),l=new kt("#cad1cc"),d=(w,p)=>{const E=Math.cos(w),b=Math.sin(w),D=Math.min(180/Math.max(1e-4,Math.abs(E)),150/Math.max(1e-4,Math.abs(b))),I=15+E*(D+p),O=Math.max(I<35?-44:-1e3,20+b*(D+p)),A=Be.smoothstep(p,0,65),y=.55+.22*Math.sin(w*8+1.9)+.16*Math.sin(w*17-2.2),N=Math.max(0,1-Math.abs(p-185-30*Math.sin(w*7))/145),W=Math.max(0,1-Math.abs(p-365-40*Math.sin(w*11))/140)*.68,Y=Math.abs(Math.sin(w*33+p*.018))*Math.sin(Math.PI*Math.min(1,p/110))*.1,K=Be.smoothstep(p,0,20)*Math.max(0,1-p/140)*(3+9*Math.abs(Math.sin(w*29+p*.045)));return{x:I,z:O,height:A*(155*y*Math.max(N,W)+16*Y)+K}};for(let w=0;w<=t;w++){const p=-1.12+(Math.PI+.35+1.12)*w/t;for(let E=0;E<=e;E++){const b=E/e*480,{x:D,z:I,height:O}=d(p,b),A=-.63+O;n.push(D,A,I);const y=o.clone().lerp(h,Be.smoothstep(b,0,45)*.6).lerp(a,Be.smoothstep(O,4,28));if(y.lerp(l,Be.smoothstep(O+Math.sin(p*45)*7,85,120)*.65),s.push(...y.toArray()),w<t&&E<e){const N=w*(e+1)+E;r.push(N,N+e+1,N+1,N+1,N+e+1,N+e+2)}}}const c=new Me;c.setAttribute("position",new Kt(n,3)),c.setAttribute("color",new Kt(s,3)),c.setIndex(r),c.computeVertexNormals();const f=new fe(c,new Mi({vertexColors:!0,roughness:1,side:Ze}));f.name="Forest-to-rock peripheral slopes",f.receiveShadow=!0,f.castShadow=!1,i.add(f);const m=new Xi(1,1),S=new oe,T=new An,_=new Xe,u=w=>{const p=Math.sin(w*127.1+251026)*43758.5453;return p-Math.floor(p)};for(let w=0;w<3;w++){const p=new Ao(m,new Mi({color:["#737b6c","#939584","#a4a491"][w],roughness:1}),95);p.name="Peripheral rock outcrops",p.castShadow=!1,p.receiveShadow=!0;for(let E=0;E<95;E++){const b=E*3+w,D=-1.1+(Math.PI+.32+1.1)*u(b+1),I=12+u(b+401)*115,{x:O,z:A,height:y}=d(D,I),N=2+u(b+803)*5;_.set(u(b+5),u(b+97)*6,u(b+12)),T.setFromEuler(_),S.compose(new F(O,y-.5,A),T,new F(N*1.4,N*.6,N)),p.setMatrixAt(E,S)}p.computeBoundingSphere(),i.add(p)}return i}function Cm({vegetation:i=!0,batched:t=!0}={}){const e=new $e;e.name="Serenity reference campus";const n={},s=[],r=[],o=[],a=[],h={};function l(g,v){const C=new Le;for(const x of v)x.updateMatrixWorld(!0),C.union(new Le().setFromObject(x));h[g]={min:C.min.toArray(),max:C.max.toArray()}}let d=241026;const c=()=>(d=1664525*d+1013904223>>>0)/4294967296,f=new Wn(1,1,1),m=new vi(1,1,1,12),S=new Xi(1,1),T=new Xi(1,1);for(const g of[S,T]){const v=g.attributes.position;for(let C=0;C<v.count;C++){const x=v.getX(C),L=v.getY(C),k=v.getZ(C),V=1+Math.sin(x*41+L*17+k*31)*.16;v.setXYZ(C,x*V,L*V,k*V)}g.computeVertexNormals()}const _=new Ls(1,1,12,2);{const g=_.attributes.position;for(let v=0;v<g.count;v++){const C=g.getX(v),x=g.getY(v),L=g.getZ(v),k=Math.atan2(L,C),V=1+Math.sin(k*7+x*18)*.18+Math.cos(k*13+x*11)*.09;g.setXYZ(v,C*V,x+Math.sin(k*7)*.035,L*V)}_.computeVertexNormals()}function u(g){const C=new Uint8Array(65536);for(let L=0;L<128;L++)for(let k=0;k<128;k++){let V=.9+c()*.1;if(g==="stone"){const z=Math.floor(L/24);(L%24<2||(k+z%2*32)%64<2)&&(V=.67)}g==="wood"&&(V=.82+.09*Math.sin(k*.7+Math.sin(L*.07)*.7)+c()*.09),g==="grass"&&(V=.72+c()*.28);const B=(L*128+k)*4;C[B]=C[B+1]=C[B+2]=Math.round(V*255),C[B+3]=255}const x=new xl(C,128,128,Ge);return x.needsUpdate=!0,x.wrapS=x.wrapT=As,x.repeat.set(g==="grass"?28:3,g==="grass"?28:2),x.colorSpace=De,o.push(x),x}const w=(g,v={})=>new Mi({color:g,roughness:.83,...v}),p={stone:w("#ddd1b8",{map:u("stone")}),pale:w("#d8cfb8"),oak:w("#aa783e",{map:u("wood")}),oakLight:w("#c69858"),darkWood:w("#664e32"),roof:w("#303e4b",{roughness:.48,metalness:.32}),seam:w("#68777e",{roughness:.42,metalness:.4}),trim:w("#36493e"),glass:w("#b9bcb0",{roughness:.19,metalness:.28,transparent:!0,opacity:.34,depthWrite:!1}),window:w("#818c87",{roughness:.2,metalness:.42,emissive:"#d0a04d",emissiveIntensity:.15}),warm:w("#dbbc79",{emissive:"#ad7428",emissiveIntensity:.16}),floor:w("#b7aa8e"),path:w("#d5cab1"),pathEdge:w("#b6ac92"),grass:w("#596e39",{map:u("grass")}),turf:w("#496c36"),turf2:w("#587a40"),leaves:[w("#4c6a2f"),w("#748341"),w("#3e5e32"),w("#8b8e49")],pines:[w("#294937"),w("#385e3b"),w("#4d6a3b"),w("#6b7c42")],rock:[w("#7e8171"),w("#a4a391"),w("#c0bba7")],water:w("#4c92aa",{metalness:.45,roughness:.27}),waterLine:w("#9bc4c4",{metalness:.3,roughness:.3}),white:w("#eeeadd"),metal:w("#5e6b62",{metalness:.55,roughness:.45}),soil:w("#6a6248"),skin:w("#b48b65"),clothes:[w("#344e62"),w("#c0b691"),w("#687a88"),w("#975c3f"),w("#405d4c")],flowers:[w("#d5c580"),w("#b896b2"),w("#d6d8bd")]};function E(g,v,C,x=[1,1,1],L=e){const k=new fe(g,v);return k.position.set(...C),k.scale.set(...x),k.castShadow=!0,k.receiveShadow=!0,L.add(k),k}const b=(g,v,C,x=e)=>E(f,g,v,C,x),D=(g,v,C,x,L=e)=>E(m,g,v,[C,x,C],L);function I(g,v,C,x=p.oak,L=e,k=C){const V=new F(...g),B=new F(...v),z=V.clone().add(B).multiplyScalar(.5),st=b(x,z.toArray(),[C,V.distanceTo(B),k],L);return st.quaternion.setFromUnitVectors(new F(0,1,0),B.sub(V).normalize()),st}function O(g,v,C=e,x=1.05){const L=Math.hypot(v[0]-g[0],v[2]-g[2]),k=Math.max(1,Math.ceil(L/1.8));I([g[0],g[1]+x,g[2]],[v[0],v[1]+x,v[2]],.09,p.metal,C),I([g[0],g[1]+.5,g[2]],[v[0],v[1]+.5,v[2]],.045,p.metal,C);for(let V=0;V<=k;V++){const B=V/k,z=g[0]+(v[0]-g[0])*B,st=g[1]+(v[1]-g[1])*B,et=g[2]+(v[2]-g[2])*B;b(p.metal,[z,st+x/2,et],[.065,x,.065],C)}}function A(g,v,C=2.4,x=e,L=p.path){const k=I(g,v,C,L,x,.13);k.quaternion.setFromUnitVectors(new F(0,1,0),new F(v[0]-g[0],v[1]-g[1],v[2]-g[2]).normalize());const V=Math.hypot(v[0]-g[0],v[2]-g[2]);k.removeFromParent();const B=new Me;g[0],g[1],g[2],v[0],v[1],v[2];const z=(v[0]-g[0])/V,st=(v[2]-g[2])/V,et=[g[0]-st*C/2,g[1],g[2]+z*C/2,g[0]+st*C/2,g[1],g[2]-z*C/2,v[0]+st*C/2,v[1],v[2]-z*C/2,v[0]-st*C/2,v[1],v[2]+z*C/2];B.setAttribute("position",new Kt(et,3)),B.setIndex([0,2,1,0,3,2]),B.computeVertexNormals();const vt=E(B,L,[0,0,0],[1,1,1],x);return vt.material.side=Ze,vt.castShadow=!1,vt}function y(g=!1){const v=g?.29:.5,C=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[-v,1,0],[v,1,0]],x=[[0,1,5,4],[3,4,5,2],[0,4,3],[1,2,5],[0,3,2,1]],L=[],k=[];for(const B of x)for(let z=1;z<B.length-1;z++){let st=[B[0],B[z],B[z+1]];const et=st.map(ee=>new F(...C[ee])),vt=et[1].clone().sub(et[0]).cross(et[2].clone().sub(et[0])),Dt=et[0].clone().add(et[1]).add(et[2]).multiplyScalar(1/3).sub(new F(0,.25,0));vt.dot(Dt)<0&&(st=[st[0],st[2],st[1]]);for(const ee of st)L.push(...C[ee]),k.push(C[ee][0]+.5,C[ee][2]+.5)}const V=new Me;return V.setAttribute("position",new Kt(L,3)),V.setAttribute("uv",new Kt(k,2)),V.computeVertexNormals(),V}const N=y(),W=y(!0),Y=[];function K(g,v,C,x,L,k,V,B,z){const st=V==="gable-z",et=st?L:x,vt=st?x:L,Dt=E(V==="hip"?W:N,p.roof,[g,v,C],[et,k,vt],B);st&&(Dt.rotation.y=Math.PI/2),Dt.name=`Closed roof · ${z}`,Dt.userData={roof:!0,closed:!0,place:z},s.push(Dt),b(p.roof,[g,v-.09,C],[x,.22,L],B);for(const le of[-1,1])b(p.trim,[g,v-.18,C+le*L/2],[x+.08,.19,.16],B),b(p.trim,[g+le*x/2,v-.18,C],[.16,.19,L+.08],B);const ee=(le,fn)=>{for(const ye of[le,fn])Y.push(st?g+ye[2]:g+ye[0],v+ye[1]+.035,st?C-ye[0]:C+ye[2])};for(let le=-et/2+.2;le<et/2;le+=.58){const fn=V==="hip"?Math.min(1,(et/2-Math.abs(le))/(et*.21)):1,ye=V==="hip"?Math.min(et*.29,Math.max(-et*.29,le)):le;for(const bi of[-1,1])ee([le,0,bi*vt/2],[ye,k*fn,0])}return b(p.seam,[g,v+k+.05,C],st?[.15,.12,L*(V==="hip"?.58:1)]:[x*(V==="hip"?.58:1),.12,.15],B),Dt}function tt(g,v,C,x,L,k,V=!1){const B=(st,et,vt)=>V?[C+vt,v+et,g+st]:[g+st,v+et,C+vt],z=(st,et,vt)=>V?[vt,et,st]:[st,et,vt];b(p.window,B(0,0,.035),z(x,L,.08),k);for(const st of[-x/2,0,x/2])b(p.darkWood,B(st,0,.12),z(.085,L+.15,.13),k);for(const st of[-L/2,0,L/2])b(p.oak,B(0,st,.13),z(x+.15,.08,.14),k);b(p.pale,B(0,-L/2-.12,.1),z(x+.35,.16,.45),k)}function Z(g,v){const{x:C,y:x,z:L,w:k,d:V}=g,B=L+V/2+1.3;b(p.floor,[C,x+3.4,B],[k+.6,.28,2.7],v);for(let z=C-k/2;z<=C+k/2+.1;z+=3.1)b(p.oak,[z,x+3.6,B+1.1],[.23,7.1,.23],v),b(p.oakLight,[z,x+6.65,B+.75],[.75,.18,.7],v);O([C-k/2,x+3.55,B+1.3],[C+k/2,x+3.55,B+1.3],v),b(p.oak,[C,x+6.9,B+1.1],[k+.7,.24,.27],v)}function lt(g,v,C,x=e){const L=b(new Os({visible:!1}),v,C,x);L.name=`Pick volume · ${g}`,L.visible=!1,L.userData.place=g,r.push(L)}function $(g){const{id:v,x:C,y:x,z:L,w:k,d:V,h:B}=g,z=new $e;if(z.name=g.key,z.userData={place:v,architecturalVolume:!0,...g},e.add(z),(n[v]||=[]).push(z),b(p.stone,[C,x-.25,L],[k+.6,.5,V+.6],z),g.glass||g.dining){b(p.pale,[C,x+B/2,L-V/2],[k,B,.45],z),b(p.floor,[C,x+.15,L],[k,.3,V],z),b(p.oak,[C,x+B-.12,L],[k,.25,V],z);for(const et of[-1,1]){b(p.glass,[C+et*k/2,x+B/2,L],[.07,B-.3,V],z);for(let vt=L-V/2;vt<=L+V/2+.01;vt+=2)b(p.oak,[C+et*k/2,x+B/2,vt],[.15,B,.15],z)}b(p.glass,[C,x+B/2,L+V/2],[k,B-.25,.08],z);for(let et=C-k/2;et<=C+k/2+.01;et+=2)b(p.oak,[et,x+B/2,L+V/2],[.16,B,.18],z),g.dining&&b(p.oak,[et,x+B/2,L+V/2+1.5],[.19,B,.19],z);for(const et of[.25,B*.66,B-.05])b(p.oak,[C,x+et,L+V/2],[k,.13,.18],z);for(let et=C-k/2+2;et<C+k/2-1;et+=4)for(let vt=L-V/2+3;vt<L+V/2-1;vt+=3.8){b(p.oakLight,[et,x+1,vt],[2.1,.13,1.15],z);for(const Dt of[-.8,.8]){b(p.darkWood,[et+Dt,x+.5,vt],[.1,1,.1],z);for(const ee of[-1,1])b(p.oak,[et+Dt,x+.54,vt+ee],[.5,.12,.5],z),b(p.oak,[et+Dt,x+.87,vt+ee*1.2],[.5,.7,.1],z)}}for(let et=C-k/2+2;et<C+k/2;et+=4)b(p.warm,[et,x+B-.5,L],[1.4,.08,.35],z)}else{b(p.stone,[C,x+B/2,L],[k,B,V],z);for(const et of[-1,1]){b(p.oak,[C,x+B*.75,L+et*(V/2+.02)],[k,B*.42,.12],z);for(let vt=C-k/2+1.8;vt<C+k/2-1;vt+=2.8)for(let Dt=0;Dt<2;Dt++)tt(vt,x+1.85+Dt*3.35,L+et*(V/2+.14),1.65,2.1,z);for(let vt=L-V/2+2;vt<L+V/2-1;vt+=3)for(let Dt=0;Dt<2;Dt++)tt(vt,x+1.85+Dt*3.35,C+et*(k/2+.14),1.6,2.1,z,!0);b(p.pale,[C,x+3.35,L+et*(V/2+.09)],[k+.2,.22,.3],z)}for(let et=C-k/2+.6;et<C+k/2;et+=1.4)b(p.pale,[et,x+.35,L+V/2+.12],[1.2,.5,.3],z)}if(g.gallery&&Z(g,z),g.roof==="planted"){b(p.pale,[C,x+B+.18,L],[k+1,.4,V+1],z),b(p.grass,[C,x+B+.43,L-1],[k+.4,.16,V-1],z);const et=z.children.at(-2);et.userData={roof:!0,closed:!0,place:v},s.push(et);for(const vt of[-1,1])b(p.stone,[C+vt*(k/2+.1),x+B/2,L],[.8,B+1,V+1],z);for(let vt=C-k/2+1;vt<C+k/2;vt+=2){b(p.oak,[vt,x+2.35,L-2],[1.3,4,.35],z);for(let Dt=.6;Dt<4.3;Dt+=.65){b(p.oakLight,[vt,x+Dt,L-1.8],[1.3,.09,.75],z);for(let ee=0;ee<6;ee++)b(p.clothes[ee%5],[vt-.5+ee*.17,x+Dt+.22,L-1.7],[.12,.35,.3],z)}}}else K(C,x+B,L,k+1.7,V+1.8,g.roof==="hip"?3:2.8,g.roof,z,v);return lt(v,[C,x+B/2+1,L],[k,B+3,V],z),z}const mt=new yi(520,385,240,180);mt.rotateX(-Math.PI/2);const _t=[],Pt=new kt("#596e39"),Ht=new kt("#8a8b78");for(let g=0;g<mt.attributes.position.count;g++){const v=mt.attributes.position,C=v.getX(g)+25,x=v.getZ(g)+5,L=hn(C,x);v.setXYZ(g,C,L,x);const k=C>42&&x<-33&&L>10?Math.max(0,Math.min(1,.45+Math.sin(C*.41+x*.23)*.4+Math.cos(x*.62)*.35)):0;_t.push(...Pt.clone().lerp(Ht,k).toArray())}mt.setAttribute("color",new Kt(_t,3)),mt.computeVertexNormals();const $t=E(mt,w("#ffffff",{vertexColors:!0,map:u("grass")}),[0,0,0]);$t.name="Sculpted campus terraces and hillside",$t.castShadow=!1;const Vt=b(p.water,[-140,-2.6,-165],[740,.15,320]);Vt.name="Lake",Vt.castShadow=!1;for(let g=0;g<95;g++){const v=-230+c()*420,C=-66-c()*160;b(p.waterLine,[v,-2.49,C],[2+c()*9,.012,.025]).castShadow=!1}for(let g=0;g<4;g++){const v=wm({width:1500,depth:210,height:52+g*21,seed:8+g*7});v.position.set(-70+g*40,-5,-400-g*95),v.name="Distant alpine ridgeline",e.add(v)}b(p.stone,[-22,3,0],[76,6,43]),b(p.grass,[-22,6.03,0],[75,.12,42]);for(const g of[16,44])b(p.stone,[g,3.5,-3],[.5,5,22]);b(p.stone,[30,3.5,-13.8],[28,5,.5]),b(p.floor,[30,1.1,-3],[28,.2,22]);const qt=(g,v,C,x,L)=>{b(p.stone,[g,L-1.1,v],[C,2.2,x]),b(p.path,[g,L+.025,v],[C-.25,.15,x-.25]),O([g-C/2,L+.12,v+x/2],[g+C/2,L+.12,v+x/2])};qt(-40,35,31,29,1.85),qt(-6,52,33,30,.02);const it=e.children.length;qt(42,47,39,21,.02),l("workshop-terrace",e.children.slice(it));function ot(g,v,C){const x=Math.max(3,Math.ceil(Math.abs(v[1]-g[1])/.21)),L=(v[0]-g[0])/x,k=(v[2]-g[2])/x,V=(v[1]-g[1])/x;for(let et=0;et<x;et++){const vt=g[0]+L*(et+.5),Dt=g[2]+k*(et+.5),ee=g[1]+V*(et+.5),le=Math.min(ee-.25,hn(vt,Dt)),fn=b(p.path,[vt,(ee+le)/2,Dt],[C,ee-le,Math.hypot(L,k)+.04]);fn.rotation.y=Math.atan2(L,k)}const B=Math.hypot(v[0]-g[0],v[2]-g[2]),z=-(v[2]-g[2])/B,st=(v[0]-g[0])/B;for(const et of[-1,1])O([g[0]+et*z*C/2,g[1],g[2]+et*st*C/2],[v[0]+et*z*C/2,v[1],v[2]+et*st*C/2])}ot([-26,6.1,18],[-26,2,26],4.2),ot([11,6.1,20],[15,0,33],5),ot([-21,2,38],[-21,0,45],3.5),ot([-6,0,67],[-6,-1.4,72],5);const yt=new Set;for(const g of Object.values(ho))for(let v=1;v<g.length;v++){const C=g[v-1],x=g[v],L=[C,x].sort().join("|");yt.has(L)||(yt.add(L),A(C,x,2.3),Math.abs(C[1]-x[1])>1&&ot(C,x,2.8))}vr.forEach($);const Tt=n["tech-lab"][0];for(const g of[16.4,43.6])b(p.stone,[g,3.5,8.6],[1.25,5,1.2],Tt);b(p.stone,[30,1.45,8.5],[28,.7,1.3],Tt),b(p.pale,[30,5.8,8.7],[28.6,.55,1],Tt),b(p.oak,[30,12.55,8.3],[28.4,.42,.65],Tt);for(let g=18;g<=42;g+=4)b(p.darkWood,[g,9.4,7.7],[.32,6.4,.65],Tt),b(p.darkWood,[g,3.6,8.25],[.24,4.2,.55],Tt);for(const g of[3.8,8.4,10.5])b(p.oak,[30,g,8.18],[27.5,.17,.32],Tt);for(const g of[16.1,43.9])for(const v of[3.8,8.4,10.5])b(p.oak,[g,v,-3],[.3,.17,22],Tt);for(let g=18;g<=42;g+=4){b(p.oak,[g,8.2,-12.9],[2.8,4.2,.55],Tt);for(const v of[6.7,7.8,9,10])b(p.oakLight,[g,v,-12.4],[2.9,.12,1],Tt);b(p.warm,[g,9.2,-12.05],[2.2,.65,.08],Tt),b(p.darkWood,[g,2.1,5.9],[2.1,.6,1.2],Tt),b(p.oakLight,[g,2.46,5.9],[2.3,.12,1.35],Tt)}b(p.glass,[30,3.4,9.14],[25,4.4,.1],Tt);for(let g=18;g<=42;g+=2)b(p.oak,[g,3.4,9.22],[.15,4.5,.2],Tt);for(let g=19;g<=40;g+=3)b(p.warm,[g,2.2,8.3],[1.5,.13,.8],Tt);b(p.path,[30,6.08,10],[31,.2,3]),O([14.5,6.2,11.5],[45.5,6.2,11.5]),K(30,15,-5,18,13,1.7,"hip",Tt,"tech-lab");const Et=n["main-building"][0],Ot=-28,te=-3;b(p.stone,[Ot,17.1,te],[5.2,22.2,5.2],Et);for(const g of[-1,1])b(p.pale,[Ot,27.4,te+g*2.65],[5.6,.3,.3],Et),tt(Ot,17,te+g*2.65,1,5.4,Et);b(p.darkWood,[Ot,27.8,te],[5.25,.8,5.25],Et);for(let g=-4;g<=4;g++)for(const v of[-1,1])b(p.oakLight,[Ot+g*.52,27.85,te+v*2.65],[.14,.7,.12],Et);K(Ot,28.3,te,6.7,6.7,1.65,"hip",Et,"main-building"),lt("main-building",[Ot,18,te],[5.5,24,5.5],Et),r.at(-1).name="Clock tower pick volume",r.at(-1).userData.tower=!0;function U(g,v,C,x){const L=new $e;L.position.set(g,v,C),L.rotation.y=x,Et.add(L);const k=E(new Co(1.4,48),p.white,[0,0,0],[1,1,1],L);k.castShadow=!1,E(new Is(1.36,1.43,48),p.trim,[0,0,.025],[1,1,1],L);for(let V=0;V<12;V++){const B=V*Math.PI/6,z=b(p.trim,[Math.sin(B)*1.16,Math.cos(B)*1.16,.04],[.08,.22,.035],L);z.rotation.z=-B}I([0,0,.075],[-.45,.65,.075],.085,p.trim,L),I([0,0,.09],[.9,.18,.09],.07,p.trim,L)}U(Ot,25.4,te+2.64,0),U(Ot+2.64,25.4,te,Math.PI/2),K(-23,9.8,4.3,7.4,5.8,1.8,"gable-z",Et,"main-building");for(const g of[-25.7,-20.3])b(p.oak,[g,7.9,6.5],[.26,3.8,.26],Et);I([-25.7,9.65,6.8],[-23,11.2,6.8],.18,p.oak,Et),I([-23,11.2,6.8],[-20.3,9.65,6.8],.18,p.oak,Et),D(p.path,[Je.x,6.08,Je.z],14,.16),D(p.pale,[Je.x,6.2,Je.z],5.2,.3),D(p.grass,[Je.x,6.4,Je.z],4.8,.2);const nt=(g,v,C,x=0,L=Math.PI*2,k=.09)=>{const V=new Do(g,k,6,96,L),B=E(V,v,[Je.x,C,Je.z]);return B.rotation.x=Math.PI/2,B.rotation.z=x,B};nt(13.5,p.pathEdge,6.19,0,Math.PI*2,.08);for(let g=0;g<4;g++){const v=g*Math.PI/2+.12;for(const C of[5.45,5.65,5.85])nt(C,p.oakLight,6.85,v,1.22,.085);nt(6.03,p.oak,7.4,v,1.22,.09);for(let C=0;C<4;C++){const x=v+C*.38,L=Je.x+Math.cos(x)*5.8,k=Je.z-Math.sin(x)*5.8;b(p.metal,[L,6.57,k],[.14,.8,.14])}}function pt(g,v,C,x=7,L=3.5,k=e){E(new vi(.22,.4,1,8),p.darkWood,[g,v+x*.35,C],[x/7,x*.7,x/7],k);for(let B=0;B<7;B++){const z=B*2.3999,st=Math.cos(z)*L*.6,et=Math.sin(z)*L*.6;I([g,v+x*.38,C],[g+st,v+x*(.7+B%2*.1),C+et],.18*x/8,p.darkWood,k)}const V=x>11?185:32;for(let B=0;B<V;B++){const z=c()*Math.PI*2,st=Math.sqrt(c())*L,et=.7+c()*.65;E(S,p.leaves[B%4],[g+Math.cos(z)*st,v+x*(.62+.24*Math.sqrt(1-st/L))+c()*x*.12,C+Math.sin(z)*st],[L*.2*et,x*.085*et,L*.2*et],k)}}pt(-6,6.5,8,14,7.8),lt("courtyard",[-6,7.4,8],[25,2.5,25]);function ht(g,v,C,x=e,L=!1){D(p.oakLight,[g,v+.84,C],.74,.12,x),D(p.metal,[g,v+.4,C],.065,.8,x);for(let k=0;k<4;k++){const V=k*Math.PI/2,B=g+Math.cos(V)*1.05,z=C+Math.sin(V)*1.05;b(p.oak,[B,v+.48,z],[.46,.12,.46],x),b(p.darkWood,[B,v+.24,z],[.07,.48,.07],x);const st=b(p.oak,[B+Math.cos(V)*.2,v+.75,z+Math.sin(V)*.2],[.49,.6,.08],x);st.rotation.y=Math.PI/2-V}L&&(D(p.oak,[g,v+1.55,C],.055,3.1,x),E(new Ls(1.55,.4,8,1,!1),p.white,[g,v+3.12,C],[1,1,1],x))}for(const[g,v,C]of[[-40,43,2],[-6,61,.05]])for(let x=-2;x<=2;x++)ht(g+x*4.8,C,v,e,x%2===0),x%2&&ht(g+x*4.8,C,v-3.4);const ct=e.children.length;for(const g of[40,52])for(let v=41;v<=60;v+=4.75)b(p.oak,[v,1.8,g],[.22,3.6,.22]);for(const g of[40,52])b(p.oak,[50.5,3.55,g],[20,.27,.27]);for(let g=40.5;g<=60.5;g+=.9)b(p.oakLight,[g,3.78,46],[.16,.24,12.8]);for(let g=0;g<12;g++)E(S,p.leaves[g%4],[42+c()*17,3.95,40+c()*11],[1.2,.3,.7]);for(let g=43;g<=58;g+=5)ht(g,.05,47);l("workshop-pergola",e.children.slice(ct));const Xt=new Set(e.children),{x:rt,z:At,y:Bt,w:Zt,d:P}=Ms,M=b(p.stone,[rt,Bt-.6,At],[Zt+5,1.15,P+5]);M.name="Field stone plinth",l("field-plinth",[M]),b(p.turf,[rt,Bt,At],[Zt,.15,P]).name="Field turf";for(let g=0;g<10;g++)b(g%2?p.turf:p.turf2,[rt,Bt+.09,At-P/2+(g+.5)*P/10],[Zt,.02,P/10]);const X=(g,v,C=.13)=>A([g[0],Bt+.13,g[1]],[v[0],Bt+.13,v[1]],C,e,p.white),Q=(g,v,C,x)=>{X([g-C/2,v-x/2],[g+C/2,v-x/2]),X([g+C/2,v-x/2],[g+C/2,v+x/2]),X([g+C/2,v+x/2],[g-C/2,v+x/2]),X([g-C/2,v+x/2],[g-C/2,v-x/2])};Q(rt,At,Zt-.8,P-.8),X([rt-Zt/2+.4,At],[rt+Zt/2-.4,At]);const at=E(new Is(6,6.13,64),p.white,[rt,Bt+.14,At]);at.rotation.x=-Math.PI/2,at.castShadow=!1;for(const g of[-1,1]){const v=At+g*(P/2-.4);Q(rt,v-g*6.5,22,13),Q(rt,v-g*2.5,10,5),D(p.white,[rt,Bt+.15,v-g*9],.16,.015);for(const C of[-3.66,3.66])I([rt+C,Bt,v],[rt+C,Bt+2.44,v],.1,p.white);I([rt-3.66,Bt+2.44,v],[rt+3.66,Bt+2.44,v],.1,p.white).name=`Goal crossbar ${g<0?"far":"near"}`;for(let C=0;C<=15;C++){const x=rt-3.66+C*7.32/15;I([x,Bt,v+g*1.8],[x,Bt+2.44,v],.016,p.white)}for(let C=0;C<=6;C++)I([rt-3.66,Bt+C*.4,v+g*(1.8-C*.3)],[rt+3.66,Bt+C*.4,v+g*(1.8-C*.3)],.016,p.white);for(const C of[-1,1])I([rt+C*(Zt/2-.45),Bt,v],[rt+C*(Zt/2-.45),Bt+1.4,v],.035,p.white),b(p.warm,[rt+C*(Zt/2-.45)+.2,Bt+1.2,v],[.4,.32,.02])}for(const g of[-1,1]){const v=rt+g*(Zt/2+1.2);g===-1?(O([v,Bt-.1,At-P/2],[v,Bt-.1,13],e,.85),O([v,Bt-.1,17],[v,Bt-.1,At+P/2],e,.85)):O([v,Bt-.1,At-P/2],[v,Bt-.1,At+P/2],e,.85)}const J=e.children.length;for(let g=0;g<5;g++)b(p.pale,[rt,2.4+g*.42,-24-g*.75],[37,.4,1]),b(p.oak,[rt,2.8+g*.42,-24-g*.75],[36,.12,.4]);for(let g=rt-18;g<=rt+18;g+=6)b(p.oak,[g,5,-28],[.18,5,.18]);b(p.oak,[rt,7.4,-27],[38,.25,3.4]),l("field-stand",e.children.slice(J)),lt("football-field",[rt,Bt+.3,At],[Zt,1,P]);const Mt=new $e;Mt.name="Complete rotated stadium",Mt.userData={place:"football-field",yaw:Ms.yaw};for(const g of[...e.children])Xt.has(g)||(g.position.x-=rt,g.position.z-=At,Mt.add(g));Mt.position.set(rt,0,At),Mt.rotation.y=Ms.yaw,e.add(Mt);for(let g=0;g<160;g++){const v=44+c()*55,C=-58-c()*52;if(v>48&&v<84&&C>-73&&C<-58)continue;const x=Math.max(hn(v,C),C<-72&&v>47&&v<88?28.7:0),L=1+c()*2.5;E(T,p.rock[g%3],[v,x-.3,C],[L*1.25,L*.65,L]).rotation.set(c(),c()*3,c())}for(const[g,v,C]of[[45,-65,5],[87,-67,7],[54,-77,6],[63,-79,7],[76,-78,6],[84,-77,5]]){const x=hn(g,v);E(T,p.rock[0],[g,x-1,v],[C,C*.65,C*.8])}b(p.stone,[66,23.4,-59.5],[37,1.5,4]),E(T,p.rock[0],[66,14,-64],[21,10,10]);for(const g of[51,58,73,81])E(T,p.rock[1],[g,20,-62],[5.2,3.6,5]);for(let g=0;g<35;g++){const v=47+c()*39,C=-60+c()*9,x=hn(v,C);E(T,p.rock[g%3],[v,x+1.3,C],[2.3+c()*2,2+c()*2,2])}b(p.grass,[66,29.4,-74],[35,1,6]);for(let g=51;g<82;g+=3.7)E(S,p.leaves[Math.floor(g)%4],[g,29.7,-70],[1,.5,.8]);const ft=n.library[0];for(let g=51;g<82;g+=2.5){b(p.darkWood,[g,26.15,-66],[2.15,4.2,.35],ft);for(let v=24.6;v<28.2;v+=.7){b(p.oakLight,[g,v,-65.6],[2.2,.1,.8],ft);for(let C=0;C<10;C++)b(p.clothes[C%5],[g-.9+C*.19,v+.25,-65.5],[.14,.42,.35],ft)}}b(p.stone,[66,29.35,-61],[36,.85,3.2],ft);for(const g of[48.5,83.5]){b(p.stone,[g,26.6,-62.3],[1.7,6.1,4.5],ft);for(let v=0;v<6;v++)E(T,p.rock[v%3],[g+(g<66?-1:1)*(.8+c()),25.2+v*.85,-63-c()*6],[2.8,1.7,2.4])}for(let g=0;g<26;g++){const v=49+c()*34,C=-66-c()*9;E(T,p.rock[g%3],[v,29.5+c()*.7,C],[1.3+c(),.65,1.3]),g%2===0&&E(S,p.leaves[g%4],[v,30.1,C],[1.1,.6,.8])}const wt=[[39,14,-45],[47,19,-51],[49,24,-58]];for(let g=1;g<wt.length;g++){const v=wt[g-1],C=wt[g];Math.hypot(C[0]-v[0],C[2]-v[2]),A(v,C,3),A([v[0],v[1]+3,v[2]],[C[0],C[1]+3,C[2]],3.7,e,p.roof);for(let x=0;x<=4;x++){const L=x/4,k=v[0]+(C[0]-v[0])*L,V=v[1]+(C[1]-v[1])*L,B=v[2]+(C[2]-v[2])*L;for(const z of[-1,1])b(p.oak,[k+z*1.2,V+1.5,B],[.14,3,.14])}}A([48,24.15,-58],[82,24.15,-59],3.3),O([48,24.15,-56.5],[82,24.15,-57.5]),b(p.grass,[20,.08,66],[31,.15,20]),A([4,.2,74],[35,.2,74],2.5),A([20,.2,56],[20,.2,76],2);for(let g=8;g<35;g+=8)b(p.stone,[g,.3,62],[4,.6,3]),b(p.soil,[g,.63,62],[3.7,.07,2.7]);lt("ideas-garden",[20,1.5,66],[30,3,20]);function Rt(g,v,C,x=1){E(S,p.leaves[Math.floor(c()*4)],[g,v+.5*x,C],[x,.65*x,x*.75])}for(const[g,v,C,x,L]of[[-45,12,18,5,6],[-53,20,9,4,6],[-33,18,7,4,6],[6,-8,10,3,6],[8,16,5,3,6],[22,28,11,4,0],[29,60,10,4,0]]){b(p.stone,[g,L+.22,v],[C,.5,x]),b(p.soil,[g,L+.49,v],[C-.5,.08,x-.5]);for(let k=0;k<C*x/2;k++){const V=g+(c()-.5)*(C-1),B=v+(c()-.5)*(x-1);Rt(V,L+.5,B,.65+c()*.35),k%5===0&&E(S,p.flowers[k%3],[V,L+1.1,B],[.35,.3,.3])}}for(const[g,v]of[[-47,12],[-35,12],[-52,20]])pt(g,6.5,v,5.7,2.3);for(let g=0;g<210;g++){const v=-58+c()*110,C=19+c()*56;if(vr.some(k=>Math.abs(v-k.x)<k.w/2+3&&Math.abs(C-k.z)<k.d/2+5)||Math.abs(v-15)<3||Math.abs(v+21)<3||C>58&&v<9)continue;const L=hn(v,C);Rt(v,L,C,.5+c()*.8),g%4===0&&E(S,p.flowers[g%3],[v,L+.65,C],[.3,.25,.3])}for(let g=0;g<18;g++){const v=g/18*Math.PI*2;Rt(-6+Math.cos(v)*15.5,6.1,8+Math.sin(v)*15.5,.7)}for(const[g,v,C,x]of[[-59,17,3,7],[-20,28,2,6],[11,29,1,6],[47,22,2,8],[47,-27,8,7],[-17,-11,6,7],[18,63,0,7],[28,69,0,6],[-54,38,2,5]])pt(g,C,v,x,x*.38);function ut(g,v,C){const x=hn(g,v),L=e.children.length;D(p.darkWood,[g,x+C*.44,v],C*.021,C*.88);const k=p.pines[Math.abs(Math.floor(g+v))%4];for(let B=0;B<6;B++){const z=B/6,st=C*(.2-z*.15),et=x+C*(.28+z*.65),vt=E(_,k,[g,et,v],[st,C*.43,st]);vt.rotation.y=c()*6}let V=!1;if(Math.abs(g-rt)<Zt/2+7&&Math.abs(v-At)<P/2+12){const B=new Le;for(const z of e.children.slice(L))z.updateMatrixWorld(!0),B.union(new Le().setFromObject(z,!0));V=["field-plinth","field-stand"].some(z=>{const st=h[z];return B.min.x<st.max[0]&&B.max.x>st.min[0]&&B.min.z<st.max[2]&&B.max.z>st.min[2]})}if(a.push({x:g,y:x,z:v,height:C,removed:V}),V)for(const B of e.children.slice(L))B.removeFromParent()}if(i)for(let g=0;g<2900;g++){const v=-155+c()*340,C=-111+c()*260;if(v>-64&&v<49&&C>-30&&C<24||v>-60&&v<50&&C>=24&&C<75||vr.some(V=>Math.abs(v-V.x)<V.w/2+6&&Math.abs(C-V.z)<V.d/2+6)||[[-40,35,37,35],[-6,52,40,36],[42,47,47,29],[20,66,39,26]].some(([V,B,z,st])=>Math.abs(v-V)<z/2&&Math.abs(C-B)<st/2))continue;const x=-.4,L=(v-73)*Math.cos(x)-(C-11)*Math.sin(x),k=(v-73)*Math.sin(x)+(C-11)*Math.cos(x);Math.abs(L)<Zt/2+6&&Math.abs(k)<P/2+8||v>35&&v<49&&C>-61&&C<-29||v>48&&v<88&&C>-78&&C<-51||v>47&&v<92&&C>-49&&C<-30||C<-48&&v<32||hn(v,C)<-2||ut(v,C,5+c()*9)}for(let g=0;g<150;g++){const v=-125+c()*159,C=-43+5*Math.sin(v*.06)+3*Math.sin(v*.14)+c()*7;i&&g%2===0&&ut(v,C,5+c()*6);const x=hn(v,C);Rt(v,x,C,1+c()),g%3===0&&E(T,p.rock[g%3],[v,x,C],[1.7,1,1.4])}function xt(g,v,C,x,L=e){const k=p.clothes[x%5];D(k,[g,v+.97,C],.17,.62,L),E(S,p.skin,[g,v+1.49,C],[.14,.17,.14],L);for(const V of[-1,1])I([g+V*.08,v+.65,C],[g+V*.1,v+.12,C+(V<0?.12:-.1)],.09,p.trim,L),I([g+V*.19,v+1.18,C],[g+V*.22,v+.73,C+.04],.075,k,L)}for(let g=0;g<48;g++){const v=Object.values(ho),C=v[g%v.length],x=Math.floor(c()*(C.length-1)),L=C[x],k=C[x+1],V=c();xt(L[0]+(k[0]-L[0])*V+(c()-.5),L[1]+(k[1]-L[1])*V,L[2]+(k[2]-L[2])*V,g)}for(let g=0;g<10;g++){const v=-15+c()*30,C=-24+c()*48,x=new $e;x.name=`Field player ${g+1}`,x.userData.sport="player",Mt.add(x),xt(v,Bt+.15,C,g,x)}for(const[g,v,C]of[[-22,14,6],[13,15,6],[-23,32,2],[18,36,0],[48,-29,8],[45,25,2],[12,72,0]])D(p.metal,[g,C+1.8,v],.055,3.6),b(p.metal,[g,C+3.65,v],[.45,.08,.45]),b(p.warm,[g,C+3.45,v],[.23,.32,.23]);if(Y.length){const g=new Me;g.setAttribute("position",new Kt(Y,3));const v=new vl(g,new Ro({color:"#879093",transparent:!0,opacity:.45}));v.name="Standing roof seams",e.add(v)}e.updateMatrixWorld(!0),l("stadium",[Mt]),l("tech",n["tech-lab"]),l("residence",n.residence);const It={meshes:0,triangles:0};if(e.traverse(g=>{g.isMesh&&g.visible&&(It.meshes++,It.triangles+=(g.geometry.index?.count||g.geometry.attributes.position.count)/3)}),t){Mt.position.set(0,0,0),Mt.rotation.y=0,Mt.updateMatrixWorld(!0),Ka(Mt,v=>!v.visible),Mt.position.set(rt,0,At),Mt.rotation.y=Ms.yaw;const g=v=>{for(let C=v.parent;C;C=C.parent)if(C===Mt)return!0;return!1};Ka(e,v=>v.userData.roof||!v.visible||g(v))}return e.add(Rm()),e.updateMatrixWorld(!0),e.userData={reference:"User supplied aerial image, October 2026",approximateHiddenSides:!0,units:"metres",geometryBefore:It,canonicalPlaces:13,externalPlaces:11,closedRoofs:!0},{root:e,objects:n,roofs:s,pickVolumes:r,materials:p,textures:o,referencePlaces:Us,forest:a,siteBounds:h}}function li(i=16/9){const t=new F(11,12,4),e=Math.max(1,1.5/i);return{position:t.clone().add(new F(70,72,177).multiplyScalar(e)),target:t}}function Pm(i,t,e){const n=Pl(i),s=new F(...n.focus),r=n.radius*2.05*Math.max(1,1/t);return{position:s.clone().add(e.clone().normalize().multiplyScalar(r)),target:s}}function Lm(i,{places:t,onSelect:e,onError:n=()=>{},home:s=!1}){const r=matchMedia("(prefers-reduced-motion: reduce)").matches,o=matchMedia("(max-width: 900px)").matches,a=new hm({antialias:!0,alpha:!1,powerPreference:"high-performance"});a.outputColorSpace=De,a.toneMapping=Qa,a.toneMappingExposure=1.05,a.setPixelRatio(Math.min(devicePixelRatio,o?1.25:1.65)),a.shadowMap.enabled=!0,a.shadowMap.type=Ja,a.shadowMap.autoUpdate=!1;const h=a.domElement;h.className="reference-viewport",h.tabIndex=0,h.setAttribute("role","group"),h.setAttribute("aria-label",ko("Пространственная модель кампуса. Перетаскивание — ракурс, правая кнопка — перемещение, колесо — масштаб. Стрелки меняют ракурс, Shift со стрелками перемещает, Home возвращает обзор.","Spatial campus model. Drag to orbit, right-drag to pan, wheel to zoom. Arrow keys orbit, Shift with arrows pans, Home restores the overview.")),i.querySelectorAll("canvas,.reference-labels,.reference-badge").forEach(nt=>nt.remove()),i.classList.remove("video-campus"),i.classList.add("reference-campus"),i.dataset.engine="three-reference",i.dataset.webgl="webgl2",i.append(h);const l=new gl;l.background=new kt("#c5ddeb"),l.fog=new bo("#c5d9df",420,1150);const d=new Oe(40,1,.5,1300),c=new dm(d,h);c.enableDamping=!1,c.enablePan=!0,c.screenSpacePanning=!1,c.minDistance=35,c.maxDistance=390,c.minPolarAngle=.48,c.maxPolarAngle=1.28,c.minAzimuthAngle=-.72,c.maxAzimuthAngle=1.18,c.rotateSpeed=.46,c.zoomSpeed=.8,c.panSpeed=.55,c.touches.ONE=En.ROTATE,c.touches.TWO=En.DOLLY_PAN,h.style.touchAction="none",l.add(new xh("#dbeaff","#6f7045",2.15));const f=new Eh("#fff1d4",3.5);f.position.set(-80,135,90),f.target.position.set(12,0,-4),f.castShadow=!0,f.shadow.mapSize.set(o?1024:2048,o?1024:2048),Object.assign(f.shadow.camera,{left:-115,right:115,top:115,bottom:-115,near:5,far:330}),f.shadow.bias=-18e-5,f.shadow.normalBias=.1,f.shadow.radius=3,l.add(f,f.target);const m=new bm,S=new lo(a),T=S.fromScene(m,.08);l.environment=T.texture,l.environmentIntensity=.24,m.dispose(),S.dispose();const _=Cm();l.add(_.root);for(const nt of _.textures)nt.anisotropy=Math.min(8,a.capabilities.getMaxAnisotropy());const u=document.createElement("div");u.className="reference-labels",i.append(u);const w=Object.entries(Us).map(([nt,pt])=>{const ht=document.createElement("button");ht.className="reference-marker",ht.dataset.campusPlace=nt;const ct=t.findIndex(Bt=>Bt.id===nt),Xt=t[ct]?.name||nt,rt=document.createElement("span");rt.className="reference-number",rt.textContent=String(ct+1).padStart(2,"0");const At=document.createElement("span");return At.className="reference-name",At.textContent=Xt,ht.append(rt,At),ht.setAttribute("aria-label",Xt),ht.setAttribute("aria-pressed","false"),ht.onclick=()=>e(nt),u.append(ht),{id:nt,button:ht,point:new F(...pt.point)}}),p=document.createElement("div");p.className="reference-badge",p.textContent=ko("3D · по архитектурному референсу","3D · reference-based architecture"),i.append(p);const E=new Th,b=new Nt,D=new Os({color:"#f5d28b",depthTest:!0}),I=new $e;l.add(I);const O=new bh(new Le,12953447);O.visible=!1,l.add(O);let A=1,y=1,N=0,W=!1,Y=!1,K=!0,tt=null,Z=null,lt=null,$=!1;const mt=new AbortController,_t=mt.signal;function Pt(){return{engine:"reference-3d",position:d.position.toArray(),target:c.target.toArray()}}function Ht(){for(const nt of w){const pt=nt.point.clone().project(d),ht=(pt.x*.5+.5)*A,ct=(-pt.y*.5+.5)*y;nt.button.hidden=pt.z>1||pt.z<0||ht<14||ht>A-14||ct<14||ct>y-14,nt.button.style.left=ht+"px",nt.button.style.top=ct+"px",nt.button.classList.toggle("label-left",ht>A*.68),nt.button.classList.toggle("selected",nt.id===(Bi[tt]||tt)),nt.button.setAttribute("aria-pressed",String(nt.id===(Bi[tt]||tt)))}i.dataset.camera=JSON.stringify(Pt()),i.dataset.zoom=String(li(A/y).position.distanceTo(li(A/y).target)/d.position.distanceTo(c.target))}function $t(nt=performance.now()){if(N=0,!(W||Y||!K||document.hidden)){if(Z){const pt=Math.min(1,(nt-Z.start)/820),ht=1-(1-pt)**3;d.position.lerpVectors(Z.fromPosition,Z.position,ht),c.target.lerpVectors(Z.fromTarget,Z.target,ht),d.lookAt(c.target),pt===1&&(Z=null,c.update())}a.render(l,d),Ht(),i.dataset.drawCalls=String(a.info.render.calls),Z&&Vt()}}function Vt(){!N&&!W&&!Y&&K&&!document.hidden&&(N=requestAnimationFrame($t))}function qt(){c.target.x=Be.clamp(c.target.x,-65,100),c.target.y=Be.clamp(c.target.y,0,30),c.target.z=Be.clamp(c.target.z,-80,78),Vt()}c.addEventListener("change",qt),c.addEventListener("start",()=>{Z=null});function it(){if(!W){if(A=Math.max(1,i.clientWidth),y=Math.max(1,i.clientHeight-(o&&!s?54:0)),a.setSize(A,y,!1),h.style.height=y+"px",u.style.height=y+"px",d.aspect=A/y,d.updateProjectionMatrix(),c.maxDistance=Math.max(390,li(d.aspect).position.distanceTo(li(d.aspect).target)*1.1),!$){const nt=li(d.aspect);d.position.copy(nt.position),c.target.copy(nt.target),c.update(),$=!0}a.shadowMap.needsUpdate=!0,Vt()}}function ot(nt,pt){if(r){d.position.copy(nt),c.target.copy(pt),c.update(),Vt();return}Z={fromPosition:d.position.clone(),fromTarget:c.target.clone(),position:nt,target:pt,start:performance.now()},Vt()}function yt(nt,pt=!0){tt=nt,i.dataset.selected=nt||"";const ht=Pl(nt);if(O.visible=!!ht,ht){const ct=_.pickVolumes.filter(rt=>rt.userData.place===(Bi[nt]||nt)),Xt=new Le;for(const rt of ct)Xt.union(new Le().setFromObject(rt));if(O.box.copy(Xt),O.updateMatrixWorld(!0),pt){const rt=Pm(nt,d.aspect,d.position.clone().sub(c.target));ot(rt.position,rt.target)}}Vt()}function Tt(){for(;I.children.length;){const nt=I.children[0];nt.geometry.dispose(),I.remove(nt)}}function Et(nt){if(Tt(),!nt.length)return;const pt=Am(nt.at(-1));for(let ht=1;ht<pt.length;ht++){const ct=new F(...pt[ht-1]).add(new F(0,.18,0)),Xt=new F(...pt[ht]).add(new F(0,.18,0)),rt=new fe(new vi(.16,.16,ct.distanceTo(Xt),8),D);rt.position.copy(ct).add(Xt).multiplyScalar(.5),rt.quaternion.setFromUnitVectors(new F(0,1,0),Xt.sub(ct).normalize()),I.add(rt)}Vt()}h.addEventListener("pointerdown",nt=>{lt={x:nt.clientX,y:nt.clientY,button:nt.button}},{signal:_t}),h.addEventListener("pointerup",nt=>{if(!lt||lt.button!==0||Math.hypot(nt.clientX-lt.x,nt.clientY-lt.y)>6)return;const pt=h.getBoundingClientRect();b.set((nt.clientX-pt.left)/pt.width*2-1,-(nt.clientY-pt.top)/pt.height*2+1),E.setFromCamera(b,d);const ht=E.intersectObjects(_.pickVolumes,!1)[0];ht&&e(ht.object.userData.place)},{signal:_t}),h.addEventListener("keydown",nt=>{if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","+","=","-"].includes(nt.key))return;if(nt.preventDefault(),Z=null,nt.key==="Home"){U.reset();return}if(["+","=","-"].includes(nt.key)){U.zoom(nt.key==="-"?-1:1);return}const pt=["ArrowLeft","ArrowDown"].includes(nt.key)?-1:1;if(nt.shiftKey){const ht=new F(["ArrowLeft","ArrowRight"].includes(nt.key)?pt*3:0,0,["ArrowUp","ArrowDown"].includes(nt.key)?-pt*3:0);d.position.add(ht),c.target.add(ht)}else{const ht=d.position.clone().sub(c.target),ct=new ao().setFromVector3(ht);["ArrowLeft","ArrowRight"].includes(nt.key)?ct.theta+=pt*.09:ct.phi-=pt*.065,ct.theta=Be.clamp(ct.theta,c.minAzimuthAngle,c.maxAzimuthAngle),ct.phi=Be.clamp(ct.phi,c.minPolarAngle,c.maxPolarAngle),d.position.copy(c.target).add(new F().setFromSpherical(ct))}c.update(),Vt()},{signal:_t}),h.addEventListener("webglcontextlost",nt=>{nt.preventDefault(),n(new Error("WebGL context lost"))},{signal:_t}),document.addEventListener("visibilitychange",()=>{document.hidden||Vt()},{signal:_t});const Ot=new ResizeObserver(it);Ot.observe(i);const te=new IntersectionObserver(nt=>{K=nt[0].isIntersecting,K&&Vt()});te.observe(i);const U={select:yt,route:Et,snapshot:Pt,project(nt){const pt=new F(...nt).project(d);return{x:(pt.x*.5+.5)*A,y:(-pt.y*.5+.5)*y,depth:pt.z}},reset(){const nt=li(A/y);ot(nt.position,nt.target)},zoom(nt){Z=null;const pt=d.position.clone().sub(c.target).multiplyScalar(nt>0?.84:1.19).clampLength(c.minDistance,c.maxDistance);d.position.copy(c.target).add(pt),c.update(),Vt()},pause(nt){Y=nt,c.enabled=!nt,nt||Vt()},restore(nt){nt?.engine!=="reference-3d"||nt.position?.length!==3||nt.target?.length!==3||![...nt.position,...nt.target].every(Number.isFinite)||(Z=null,d.position.fromArray(nt.position),c.target.fromArray(nt.target),c.update(),Vt())},diagnostics(){const nt=a.getContext(),pt=nt.getExtension("WEBGL_debug_renderer_info");return{engine:"Three.js WebGL2",renderer:pt?nt.getParameter(pt.UNMASKED_RENDERER_WEBGL):nt.getParameter(nt.RENDERER),camera:Pt(),roofs:_.roofs.map(ht=>({place:ht.userData.place,visible:ht.visible,position:ht.position.toArray()})),calls:a.info.render.calls,triangles:a.info.render.triangles,geometries:a.info.memory.geometries,places:Object.keys(Us),imagePlanes:0,videoPlanes:0}},dispose(){W=!0,cancelAnimationFrame(N),mt.abort(),c.dispose(),Ot.disconnect(),te.disconnect(),Tt();const nt=new Set,pt=new Set,ht=new Set;l.traverse(ct=>{ct.geometry&&nt.add(ct.geometry);for(const Xt of Array.isArray(ct.material)?ct.material:ct.material?[ct.material]:[]){pt.add(Xt);for(const rt of Object.values(Xt))rt?.isTexture&&ht.add(rt)}});for(const ct of nt)ct.dispose();for(const ct of pt)ct.dispose();for(const ct of ht)ct.dispose();T.dispose(),a.dispose(),h.remove(),u.remove(),p.remove(),i.classList.remove("reference-campus","scene-ready"),delete i.serenity}};return i.serenity=U,it(),a.shadowMap.needsUpdate=!0,$t(),i.classList.add("scene-ready"),U}export{Lm as createCampus,Pm as focusCamera,li as overviewCamera};
