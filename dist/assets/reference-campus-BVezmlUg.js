import{t as zo}from"./index-p_1RIUsj.js";const ho="180",ui={ROTATE:0,DOLLY:1,PAN:2},Sn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fl=0,ko=1,Ol=2,Za=1,Ka=2,cn=3,Tn=0,Te=1,je=2,En=0,di=1,Ho=2,Vo=3,Go=4,Bl=5,Nn=100,zl=101,kl=102,Hl=103,Vl=104,Gl=200,Wl=201,Xl=202,Yl=203,vr=204,Mr=205,ql=206,jl=207,Zl=208,Kl=209,$l=210,Jl=211,Ql=212,tc=213,ec=214,Sr=0,Er=1,yr=2,pi=3,Tr=4,br=5,Ar=6,wr=7,uo=0,nc=1,ic=2,yn=0,sc=1,rc=2,oc=3,$a=4,ac=5,lc=6,cc=7,Ja=300,mi=301,_i=302,Rr=303,Cr=304,Is=306,Es=1e3,On=1001,Pr=1002,Ue=1003,hc=1004,Yi=1005,Ze=1006,zs=1007,Bn=1008,Qe=1009,Qa=1010,tl=1011,Oi=1012,fo=1013,zn=1014,Ke=1015,Gi=1016,po=1017,mo=1018,Bi=1020,el=35902,nl=35899,il=1021,sl=1022,Be=1023,zi=1026,ki=1027,_o=1028,go=1029,rl=1030,xo=1031,vo=1033,gs=33776,xs=33777,vs=33778,Ms=33779,Dr=35840,Lr=35841,Ir=35842,Ur=35843,Nr=36196,Fr=37492,Or=37496,Br=37808,zr=37809,kr=37810,Hr=37811,Vr=37812,Gr=37813,Wr=37814,Xr=37815,Yr=37816,qr=37817,jr=37818,Zr=37819,Kr=37820,$r=37821,Jr=36492,Qr=36494,to=36495,eo=36283,no=36284,io=36285,so=36286,uc=3200,dc=3201,Mo=0,fc=1,vn="",Re="srgb",gi="srgb-linear",ys="linear",Jt="srgb",Yn=7680,Wo=519,pc=512,mc=513,_c=514,ol=515,gc=516,xc=517,vc=518,Mc=519,Xo=35044,Yo="300 es",$e=2e3,Ts=2001;class Vn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qo=1234567;const Ui=Math.PI/180,Hi=180/Math.PI;function Mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function So(i,t){return(i%t+t)%t}function Sc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ec(i,t,e){return i!==t?(e-i)/(t-i):0}function Ni(i,t,e){return(1-e)*i+e*t}function yc(i,t,e,n){return Ni(i,t,1-Math.exp(-e*n))}function Tc(i,t=1){return t-Math.abs(So(i,t*2)-t)}function bc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ac(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function wc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Rc(i,t){return i+Math.random()*(t-i)}function Cc(i){return i*(.5-Math.random())}function Pc(i){i!==void 0&&(qo=i);let t=qo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Dc(i){return i*Ui}function Lc(i){return i*Hi}function Ic(i){return(i&i-1)===0&&i!==0}function Uc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fc(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),h=a(e/2),c=r((t+n)/2),d=a((t+n)/2),u=r((t-n)/2),p=a((t-n)/2),g=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*d,h*u,h*p,o*c);break;case"YZY":i.set(h*p,o*d,h*u,o*c);break;case"ZXZ":i.set(h*u,h*p,o*d,o*c);break;case"XZX":i.set(o*d,h*x,h*g,o*c);break;case"YXY":i.set(h*g,o*d,h*x,o*c);break;case"ZYZ":i.set(h*x,h*g,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ci(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Mn={DEG2RAD:Ui,RAD2DEG:Hi,generateUUID:Mi,clamp:Wt,euclideanModulo:So,mapLinear:Sc,inverseLerp:Ec,lerp:Ni,damp:yc,pingpong:Tc,smoothstep:bc,smootherstep:Ac,randInt:wc,randFloat:Rc,randFloatSpread:Cc,seededRandom:Pc,degToRad:Dc,radToDeg:Lc,isPowerOfTwo:Ic,ceilPowerOfTwo:Uc,floorPowerOfTwo:Nc,setQuaternionFromProperEuler:Fc,normalize:Ee,denormalize:ci};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let h=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3];const p=r[a+0],g=r[a+1],x=r[a+2],m=r[a+3];if(o===0){t[e+0]=h,t[e+1]=c,t[e+2]=d,t[e+3]=u;return}if(o===1){t[e+0]=p,t[e+1]=g,t[e+2]=x,t[e+3]=m;return}if(u!==m||h!==p||c!==g||d!==x){let _=1-o;const l=h*p+c*g+d*x+u*m,w=l>=0?1:-1,A=1-l*l;if(A>Number.EPSILON){const I=Math.sqrt(A),L=Math.atan2(I,l*w);_=Math.sin(_*L)/I,o=Math.sin(o*L)/I}const b=o*w;if(h=h*_+p*b,c=c*_+g*b,d=d*_+x*b,u=u*_+m*b,_===1-o){const I=1/Math.sqrt(h*h+c*c+d*d+u*u);h*=I,c*=I,d*=I,u*=I}}t[e]=h,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],h=n[s+1],c=n[s+2],d=n[s+3],u=r[a],p=r[a+1],g=r[a+2],x=r[a+3];return t[e]=o*x+d*u+h*g-c*p,t[e+1]=h*x+d*p+c*u-o*g,t[e+2]=c*x+d*g+o*p-h*u,t[e+3]=d*x-o*u-h*p-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,h=Math.sin,c=o(n/2),d=o(s/2),u=o(r/2),p=h(n/2),g=h(s/2),x=h(r/2);switch(a){case"XYZ":this._x=p*d*u+c*g*x,this._y=c*g*u-p*d*x,this._z=c*d*x+p*g*u,this._w=c*d*u-p*g*x;break;case"YXZ":this._x=p*d*u+c*g*x,this._y=c*g*u-p*d*x,this._z=c*d*x-p*g*u,this._w=c*d*u+p*g*x;break;case"ZXY":this._x=p*d*u-c*g*x,this._y=c*g*u+p*d*x,this._z=c*d*x+p*g*u,this._w=c*d*u-p*g*x;break;case"ZYX":this._x=p*d*u-c*g*x,this._y=c*g*u+p*d*x,this._z=c*d*x-p*g*u,this._w=c*d*u+p*g*x;break;case"YZX":this._x=p*d*u+c*g*x,this._y=c*g*u+p*d*x,this._z=c*d*x-p*g*u,this._w=c*d*u-p*g*x;break;case"XZY":this._x=p*d*u-c*g*x,this._y=c*g*u-p*d*x,this._z=c*d*x+p*g*u,this._w=c*d*u+p*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],h=e[9],c=e[2],d=e[6],u=e[10],p=n+o+u;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(d-h)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>u){const g=2*Math.sqrt(1+n-o-u);this._w=(d-h)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>u){const g=2*Math.sqrt(1+o-n-u);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(h+d)/g}else{const g=2*Math.sqrt(1+u-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(h+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,h=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+s*c-r*h,this._y=s*d+a*h+r*o-n*c,this._z=r*d+a*c+n*h-s*o,this._w=a*d-n*o-s*h-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const h=1-o*o;if(h<=Number.EPSILON){const g=1-e;return this._w=g*a+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}const c=Math.sqrt(h),d=Math.atan2(c,o),u=Math.sin((1-e)*d)/c,p=Math.sin(e*d)/c;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,h=t.w,c=2*(a*s-o*n),d=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+h*c+a*u-o*d,this.y=n+h*d+o*c-r*u,this.z=s+h*u+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,h=e.z;return this.x=s*h-r*o,this.y=r*a-n*h,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ks.copy(this).projectOnVector(t),this.sub(ks)}reflect(t){return this.sub(ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ks=new F,jo=new kn;class Vt{constructor(t,e,n,s,r,a,o,h,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,c)}set(t,e,n,s,r,a,o,h,c){const d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=h,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],h=n[6],c=n[1],d=n[4],u=n[7],p=n[2],g=n[5],x=n[8],m=s[0],_=s[3],l=s[6],w=s[1],A=s[4],b=s[7],I=s[2],L=s[5],N=s[8];return r[0]=a*m+o*w+h*I,r[3]=a*_+o*A+h*L,r[6]=a*l+o*b+h*N,r[1]=c*m+d*w+u*I,r[4]=c*_+d*A+u*L,r[7]=c*l+d*b+u*N,r[2]=p*m+g*w+x*I,r[5]=p*_+g*A+x*L,r[8]=p*l+g*b+x*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*r*d+n*o*h+s*r*c-s*a*h}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],c=t[7],d=t[8],u=d*a-o*c,p=o*h-d*r,g=c*r-a*h,x=e*u+n*p+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/x;return t[0]=u*m,t[1]=(s*c-d*n)*m,t[2]=(o*n-s*a)*m,t[3]=p*m,t[4]=(d*e-s*h)*m,t[5]=(s*r-o*e)*m,t[6]=g*m,t[7]=(n*h-c*e)*m,t[8]=(a*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const h=Math.cos(r),c=Math.sin(r);return this.set(n*h,n*c,-n*(h*a+c*o)+a+t,-s*c,s*h,-s*(-c*a+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Hs.makeScale(t,e)),this}rotate(t){return this.premultiply(Hs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hs=new Vt;function al(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oc(){const i=bs("canvas");return i.style.display="block",i}const Zo={};function Vi(i){i in Zo||(Zo[i]=!0,console.warn(i))}function Bc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ko=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$o=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zc(){const i={enabled:!0,workingColorSpace:gi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Jt&&(s.r=un(s.r),s.g=un(s.g),s.b=un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vn?ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gi]:{primaries:t,whitePoint:n,transfer:ys,toXYZ:Ko,fromXYZ:$o,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:Ko,fromXYZ:$o,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),i}const jt=zc();function un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qn;class kc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qn===void 0&&(qn=bs("canvas")),qn.width=t.width,qn.height=t.height;const s=qn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=qn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=un(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(un(e[n]/255)*255):e[n]=un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hc=0;class Eo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vs(s[a].image)):r.push(Vs(s[a]))}else r=Vs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Vs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vc=0;const Gs=new F;class be extends Vn{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=On,s=On,r=Ze,a=Bn,o=Be,h=Qe,c=be.DEFAULT_ANISOTROPY,d=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=Mi(),this.name="",this.source=new Eo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gs).x}get height(){return this.source.getSize(Gs).y}get depth(){return this.source.getSize(Gs).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ja)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Es:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case Pr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Es:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case Pr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=Ja;be.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,n=0,s=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const h=t.elements,c=h[0],d=h[4],u=h[8],p=h[1],g=h[5],x=h[9],m=h[2],_=h[6],l=h[10];if(Math.abs(d-p)<.01&&Math.abs(u-m)<.01&&Math.abs(x-_)<.01){if(Math.abs(d+p)<.1&&Math.abs(u+m)<.1&&Math.abs(x+_)<.1&&Math.abs(c+g+l-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,b=(g+1)/2,I=(l+1)/2,L=(d+p)/4,N=(u+m)/4,z=(x+_)/4;return A>b&&A>I?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=L/n,r=N/n):b>I?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=L/s,r=z/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=N/r,s=z/r),this.set(n,s,r,e),this}let w=Math.sqrt((_-x)*(_-x)+(u-m)*(u-m)+(p-d)*(p-d));return Math.abs(w)<.001&&(w=1),this.x=(_-x)/w,this.y=(u-m)/w,this.z=(p-d)/w,this.w=Math.acos((c+g+l-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gc extends Vn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new be(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Eo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends Gc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ll extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wc extends be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Je{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ke):ke.fromBufferAttribute(r,a),ke.applyMatrix4(t.matrixWorld),this.expandByPoint(ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qi.copy(n.boundingBox)),qi.applyMatrix4(t.matrixWorld),this.union(qi)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bi),ji.subVectors(this.max,bi),jn.subVectors(t.a,bi),Zn.subVectors(t.b,bi),Kn.subVectors(t.c,bi),dn.subVectors(Zn,jn),fn.subVectors(Kn,Zn),Rn.subVectors(jn,Kn);let e=[0,-dn.z,dn.y,0,-fn.z,fn.y,0,-Rn.z,Rn.y,dn.z,0,-dn.x,fn.z,0,-fn.x,Rn.z,0,-Rn.x,-dn.y,dn.x,0,-fn.y,fn.x,0,-Rn.y,Rn.x,0];return!Ws(e,jn,Zn,Kn,ji)||(e=[1,0,0,0,1,0,0,0,1],!Ws(e,jn,Zn,Kn,ji))?!1:(Zi.crossVectors(dn,fn),e=[Zi.x,Zi.y,Zi.z],Ws(e,jn,Zn,Kn,ji))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const en=[new F,new F,new F,new F,new F,new F,new F,new F],ke=new F,qi=new Je,jn=new F,Zn=new F,Kn=new F,dn=new F,fn=new F,Rn=new F,bi=new F,ji=new F,Zi=new F,Cn=new F;function Ws(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Cn.fromArray(i,r);const o=s.x*Math.abs(Cn.x)+s.y*Math.abs(Cn.y)+s.z*Math.abs(Cn.z),h=t.dot(Cn),c=e.dot(Cn),d=n.dot(Cn);if(Math.max(-Math.max(h,c,d),Math.min(h,c,d))>o)return!1}return!0}const Xc=new Je,Ai=new F,Xs=new F;class Si{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ai.subVectors(t,this.center);const e=Ai.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ai,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ai.copy(t.center).add(Xs)),this.expandByPoint(Ai.copy(t.center).sub(Xs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const nn=new F,Ys=new F,Ki=new F,pn=new F,qs=new F,$i=new F,js=new F;class Us{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.origin).addScaledVector(this.direction,e),nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ys.copy(t).add(e).multiplyScalar(.5),Ki.copy(e).sub(t).normalize(),pn.copy(this.origin).sub(Ys);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ki),o=pn.dot(this.direction),h=-pn.dot(Ki),c=pn.lengthSq(),d=Math.abs(1-a*a);let u,p,g,x;if(d>0)if(u=a*h-o,p=a*o-h,x=r*d,u>=0)if(p>=-x)if(p<=x){const m=1/d;u*=m,p*=m,g=u*(u+a*p+2*o)+p*(a*u+p+2*h)+c}else p=r,u=Math.max(0,-(a*p+o)),g=-u*u+p*(p+2*h)+c;else p=-r,u=Math.max(0,-(a*p+o)),g=-u*u+p*(p+2*h)+c;else p<=-x?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-h),r),g=-u*u+p*(p+2*h)+c):p<=x?(u=0,p=Math.min(Math.max(-r,-h),r),g=p*(p+2*h)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-h),r),g=-u*u+p*(p+2*h)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),g=-u*u+p*(p+2*h)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ys).addScaledVector(Ki,p),g}intersectSphere(t,e){nn.subVectors(t.center,this.origin);const n=nn.dot(this.direction),s=nn.dot(nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,h;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),d>=0?(r=(t.min.y-p.y)*d,a=(t.max.y-p.y)*d):(r=(t.max.y-p.y)*d,a=(t.min.y-p.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-p.z)*u,h=(t.max.z-p.z)*u):(o=(t.max.z-p.z)*u,h=(t.min.z-p.z)*u),n>h||o>s)||((o>n||n!==n)&&(n=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,n,s,r){qs.subVectors(e,t),$i.subVectors(n,t),js.crossVectors(qs,$i);let a=this.direction.dot(js),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pn.subVectors(this.origin,t);const h=o*this.direction.dot($i.crossVectors(pn,$i));if(h<0)return null;const c=o*this.direction.dot(qs.cross(pn));if(c<0||h+c>a)return null;const d=-o*pn.dot(js);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,a,o,h,c,d,u,p,g,x,m,_){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,c,d,u,p,g,x,m,_)}set(t,e,n,s,r,a,o,h,c,d,u,p,g,x,m,_){const l=this.elements;return l[0]=t,l[4]=e,l[8]=n,l[12]=s,l[1]=r,l[5]=a,l[9]=o,l[13]=h,l[2]=c,l[6]=d,l[10]=u,l[14]=p,l[3]=g,l[7]=x,l[11]=m,l[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/$n.setFromMatrixColumn(t,0).length(),r=1/$n.setFromMatrixColumn(t,1).length(),a=1/$n.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const p=a*d,g=a*u,x=o*d,m=o*u;e[0]=h*d,e[4]=-h*u,e[8]=c,e[1]=g+x*c,e[5]=p-m*c,e[9]=-o*h,e[2]=m-p*c,e[6]=x+g*c,e[10]=a*h}else if(t.order==="YXZ"){const p=h*d,g=h*u,x=c*d,m=c*u;e[0]=p+m*o,e[4]=x*o-g,e[8]=a*c,e[1]=a*u,e[5]=a*d,e[9]=-o,e[2]=g*o-x,e[6]=m+p*o,e[10]=a*h}else if(t.order==="ZXY"){const p=h*d,g=h*u,x=c*d,m=c*u;e[0]=p-m*o,e[4]=-a*u,e[8]=x+g*o,e[1]=g+x*o,e[5]=a*d,e[9]=m-p*o,e[2]=-a*c,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){const p=a*d,g=a*u,x=o*d,m=o*u;e[0]=h*d,e[4]=x*c-g,e[8]=p*c+m,e[1]=h*u,e[5]=m*c+p,e[9]=g*c-x,e[2]=-c,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){const p=a*h,g=a*c,x=o*h,m=o*c;e[0]=h*d,e[4]=m-p*u,e[8]=x*u+g,e[1]=u,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=g*u+x,e[10]=p-m*u}else if(t.order==="XZY"){const p=a*h,g=a*c,x=o*h,m=o*c;e[0]=h*d,e[4]=-u,e[8]=c*d,e[1]=p*u+m,e[5]=a*d,e[9]=g*u-x,e[2]=x*u-g,e[6]=o*d,e[10]=m*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yc,t,qc)}lookAt(t,e,n){const s=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),mn.crossVectors(n,De),mn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),mn.crossVectors(n,De)),mn.normalize(),Ji.crossVectors(De,mn),s[0]=mn.x,s[4]=Ji.x,s[8]=De.x,s[1]=mn.y,s[5]=Ji.y,s[9]=De.y,s[2]=mn.z,s[6]=Ji.z,s[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],h=n[8],c=n[12],d=n[1],u=n[5],p=n[9],g=n[13],x=n[2],m=n[6],_=n[10],l=n[14],w=n[3],A=n[7],b=n[11],I=n[15],L=s[0],N=s[4],z=s[8],T=s[12],E=s[1],O=s[5],G=s[9],q=s[13],Q=s[2],tt=s[6],K=s[10],pt=s[14],J=s[3],gt=s[7],vt=s[11],Tt=s[15];return r[0]=a*L+o*E+h*Q+c*J,r[4]=a*N+o*O+h*tt+c*gt,r[8]=a*z+o*G+h*K+c*vt,r[12]=a*T+o*q+h*pt+c*Tt,r[1]=d*L+u*E+p*Q+g*J,r[5]=d*N+u*O+p*tt+g*gt,r[9]=d*z+u*G+p*K+g*vt,r[13]=d*T+u*q+p*pt+g*Tt,r[2]=x*L+m*E+_*Q+l*J,r[6]=x*N+m*O+_*tt+l*gt,r[10]=x*z+m*G+_*K+l*vt,r[14]=x*T+m*q+_*pt+l*Tt,r[3]=w*L+A*E+b*Q+I*J,r[7]=w*N+A*O+b*tt+I*gt,r[11]=w*z+A*G+b*K+I*vt,r[15]=w*T+A*q+b*pt+I*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],h=t[9],c=t[13],d=t[2],u=t[6],p=t[10],g=t[14],x=t[3],m=t[7],_=t[11],l=t[15];return x*(+r*h*u-s*c*u-r*o*p+n*c*p+s*o*g-n*h*g)+m*(+e*h*g-e*c*p+r*a*p-s*a*g+s*c*d-r*h*d)+_*(+e*c*u-e*o*g-r*a*u+n*a*g+r*o*d-n*c*d)+l*(-s*o*d-e*h*u+e*o*p+s*a*u-n*a*p+n*h*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],c=t[7],d=t[8],u=t[9],p=t[10],g=t[11],x=t[12],m=t[13],_=t[14],l=t[15],w=u*_*c-m*p*c+m*h*g-o*_*g-u*h*l+o*p*l,A=x*p*c-d*_*c-x*h*g+a*_*g+d*h*l-a*p*l,b=d*m*c-x*u*c+x*o*g-a*m*g-d*o*l+a*u*l,I=x*u*h-d*m*h-x*o*p+a*m*p+d*o*_-a*u*_,L=e*w+n*A+s*b+r*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/L;return t[0]=w*N,t[1]=(m*p*r-u*_*r-m*s*g+n*_*g+u*s*l-n*p*l)*N,t[2]=(o*_*r-m*h*r+m*s*c-n*_*c-o*s*l+n*h*l)*N,t[3]=(u*h*r-o*p*r-u*s*c+n*p*c+o*s*g-n*h*g)*N,t[4]=A*N,t[5]=(d*_*r-x*p*r+x*s*g-e*_*g-d*s*l+e*p*l)*N,t[6]=(x*h*r-a*_*r-x*s*c+e*_*c+a*s*l-e*h*l)*N,t[7]=(a*p*r-d*h*r+d*s*c-e*p*c-a*s*g+e*h*g)*N,t[8]=b*N,t[9]=(x*u*r-d*m*r-x*n*g+e*m*g+d*n*l-e*u*l)*N,t[10]=(a*m*r-x*o*r+x*n*c-e*m*c-a*n*l+e*o*l)*N,t[11]=(d*o*r-a*u*r-d*n*c+e*u*c+a*n*g-e*o*g)*N,t[12]=I*N,t[13]=(d*m*s-x*u*s+x*n*p-e*m*p-d*n*_+e*u*_)*N,t[14]=(x*o*s-a*m*s-x*n*h+e*m*h+a*n*_-e*o*_)*N,t[15]=(a*u*s-d*o*s+d*n*h-e*u*h-a*n*p+e*o*p)*N,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,h=t.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*h,c*h+s*o,0,c*o+s*h,d*o+n,d*h-s*a,0,c*h-s*o,d*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,h=e._w,c=r+r,d=a+a,u=o+o,p=r*c,g=r*d,x=r*u,m=a*d,_=a*u,l=o*u,w=h*c,A=h*d,b=h*u,I=n.x,L=n.y,N=n.z;return s[0]=(1-(m+l))*I,s[1]=(g+b)*I,s[2]=(x-A)*I,s[3]=0,s[4]=(g-b)*L,s[5]=(1-(p+l))*L,s[6]=(_+w)*L,s[7]=0,s[8]=(x+A)*N,s[9]=(_-w)*N,s[10]=(1-(p+m))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=$n.set(s[0],s[1],s[2]).length();const a=$n.set(s[4],s[5],s[6]).length(),o=$n.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],He.copy(this);const c=1/r,d=1/a,u=1/o;return He.elements[0]*=c,He.elements[1]*=c,He.elements[2]*=c,He.elements[4]*=d,He.elements[5]*=d,He.elements[6]*=d,He.elements[8]*=u,He.elements[9]*=u,He.elements[10]*=u,e.setFromRotationMatrix(He),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=$e,h=!1){const c=this.elements,d=2*r/(e-t),u=2*r/(n-s),p=(e+t)/(e-t),g=(n+s)/(n-s);let x,m;if(h)x=r/(a-r),m=a*r/(a-r);else if(o===$e)x=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ts)x=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=$e,h=!1){const c=this.elements,d=2/(e-t),u=2/(n-s),p=-(e+t)/(e-t),g=-(n+s)/(n-s);let x,m;if(h)x=1/(a-r),m=a/(a-r);else if(o===$e)x=-2/(a-r),m=-(a+r)/(a-r);else if(o===Ts)x=-1/(a-r),m=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $n=new F,He=new se,Yc=new F(0,0,0),qc=new F(1,1,1),mn=new F,Ji=new F,De=new F,Jo=new se,Qo=new kn;class We{constructor(t=0,e=0,n=0,s=We.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],h=s[1],c=s[5],d=s[9],u=s[2],p=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(h,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qo.setFromEuler(this),this.setFromQuaternion(Qo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}We.DEFAULT_ORDER="XYZ";class yo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jc=0;const ta=new F,Jn=new kn,sn=new se,Qi=new F,wi=new F,Zc=new F,Kc=new kn,ea=new F(1,0,0),na=new F(0,1,0),ia=new F(0,0,1),sa={type:"added"},$c={type:"removed"},Qn={type:"childadded",child:null},Zs={type:"childremoved",child:null};class pe extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new F,e=new We,n=new kn,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Vt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.premultiply(Jn),this}rotateX(t){return this.rotateOnAxis(ea,t)}rotateY(t){return this.rotateOnAxis(na,t)}rotateZ(t){return this.rotateOnAxis(ia,t)}translateOnAxis(t,e){return ta.copy(t).applyQuaternion(this.quaternion),this.position.add(ta.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ea,t)}translateY(t){return this.translateOnAxis(na,t)}translateZ(t){return this.translateOnAxis(ia,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qi.copy(t):Qi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(wi,Qi,this.up):sn.lookAt(Qi,wi,this.up),this.quaternion.setFromRotationMatrix(sn),s&&(sn.extractRotation(s.matrixWorld),Jn.setFromRotationMatrix(sn),this.quaternion.premultiply(Jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sa),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($c),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sa),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,t,Zc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Kc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let c=0,d=h.length;c<d;c++){const u=h[c];r(t.shapes,u)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,c=this.material.length;h<c;h++)o.push(r(t.materials,this.material[h]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];s.animations.push(r(t.animations,h))}}if(e){const o=a(t.geometries),h=a(t.materials),c=a(t.textures),d=a(t.images),u=a(t.shapes),p=a(t.skeletons),g=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const h=[];for(const c in o){const d=o[c];delete d.metadata,h.push(d)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}pe.DEFAULT_UP=new F(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ve=new F,rn=new F,Ks=new F,on=new F,ti=new F,ei=new F,ra=new F,$s=new F,Js=new F,Qs=new F,tr=new te,er=new te,nr=new te;class Ge{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ve.subVectors(t,e),s.cross(Ve);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ve.subVectors(s,e),rn.subVectors(n,e),Ks.subVectors(t,e);const a=Ve.dot(Ve),o=Ve.dot(rn),h=Ve.dot(Ks),c=rn.dot(rn),d=rn.dot(Ks),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const p=1/u,g=(c*h-o*d)*p,x=(a*d-o*h)*p;return r.set(1-g-x,x,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(t,e,n,s,r,a,o,h){return this.getBarycoord(t,e,n,s,on)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,on.x),h.addScaledVector(a,on.y),h.addScaledVector(o,on.z),h)}static getInterpolatedAttribute(t,e,n,s,r,a){return tr.setScalar(0),er.setScalar(0),nr.setScalar(0),tr.fromBufferAttribute(t,e),er.fromBufferAttribute(t,n),nr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(tr,r.x),a.addScaledVector(er,r.y),a.addScaledVector(nr,r.z),a}static isFrontFacing(t,e,n,s){return Ve.subVectors(n,e),rn.subVectors(t,e),Ve.cross(rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ve.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Ve.cross(rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ge.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ge.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ge.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ge.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ge.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ti.subVectors(s,n),ei.subVectors(r,n),$s.subVectors(t,n);const h=ti.dot($s),c=ei.dot($s);if(h<=0&&c<=0)return e.copy(n);Js.subVectors(t,s);const d=ti.dot(Js),u=ei.dot(Js);if(d>=0&&u<=d)return e.copy(s);const p=h*u-d*c;if(p<=0&&h>=0&&d<=0)return a=h/(h-d),e.copy(n).addScaledVector(ti,a);Qs.subVectors(t,r);const g=ti.dot(Qs),x=ei.dot(Qs);if(x>=0&&g<=x)return e.copy(r);const m=g*c-h*x;if(m<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(ei,o);const _=d*x-g*u;if(_<=0&&u-d>=0&&g-x>=0)return ra.subVectors(r,s),o=(u-d)/(u-d+(g-x)),e.copy(s).addScaledVector(ra,o);const l=1/(_+m+p);return a=m*l,o=p*l,e.copy(n).addScaledVector(ti,a).addScaledVector(ei,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},ts={h:0,s:0,l:0};function ir(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=So(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ir(a,r,t+1/3),this.g=ir(a,r,t),this.b=ir(a,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const n=cl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=un(t.r),this.g=un(t.g),this.b=un(t.b),this}copyLinearToSRGB(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return jt.workingToColorSpace(Me.copy(this),t),Math.round(Wt(Me.r*255,0,255))*65536+Math.round(Wt(Me.g*255,0,255))*256+Math.round(Wt(Me.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Me.copy(this),e);const n=Me.r,s=Me.g,r=Me.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let h,c;const d=(o+a)/2;if(o===a)h=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:h=(s-r)/u+(s<r?6:0);break;case s:h=(r-n)/u+2;break;case r:h=(n-s)/u+4;break}h/=6}return t.h=h,t.s=c,t.l=d,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Re){jt.workingToColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,s=Me.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_n),this.setHSL(_n.h+t,_n.s+e,_n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_n),t.getHSL(ts);const n=Ni(_n.h,ts.h,e),s=Ni(_n.s,ts.s,e),r=Ni(_n.l,ts.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new kt;kt.NAMES=cl;let Jc=0;class Gn extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=di,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vr,this.blendDst=Mr,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vr&&(n.blendSrc=this.blendSrc),this.blendDst!==Mr&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const h=r[o];delete h.metadata,a.push(h)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ns extends Gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new F,es=new Lt;let Qc=0;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xo,this.updateRanges=[],this.gpuType=Ke,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)es.fromBufferAttribute(this,e),es.applyMatrix3(t),this.setXY(e,es.x,es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xo&&(t.usage=this.usage),t}}class hl extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ul extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let th=0;const Oe=new se,sr=new pe,ni=new F,Le=new Je,Ri=new Je,ge=new F;class xe extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(al(t)?ul:hl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oe.makeRotationFromQuaternion(t),this.applyMatrix4(Oe),this}rotateX(t){return Oe.makeRotationX(t),this.applyMatrix4(Oe),this}rotateY(t){return Oe.makeRotationY(t),this.applyMatrix4(Oe),this}rotateZ(t){return Oe.makeRotationZ(t),this.applyMatrix4(Oe),this}translate(t,e,n){return Oe.makeTranslation(t,e,n),this.applyMatrix4(Oe),this}scale(t,e,n){return Oe.makeScale(t,e,n),this.applyMatrix4(Oe),this}lookAt(t){return sr.lookAt(t),sr.updateMatrix(),this.applyMatrix4(sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Je);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Le.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ri.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Le.min,Ri.min),Le.expandByPoint(ge),ge.addVectors(Le.max,Ri.max),Le.expandByPoint(ge)):(Le.expandByPoint(Ri.min),Le.expandByPoint(Ri.max))}Le.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ge));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],h=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)ge.fromBufferAttribute(o,c),h&&(ni.fromBufferAttribute(t,c),ge.add(ni)),s=Math.max(s,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],h=[];for(let z=0;z<n.count;z++)o[z]=new F,h[z]=new F;const c=new F,d=new F,u=new F,p=new Lt,g=new Lt,x=new Lt,m=new F,_=new F;function l(z,T,E){c.fromBufferAttribute(n,z),d.fromBufferAttribute(n,T),u.fromBufferAttribute(n,E),p.fromBufferAttribute(r,z),g.fromBufferAttribute(r,T),x.fromBufferAttribute(r,E),d.sub(c),u.sub(c),g.sub(p),x.sub(p);const O=1/(g.x*x.y-x.x*g.y);isFinite(O)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(u,-g.y).multiplyScalar(O),_.copy(u).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(O),o[z].add(m),o[T].add(m),o[E].add(m),h[z].add(_),h[T].add(_),h[E].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let z=0,T=w.length;z<T;++z){const E=w[z],O=E.start,G=E.count;for(let q=O,Q=O+G;q<Q;q+=3)l(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const A=new F,b=new F,I=new F,L=new F;function N(z){I.fromBufferAttribute(s,z),L.copy(I);const T=o[z];A.copy(T),A.sub(I.multiplyScalar(I.dot(T))).normalize(),b.crossVectors(L,T);const O=b.dot(h[z])<0?-1:1;a.setXYZW(z,A.x,A.y,A.z,O)}for(let z=0,T=w.length;z<T;++z){const E=w[z],O=E.start,G=E.count;for(let q=O,Q=O+G;q<Q;q+=3)N(t.getX(q+0)),N(t.getX(q+1)),N(t.getX(q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const s=new F,r=new F,a=new F,o=new F,h=new F,c=new F,d=new F,u=new F;if(t)for(let p=0,g=t.count;p<g;p+=3){const x=t.getX(p+0),m=t.getX(p+1),_=t.getX(p+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),a.fromBufferAttribute(e,_),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),o.add(d),h.add(d),c.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(m,h.x,h.y,h.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let p=0,g=e.count;p<g;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,h){const c=o.array,d=o.itemSize,u=o.normalized,p=new c.constructor(h.length*d);let g=0,x=0;for(let m=0,_=h.length;m<_;m++){o.isInterleavedBufferAttribute?g=h[m]*o.data.stride+o.offset:g=h[m]*d;for(let l=0;l<d;l++)p[x++]=c[g++]}return new ze(p,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,s=this.attributes;for(const o in s){const h=s[o],c=t(h,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const h=[],c=r[o];for(let d=0,u=c.length;d<u;d++){const p=c[d],g=t(p,n);h.push(g)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,h=a.length;o<h;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const c in h)h[c]!==void 0&&(t[c]=h[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const c=n[h];t.data.attributes[h]=c.toJSON(t.data)}const s={};let r=!1;for(const h in this.morphAttributes){const c=this.morphAttributes[h],d=[];for(let u=0,p=c.length;u<p;u++){const g=c[u];d.push(g.toJSON(t.data))}d.length>0&&(s[h]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(e))}const r=t.morphAttributes;for(const c in r){const d=[],u=r[c];for(let p=0,g=u.length;p<g;p++)d.push(u[p].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oa=new se,Pn=new Us,ns=new Si,aa=new F,is=new F,ss=new F,rs=new F,rr=new F,os=new F,la=new F,as=new F;class ue extends pe{constructor(t=new xe,e=new Ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){os.set(0,0,0);for(let h=0,c=r.length;h<c;h++){const d=o[h],u=r[h];d!==0&&(rr.fromBufferAttribute(u,t),a?os.addScaledVector(rr,d):os.addScaledVector(rr.sub(e),d))}e.add(os)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(r),Pn.copy(t.ray).recast(t.near),!(ns.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(ns,aa)===null||Pn.origin.distanceToSquared(aa)>(t.far-t.near)**2))&&(oa.copy(r).invert(),Pn.copy(t.ray).applyMatrix4(oa),!(n.boundingBox!==null&&Pn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,p=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,m=p.length;x<m;x++){const _=p[x],l=a[_.materialIndex],w=Math.max(_.start,g.start),A=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let b=w,I=A;b<I;b+=3){const L=o.getX(b),N=o.getX(b+1),z=o.getX(b+2);s=ls(this,l,t,n,c,d,u,L,N,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const x=Math.max(0,g.start),m=Math.min(o.count,g.start+g.count);for(let _=x,l=m;_<l;_+=3){const w=o.getX(_),A=o.getX(_+1),b=o.getX(_+2);s=ls(this,a,t,n,c,d,u,w,A,b),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let x=0,m=p.length;x<m;x++){const _=p[x],l=a[_.materialIndex],w=Math.max(_.start,g.start),A=Math.min(h.count,Math.min(_.start+_.count,g.start+g.count));for(let b=w,I=A;b<I;b+=3){const L=b,N=b+1,z=b+2;s=ls(this,l,t,n,c,d,u,L,N,z),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const x=Math.max(0,g.start),m=Math.min(h.count,g.start+g.count);for(let _=x,l=m;_<l;_+=3){const w=_,A=_+1,b=_+2;s=ls(this,a,t,n,c,d,u,w,A,b),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}}function eh(i,t,e,n,s,r,a,o){let h;if(t.side===Te?h=n.intersectTriangle(a,r,s,!0,o):h=n.intersectTriangle(s,r,a,t.side===Tn,o),h===null)return null;as.copy(o),as.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(as);return c<e.near||c>e.far?null:{distance:c,point:as.clone(),object:i}}function ls(i,t,e,n,s,r,a,o,h,c){i.getVertexPosition(o,is),i.getVertexPosition(h,ss),i.getVertexPosition(c,rs);const d=eh(i,t,e,n,is,ss,rs,la);if(d){const u=new F;Ge.getBarycoord(la,is,ss,rs,u),s&&(d.uv=Ge.getInterpolatedAttribute(s,o,h,c,u,new Lt)),r&&(d.uv1=Ge.getInterpolatedAttribute(r,o,h,c,u,new Lt)),a&&(d.normal=Ge.getInterpolatedAttribute(a,o,h,c,u,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:o,b:h,c,normal:new F,materialIndex:0};Ge.getNormal(is,ss,rs,p.normal),d.face=p,d.barycoord=u}return d}class Wn extends xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const h=[],c=[],d=[],u=[];let p=0,g=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(u,2));function x(m,_,l,w,A,b,I,L,N,z,T){const E=b/N,O=I/z,G=b/2,q=I/2,Q=L/2,tt=N+1,K=z+1;let pt=0,J=0;const gt=new F;for(let vt=0;vt<K;vt++){const Tt=vt*O-q;for(let Ft=0;Ft<tt;Ft++){const Yt=Ft*E-G;gt[m]=Yt*w,gt[_]=Tt*A,gt[l]=Q,c.push(gt.x,gt.y,gt.z),gt[m]=0,gt[_]=0,gt[l]=L>0?1:-1,d.push(gt.x,gt.y,gt.z),u.push(Ft/N),u.push(1-vt/z),pt+=1}}for(let vt=0;vt<z;vt++)for(let Tt=0;Tt<N;Tt++){const Ft=p+Tt+tt*vt,Yt=p+Tt+tt*(vt+1),Rt=p+(Tt+1)+tt*(vt+1),Ot=p+(Tt+1)+tt*vt;h.push(Ft,Yt,Ot),h.push(Yt,Rt,Ot),J+=6}o.addGroup(g,J,T),g+=J,p+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ye(i){const t={};for(let e=0;e<i.length;e++){const n=xi(i[e]);for(const s in n)t[s]=n[s]}return t}function nh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const ih={clone:xi,merge:ye};var sh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sh,this.fragmentShader=rh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xi(t.uniforms),this.uniformsGroups=nh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fl extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=$e,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gn=new F,ca=new Lt,ha=new Lt;class Ie extends fl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ui*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(Ui*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gn.x,gn.y).multiplyScalar(-t/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gn.x,gn.y).multiplyScalar(-t/gn.z)}getViewSize(t,e){return this.getViewBounds(t,ca,ha),e.subVectors(ha,ca)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ui*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*n/c,s*=a.width/h,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ii=-90,si=1;class oh extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ie(ii,si,t,e);s.layers=this.layers,this.add(s);const r=new Ie(ii,si,t,e);r.layers=this.layers,this.add(r);const a=new Ie(ii,si,t,e);a.layers=this.layers,this.add(a);const o=new Ie(ii,si,t,e);o.layers=this.layers,this.add(o);const h=new Ie(ii,si,t,e);h.layers=this.layers,this.add(h);const c=new Ie(ii,si,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,h]=e;for(const c of e)this.remove(c);if(t===$e)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,h,c,d]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,h),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(u,p,g),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class pl extends be{constructor(t=[],e=mi,n,s,r,a,o,h,c,d){super(t,e,n,s,r,a,o,h,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ah extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pl(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wn(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:En});r.uniforms.tEquirect.value=e;const a=new ue(s,r),o=e.minFilter;return e.minFilter===Bn&&(e.minFilter=Ze),new oh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class hn extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lh={type:"move"};class or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,h=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const m of t.hand.values()){const _=e.getJointPose(m,n),l=this._getHandJoint(c,m);_!==null&&(l.matrix.fromArray(_.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,l.jointRadius=_.radius),l.visible=_!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=d.position.distanceTo(u.position),g=.02,x=.005;c.inputState.pinching&&p>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lh)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class To{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new To(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ml extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new We,this.environmentIntensity=1,this.environmentRotation=new We,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _l extends be{constructor(t=null,e=1,n=1,s,r,a,o,h,c=Ue,d=Ue,u,p){super(null,a,o,h,c,d,s,r,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ua extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ri=new se,da=new se,cs=[],fa=new Je,ch=new se,Ci=new ue,Pi=new Si;class gl extends ue{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ua(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ch)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Je),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ri),fa.copy(t.boundingBox).applyMatrix4(ri),this.boundingBox.union(fa)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ri),Pi.copy(t.boundingSphere).applyMatrix4(ri),this.boundingSphere.union(Pi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ci.geometry=this.geometry,Ci.material=this.material,Ci.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pi.copy(this.boundingSphere),Pi.applyMatrix4(n),t.ray.intersectsSphere(Pi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ri),da.multiplyMatrices(n,ri),Ci.matrixWorld=da,Ci.raycast(t,cs);for(let a=0,o=cs.length;a<o;a++){const h=cs[a];h.instanceId=r,h.object=this,e.push(h)}cs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ua(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _l(new Float32Array(s*this.count),s,this.count,_o,Ke));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,h=s*t;r[h]=o,r.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ar=new F,hh=new F,uh=new Vt;class xn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ar.subVectors(n,e).cross(hh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ar),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||uh.getNormalMatrix(t),s=this.coplanarPoint(ar).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new Si,dh=new Lt(.5,.5),hs=new F;class bo{constructor(t=new xn,e=new xn,n=new xn,s=new xn,r=new xn,a=new xn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$e,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],h=r[2],c=r[3],d=r[4],u=r[5],p=r[6],g=r[7],x=r[8],m=r[9],_=r[10],l=r[11],w=r[12],A=r[13],b=r[14],I=r[15];if(s[0].setComponents(c-a,g-d,l-x,I-w).normalize(),s[1].setComponents(c+a,g+d,l+x,I+w).normalize(),s[2].setComponents(c+o,g+u,l+m,I+A).normalize(),s[3].setComponents(c-o,g-u,l-m,I-A).normalize(),n)s[4].setComponents(h,p,_,b).normalize(),s[5].setComponents(c-h,g-p,l-_,I-b).normalize();else if(s[4].setComponents(c-h,g-p,l-_,I-b).normalize(),e===$e)s[5].setComponents(c+h,g+p,l+_,I+b).normalize();else if(e===Ts)s[5].setComponents(h,p,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){Dn.center.set(0,0,0);const e=dh.distanceTo(t.center);return Dn.radius=.7071067811865476+e,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(hs.x=s.normal.x>0?t.max.x:t.min.x,hs.y=s.normal.y>0?t.max.y:t.min.y,hs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ao extends Gn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const As=new F,ws=new F,pa=new se,Di=new Us,us=new Si,lr=new F,ma=new F;class fh extends pe{constructor(t=new xe,e=new Ao){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)As.fromBufferAttribute(e,s-1),ws.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=As.distanceTo(ws);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(s),us.radius+=r,t.ray.intersectsSphere(us)===!1)return;pa.copy(s).invert(),Di.copy(t.ray).applyMatrix4(pa);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,c=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){const g=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let m=g,_=x-1;m<_;m+=c){const l=d.getX(m),w=d.getX(m+1),A=ds(this,t,Di,h,l,w,m);A&&e.push(A)}if(this.isLineLoop){const m=d.getX(x-1),_=d.getX(g),l=ds(this,t,Di,h,m,_,x-1);l&&e.push(l)}}else{const g=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let m=g,_=x-1;m<_;m+=c){const l=ds(this,t,Di,h,m,m+1,m);l&&e.push(l)}if(this.isLineLoop){const m=ds(this,t,Di,h,x-1,g,x-1);m&&e.push(m)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ds(i,t,e,n,s,r,a){const o=i.geometry.attributes.position;if(As.fromBufferAttribute(o,s),ws.fromBufferAttribute(o,r),e.distanceSqToSegment(As,ws,lr,ma)>n)return;lr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(lr);if(!(c<t.near||c>t.far))return{distance:c,point:ma.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const _a=new F,ga=new F;class xl extends fh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)_a.fromBufferAttribute(e,s),ga.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_a.distanceTo(ga);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vl extends be{constructor(t,e,n=zn,s,r,a,o=Ue,h=Ue,c,d=zi,u=1){if(d!==zi&&d!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:u};super(p,s,r,a,o,h,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Eo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ml extends be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class wo extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],h=[],c=new F,d=new Lt;a.push(0,0,0),o.push(0,0,1),h.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){const g=n+u/e*s;c.x=t*Math.cos(g),c.y=t*Math.sin(g),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[p]/t+1)/2,d.y=(a[p+1]/t+1)/2,h.push(d.x,d.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class vi extends xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:h};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],p=[],g=[];let x=0;const m=[],_=n/2;let l=0;w(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(d),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(p,3)),this.setAttribute("uv",new Zt(g,2));function w(){const b=new F,I=new F;let L=0;const N=(e-t)/n;for(let z=0;z<=r;z++){const T=[],E=z/r,O=E*(e-t)+t;for(let G=0;G<=s;G++){const q=G/s,Q=q*h+o,tt=Math.sin(Q),K=Math.cos(Q);I.x=O*tt,I.y=-E*n+_,I.z=O*K,u.push(I.x,I.y,I.z),b.set(tt,N,K).normalize(),p.push(b.x,b.y,b.z),g.push(q,1-E),T.push(x++)}m.push(T)}for(let z=0;z<s;z++)for(let T=0;T<r;T++){const E=m[T][z],O=m[T+1][z],G=m[T+1][z+1],q=m[T][z+1];(t>0||T!==0)&&(d.push(E,O,q),L+=3),(e>0||T!==r-1)&&(d.push(O,G,q),L+=3)}c.addGroup(l,L,0),l+=L}function A(b){const I=x,L=new Lt,N=new F;let z=0;const T=b===!0?t:e,E=b===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,_*E,0),p.push(0,E,0),g.push(.5,.5),x++;const O=x;for(let G=0;G<=s;G++){const Q=G/s*h+o,tt=Math.cos(Q),K=Math.sin(Q);N.x=T*K,N.y=_*E,N.z=T*tt,u.push(N.x,N.y,N.z),p.push(0,E,0),L.x=tt*.5+.5,L.y=K*.5*E+.5,g.push(L.x,L.y),x++}for(let G=0;G<s;G++){const q=I+G,Q=O+G;b===!0?d.push(Q,Q+1,q):d.push(Q+1,Q,q),z+=3}c.addGroup(l,z,b===!0?1:2),l+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rs extends vi{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Rs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ro extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const A=new F,b=new F,I=new F;for(let L=0;L<e.length;L+=3)g(e[L+0],A),g(e[L+1],b),g(e[L+2],I),h(A,b,I,w)}function h(w,A,b,I){const L=I+1,N=[];for(let z=0;z<=L;z++){N[z]=[];const T=w.clone().lerp(b,z/L),E=A.clone().lerp(b,z/L),O=L-z;for(let G=0;G<=O;G++)G===0&&z===L?N[z][G]=T:N[z][G]=T.clone().lerp(E,G/O)}for(let z=0;z<L;z++)for(let T=0;T<2*(L-z)-1;T++){const E=Math.floor(T/2);T%2===0?(p(N[z][E+1]),p(N[z+1][E]),p(N[z][E])):(p(N[z][E+1]),p(N[z+1][E+1]),p(N[z+1][E]))}}function c(w){const A=new F;for(let b=0;b<r.length;b+=3)A.x=r[b+0],A.y=r[b+1],A.z=r[b+2],A.normalize().multiplyScalar(w),r[b+0]=A.x,r[b+1]=A.y,r[b+2]=A.z}function d(){const w=new F;for(let A=0;A<r.length;A+=3){w.x=r[A+0],w.y=r[A+1],w.z=r[A+2];const b=_(w)/2/Math.PI+.5,I=l(w)/Math.PI+.5;a.push(b,1-I)}x(),u()}function u(){for(let w=0;w<a.length;w+=6){const A=a[w+0],b=a[w+2],I=a[w+4],L=Math.max(A,b,I),N=Math.min(A,b,I);L>.9&&N<.1&&(A<.2&&(a[w+0]+=1),b<.2&&(a[w+2]+=1),I<.2&&(a[w+4]+=1))}}function p(w){r.push(w.x,w.y,w.z)}function g(w,A){const b=w*3;A.x=t[b+0],A.y=t[b+1],A.z=t[b+2]}function x(){const w=new F,A=new F,b=new F,I=new F,L=new Lt,N=new Lt,z=new Lt;for(let T=0,E=0;T<r.length;T+=9,E+=6){w.set(r[T+0],r[T+1],r[T+2]),A.set(r[T+3],r[T+4],r[T+5]),b.set(r[T+6],r[T+7],r[T+8]),L.set(a[E+0],a[E+1]),N.set(a[E+2],a[E+3]),z.set(a[E+4],a[E+5]),I.copy(w).add(A).add(b).divideScalar(3);const O=_(I);m(L,E+0,w,O),m(N,E+2,A,O),m(z,E+4,b,O)}}function m(w,A,b,I){I<0&&w.x===1&&(a[A]=w.x-1),b.x===0&&b.z===0&&(a[A]=I/2/Math.PI+.5)}function _(w){return Math.atan2(w.z,-w.x)}function l(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ro(t.vertices,t.indices,t.radius,t.details)}}class Cs extends Ro{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Cs(t.radius,t.detail)}}class Ei extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),h=Math.floor(s),c=o+1,d=h+1,u=t/o,p=e/h,g=[],x=[],m=[],_=[];for(let l=0;l<d;l++){const w=l*p-a;for(let A=0;A<c;A++){const b=A*u-r;x.push(b,-w,0),m.push(0,0,1),_.push(A/o),_.push(1-l/h)}}for(let l=0;l<h;l++)for(let w=0;w<o;w++){const A=w+c*l,b=w+c*(l+1),I=w+1+c*(l+1),L=w+1+c*l;g.push(A,b,L),g.push(b,I,L)}this.setIndex(g),this.setAttribute("position",new Zt(x,3)),this.setAttribute("normal",new Zt(m,3)),this.setAttribute("uv",new Zt(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ps extends xe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],h=[],c=[],d=[];let u=t;const p=(e-t)/s,g=new F,x=new Lt;for(let m=0;m<=s;m++){for(let _=0;_<=n;_++){const l=r+_/n*a;g.x=u*Math.cos(l),g.y=u*Math.sin(l),h.push(g.x,g.y,g.z),c.push(0,0,1),x.x=(g.x/e+1)/2,x.y=(g.y/e+1)/2,d.push(x.x,x.y)}u+=p}for(let m=0;m<s;m++){const _=m*(n+1);for(let l=0;l<n;l++){const w=l+_,A=w,b=w+n+1,I=w+n+2,L=w+1;o.push(A,b,L),o.push(b,I,L)}}this.setIndex(o),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Co extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],h=[],c=[],d=new F,u=new F,p=new F;for(let g=0;g<=n;g++)for(let x=0;x<=s;x++){const m=x/s*r,_=g/n*Math.PI*2;u.x=(t+e*Math.cos(_))*Math.cos(m),u.y=(t+e*Math.cos(_))*Math.sin(m),u.z=e*Math.sin(_),o.push(u.x,u.y,u.z),d.x=t*Math.cos(m),d.y=t*Math.sin(m),p.subVectors(u,d).normalize(),h.push(p.x,p.y,p.z),c.push(x/s),c.push(g/n)}for(let g=1;g<=n;g++)for(let x=1;x<=s;x++){const m=(s+1)*g+x-1,_=(s+1)*(g-1)+x-1,l=(s+1)*(g-1)+x,w=(s+1)*g+x;a.push(m,_,w),a.push(_,l,w)}this.setIndex(a),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ds extends Gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ph extends Gn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mh extends Gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _h extends Gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Po extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class gh extends Po{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const cr=new se,xa=new F,va=new F;class Sl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xa.setFromMatrixPosition(t.matrixWorld),e.position.copy(xa),va.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(va),e.updateMatrixWorld(),cr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ma=new se,Li=new F,hr=new F;class xh extends Sl{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Li.setFromMatrixPosition(t.matrixWorld),n.position.copy(Li),hr.copy(n.position),hr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(hr),n.updateMatrixWorld(),s.makeTranslation(-Li.x,-Li.y,-Li.z),Ma.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma,n.coordinateSystem,n.reversedDepth)}}class vh extends Po{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class El extends fl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,h=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,h=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Mh extends Sl{constructor(){super(new El(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sh extends Po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new Mh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Eh extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Sa=new se;class yh{constructor(t,e,n=0,s=1/0){this.ray=new Us(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Sa.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sa),this}intersectObject(t,e=!0,n=[]){return ro(t,this,n,e),n.sort(Ea),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ro(t[s],this,n,e);return n.sort(Ea),n}}function Ea(i,t){return i.distance-t.distance}function ro(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ro(r[a],t,e,!0)}}class oo{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Th extends xl{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new xe;r.setIndex(new ze(n,1)),r.setAttribute("position",new Zt(s,3)),super(r,new Ao({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class bh extends Vn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ya(i,t,e,n){const s=Ah(n);switch(e){case il:return i*t;case _o:return i*t/s.components*s.byteLength;case go:return i*t/s.components*s.byteLength;case rl:return i*t*2/s.components*s.byteLength;case xo:return i*t*2/s.components*s.byteLength;case sl:return i*t*3/s.components*s.byteLength;case Be:return i*t*4/s.components*s.byteLength;case vo:return i*t*4/s.components*s.byteLength;case gs:case xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vs:case Ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lr:case Ur:return Math.max(i,16)*Math.max(t,8)/4;case Dr:case Ir:return Math.max(i,8)*Math.max(t,8)/2;case Nr:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case kr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Gr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Kr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $r:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jr:case Qr:case to:return Math.ceil(i/4)*Math.ceil(t/4)*16;case eo:case no:return Math.ceil(i/4)*Math.ceil(t/4)*8;case io:case so:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ah(i){switch(i){case Qe:case Qa:return{byteLength:1,components:1};case Oi:case tl:case Gi:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case zn:case fo:case Ke:return{byteLength:4,components:1};case el:case nl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ho);function yl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wh(i){const t=new WeakMap;function e(o,h){const c=o.array,d=o.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(h,p),i.bufferData(h,c,d),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,h,c){const d=h.array,u=h.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((g,x)=>g.start-x.start);let p=0;for(let g=1;g<u.length;g++){const x=u[p],m=u[g];m.start<=x.start+x.count+1?x.count=Math.max(x.count,m.start+m.count-x.start):(++p,u[p]=m)}u.length=p+1;for(let g=0,x=u.length;g<x;g++){const m=u[g];i.bufferSubData(c,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=t.get(o);h&&(i.deleteBuffer(h.buffer),t.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,h));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,h),c.version=o.version}}return{get:s,remove:r,update:a}}var Rh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ch=`#ifdef USE_ALPHAHASH
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
#endif`,Ph=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uh=`#ifdef USE_AOMAP
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
#endif`,Nh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fh=`#ifdef USE_BATCHING
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
#endif`,Oh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hh=`#ifdef USE_IRIDESCENCE
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
#endif`,Vh=`#ifdef USE_BUMPMAP
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
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$h=`#define PI 3.141592653589793
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
} // validated`,Jh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qh=`vec3 transformedNormal = objectNormal;
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
#endif`,tu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,su="gl_FragColor = linearToOutputTexel( gl_FragColor );",ru=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ou=`#ifdef USE_ENVMAP
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
#endif`,au=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lu=`#ifdef USE_ENVMAP
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
#endif`,cu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hu=`#ifdef USE_ENVMAP
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
#endif`,uu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,du=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mu=`#ifdef USE_GRADIENTMAP
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
}`,_u=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vu=`uniform bool receiveShadow;
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
#endif`,Mu=`#ifdef USE_ENVMAP
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
#endif`,Su=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bu=`PhysicalMaterial material;
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
#endif`,Au=`struct PhysicalMaterial {
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
}`,wu=`
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
#endif`,Ru=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Du=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ou=`#if defined( USE_POINTS_UV )
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
#endif`,Bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ku=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gu=`#ifdef USE_MORPHTARGETS
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
#endif`,Wu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ku=`#ifdef USE_NORMALMAP
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
#endif`,$u=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dd=`float getShadowMask() {
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
}`,fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pd=`#ifdef USE_SKINNING
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
#endif`,md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_d=`#ifdef USE_SKINNING
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
#endif`,gd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Md=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sd=`#ifdef USE_TRANSMISSION
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
#endif`,Ed=`#ifdef USE_TRANSMISSION
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
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ad=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rd=`uniform sampler2D t2D;
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
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ld=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`#include <common>
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
}`,Ud=`#if DEPTH_PACKING == 3200
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
}`,Nd=`#define DISTANCE
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
}`,Fd=`#define DISTANCE
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
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`uniform float scale;
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
}`,kd=`uniform vec3 diffuse;
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
}`,Hd=`#include <common>
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
}`,Vd=`uniform vec3 diffuse;
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
}`,Gd=`#define LAMBERT
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
}`,Wd=`#define LAMBERT
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
}`,Xd=`#define MATCAP
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
}`,Yd=`#define MATCAP
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
}`,qd=`#define NORMAL
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
}`,jd=`#define NORMAL
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
}`,Zd=`#define PHONG
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
}`,Kd=`#define PHONG
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
}`,$d=`#define STANDARD
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
}`,Jd=`#define STANDARD
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
}`,Qd=`#define TOON
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
}`,tf=`#define TOON
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
}`,ef=`uniform float size;
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
}`,nf=`uniform vec3 diffuse;
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
}`,sf=`#include <common>
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
}`,rf=`uniform vec3 color;
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
}`,of=`uniform float rotation;
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
}`,af=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:Rh,alphahash_pars_fragment:Ch,alphamap_fragment:Ph,alphamap_pars_fragment:Dh,alphatest_fragment:Lh,alphatest_pars_fragment:Ih,aomap_fragment:Uh,aomap_pars_fragment:Nh,batching_pars_vertex:Fh,batching_vertex:Oh,begin_vertex:Bh,beginnormal_vertex:zh,bsdfs:kh,iridescence_fragment:Hh,bumpmap_pars_fragment:Vh,clipping_planes_fragment:Gh,clipping_planes_pars_fragment:Wh,clipping_planes_pars_vertex:Xh,clipping_planes_vertex:Yh,color_fragment:qh,color_pars_fragment:jh,color_pars_vertex:Zh,color_vertex:Kh,common:$h,cube_uv_reflection_fragment:Jh,defaultnormal_vertex:Qh,displacementmap_pars_vertex:tu,displacementmap_vertex:eu,emissivemap_fragment:nu,emissivemap_pars_fragment:iu,colorspace_fragment:su,colorspace_pars_fragment:ru,envmap_fragment:ou,envmap_common_pars_fragment:au,envmap_pars_fragment:lu,envmap_pars_vertex:cu,envmap_physical_pars_fragment:Mu,envmap_vertex:hu,fog_vertex:uu,fog_pars_vertex:du,fog_fragment:fu,fog_pars_fragment:pu,gradientmap_pars_fragment:mu,lightmap_pars_fragment:_u,lights_lambert_fragment:gu,lights_lambert_pars_fragment:xu,lights_pars_begin:vu,lights_toon_fragment:Su,lights_toon_pars_fragment:Eu,lights_phong_fragment:yu,lights_phong_pars_fragment:Tu,lights_physical_fragment:bu,lights_physical_pars_fragment:Au,lights_fragment_begin:wu,lights_fragment_maps:Ru,lights_fragment_end:Cu,logdepthbuf_fragment:Pu,logdepthbuf_pars_fragment:Du,logdepthbuf_pars_vertex:Lu,logdepthbuf_vertex:Iu,map_fragment:Uu,map_pars_fragment:Nu,map_particle_fragment:Fu,map_particle_pars_fragment:Ou,metalnessmap_fragment:Bu,metalnessmap_pars_fragment:zu,morphinstance_vertex:ku,morphcolor_vertex:Hu,morphnormal_vertex:Vu,morphtarget_pars_vertex:Gu,morphtarget_vertex:Wu,normal_fragment_begin:Xu,normal_fragment_maps:Yu,normal_pars_fragment:qu,normal_pars_vertex:ju,normal_vertex:Zu,normalmap_pars_fragment:Ku,clearcoat_normal_fragment_begin:$u,clearcoat_normal_fragment_maps:Ju,clearcoat_pars_fragment:Qu,iridescence_pars_fragment:td,opaque_fragment:ed,packing:nd,premultiplied_alpha_fragment:id,project_vertex:sd,dithering_fragment:rd,dithering_pars_fragment:od,roughnessmap_fragment:ad,roughnessmap_pars_fragment:ld,shadowmap_pars_fragment:cd,shadowmap_pars_vertex:hd,shadowmap_vertex:ud,shadowmask_pars_fragment:dd,skinbase_vertex:fd,skinning_pars_vertex:pd,skinning_vertex:md,skinnormal_vertex:_d,specularmap_fragment:gd,specularmap_pars_fragment:xd,tonemapping_fragment:vd,tonemapping_pars_fragment:Md,transmission_fragment:Sd,transmission_pars_fragment:Ed,uv_pars_fragment:yd,uv_pars_vertex:Td,uv_vertex:bd,worldpos_vertex:Ad,background_vert:wd,background_frag:Rd,backgroundCube_vert:Cd,backgroundCube_frag:Pd,cube_vert:Dd,cube_frag:Ld,depth_vert:Id,depth_frag:Ud,distanceRGBA_vert:Nd,distanceRGBA_frag:Fd,equirect_vert:Od,equirect_frag:Bd,linedashed_vert:zd,linedashed_frag:kd,meshbasic_vert:Hd,meshbasic_frag:Vd,meshlambert_vert:Gd,meshlambert_frag:Wd,meshmatcap_vert:Xd,meshmatcap_frag:Yd,meshnormal_vert:qd,meshnormal_frag:jd,meshphong_vert:Zd,meshphong_frag:Kd,meshphysical_vert:$d,meshphysical_frag:Jd,meshtoon_vert:Qd,meshtoon_frag:tf,points_vert:ef,points_frag:nf,shadow_vert:sf,shadow_frag:rf,sprite_vert:of,sprite_frag:af},Mt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},qe={basic:{uniforms:ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:ye([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:ye([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:ye([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:ye([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:ye([Mt.points,Mt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:ye([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:ye([Mt.common,Mt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:ye([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:ye([Mt.sprite,Mt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:ye([Mt.common,Mt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:ye([Mt.lights,Mt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};qe.physical={uniforms:ye([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const fs={r:0,b:0,g:0},Ln=new We,lf=new se;function cf(i,t,e,n,s,r,a){const o=new kt(0);let h=r===!0?0:1,c,d,u=null,p=0,g=null;function x(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?e:t).get(b)),b}function m(A){let b=!1;const I=x(A);I===null?l(o,h):I&&I.isColor&&(l(I,1),b=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(A,b){const I=x(b);I&&(I.isCubeTexture||I.mapping===Is)?(d===void 0&&(d=new ue(new Wn(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:xi(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,N,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Ln.copy(b.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),d.material.uniforms.envMap.value=I,d.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(lf.makeRotationFromEuler(Ln)),d.material.toneMapped=jt.getTransfer(I.colorSpace)!==Jt,(u!==I||p!==I.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,u=I,p=I.version,g=i.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new ue(new Ei(2,2),new bn({name:"BackgroundMaterial",uniforms:xi(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=jt.getTransfer(I.colorSpace)!==Jt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||p!==I.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,u=I,p=I.version,g=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function l(A,b){A.getRGB(fs,dl(i)),n.buffers.color.setClear(fs.r,fs.g,fs.b,b,a)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,b=1){o.set(A),h=b,l(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(A){h=A,l(o,h)},render:m,addToRenderList:_,dispose:w}}function hf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(E,O,G,q,Q){let tt=!1;const K=u(q,G,O);r!==K&&(r=K,c(r.object)),tt=g(E,q,G,Q),tt&&x(E,q,G,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(tt||a)&&(a=!1,b(E,O,G,q),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function h(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function d(E){return i.deleteVertexArray(E)}function u(E,O,G){const q=G.wireframe===!0;let Q=n[E.id];Q===void 0&&(Q={},n[E.id]=Q);let tt=Q[O.id];tt===void 0&&(tt={},Q[O.id]=tt);let K=tt[q];return K===void 0&&(K=p(h()),tt[q]=K),K}function p(E){const O=[],G=[],q=[];for(let Q=0;Q<e;Q++)O[Q]=0,G[Q]=0,q[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:q,object:E,attributes:{},index:null}}function g(E,O,G,q){const Q=r.attributes,tt=O.attributes;let K=0;const pt=G.getAttributes();for(const J in pt)if(pt[J].location>=0){const vt=Q[J];let Tt=tt[J];if(Tt===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(Tt=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(Tt=E.instanceColor)),vt===void 0||vt.attribute!==Tt||Tt&&vt.data!==Tt.data)return!0;K++}return r.attributesNum!==K||r.index!==q}function x(E,O,G,q){const Q={},tt=O.attributes;let K=0;const pt=G.getAttributes();for(const J in pt)if(pt[J].location>=0){let vt=tt[J];vt===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(vt=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(vt=E.instanceColor));const Tt={};Tt.attribute=vt,vt&&vt.data&&(Tt.data=vt.data),Q[J]=Tt,K++}r.attributes=Q,r.attributesNum=K,r.index=q}function m(){const E=r.newAttributes;for(let O=0,G=E.length;O<G;O++)E[O]=0}function _(E){l(E,0)}function l(E,O){const G=r.newAttributes,q=r.enabledAttributes,Q=r.attributeDivisors;G[E]=1,q[E]===0&&(i.enableVertexAttribArray(E),q[E]=1),Q[E]!==O&&(i.vertexAttribDivisor(E,O),Q[E]=O)}function w(){const E=r.newAttributes,O=r.enabledAttributes;for(let G=0,q=O.length;G<q;G++)O[G]!==E[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function A(E,O,G,q,Q,tt,K){K===!0?i.vertexAttribIPointer(E,O,G,Q,tt):i.vertexAttribPointer(E,O,G,q,Q,tt)}function b(E,O,G,q){m();const Q=q.attributes,tt=G.getAttributes(),K=O.defaultAttributeValues;for(const pt in tt){const J=tt[pt];if(J.location>=0){let gt=Q[pt];if(gt===void 0&&(pt==="instanceMatrix"&&E.instanceMatrix&&(gt=E.instanceMatrix),pt==="instanceColor"&&E.instanceColor&&(gt=E.instanceColor)),gt!==void 0){const vt=gt.normalized,Tt=gt.itemSize,Ft=t.get(gt);if(Ft===void 0)continue;const Yt=Ft.buffer,Rt=Ft.type,Ot=Ft.bytesPerElement,et=Rt===i.INT||Rt===i.UNSIGNED_INT||gt.gpuType===fo;if(gt.isInterleavedBufferAttribute){const at=gt.data,Et=at.stride,Pt=gt.offset;if(at.isInstancedInterleavedBuffer){for(let At=0;At<J.locationSize;At++)l(J.location+At,at.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let At=0;At<J.locationSize;At++)_(J.location+At);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let At=0;At<J.locationSize;At++)A(J.location+At,Tt/J.locationSize,Rt,vt,Et*Ot,(Pt+Tt/J.locationSize*At)*Ot,et)}else{if(gt.isInstancedBufferAttribute){for(let at=0;at<J.locationSize;at++)l(J.location+at,gt.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let at=0;at<J.locationSize;at++)_(J.location+at);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let at=0;at<J.locationSize;at++)A(J.location+at,Tt/J.locationSize,Rt,vt,Tt*Ot,Tt/J.locationSize*at*Ot,et)}}else if(K!==void 0){const vt=K[pt];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(J.location,vt);break;case 3:i.vertexAttrib3fv(J.location,vt);break;case 4:i.vertexAttrib4fv(J.location,vt);break;default:i.vertexAttrib1fv(J.location,vt)}}}}w()}function I(){z();for(const E in n){const O=n[E];for(const G in O){const q=O[G];for(const Q in q)d(q[Q].object),delete q[Q];delete O[G]}delete n[E]}}function L(E){if(n[E.id]===void 0)return;const O=n[E.id];for(const G in O){const q=O[G];for(const Q in q)d(q[Q].object),delete q[Q];delete O[G]}delete n[E.id]}function N(E){for(const O in n){const G=n[O];if(G[E.id]===void 0)continue;const q=G[E.id];for(const Q in q)d(q[Q].object),delete q[Q];delete G[E.id]}}function z(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:z,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:N,initAttributes:m,enableAttribute:_,disableUnusedAttributes:w}}function uf(i,t,e){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),e.update(d,n,u))}function o(c,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=d[x];e.update(g,n,1)}function h(c,d,u,p){if(u===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<c.length;x++)a(c[x],d[x],p[x]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,d,0,p,0,u);let x=0;for(let m=0;m<u;m++)x+=d[m]*p[m];e.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=h}function df(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(N){return!(N!==Be&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const z=N===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Qe&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ke&&!z)}function h(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=h(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),l=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=x>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:x,maxTextureSize:m,maxCubemapSize:_,maxAttributes:l,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:b,vertexTextures:I,maxSamples:L}}function ff(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new xn,o=new Vt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const g=u.length!==0||p||n!==0||s;return s=p,n=u.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=d(u,p,0)},this.setState=function(u,p,g){const x=u.clippingPlanes,m=u.clipIntersection,_=u.clipShadows,l=i.get(u);if(!s||x===null||x.length===0||r&&!_)r?d(null):c();else{const w=r?0:n,A=w*4;let b=l.clippingState||null;h.value=b,b=d(x,p,A,g);for(let I=0;I!==A;++I)b[I]=e[I];l.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=w}};function c(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,p,g,x){const m=u!==null?u.length:0;let _=null;if(m!==0){if(_=h.value,x!==!0||_===null){const l=g+m*4,w=p.matrixWorldInverse;o.getNormalMatrix(w),(_===null||_.length<l)&&(_=new Float32Array(l));for(let A=0,b=g;A!==m;++A,b+=4)a.copy(u[A]).applyMatrix4(w,o),a.normal.toArray(_,b),_[b+3]=a.constant}h.value=_,h.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,_}}function pf(i){let t=new WeakMap;function e(a,o){return o===Rr?a.mapping=mi:o===Cr&&(a.mapping=_i),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rr||o===Cr)if(t.has(a)){const h=t.get(a).texture;return e(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const c=new ah(h.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const hi=4,Ta=[.125,.215,.35,.446,.526,.582],Fn=20,ur=new El,ba=new kt;let dr=null,fr=0,pr=0,mr=!1;const Un=(1+Math.sqrt(5))/2,oi=1/Un,Aa=[new F(-Un,oi,0),new F(Un,oi,0),new F(-oi,0,Un),new F(oi,0,Un),new F(0,Un,-oi),new F(0,Un,oi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],mf=new F;class ao{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=mf}=r;dr=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,o),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ca(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ra(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dr,fr,pr),this._renderer.xr.enabled=mr,t.scissorTest=!1,ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dr=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Gi,format:Be,colorSpace:gi,depthBuffer:!1},s=wa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_f(r)),this._blurMaterial=gf(r,t,e)}return s}_compileMaterial(t){const e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,ur)}_sceneToCubeUV(t,e,n,s,r){const h=new Ie(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,g=u.toneMapping;u.getClearColor(ba),u.toneMapping=yn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const m=new Ns({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),_=new ue(new Wn,m);let l=!1;const w=t.background;w?w.isColor&&(m.color.copy(w),t.background=null,l=!0):(m.color.copy(ba),l=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(h.up.set(0,c[A],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+d[A],r.y,r.z)):b===1?(h.up.set(0,0,c[A]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+d[A],r.z)):(h.up.set(0,c[A],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+d[A]));const I=this._cubeSize;ps(s,b*I,A>2?I:0,I,I),u.setRenderTarget(s),l&&u.render(_,h),u.render(t,h)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=g,u.autoClear=p,t.background=w}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===mi||t.mapping===_i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ca()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ra());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ue(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const h=this._cubeSize;ps(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,ur)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Aa[(s-r-1)%Aa.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const h=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new ue(this._lodPlanes[s],c),p=c.uniforms,g=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Fn-1),m=r/x,_=isFinite(r)?1+Math.floor(d*m):Fn;_>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Fn}`);const l=[];let w=0;for(let N=0;N<Fn;++N){const z=N/m,T=Math.exp(-z*z/2);l.push(T),N===0?w+=T:N<_&&(w+=2*T)}for(let N=0;N<l.length;N++)l[N]=l[N]/w;p.envMap.value=t.texture,p.samples.value=_,p.weights.value=l,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:A}=this;p.dTheta.value=x,p.mipInt.value=A-n;const b=this._sizeLods[s],I=3*b*(s>A-hi?s-A+hi:0),L=4*(this._cubeSize-b);ps(e,I,L,3*b,2*b),h.setRenderTarget(e),h.render(u,ur)}}function _f(i){const t=[],e=[],n=[];let s=i;const r=i-hi+1+Ta.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let h=1/o;a>i-hi?h=Ta[a-i+hi-1]:a===0&&(h=0),n.push(h);const c=1/(o-2),d=-c,u=1+c,p=[d,d,u,d,u,u,d,d,u,u,d,u],g=6,x=6,m=3,_=2,l=1,w=new Float32Array(m*x*g),A=new Float32Array(_*x*g),b=new Float32Array(l*x*g);for(let L=0;L<g;L++){const N=L%3*2/3-1,z=L>2?0:-1,T=[N,z,0,N+2/3,z,0,N+2/3,z+1,0,N,z,0,N+2/3,z+1,0,N,z+1,0];w.set(T,m*x*L),A.set(p,_*x*L);const E=[L,L,L,L,L,L];b.set(E,l*x*L)}const I=new xe;I.setAttribute("position",new ze(w,m)),I.setAttribute("uv",new ze(A,_)),I.setAttribute("faceIndex",new ze(b,l)),t.push(I),s>hi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wa(i,t,e){const n=new Hn(i,t,e);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gf(i,t,e){const n=new Float32Array(Fn),s=new F(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Do(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function Ra(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function Ca(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Do(){return`

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
	`}function xf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const h=o.mapping,c=h===Rr||h===Cr,d=h===mi||h===_i;if(c||d){let u=t.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new ao(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const g=o.image;return c&&g&&g.height>0||d&&g&&s(g)?(e===null&&(e=new ao(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let h=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&h++;return h===c}function r(o){const h=o.target;h.removeEventListener("dispose",r);const c=t.get(h);c!==void 0&&(t.delete(h),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function vf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Vi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mf(i,t,e,n){const s={},r=new WeakMap;function a(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const x in p.attributes)t.remove(p.attributes[x]);p.removeEventListener("dispose",a),delete s[p.id];const g=r.get(p);g&&(t.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function h(u){const p=u.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER)}function c(u){const p=[],g=u.index,x=u.attributes.position;let m=0;if(g!==null){const w=g.array;m=g.version;for(let A=0,b=w.length;A<b;A+=3){const I=w[A+0],L=w[A+1],N=w[A+2];p.push(I,L,L,N,N,I)}}else if(x!==void 0){const w=x.array;m=x.version;for(let A=0,b=w.length/3-1;A<b;A+=3){const I=A+0,L=A+1,N=A+2;p.push(I,L,L,N,N,I)}}else return;const _=new(al(p)?ul:hl)(p,1);_.version=m;const l=r.get(u);l&&t.remove(l),r.set(u,_)}function d(u){const p=r.get(u);if(p){const g=u.index;g!==null&&p.version<g.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:h,getWireframeAttribute:d}}function Sf(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function h(p,g){i.drawElements(n,g,r,p*a),e.update(g,n,1)}function c(p,g,x){x!==0&&(i.drawElementsInstanced(n,g,r,p*a,x),e.update(g,n,x))}function d(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,p,0,x);let _=0;for(let l=0;l<x;l++)_+=g[l];e.update(_,n,1)}function u(p,g,x,m){if(x===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let l=0;l<p.length;l++)c(p[l]/a,g[l],m[l]);else{_.multiDrawElementsInstancedWEBGL(n,g,0,r,p,0,m,0,x);let l=0;for(let w=0;w<x;w++)l+=g[w]*m[w];e.update(l,n,1)}}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Ef(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function yf(i,t,e){const n=new WeakMap,s=new te;function r(a,o,h){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let p=n.get(o);if(p===void 0||p.count!==u){let T=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",T)};p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],l=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let A=0;g===!0&&(A=1),x===!0&&(A=2),m===!0&&(A=3);let b=o.attributes.position.count*A,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const L=new Float32Array(b*I*4*u),N=new ll(L,b,I,u);N.type=Ke,N.needsUpdate=!0;const z=A*4;for(let E=0;E<u;E++){const O=_[E],G=l[E],q=w[E],Q=b*I*4*E;for(let tt=0;tt<O.count;tt++){const K=tt*z;g===!0&&(s.fromBufferAttribute(O,tt),L[Q+K+0]=s.x,L[Q+K+1]=s.y,L[Q+K+2]=s.z,L[Q+K+3]=0),x===!0&&(s.fromBufferAttribute(G,tt),L[Q+K+4]=s.x,L[Q+K+5]=s.y,L[Q+K+6]=s.z,L[Q+K+7]=0),m===!0&&(s.fromBufferAttribute(q,tt),L[Q+K+8]=s.x,L[Q+K+9]=s.y,L[Q+K+10]=s.z,L[Q+K+11]=q.itemSize===4?s.w:1)}}p={count:u,texture:N,size:new Lt(b,I)},n.set(o,p),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",c)}h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Tf(i,t,e,n){let s=new WeakMap;function r(h){const c=n.render.frame,d=h.geometry,u=t.get(h,d);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),s.get(h)!==c&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,c))),h.isSkinnedMesh){const p=h.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function a(){s=new WeakMap}function o(h){const c=h.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Tl=new be,Pa=new vl(1,1),bl=new ll,Al=new Wc,wl=new pl,Da=[],La=[],Ia=new Float32Array(16),Ua=new Float32Array(9),Na=new Float32Array(4);function yi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Da[s];if(r===void 0&&(r=new Float32Array(s),Da[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fs(i,t){let e=La[t];e===void 0&&(e=new Int32Array(t),La[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function Rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function Cf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;Na.set(n),i.uniformMatrix2fv(this.addr,!1,Na),_e(e,n)}}function Pf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;Ua.set(n),i.uniformMatrix3fv(this.addr,!1,Ua),_e(e,n)}}function Df(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;Ia.set(n),i.uniformMatrix4fv(this.addr,!1,Ia),_e(e,n)}}function Lf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function If(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function Uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function Nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function Ff(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function Bf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function kf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pa.compareFunction=ol,r=Pa):r=Tl,e.setTexture2D(t||r,s)}function Hf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Al,s)}function Vf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wl,s)}function Gf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bl,s)}function Wf(i){switch(i){case 5126:return bf;case 35664:return Af;case 35665:return wf;case 35666:return Rf;case 35674:return Cf;case 35675:return Pf;case 35676:return Df;case 5124:case 35670:return Lf;case 35667:case 35671:return If;case 35668:case 35672:return Uf;case 35669:case 35673:return Nf;case 5125:return Ff;case 36294:return Of;case 36295:return Bf;case 36296:return zf;case 35678:case 36198:case 36298:case 36306:case 35682:return kf;case 35679:case 36299:case 36307:return Hf;case 35680:case 36300:case 36308:case 36293:return Vf;case 36289:case 36303:case 36311:case 36292:return Gf}}function Xf(i,t){i.uniform1fv(this.addr,t)}function Yf(i,t){const e=yi(t,this.size,2);i.uniform2fv(this.addr,e)}function qf(i,t){const e=yi(t,this.size,3);i.uniform3fv(this.addr,e)}function jf(i,t){const e=yi(t,this.size,4);i.uniform4fv(this.addr,e)}function Zf(i,t){const e=yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Kf(i,t){const e=yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $f(i,t){const e=yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Jf(i,t){i.uniform1iv(this.addr,t)}function Qf(i,t){i.uniform2iv(this.addr,t)}function tp(i,t){i.uniform3iv(this.addr,t)}function ep(i,t){i.uniform4iv(this.addr,t)}function np(i,t){i.uniform1uiv(this.addr,t)}function ip(i,t){i.uniform2uiv(this.addr,t)}function sp(i,t){i.uniform3uiv(this.addr,t)}function rp(i,t){i.uniform4uiv(this.addr,t)}function op(i,t,e){const n=this.cache,s=t.length,r=Fs(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Tl,r[a])}function ap(i,t,e){const n=this.cache,s=t.length,r=Fs(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Al,r[a])}function lp(i,t,e){const n=this.cache,s=t.length,r=Fs(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||wl,r[a])}function cp(i,t,e){const n=this.cache,s=t.length,r=Fs(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||bl,r[a])}function hp(i){switch(i){case 5126:return Xf;case 35664:return Yf;case 35665:return qf;case 35666:return jf;case 35674:return Zf;case 35675:return Kf;case 35676:return $f;case 5124:case 35670:return Jf;case 35667:case 35671:return Qf;case 35668:case 35672:return tp;case 35669:case 35673:return ep;case 5125:return np;case 36294:return ip;case 36295:return sp;case 36296:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return op;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return lp;case 36289:case 36303:case 36311:case 36292:return cp}}class up{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wf(e.type)}}class dp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hp(e.type)}}class fp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const _r=/(\w+)(\])?(\[|\.)?/g;function Fa(i,t){i.seq.push(t),i.map[t.id]=t}function pp(i,t,e){const n=i.name,s=n.length;for(_r.lastIndex=0;;){const r=_r.exec(n),a=_r.lastIndex;let o=r[1];const h=r[2]==="]",c=r[3];if(h&&(o=o|0),c===void 0||c==="["&&a+2===s){Fa(e,c===void 0?new up(o,i,t):new dp(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new fp(o),Fa(e,u)),e=u}}}class Ss{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);pp(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],h=n[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Oa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const mp=37297;let _p=0;function gp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ba=new Vt;function xp(i){jt._getMatrix(Ba,jt.workingColorSpace,i);const t=`mat3( ${Ba.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case ys:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function za(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+gp(i.getShaderSource(t),o)}else return r}function vp(i,t){const e=xp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Mp(i,t){let e;switch(t){case sc:e="Linear";break;case rc:e="Reinhard";break;case oc:e="Cineon";break;case $a:e="ACESFilmic";break;case lc:e="AgX";break;case cc:e="Neutral";break;case ac:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ms=new F;function Sp(){jt.getLuminanceCoefficients(ms);const i=ms.x.toFixed(4),t=ms.y.toFixed(4),e=ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ep(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ii).join(`
`)}function yp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Tp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ii(i){return i!==""}function ka(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ha(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bp=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(i){return i.replace(bp,wp)}const Ap=new Map;function wp(i,t){let e=Gt[t];if(e===void 0){const n=Ap.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lo(e)}const Rp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Va(i){return i.replace(Rp,Cp)}function Cp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ga(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Pp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Za?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ka?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(t="SHADOWMAP_TYPE_VSM"),t}function Dp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mi:case _i:t="ENVMAP_TYPE_CUBE";break;case Is:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lp(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===_i&&(t="ENVMAP_MODE_REFRACTION"),t}function Ip(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uo:t="ENVMAP_BLENDING_MULTIPLY";break;case nc:t="ENVMAP_BLENDING_MIX";break;case ic:t="ENVMAP_BLENDING_ADD";break}return t}function Up(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Np(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const h=Pp(e),c=Dp(e),d=Lp(e),u=Ip(e),p=Up(e),g=Ep(e),x=yp(r),m=s.createProgram();let _,l,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ii).join(`
`),_.length>0&&(_+=`
`),l=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ii).join(`
`),l.length>0&&(l+=`
`)):(_=[Ga(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),l=[Ga(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==yn?Mp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,vp("linearToOutputTexel",e.outputColorSpace),Sp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ii).join(`
`)),a=lo(a),a=ka(a,e),a=Ha(a,e),o=lo(o),o=ka(o,e),o=Ha(o,e),a=Va(a),o=Va(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,l=["#define varying in",e.glslVersion===Yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const A=w+_+a,b=w+l+o,I=Oa(s,s.VERTEX_SHADER,A),L=Oa(s,s.FRAGMENT_SHADER,b);s.attachShader(m,I),s.attachShader(m,L),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function N(O){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(m)||"",q=s.getShaderInfoLog(I)||"",Q=s.getShaderInfoLog(L)||"",tt=G.trim(),K=q.trim(),pt=Q.trim();let J=!0,gt=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,I,L);else{const vt=za(s,I,"vertex"),Tt=za(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+tt+`
`+vt+`
`+Tt)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(K===""||pt==="")&&(gt=!1);gt&&(O.diagnostics={runnable:J,programLog:tt,vertexShader:{log:K,prefix:_},fragmentShader:{log:pt,prefix:l}})}s.deleteShader(I),s.deleteShader(L),z=new Ss(s,m),T=Tp(s,m)}let z;this.getUniforms=function(){return z===void 0&&N(this),z};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(m,mp)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_p++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=I,this.fragmentShader=L,this}let Fp=0;class Op{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Bp(t),e.set(t,n)),n}}class Bp{constructor(t){this.id=Fp++,this.code=t,this.usedTimes=0}}function zp(i,t,e,n,s,r,a){const o=new yo,h=new Op,c=new Set,d=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(T){return c.add(T),T===0?"uv":`uv${T}`}function _(T,E,O,G,q){const Q=G.fog,tt=q.geometry,K=T.isMeshStandardMaterial?G.environment:null,pt=(T.isMeshStandardMaterial?e:t).get(T.envMap||K),J=pt&&pt.mapping===Is?pt.image.height:null,gt=x[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const vt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Tt=vt!==void 0?vt.length:0;let Ft=0;tt.morphAttributes.position!==void 0&&(Ft=1),tt.morphAttributes.normal!==void 0&&(Ft=2),tt.morphAttributes.color!==void 0&&(Ft=3);let Yt,Rt,Ot,et;if(gt){const Kt=qe[gt];Yt=Kt.vertexShader,Rt=Kt.fragmentShader}else Yt=T.vertexShader,Rt=T.fragmentShader,h.update(T),Ot=h.getVertexShaderID(T),et=h.getFragmentShaderID(T);const at=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Pt=q.isInstancedMesh===!0,At=q.isBatchedMesh===!0,Ht=!!T.map,he=!!T.matcap,C=!!pt,$=!!T.aoMap,lt=!!T.lightMap,ut=!!T.bumpMap,ct=!!T.normalMap,Bt=!!T.displacementMap,_t=!!T.emissiveMap,Ut=!!T.metalnessMap,ee=!!T.roughnessMap,ne=T.anisotropy>0,R=T.clearcoat>0,v=T.dispersion>0,W=T.iridescence>0,nt=T.sheen>0,ht=T.transmission>0,f=ne&&!!T.anisotropyMap,S=R&&!!T.clearcoatMap,M=R&&!!T.clearcoatNormalMap,P=R&&!!T.clearcoatRoughnessMap,B=W&&!!T.iridescenceMap,U=W&&!!T.iridescenceThicknessMap,V=nt&&!!T.sheenColorMap,X=nt&&!!T.sheenRoughnessMap,Y=!!T.specularMap,it=!!T.specularColorMap,st=!!T.specularIntensityMap,D=ht&&!!T.transmissionMap,rt=ht&&!!T.thicknessMap,dt=!!T.gradientMap,xt=!!T.alphaMap,ft=T.alphaTest>0,ot=!!T.alphaHash,bt=!!T.extensions;let zt=yn;T.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(zt=i.toneMapping);const re={shaderID:gt,shaderType:T.type,shaderName:T.name,vertexShader:Yt,fragmentShader:Rt,defines:T.defines,customVertexShaderID:Ot,customFragmentShaderID:et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:At,batchingColor:At&&q._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&q.instanceColor!==null,instancingMorph:Pt&&q.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:gi,alphaToCoverage:!!T.alphaToCoverage,map:Ht,matcap:he,envMap:C,envMapMode:C&&pt.mapping,envMapCubeUVHeight:J,aoMap:$,lightMap:lt,bumpMap:ut,normalMap:ct,displacementMap:p&&Bt,emissiveMap:_t,normalMapObjectSpace:ct&&T.normalMapType===fc,normalMapTangentSpace:ct&&T.normalMapType===Mo,metalnessMap:Ut,roughnessMap:ee,anisotropy:ne,anisotropyMap:f,clearcoat:R,clearcoatMap:S,clearcoatNormalMap:M,clearcoatRoughnessMap:P,dispersion:v,iridescence:W,iridescenceMap:B,iridescenceThicknessMap:U,sheen:nt,sheenColorMap:V,sheenRoughnessMap:X,specularMap:Y,specularColorMap:it,specularIntensityMap:st,transmission:ht,transmissionMap:D,thicknessMap:rt,gradientMap:dt,opaque:T.transparent===!1&&T.blending===di&&T.alphaToCoverage===!1,alphaMap:xt,alphaTest:ft,alphaHash:ot,combine:T.combine,mapUv:Ht&&m(T.map.channel),aoMapUv:$&&m(T.aoMap.channel),lightMapUv:lt&&m(T.lightMap.channel),bumpMapUv:ut&&m(T.bumpMap.channel),normalMapUv:ct&&m(T.normalMap.channel),displacementMapUv:Bt&&m(T.displacementMap.channel),emissiveMapUv:_t&&m(T.emissiveMap.channel),metalnessMapUv:Ut&&m(T.metalnessMap.channel),roughnessMapUv:ee&&m(T.roughnessMap.channel),anisotropyMapUv:f&&m(T.anisotropyMap.channel),clearcoatMapUv:S&&m(T.clearcoatMap.channel),clearcoatNormalMapUv:M&&m(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:P&&m(T.clearcoatRoughnessMap.channel),iridescenceMapUv:B&&m(T.iridescenceMap.channel),iridescenceThicknessMapUv:U&&m(T.iridescenceThicknessMap.channel),sheenColorMapUv:V&&m(T.sheenColorMap.channel),sheenRoughnessMapUv:X&&m(T.sheenRoughnessMap.channel),specularMapUv:Y&&m(T.specularMap.channel),specularColorMapUv:it&&m(T.specularColorMap.channel),specularIntensityMapUv:st&&m(T.specularIntensityMap.channel),transmissionMapUv:D&&m(T.transmissionMap.channel),thicknessMapUv:rt&&m(T.thicknessMap.channel),alphaMapUv:xt&&m(T.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(ct||ne),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!tt.attributes.uv&&(Ht||xt),fog:!!Q,useFog:T.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Et,skinning:q.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Ft,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:Ht&&T.map.isVideoTexture===!0&&jt.getTransfer(T.map.colorSpace)===Jt,decodeVideoTextureEmissive:_t&&T.emissiveMap.isVideoTexture===!0&&jt.getTransfer(T.emissiveMap.colorSpace)===Jt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===je,flipSided:T.side===Te,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:bt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&T.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function l(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const O in T.defines)E.push(O),E.push(T.defines[O]);return T.isRawShaderMaterial===!1&&(w(E,T),A(E,T),E.push(i.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function w(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function A(T,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),T.push(o.mask)}function b(T){const E=x[T.type];let O;if(E){const G=qe[E];O=ih.clone(G.uniforms)}else O=T.uniforms;return O}function I(T,E){let O;for(let G=0,q=d.length;G<q;G++){const Q=d[G];if(Q.cacheKey===E){O=Q,++O.usedTimes;break}}return O===void 0&&(O=new Np(i,E,T,r),d.push(O)),O}function L(T){if(--T.usedTimes===0){const E=d.indexOf(T);d[E]=d[d.length-1],d.pop(),T.destroy()}}function N(T){h.remove(T)}function z(){h.dispose()}return{getParameters:_,getProgramCacheKey:l,getUniforms:b,acquireProgram:I,releaseProgram:L,releaseShaderCache:N,programs:d,dispose:z}}function kp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,h){i.get(a)[o]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Hp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xa(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,p,g,x,m,_){let l=i[t];return l===void 0?(l={id:u.id,object:u,geometry:p,material:g,groupOrder:x,renderOrder:u.renderOrder,z:m,group:_},i[t]=l):(l.id=u.id,l.object=u,l.geometry=p,l.material=g,l.groupOrder=x,l.renderOrder=u.renderOrder,l.z=m,l.group=_),t++,l}function o(u,p,g,x,m,_){const l=a(u,p,g,x,m,_);g.transmission>0?n.push(l):g.transparent===!0?s.push(l):e.push(l)}function h(u,p,g,x,m,_){const l=a(u,p,g,x,m,_);g.transmission>0?n.unshift(l):g.transparent===!0?s.unshift(l):e.unshift(l)}function c(u,p){e.length>1&&e.sort(u||Hp),n.length>1&&n.sort(p||Wa),s.length>1&&s.sort(p||Wa)}function d(){for(let u=t,p=i.length;u<p;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:h,finish:d,sort:c}}function Vp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Xa,i.set(n,[a])):s>=r.length?(a=new Xa,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new kt};break;case"SpotLight":e={position:new F,direction:new F,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Wp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Xp=0;function Yp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qp(i){const t=new Gp,e=Wp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,r=new se,a=new se;function o(c){let d=0,u=0,p=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let g=0,x=0,m=0,_=0,l=0,w=0,A=0,b=0,I=0,L=0,N=0;c.sort(Yp);for(let T=0,E=c.length;T<E;T++){const O=c[T],G=O.color,q=O.intensity,Q=O.distance,tt=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=G.r*q,u+=G.g*q,p+=G.b*q;else if(O.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(O.sh.coefficients[K],q);N++}else if(O.isDirectionalLight){const K=t.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const pt=O.shadow,J=e.get(O);J.shadowIntensity=pt.intensity,J.shadowBias=pt.bias,J.shadowNormalBias=pt.normalBias,J.shadowRadius=pt.radius,J.shadowMapSize=pt.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=tt,n.directionalShadowMatrix[g]=O.shadow.matrix,w++}n.directional[g]=K,g++}else if(O.isSpotLight){const K=t.get(O);K.position.setFromMatrixPosition(O.matrixWorld),K.color.copy(G).multiplyScalar(q),K.distance=Q,K.coneCos=Math.cos(O.angle),K.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),K.decay=O.decay,n.spot[m]=K;const pt=O.shadow;if(O.map&&(n.spotLightMap[I]=O.map,I++,pt.updateMatrices(O),O.castShadow&&L++),n.spotLightMatrix[m]=pt.matrix,O.castShadow){const J=e.get(O);J.shadowIntensity=pt.intensity,J.shadowBias=pt.bias,J.shadowNormalBias=pt.normalBias,J.shadowRadius=pt.radius,J.shadowMapSize=pt.mapSize,n.spotShadow[m]=J,n.spotShadowMap[m]=tt,b++}m++}else if(O.isRectAreaLight){const K=t.get(O);K.color.copy(G).multiplyScalar(q),K.halfWidth.set(O.width*.5,0,0),K.halfHeight.set(0,O.height*.5,0),n.rectArea[_]=K,_++}else if(O.isPointLight){const K=t.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),K.distance=O.distance,K.decay=O.decay,O.castShadow){const pt=O.shadow,J=e.get(O);J.shadowIntensity=pt.intensity,J.shadowBias=pt.bias,J.shadowNormalBias=pt.normalBias,J.shadowRadius=pt.radius,J.shadowMapSize=pt.mapSize,J.shadowCameraNear=pt.camera.near,J.shadowCameraFar=pt.camera.far,n.pointShadow[x]=J,n.pointShadowMap[x]=tt,n.pointShadowMatrix[x]=O.shadow.matrix,A++}n.point[x]=K,x++}else if(O.isHemisphereLight){const K=t.get(O);K.skyColor.copy(O.color).multiplyScalar(q),K.groundColor.copy(O.groundColor).multiplyScalar(q),n.hemi[l]=K,l++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=p;const z=n.hash;(z.directionalLength!==g||z.pointLength!==x||z.spotLength!==m||z.rectAreaLength!==_||z.hemiLength!==l||z.numDirectionalShadows!==w||z.numPointShadows!==A||z.numSpotShadows!==b||z.numSpotMaps!==I||z.numLightProbes!==N)&&(n.directional.length=g,n.spot.length=m,n.rectArea.length=_,n.point.length=x,n.hemi.length=l,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=b+I-L,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=N,z.directionalLength=g,z.pointLength=x,z.spotLength=m,z.rectAreaLength=_,z.hemiLength=l,z.numDirectionalShadows=w,z.numPointShadows=A,z.numSpotShadows=b,z.numSpotMaps=I,z.numLightProbes=N,n.version=Xp++)}function h(c,d){let u=0,p=0,g=0,x=0,m=0;const _=d.matrixWorldInverse;for(let l=0,w=c.length;l<w;l++){const A=c[l];if(A.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),u++}else if(A.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),g++}else if(A.isRectAreaLight){const b=n.rectArea[x];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(_),a.identity(),r.copy(A.matrixWorld),r.premultiply(_),a.extractRotation(r),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(A.isPointLight){const b=n.point[p];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(_),p++}else if(A.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(_),m++}}}return{setup:o,setupView:h,state:n}}function Ya(i){const t=new qp(i),e=[],n=[];function s(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function h(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:h,pushLight:r,pushShadow:a}}function jp(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ya(i),t.set(s,[o])):r>=a.length?(o=new Ya(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Zp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kp=`uniform sampler2D shadow_pass;
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
}`;function $p(i,t,e){let n=new bo;const s=new Lt,r=new Lt,a=new te,o=new mh({depthPacking:dc}),h=new _h,c={},d=e.maxTextureSize,u={[Tn]:Te,[Te]:Tn,[je]:je},p=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Zp,fragmentShader:Kp}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const x=new xe;x.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ue(x,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Za;let l=this.type;this.render=function(L,N,z){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;const T=i.getRenderTarget(),E=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),G=i.state;G.setBlending(En),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=l!==cn&&this.type===cn,Q=l===cn&&this.type!==cn;for(let tt=0,K=L.length;tt<K;tt++){const pt=L[tt],J=pt.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",pt,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const gt=J.getFrameExtents();if(s.multiply(gt),r.copy(J.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/gt.x),s.x=r.x*gt.x,J.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/gt.y),s.y=r.y*gt.y,J.mapSize.y=r.y)),J.map===null||q===!0||Q===!0){const Tt=this.type!==cn?{minFilter:Ue,magFilter:Ue}:{};J.map!==null&&J.map.dispose(),J.map=new Hn(s.x,s.y,Tt),J.map.texture.name=pt.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const vt=J.getViewportCount();for(let Tt=0;Tt<vt;Tt++){const Ft=J.getViewport(Tt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),G.viewport(a),J.updateMatrices(pt,Tt),n=J.getFrustum(),b(N,z,J.camera,pt,this.type)}J.isPointLightShadow!==!0&&this.type===cn&&w(J,z),J.needsUpdate=!1}l=this.type,_.needsUpdate=!1,i.setRenderTarget(T,E,O)};function w(L,N){const z=t.update(m);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,g.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Hn(s.x,s.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(N,null,z,p,m,null),g.uniforms.shadow_pass.value=L.mapPass.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(N,null,z,g,m,null)}function A(L,N,z,T){let E=null;const O=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(O!==void 0)E=O;else if(E=z.isPointLight===!0?h:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const G=E.uuid,q=N.uuid;let Q=c[G];Q===void 0&&(Q={},c[G]=Q);let tt=Q[q];tt===void 0&&(tt=E.clone(),Q[q]=tt,N.addEventListener("dispose",I)),E=tt}if(E.visible=N.visible,E.wireframe=N.wireframe,T===cn?E.side=N.shadowSide!==null?N.shadowSide:N.side:E.side=N.shadowSide!==null?N.shadowSide:u[N.side],E.alphaMap=N.alphaMap,E.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,E.map=N.map,E.clipShadows=N.clipShadows,E.clippingPlanes=N.clippingPlanes,E.clipIntersection=N.clipIntersection,E.displacementMap=N.displacementMap,E.displacementScale=N.displacementScale,E.displacementBias=N.displacementBias,E.wireframeLinewidth=N.wireframeLinewidth,E.linewidth=N.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=i.properties.get(E);G.light=z}return E}function b(L,N,z,T,E){if(L.visible===!1)return;if(L.layers.test(N.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===cn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);const q=t.update(L),Q=L.material;if(Array.isArray(Q)){const tt=q.groups;for(let K=0,pt=tt.length;K<pt;K++){const J=tt[K],gt=Q[J.materialIndex];if(gt&&gt.visible){const vt=A(L,gt,T,E);L.onBeforeShadow(i,L,N,z,q,vt,J),i.renderBufferDirect(z,null,q,vt,L,J),L.onAfterShadow(i,L,N,z,q,vt,J)}}}else if(Q.visible){const tt=A(L,Q,T,E);L.onBeforeShadow(i,L,N,z,q,tt,null),i.renderBufferDirect(z,null,q,tt,L,null),L.onAfterShadow(i,L,N,z,q,tt,null)}}const G=L.children;for(let q=0,Q=G.length;q<Q;q++)b(G[q],N,z,T,E)}function I(L){L.target.removeEventListener("dispose",I);for(const z in c){const T=c[z],E=L.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const Jp={[Sr]:Er,[yr]:Ar,[Tr]:wr,[pi]:br,[Er]:Sr,[Ar]:yr,[wr]:Tr,[br]:pi};function Qp(i,t){function e(){let D=!1;const rt=new te;let dt=null;const xt=new te(0,0,0,0);return{setMask:function(ft){dt!==ft&&!D&&(i.colorMask(ft,ft,ft,ft),dt=ft)},setLocked:function(ft){D=ft},setClear:function(ft,ot,bt,zt,re){re===!0&&(ft*=zt,ot*=zt,bt*=zt),rt.set(ft,ot,bt,zt),xt.equals(rt)===!1&&(i.clearColor(ft,ot,bt,zt),xt.copy(rt))},reset:function(){D=!1,dt=null,xt.set(-1,0,0,0)}}}function n(){let D=!1,rt=!1,dt=null,xt=null,ft=null;return{setReversed:function(ot){if(rt!==ot){const bt=t.get("EXT_clip_control");ot?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),rt=ot;const zt=ft;ft=null,this.setClear(zt)}},getReversed:function(){return rt},setTest:function(ot){ot?at(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(ot){dt!==ot&&!D&&(i.depthMask(ot),dt=ot)},setFunc:function(ot){if(rt&&(ot=Jp[ot]),xt!==ot){switch(ot){case Sr:i.depthFunc(i.NEVER);break;case Er:i.depthFunc(i.ALWAYS);break;case yr:i.depthFunc(i.LESS);break;case pi:i.depthFunc(i.LEQUAL);break;case Tr:i.depthFunc(i.EQUAL);break;case br:i.depthFunc(i.GEQUAL);break;case Ar:i.depthFunc(i.GREATER);break;case wr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=ot}},setLocked:function(ot){D=ot},setClear:function(ot){ft!==ot&&(rt&&(ot=1-ot),i.clearDepth(ot),ft=ot)},reset:function(){D=!1,dt=null,xt=null,ft=null,rt=!1}}}function s(){let D=!1,rt=null,dt=null,xt=null,ft=null,ot=null,bt=null,zt=null,re=null;return{setTest:function(Kt){D||(Kt?at(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(Kt){rt!==Kt&&!D&&(i.stencilMask(Kt),rt=Kt)},setFunc:function(Kt,tn,Xe){(dt!==Kt||xt!==tn||ft!==Xe)&&(i.stencilFunc(Kt,tn,Xe),dt=Kt,xt=tn,ft=Xe)},setOp:function(Kt,tn,Xe){(ot!==Kt||bt!==tn||zt!==Xe)&&(i.stencilOp(Kt,tn,Xe),ot=Kt,bt=tn,zt=Xe)},setLocked:function(Kt){D=Kt},setClear:function(Kt){re!==Kt&&(i.clearStencil(Kt),re=Kt)},reset:function(){D=!1,rt=null,dt=null,xt=null,ft=null,ot=null,bt=null,zt=null,re=null}}}const r=new e,a=new n,o=new s,h=new WeakMap,c=new WeakMap;let d={},u={},p=new WeakMap,g=[],x=null,m=!1,_=null,l=null,w=null,A=null,b=null,I=null,L=null,N=new kt(0,0,0),z=0,T=!1,E=null,O=null,G=null,q=null,Q=null;const tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,pt=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(J)[1]),K=pt>=1):J.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),K=pt>=2);let gt=null,vt={};const Tt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),Yt=new te().fromArray(Tt),Rt=new te().fromArray(Ft);function Ot(D,rt,dt,xt){const ft=new Uint8Array(4),ot=i.createTexture();i.bindTexture(D,ot),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<dt;bt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(rt+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ot}const et={};et[i.TEXTURE_2D]=Ot(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=Ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=Ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=Ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(i.DEPTH_TEST),a.setFunc(pi),ut(!1),ct(ko),at(i.CULL_FACE),$(En);function at(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function Et(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Pt(D,rt){return u[D]!==rt?(i.bindFramebuffer(D,rt),u[D]=rt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=rt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function At(D,rt){let dt=g,xt=!1;if(D){dt=p.get(rt),dt===void 0&&(dt=[],p.set(rt,dt));const ft=D.textures;if(dt.length!==ft.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,bt=ft.length;ot<bt;ot++)dt[ot]=i.COLOR_ATTACHMENT0+ot;dt.length=ft.length,xt=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,xt=!0);xt&&i.drawBuffers(dt)}function Ht(D){return x!==D?(i.useProgram(D),x=D,!0):!1}const he={[Nn]:i.FUNC_ADD,[zl]:i.FUNC_SUBTRACT,[kl]:i.FUNC_REVERSE_SUBTRACT};he[Hl]=i.MIN,he[Vl]=i.MAX;const C={[Gl]:i.ZERO,[Wl]:i.ONE,[Xl]:i.SRC_COLOR,[vr]:i.SRC_ALPHA,[$l]:i.SRC_ALPHA_SATURATE,[Zl]:i.DST_COLOR,[ql]:i.DST_ALPHA,[Yl]:i.ONE_MINUS_SRC_COLOR,[Mr]:i.ONE_MINUS_SRC_ALPHA,[Kl]:i.ONE_MINUS_DST_COLOR,[jl]:i.ONE_MINUS_DST_ALPHA,[Jl]:i.CONSTANT_COLOR,[Ql]:i.ONE_MINUS_CONSTANT_COLOR,[tc]:i.CONSTANT_ALPHA,[ec]:i.ONE_MINUS_CONSTANT_ALPHA};function $(D,rt,dt,xt,ft,ot,bt,zt,re,Kt){if(D===En){m===!0&&(Et(i.BLEND),m=!1);return}if(m===!1&&(at(i.BLEND),m=!0),D!==Bl){if(D!==_||Kt!==T){if((l!==Nn||b!==Nn)&&(i.blendEquation(i.FUNC_ADD),l=Nn,b=Nn),Kt)switch(D){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ho:i.blendFunc(i.ONE,i.ONE);break;case Vo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Go:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ho:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Go:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,A=null,I=null,L=null,N.set(0,0,0),z=0,_=D,T=Kt}return}ft=ft||rt,ot=ot||dt,bt=bt||xt,(rt!==l||ft!==b)&&(i.blendEquationSeparate(he[rt],he[ft]),l=rt,b=ft),(dt!==w||xt!==A||ot!==I||bt!==L)&&(i.blendFuncSeparate(C[dt],C[xt],C[ot],C[bt]),w=dt,A=xt,I=ot,L=bt),(zt.equals(N)===!1||re!==z)&&(i.blendColor(zt.r,zt.g,zt.b,re),N.copy(zt),z=re),_=D,T=!1}function lt(D,rt){D.side===je?Et(i.CULL_FACE):at(i.CULL_FACE);let dt=D.side===Te;rt&&(dt=!dt),ut(dt),D.blending===di&&D.transparent===!1?$(En):$(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const xt=D.stencilWrite;o.setTest(xt),xt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),_t(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(D){E!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),E=D)}function ct(D){D!==Fl?(at(i.CULL_FACE),D!==O&&(D===ko?i.cullFace(i.BACK):D===Ol?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),O=D}function Bt(D){D!==G&&(K&&i.lineWidth(D),G=D)}function _t(D,rt,dt){D?(at(i.POLYGON_OFFSET_FILL),(q!==rt||Q!==dt)&&(i.polygonOffset(rt,dt),q=rt,Q=dt)):Et(i.POLYGON_OFFSET_FILL)}function Ut(D){D?at(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function ee(D){D===void 0&&(D=i.TEXTURE0+tt-1),gt!==D&&(i.activeTexture(D),gt=D)}function ne(D,rt,dt){dt===void 0&&(gt===null?dt=i.TEXTURE0+tt-1:dt=gt);let xt=vt[dt];xt===void 0&&(xt={type:void 0,texture:void 0},vt[dt]=xt),(xt.type!==D||xt.texture!==rt)&&(gt!==dt&&(i.activeTexture(dt),gt=dt),i.bindTexture(D,rt||et[D]),xt.type=D,xt.texture=rt)}function R(){const D=vt[gt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function f(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function S(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function M(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function U(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(D){Yt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Yt.copy(D))}function X(D){Rt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Rt.copy(D))}function Y(D,rt){let dt=c.get(rt);dt===void 0&&(dt=new WeakMap,c.set(rt,dt));let xt=dt.get(D);xt===void 0&&(xt=i.getUniformBlockIndex(rt,D.name),dt.set(D,xt))}function it(D,rt){const xt=c.get(rt).get(D);h.get(rt)!==xt&&(i.uniformBlockBinding(rt,xt,D.__bindingPointIndex),h.set(rt,xt))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},gt=null,vt={},u={},p=new WeakMap,g=[],x=null,m=!1,_=null,l=null,w=null,A=null,b=null,I=null,L=null,N=new kt(0,0,0),z=0,T=!1,E=null,O=null,G=null,q=null,Q=null,Yt.set(0,0,i.canvas.width,i.canvas.height),Rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Et,bindFramebuffer:Pt,drawBuffers:At,useProgram:Ht,setBlending:$,setMaterial:lt,setFlipSided:ut,setCullFace:ct,setLineWidth:Bt,setPolygonOffset:_t,setScissorTest:Ut,activeTexture:ee,bindTexture:ne,unbindTexture:R,compressedTexImage2D:v,compressedTexImage3D:W,texImage2D:B,texImage3D:U,updateUBOMapping:Y,uniformBlockBinding:it,texStorage2D:M,texStorage3D:P,texSubImage2D:nt,texSubImage3D:ht,compressedTexSubImage2D:f,compressedTexSubImage3D:S,scissor:V,viewport:X,reset:st}}function tm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,d=new WeakMap;let u;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,v){return g?new OffscreenCanvas(R,v):bs("canvas")}function m(R,v,W){let nt=1;const ht=ne(R);if((ht.width>W||ht.height>W)&&(nt=W/Math.max(ht.width,ht.height)),nt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const f=Math.floor(nt*ht.width),S=Math.floor(nt*ht.height);u===void 0&&(u=x(f,S));const M=v?x(f,S):u;return M.width=f,M.height=S,M.getContext("2d").drawImage(R,0,0,f,S),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+f+"x"+S+")."),M}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),R;return R}function _(R){return R.generateMipmaps}function l(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(R,v,W,nt,ht=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let f=v;if(v===i.RED&&(W===i.FLOAT&&(f=i.R32F),W===i.HALF_FLOAT&&(f=i.R16F),W===i.UNSIGNED_BYTE&&(f=i.R8)),v===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(f=i.R8UI),W===i.UNSIGNED_SHORT&&(f=i.R16UI),W===i.UNSIGNED_INT&&(f=i.R32UI),W===i.BYTE&&(f=i.R8I),W===i.SHORT&&(f=i.R16I),W===i.INT&&(f=i.R32I)),v===i.RG&&(W===i.FLOAT&&(f=i.RG32F),W===i.HALF_FLOAT&&(f=i.RG16F),W===i.UNSIGNED_BYTE&&(f=i.RG8)),v===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(f=i.RG8UI),W===i.UNSIGNED_SHORT&&(f=i.RG16UI),W===i.UNSIGNED_INT&&(f=i.RG32UI),W===i.BYTE&&(f=i.RG8I),W===i.SHORT&&(f=i.RG16I),W===i.INT&&(f=i.RG32I)),v===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(f=i.RGB8UI),W===i.UNSIGNED_SHORT&&(f=i.RGB16UI),W===i.UNSIGNED_INT&&(f=i.RGB32UI),W===i.BYTE&&(f=i.RGB8I),W===i.SHORT&&(f=i.RGB16I),W===i.INT&&(f=i.RGB32I)),v===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(f=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(f=i.RGBA16UI),W===i.UNSIGNED_INT&&(f=i.RGBA32UI),W===i.BYTE&&(f=i.RGBA8I),W===i.SHORT&&(f=i.RGBA16I),W===i.INT&&(f=i.RGBA32I)),v===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(f=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(f=i.R11F_G11F_B10F)),v===i.RGBA){const S=ht?ys:jt.getTransfer(nt);W===i.FLOAT&&(f=i.RGBA32F),W===i.HALF_FLOAT&&(f=i.RGBA16F),W===i.UNSIGNED_BYTE&&(f=S===Jt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(f=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(f=i.RGB5_A1)}return(f===i.R16F||f===i.R32F||f===i.RG16F||f===i.RG32F||f===i.RGBA16F||f===i.RGBA32F)&&t.get("EXT_color_buffer_float"),f}function b(R,v){let W;return R?v===null||v===zn||v===Bi?W=i.DEPTH24_STENCIL8:v===Ke?W=i.DEPTH32F_STENCIL8:v===Oi&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===zn||v===Bi?W=i.DEPTH_COMPONENT24:v===Ke?W=i.DEPTH_COMPONENT32F:v===Oi&&(W=i.DEPTH_COMPONENT16),W}function I(R,v){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ue&&R.minFilter!==Ze?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function L(R){const v=R.target;v.removeEventListener("dispose",L),z(v),v.isVideoTexture&&d.delete(v)}function N(R){const v=R.target;v.removeEventListener("dispose",N),E(v)}function z(R){const v=n.get(R);if(v.__webglInit===void 0)return;const W=R.source,nt=p.get(W);if(nt){const ht=nt[v.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&T(R),Object.keys(nt).length===0&&p.delete(W)}n.remove(R)}function T(R){const v=n.get(R);i.deleteTexture(v.__webglTexture);const W=R.source,nt=p.get(W);delete nt[v.__cacheKey],a.memory.textures--}function E(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(v.__webglFramebuffer[nt]))for(let ht=0;ht<v.__webglFramebuffer[nt].length;ht++)i.deleteFramebuffer(v.__webglFramebuffer[nt][ht]);else i.deleteFramebuffer(v.__webglFramebuffer[nt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[nt])}else{if(Array.isArray(v.__webglFramebuffer))for(let nt=0;nt<v.__webglFramebuffer.length;nt++)i.deleteFramebuffer(v.__webglFramebuffer[nt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let nt=0;nt<v.__webglColorRenderbuffer.length;nt++)v.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[nt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const W=R.textures;for(let nt=0,ht=W.length;nt<ht;nt++){const f=n.get(W[nt]);f.__webglTexture&&(i.deleteTexture(f.__webglTexture),a.memory.textures--),n.remove(W[nt])}n.remove(R)}let O=0;function G(){O=0}function q(){const R=O;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function Q(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function tt(R,v){const W=n.get(R);if(R.isVideoTexture&&Ut(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){const nt=R.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(W,R,v);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+v)}function K(R,v){const W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){et(W,R,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+v)}function pt(R,v){const W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){et(W,R,v);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+v)}function J(R,v){const W=n.get(R);if(R.version>0&&W.__version!==R.version){at(W,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+v)}const gt={[Es]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[Pr]:i.MIRRORED_REPEAT},vt={[Ue]:i.NEAREST,[hc]:i.NEAREST_MIPMAP_NEAREST,[Yi]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[zs]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},Tt={[pc]:i.NEVER,[Mc]:i.ALWAYS,[mc]:i.LESS,[ol]:i.LEQUAL,[_c]:i.EQUAL,[vc]:i.GEQUAL,[gc]:i.GREATER,[xc]:i.NOTEQUAL};function Ft(R,v){if(v.type===Ke&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ze||v.magFilter===zs||v.magFilter===Yi||v.magFilter===Bn||v.minFilter===Ze||v.minFilter===zs||v.minFilter===Yi||v.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,gt[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,gt[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,gt[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,vt[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,vt[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Tt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ue||v.minFilter!==Yi&&v.minFilter!==Bn||v.type===Ke&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Yt(R,v){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",L));const nt=v.source;let ht=p.get(nt);ht===void 0&&(ht={},p.set(nt,ht));const f=Q(v);if(f!==R.__cacheKey){ht[f]===void 0&&(ht[f]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ht[f].usedTimes++;const S=ht[R.__cacheKey];S!==void 0&&(ht[R.__cacheKey].usedTimes--,S.usedTimes===0&&T(v)),R.__cacheKey=f,R.__webglTexture=ht[f].texture}return W}function Rt(R,v,W){return Math.floor(Math.floor(R/W)/v)}function Ot(R,v,W,nt){const f=R.updateRanges;if(f.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,W,nt,v.data);else{f.sort((U,V)=>U.start-V.start);let S=0;for(let U=1;U<f.length;U++){const V=f[S],X=f[U],Y=V.start+V.count,it=Rt(X.start,v.width,4),st=Rt(V.start,v.width,4);X.start<=Y+1&&it===st&&Rt(X.start+X.count-1,v.width,4)===it?V.count=Math.max(V.count,X.start+X.count-V.start):(++S,f[S]=X)}f.length=S+1;const M=i.getParameter(i.UNPACK_ROW_LENGTH),P=i.getParameter(i.UNPACK_SKIP_PIXELS),B=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let U=0,V=f.length;U<V;U++){const X=f[U],Y=Math.floor(X.start/4),it=Math.ceil(X.count/4),st=Y%v.width,D=Math.floor(Y/v.width),rt=it,dt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,st),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,st,D,rt,dt,W,nt,v.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,M),i.pixelStorei(i.UNPACK_SKIP_PIXELS,P),i.pixelStorei(i.UNPACK_SKIP_ROWS,B)}}function et(R,v,W){let nt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(nt=i.TEXTURE_3D);const ht=Yt(R,v),f=v.source;e.bindTexture(nt,R.__webglTexture,i.TEXTURE0+W);const S=n.get(f);if(f.version!==S.__version||ht===!0){e.activeTexture(i.TEXTURE0+W);const M=jt.getPrimaries(jt.workingColorSpace),P=v.colorSpace===vn?null:jt.getPrimaries(v.colorSpace),B=v.colorSpace===vn||M===P?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);let U=m(v.image,!1,s.maxTextureSize);U=ee(v,U);const V=r.convert(v.format,v.colorSpace),X=r.convert(v.type);let Y=A(v.internalFormat,V,X,v.colorSpace,v.isVideoTexture);Ft(nt,v);let it;const st=v.mipmaps,D=v.isVideoTexture!==!0,rt=S.__version===void 0||ht===!0,dt=f.dataReady,xt=I(v,U);if(v.isDepthTexture)Y=b(v.format===ki,v.type),rt&&(D?e.texStorage2D(i.TEXTURE_2D,1,Y,U.width,U.height):e.texImage2D(i.TEXTURE_2D,0,Y,U.width,U.height,0,V,X,null));else if(v.isDataTexture)if(st.length>0){D&&rt&&e.texStorage2D(i.TEXTURE_2D,xt,Y,st[0].width,st[0].height);for(let ft=0,ot=st.length;ft<ot;ft++)it=st[ft],D?dt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,it.width,it.height,V,X,it.data):e.texImage2D(i.TEXTURE_2D,ft,Y,it.width,it.height,0,V,X,it.data);v.generateMipmaps=!1}else D?(rt&&e.texStorage2D(i.TEXTURE_2D,xt,Y,U.width,U.height),dt&&Ot(v,U,V,X)):e.texImage2D(i.TEXTURE_2D,0,Y,U.width,U.height,0,V,X,U.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Y,st[0].width,st[0].height,U.depth);for(let ft=0,ot=st.length;ft<ot;ft++)if(it=st[ft],v.format!==Be)if(V!==null)if(D){if(dt)if(v.layerUpdates.size>0){const bt=ya(it.width,it.height,v.format,v.type);for(const zt of v.layerUpdates){const re=it.data.subarray(zt*bt/it.data.BYTES_PER_ELEMENT,(zt+1)*bt/it.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,zt,it.width,it.height,1,V,re)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,it.width,it.height,U.depth,V,it.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Y,it.width,it.height,U.depth,0,it.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,it.width,it.height,U.depth,V,X,it.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Y,it.width,it.height,U.depth,0,V,X,it.data)}else{D&&rt&&e.texStorage2D(i.TEXTURE_2D,xt,Y,st[0].width,st[0].height);for(let ft=0,ot=st.length;ft<ot;ft++)it=st[ft],v.format!==Be?V!==null?D?dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,it.width,it.height,V,it.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Y,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?dt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,it.width,it.height,V,X,it.data):e.texImage2D(i.TEXTURE_2D,ft,Y,it.width,it.height,0,V,X,it.data)}else if(v.isDataArrayTexture)if(D){if(rt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Y,U.width,U.height,U.depth),dt)if(v.layerUpdates.size>0){const ft=ya(U.width,U.height,v.format,v.type);for(const ot of v.layerUpdates){const bt=U.data.subarray(ot*ft/U.data.BYTES_PER_ELEMENT,(ot+1)*ft/U.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,U.width,U.height,1,V,X,bt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,V,X,U.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Y,U.width,U.height,U.depth,0,V,X,U.data);else if(v.isData3DTexture)D?(rt&&e.texStorage3D(i.TEXTURE_3D,xt,Y,U.width,U.height,U.depth),dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,V,X,U.data)):e.texImage3D(i.TEXTURE_3D,0,Y,U.width,U.height,U.depth,0,V,X,U.data);else if(v.isFramebufferTexture){if(rt)if(D)e.texStorage2D(i.TEXTURE_2D,xt,Y,U.width,U.height);else{let ft=U.width,ot=U.height;for(let bt=0;bt<xt;bt++)e.texImage2D(i.TEXTURE_2D,bt,Y,ft,ot,0,V,X,null),ft>>=1,ot>>=1}}else if(st.length>0){if(D&&rt){const ft=ne(st[0]);e.texStorage2D(i.TEXTURE_2D,xt,Y,ft.width,ft.height)}for(let ft=0,ot=st.length;ft<ot;ft++)it=st[ft],D?dt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,V,X,it):e.texImage2D(i.TEXTURE_2D,ft,Y,V,X,it);v.generateMipmaps=!1}else if(D){if(rt){const ft=ne(U);e.texStorage2D(i.TEXTURE_2D,xt,Y,ft.width,ft.height)}dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,V,X,U)}else e.texImage2D(i.TEXTURE_2D,0,Y,V,X,U);_(v)&&l(nt),S.__version=f.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function at(R,v,W){if(v.image.length!==6)return;const nt=Yt(R,v),ht=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);const f=n.get(ht);if(ht.version!==f.__version||nt===!0){e.activeTexture(i.TEXTURE0+W);const S=jt.getPrimaries(jt.workingColorSpace),M=v.colorSpace===vn?null:jt.getPrimaries(v.colorSpace),P=v.colorSpace===vn||S===M?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);const B=v.isCompressedTexture||v.image[0].isCompressedTexture,U=v.image[0]&&v.image[0].isDataTexture,V=[];for(let ot=0;ot<6;ot++)!B&&!U?V[ot]=m(v.image[ot],!0,s.maxCubemapSize):V[ot]=U?v.image[ot].image:v.image[ot],V[ot]=ee(v,V[ot]);const X=V[0],Y=r.convert(v.format,v.colorSpace),it=r.convert(v.type),st=A(v.internalFormat,Y,it,v.colorSpace),D=v.isVideoTexture!==!0,rt=f.__version===void 0||nt===!0,dt=ht.dataReady;let xt=I(v,X);Ft(i.TEXTURE_CUBE_MAP,v);let ft;if(B){D&&rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,st,X.width,X.height);for(let ot=0;ot<6;ot++){ft=V[ot].mipmaps;for(let bt=0;bt<ft.length;bt++){const zt=ft[bt];v.format!==Be?Y!==null?D?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt,0,0,zt.width,zt.height,Y,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt,st,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt,0,0,zt.width,zt.height,Y,it,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt,st,zt.width,zt.height,0,Y,it,zt.data)}}}else{if(ft=v.mipmaps,D&&rt){ft.length>0&&xt++;const ot=ne(V[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,st,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(U){D?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,V[ot].width,V[ot].height,Y,it,V[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,st,V[ot].width,V[ot].height,0,Y,it,V[ot].data);for(let bt=0;bt<ft.length;bt++){const re=ft[bt].image[ot].image;D?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt+1,0,0,re.width,re.height,Y,it,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt+1,st,re.width,re.height,0,Y,it,re.data)}}else{D?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Y,it,V[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,st,Y,it,V[ot]);for(let bt=0;bt<ft.length;bt++){const zt=ft[bt];D?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt+1,0,0,Y,it,zt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt+1,st,Y,it,zt.image[ot])}}}_(v)&&l(i.TEXTURE_CUBE_MAP),f.__version=ht.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Et(R,v,W,nt,ht,f){const S=r.convert(W.format,W.colorSpace),M=r.convert(W.type),P=A(W.internalFormat,S,M,W.colorSpace),B=n.get(v),U=n.get(W);if(U.__renderTarget=v,!B.__hasExternalTextures){const V=Math.max(1,v.width>>f),X=Math.max(1,v.height>>f);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,f,P,V,X,v.depth,0,S,M,null):e.texImage2D(ht,f,P,V,X,0,S,M,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),_t(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,ht,U.__webglTexture,0,Bt(v)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,ht,U.__webglTexture,f),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(R,v,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){const nt=v.depthTexture,ht=nt&&nt.isDepthTexture?nt.type:null,f=b(v.stencilBuffer,ht),S=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,M=Bt(v);_t(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,M,f,v.width,v.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,M,f,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,f,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,S,i.RENDERBUFFER,R)}else{const nt=v.textures;for(let ht=0;ht<nt.length;ht++){const f=nt[ht],S=r.convert(f.format,f.colorSpace),M=r.convert(f.type),P=A(f.internalFormat,S,M,f.colorSpace),B=Bt(v);W&&_t(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,B,P,v.width,v.height):_t(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B,P,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,P,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(v.depthTexture);nt.__renderTarget=v,(!nt.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),tt(v.depthTexture,0);const ht=nt.__webglTexture,f=Bt(v);if(v.depthTexture.format===zi)_t(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,f):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(v.depthTexture.format===ki)_t(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,f):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Ht(R){const v=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const nt=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),nt){const ht=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,nt.removeEventListener("dispose",ht)};nt.addEventListener("dispose",ht),v.__depthDisposeCallback=ht}v.__boundDepthTexture=nt}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const nt=R.texture.mipmaps;nt&&nt.length>0?At(v.__webglFramebuffer[0],R):At(v.__webglFramebuffer,R)}else if(W){v.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[nt]),v.__webglDepthbuffer[nt]===void 0)v.__webglDepthbuffer[nt]=i.createRenderbuffer(),Pt(v.__webglDepthbuffer[nt],R,!1);else{const ht=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,f=v.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,f),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,f)}}else{const nt=R.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Pt(v.__webglDepthbuffer,R,!1);else{const ht=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,f=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,f),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,f)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function he(R,v,W){const nt=n.get(R);v!==void 0&&Et(nt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Ht(R)}function C(R){const v=R.texture,W=n.get(R),nt=n.get(v);R.addEventListener("dispose",N);const ht=R.textures,f=R.isWebGLCubeRenderTarget===!0,S=ht.length>1;if(S||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=v.version,a.memory.textures++),f){W.__webglFramebuffer=[];for(let M=0;M<6;M++)if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer[M]=[];for(let P=0;P<v.mipmaps.length;P++)W.__webglFramebuffer[M][P]=i.createFramebuffer()}else W.__webglFramebuffer[M]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer=[];for(let M=0;M<v.mipmaps.length;M++)W.__webglFramebuffer[M]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(S)for(let M=0,P=ht.length;M<P;M++){const B=n.get(ht[M]);B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&_t(R)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let M=0;M<ht.length;M++){const P=ht[M];W.__webglColorRenderbuffer[M]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[M]);const B=r.convert(P.format,P.colorSpace),U=r.convert(P.type),V=A(P.internalFormat,B,U,P.colorSpace,R.isXRRenderTarget===!0),X=Bt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,V,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+M,i.RENDERBUFFER,W.__webglColorRenderbuffer[M])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(f){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,v);for(let M=0;M<6;M++)if(v.mipmaps&&v.mipmaps.length>0)for(let P=0;P<v.mipmaps.length;P++)Et(W.__webglFramebuffer[M][P],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+M,P);else Et(W.__webglFramebuffer[M],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+M,0);_(v)&&l(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(S){for(let M=0,P=ht.length;M<P;M++){const B=ht[M],U=n.get(B);let V=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(V=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(V,U.__webglTexture),Ft(V,B),Et(W.__webglFramebuffer,R,B,i.COLOR_ATTACHMENT0+M,V,0),_(B)&&l(V)}e.unbindTexture()}else{let M=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(M=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(M,nt.__webglTexture),Ft(M,v),v.mipmaps&&v.mipmaps.length>0)for(let P=0;P<v.mipmaps.length;P++)Et(W.__webglFramebuffer[P],R,v,i.COLOR_ATTACHMENT0,M,P);else Et(W.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,M,0);_(v)&&l(M),e.unbindTexture()}R.depthBuffer&&Ht(R)}function $(R){const v=R.textures;for(let W=0,nt=v.length;W<nt;W++){const ht=v[W];if(_(ht)){const f=w(R),S=n.get(ht).__webglTexture;e.bindTexture(f,S),l(f),e.unbindTexture()}}}const lt=[],ut=[];function ct(R){if(R.samples>0){if(_t(R)===!1){const v=R.textures,W=R.width,nt=R.height;let ht=i.COLOR_BUFFER_BIT;const f=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,S=n.get(R),M=v.length>1;if(M)for(let B=0;B<v.length;B++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,S.__webglMultisampledFramebuffer);const P=R.texture.mipmaps;P&&P.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,S.__webglFramebuffer);for(let B=0;B<v.length;B++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),M){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,S.__webglColorRenderbuffer[B]);const U=n.get(v[B]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,W,nt,0,0,W,nt,ht,i.NEAREST),h===!0&&(lt.length=0,ut.length=0,lt.push(i.COLOR_ATTACHMENT0+B),R.depthBuffer&&R.resolveDepthBuffer===!1&&(lt.push(f),ut.push(f),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),M)for(let B=0;B<v.length;B++){e.bindFramebuffer(i.FRAMEBUFFER,S.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,S.__webglColorRenderbuffer[B]);const U=n.get(v[B]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D,U,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,S.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&h){const v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Bt(R){return Math.min(s.maxSamples,R.samples)}function _t(R){const v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ut(R){const v=a.render.frame;d.get(R)!==v&&(d.set(R,v),R.update())}function ee(R,v){const W=R.colorSpace,nt=R.format,ht=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==gi&&W!==vn&&(jt.getTransfer(W)===Jt?(nt!==Be||ht!==Qe)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),v}function ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=G,this.setTexture2D=tt,this.setTexture2DArray=K,this.setTexture3D=pt,this.setTextureCube=J,this.rebindTextures=he,this.setupRenderTarget=C,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=_t}function em(i,t){function e(n,s=vn){let r;const a=jt.getTransfer(s);if(n===Qe)return i.UNSIGNED_BYTE;if(n===po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===el)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qa)return i.BYTE;if(n===tl)return i.SHORT;if(n===Oi)return i.UNSIGNED_SHORT;if(n===fo)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===Ke)return i.FLOAT;if(n===Gi)return i.HALF_FLOAT;if(n===il)return i.ALPHA;if(n===sl)return i.RGB;if(n===Be)return i.RGBA;if(n===zi)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===_o)return i.RED;if(n===go)return i.RED_INTEGER;if(n===rl)return i.RG;if(n===xo)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===gs||n===xs||n===vs||n===Ms)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ms)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dr||n===Lr||n===Ir||n===Ur)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ir)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ur)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nr||n===Fr||n===Or)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nr||n===Fr)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Or)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Br||n===zr||n===kr||n===Hr||n===Vr||n===Gr||n===Wr||n===Xr||n===Yr||n===qr||n===jr||n===Zr||n===Kr||n===$r)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Br)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$r)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jr||n===Qr||n===to)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jr)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eo||n===no||n===io||n===so)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===so)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const nm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,im=`
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

}`;class sm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Ml(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bn({vertexShader:nm,fragmentShader:im,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new Ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rm extends Vn{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",h=1,c=null,d=null,u=null,p=null,g=null,x=null;const m=typeof XRWebGLBinding<"u",_=new sm,l={},w=e.getContextAttributes();let A=null,b=null;const I=[],L=[],N=new Lt;let z=null;const T=new Ie;T.viewport=new te;const E=new Ie;E.viewport=new te;const O=[T,E],G=new Eh;let q=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let at=I[et];return at===void 0&&(at=new or,I[et]=at),at.getTargetRaySpace()},this.getControllerGrip=function(et){let at=I[et];return at===void 0&&(at=new or,I[et]=at),at.getGripSpace()},this.getHand=function(et){let at=I[et];return at===void 0&&(at=new or,I[et]=at),at.getHandSpace()};function tt(et){const at=L.indexOf(et.inputSource);if(at===-1)return;const Et=I[at];Et!==void 0&&(Et.update(et.inputSource,et.frame,c||a),Et.dispatchEvent({type:et.type,data:et.inputSource}))}function K(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",pt);for(let et=0;et<I.length;et++){const at=L[et];at!==null&&(L[et]=null,I[et].disconnect(at))}q=null,Q=null,_.reset();for(const et in l)delete l[et];t.setRenderTarget(A),g=null,p=null,u=null,s=null,b=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(z),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",K),s.addEventListener("inputsourceschange",pt),w.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(N),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Pt=null,At=null;w.depth&&(At=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=w.stencil?ki:zi,Pt=w.stencil?Bi:zn);const Ht={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(Ht),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),b=new Hn(p.textureWidth,p.textureHeight,{format:Be,type:Qe,depthTexture:new vl(p.textureWidth,p.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Et={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new Hn(g.framebufferWidth,g.framebufferHeight,{format:Be,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),c=null,a=await s.requestReferenceSpace(o),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function pt(et){for(let at=0;at<et.removed.length;at++){const Et=et.removed[at],Pt=L.indexOf(Et);Pt>=0&&(L[Pt]=null,I[Pt].disconnect(Et))}for(let at=0;at<et.added.length;at++){const Et=et.added[at];let Pt=L.indexOf(Et);if(Pt===-1){for(let Ht=0;Ht<I.length;Ht++)if(Ht>=L.length){L.push(Et),Pt=Ht;break}else if(L[Ht]===null){L[Ht]=Et,Pt=Ht;break}if(Pt===-1)break}const At=I[Pt];At&&At.connect(Et)}}const J=new F,gt=new F;function vt(et,at,Et){J.setFromMatrixPosition(at.matrixWorld),gt.setFromMatrixPosition(Et.matrixWorld);const Pt=J.distanceTo(gt),At=at.projectionMatrix.elements,Ht=Et.projectionMatrix.elements,he=At[14]/(At[10]-1),C=At[14]/(At[10]+1),$=(At[9]+1)/At[5],lt=(At[9]-1)/At[5],ut=(At[8]-1)/At[0],ct=(Ht[8]+1)/Ht[0],Bt=he*ut,_t=he*ct,Ut=Pt/(-ut+ct),ee=Ut*-ut;if(at.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(ee),et.translateZ(Ut),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),At[10]===-1)et.projectionMatrix.copy(at.projectionMatrix),et.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const ne=he+Ut,R=C+Ut,v=Bt-ee,W=_t+(Pt-ee),nt=$*C/R*ne,ht=lt*C/R*ne;et.projectionMatrix.makePerspective(v,W,nt,ht,ne,R),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Tt(et,at){at===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(at.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let at=et.near,Et=et.far;_.texture!==null&&(_.depthNear>0&&(at=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),G.near=E.near=T.near=at,G.far=E.far=T.far=Et,(q!==G.near||Q!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),q=G.near,Q=G.far),G.layers.mask=et.layers.mask|6,T.layers.mask=G.layers.mask&3,E.layers.mask=G.layers.mask&5;const Pt=et.parent,At=G.cameras;Tt(G,Pt);for(let Ht=0;Ht<At.length;Ht++)Tt(At[Ht],Pt);At.length===2?vt(G,T,E):G.projectionMatrix.copy(T.projectionMatrix),Ft(et,G,Pt)};function Ft(et,at,Et){Et===null?et.matrix.copy(at.matrixWorld):(et.matrix.copy(Et.matrixWorld),et.matrix.invert(),et.matrix.multiply(at.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(at.projectionMatrix),et.projectionMatrixInverse.copy(at.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Hi*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(p===null&&g===null))return h},this.setFoveation=function(et){h=et,p!==null&&(p.fixedFoveation=et),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=et)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(G)},this.getCameraTexture=function(et){return l[et]};let Yt=null;function Rt(et,at){if(d=at.getViewerPose(c||a),x=at,d!==null){const Et=d.views;g!==null&&(t.setRenderTargetFramebuffer(b,g.framebuffer),t.setRenderTarget(b));let Pt=!1;Et.length!==G.cameras.length&&(G.cameras.length=0,Pt=!0);for(let C=0;C<Et.length;C++){const $=Et[C];let lt=null;if(g!==null)lt=g.getViewport($);else{const ct=u.getViewSubImage(p,$);lt=ct.viewport,C===0&&(t.setRenderTargetTextures(b,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(b))}let ut=O[C];ut===void 0&&(ut=new Ie,ut.layers.enable(C),ut.viewport=new te,O[C]=ut),ut.matrix.fromArray($.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray($.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(lt.x,lt.y,lt.width,lt.height),C===0&&(G.matrix.copy(ut.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Pt===!0&&G.cameras.push(ut)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&m){u=n.getBinding();const C=u.getDepthInformation(Et[0]);C&&C.isValid&&C.texture&&_.init(C,s.renderState)}if(At&&At.includes("camera-access")&&m){t.state.unbindTexture(),u=n.getBinding();for(let C=0;C<Et.length;C++){const $=Et[C].camera;if($){let lt=l[$];lt||(lt=new Ml,l[$]=lt);const ut=u.getCameraImage($);lt.sourceTexture=ut}}}}for(let Et=0;Et<I.length;Et++){const Pt=L[Et],At=I[Et];Pt!==null&&At!==void 0&&At.update(Pt,at,c||a)}Yt&&Yt(et,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),x=null}const Ot=new yl;Ot.setAnimationLoop(Rt),this.setAnimationLoop=function(et){Yt=et},this.dispose=function(){}}}const In=new We,om=new se;function am(i,t){function e(_,l){_.matrixAutoUpdate===!0&&_.updateMatrix(),l.value.copy(_.matrix)}function n(_,l){l.color.getRGB(_.fogColor.value,dl(i)),l.isFog?(_.fogNear.value=l.near,_.fogFar.value=l.far):l.isFogExp2&&(_.fogDensity.value=l.density)}function s(_,l,w,A,b){l.isMeshBasicMaterial||l.isMeshLambertMaterial?r(_,l):l.isMeshToonMaterial?(r(_,l),u(_,l)):l.isMeshPhongMaterial?(r(_,l),d(_,l)):l.isMeshStandardMaterial?(r(_,l),p(_,l),l.isMeshPhysicalMaterial&&g(_,l,b)):l.isMeshMatcapMaterial?(r(_,l),x(_,l)):l.isMeshDepthMaterial?r(_,l):l.isMeshDistanceMaterial?(r(_,l),m(_,l)):l.isMeshNormalMaterial?r(_,l):l.isLineBasicMaterial?(a(_,l),l.isLineDashedMaterial&&o(_,l)):l.isPointsMaterial?h(_,l,w,A):l.isSpriteMaterial?c(_,l):l.isShadowMaterial?(_.color.value.copy(l.color),_.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function r(_,l){_.opacity.value=l.opacity,l.color&&_.diffuse.value.copy(l.color),l.emissive&&_.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(_.map.value=l.map,e(l.map,_.mapTransform)),l.alphaMap&&(_.alphaMap.value=l.alphaMap,e(l.alphaMap,_.alphaMapTransform)),l.bumpMap&&(_.bumpMap.value=l.bumpMap,e(l.bumpMap,_.bumpMapTransform),_.bumpScale.value=l.bumpScale,l.side===Te&&(_.bumpScale.value*=-1)),l.normalMap&&(_.normalMap.value=l.normalMap,e(l.normalMap,_.normalMapTransform),_.normalScale.value.copy(l.normalScale),l.side===Te&&_.normalScale.value.negate()),l.displacementMap&&(_.displacementMap.value=l.displacementMap,e(l.displacementMap,_.displacementMapTransform),_.displacementScale.value=l.displacementScale,_.displacementBias.value=l.displacementBias),l.emissiveMap&&(_.emissiveMap.value=l.emissiveMap,e(l.emissiveMap,_.emissiveMapTransform)),l.specularMap&&(_.specularMap.value=l.specularMap,e(l.specularMap,_.specularMapTransform)),l.alphaTest>0&&(_.alphaTest.value=l.alphaTest);const w=t.get(l),A=w.envMap,b=w.envMapRotation;A&&(_.envMap.value=A,In.copy(b),In.x*=-1,In.y*=-1,In.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),_.envMapRotation.value.setFromMatrix4(om.makeRotationFromEuler(In)),_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=l.reflectivity,_.ior.value=l.ior,_.refractionRatio.value=l.refractionRatio),l.lightMap&&(_.lightMap.value=l.lightMap,_.lightMapIntensity.value=l.lightMapIntensity,e(l.lightMap,_.lightMapTransform)),l.aoMap&&(_.aoMap.value=l.aoMap,_.aoMapIntensity.value=l.aoMapIntensity,e(l.aoMap,_.aoMapTransform))}function a(_,l){_.diffuse.value.copy(l.color),_.opacity.value=l.opacity,l.map&&(_.map.value=l.map,e(l.map,_.mapTransform))}function o(_,l){_.dashSize.value=l.dashSize,_.totalSize.value=l.dashSize+l.gapSize,_.scale.value=l.scale}function h(_,l,w,A){_.diffuse.value.copy(l.color),_.opacity.value=l.opacity,_.size.value=l.size*w,_.scale.value=A*.5,l.map&&(_.map.value=l.map,e(l.map,_.uvTransform)),l.alphaMap&&(_.alphaMap.value=l.alphaMap,e(l.alphaMap,_.alphaMapTransform)),l.alphaTest>0&&(_.alphaTest.value=l.alphaTest)}function c(_,l){_.diffuse.value.copy(l.color),_.opacity.value=l.opacity,_.rotation.value=l.rotation,l.map&&(_.map.value=l.map,e(l.map,_.mapTransform)),l.alphaMap&&(_.alphaMap.value=l.alphaMap,e(l.alphaMap,_.alphaMapTransform)),l.alphaTest>0&&(_.alphaTest.value=l.alphaTest)}function d(_,l){_.specular.value.copy(l.specular),_.shininess.value=Math.max(l.shininess,1e-4)}function u(_,l){l.gradientMap&&(_.gradientMap.value=l.gradientMap)}function p(_,l){_.metalness.value=l.metalness,l.metalnessMap&&(_.metalnessMap.value=l.metalnessMap,e(l.metalnessMap,_.metalnessMapTransform)),_.roughness.value=l.roughness,l.roughnessMap&&(_.roughnessMap.value=l.roughnessMap,e(l.roughnessMap,_.roughnessMapTransform)),l.envMap&&(_.envMapIntensity.value=l.envMapIntensity)}function g(_,l,w){_.ior.value=l.ior,l.sheen>0&&(_.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),_.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(_.sheenColorMap.value=l.sheenColorMap,e(l.sheenColorMap,_.sheenColorMapTransform)),l.sheenRoughnessMap&&(_.sheenRoughnessMap.value=l.sheenRoughnessMap,e(l.sheenRoughnessMap,_.sheenRoughnessMapTransform))),l.clearcoat>0&&(_.clearcoat.value=l.clearcoat,_.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(_.clearcoatMap.value=l.clearcoatMap,e(l.clearcoatMap,_.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,e(l.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(_.clearcoatNormalMap.value=l.clearcoatNormalMap,e(l.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===Te&&_.clearcoatNormalScale.value.negate())),l.dispersion>0&&(_.dispersion.value=l.dispersion),l.iridescence>0&&(_.iridescence.value=l.iridescence,_.iridescenceIOR.value=l.iridescenceIOR,_.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(_.iridescenceMap.value=l.iridescenceMap,e(l.iridescenceMap,_.iridescenceMapTransform)),l.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=l.iridescenceThicknessMap,e(l.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),l.transmission>0&&(_.transmission.value=l.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),l.transmissionMap&&(_.transmissionMap.value=l.transmissionMap,e(l.transmissionMap,_.transmissionMapTransform)),_.thickness.value=l.thickness,l.thicknessMap&&(_.thicknessMap.value=l.thicknessMap,e(l.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=l.attenuationDistance,_.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(_.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(_.anisotropyMap.value=l.anisotropyMap,e(l.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=l.specularIntensity,_.specularColor.value.copy(l.specularColor),l.specularColorMap&&(_.specularColorMap.value=l.specularColorMap,e(l.specularColorMap,_.specularColorMapTransform)),l.specularIntensityMap&&(_.specularIntensityMap.value=l.specularIntensityMap,e(l.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,l){l.matcap&&(_.matcap.value=l.matcap)}function m(_,l){const w=t.get(l).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(w,A){const b=A.program;n.uniformBlockBinding(w,b)}function c(w,A){let b=s[w.id];b===void 0&&(x(w),b=d(w),s[w.id]=b,w.addEventListener("dispose",_));const I=A.program;n.updateUBOMapping(w,I);const L=t.render.frame;r[w.id]!==L&&(p(w),r[w.id]=L)}function d(w){const A=u();w.__bindingPointIndex=A;const b=i.createBuffer(),I=w.__size,L=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,I,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,b),b}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const A=s[w.id],b=w.uniforms,I=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let L=0,N=b.length;L<N;L++){const z=Array.isArray(b[L])?b[L]:[b[L]];for(let T=0,E=z.length;T<E;T++){const O=z[T];if(g(O,L,T,I)===!0){const G=O.__offset,q=Array.isArray(O.value)?O.value:[O.value];let Q=0;for(let tt=0;tt<q.length;tt++){const K=q[tt],pt=m(K);typeof K=="number"||typeof K=="boolean"?(O.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,G+Q,O.__data)):K.isMatrix3?(O.__data[0]=K.elements[0],O.__data[1]=K.elements[1],O.__data[2]=K.elements[2],O.__data[3]=0,O.__data[4]=K.elements[3],O.__data[5]=K.elements[4],O.__data[6]=K.elements[5],O.__data[7]=0,O.__data[8]=K.elements[6],O.__data[9]=K.elements[7],O.__data[10]=K.elements[8],O.__data[11]=0):(K.toArray(O.__data,Q),Q+=pt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(w,A,b,I){const L=w.value,N=A+"_"+b;if(I[N]===void 0)return typeof L=="number"||typeof L=="boolean"?I[N]=L:I[N]=L.clone(),!0;{const z=I[N];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return I[N]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function x(w){const A=w.uniforms;let b=0;const I=16;for(let N=0,z=A.length;N<z;N++){const T=Array.isArray(A[N])?A[N]:[A[N]];for(let E=0,O=T.length;E<O;E++){const G=T[E],q=Array.isArray(G.value)?G.value:[G.value];for(let Q=0,tt=q.length;Q<tt;Q++){const K=q[Q],pt=m(K),J=b%I,gt=J%pt.boundary,vt=J+gt;b+=gt,vt!==0&&I-vt<pt.storage&&(b+=I-vt),G.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=pt.storage}}}const L=b%I;return L>0&&(b+=I-L),w.__size=b,w.__cache={},this}function m(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function _(w){const A=w.target;A.removeEventListener("dispose",_);const b=a.indexOf(A.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function l(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:h,update:c,dispose:l}}class cm{constructor(t={}){const{canvas:e=Oc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const x=new Uint32Array(4),m=new Int32Array(4);let _=null,l=null;const w=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let I=!1;this._outputColorSpace=Re;let L=0,N=0,z=null,T=-1,E=null;const O=new te,G=new te;let q=null;const Q=new kt(0);let tt=0,K=e.width,pt=e.height,J=1,gt=null,vt=null;const Tt=new te(0,0,K,pt),Ft=new te(0,0,K,pt);let Yt=!1;const Rt=new bo;let Ot=!1,et=!1;const at=new se,Et=new F,Pt=new te,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function he(){return z===null?J:1}let C=n;function $(y,k){return e.getContext(y,k)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ho}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),C===null){const k="webgl2";if(C=$(k,y),C===null)throw $(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let lt,ut,ct,Bt,_t,Ut,ee,ne,R,v,W,nt,ht,f,S,M,P,B,U,V,X,Y,it,st;function D(){lt=new vf(C),lt.init(),Y=new em(C,lt),ut=new df(C,lt,t,Y),ct=new Qp(C,lt),ut.reversedDepthBuffer&&p&&ct.buffers.depth.setReversed(!0),Bt=new Ef(C),_t=new kp,Ut=new tm(C,lt,ct,_t,ut,Y,Bt),ee=new pf(b),ne=new xf(b),R=new wh(C),it=new hf(C,R),v=new Mf(C,R,Bt,it),W=new Tf(C,v,R,Bt),U=new yf(C,ut,Ut),M=new ff(_t),nt=new zp(b,ee,ne,lt,ut,it,M),ht=new am(b,_t),f=new Vp,S=new jp(lt),B=new cf(b,ee,ne,ct,W,g,h),P=new $p(b,W,ut),st=new lm(C,Bt,ut,ct),V=new uf(C,lt,Bt),X=new Sf(C,lt,Bt),Bt.programs=nt.programs,b.capabilities=ut,b.extensions=lt,b.properties=_t,b.renderLists=f,b.shadowMap=P,b.state=ct,b.info=Bt}D();const rt=new rm(b,C);this.xr=rt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const y=lt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=lt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(y){y!==void 0&&(J=y,this.setSize(K,pt,!1))},this.getSize=function(y){return y.set(K,pt)},this.setSize=function(y,k,j=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,pt=k,e.width=Math.floor(y*J),e.height=Math.floor(k*J),j===!0&&(e.style.width=y+"px",e.style.height=k+"px"),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(K*J,pt*J).floor()},this.setDrawingBufferSize=function(y,k,j){K=y,pt=k,J=j,e.width=Math.floor(y*j),e.height=Math.floor(k*j),this.setViewport(0,0,y,k)},this.getCurrentViewport=function(y){return y.copy(O)},this.getViewport=function(y){return y.copy(Tt)},this.setViewport=function(y,k,j,Z){y.isVector4?Tt.set(y.x,y.y,y.z,y.w):Tt.set(y,k,j,Z),ct.viewport(O.copy(Tt).multiplyScalar(J).round())},this.getScissor=function(y){return y.copy(Ft)},this.setScissor=function(y,k,j,Z){y.isVector4?Ft.set(y.x,y.y,y.z,y.w):Ft.set(y,k,j,Z),ct.scissor(G.copy(Ft).multiplyScalar(J).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(y){ct.setScissorTest(Yt=y)},this.setOpaqueSort=function(y){gt=y},this.setTransparentSort=function(y){vt=y},this.getClearColor=function(y){return y.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(y=!0,k=!0,j=!0){let Z=0;if(y){let H=!1;if(z!==null){const mt=z.texture.format;H=mt===vo||mt===xo||mt===go}if(H){const mt=z.texture.type,St=mt===Qe||mt===zn||mt===Oi||mt===Bi||mt===po||mt===mo,wt=B.getClearColor(),yt=B.getClearAlpha(),It=wt.r,Nt=wt.g,Ct=wt.b;St?(x[0]=It,x[1]=Nt,x[2]=Ct,x[3]=yt,C.clearBufferuiv(C.COLOR,0,x)):(m[0]=It,m[1]=Nt,m[2]=Ct,m[3]=yt,C.clearBufferiv(C.COLOR,0,m))}else Z|=C.COLOR_BUFFER_BIT}k&&(Z|=C.DEPTH_BUFFER_BIT),j&&(Z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),B.dispose(),f.dispose(),S.dispose(),_t.dispose(),ee.dispose(),ne.dispose(),W.dispose(),it.dispose(),st.dispose(),nt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Xe),rt.removeEventListener("sessionend",Io),An.stop()};function dt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const y=Bt.autoReset,k=P.enabled,j=P.autoUpdate,Z=P.needsUpdate,H=P.type;D(),Bt.autoReset=y,P.enabled=k,P.autoUpdate=j,P.needsUpdate=Z,P.type=H}function ft(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ot(y){const k=y.target;k.removeEventListener("dispose",ot),bt(k)}function bt(y){zt(y),_t.remove(y)}function zt(y){const k=_t.get(y).programs;k!==void 0&&(k.forEach(function(j){nt.releaseProgram(j)}),y.isShaderMaterial&&nt.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,j,Z,H,mt){k===null&&(k=At);const St=H.isMesh&&H.matrixWorld.determinant()<0,wt=Pl(y,k,j,Z,H);ct.setMaterial(Z,St);let yt=j.index,It=1;if(Z.wireframe===!0){if(yt=v.getWireframeAttribute(j),yt===void 0)return;It=2}const Nt=j.drawRange,Ct=j.attributes.position;let Xt=Nt.start*It,$t=(Nt.start+Nt.count)*It;mt!==null&&(Xt=Math.max(Xt,mt.start*It),$t=Math.min($t,(mt.start+mt.count)*It)),yt!==null?(Xt=Math.max(Xt,0),$t=Math.min($t,yt.count)):Ct!=null&&(Xt=Math.max(Xt,0),$t=Math.min($t,Ct.count));const ce=$t-Xt;if(ce<0||ce===1/0)return;it.setup(H,Z,wt,j,yt);let oe,ie=V;if(yt!==null&&(oe=R.get(yt),ie=X,ie.setIndex(oe)),H.isMesh)Z.wireframe===!0?(ct.setLineWidth(Z.wireframeLinewidth*he()),ie.setMode(C.LINES)):ie.setMode(C.TRIANGLES);else if(H.isLine){let Dt=Z.linewidth;Dt===void 0&&(Dt=1),ct.setLineWidth(Dt*he()),H.isLineSegments?ie.setMode(C.LINES):H.isLineLoop?ie.setMode(C.LINE_LOOP):ie.setMode(C.LINE_STRIP)}else H.isPoints?ie.setMode(C.POINTS):H.isSprite&&ie.setMode(C.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Vi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))ie.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Dt=H._multiDrawStarts,ae=H._multiDrawCounts,qt=H._multiDrawCount,Ce=yt?R.get(yt).bytesPerElement:1,Xn=_t.get(Z).currentProgram.getUniforms();for(let Pe=0;Pe<qt;Pe++)Xn.setValue(C,"_gl_DrawID",Pe),ie.render(Dt[Pe]/Ce,ae[Pe])}else if(H.isInstancedMesh)ie.renderInstances(Xt,ce,H.count);else if(j.isInstancedBufferGeometry){const Dt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ae=Math.min(j.instanceCount,Dt);ie.renderInstances(Xt,ce,ae)}else ie.render(Xt,ce)};function re(y,k,j){y.transparent===!0&&y.side===je&&y.forceSinglePass===!1?(y.side=Te,y.needsUpdate=!0,Xi(y,k,j),y.side=Tn,y.needsUpdate=!0,Xi(y,k,j),y.side=je):Xi(y,k,j)}this.compile=function(y,k,j=null){j===null&&(j=y),l=S.get(j),l.init(k),A.push(l),j.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(l.pushLight(H),H.castShadow&&l.pushShadow(H))}),y!==j&&y.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(l.pushLight(H),H.castShadow&&l.pushShadow(H))}),l.setupLights();const Z=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const mt=H.material;if(mt)if(Array.isArray(mt))for(let St=0;St<mt.length;St++){const wt=mt[St];re(wt,j,H),Z.add(wt)}else re(mt,j,H),Z.add(mt)}),l=A.pop(),Z},this.compileAsync=function(y,k,j=null){const Z=this.compile(y,k,j);return new Promise(H=>{function mt(){if(Z.forEach(function(St){_t.get(St).currentProgram.isReady()&&Z.delete(St)}),Z.size===0){H(y);return}setTimeout(mt,10)}lt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Kt=null;function tn(y){Kt&&Kt(y)}function Xe(){An.stop()}function Io(){An.start()}const An=new yl;An.setAnimationLoop(tn),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(y){Kt=y,rt.setAnimationLoop(y),y===null?An.stop():An.start()},rt.addEventListener("sessionstart",Xe),rt.addEventListener("sessionend",Io),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(k),k=rt.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,k,z),l=S.get(y,A.length),l.init(k),A.push(l),at.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Rt.setFromProjectionMatrix(at,$e,k.reversedDepth),et=this.localClippingEnabled,Ot=M.init(this.clippingPlanes,et),_=f.get(y,w.length),_.init(),w.push(_),rt.enabled===!0&&rt.isPresenting===!0){const mt=b.xr.getDepthSensingMesh();mt!==null&&Os(mt,k,-1/0,b.sortObjects)}Os(y,k,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(gt,vt),Ht=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ht&&B.addToRenderList(_,y),this.info.render.frame++,Ot===!0&&M.beginShadows();const j=l.state.shadowsArray;P.render(j,y,k),Ot===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=_.opaque,H=_.transmissive;if(l.setupLights(),k.isArrayCamera){const mt=k.cameras;if(H.length>0)for(let St=0,wt=mt.length;St<wt;St++){const yt=mt[St];No(Z,H,y,yt)}Ht&&B.render(y);for(let St=0,wt=mt.length;St<wt;St++){const yt=mt[St];Uo(_,y,yt,yt.viewport)}}else H.length>0&&No(Z,H,y,k),Ht&&B.render(y),Uo(_,y,k);z!==null&&N===0&&(Ut.updateMultisampleRenderTarget(z),Ut.updateRenderTargetMipmap(z)),y.isScene===!0&&y.onAfterRender(b,y,k),it.resetDefaultState(),T=-1,E=null,A.pop(),A.length>0?(l=A[A.length-1],Ot===!0&&M.setGlobalState(b.clippingPlanes,l.state.camera)):l=null,w.pop(),w.length>0?_=w[w.length-1]:_=null};function Os(y,k,j,Z){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)j=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLight)l.pushLight(y),y.castShadow&&l.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Rt.intersectsSprite(y)){Z&&Pt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(at);const St=W.update(y),wt=y.material;wt.visible&&_.push(y,St,wt,j,Pt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Rt.intersectsObject(y))){const St=W.update(y),wt=y.material;if(Z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Pt.copy(y.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Pt.copy(St.boundingSphere.center)),Pt.applyMatrix4(y.matrixWorld).applyMatrix4(at)),Array.isArray(wt)){const yt=St.groups;for(let It=0,Nt=yt.length;It<Nt;It++){const Ct=yt[It],Xt=wt[Ct.materialIndex];Xt&&Xt.visible&&_.push(y,St,Xt,j,Pt.z,Ct)}}else wt.visible&&_.push(y,St,wt,j,Pt.z,null)}}const mt=y.children;for(let St=0,wt=mt.length;St<wt;St++)Os(mt[St],k,j,Z)}function Uo(y,k,j,Z){const H=y.opaque,mt=y.transmissive,St=y.transparent;l.setupLightsView(j),Ot===!0&&M.setGlobalState(b.clippingPlanes,j),Z&&ct.viewport(O.copy(Z)),H.length>0&&Wi(H,k,j),mt.length>0&&Wi(mt,k,j),St.length>0&&Wi(St,k,j),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function No(y,k,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;l.state.transmissionRenderTarget[Z.id]===void 0&&(l.state.transmissionRenderTarget[Z.id]=new Hn(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Gi:Qe,minFilter:Bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const mt=l.state.transmissionRenderTarget[Z.id],St=Z.viewport||O;mt.setSize(St.z*b.transmissionResolutionScale,St.w*b.transmissionResolutionScale);const wt=b.getRenderTarget(),yt=b.getActiveCubeFace(),It=b.getActiveMipmapLevel();b.setRenderTarget(mt),b.getClearColor(Q),tt=b.getClearAlpha(),tt<1&&b.setClearColor(16777215,.5),b.clear(),Ht&&B.render(j);const Nt=b.toneMapping;b.toneMapping=yn;const Ct=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),l.setupLightsView(Z),Ot===!0&&M.setGlobalState(b.clippingPlanes,Z),Wi(y,j,Z),Ut.updateMultisampleRenderTarget(mt),Ut.updateRenderTargetMipmap(mt),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let $t=0,ce=k.length;$t<ce;$t++){const oe=k[$t],ie=oe.object,Dt=oe.geometry,ae=oe.material,qt=oe.group;if(ae.side===je&&ie.layers.test(Z.layers)){const Ce=ae.side;ae.side=Te,ae.needsUpdate=!0,Fo(ie,j,Z,Dt,ae,qt),ae.side=Ce,ae.needsUpdate=!0,Xt=!0}}Xt===!0&&(Ut.updateMultisampleRenderTarget(mt),Ut.updateRenderTargetMipmap(mt))}b.setRenderTarget(wt,yt,It),b.setClearColor(Q,tt),Ct!==void 0&&(Z.viewport=Ct),b.toneMapping=Nt}function Wi(y,k,j){const Z=k.isScene===!0?k.overrideMaterial:null;for(let H=0,mt=y.length;H<mt;H++){const St=y[H],wt=St.object,yt=St.geometry,It=St.group;let Nt=St.material;Nt.allowOverride===!0&&Z!==null&&(Nt=Z),wt.layers.test(j.layers)&&Fo(wt,k,j,yt,Nt,It)}}function Fo(y,k,j,Z,H,mt){y.onBeforeRender(b,k,j,Z,H,mt),y.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(b,k,j,Z,y,mt),H.transparent===!0&&H.side===je&&H.forceSinglePass===!1?(H.side=Te,H.needsUpdate=!0,b.renderBufferDirect(j,k,Z,H,y,mt),H.side=Tn,H.needsUpdate=!0,b.renderBufferDirect(j,k,Z,H,y,mt),H.side=je):b.renderBufferDirect(j,k,Z,H,y,mt),y.onAfterRender(b,k,j,Z,H,mt)}function Xi(y,k,j){k.isScene!==!0&&(k=At);const Z=_t.get(y),H=l.state.lights,mt=l.state.shadowsArray,St=H.state.version,wt=nt.getParameters(y,H.state,mt,k,j),yt=nt.getProgramCacheKey(wt);let It=Z.programs;Z.environment=y.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(y.isMeshStandardMaterial?ne:ee).get(y.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,It===void 0&&(y.addEventListener("dispose",ot),It=new Map,Z.programs=It);let Nt=It.get(yt);if(Nt!==void 0){if(Z.currentProgram===Nt&&Z.lightsStateVersion===St)return Bo(y,wt),Nt}else wt.uniforms=nt.getUniforms(y),y.onBeforeCompile(wt,b),Nt=nt.acquireProgram(wt,yt),It.set(yt,Nt),Z.uniforms=wt.uniforms;const Ct=Z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ct.clippingPlanes=M.uniform),Bo(y,wt),Z.needsLights=Ll(y),Z.lightsStateVersion=St,Z.needsLights&&(Ct.ambientLightColor.value=H.state.ambient,Ct.lightProbe.value=H.state.probe,Ct.directionalLights.value=H.state.directional,Ct.directionalLightShadows.value=H.state.directionalShadow,Ct.spotLights.value=H.state.spot,Ct.spotLightShadows.value=H.state.spotShadow,Ct.rectAreaLights.value=H.state.rectArea,Ct.ltc_1.value=H.state.rectAreaLTC1,Ct.ltc_2.value=H.state.rectAreaLTC2,Ct.pointLights.value=H.state.point,Ct.pointLightShadows.value=H.state.pointShadow,Ct.hemisphereLights.value=H.state.hemi,Ct.directionalShadowMap.value=H.state.directionalShadowMap,Ct.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ct.spotShadowMap.value=H.state.spotShadowMap,Ct.spotLightMatrix.value=H.state.spotLightMatrix,Ct.spotLightMap.value=H.state.spotLightMap,Ct.pointShadowMap.value=H.state.pointShadowMap,Ct.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=Nt,Z.uniformsList=null,Nt}function Oo(y){if(y.uniformsList===null){const k=y.currentProgram.getUniforms();y.uniformsList=Ss.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function Bo(y,k){const j=_t.get(y);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Pl(y,k,j,Z,H){k.isScene!==!0&&(k=At),Ut.resetTextureUnits();const mt=k.fog,St=Z.isMeshStandardMaterial?k.environment:null,wt=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:gi,yt=(Z.isMeshStandardMaterial?ne:ee).get(Z.envMap||St),It=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Nt=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ct=!!j.morphAttributes.position,Xt=!!j.morphAttributes.normal,$t=!!j.morphAttributes.color;let ce=yn;Z.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(ce=b.toneMapping);const oe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ie=oe!==void 0?oe.length:0,Dt=_t.get(Z),ae=l.state.lights;if(Ot===!0&&(et===!0||y!==E)){const Se=y===E&&Z.id===T;M.setState(Z,y,Se)}let qt=!1;Z.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==ae.state.version||Dt.outputColorSpace!==wt||H.isBatchedMesh&&Dt.batching===!1||!H.isBatchedMesh&&Dt.batching===!0||H.isBatchedMesh&&Dt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Dt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Dt.instancing===!1||!H.isInstancedMesh&&Dt.instancing===!0||H.isSkinnedMesh&&Dt.skinning===!1||!H.isSkinnedMesh&&Dt.skinning===!0||H.isInstancedMesh&&Dt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Dt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Dt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Dt.instancingMorph===!1&&H.morphTexture!==null||Dt.envMap!==yt||Z.fog===!0&&Dt.fog!==mt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==M.numPlanes||Dt.numIntersection!==M.numIntersection)||Dt.vertexAlphas!==It||Dt.vertexTangents!==Nt||Dt.morphTargets!==Ct||Dt.morphNormals!==Xt||Dt.morphColors!==$t||Dt.toneMapping!==ce||Dt.morphTargetsCount!==ie)&&(qt=!0):(qt=!0,Dt.__version=Z.version);let Ce=Dt.currentProgram;qt===!0&&(Ce=Xi(Z,k,H));let Xn=!1,Pe=!1,Ti=!1;const le=Ce.getUniforms(),Ne=Dt.uniforms;if(ct.useProgram(Ce.program)&&(Xn=!0,Pe=!0,Ti=!0),Z.id!==T&&(T=Z.id,Pe=!0),Xn||E!==y){ct.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),le.setValue(C,"projectionMatrix",y.projectionMatrix),le.setValue(C,"viewMatrix",y.matrixWorldInverse);const Ae=le.map.cameraPosition;Ae!==void 0&&Ae.setValue(C,Et.setFromMatrixPosition(y.matrixWorld)),ut.logarithmicDepthBuffer&&le.setValue(C,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&le.setValue(C,"isOrthographic",y.isOrthographicCamera===!0),E!==y&&(E=y,Pe=!0,Ti=!0)}if(H.isSkinnedMesh){le.setOptional(C,H,"bindMatrix"),le.setOptional(C,H,"bindMatrixInverse");const Se=H.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),le.setValue(C,"boneTexture",Se.boneTexture,Ut))}H.isBatchedMesh&&(le.setOptional(C,H,"batchingTexture"),le.setValue(C,"batchingTexture",H._matricesTexture,Ut),le.setOptional(C,H,"batchingIdTexture"),le.setValue(C,"batchingIdTexture",H._indirectTexture,Ut),le.setOptional(C,H,"batchingColorTexture"),H._colorsTexture!==null&&le.setValue(C,"batchingColorTexture",H._colorsTexture,Ut));const Fe=j.morphAttributes;if((Fe.position!==void 0||Fe.normal!==void 0||Fe.color!==void 0)&&U.update(H,j,Ce),(Pe||Dt.receiveShadow!==H.receiveShadow)&&(Dt.receiveShadow=H.receiveShadow,le.setValue(C,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Ne.envMap.value=yt,Ne.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&k.environment!==null&&(Ne.envMapIntensity.value=k.environmentIntensity),Pe&&(le.setValue(C,"toneMappingExposure",b.toneMappingExposure),Dt.needsLights&&Dl(Ne,Ti),mt&&Z.fog===!0&&ht.refreshFogUniforms(Ne,mt),ht.refreshMaterialUniforms(Ne,Z,J,pt,l.state.transmissionRenderTarget[y.id]),Ss.upload(C,Oo(Dt),Ne,Ut)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ss.upload(C,Oo(Dt),Ne,Ut),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&le.setValue(C,"center",H.center),le.setValue(C,"modelViewMatrix",H.modelViewMatrix),le.setValue(C,"normalMatrix",H.normalMatrix),le.setValue(C,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Se=Z.uniformsGroups;for(let Ae=0,Bs=Se.length;Ae<Bs;Ae++){const wn=Se[Ae];st.update(wn,Ce),st.bind(wn,Ce)}}return Ce}function Dl(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function Ll(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(y,k,j){const Z=_t.get(y);Z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),_t.get(y.texture).__webglTexture=k,_t.get(y.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:j,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,k){const j=_t.get(y);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0};const Il=C.createFramebuffer();this.setRenderTarget=function(y,k=0,j=0){z=y,L=k,N=j;let Z=!0,H=null,mt=!1,St=!1;if(y){const yt=_t.get(y);if(yt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(C.FRAMEBUFFER,null),Z=!1;else if(yt.__webglFramebuffer===void 0)Ut.setupRenderTarget(y);else if(yt.__hasExternalTextures)Ut.rebindTextures(y,_t.get(y.texture).__webglTexture,_t.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ct=y.depthTexture;if(yt.__boundDepthTexture!==Ct){if(Ct!==null&&_t.has(Ct)&&(y.width!==Ct.image.width||y.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ut.setupDepthRenderbuffer(y)}}const It=y.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(St=!0);const Nt=_t.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Nt[k])?H=Nt[k][j]:H=Nt[k],mt=!0):y.samples>0&&Ut.useMultisampledRTT(y)===!1?H=_t.get(y).__webglMultisampledFramebuffer:Array.isArray(Nt)?H=Nt[j]:H=Nt,O.copy(y.viewport),G.copy(y.scissor),q=y.scissorTest}else O.copy(Tt).multiplyScalar(J).floor(),G.copy(Ft).multiplyScalar(J).floor(),q=Yt;if(j!==0&&(H=Il),ct.bindFramebuffer(C.FRAMEBUFFER,H)&&Z&&ct.drawBuffers(y,H),ct.viewport(O),ct.scissor(G),ct.setScissorTest(q),mt){const yt=_t.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+k,yt.__webglTexture,j)}else if(St){const yt=k;for(let It=0;It<y.textures.length;It++){const Nt=_t.get(y.textures[It]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+It,Nt.__webglTexture,j,yt)}}else if(y!==null&&j!==0){const yt=_t.get(y.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,yt.__webglTexture,j)}T=-1},this.readRenderTargetPixels=function(y,k,j,Z,H,mt,St,wt=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=_t.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St]),yt){ct.bindFramebuffer(C.FRAMEBUFFER,yt);try{const It=y.textures[wt],Nt=It.format,Ct=It.type;if(!ut.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-Z&&j>=0&&j<=y.height-H&&(y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+wt),C.readPixels(k,j,Z,H,Y.convert(Nt),Y.convert(Ct),mt))}finally{const It=z!==null?_t.get(z).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(y,k,j,Z,H,mt,St,wt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=_t.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St]),yt)if(k>=0&&k<=y.width-Z&&j>=0&&j<=y.height-H){ct.bindFramebuffer(C.FRAMEBUFFER,yt);const It=y.textures[wt],Nt=It.format,Ct=It.type;if(!ut.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Xt),C.bufferData(C.PIXEL_PACK_BUFFER,mt.byteLength,C.STREAM_READ),y.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+wt),C.readPixels(k,j,Z,H,Y.convert(Nt),Y.convert(Ct),0);const $t=z!==null?_t.get(z).__webglFramebuffer:null;ct.bindFramebuffer(C.FRAMEBUFFER,$t);const ce=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Bc(C,ce,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Xt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,mt),C.deleteBuffer(Xt),C.deleteSync(ce),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,k=null,j=0){const Z=Math.pow(2,-j),H=Math.floor(y.image.width*Z),mt=Math.floor(y.image.height*Z),St=k!==null?k.x:0,wt=k!==null?k.y:0;Ut.setTexture2D(y,0),C.copyTexSubImage2D(C.TEXTURE_2D,j,0,0,St,wt,H,mt),ct.unbindTexture()};const Ul=C.createFramebuffer(),Nl=C.createFramebuffer();this.copyTextureToTexture=function(y,k,j=null,Z=null,H=0,mt=null){mt===null&&(H!==0?(Vi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),mt=H,H=0):mt=0);let St,wt,yt,It,Nt,Ct,Xt,$t,ce;const oe=y.isCompressedTexture?y.mipmaps[mt]:y.image;if(j!==null)St=j.max.x-j.min.x,wt=j.max.y-j.min.y,yt=j.isBox3?j.max.z-j.min.z:1,It=j.min.x,Nt=j.min.y,Ct=j.isBox3?j.min.z:0;else{const Fe=Math.pow(2,-H);St=Math.floor(oe.width*Fe),wt=Math.floor(oe.height*Fe),y.isDataArrayTexture?yt=oe.depth:y.isData3DTexture?yt=Math.floor(oe.depth*Fe):yt=1,It=0,Nt=0,Ct=0}Z!==null?(Xt=Z.x,$t=Z.y,ce=Z.z):(Xt=0,$t=0,ce=0);const ie=Y.convert(k.format),Dt=Y.convert(k.type);let ae;k.isData3DTexture?(Ut.setTexture3D(k,0),ae=C.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Ut.setTexture2DArray(k,0),ae=C.TEXTURE_2D_ARRAY):(Ut.setTexture2D(k,0),ae=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);const qt=C.getParameter(C.UNPACK_ROW_LENGTH),Ce=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Xn=C.getParameter(C.UNPACK_SKIP_PIXELS),Pe=C.getParameter(C.UNPACK_SKIP_ROWS),Ti=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,oe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,oe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,It),C.pixelStorei(C.UNPACK_SKIP_ROWS,Nt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ct);const le=y.isDataArrayTexture||y.isData3DTexture,Ne=k.isDataArrayTexture||k.isData3DTexture;if(y.isDepthTexture){const Fe=_t.get(y),Se=_t.get(k),Ae=_t.get(Fe.__renderTarget),Bs=_t.get(Se.__renderTarget);ct.bindFramebuffer(C.READ_FRAMEBUFFER,Ae.__webglFramebuffer),ct.bindFramebuffer(C.DRAW_FRAMEBUFFER,Bs.__webglFramebuffer);for(let wn=0;wn<yt;wn++)le&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(y).__webglTexture,H,Ct+wn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(k).__webglTexture,mt,ce+wn)),C.blitFramebuffer(It,Nt,St,wt,Xt,$t,St,wt,C.DEPTH_BUFFER_BIT,C.NEAREST);ct.bindFramebuffer(C.READ_FRAMEBUFFER,null),ct.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||_t.has(y)){const Fe=_t.get(y),Se=_t.get(k);ct.bindFramebuffer(C.READ_FRAMEBUFFER,Ul),ct.bindFramebuffer(C.DRAW_FRAMEBUFFER,Nl);for(let Ae=0;Ae<yt;Ae++)le?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Fe.__webglTexture,H,Ct+Ae):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Fe.__webglTexture,H),Ne?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Se.__webglTexture,mt,ce+Ae):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Se.__webglTexture,mt),H!==0?C.blitFramebuffer(It,Nt,St,wt,Xt,$t,St,wt,C.COLOR_BUFFER_BIT,C.NEAREST):Ne?C.copyTexSubImage3D(ae,mt,Xt,$t,ce+Ae,It,Nt,St,wt):C.copyTexSubImage2D(ae,mt,Xt,$t,It,Nt,St,wt);ct.bindFramebuffer(C.READ_FRAMEBUFFER,null),ct.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ne?y.isDataTexture||y.isData3DTexture?C.texSubImage3D(ae,mt,Xt,$t,ce,St,wt,yt,ie,Dt,oe.data):k.isCompressedArrayTexture?C.compressedTexSubImage3D(ae,mt,Xt,$t,ce,St,wt,yt,ie,oe.data):C.texSubImage3D(ae,mt,Xt,$t,ce,St,wt,yt,ie,Dt,oe):y.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,mt,Xt,$t,St,wt,ie,Dt,oe.data):y.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,mt,Xt,$t,oe.width,oe.height,ie,oe.data):C.texSubImage2D(C.TEXTURE_2D,mt,Xt,$t,St,wt,ie,Dt,oe);C.pixelStorei(C.UNPACK_ROW_LENGTH,qt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ce),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Xn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Pe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ti),mt===0&&k.generateMipmaps&&C.generateMipmap(ae),ct.unbindTexture()},this.initRenderTarget=function(y){_t.get(y).__webglFramebuffer===void 0&&Ut.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ut.setTextureCube(y,0):y.isData3DTexture?Ut.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ut.setTexture2DArray(y,0):Ut.setTexture2D(y,0),ct.unbindTexture()},this.resetState=function(){L=0,N=0,z=null,ct.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $e}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const qa={type:"change"},Lo={type:"start"},Rl={type:"end"},_s=new Us,ja=new xn,hm=Math.cos(70*Mn.DEG2RAD),fe=new F,we=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gr=1e-6;class um extends bh{constructor(t,e=null){super(t,e),this.state=Qt.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:Sn.ROTATE,TWO:Sn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new kn,this._lastTargetPosition=new F,this._quat=new kn().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new oo,this._sphericalDelta=new oo,this._scale=1,this._panOffset=new F,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new F,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fm.bind(this),this._onPointerDown=dm.bind(this),this._onPointerUp=pm.bind(this),this._onContextMenu=Sm.bind(this),this._onMouseWheel=gm.bind(this),this._onKeyDown=xm.bind(this),this._onTouchStart=vm.bind(this),this._onTouchMove=Mm.bind(this),this._onMouseDown=mm.bind(this),this._onMouseMove=_m.bind(this),this._interceptControlDown=Em.bind(this),this._interceptControlUp=ym.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qa),this.update(),this.state=Qt.NONE}update(t=null){const e=this.object.position;fe.copy(e).sub(this.target),fe.applyQuaternion(this._quat),this._spherical.setFromVector3(fe),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=we:n>Math.PI&&(n-=we),s<-Math.PI?s+=we:s>Math.PI&&(s-=we),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(fe.setFromSpherical(this._spherical),fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=fe.length();a=this._clampDistance(o*this._scale);const h=o-a;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),r=!!h}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=h!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(_s.origin.copy(this.object.position),_s.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_s.direction))<hm?this.object.lookAt(this.target):(ja.setFromNormalAndCoplanarPoint(this.object.up,this.target),_s.intersectPlane(ja,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>gr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gr||this._lastTargetPosition.distanceToSquared(this.target)>gr?(this.dispatchEvent(qa),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?we/60*this.autoRotateSpeed*t:we/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){fe.setFromMatrixColumn(e,0),fe.multiplyScalar(-t),this._panOffset.add(fe)}_panUp(t,e){this.screenSpacePanning===!0?fe.setFromMatrixColumn(e,1):(fe.setFromMatrixColumn(e,0),fe.crossVectors(this.object.up,fe)),fe.multiplyScalar(t),this._panOffset.add(fe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;fe.copy(s).sub(this.target);let r=fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(we*this._rotateDelta.x/e.clientHeight),this._rotateUp(we*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(we*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-we*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(we*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-we*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(we*this._rotateDelta.x/e.clientHeight),this._rotateUp(we*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function dm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function fm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function pm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rl),this.state=Qt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function mm(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qt.DOLLY;break;case ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}break;case ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(Lo)}function _m(i){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function gm(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(i.preventDefault(),this.dispatchEvent(Lo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Rl))}function xm(i){this.enabled!==!1&&this._handleKeyDown(i)}function vm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Sn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qt.TOUCH_ROTATE;break;case Sn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case Sn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qt.TOUCH_DOLLY_PAN;break;case Sn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(Lo)}function Mm(i){switch(this._trackPointer(i),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qt.NONE}}function Sm(i){this.enabled!==!1&&i.preventDefault()}function Em(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ym(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Tm extends ml{constructor(){super();const t=new Wn;t.deleteAttribute("uv");const e=new Ds({side:Te}),n=new Ds,s=new vh(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new ue(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new gl(t,n,6),o=new pe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const h=new ue(t,ai(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const c=new ue(t,ai(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const d=new ue(t,ai(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);const u=new ue(t,ai(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const p=new ue(t,ai(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const g=new ue(t,ai(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function ai(i){return new ph({color:0,emissive:16777215,emissiveIntensity:i})}const xr=[{id:"main-building",key:"west-hall",x:-39,z:-5,w:34,d:12,y:6,h:7.4,roof:"gable-x"},{id:"main-building",key:"west-gable",x:-53,z:-2,w:9,d:19,y:6,h:6.3,roof:"gable-z"},{id:"main-building",key:"rear-gable",x:-42,z:-15,w:13,d:22,y:6,h:7.4,roof:"gable-z"},{id:"learning-wing",key:"rear-gallery",x:-2,z:-20,w:56,d:10,y:6,h:7.4,roof:"gable-x",gallery:!0},{id:"tech-lab",key:"technology",x:30,z:-3,w:28,d:22,y:6,h:6.7,roof:"hip",glass:!0},{id:"dining-a",key:"lakeside-dining",x:-40,z:31,w:24,d:15,y:2,h:4.7,roof:"gable-x",dining:!0},{id:"dining-b",key:"garden-dining",x:-6,z:48,w:25,d:16,y:0,h:5,roof:"hip",dining:!0},{id:"workshop",key:"workshop",x:32,z:44,w:15,d:11,y:0,h:4.6,roof:"gable-x"},{id:"residence",key:"residence",x:69,z:-40,w:37,d:11,y:8,h:7,roof:"gable-x",gallery:!0},{id:"library",key:"mountain-library",x:66,z:-67,w:33,d:10,y:24,h:4.9,roof:"planted",glass:!0}],Ls={"main-building":{point:[-28,32,-3],focus:[-35,15,-3],radius:38},"learning-wing":{point:[-1,17,-19],focus:[-2,10,-17],radius:34},courtyard:{point:[-6,20,8],focus:[-6,9,8],radius:28},"tech-lab":{point:[30,19,-3],focus:[30,9,0],radius:31},"dining-a":{point:[-40,10,31],focus:[-40,4,34],radius:28},"dining-b":{point:[-6,9,48],focus:[-6,3,50],radius:28},workshop:{point:[32,8,44],focus:[40,3,45],radius:29},"football-field":{point:[73,3,13],focus:[73,3,10],radius:43},residence:{point:[69,19,-40],focus:[69,11,-38],radius:34},library:{point:[66,31,-66],focus:[66,26,-63],radius:32},"ideas-garden":{point:[20,3,67],focus:[20,1,65],radius:27}},Fi={"gaming-zone":"tech-lab","quiet-room":"learning-wing"},Cl=i=>Ls[Fi[i]||i],co={"main-building":[[-23,6.2,4],[-23,6.2,10]],courtyard:[[-23,6.2,4],[-23,6.2,10],[-18,6.2,16],[-9,6.2,20]],"learning-wing":[[-23,6.2,4],[-23,6.2,10],[-20,6.2,-8],[-3,6.2,-12]],"tech-lab":[[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[7,6.2,20],[17,6.2,11],[24,6.2,10]],"dining-a":[[-23,6.2,4],[-23,6.2,10],[-25,6.2,18],[-26,2.2,25],[-28,2.2,38]],"dining-b":[[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[-20,2.2,28],[-21,2.2,38],[-21,.2,48]],workshop:[[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[7,6.2,20],[14,.2,32],[22,.2,49],[27,.2,51]],"football-field":[[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[7,6.2,20],[18,2.2,24],[48,2.2,24],[49,2.2,15]],residence:[[-23,6.2,4],[-23,6.2,10],[-20,6.2,-8],[8,6.2,-12],[12,6.2,-29],[45,8.2,-29],[69,8.2,-32]],library:[[-23,6.2,4],[-23,6.2,10],[-20,6.2,-8],[8,6.2,-12],[12,6.2,-29],[36,8.2,-29],[40,13,-44],[51,18,-48],[49,24.2,-58],[58,24.2,-60]],"ideas-garden":[[-23,6.2,4],[-23,6.2,10],[-18,6.2,20],[7,6.2,20],[14,.2,32],[22,.2,49],[20,.2,66]]},bm=i=>co[Fi[i]||i]||[],Ye={x:-6,z:8},an={x:73,z:11,y:2.12,w:43,d:64,yaw:-.4};function ln(i,t){const e=(h,c,d)=>{const u=Math.max(0,Math.min(1,(d-h)/(c-h)));return u*u*(3-2*u)},n=6*e(-48,-30,t)*(1-e(17,33,t))*(1-e(42,53,i))*e(-69,-60,i),s=-50+5*Math.sin(i*.06)+3*Math.sin(i*.14),r=-4*(1-e(s-12,s+10,t)),a=44*Math.exp(-(((i-94)/46)**2)-((t+91)/48)**2)*e(25,48,i)*(1-e(-29,-23,t));let o=Math.max(n,a)+r-.6;return i>14&&i<48&&t>8&&t<28&&(o=Math.min(o,1)),i>48&&i<85&&t>-73&&t<-57&&(o=Math.min(o,23.65)),o}function Am({width:i,depth:t,height:e,seed:n}){const s=new Ei(i,t,260,38);s.rotateX(-Math.PI/2);const r=s.attributes.position,a=[],o=new kt("#667f8b"),h=new kt("#38574f"),c=new kt("#e6edf0"),d=Array.from({length:19},(u,p)=>({x:-i/2+p*i/18,w:38+22*(1+Math.sin(p*3.7+n)),h:.48+.5*(.5+.5*Math.sin(p*2.31+n))}));for(let u=0;u<r.count;u++){const p=r.getX(u),g=r.getZ(u),x=Math.sin(p*.018+n)*13,m=Math.max(...d.map(L=>Math.max(0,1-Math.abs(p-L.x)/L.w)*L.h)),_=Math.max(0,1-Math.abs((g-x)/(t*.6))),l=(Math.abs(Math.sin(p*.087+g*.065+n))-.5)*.12*_,w=Math.max(0,m*_+l),A=w*e-3;r.setY(u,A);const b=h.clone().lerp(o,Mn.smoothstep(w,.14,.48)),I=.57+Math.sin(p*.12+g*.08)*.07;b.lerp(c,Mn.smoothstep(w,I,I+.09)),a.push(...b.toArray())}return s.setAttribute("color",new Zt(a,3)),s.computeVertexNormals(),new ue(s,new Ds({vertexColors:!0,roughness:1}))}function wm(i,t=()=>!1){i.updateMatrixWorld(!0);const e=new Map;i.traverse(n=>{if(!n.isMesh||n.isInstancedMesh||n.material.transparent||Array.isArray(n.material)||t(n))return;const s=[n.geometry.uuid,n.material.uuid,n.castShadow,n.receiveShadow,n.customDepthMaterial?.uuid].join(":");e.has(s)||e.set(s,[]),e.get(s).push(n)});for(const n of e.values()){if(n.length<4)continue;const s=n[0],r=new gl(s.geometry,s.material,n.length);r.castShadow=s.castShadow,r.receiveShadow=s.receiveShadow,r.customDepthMaterial=s.customDepthMaterial,n.forEach((a,o)=>{r.setMatrixAt(o,a.matrixWorld),a.removeFromParent()}),r.computeBoundingSphere(),i.add(r)}}function Rm({vegetation:i=!0}={}){const t=new hn;t.name="Serenity reference campus";const e={},n=[],s=[],r=[];let a=241026;const o=()=>(a=1664525*a+1013904223>>>0)/4294967296,h=new Wn(1,1,1),c=new vi(1,1,1,12),d=new Cs(1,1),u=new Cs(1,1);for(const f of[d,u]){const S=f.attributes.position;for(let M=0;M<S.count;M++){const P=S.getX(M),B=S.getY(M),U=S.getZ(M),V=1+Math.sin(P*41+B*17+U*31)*.16;S.setXYZ(M,P*V,B*V,U*V)}f.computeVertexNormals()}const p=new Rs(1,1,12,2);{const f=p.attributes.position;for(let S=0;S<f.count;S++){const M=f.getX(S),P=f.getY(S),B=f.getZ(S),U=Math.atan2(B,M),V=1+Math.sin(U*7+P*18)*.18+Math.cos(U*13+P*11)*.09;f.setXYZ(S,M*V,P+Math.sin(U*7)*.035,B*V)}p.computeVertexNormals()}function g(f){const M=new Uint8Array(65536);for(let B=0;B<128;B++)for(let U=0;U<128;U++){let V=.9+o()*.1;if(f==="stone"){const Y=Math.floor(B/24);(B%24<2||(U+Y%2*32)%64<2)&&(V=.67)}f==="wood"&&(V=.82+.09*Math.sin(U*.7+Math.sin(B*.07)*.7)+o()*.09),f==="grass"&&(V=.72+o()*.28);const X=(B*128+U)*4;M[X]=M[X+1]=M[X+2]=Math.round(V*255),M[X+3]=255}const P=new _l(M,128,128,Be);return P.needsUpdate=!0,P.wrapS=P.wrapT=Es,P.repeat.set(f==="grass"?28:3,f==="grass"?28:2),P.colorSpace=Re,r.push(P),P}const x=(f,S={})=>new Ds({color:f,roughness:.83,...S}),m={stone:x("#ddd1b8",{map:g("stone")}),pale:x("#d8cfb8"),oak:x("#aa783e",{map:g("wood")}),oakLight:x("#c69858"),darkWood:x("#664e32"),roof:x("#303e4b",{roughness:.48,metalness:.32}),seam:x("#68777e",{roughness:.42,metalness:.4}),trim:x("#36493e"),glass:x("#b9bcb0",{roughness:.19,metalness:.28,transparent:!0,opacity:.34,depthWrite:!1}),window:x("#818c87",{roughness:.2,metalness:.42,emissive:"#d0a04d",emissiveIntensity:.15}),warm:x("#dbbc79",{emissive:"#ad7428",emissiveIntensity:.16}),floor:x("#b7aa8e"),path:x("#d5cab1"),pathEdge:x("#b6ac92"),grass:x("#596e39",{map:g("grass")}),turf:x("#496c36"),turf2:x("#587a40"),leaves:[x("#4c6a2f"),x("#748341"),x("#3e5e32"),x("#8b8e49")],pines:[x("#294937"),x("#385e3b"),x("#4d6a3b"),x("#6b7c42")],rock:[x("#7e8171"),x("#a4a391"),x("#c0bba7")],water:x("#4c92aa",{metalness:.45,roughness:.27}),waterLine:x("#9bc4c4",{metalness:.3,roughness:.3}),white:x("#eeeadd"),metal:x("#5e6b62",{metalness:.55,roughness:.45}),soil:x("#6a6248"),skin:x("#b48b65"),clothes:[x("#344e62"),x("#c0b691"),x("#687a88"),x("#975c3f"),x("#405d4c")],flowers:[x("#d5c580"),x("#b896b2"),x("#d6d8bd")]};function _(f,S,M,P=[1,1,1],B=t){const U=new ue(f,S);return U.position.set(...M),U.scale.set(...P),U.castShadow=!0,U.receiveShadow=!0,B.add(U),U}const l=(f,S,M,P=t)=>_(h,f,S,M,P),w=(f,S,M,P,B=t)=>_(c,f,S,[M,P,M],B);function A(f,S,M,P=m.oak,B=t,U=M){const V=new F(...f),X=new F(...S),Y=V.clone().add(X).multiplyScalar(.5),it=l(P,Y.toArray(),[M,V.distanceTo(X),U],B);return it.quaternion.setFromUnitVectors(new F(0,1,0),X.sub(V).normalize()),it}function b(f,S,M=t,P=1.05){const B=Math.hypot(S[0]-f[0],S[2]-f[2]),U=Math.max(1,Math.ceil(B/1.8));A([f[0],f[1]+P,f[2]],[S[0],S[1]+P,S[2]],.09,m.metal,M),A([f[0],f[1]+.5,f[2]],[S[0],S[1]+.5,S[2]],.045,m.metal,M);for(let V=0;V<=U;V++){const X=V/U,Y=f[0]+(S[0]-f[0])*X,it=f[1]+(S[1]-f[1])*X,st=f[2]+(S[2]-f[2])*X;l(m.metal,[Y,it+P/2,st],[.065,P,.065],M)}}function I(f,S,M=2.4,P=t,B=m.path){const U=A(f,S,M,B,P,.13);U.quaternion.setFromUnitVectors(new F(0,1,0),new F(S[0]-f[0],S[1]-f[1],S[2]-f[2]).normalize());const V=Math.hypot(S[0]-f[0],S[2]-f[2]);U.removeFromParent();const X=new xe;f[0],f[1],f[2],S[0],S[1],S[2];const Y=(S[0]-f[0])/V,it=(S[2]-f[2])/V,st=[f[0]-it*M/2,f[1],f[2]+Y*M/2,f[0]+it*M/2,f[1],f[2]-Y*M/2,S[0]+it*M/2,S[1],S[2]-Y*M/2,S[0]-it*M/2,S[1],S[2]+Y*M/2];X.setAttribute("position",new Zt(st,3)),X.setIndex([0,2,1,0,3,2]),X.computeVertexNormals();const D=_(X,B,[0,0,0],[1,1,1],P);return D.material.side=je,D.castShadow=!1,D}function L(f=!1){const S=f?.29:.5,M=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[-S,1,0],[S,1,0]],P=[[0,1,5,4],[3,4,5,2],[0,4,3],[1,2,5],[0,3,2,1]],B=[],U=[];for(const X of P)for(let Y=1;Y<X.length-1;Y++){let it=[X[0],X[Y],X[Y+1]];const st=it.map(dt=>new F(...M[dt])),D=st[1].clone().sub(st[0]).cross(st[2].clone().sub(st[0])),rt=st[0].clone().add(st[1]).add(st[2]).multiplyScalar(1/3).sub(new F(0,.25,0));D.dot(rt)<0&&(it=[it[0],it[2],it[1]]);for(const dt of it)B.push(...M[dt]),U.push(M[dt][0]+.5,M[dt][2]+.5)}const V=new xe;return V.setAttribute("position",new Zt(B,3)),V.setAttribute("uv",new Zt(U,2)),V.computeVertexNormals(),V}const N=L(),z=L(!0),T=[];function E(f,S,M,P,B,U,V,X,Y){const it=V==="gable-z",st=it?B:P,D=it?P:B,rt=_(V==="hip"?z:N,m.roof,[f,S,M],[st,U,D],X);it&&(rt.rotation.y=Math.PI/2),rt.name=`Closed roof · ${Y}`,rt.userData={roof:!0,closed:!0,place:Y},n.push(rt),l(m.roof,[f,S-.09,M],[P,.22,B],X);for(const xt of[-1,1])l(m.trim,[f,S-.18,M+xt*B/2],[P+.08,.19,.16],X),l(m.trim,[f+xt*P/2,S-.18,M],[.16,.19,B+.08],X);const dt=(xt,ft)=>{for(const ot of[xt,ft])T.push(it?f+ot[2]:f+ot[0],S+ot[1]+.035,it?M-ot[0]:M+ot[2])};for(let xt=-st/2+.2;xt<st/2;xt+=.58){const ft=V==="hip"?Math.min(1,(st/2-Math.abs(xt))/(st*.21)):1,ot=V==="hip"?Math.min(st*.29,Math.max(-st*.29,xt)):xt;for(const bt of[-1,1])dt([xt,0,bt*D/2],[ot,U*ft,0])}return l(m.seam,[f,S+U+.05,M],it?[.15,.12,B*(V==="hip"?.58:1)]:[P*(V==="hip"?.58:1),.12,.15],X),rt}function O(f,S,M,P,B,U,V=!1){const X=(it,st,D)=>V?[M+D,S+st,f+it]:[f+it,S+st,M+D],Y=(it,st,D)=>V?[D,st,it]:[it,st,D];l(m.window,X(0,0,.035),Y(P,B,.08),U);for(const it of[-P/2,0,P/2])l(m.darkWood,X(it,0,.12),Y(.085,B+.15,.13),U);for(const it of[-B/2,0,B/2])l(m.oak,X(0,it,.13),Y(P+.15,.08,.14),U);l(m.pale,X(0,-B/2-.12,.1),Y(P+.35,.16,.45),U)}function G(f,S){const{x:M,y:P,z:B,w:U,d:V}=f,X=B+V/2+1.3;l(m.floor,[M,P+3.4,X],[U+.6,.28,2.7],S);for(let Y=M-U/2;Y<=M+U/2+.1;Y+=3.1)l(m.oak,[Y,P+3.6,X+1.1],[.23,7.1,.23],S),l(m.oakLight,[Y,P+6.65,X+.75],[.75,.18,.7],S);b([M-U/2,P+3.55,X+1.3],[M+U/2,P+3.55,X+1.3],S),l(m.oak,[M,P+6.9,X+1.1],[U+.7,.24,.27],S)}function q(f,S,M,P=t){const B=l(new Ns({visible:!1}),S,M,P);B.name=`Pick volume · ${f}`,B.visible=!1,B.userData.place=f,s.push(B)}function Q(f){const{id:S,x:M,y:P,z:B,w:U,d:V,h:X}=f,Y=new hn;if(Y.name=f.key,Y.userData={place:S,architecturalVolume:!0,...f},t.add(Y),(e[S]||=[]).push(Y),l(m.stone,[M,P-.25,B],[U+.6,.5,V+.6],Y),f.glass||f.dining){l(m.pale,[M,P+X/2,B-V/2],[U,X,.45],Y),l(m.floor,[M,P+.15,B],[U,.3,V],Y),l(m.oak,[M,P+X-.12,B],[U,.25,V],Y);for(const st of[-1,1]){l(m.glass,[M+st*U/2,P+X/2,B],[.07,X-.3,V],Y);for(let D=B-V/2;D<=B+V/2+.01;D+=2)l(m.oak,[M+st*U/2,P+X/2,D],[.15,X,.15],Y)}l(m.glass,[M,P+X/2,B+V/2],[U,X-.25,.08],Y);for(let st=M-U/2;st<=M+U/2+.01;st+=2)l(m.oak,[st,P+X/2,B+V/2],[.16,X,.18],Y),f.dining&&l(m.oak,[st,P+X/2,B+V/2+1.5],[.19,X,.19],Y);for(const st of[.25,X*.66,X-.05])l(m.oak,[M,P+st,B+V/2],[U,.13,.18],Y);for(let st=M-U/2+2;st<M+U/2-1;st+=4)for(let D=B-V/2+3;D<B+V/2-1;D+=3.8){l(m.oakLight,[st,P+1,D],[2.1,.13,1.15],Y);for(const rt of[-.8,.8]){l(m.darkWood,[st+rt,P+.5,D],[.1,1,.1],Y);for(const dt of[-1,1])l(m.oak,[st+rt,P+.54,D+dt],[.5,.12,.5],Y),l(m.oak,[st+rt,P+.87,D+dt*1.2],[.5,.7,.1],Y)}}for(let st=M-U/2+2;st<M+U/2;st+=4)l(m.warm,[st,P+X-.5,B],[1.4,.08,.35],Y)}else{l(m.stone,[M,P+X/2,B],[U,X,V],Y);for(const st of[-1,1]){l(m.oak,[M,P+X*.75,B+st*(V/2+.02)],[U,X*.42,.12],Y);for(let D=M-U/2+1.8;D<M+U/2-1;D+=2.8)for(let rt=0;rt<2;rt++)O(D,P+1.85+rt*3.35,B+st*(V/2+.14),1.65,2.1,Y);for(let D=B-V/2+2;D<B+V/2-1;D+=3)for(let rt=0;rt<2;rt++)O(D,P+1.85+rt*3.35,M+st*(U/2+.14),1.6,2.1,Y,!0);l(m.pale,[M,P+3.35,B+st*(V/2+.09)],[U+.2,.22,.3],Y)}for(let st=M-U/2+.6;st<M+U/2;st+=1.4)l(m.pale,[st,P+.35,B+V/2+.12],[1.2,.5,.3],Y)}if(f.gallery&&G(f,Y),f.roof==="planted"){l(m.pale,[M,P+X+.18,B],[U+1,.4,V+1],Y),l(m.grass,[M,P+X+.43,B-1],[U+.4,.16,V-1],Y);const st=Y.children.at(-2);st.userData={roof:!0,closed:!0,place:S},n.push(st);for(const D of[-1,1])l(m.stone,[M+D*(U/2+.1),P+X/2,B],[.8,X+1,V+1],Y);for(let D=M-U/2+1;D<M+U/2;D+=2){l(m.oak,[D,P+2.35,B-2],[1.3,4,.35],Y);for(let rt=.6;rt<4.3;rt+=.65){l(m.oakLight,[D,P+rt,B-1.8],[1.3,.09,.75],Y);for(let dt=0;dt<6;dt++)l(m.clothes[dt%5],[D-.5+dt*.17,P+rt+.22,B-1.7],[.12,.35,.3],Y)}}}else E(M,P+X,B,U+1.7,V+1.8,f.roof==="hip"?3:2.8,f.roof,Y,S);return q(S,[M,P+X/2+1,B],[U,X+3,V],Y),Y}const tt=new Ei(520,385,240,180);tt.rotateX(-Math.PI/2);const K=[],pt=new kt("#596e39"),J=new kt("#8a8b78");for(let f=0;f<tt.attributes.position.count;f++){const S=tt.attributes.position,M=S.getX(f)+25,P=S.getZ(f)+5,B=ln(M,P);S.setXYZ(f,M,B,P);const U=M>42&&P<-33&&B>10?Math.max(0,Math.min(1,.45+Math.sin(M*.41+P*.23)*.4+Math.cos(P*.62)*.35)):0;K.push(...pt.clone().lerp(J,U).toArray())}tt.setAttribute("color",new Zt(K,3)),tt.computeVertexNormals();const gt=_(tt,x("#ffffff",{vertexColors:!0,map:g("grass")}),[0,0,0]);gt.name="Sculpted campus terraces and hillside",gt.castShadow=!1;const vt=l(m.water,[-140,-2.6,-165],[740,.15,320]);vt.name="Lake",vt.castShadow=!1;for(let f=0;f<95;f++){const S=-230+o()*420,M=-66-o()*160;l(m.waterLine,[S,-2.49,M],[2+o()*9,.012,.025]).castShadow=!1}for(let f=0;f<4;f++){const S=Am({width:1500,depth:210,height:52+f*21,seed:8+f*7});S.position.set(-70+f*40,-5,-400-f*95),S.name="Distant alpine ridgeline",t.add(S)}l(m.stone,[-22,3,0],[76,6,43]),l(m.grass,[-22,6.03,0],[75,.12,42]);for(const f of[16,44])l(m.stone,[f,3.5,-3],[.5,5,22]);l(m.stone,[30,3.5,-13.8],[28,5,.5]),l(m.floor,[30,1.1,-3],[28,.2,22]);const Tt=(f,S,M,P,B)=>{l(m.stone,[f,B-1.1,S],[M,2.2,P]),l(m.path,[f,B+.025,S],[M-.25,.15,P-.25]),b([f-M/2,B+.12,S+P/2],[f+M/2,B+.12,S+P/2])};Tt(-40,35,31,29,1.85),Tt(-6,52,33,30,.02),Tt(42,47,39,21,.02);function Ft(f,S,M){const P=Math.max(3,Math.ceil(Math.abs(S[1]-f[1])/.21)),B=(S[0]-f[0])/P,U=(S[2]-f[2])/P,V=(S[1]-f[1])/P;for(let st=0;st<P;st++){const D=f[0]+B*(st+.5),rt=f[2]+U*(st+.5),dt=f[1]+V*(st+.5),xt=Math.min(dt-.25,ln(D,rt)),ft=l(m.path,[D,(dt+xt)/2,rt],[M,dt-xt,Math.hypot(B,U)+.04]);ft.rotation.y=Math.atan2(B,U)}const X=Math.hypot(S[0]-f[0],S[2]-f[2]),Y=-(S[2]-f[2])/X,it=(S[0]-f[0])/X;for(const st of[-1,1])b([f[0]+st*Y*M/2,f[1],f[2]+st*it*M/2],[S[0]+st*Y*M/2,S[1],S[2]+st*it*M/2])}Ft([-26,6.1,18],[-26,2,26],4.2),Ft([11,6.1,20],[15,0,33],5),Ft([-21,2,38],[-21,0,45],3.5),Ft([-6,0,67],[-6,-1.4,72],5);const Yt=new Set;for(const f of Object.values(co))for(let S=1;S<f.length;S++){const M=f[S-1],P=f[S],B=[M,P].sort().join("|");Yt.has(B)||(Yt.add(B),I(M,P,2.3),Math.abs(M[1]-P[1])>1&&Ft(M,P,2.8))}xr.forEach(Q);const Rt=e["tech-lab"][0];for(const f of[16.4,43.6])l(m.stone,[f,3.5,8.6],[1.25,5,1.2],Rt);l(m.stone,[30,1.45,8.5],[28,.7,1.3],Rt),l(m.pale,[30,5.8,8.7],[28.6,.55,1],Rt),l(m.oak,[30,12.55,8.3],[28.4,.42,.65],Rt);for(let f=18;f<=42;f+=4)l(m.darkWood,[f,9.4,7.7],[.32,6.4,.65],Rt),l(m.darkWood,[f,3.6,8.25],[.24,4.2,.55],Rt);for(const f of[3.8,8.4,10.5])l(m.oak,[30,f,8.18],[27.5,.17,.32],Rt);for(const f of[16.1,43.9])for(const S of[3.8,8.4,10.5])l(m.oak,[f,S,-3],[.3,.17,22],Rt);for(let f=18;f<=42;f+=4){l(m.oak,[f,8.2,-12.9],[2.8,4.2,.55],Rt);for(const S of[6.7,7.8,9,10])l(m.oakLight,[f,S,-12.4],[2.9,.12,1],Rt);l(m.warm,[f,9.2,-12.05],[2.2,.65,.08],Rt),l(m.darkWood,[f,2.1,5.9],[2.1,.6,1.2],Rt),l(m.oakLight,[f,2.46,5.9],[2.3,.12,1.35],Rt)}l(m.glass,[30,3.4,9.14],[25,4.4,.1],Rt);for(let f=18;f<=42;f+=2)l(m.oak,[f,3.4,9.22],[.15,4.5,.2],Rt);for(let f=19;f<=40;f+=3)l(m.warm,[f,2.2,8.3],[1.5,.13,.8],Rt);l(m.path,[30,6.08,10],[31,.2,3]),b([14.5,6.2,11.5],[45.5,6.2,11.5]),E(30,15,-5,18,13,1.7,"hip",Rt,"tech-lab");const Ot=e["main-building"][0],et=-28,at=-3;l(m.stone,[et,17.1,at],[5.2,22.2,5.2],Ot);for(const f of[-1,1])l(m.pale,[et,27.4,at+f*2.65],[5.6,.3,.3],Ot),O(et,17,at+f*2.65,1,5.4,Ot);l(m.darkWood,[et,27.8,at],[5.25,.8,5.25],Ot);for(let f=-4;f<=4;f++)for(const S of[-1,1])l(m.oakLight,[et+f*.52,27.85,at+S*2.65],[.14,.7,.12],Ot);E(et,28.3,at,6.7,6.7,1.65,"hip",Ot,"main-building"),q("main-building",[et,18,at],[5.5,24,5.5],Ot),s.at(-1).name="Clock tower pick volume",s.at(-1).userData.tower=!0;function Et(f,S,M,P){const B=new hn;B.position.set(f,S,M),B.rotation.y=P,Ot.add(B);const U=_(new wo(1.4,48),m.white,[0,0,0],[1,1,1],B);U.castShadow=!1,_(new Ps(1.36,1.43,48),m.trim,[0,0,.025],[1,1,1],B);for(let V=0;V<12;V++){const X=V*Math.PI/6,Y=l(m.trim,[Math.sin(X)*1.16,Math.cos(X)*1.16,.04],[.08,.22,.035],B);Y.rotation.z=-X}A([0,0,.075],[-.45,.65,.075],.085,m.trim,B),A([0,0,.09],[.9,.18,.09],.07,m.trim,B)}Et(et,25.4,at+2.64,0),Et(et+2.64,25.4,at,Math.PI/2),E(-23,9.8,4.3,7.4,5.8,1.8,"gable-z",Ot,"main-building");for(const f of[-25.7,-20.3])l(m.oak,[f,7.9,6.5],[.26,3.8,.26],Ot);A([-25.7,9.65,6.8],[-23,11.2,6.8],.18,m.oak,Ot),A([-23,11.2,6.8],[-20.3,9.65,6.8],.18,m.oak,Ot),w(m.path,[Ye.x,6.08,Ye.z],14,.16),w(m.pale,[Ye.x,6.2,Ye.z],5.2,.3),w(m.grass,[Ye.x,6.4,Ye.z],4.8,.2);const Pt=(f,S,M,P=0,B=Math.PI*2,U=.09)=>{const V=new Co(f,U,6,96,B),X=_(V,S,[Ye.x,M,Ye.z]);return X.rotation.x=Math.PI/2,X.rotation.z=P,X};Pt(13.5,m.pathEdge,6.19,0,Math.PI*2,.08);for(let f=0;f<4;f++){const S=f*Math.PI/2+.12;for(const M of[5.45,5.65,5.85])Pt(M,m.oakLight,6.85,S,1.22,.085);Pt(6.03,m.oak,7.4,S,1.22,.09);for(let M=0;M<4;M++){const P=S+M*.38,B=Ye.x+Math.cos(P)*5.8,U=Ye.z-Math.sin(P)*5.8;l(m.metal,[B,6.57,U],[.14,.8,.14])}}function At(f,S,M,P=7,B=3.5,U=t){_(new vi(.22,.4,1,8),m.darkWood,[f,S+P*.35,M],[P/7,P*.7,P/7],U);for(let X=0;X<7;X++){const Y=X*2.3999,it=Math.cos(Y)*B*.6,st=Math.sin(Y)*B*.6;A([f,S+P*.38,M],[f+it,S+P*(.7+X%2*.1),M+st],.18*P/8,m.darkWood,U)}const V=P>11?185:32;for(let X=0;X<V;X++){const Y=o()*Math.PI*2,it=Math.sqrt(o())*B,st=.7+o()*.65;_(d,m.leaves[X%4],[f+Math.cos(Y)*it,S+P*(.62+.24*Math.sqrt(1-it/B))+o()*P*.12,M+Math.sin(Y)*it],[B*.2*st,P*.085*st,B*.2*st],U)}}At(-6,6.5,8,14,7.8),q("courtyard",[-6,7.4,8],[25,2.5,25]);function Ht(f,S,M,P=t,B=!1){w(m.oakLight,[f,S+.84,M],.74,.12,P),w(m.metal,[f,S+.4,M],.065,.8,P);for(let U=0;U<4;U++){const V=U*Math.PI/2,X=f+Math.cos(V)*1.05,Y=M+Math.sin(V)*1.05;l(m.oak,[X,S+.48,Y],[.46,.12,.46],P),l(m.darkWood,[X,S+.24,Y],[.07,.48,.07],P);const it=l(m.oak,[X+Math.cos(V)*.2,S+.75,Y+Math.sin(V)*.2],[.49,.6,.08],P);it.rotation.y=Math.PI/2-V}B&&(w(m.oak,[f,S+1.55,M],.055,3.1,P),_(new Rs(1.55,.4,8,1,!1),m.white,[f,S+3.12,M],[1,1,1],P))}for(const[f,S,M]of[[-40,43,2],[-6,61,.05]])for(let P=-2;P<=2;P++)Ht(f+P*4.8,M,S,t,P%2===0),P%2&&Ht(f+P*4.8,M,S-3.4);for(const f of[40,52])for(let S=41;S<=60;S+=4.75)l(m.oak,[S,1.8,f],[.22,3.6,.22]);for(const f of[40,52])l(m.oak,[50.5,3.55,f],[20,.27,.27]);for(let f=40.5;f<=60.5;f+=.9)l(m.oakLight,[f,3.78,46],[.16,.24,12.8]);for(let f=0;f<12;f++)_(d,m.leaves[f%4],[42+o()*17,3.95,40+o()*11],[1.2,.3,.7]);for(let f=43;f<=58;f+=5)Ht(f,.05,47);const he=new Set(t.children),{x:C,z:$,y:lt,w:ut,d:ct}=an;l(m.stone,[C,lt-.6,$],[ut+5,1.15,ct+5]),l(m.turf,[C,lt,$],[ut,.15,ct]);for(let f=0;f<10;f++)l(f%2?m.turf:m.turf2,[C,lt+.09,$-ct/2+(f+.5)*ct/10],[ut,.02,ct/10]);const Bt=(f,S,M=.13)=>I([f[0],lt+.13,f[1]],[S[0],lt+.13,S[1]],M,t,m.white),_t=(f,S,M,P)=>{Bt([f-M/2,S-P/2],[f+M/2,S-P/2]),Bt([f+M/2,S-P/2],[f+M/2,S+P/2]),Bt([f+M/2,S+P/2],[f-M/2,S+P/2]),Bt([f-M/2,S+P/2],[f-M/2,S-P/2])};_t(C,$,ut-.8,ct-.8),Bt([C-ut/2+.4,$],[C+ut/2-.4,$]);const Ut=_(new Ps(6,6.13,64),m.white,[C,lt+.14,$]);Ut.rotation.x=-Math.PI/2,Ut.castShadow=!1;for(const f of[-1,1]){const S=$+f*(ct/2-.4);_t(C,S-f*6.5,22,13),_t(C,S-f*2.5,10,5),w(m.white,[C,lt+.15,S-f*9],.16,.015);for(const M of[-3.66,3.66])A([C+M,lt,S],[C+M,lt+2.44,S],.1,m.white);A([C-3.66,lt+2.44,S],[C+3.66,lt+2.44,S],.1,m.white);for(let M=0;M<=15;M++){const P=C-3.66+M*7.32/15;A([P,lt,S+f*1.8],[P,lt+2.44,S],.016,m.white)}for(let M=0;M<=6;M++)A([C-3.66,lt+M*.4,S+f*(1.8-M*.3)],[C+3.66,lt+M*.4,S+f*(1.8-M*.3)],.016,m.white);for(const M of[-1,1])A([C+M*(ut/2-.45),lt,S],[C+M*(ut/2-.45),lt+1.4,S],.035,m.white),l(m.warm,[C+M*(ut/2-.45)+.2,lt+1.2,S],[.4,.32,.02])}for(const f of[-1,1])b([C+f*(ut/2+1.2),lt-.1,$-ct/2],[C+f*(ut/2+1.2),lt-.1,$+ct/2],t,.85);for(let f=0;f<5;f++)l(m.pale,[C,2.4+f*.42,-24-f*.75],[37,.4,1]),l(m.oak,[C,2.8+f*.42,-24-f*.75],[36,.12,.4]);for(let f=C-18;f<=C+18;f+=6)l(m.oak,[f,5,-28],[.18,5,.18]);l(m.oak,[C,7.4,-27],[38,.25,3.4]),q("football-field",[C,lt+.3,$],[ut,1,ct]);const ee=new hn;ee.name="Complete rotated stadium",ee.userData={place:"football-field",yaw:an.yaw};for(const f of[...t.children])he.has(f)||(f.position.x-=C,f.position.z-=$,ee.add(f));ee.position.set(C,0,$),ee.rotation.y=an.yaw,t.add(ee);for(let f=0;f<160;f++){const S=44+o()*55,M=-58-o()*52;if(S>48&&S<84&&M>-73&&M<-58)continue;const P=Math.max(ln(S,M),M<-72&&S>47&&S<88?28.7:0),B=1+o()*2.5;_(u,m.rock[f%3],[S,P-.3,M],[B*1.25,B*.65,B]).rotation.set(o(),o()*3,o())}for(const[f,S,M]of[[45,-65,5],[87,-67,7],[54,-77,6],[63,-79,7],[76,-78,6],[84,-77,5]]){const P=ln(f,S);_(u,m.rock[0],[f,P-1,S],[M,M*.65,M*.8])}l(m.stone,[66,23.4,-59.5],[37,1.5,4]),_(u,m.rock[0],[66,14,-64],[21,10,10]);for(const f of[51,58,73,81])_(u,m.rock[1],[f,20,-62],[5.2,3.6,5]);for(let f=0;f<35;f++){const S=47+o()*39,M=-60+o()*9,P=ln(S,M);_(u,m.rock[f%3],[S,P+1.3,M],[2.3+o()*2,2+o()*2,2])}l(m.grass,[66,29.4,-74],[35,1,6]);for(let f=51;f<82;f+=3.7)_(d,m.leaves[Math.floor(f)%4],[f,29.7,-70],[1,.5,.8]);const ne=e.library[0];for(let f=51;f<82;f+=2.5){l(m.darkWood,[f,26.15,-66],[2.15,4.2,.35],ne);for(let S=24.6;S<28.2;S+=.7){l(m.oakLight,[f,S,-65.6],[2.2,.1,.8],ne);for(let M=0;M<10;M++)l(m.clothes[M%5],[f-.9+M*.19,S+.25,-65.5],[.14,.42,.35],ne)}}l(m.stone,[66,29.35,-61],[36,.85,3.2],ne);for(const f of[48.5,83.5]){l(m.stone,[f,26.6,-62.3],[1.7,6.1,4.5],ne);for(let S=0;S<6;S++)_(u,m.rock[S%3],[f+(f<66?-1:1)*(.8+o()),25.2+S*.85,-63-o()*6],[2.8,1.7,2.4])}for(let f=0;f<26;f++){const S=49+o()*34,M=-66-o()*9;_(u,m.rock[f%3],[S,29.5+o()*.7,M],[1.3+o(),.65,1.3]),f%2===0&&_(d,m.leaves[f%4],[S,30.1,M],[1.1,.6,.8])}const R=[[39,14,-45],[47,19,-51],[49,24,-58]];for(let f=1;f<R.length;f++){const S=R[f-1],M=R[f];Math.hypot(M[0]-S[0],M[2]-S[2]),I(S,M,3),I([S[0],S[1]+3,S[2]],[M[0],M[1]+3,M[2]],3.7,t,m.roof);for(let P=0;P<=4;P++){const B=P/4,U=S[0]+(M[0]-S[0])*B,V=S[1]+(M[1]-S[1])*B,X=S[2]+(M[2]-S[2])*B;for(const Y of[-1,1])l(m.oak,[U+Y*1.2,V+1.5,X],[.14,3,.14])}}I([48,24.15,-58],[82,24.15,-59],3.3),b([48,24.15,-56.5],[82,24.15,-57.5]),l(m.grass,[20,.08,66],[31,.15,20]),I([4,.2,74],[35,.2,74],2.5),I([20,.2,56],[20,.2,76],2);for(let f=8;f<35;f+=8)l(m.stone,[f,.3,62],[4,.6,3]),l(m.soil,[f,.63,62],[3.7,.07,2.7]);q("ideas-garden",[20,1.5,66],[30,3,20]);function v(f,S,M,P=1){_(d,m.leaves[Math.floor(o()*4)],[f,S+.5*P,M],[P,.65*P,P*.75])}for(const[f,S,M,P,B]of[[-45,12,18,5,6],[-53,20,9,4,6],[-33,18,7,4,6],[6,-8,10,3,6],[8,16,5,3,6],[22,28,11,4,0],[29,60,10,4,0]]){l(m.stone,[f,B+.22,S],[M,.5,P]),l(m.soil,[f,B+.49,S],[M-.5,.08,P-.5]);for(let U=0;U<M*P/2;U++){const V=f+(o()-.5)*(M-1),X=S+(o()-.5)*(P-1);v(V,B+.5,X,.65+o()*.35),U%5===0&&_(d,m.flowers[U%3],[V,B+1.1,X],[.35,.3,.3])}}for(const[f,S]of[[-47,12],[-35,12],[-52,20]])At(f,6.5,S,5.7,2.3);for(let f=0;f<210;f++){const S=-58+o()*110,M=19+o()*56;if(xr.some(U=>Math.abs(S-U.x)<U.w/2+3&&Math.abs(M-U.z)<U.d/2+5)||Math.abs(S-15)<3||Math.abs(S+21)<3||M>58&&S<9)continue;const B=ln(S,M);v(S,B,M,.5+o()*.8),f%4===0&&_(d,m.flowers[f%3],[S,B+.65,M],[.3,.25,.3])}for(let f=0;f<18;f++){const S=f/18*Math.PI*2;v(-6+Math.cos(S)*15.5,6.1,8+Math.sin(S)*15.5,.7)}for(const[f,S,M,P]of[[-59,17,3,7],[-20,28,2,6],[11,29,1,6],[47,22,2,8],[47,-27,8,7],[-17,-11,6,7],[18,63,0,7],[28,69,0,6],[-54,38,2,5]])At(f,M,S,P,P*.38);function W(f,S,M){const P=ln(f,S);w(m.darkWood,[f,P+M*.44,S],M*.021,M*.88);const B=m.pines[Math.abs(Math.floor(f+S))%4];for(let U=0;U<6;U++){const V=U/6,X=M*(.2-V*.15),Y=P+M*(.28+V*.65),it=_(p,B,[f,Y,S],[X,M*.43,X]);it.rotation.y=o()*6}}if(i)for(let f=0;f<2900;f++){const S=-155+o()*340,M=-111+o()*260;if(S>-64&&S<49&&M>-30&&M<24||S>-60&&S<50&&M>=24&&M<75||xr.some(U=>Math.abs(S-U.x)<U.w/2+6&&Math.abs(M-U.z)<U.d/2+6)||[[-40,35,37,35],[-6,52,40,36],[42,47,47,29],[20,66,39,26]].some(([U,V,X,Y])=>Math.abs(S-U)<X/2&&Math.abs(M-V)<Y/2))continue;const P=(S-C)*Math.cos(an.yaw)-(M-$)*Math.sin(an.yaw),B=(S-C)*Math.sin(an.yaw)+(M-$)*Math.cos(an.yaw);Math.abs(P)<ut/2+6&&Math.abs(B)<ct/2+8||S>35&&S<49&&M>-61&&M<-29||S>48&&S<88&&M>-78&&M<-51||S>47&&S<92&&M>-49&&M<-30||M<-48&&S<32||ln(S,M)<-2||W(S,M,5+o()*9)}for(let f=0;f<150;f++){const S=-125+o()*159,M=-43+5*Math.sin(S*.06)+3*Math.sin(S*.14)+o()*7;i&&f%2===0&&W(S,M,5+o()*6);const P=ln(S,M);v(S,P,M,1+o()),f%3===0&&_(u,m.rock[f%3],[S,P,M],[1.7,1,1.4])}function nt(f,S,M,P){const B=m.clothes[P%5];w(B,[f,S+.97,M],.17,.62),_(d,m.skin,[f,S+1.49,M],[.14,.17,.14]);for(const U of[-1,1])A([f+U*.08,S+.65,M],[f+U*.1,S+.12,M+(U<0?.12:-.1)],.09,m.trim),A([f+U*.19,S+1.18,M],[f+U*.22,S+.73,M+.04],.075,B)}for(let f=0;f<48;f++){const S=Object.values(co),M=S[f%S.length],P=Math.floor(o()*(M.length-1)),B=M[P],U=M[P+1],V=o();nt(B[0]+(U[0]-B[0])*V+(o()-.5),B[1]+(U[1]-B[1])*V,B[2]+(U[2]-B[2])*V,f)}for(let f=0;f<10;f++){const S=-15+o()*30,M=-24+o()*48,P=Math.cos(an.yaw),B=Math.sin(an.yaw);nt(C+S*P+M*B,lt+.15,$-S*B+M*P,f)}for(const[f,S,M]of[[-22,14,6],[13,15,6],[-23,32,2],[18,36,0],[48,-29,8],[45,25,2],[12,72,0]])w(m.metal,[f,M+1.8,S],.055,3.6),l(m.metal,[f,M+3.65,S],[.45,.08,.45]),l(m.warm,[f,M+3.45,S],[.23,.32,.23]);if(T.length){const f=new xe;f.setAttribute("position",new Zt(T,3));const S=new xl(f,new Ao({color:"#879093",transparent:!0,opacity:.45}));S.name="Standing roof seams",t.add(S)}t.updateMatrixWorld(!0);const ht={meshes:0,triangles:0};return t.traverse(f=>{f.isMesh&&f.visible&&(ht.meshes++,ht.triangles+=(f.geometry.index?.count||f.geometry.attributes.position.count)/3)}),wm(t,f=>f.userData.roof||!f.visible),t.updateMatrixWorld(!0),t.userData={reference:"User supplied aerial image, October 2026",approximateHiddenSides:!0,units:"metres",geometryBefore:ht,canonicalPlaces:13,externalPlaces:11,closedRoofs:!0},{root:t,objects:e,roofs:n,pickVolumes:s,materials:m,textures:r,referencePlaces:Ls}}function li(i=16/9){const t=new F(11,12,4),e=Math.max(1,1.5/i);return{position:t.clone().add(new F(70,72,177).multiplyScalar(e)),target:t}}function Cm(i,t,e){const n=Cl(i),s=new F(...n.focus),r=n.radius*2.05*Math.max(1,1/t);return{position:s.clone().add(e.clone().normalize().multiplyScalar(r)),target:s}}function Dm(i,{places:t,onSelect:e,onError:n=()=>{},home:s=!1}){const r=matchMedia("(prefers-reduced-motion: reduce)").matches,a=matchMedia("(max-width: 900px)").matches,o=new cm({antialias:!0,alpha:!1,powerPreference:"high-performance"});o.outputColorSpace=Re,o.toneMapping=$a,o.toneMappingExposure=1.05,o.setPixelRatio(Math.min(devicePixelRatio,a?1.25:1.65)),o.shadowMap.enabled=!0,o.shadowMap.type=Ka,o.shadowMap.autoUpdate=!1;const h=o.domElement;h.className="reference-viewport",h.tabIndex=0,h.setAttribute("role","group"),h.setAttribute("aria-label",zo("Пространственная модель кампуса. Перетаскивание — ракурс, правая кнопка — перемещение, колесо — масштаб. Стрелки меняют ракурс, Shift со стрелками перемещает, Home возвращает обзор.","Spatial campus model. Drag to orbit, right-drag to pan, wheel to zoom. Arrow keys orbit, Shift with arrows pans, Home restores the overview.")),i.querySelectorAll("canvas,.reference-labels,.reference-badge").forEach($=>$.remove()),i.classList.remove("video-campus"),i.classList.add("reference-campus"),i.dataset.engine="three-reference",i.dataset.webgl="webgl2",i.append(h);const c=new ml;c.background=new kt("#c5ddeb"),c.fog=new To("#c5d9df",420,1150);const d=new Ie(40,1,.5,1300),u=new um(d,h);u.enableDamping=!1,u.enablePan=!0,u.screenSpacePanning=!1,u.minDistance=35,u.maxDistance=390,u.minPolarAngle=.48,u.maxPolarAngle=1.28,u.minAzimuthAngle=-.72,u.maxAzimuthAngle=1.18,u.rotateSpeed=.46,u.zoomSpeed=.8,u.panSpeed=.55,u.touches.ONE=Sn.ROTATE,u.touches.TWO=Sn.DOLLY_PAN,h.style.touchAction="none",c.add(new gh("#dbeaff","#6f7045",2.15));const p=new Sh("#fff1d4",3.5);p.position.set(-80,135,90),p.target.position.set(12,0,-4),p.castShadow=!0,p.shadow.mapSize.set(a?1024:2048,a?1024:2048),Object.assign(p.shadow.camera,{left:-115,right:115,top:115,bottom:-115,near:5,far:330}),p.shadow.bias=-18e-5,p.shadow.normalBias=.1,p.shadow.radius=3,c.add(p,p.target);const g=new Tm,x=new ao(o),m=x.fromScene(g,.08);c.environment=m.texture,c.environmentIntensity=.24,g.dispose(),x.dispose();const _=Rm();c.add(_.root);for(const $ of _.textures)$.anisotropy=Math.min(8,o.capabilities.getMaxAnisotropy());const l=document.createElement("div");l.className="reference-labels",i.append(l);const w=Object.entries(Ls).map(([$,lt])=>{const ut=document.createElement("button");ut.className="reference-marker",ut.dataset.campusPlace=$;const ct=t.findIndex(ee=>ee.id===$),Bt=t[ct]?.name||$,_t=document.createElement("span");_t.className="reference-number",_t.textContent=String(ct+1).padStart(2,"0");const Ut=document.createElement("span");return Ut.className="reference-name",Ut.textContent=Bt,ut.append(_t,Ut),ut.setAttribute("aria-label",Bt),ut.setAttribute("aria-pressed","false"),ut.onclick=()=>e($),l.append(ut),{id:$,button:ut,point:new F(...lt.point)}}),A=document.createElement("div");A.className="reference-badge",A.textContent=zo("3D · по архитектурному референсу","3D · reference-based architecture"),i.append(A);const b=new yh,I=new Lt,L=new Ns({color:"#f5d28b",depthTest:!0}),N=new hn;c.add(N);const z=new Th(new Je,12953447);z.visible=!1,c.add(z);let T=1,E=1,O=0,G=!1,q=!1,Q=!0,tt=null,K=null,pt=null,J=!1;const gt=new AbortController,vt=gt.signal;function Tt(){return{engine:"reference-3d",position:d.position.toArray(),target:u.target.toArray()}}function Ft(){for(const $ of w){const lt=$.point.clone().project(d),ut=(lt.x*.5+.5)*T,ct=(-lt.y*.5+.5)*E;$.button.hidden=lt.z>1||lt.z<0||ut<14||ut>T-14||ct<14||ct>E-14,$.button.style.left=ut+"px",$.button.style.top=ct+"px",$.button.classList.toggle("label-left",ut>T*.68),$.button.classList.toggle("selected",$.id===(Fi[tt]||tt)),$.button.setAttribute("aria-pressed",String($.id===(Fi[tt]||tt)))}i.dataset.camera=JSON.stringify(Tt()),i.dataset.zoom=String(li(T/E).position.distanceTo(li(T/E).target)/d.position.distanceTo(u.target))}function Yt($=performance.now()){if(O=0,!(G||q||!Q||document.hidden)){if(K){const lt=Math.min(1,($-K.start)/820),ut=1-(1-lt)**3;d.position.lerpVectors(K.fromPosition,K.position,ut),u.target.lerpVectors(K.fromTarget,K.target,ut),d.lookAt(u.target),lt===1&&(K=null,u.update())}o.render(c,d),Ft(),i.dataset.drawCalls=String(o.info.render.calls),K&&Rt()}}function Rt(){!O&&!G&&!q&&Q&&!document.hidden&&(O=requestAnimationFrame(Yt))}function Ot(){u.target.x=Mn.clamp(u.target.x,-65,100),u.target.y=Mn.clamp(u.target.y,0,30),u.target.z=Mn.clamp(u.target.z,-80,78),Rt()}u.addEventListener("change",Ot),u.addEventListener("start",()=>{K=null});function et(){if(!G){if(T=Math.max(1,i.clientWidth),E=Math.max(1,i.clientHeight-(a&&!s?54:0)),o.setSize(T,E,!1),h.style.height=E+"px",l.style.height=E+"px",d.aspect=T/E,d.updateProjectionMatrix(),u.maxDistance=Math.max(390,li(d.aspect).position.distanceTo(li(d.aspect).target)*1.1),!J){const $=li(d.aspect);d.position.copy($.position),u.target.copy($.target),u.update(),J=!0}o.shadowMap.needsUpdate=!0,Rt()}}function at($,lt){if(r){d.position.copy($),u.target.copy(lt),u.update(),Rt();return}K={fromPosition:d.position.clone(),fromTarget:u.target.clone(),position:$,target:lt,start:performance.now()},Rt()}function Et($,lt=!0){tt=$,i.dataset.selected=$||"";const ut=Cl($);if(z.visible=!!ut,ut){const ct=_.pickVolumes.filter(_t=>_t.userData.place===(Fi[$]||$)),Bt=new Je;for(const _t of ct)Bt.union(new Je().setFromObject(_t));if(z.box.copy(Bt),z.updateMatrixWorld(!0),lt){const _t=Cm($,d.aspect,d.position.clone().sub(u.target));at(_t.position,_t.target)}}Rt()}function Pt(){for(;N.children.length;){const $=N.children[0];$.geometry.dispose(),N.remove($)}}function At($){if(Pt(),!$.length)return;const lt=bm($.at(-1));for(let ut=1;ut<lt.length;ut++){const ct=new F(...lt[ut-1]).add(new F(0,.18,0)),Bt=new F(...lt[ut]).add(new F(0,.18,0)),_t=new ue(new vi(.16,.16,ct.distanceTo(Bt),8),L);_t.position.copy(ct).add(Bt).multiplyScalar(.5),_t.quaternion.setFromUnitVectors(new F(0,1,0),Bt.sub(ct).normalize()),N.add(_t)}Rt()}h.addEventListener("pointerdown",$=>{pt={x:$.clientX,y:$.clientY,button:$.button}},{signal:vt}),h.addEventListener("pointerup",$=>{if(!pt||pt.button!==0||Math.hypot($.clientX-pt.x,$.clientY-pt.y)>6)return;const lt=h.getBoundingClientRect();I.set(($.clientX-lt.left)/lt.width*2-1,-($.clientY-lt.top)/lt.height*2+1),b.setFromCamera(I,d);const ut=b.intersectObjects(_.pickVolumes,!1)[0];ut&&e(ut.object.userData.place)},{signal:vt}),h.addEventListener("keydown",$=>{if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","+","=","-"].includes($.key))return;if($.preventDefault(),K=null,$.key==="Home"){C.reset();return}if(["+","=","-"].includes($.key)){C.zoom($.key==="-"?-1:1);return}const lt=["ArrowLeft","ArrowDown"].includes($.key)?-1:1;if($.shiftKey){const ut=new F(["ArrowLeft","ArrowRight"].includes($.key)?lt*3:0,0,["ArrowUp","ArrowDown"].includes($.key)?-lt*3:0);d.position.add(ut),u.target.add(ut)}else{const ut=d.position.clone().sub(u.target),ct=new oo().setFromVector3(ut);["ArrowLeft","ArrowRight"].includes($.key)?ct.theta+=lt*.09:ct.phi-=lt*.065,ct.theta=Mn.clamp(ct.theta,u.minAzimuthAngle,u.maxAzimuthAngle),ct.phi=Mn.clamp(ct.phi,u.minPolarAngle,u.maxPolarAngle),d.position.copy(u.target).add(new F().setFromSpherical(ct))}u.update(),Rt()},{signal:vt}),h.addEventListener("webglcontextlost",$=>{$.preventDefault(),n(new Error("WebGL context lost"))},{signal:vt}),document.addEventListener("visibilitychange",()=>{document.hidden||Rt()},{signal:vt});const Ht=new ResizeObserver(et);Ht.observe(i);const he=new IntersectionObserver($=>{Q=$[0].isIntersecting,Q&&Rt()});he.observe(i);const C={select:Et,route:At,snapshot:Tt,project($){const lt=new F(...$).project(d);return{x:(lt.x*.5+.5)*T,y:(-lt.y*.5+.5)*E,depth:lt.z}},reset(){const $=li(T/E);at($.position,$.target)},zoom($){K=null;const lt=d.position.clone().sub(u.target).multiplyScalar($>0?.84:1.19).clampLength(u.minDistance,u.maxDistance);d.position.copy(u.target).add(lt),u.update(),Rt()},pause($){q=$,u.enabled=!$,$||Rt()},restore($){$?.engine!=="reference-3d"||$.position?.length!==3||$.target?.length!==3||![...$.position,...$.target].every(Number.isFinite)||(K=null,d.position.fromArray($.position),u.target.fromArray($.target),u.update(),Rt())},diagnostics(){const $=o.getContext(),lt=$.getExtension("WEBGL_debug_renderer_info");return{engine:"Three.js WebGL2",renderer:lt?$.getParameter(lt.UNMASKED_RENDERER_WEBGL):$.getParameter($.RENDERER),camera:Tt(),roofs:_.roofs.map(ut=>({place:ut.userData.place,visible:ut.visible,position:ut.position.toArray()})),calls:o.info.render.calls,triangles:o.info.render.triangles,geometries:o.info.memory.geometries,places:Object.keys(Ls),imagePlanes:0,videoPlanes:0}},dispose(){G=!0,cancelAnimationFrame(O),gt.abort(),u.dispose(),Ht.disconnect(),he.disconnect(),Pt();const $=new Set,lt=new Set,ut=new Set;c.traverse(ct=>{ct.geometry&&$.add(ct.geometry);for(const Bt of Array.isArray(ct.material)?ct.material:ct.material?[ct.material]:[]){lt.add(Bt);for(const _t of Object.values(Bt))_t?.isTexture&&ut.add(_t)}});for(const ct of $)ct.dispose();for(const ct of lt)ct.dispose();for(const ct of ut)ct.dispose();m.dispose(),o.dispose(),h.remove(),l.remove(),A.remove(),i.classList.remove("reference-campus","scene-ready"),delete i.serenity}};return i.serenity=C,et(),o.shadowMap.needsUpdate=!0,Yt(),i.classList.add("scene-ready"),C}export{Dm as createCampus,Cm as focusCamera,li as overviewCamera};
