(()=>{var e={};e.id=623,e.ids=[623,660],e.modules={9902:(e,s,t)=>{"use strict";t.a(e,async(e,r)=>{try{t.r(s),t.d(s,{config:()=>x,default:()=>u,getServerSideProps:()=>h,getStaticPaths:()=>p,getStaticProps:()=>m,reportWebVitals:()=>g,routeModule:()=>b,unstable_getServerProps:()=>f,unstable_getServerSideProps:()=>w,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>j,unstable_getStaticProps:()=>v});var i=t(7093),a=t(5244),l=t(1323),n=t(9981),o=t(9413),c=t(4246),d=e([n,o]);[n,o]=d.then?(await d)():d;let u=(0,l.l)(c,"default"),m=(0,l.l)(c,"getStaticProps"),p=(0,l.l)(c,"getStaticPaths"),h=(0,l.l)(c,"getServerSideProps"),x=(0,l.l)(c,"config"),g=(0,l.l)(c,"reportWebVitals"),v=(0,l.l)(c,"unstable_getStaticProps"),j=(0,l.l)(c,"unstable_getStaticPaths"),y=(0,l.l)(c,"unstable_getStaticParams"),f=(0,l.l)(c,"unstable_getServerProps"),w=(0,l.l)(c,"unstable_getServerSideProps"),b=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/aboutus",pathname:"/aboutus",bundlePath:"",filename:""},components:{App:o.default,Document:n.default},userland:c});r()}catch(e){r(e)}})},5085:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var r=t(997),i=t(6689),a=t.n(i);let l=()=>{!function(){let e=document.querySelector(".cursor-inner"),s=document.querySelector(".cursor-outer");window.onmousemove=function(t){s.style.transform="translate("+t.clientX+"px, "+t.clientY+"px)",e.style.transform="translate("+t.clientX+"px, "+t.clientY+"px)",t.clientY,t.clientX},document.querySelector(".cursor-pointer")&&(document.querySelector(".cursor-pointer").addEventListener("mouseenter",function(){e.classList.add("cursor-hover"),s.classList.add("cursor-hover")}),document.querySelector(".cursor-pointer").addEventListener("mouseleave",function(){e.classList.remove("cursor-hover"),s.classList.remove("cursor-hover")}),e.style.visibility="visible",s.style.visibility="visible"),document.querySelectorAll("a").forEach(function(t){t.addEventListener("mouseenter",function(){e.classList.add("cursor-hover"),s.classList.add("cursor-hover")})}),document.querySelectorAll("a").forEach(function(t){t.addEventListener("mouseleave",function(){e.classList.remove("cursor-hover"),s.classList.remove("cursor-hover")})}),e.style.visibility="visible",s.style.visibility="visible"}()},n=()=>(a().useEffect(()=>{l()},[]),(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"mouse-cursor cursor-outer"}),r.jsx("div",{className:"mouse-cursor cursor-inner"})]}))},9296:(e,s,t)=>{"use strict";t.d(s,{Z:()=>d});var r=t(997),i=t(6689),a=t.n(i),l=t(4298),n=t.n(l);let o=()=>{let e=document.querySelector("#preloader"),s=document.querySelector(".loading-text"),t=()=>{e.classList.add("isdone"),s.classList.add("isdone")};Pace.on("start",function(){e.classList.remove("isdone"),s.classList.remove("isdone")}),Pace.on("done",function(){t()}),document.querySelector("body").classList.contains("pace-done")&&t(),document.addEventListener("load",()=>{t()})},c={QP:!0},d=()=>(a().useEffect(()=>{let e=document.querySelector("body");c.QP?(o(),e.classList.contains("hideX")&&e.classList.remove("hideX")):e.classList.add("hideX")}),(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:`${!0===c.QP?"showX":"hideX"}`,children:r.jsx("div",{id:"preloader",children:r.jsx("div",{className:"loading-text",children:"Y\xfckleniyor"})})}),c.QP?r.jsx(n(),{id:"pace",strategy:"beforeInteractive",src:"/assets/js/pace.min.js"}):""]}))},7333:(e,s,t)=>{"use strict";t.d(s,{Z:()=>n});var r=t(997),i=t(6689),a=t.n(i);let l=()=>{let e=document.querySelector(".progress-wrap"),s=document.querySelector(".progress-wrap path"),t=s.getTotalLength(),r=()=>{let e=window.pageYOffset,r=document.documentElement.scrollHeight-window.innerHeight;s.style.strokeDashoffset=t-e*t/r};e&&(s.style.transition=s.style.WebkitTransition="none",s.style.strokeDasharray=t+" "+t,s.style.strokeDashoffset=t,s.getBoundingClientRect(),s.style.transition=s.style.WebkitTransition="stroke-dashoffset 10ms linear",r(),window.addEventListener("scroll",r),window.addEventListener("scroll",function(){window.pageYOffset>150?e.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")}),e.addEventListener("click",function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},n=()=>(a().useEffect(()=>{l()},[]),r.jsx("div",{className:"progress-wrap cursor-pointer",children:r.jsx("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:r.jsx("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})}))},9413:(e,s,t)=>{"use strict";t.a(e,async(e,r)=>{try{t.r(s),t.d(s,{default:()=>h});var i=t(997);t(6689);var a=t(4298),l=t.n(a),n=t(968),o=t.n(n),c=t(9296);t(108);var d=t(5085),u=t(7333),m=t(7451),p=e([m]);m=(p.then?(await p)():p)[0];let h=function({Component:e,pageProps:s}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o(),{children:[i.jsx("title",{children:"IN-SEL"}),i.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"})]}),i.jsx(d.Z,{}),i.jsx(c.Z,{}),i.jsx(e,{...s}),i.jsx(m.SpeedInsights,{}),i.jsx(u.Z,{}),i.jsx(l(),{id:"wow",src:"/assets/js/wow.min.js"}),i.jsx(l(),{id:"splitting",strategy:"beforeInteractive",src:"/assets/js/splitting.min.js"}),i.jsx(l(),{id:"simpleParallax",src:"/assets/js/simpleParallax.min.js"}),i.jsx(l(),{id:"isotope",src:"/assets/js/isotope.pkgd.min.js"}),i.jsx(l(),{src:"/assets/js/main.js",id:"init",strategy:"lazyOnload"})]})};r()}catch(e){r(e)}})},9981:(e,s,t)=>{"use strict";t.a(e,async(e,r)=>{try{t.r(s),t.d(s,{default:()=>d});var i=t(997),a=t(6859),l=t.n(a),n=t(7451),o=e([n]);n=(o.then?(await o)():o)[0];class c extends l(){static async getInitialProps(e){return{...await l().getInitialProps(e)}}render(){return(0,i.jsxs)(a.Html,{children:[(0,i.jsxs)(a.Head,{children:[i.jsx("meta",{charSet:"utf-8"}),i.jsx("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),i.jsx("meta",{name:"keywords"}),i.jsx("meta",{name:"description"}),i.jsx("meta",{name:"author",content:""}),i.jsx("link",{rel:"shortcut icon",href:"/assets/img/favicon.ico"}),i.jsx("link",{href:"https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",rel:"stylesheet"}),i.jsx("link",{href:"https://fonts.googleapis.com/css?family=Teko:300,400,500,600,700&display=swap",rel:"stylesheet"}),i.jsx("link",{href:"https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap",rel:"stylesheet"}),i.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap",rel:"stylesheet"}),i.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap",rel:"stylesheet"})]}),(0,i.jsxs)("body",{children:[i.jsx(a.Main,{}),i.jsx(a.NextScript,{}),i.jsx(n.SpeedInsights,{})]})]})}}let d=c;r()}catch(e){r(e)}})},4246:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(997);t(6689);let i=JSON.parse('{"TN":{"P":"Kalkan","E":"Kızıltaş\'ta"},"wp":"/assets/img/slid/aboutUs/1.jpeg","Lx":"/assets/img/slid/aboutUs/2.jpeg","kQ":"mavi ve yeşili sizlerle buluşturuyoruz. Villalarımız, b\xfct\xfcn bir yılın yorgunluğunu \xfczerinizden atmanız i\xe7in kusursuz bir şekilde tasarlanmıştır. Siz değerli misafirlerimize \'işte bu\' dedirtecek bir tatil ge\xe7irtmek i\xe7in; kapılarımızı a\xe7ıyoruz…","Qq":"","JB":[{"id":1,"name":"Agena"},{"id":2,"name":"Capella"},{"id":3,"name":"Gredi"},{"id":4,"name":"Rigel"}]}');t(1664);let a=()=>r.jsx("section",{className:"about section-padding",style:{backgroundColor:"#EFFAFA"},children:r.jsx("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[r.jsx("div",{className:"col-lg-6 valign",children:(0,r.jsxs)("div",{className:"exp-content nopat wow fadeInUp","data-wow-delay":".3s",children:[r.jsx("h6",{className:"sub-title",children:"Konumumuz"}),(0,r.jsxs)("h2",{className:"mb-20 playfont",children:[i.TN.P," ",r.jsx("br",{})," ",i.TN.E]}),r.jsx("p",{children:i.kQ}),r.jsx("ul",{children:i.JB.map(e=>r.jsx("li",{children:e.name},e.id))})]})}),r.jsx("div",{className:"col-lg-6",children:r.jsx("div",{className:"ab-exp",children:(0,r.jsxs)("div",{className:"row",children:[r.jsx("div",{className:"col-md-4 mb-20",children:r.jsx("div",{className:"pattern bg-img bg-repeat",style:{backgroundImage:"url(/assets/img/line-pattern.png)"}})}),r.jsx("div",{className:"col-md-8 wow fadeInUp","data-wow-delay":".3s",children:r.jsx("div",{className:"img mb-20 wow imago",children:r.jsx("img",{src:i.wp,alt:""})})}),r.jsx("div",{className:"col-md-7 wow fadeInUp","data-wow-delay":".3s",children:r.jsx("div",{className:"img wow imago",children:r.jsx("img",{src:i.Lx,alt:""})})}),r.jsx("div",{className:"col-md-5",children:r.jsx("div",{className:"years-exp",children:r.jsx("div",{className:"exp-text",children:r.jsx("h2",{className:"custom-font",children:i.Qq})})})})]})})})]})})})},108:()=>{},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},7451:e=>{"use strict";e.exports=import("@vercel/speed-insights/next")},1017:e=>{"use strict";e.exports=require("path")}};var s=require("../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[859,298,559],()=>t(9902));module.exports=r})();