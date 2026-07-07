// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
    loader.style.transition = "0.6s";

});

// ===============================
// HERO ENTRANCE ANIMATION
// ===============================

const heroElements = document.querySelectorAll(
".small-title, .left h1, .description, .buttons, .stats, .hero-card"
);

heroElements.forEach((element, index) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";

    setTimeout(() => {

        element.style.transition = "0.8s ease";

        element.style.opacity = "1";
        element.style.transform = "translateY(0px)";

    }, index * 180);

});

// ===============================
// NAVBAR SHADOW
// ===============================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 20){

        nav.style.boxShadow =
        "0 15px 40px rgba(0,0,0,.12)";

        nav.style.background =
        "rgba(255,255,255,.72)";

    }

    else{

        nav.style.boxShadow =
        "0 10px 35px rgba(0,0,0,.08)";

        nav.style.background =
        "rgba(255,255,255,.45)";

    }

});

// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

document.querySelectorAll(".primary,.secondary,.nav-btn")
.forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const x=e.offsetX;
const y=e.offsetY;

button.style.setProperty("--x",x+"px");
button.style.setProperty("--y",y+"px");

});

});

// ===============================
// SCROLL REVEAL
// ===============================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},{
threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(80px)";
section.style.transition="1s";

observer.observe(section);

});

// ===============================
// FLOATING CARD EFFECT
// ===============================

const card=document.querySelector(".hero-card");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/35;
const y=(window.innerHeight/2-e.clientY)/35;

card.style.transform=
`rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave",()=>{

card.style.transform="rotateY(0deg) rotateX(0deg)";

});

// ===============================
// COUNTER ANIMATION
// ===============================

const counters=document.querySelectorAll(".stats h2");

counters.forEach(counter=>{

const target=counter.innerText;

const number=parseInt(target);

let current=0;

const speed=40;

const update=()=>{

if(current<number){

current+=Math.ceil(number/40);

if(current>number) current=number;

counter.innerText=current+target.replace(number,'');

setTimeout(update,speed);

}

};

update();

});

// ===============================
// SMOOTH BUTTON HOVER
// ===============================

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.transition=".3s";

});

});

// ===============================
// SCROLL PROGRESS BAR
// ===============================

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="4px";
progress.style.width="0%";
progress.style.background="#b88653";
progress.style.zIndex="99999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

const percent=(scrollTop/height)*100;

progress.style.width=percent+"%";

});