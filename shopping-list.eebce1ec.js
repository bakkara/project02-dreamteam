function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},l=r.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},r.parcelRequired7c6=l),l.register("kyEFX",function(t,r){e(t.exports,"register",function(){return o},function(e){return o=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var o,n,l={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)l[t[r]]=e[t[r]]},n=function(e){var t=l[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),l("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.eebce1ec.js","bW8Dt":"image1.a2f76ef8.png","gwhdz":"image2.77b370d8.png","lFRnR":"image3.237e22ae.png","hfZZ9":"image4.9b5889b4.png","guv9H":"image5.4459924d.png","9NAah":"image6.6990d88b.png","3N2c0":"image7.181cb1fa.png","9jEGL":"image8.88cae6e7.png","kaT8J":"image9.15050564.png","7aOuY":"amazon1.875cac08.png","33UjE":"applebook1.09bf885c.png","jjvJg":"barnesnoble.84820a41.png","9v6fF":"symbol-defs.1f03b0ac.svg"}'));var i={};i=new URL(l("kyEFX").resolve("bW8Dt"),import.meta.url).toString();var a={};a=new URL(l("kyEFX").resolve("gwhdz"),import.meta.url).toString();var s={};s=new URL(l("kyEFX").resolve("lFRnR"),import.meta.url).toString();var c={};c=new URL(l("kyEFX").resolve("hfZZ9"),import.meta.url).toString();var u={};u=new URL(l("kyEFX").resolve("guv9H"),import.meta.url).toString();var d={};d=new URL(l("kyEFX").resolve("9NAah"),import.meta.url).toString();var g={};g=new URL(l("kyEFX").resolve("3N2c0"),import.meta.url).toString();var m={};m=new URL(l("kyEFX").resolve("9jEGL"),import.meta.url).toString();var p={};p=new URL(l("kyEFX").resolve("kaT8J"),import.meta.url).toString(),document.querySelector(".books-list"),document.querySelector(".js-modal-btn"),document.querySelector(".js-modal-book"),document.querySelector(".js-modal-close"),document.querySelector(".js-modal"),document.body,document.querySelector(".category-list");const h=[{id:1,title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:`${t(i)}`},{id:2,title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:`${t(a)}`},{id:3,title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:`${t(s)}`},{id:4,title:"RAZOM",url:"https://www.razomforukraine.org/",img:`${t(c)}`},{id:5,title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:`${t(u)}`},{id:6,title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:`${t(d)}`},{id:7,title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:`${t(g)}`},{id:8,title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:`${t(m)}`},{id:9,title:"UNITED24",url:"https://u24.gov.ua/uk",img:`${t(p)}`}],f=document.querySelector(".blocks"),b=document.querySelector(".button-scroll-down"),y=document.querySelector(".button-scroll-up");f.insertAdjacentHTML("beforeend",h.map(({title:e,url:t,img:r,id:o})=>`
    <li class="block">
   <div>
    <a href="${t}" class='gotofoundation' target="_blank">
        <p>0${o}</p>
        <img  class='image' src='${r}' alt="${e}">
    </a>
   </div>
  </li>`).join("")),b.addEventListener("click",function(e){let{height:t}=document.querySelector(".blocks").firstElementChild.getBoundingClientRect();f.scrollBy({top:t,behavior:"smooth"})}),y.addEventListener("click",function(e){let{height:t}=document.querySelector(".blocks").firstElementChild.getBoundingClientRect();f.scrollBy({top:-t,behavior:"smooth"})});var v={};v=new URL(l("kyEFX").resolve("7aOuY"),import.meta.url).toString();var k={};k=new URL(l("kyEFX").resolve("33UjE"),import.meta.url).toString();var S={};S=new URL(l("kyEFX").resolve("jjvJg"),import.meta.url).toString();var w={};w=new URL(l("kyEFX").resolve("9v6fF"),import.meta.url).toString();const E=document.querySelector("#bookList"),_=document.querySelector("#message");async function F(e){try{let t=await fetch("https://books-backend.p.goit.global/books/"+e);if(!t.ok)throw Error("Error");let r=await t.json();return r}catch(e){return console.log(e.message),null}}function R(){let e=JSON.parse(localStorage.getItem("targetBooks"))||[];return e}const H=R();E.innerHTML="",0===H.length?_.style.display="block":(_.style.display="none",H.forEach(async e=>{try{let r=await F(e);(function(e){let r=document.createElement("div");r.innerHTML=`
<div class="shopping-card">
      <img class="shopping-image" src="${e.book_image}" alt="${e.list_name}" id="${e._id}">
  <div class = "shopping-descr">
      <h2 class="shop-title">${e.title}</h2>
      <h3 class="shopping-category">${e.list_name}</h3>
      <p class="shopping-description">${e.description}</p>
      <span class="shopping-author">${e.author}</span>
          <ul class="modal-shops">
                <li class="modal-shops-item">
                    <a class="modal-link" href="${e.buy_links.find(e=>"Amazon"===e.name).url}" target="_blank" name="Amazon"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop" src="${t(v)}" alt="amazon store">
                    </a>
                </li>
                <li class="modal-shops-item">
                    <a class="modal-link" href="${e.buy_links.find(e=>"Apple Books"===e.name).url}" target="_blank" name="Apple Books"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop" src="${t(k)}" alt="apple store">
                    </a>
                </li>
                <li class="modal-shops-item">
                    <a class="modal-link" href="${e.buy_links.find(e=>"Barnes and Noble"===e.name).url}" target="_blank" name="Barnes and Noble"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop" src="${t(S)}" alt="barnes and noble store">
                    </a>
                </li>
            </ul>
            </div>
      <button class="delete-button"><svg width="16" height="16" class="shopping-svg">
                    <use href="${t(w)}#icon-trash-03-1-1"></use></button>
    </div>
  `,E.appendChild(r);let o=r.querySelector(".delete-button");o.addEventListener("click",()=>{(function(e){let t=R().filter(t=>t!==e);localStorage.setItem("targetBooks",JSON.stringify(t))})(e._id),r.remove(),0===R().length&&(_.style.display="block")})})(r)}catch(e){console.log(e.message)}}));const $=document.querySelectorAll(".book-card");$.forEach(e=>{let t=e.querySelector(".book-image").id;F(t).then(e=>findStoreLink(e))});
//# sourceMappingURL=shopping-list.eebce1ec.js.map
