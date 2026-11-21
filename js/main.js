const $ = s => document.querySelector(s);
let L="ar";
function render(){
  const t=T[L];
  document.documentElement.lang=L;document.documentElement.dir=L==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-t]").forEach(e=>e.textContent=t[e.dataset.t]);
  $("#lang").textContent=L==="ar"?"EN":"ع";
  document.title=t.name+" | "+(L==="ar"?"Mostafa Ashraf":"مصطفى أشرف");
  $("#tl").innerHTML=t.exp.map(x=>`<article class="card tilt"><h3>${x[0]}</h3><span>${x[1]}</span><p>${x[2]}</p></article>`).join("");
  [["#c1","s1"],["#c2","s2"],["#c3","s3"],["#c4","cr"]].forEach(([s,k])=>$(s).innerHTML=t[k].map(x=>`<i>${x}</i>`).join(""));
  bindTilt();
}
$("#lang").onclick=()=>{L=L==="ar"?"en":"ar";render()};
(() => { const img = new Image(); img.alt = "Mostafa Ashraf"; img.onload = () => { $("#photo").replaceChildren(img); }; img.src = PROFILE_PHOTO; })();

/* gallery */
const gal = $("#gal");
gal.innerHTML = Array.from({ length: PROJECT_COUNT }, (_, i) =>
  `<button class="tilt" type="button" data-i="${i}" aria-label="${i + 1}"><em>${String(i + 1).padStart(2, "0")}</em><img loading="lazy" src="${projectImg(i)}" alt="" onerror="this.remove()"></button>`).join("");
const lb = $("#lb");
gal.onclick = e => {
  const b = e.target.closest("button"); if (!b) return;
  const img = b.querySelector("img");
  lb.innerHTML = img ? `<img src="${img.src}" alt="">` : `<div>${+b.dataset.i + 1}</div>`;
  lb.classList.add("on");
};
lb.onclick = () => lb.classList.remove("on");
addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("on"); });

/* 3D tilt on cards */
function bindTilt(){document.querySelectorAll(".tilt").forEach(el=>{
  el.onmousemove=e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`rotateY(${x*14}deg) rotateX(${-y*14}deg) translateZ(14px)`};
  el.onmouseleave=()=>el.style.transform="";
})}

/* reveal on scroll */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));

render();

