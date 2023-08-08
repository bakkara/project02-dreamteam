function e(e,o,t,n){Object.defineProperty(e,o,{get:t,set:n,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in r){var o=r[e];delete r[e];var t={id:e,exports:{}};return n[e]=t,o.call(t.exports,t,t.exports),t.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,o){r[e]=o},t.parcelRequired7c6=s),s.register("kyEFX",function(o,t){e(o.exports,"register",function(){return n},function(e){return n=e}),e(o.exports,"resolve",function(){return r},function(e){return r=e});var n,r,s={};n=function(e){for(var o=Object.keys(e),t=0;t<o.length;t++)s[o[t]]=e[o[t]]},r=function(e){var o=s[e];if(null==o)throw Error("Could not resolve bundle with id "+e);return o}}),s("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.3cbd77c4.js","7aOuY":"amazon1.875cac08.png","33UjE":"applebook1.09bf885c.png","jjvJg":"barnesnoble.84820a41.png","9v6fF":"symbol-defs.dc089ae5.svg","2hezz":"index.5ec1f7a9.js","2GbpV":"index.6c243126.js"}')),s("dTazW"),s("bUb57"),s("aFnU4");var l={};l=new URL(s("kyEFX").resolve("7aOuY"),import.meta.url).toString();var a={};a=new URL(s("kyEFX").resolve("33UjE"),import.meta.url).toString();var i={};i=new URL(s("kyEFX").resolve("jjvJg"),import.meta.url).toString();var c={};c=new URL(s("kyEFX").resolve("9v6fF"),import.meta.url).toString();const d=document.querySelector("#bookList"),p=document.querySelector("#message");async function u(e){try{let o=await fetch("https://books-backend.p.goit.global/books/"+e);if(!o.ok)throw Error("Error");let t=await o.json();return t}catch(e){return console.log(e.message),null}}function g(){let e=JSON.parse(localStorage.getItem("targetBooks"))||[];return e}function m(e){let o=document.querySelector(".shopping-list-title");e&&(o.style.marginBottom="40px")}const f=g();d.innerHTML="",0===f.length?(p.style.display="block",m(!1)):(p.style.display="none",f.forEach(async e=>{try{let t=await u(e);(function(e){let t=document.createElement("div");t.innerHTML=`
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
                        <img class="modal-img-shop amazon-img" src="${o(l)}" alt="amazon store">
                    </a>
                </li>
                <li class="modal-shops-item">
                    <a class="modal-link" href="${e.buy_links.find(e=>"Apple Books"===e.name).url}" target="_blank" name="Apple Books"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop shopping-img-store" src="${o(a)}" alt="apple store">
                    </a>
                </li>
                <li class="modal-shops-item">
                    <a class="modal-link" href="${e.buy_links.find(e=>"Barnes and Noble"===e.name).url}" target="_blank" name="Barnes and Noble"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop shopping-img-store" src="${o(i)}" alt="barnes and noble store">
                    </a>
                </li>
            </ul>
            </div>
            </div>
      <button class="delete-button"><svg width="16" height="16" class="shopping-svg">
                    <use href="${o(c)}#icon-trash-03-1-1"></use></button>
    </div>
  `,d.appendChild(t);let n=t.querySelector(".delete-button");n.addEventListener("click",()=>{(function(e){let o=g().filter(o=>o!==e);localStorage.setItem("targetBooks",JSON.stringify(o))})(e._id),t.remove(),0===g().length&&(p.style.display="block")})})(t)}catch(e){console.log(e.message)}}),m(!0));const h=document.querySelectorAll(".book-card");h.forEach(e=>{let o=e.querySelector(".book-image").id;u(o).then(e=>findStoreLink(e))});
//# sourceMappingURL=shopping-list.3cbd77c4.js.map
