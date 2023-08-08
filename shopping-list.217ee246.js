!function(){function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},s=o.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},o.parcelRequired7c6=s),s.register("iE7OH",function(t,o){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var n,r,s={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)s[t[o]]=e[t[o]]},r=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),s.register("aNJCr",function(t,o){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});var n,r={};n=function(e){var t=r[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=t),t}}),s("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.217ee246.js","kxKJ3":"symbol-defs.dc089ae5.svg","ei4R3":"amazon1.875cac08.png","c8Zp5":"applebook1.09bf885c.png","jeqkq":"barnesnoble.84820a41.png","l18Rb":"index.279b4278.js","d533A":"index.5eedf69d.js"}')),s("xpKCW"),s("i8Q71"),s("k5quo");var l={};l=s("aNJCr").getBundleURL("jSFKT")+s("iE7OH").resolve("ei4R3");var i={};i=s("aNJCr").getBundleURL("jSFKT")+s("iE7OH").resolve("c8Zp5");var a={};a=s("aNJCr").getBundleURL("jSFKT")+s("iE7OH").resolve("jeqkq");var c={};c=s("aNJCr").getBundleURL("jSFKT")+s("iE7OH").resolve("kxKJ3");let d=document.querySelector("#bookList"),p=document.querySelector("#message");async function u(e){try{let t=await fetch("https://books-backend.p.goit.global/books/"+e);if(!t.ok)throw Error("Error");let o=await t.json();return o}catch(e){return console.log(e.message),null}}function f(){let e=JSON.parse(localStorage.getItem("targetBooks"))||[];return e}function g(e){let t=document.querySelector(".shopping-list-title");e&&(t.style.marginBottom="40px")}let m=f();d.innerHTML="",0===m.length?(p.style.display="block",g(!1)):(p.style.display="none",m.forEach(async e=>{try{let o=await u(e);(function(e){let o=document.createElement("div");o.innerHTML=`
<div class="shopping-card">
      <img class="shopping-image" src="${e.book_image}" alt="${e.list_name}" id="${e._id}" width ="100px">
  <div class = "shopping-descr">
      <h2 class="book-card-title">${e.title}</h2>
      <h3 class="shopping-category book-card-title">${e.list_name}</h3>
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
  `,d.appendChild(o);let n=o.querySelector(".delete-button");n.addEventListener("click",()=>{(function(e){let t=f().filter(t=>t!==e);localStorage.setItem("targetBooks",JSON.stringify(t))})(e._id),o.remove(),0===f().length&&(p.style.display="block")})})(o)}catch(e){console.log(e.message)}}),g(!0));let h=document.querySelectorAll(".book-card");h.forEach(e=>{let t=e.querySelector(".book-image").id;u(t).then(e=>findStoreLink(e))})}();
//# sourceMappingURL=shopping-list.217ee246.js.map
