function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},l=o.parcelRequired7c6;null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},o.parcelRequired7c6=l),l.register("kyEFX",function(t,o){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var r,n,l={};r=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)l[t[o]]=e[t[o]]},n=function(e){var t=l[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),l("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.4b740894.js","bW8Dt":"image1.eaeac124.png","gwhdz":"image2.4ba4ff1b.png","lFRnR":"image3.e3ae9798.png","hfZZ9":"image4.b169523f.png","guv9H":"image5.f19543c7.png","9NAah":"image6.42356102.png","3N2c0":"image7.031e0db7.png","9jEGL":"image8.17234bae.png","kaT8J":"image9.065c9c2a.png","1yVwl":"amazon.e5ecaa41.png","M2M4H":"applebook.b7f74ac4.png","jjvJg":"barnesnoble.84820a41.png","9v6fF":"symbol-defs.1f03b0ac.svg"}'));var a={};a=new URL(l("kyEFX").resolve("bW8Dt"),import.meta.url).toString();var i={};i=new URL(l("kyEFX").resolve("gwhdz"),import.meta.url).toString();var s={};s=new URL(l("kyEFX").resolve("lFRnR"),import.meta.url).toString();var c={};c=new URL(l("kyEFX").resolve("hfZZ9"),import.meta.url).toString();var u={};u=new URL(l("kyEFX").resolve("guv9H"),import.meta.url).toString();var d={};d=new URL(l("kyEFX").resolve("9NAah"),import.meta.url).toString();var g={};g=new URL(l("kyEFX").resolve("3N2c0"),import.meta.url).toString();var m={};m=new URL(l("kyEFX").resolve("9jEGL"),import.meta.url).toString();var p={};p=new URL(l("kyEFX").resolve("kaT8J"),import.meta.url).toString(),document.querySelector(".books-list"),document.querySelector(".js-modal-btn"),document.querySelector(".js-modal-book"),document.querySelector(".js-modal-close"),document.querySelector(".js-modal"),document.body;const h=[{id:1,title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:`${t(a)}`},{id:2,title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:`${t(i)}`},{id:3,title:"UNITED24",url:"https://u24.gov.ua/uk",img:`${t(s)}`},{id:4,title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:`${t(c)}`},{id:5,title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:`${t(u)}`},{id:6,title:"RAZOM",url:"https://www.razomforukraine.org/",img:`${t(d)}`},{id:7,title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:`${t(g)}`},{id:8,title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:`${t(m)}`},{id:9,title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:`${t(p)}`}],f=document.querySelector(".blocks"),b=document.querySelector(".button-scroll-down"),y=document.querySelector(".button-scroll-up");console.dir(f),f.insertAdjacentHTML("beforeend",h.map(({title:e,url:t,img:o,id:r})=>`
    <li class="block">
   <div>
    <a href="${t}" class='gotofoundation'>
        <p>0${r}</p>
        <img  class='image' src='${o}' alt="${e}" >
    </a>
   </div>
  </li>`).join("")),b.addEventListener("click",function(e){(function(){let{height:e}=document.querySelector(".blocks").firstElementChild.getBoundingClientRect();f.scrollBy({top:e,behavior:"smooth"})})()}),y.addEventListener("click",function(){let{height:e}=document.querySelector(".blocks").firstElementChild.getBoundingClientRect();f.scrollBy({top:-e,behavior:"smooth"})}),f.scrollTo(0,0);var k={};k=new URL(l("kyEFX").resolve("1yVwl"),import.meta.url).toString();var w={};w=new URL(l("kyEFX").resolve("M2M4H"),import.meta.url).toString();var v={};v=new URL(l("kyEFX").resolve("jjvJg"),import.meta.url).toString();var S={};S=new URL(l("kyEFX").resolve("9v6fF"),import.meta.url).toString();const E=document.querySelector("#bookList"),_=document.querySelector("#message"),F={buy_links:[{name:"Amazon",url:"https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781250144058?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"}]};async function R(e){try{let t=await fetch("https://books-backend.p.goit.global/books/"+e);if(!t.ok)throw Error("Error");let o=await t.json();return o}catch(e){return console.log(e.message),null}}function H(){let e=JSON.parse(localStorage.getItem("targetBooks"))||[];return e}function A(e){let t=E.querySelectorAll(".modal-link");t.forEach(e=>{let t=e.getAttribute("name"),o=F.buy_links.find(e=>e.name===t)?.url;e.href=o})}const $=H();E.innerHTML="",0===$.length?_.style.display="block":(_.style.display="none",$.forEach(async e=>{try{let o=await R(e);(function(e){let o=document.createElement("div");o.innerHTML=`
<div class="shopping-card">
      <img class="shopping-image" src="${e.book_image}" alt="${e.list_name}" id="${e._id}">
      <h2 class="shop-title">${e.title}</h2>
      <h3 class="shopping-category">${e.list_name}</h3>
      <p class="shopping-description">${e.description}</p>
      <span class="shopping-author">${e.author}</span>
          <ul class="modal-shops">
                        <li class="modal-shops-item">
                            <a class="modal-link" href="#" target="_blank" name="Amazon" rel="noreferrer noopener">
                                <img class="modal-img-shop" src="${t(k)}" alt="amazon store">
                            </a>
                        </li>
                        <li class="modal-shops-item">
                            <a class="modal-link" href="#" target="_blank" name="Apple Books" rel="noreferrer noopener">
                                <img class="modal-img-shop" src="${t(w)}" alt="apple store">
                            </a>
                        </li>
                        <li class="modal-shops-item">
                            <a class="modal-link" href="#" target="_blank" name="Barnes and Noble"
                                rel="noreferrer noopener">
                                <img class="modal-img-shop" src="${t(v)}"
                                    alt="barnes and noble store">
                            </a>
                        </li>
                    </ul>
      <button class="delete-button"><svg width="16" height="16" class="shopping-svg">
                    <use href="${t(S)}#icon-trash-03-1-1"></use></button>
    </div>
  `,E.appendChild(o);let r=o.querySelector(".delete-button");r.addEventListener("click",()=>{(function(e){let t=H().filter(t=>t!==e);localStorage.setItem("targetBooks",JSON.stringify(t))})(e._id),o.remove(),0===H().length&&(_.style.display="block")}),A(e)})(o)}catch(e){console.log(e.message)}}));const L=document.querySelectorAll(".book-card");L.forEach(e=>{let t=e.querySelector(".book-image").id;R(t).then(e=>A(e))});
//# sourceMappingURL=shopping-list.4b740894.js.map
