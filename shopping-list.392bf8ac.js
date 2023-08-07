!function(){function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},l=r.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},r.parcelRequired7c6=l),l.register("iE7OH",function(t,r){e(t.exports,"register",function(){return o},function(e){return o=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var o,n,l={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)l[t[r]]=e[t[r]]},n=function(e){var t=l[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),l.register("aNJCr",function(t,r){e(t.exports,"getBundleURL",function(){return o},function(e){return o=e});var o,n={};o=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}}),l("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.392bf8ac.js","f7gxa":"image1.eaeac124.png","j5410":"image2.4ba4ff1b.png","5EOPU":"image3.b169523f.png","bxQXn":"image4.e3ae9798.png","bVtxb":"image5.031e0db7.png","5xjT1":"image6.065c9c2a.png","1lVbT":"image7.83bc5945.png","lA8cL":"image8.17234bae.png","49EBR":"image9.42356102.png","aaLHb":"amazon.e5ecaa41.png","8DT1R":"applebook.b7f74ac4.png","jeqkq":"barnesnoble.84820a41.png"}'));var a={};a=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("f7gxa");var i={};i=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("j5410");var s={};s=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("5EOPU");var c={};c=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("bxQXn");var u={};u=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("bVtxb");var d={};d=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("5xjT1");var g={};g=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("1lVbT");var p={};p=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("lA8cL");var m={};m=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("49EBR"),document.querySelector(".books-list"),document.querySelector(".js-modal-btn"),document.querySelectorAll(".js-modal-link"),document.querySelector(".js-modal-book"),document.querySelector(".js-modal-close"),document.querySelector(".js-modal");let f=[{id:1,title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:`${t(a)}`},{id:2,title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:`${t(i)}`},{id:3,title:"UNITED24",url:"https://u24.gov.ua/uk",img:`${t(s)}`},{id:4,title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:`${t(c)}`},{id:5,title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:`${t(u)}`},{id:6,title:"RAZOM",url:"https://www.razomforukraine.org/",img:`${t(d)}`},{id:7,title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:`${t(g)}`},{id:8,title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:`${t(p)}`},{id:9,title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:`${t(m)}`}],h=document.querySelector(".blocks"),b=document.querySelector(".button-scroll-down"),v=document.querySelector(".button-scroll-up");console.dir(h),h.insertAdjacentHTML("beforeend",f.map(({title:e,url:t,img:r,id:o})=>`
    <li class="block">
   <div>
    <a href="${t}" class='gotofoundation'>
        <p>0${o}</p>
        <img  class='image' src='${r}' alt="${e}" >
    </a>
   </div>
  </li>`).join("")),b.addEventListener("click",function(e){(function(){let{height:e}=document.querySelector(".blocks").firstElementChild.getBoundingClientRect();h.scrollBy({top:e,behavior:"smooth"})})()}),v.addEventListener("click",function(){let{height:e}=document.querySelector(".blocks").firstElementChild.getBoundingClientRect();h.scrollBy({top:-e,behavior:"smooth"})}),h.scrollTo(0,0);var S={};S=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("aaLHb");var E={};E=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("8DT1R");var k={};k=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("jeqkq");let w=document.querySelector("#bookList"),y=document.querySelector("#message"),H={buy_links:[{name:"Amazon",url:"https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781250144058?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"}]};async function _(e){try{let t=await fetch("https://books-backend.p.goit.global/books/"+e);if(!t.ok)throw Error("Error");let r=await t.json();return r}catch(e){return console.log(e.message),null}}function R(){let e=JSON.parse(localStorage.getItem("targetBooks"))||[];return e}function F(e){let t=w.querySelectorAll(".modal-link");t.forEach(e=>{let t=e.getAttribute("name"),r=H.buy_links.find(e=>e.name===t)?.url;e.href=r})}let j=R();w.innerHTML="",0===j.length?y.style.display="block":(y.style.display="none",j.forEach(async e=>{try{let r=await _(e);(function(e){let r=document.createElement("div");r.innerHTML=`
<div class="shopping-card">
      <img class="shopping-image" src="${e.book_image}" alt="${e.list_name}" id="${e._id}">
      <h2 class="shop-title">${e.title}</h2>
      <h3 class="shopping-category">${e.list_name}</h3>
      <p class="shopping-description">${e.description}</p>
      <span class="shopping-author">${e.author}</span>
          <ul class="modal-shops">
                        <li class="modal-shops-item">
                            <a class="modal-link" href="#" target="_blank" name="Amazon" rel="noreferrer noopener">
                                <img class="modal-img-shop" src="${t(S)}" alt="amazon store">
                            </a>
                        </li>
                        <li class="modal-shops-item">
                            <a class="modal-link" href="#" target="_blank" name="Apple Books" rel="noreferrer noopener">
                                <img class="modal-img-shop" src="${t(E)}" alt="apple store">
                            </a>
                        </li>
                        <li class="modal-shops-item">
                            <a class="modal-link" href="#" target="_blank" name="Barnes and Noble"
                                rel="noreferrer noopener">
                                <img class="modal-img-shop" src="${t(k)}"
                                    alt="barnes and noble store">
                            </a>
                        </li>
                    </ul>
      <button class="delete-button"><svg width="16" height="16" class="shopping-svg">
                    <use href="./images/symbol-defs.svg#icon-trash-03-1-1"></use></button>
    </div>
  `,w.appendChild(r);let o=r.querySelector(".delete-button");o.addEventListener("click",()=>{(function(e){let t=R().filter(t=>t!==e);localStorage.setItem("targetBooks",JSON.stringify(t))})(e._id),r.remove(),0===R().length&&(y.style.display="block")}),F(e)})(r)}catch(e){console.log(e.message)}}));let T=document.querySelectorAll(".book-card");T.forEach(e=>{let t=e.querySelector(".book-image").id;_(t).then(e=>F(e))})}();
//# sourceMappingURL=shopping-list.392bf8ac.js.map
