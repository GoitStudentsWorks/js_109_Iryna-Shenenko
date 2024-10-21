import{A as C,a as A,i as M,S as T,N,P as O}from"./assets/vendor-LM-CufZg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const v of n.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&l(v)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const D=document.querySelectorAll(".menu-link");D.forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=this.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})})});document.getElementById("projects-more-btn").addEventListener("click",$);let d=document.querySelectorAll(".projects-visually-hidden"),u=0;const b=3;function $(){let e=d.length-u,t=e<b?e:b;for(let o=u;o<u+t;o++)o<d.length&&(d[o].classList.remove("projects-visually-hidden"),d[o].classList.add("item-appear"));u+=t,u>=d.length&&(document.getElementById("projects-more-btn").style.display="none")}new C(".accordion-container");const s={light:"light-theme",dark:"dark-theme"},j=document.querySelector(".theme-switch__toggle"),c=document.querySelector(".menu-header"),a=document.querySelector("body"),f=localStorage.getItem("theme");f?(a.classList.add(f),c.classList.add(f)):(a.classList.add(s.light),c.classList.add(s.light));f===s.dark&&(j.checked=!0);const F=e=>{e.currentTarget.checked?(a.classList.remove(s.light),a.classList.add(s.dark),c.classList.remove(s.light),c.classList.add(s.dark),localStorage.setItem("theme",s.dark)):(a.classList.remove(s.dark),a.classList.add(s.light),c.classList.remove(s.dark),c.classList.add(s.light),localStorage.setItem("theme",s.light))};j.addEventListener("change",F);const S=document.querySelector(".open-header-menu-button"),E=document.querySelector(".close-button"),m=document.querySelector(".menu-header"),H=document.querySelectorAll(".menu-header-link");S&&m&&S.addEventListener("click",function(){m.classList.add("is-open"),document.body.classList.add("body-scroll-lock")});E&&m&&E.addEventListener("click",function(){m.classList.remove("is-open"),document.body.classList.remove("body-scroll-lock")});H.forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=document.querySelector(this.getAttribute("href"));o&&o.scrollIntoView({behavior:"smooth"}),m.classList.remove("is-open"),document.body.classList.remove("body-scroll-lock")})});async function R(e){try{return(await A.post("https://portfolio-js.b.goit.study/api/requests",e,{headers:{"Content-Type":"application/json"}})).data}catch{throw new Error("API request failed")}}const h=document.querySelector(".contact-form"),w=document.querySelector(".modal-wt"),B=document.querySelector(".work-btn");let p={};async function W(e){if(e.preventDefault(),p={email:h.elements["user-email"].value,comment:h.elements["message-description"].value},!p.email||!p.comment){y("Please fill in all required fields.");return}try{await R(p)?(_(),h.reset()):y("Error: Server did not return a response.")}catch{y("Server error occurred. Please try again.")}}function y(e){M.error({message:e,color:"white",backgroundColor:"red"})}function _(){w.classList.add("is-open")}function g(e){(e.target===w||B.contains(e.target)||e.key==="Escape")&&w.classList.remove("is-open")}function z(){h.addEventListener("submit",W),B.addEventListener("click",g),w.addEventListener("click",g),window.addEventListener("keydown",e=>{e.key==="Escape"&&g(e)})}z();const x=document.querySelector(".reviews-list"),K=document.querySelector("#reviews"),q=document.querySelector(".nav-arrow-prev"),I=document.querySelector(".nav-arrow-next"),L={mobile:320,tablet:768,desktop:1280};let k=!1,P=!1;const i=new T(".swiper",{modules:[N,O],navigation:{nextEl:".nav-arrow-next",prevEl:".nav-arrow-prev",enabled:!0},keyboard:{enabled:!0}});I.addEventListener("click",()=>{I.blur()});q.addEventListener("click",()=>{q.blur()});V();async function G(){try{const e=await A.get("https://portfolio-js.b.goit.study/api/reviews");if(e.status===200){const t=await J(e);x.insertAdjacentHTML("beforeend",t),i.update()}else k=!0}catch(e){console.error("Error fetching reviews:",e),k=!0}}async function J(e){return e.data.map(t=>{const{author:o,avatar_url:l,review:r}=t;return`
        <li class="swiper-slide reviews-wrap">
          <div class="reviews-item">
            <p class="reviews-text">${r}</p>
            <div class="reviews-credentials">
              <img class="reviews-img" src="${l}" alt="${o}" />
              <p class="reviews-author">${o}</p>
            </div>
          </div>
        </li>`}).join("")}function Q(){const e=K.getBoundingClientRect();e.top<window.innerHeight&&e.bottom>0&&k&&!P&&(U("Not found"),P=!0)}function U(e){x.innerHTML=`<p class="not-found">${e}</p>`,M.show({message:"❌ Sorry, due to an error no reviews were fetched.",position:"topRight",backgroundColor:"#F44336",messageColor:"#fff"})}window.addEventListener("scroll",Q);G();function V(){const e=window.innerWidth;e<L.tablet||e>L.tablet&&e<L.desktop?i.params.slidesPerView=1:(i.params.slidesPerView=2,i.params.spaceBetween=24),i.update()}document.querySelector(".nav-arrow-prev").addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&i.slidePrev()});document.querySelector(".nav-arrow-next").addEventListener("keydown",e=>{(e.key==="Enter"||e.key===" ")&&i.slideNext()});window.addEventListener("resize",V);
//# sourceMappingURL=index.js.map
