!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},s=n.parcelRequired7c6;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},n.parcelRequired7c6=s),s.register("iE7OH",function(t,n){e(t.exports,"register",function(){return o},function(e){return o=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var o,r,s={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},r=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),s.register("aNJCr",function(t,n){e(t.exports,"getBundleURL",function(){return o},function(e){return o=e});var o,r={};o=function(e){var t=r[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=t),t}}),s("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.d31c30e0.js","kxKJ3":"symbol-defs.1f03b0ac.svg","ei4R3":"amazon1.875cac08.png","c8Zp5":"applebook1.09bf885c.png","jeqkq":"barnesnoble.84820a41.png","5m15n":"index.9606b0a8.js","gQOGj":"index.d23a707f.js"}')),s("xpKCW"),s("k5quo"),s("61KF9");var l={};l=s("aNJCr").getBundleURL("jSFKT")+s("iE7OH").resolve("ei4R3");var i={};i=s("aNJCr").getBundleURL("jSFKT")+s("iE7OH").resolve("c8Zp5");var a={};a=s("aNJCr").getBundleURL("jSFKT")+s("iE7OH").resolve("jeqkq");var c={};c=s("aNJCr").getBundleURL("jSFKT")+s("iE7OH").resolve("kxKJ3");let d=document.querySelector("#bookList"),p=document.querySelector("#message");async function u(e){try{let t=await fetch("https://books-backend.p.goit.global/books/"+e);if(!t.ok)throw Error("Error");let n=await t.json();return n}catch(e){return console.log(e.message),null}}function f(){let e=JSON.parse(localStorage.getItem("targetBooks"))||[];return e}function g(e){let t=document.querySelector(".shopping-list-title");e&&(t.style.marginBottom="40px")}let m=f();d.innerHTML="",0===m.length?(p.style.display="block",g(!1)):(p.style.display="none",m.forEach(async e=>{try{let n=await u(e);(function(e){let n=document.createElement("div");n.innerHTML=`
<div class="shopping-card">
      <img class="shopping-image" src="${e.book_image}" alt="${e.list_name}" id="${e._id}" width ="100px">
  <div class = "shopping-descr">
      <h2 class="book-card-title">${e.title}</h2>
      <h3 class="shopping-category">${e.list_name}</h3>
      <div class="shopping-description-container">  <p class="shopping-description">${e.description}</p> </div>
      <div class="link-book-shop">
      <span class="shopping-author">${e.author}</span>
          <ul class="list-shops">
                <li class="modal-shops-item">
                    <a class="modal-link" href="${e.buy_links.find(e=>"Amazon"===e.name).url}" target="_blank" name="Amazon"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop amazon-img" src="${t(l)}" alt="amazon store">
                    </a>
                </li>
                <li class="modal-shops-item">
                    <a class="modal-link" href="${e.buy_links.find(e=>"Apple Books"===e.name).url}" target="_blank" name="Apple Books"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop shopping-img-store" src="${t(i)}" alt="apple store">
                    </a>
                </li>
                <li class="modal-shops-item">
                    <a class="modal-link" href="${e.buy_links.find(e=>"Barnes and Noble"===e.name).url}" target="_blank" name="Barnes and Noble"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop shopping-img-store" src="${t(a)}" alt="barnes and noble store">
                    </a>
                </li>
            </ul>
            </div>
            </div>
      <button class="delete-button"><svg width="16" height="16" class="shopping-svg">
                    <use href="${t(c)}#icon-trash-03-1-1"></use></button>
    </div>
  `,d.appendChild(n);let o=n.querySelector(".delete-button");o.addEventListener("click",()=>{(function(e){let t=f().filter(t=>t!==e);localStorage.setItem("targetBooks",JSON.stringify(t))})(e._id),n.remove(),0===f().length&&(p.style.display="block")})})(n)}catch(e){console.log(e.message)}}),g(!0));let h=document.querySelectorAll(".book-card");h.forEach(e=>{let t=e.querySelector(".book-image").id;u(t).then(e=>findStoreLink(e))})}();
//# sourceMappingURL=shopping-list.d31c30e0.js.map
