exports.id=31,exports.ids=[31],exports.modules={6397:(e,s,t)=>{"use strict";t.d(s,{Z:()=>i});let i=()=>{let e=document.querySelector(".swiper-pagination");e&&(e.innerHTML=e.innerHTML.replace(" / ",""))}},5085:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l});var i=t(997),r=t(6689),a=t.n(r);let n=()=>{!function(){let e=document.querySelector(".cursor-inner"),s=document.querySelector(".cursor-outer");window.onmousemove=function(t){s.style.transform="translate("+t.clientX+"px, "+t.clientY+"px)",e.style.transform="translate("+t.clientX+"px, "+t.clientY+"px)",t.clientY,t.clientX},document.querySelector(".cursor-pointer")&&(document.querySelector(".cursor-pointer").addEventListener("mouseenter",function(){e.classList.add("cursor-hover"),s.classList.add("cursor-hover")}),document.querySelector(".cursor-pointer").addEventListener("mouseleave",function(){e.classList.remove("cursor-hover"),s.classList.remove("cursor-hover")}),e.style.visibility="visible",s.style.visibility="visible"),document.querySelectorAll("a").forEach(function(t){t.addEventListener("mouseenter",function(){e.classList.add("cursor-hover"),s.classList.add("cursor-hover")})}),document.querySelectorAll("a").forEach(function(t){t.addEventListener("mouseleave",function(){e.classList.remove("cursor-hover"),s.classList.remove("cursor-hover")})}),e.style.visibility="visible",s.style.visibility="visible"}()},l=()=>(a().useEffect(()=>{n()},[]),(0,i.jsxs)(i.Fragment,{children:[i.jsx("div",{className:"mouse-cursor cursor-outer"}),i.jsx("div",{className:"mouse-cursor cursor-inner"})]}))},9296:(e,s,t)=>{"use strict";t.d(s,{Z:()=>d});var i=t(997),r=t(6689),a=t.n(r),n=t(4298),l=t.n(n);let o=()=>{let e=document.querySelector("#preloader"),s=document.querySelector(".loading-text"),t=()=>{e.classList.add("isdone"),s.classList.add("isdone")};Pace.on("start",function(){e.classList.remove("isdone"),s.classList.remove("isdone")}),Pace.on("done",function(){t()}),document.querySelector("body").classList.contains("pace-done")&&t(),document.addEventListener("load",()=>{t()})},c={QP:!0},d=()=>(a().useEffect(()=>{let e=document.querySelector("body");c.QP?(o(),e.classList.contains("hideX")&&e.classList.remove("hideX")):e.classList.add("hideX")}),(0,i.jsxs)(i.Fragment,{children:[i.jsx("div",{className:`${!0===c.QP?"showX":"hideX"}`,children:i.jsx("div",{id:"preloader",children:i.jsx("div",{className:"loading-text",children:"Y\xfckleniyor"})})}),c.QP?i.jsx(l(),{id:"pace",strategy:"beforeInteractive",src:"/assets/js/pace.min.js"}):""]}))},7333:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l});var i=t(997),r=t(6689),a=t.n(r);let n=()=>{let e=document.querySelector(".progress-wrap"),s=document.querySelector(".progress-wrap path"),t=s.getTotalLength(),i=()=>{let e=window.pageYOffset,i=document.documentElement.scrollHeight-window.innerHeight;s.style.strokeDashoffset=t-e*t/i};e&&(s.style.transition=s.style.WebkitTransition="none",s.style.strokeDasharray=t+" "+t,s.style.strokeDashoffset=t,s.getBoundingClientRect(),s.style.transition=s.style.WebkitTransition="stroke-dashoffset 10ms linear",i(),window.addEventListener("scroll",i),window.addEventListener("scroll",function(){window.pageYOffset>150?e.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")}),e.addEventListener("click",function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},l=()=>(a().useEffect(()=>{n()},[]),i.jsx("div",{className:"progress-wrap cursor-pointer",children:i.jsx("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:i.jsx("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})}))},9413:(e,s,t)=>{"use strict";t.a(e,async(e,i)=>{try{t.r(s),t.d(s,{default:()=>h});var r=t(997);t(6689);var a=t(4298),n=t.n(a),l=t(968),o=t.n(l),c=t(9296);t(108);var d=t(5085),p=t(7333),u=t(7451),m=e([u]);u=(m.then?(await m)():m)[0];let h=function({Component:e,pageProps:s}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o(),{children:[r.jsx("title",{children:"IN-SEL"}),r.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"})]}),r.jsx(d.Z,{}),r.jsx(c.Z,{}),r.jsx(e,{...s}),r.jsx(u.SpeedInsights,{}),r.jsx(p.Z,{}),r.jsx(n(),{id:"wow",src:"/assets/js/wow.min.js"}),r.jsx(n(),{id:"splitting",strategy:"beforeInteractive",src:"/assets/js/splitting.min.js"}),r.jsx(n(),{id:"simpleParallax",src:"/assets/js/simpleParallax.min.js"}),r.jsx(n(),{id:"isotope",src:"/assets/js/isotope.pkgd.min.js"}),r.jsx(n(),{src:"/assets/js/main.js",id:"init",strategy:"lazyOnload"})]})};i()}catch(e){i(e)}})},9981:(e,s,t)=>{"use strict";t.a(e,async(e,i)=>{try{t.r(s),t.d(s,{default:()=>d});var r=t(997),a=t(6859),n=t.n(a),l=t(7451),o=e([l]);l=(o.then?(await o)():o)[0];class c extends n(){static async getInitialProps(e){return{...await n().getInitialProps(e)}}render(){return(0,r.jsxs)(a.Html,{children:[(0,r.jsxs)(a.Head,{children:[r.jsx("meta",{charSet:"utf-8"}),r.jsx("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),r.jsx("meta",{name:"keywords"}),r.jsx("meta",{name:"description"}),r.jsx("meta",{name:"author",content:""}),r.jsx("link",{rel:"shortcut icon",href:"/assets/img/favicon.ico"}),r.jsx("link",{href:"https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",rel:"stylesheet"}),r.jsx("link",{href:"https://fonts.googleapis.com/css?family=Teko:300,400,500,600,700&display=swap",rel:"stylesheet"}),r.jsx("link",{href:"https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap",rel:"stylesheet"}),r.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap",rel:"stylesheet"}),r.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap",rel:"stylesheet"})]}),(0,r.jsxs)("body",{children:[r.jsx(a.Main,{}),r.jsx(a.NextScript,{}),r.jsx(l.SpeedInsights,{})]})]})}}let d=c;i()}catch(e){i(e)}})},7311:(e,s,t)=>{"use strict";t.a(e,async(e,i)=>{try{t.r(s),t.d(s,{default:()=>g});var r=t(997),a=t(6689),n=t.n(a),l=t(2379),o=t(3015),c=t(6784),d=t(3877);t(7644),t(5392),t(3039);var p=t(1664),u=t.n(p),m=t(6397),h=e([o,d]);[o,d]=h.then?(await h)():h,d.default.use([d.Navigation,d.Pagination,d.Parallax]);let g=()=>{let e=n().useRef(null),[s,t]=n().useState(!0);n().useEffect(()=>{setTimeout(()=>{(0,m.Z)()},1e3),setTimeout(()=>{t(!1)})},[]);let i=n().useRef(null),a=n().useRef(null),d=n().useRef(null),p=n().useRef(null),h=n().useCallback(()=>{p.current&&p.current.swiper.slidePrev()},[]),g=n().useCallback(()=>{p.current&&p.current.swiper.slideNext()},[]);return r.jsx(r.Fragment,{children:(0,r.jsxs)("header",{className:"slid-half",children:[(0,r.jsxs)("div",{id:"js-cta-slider",className:"cta__slider-wrapper nofull swiper-container",ref:e,children:[s?null:r.jsx(o.Swiper,{ref:p,speed:800,parallax:!0,pagination:{type:"fraction",clickable:!0,el:d.current},slidesPerView:1,direction:"horizontal",loop:!0,grabCursor:!0,watchSlidesProgress:!0,breakpoints:{1100:{direction:"vertical"}},onBeforeInit:e=>{e.params.pagination.el=d.current},onSwiper:e=>{setTimeout(()=>{for(var s=0;s<e?.slides?.length;s++)e.slides[s].childNodes[0].setAttribute("data-swiper-parallax",.75*e.height);e.params&&(e.params.pagination.el=d.current,e.navigation?.destroy(),e.navigation?.init(),e.navigation?.update(),e.pagination?.destroy(),e.pagination?.init(),e.pagination?.update())},500)},className:"swiper-wrapper cta__slider",children:l.map(e=>r.jsx(o.SwiperSlide,{className:"cta__slider-item swiper-slide",children:(0,r.jsxs)("div",{className:"media-wrapper slide-inner valign",children:[r.jsx("div",{className:"bg-img",style:{backgroundImage:`url(${e.image})`},"data-overlay-dark":"5"}),r.jsx("div",{className:"container",children:r.jsx("div",{className:"row",children:r.jsx("div",{className:"col-lg-10 offset-lg-1",children:(0,r.jsxs)("div",{className:"caption",children:[r.jsx("span",{className:"top-corn"}),r.jsx("span",{className:"bottom-corn"}),(0,r.jsxs)("div",{className:"custom-font",children:[r.jsx("h5",{className:"thin custom-font",children:e.title.first}),r.jsx(c.default,{children:r.jsx("h1",{"data-splitting":!0,className:"words chars splitting",children:r.jsx(u(),{href:"#",children:e.title.second})})})]}),e?.content&&(0,r.jsxs)("p",{className:"mt-10",children:[e.content.first," ",r.jsx("br",{}),e.content.second]}),r.jsx(u(),{href:e?.pageLink,className:"btn-curve btn-color mt-30",children:r.jsx("span",{children:"Detaya Git"})})]})})})})]})},e.id))}),(0,r.jsxs)("div",{className:"cta__slider-arrows",children:[r.jsx("i",{id:"js-cta-slider-next",ref:a,className:"cta__slider-arrow cta__slider-arrow--next",onClick:g,children:e?.current?.offsetWidth>1100?r.jsx("i",{className:"fas fa-chevron-down"}):r.jsx("i",{className:"fas fa-chevron-right"})}),r.jsx("i",{id:"js-cta-slider-previous",ref:i,className:"cta__slider-arrow cta__slider-arrow--previous",onClick:h,children:e?.current?.offsetWidth>1100?r.jsx("i",{className:"fas fa-chevron-up"}):r.jsx("i",{className:"fas fa-chevron-left"})})]})]}),r.jsx("div",{ref:d,className:"swiper-pagination top custom-font"}),(0,r.jsxs)("div",{className:"social-icon",style:{position:"absolute",left:"40px",bottom:"100px",zIndex:100},children:[r.jsx("a",{href:"https://www.instagram.com/insel_villalari?igsh=aGowaGF3c2ozM2dm",rel:"noopener noreferrer",target:"_blank",style:{width:"40px",height:"40px",lineHeight:"40px",textAlign:"center",borderRadius:"20%",fontSize:"20px",cursor:"pointer",color:"#C13584"},children:r.jsx("i",{className:"fab fa-instagram"})}),r.jsx("a",{href:"https://wa.me/905324905307?text=Merhaba,%20İnsel%20Villaları%20hakkında%20bilgi%20almak%20istiyorum",rel:"noopener noreferrer",target:"_blank",style:{width:"40px",height:"40px",lineHeight:"40px",textAlign:"center",borderRadius:"50%",color:"rgb(37,211,102)",fontSize:"20px",cursor:"pointer !important"},children:r.jsx("i",{className:"fab fa-whatsapp"})}),r.jsx("a",{href:"/contact",style:{width:"40px",height:"40px",lineHeight:"40px",textAlign:"center",borderRadius:"50%",color:"rgb(234, 67, 53)",fontSize:"20px",cursor:"pointer"},children:r.jsx("i",{className:"fab fa-google"})})]})]})})};i()}catch(e){i(e)}})},6784:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>l});var i=t(997),r=t(6689),a=t.n(r);class n extends a().Component{render(){return i.jsx("div",{ref:this.target,children:this.props.children})}constructor(...e){super(...e),this.target=a().createRef(),this.split=()=>{this.target.current&&Splitting({target:this.target.current})},this.componentDidMount=this.split,this.componentDidUpdate=this.split}}let l=n},3039:()=>{},5392:()=>{},7644:()=>{},108:()=>{},2379:e=>{"use strict";e.exports=JSON.parse('[{"id":1,"title":{"first":"","second":"VİLLA AGENA"},"image":"/assets/img/slid/homePage/agenaHomePage.jpeg","pageLink":"/agena"},{"id":2,"title":{"first":"","second":"VİLLA CAPELLA"},"image":"/assets/img/slid/homePage/capellaHomePage.jpeg","pageLink":"/capella"},{"id":3,"title":{"first":"","second":"VİLLA GREDI"},"image":"/assets/img/slid/homePage/grediHomePage.jpeg","pageLink":"/gredi"},{"id":4,"title":{"first":"","second":"VİLLA RIGEL"},"image":"/assets/img/slid/homePage/rigelHomePage.jpeg","pageLink":"/rigel"}]')}};