!function(){"use strict";function e(e){document.querySelectorAll(`[href='${e}']`).forEach((e=>{const t=e.getAttribute("href"),c=document.querySelector(`${t}`);e.addEventListener("click",(e=>{e.preventDefault(),c.scrollIntoView({behavior:"smooth"})}))}))}console.log(document.documentElement.clientHeight+"and"+document.documentElement.clientWidth),function(){const e=document.querySelector(".select"),t=document.querySelector(".select__list"),c=document.querySelectorAll(".select__item");function n(){t.classList.toggle("select__list_active")}e.querySelector(".select__head").addEventListener("click",(()=>{n()})),c.forEach((t=>{t.addEventListener("click",(()=>{e.querySelector(".select__head").innerText=t.innerText,e.querySelector(".select__input").value=t.innerText,n()}))}))}(),function(){const e=document.querySelector("#count"),t=document.querySelector(".contact-form__range_current");let c=e.value;function n(e){t.innerText=e,t.style.left=.95*e+"%"}e.addEventListener("input",(()=>{n(e.value)})),n(c)}(),function(e,t,c,n,o){const l=document.querySelector(".humb"),r=document.querySelector("#menu"),u=r.querySelector(".cross"),i=r.querySelectorAll(".menu-item");function s(e){e.addEventListener("click",(()=>{r.classList.toggle(o),r.classList.contains(o)?document.body.style.overflow="hidden":document.body.style.overflow=""}))}s(l),s(u),i.forEach((e=>s(e)))}(0,0,0,0,"promo-nav_active"),e("#promo"),e("#about"),e("#contact")}();
//# sourceMappingURL=bundle.js.map