!function(){function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},l=r.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},r.parcelRequired7c6=l),l.register("iE7OH",function(t,r){e(t.exports,"register",function(){return o},function(e){return o=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var o,n,l={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)l[t[r]]=e[t[r]]},n=function(e){var t=l[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),l.register("aNJCr",function(t,r){e(t.exports,"getBundleURL",function(){return o},function(e){return o=e});var o,n={};o=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}}),l("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.d55f1e07.js","kxKJ3":"symbol-defs.1f03b0ac.svg","f7gxa":"image1.a2f76ef8.png","j5410":"image2.77b370d8.png","5EOPU":"image3.237e22ae.png","bxQXn":"image4.9b5889b4.png","bVtxb":"image5.4459924d.png","5xjT1":"image6.6990d88b.png","1lVbT":"image7.181cb1fa.png","lA8cL":"image8.88cae6e7.png","49EBR":"image9.15050564.png","ei4R3":"amazon1.875cac08.png","c8Zp5":"applebook1.09bf885c.png","jeqkq":"barnesnoble.84820a41.png"}'));var i={};i=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("f7gxa");var a={};a=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("j5410");var s={};s=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("5EOPU");var c={};c=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("bxQXn");var u={};u=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("bVtxb");var d={};d=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("5xjT1");var g={};g=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("1lVbT");var p={};p=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("lA8cL");var m={};m=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("49EBR"),document.querySelector(".books-list"),document.querySelector(".js-modal-btn"),document.querySelector(".js-modal-book"),document.querySelector(".js-modal-close"),document.querySelector(".js-modal"),document.body;let f=[{id:1,title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:`${t(i)}`},{id:2,title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:`${t(a)}`},{id:3,title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:`${t(s)}`},{id:4,title:"RAZOM",url:"https://www.razomforukraine.org/",img:`${t(c)}`},{id:5,title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:`${t(u)}`},{id:6,title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:`${t(d)}`},{id:7,title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:`${t(g)}`},{id:8,title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:`${t(p)}`},{id:9,title:"UNITED24",url:"https://u24.gov.ua/uk",img:`${t(m)}`}],h=document.querySelector(".blocks"),b=document.querySelector(".button-scroll-down"),v=document.querySelector(".button-scroll-up");h.insertAdjacentHTML("beforeend",f.map(({title:e,url:t,img:r,id:o})=>`
    <li class="block">
   <div>
    <a href="${t}" class='gotofoundation' target="_blank">
        <p>0${o}</p>
        <img  class='image' src='${r}' alt="${e}">
    </a>
   </div>
  </li>`).join("")),b.addEventListener("click",function(e){let{height:t}=document.querySelector(".blocks").firstElementChild.getBoundingClientRect();h.scrollBy({top:t,behavior:"smooth"})}),v.addEventListener("click",function(e){let{height:t}=document.querySelector(".blocks").firstElementChild.getBoundingClientRect();h.scrollBy({top:-t,behavior:"smooth"})});var S={};S=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("ei4R3");var k={};k=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("c8Zp5");var E={};E=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("jeqkq");var y={};y=l("aNJCr").getBundleURL("jSFKT")+l("iE7OH").resolve("kxKJ3");let H=document.querySelector("#bookList"),_=document.querySelector("#message");async function w(e){try{let t=await fetch("https://books-backend.p.goit.global/books/"+e);if(!t.ok)throw Error("Error");let r=await t.json();return r}catch(e){return console.log(e.message),null}}function R(){let e=JSON.parse(localStorage.getItem("targetBooks"))||[];return e}let j=R();H.innerHTML="",0===j.length?_.style.display="block":(_.style.display="none",j.forEach(async e=>{try{let r=await w(e);(function(e){let r=document.createElement("div");r.innerHTML=`
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
                        <img class="modal-img-shop" src="${t(S)}" alt="amazon store">
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
                        <img class="modal-img-shop" src="${t(E)}" alt="barnes and noble store">
                    </a>
                </li>
            </ul>
            </div>
      <button class="delete-button"><svg width="16" height="16" class="shopping-svg">
                    <use href="${t(y)}#icon-trash-03-1-1"></use></button>
    </div>
  `,H.appendChild(r);let o=r.querySelector(".delete-button");o.addEventListener("click",()=>{(function(e){let t=R().filter(t=>t!==e);localStorage.setItem("targetBooks",JSON.stringify(t))})(e._id),r.remove(),0===R().length&&(_.style.display="block")})})(r)}catch(e){console.log(e.message)}}));let F=document.querySelectorAll(".book-card");F.forEach(e=>{let t=e.querySelector(".book-image").id;w(t).then(e=>findStoreLink(e))})}();
//# sourceMappingURL=shopping-list.d55f1e07.js.map
