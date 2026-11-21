/* Three.js background: red particle sphere + wireframe shapes */
try{
const cv=$("#bg"),r=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true});
r.setPixelRatio(Math.min(devicePixelRatio,2));
const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(60,1,.1,100);cam.position.z=9;
const N=1800,pos=new Float32Array(N*3);
for(let i=0;i<N;i++){const a=Math.random()*6.283,b=Math.acos(2*Math.random()-1),d=5+Math.random()*7;pos[i*3]=d*Math.sin(b)*Math.cos(a);pos[i*3+1]=d*Math.sin(b)*Math.sin(a);pos[i*3+2]=d*Math.cos(b)}
const g=new THREE.BufferGeometry();g.setAttribute("position",new THREE.BufferAttribute(pos,3));
const pts=new THREE.Points(g,new THREE.PointsMaterial({color:0xe11d2e,size:.04,transparent:true,opacity:.8}));sc.add(pts);
const shapes=[[new THREE.IcosahedronGeometry(1.4),-4,1.5],[new THREE.OctahedronGeometry(1),4.5,-1.5],[new THREE.TorusGeometry(.9,.25,10,40),3,3]].map(([geo,x,y])=>{const m=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({color:0xff4a5a,wireframe:true,transparent:true,opacity:.35}));m.position.set(x,y,-2);sc.add(m);return m});
let mx=0,my=0,sy=0;
addEventListener("mousemove",e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
addEventListener("scroll",()=>sy=scrollY/innerHeight);
function rs(){r.setSize(innerWidth,innerHeight,false);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()}
addEventListener("resize",rs);rs();
(function loop(){requestAnimationFrame(loop);
  pts.rotation.y+=.0007;pts.rotation.x=sy*.3;
  shapes.forEach((m,i)=>{m.rotation.x+=.004*(i+1);m.rotation.y+=.003*(i+1);m.position.y+=Math.sin(Date.now()/1000+i)*.002});
  cam.position.x+=(mx*2-cam.position.x)*.04;cam.position.y+=(-my*2-cam.position.y)*.04;cam.lookAt(0,0,0);
  r.render(sc,cam)})();
}catch(e){}
