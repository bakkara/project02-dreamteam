function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=o.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},o.parcelRequired7c6=a),a.register("kyEFX",function(t,o){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var n,r,a={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)a[t[o]]=e[t[o]]},r=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.27f82252.js","7aOuY":"amazon1.875cac08.png","33UjE":"applebook1.09bf885c.png","jjvJg":"barnesnoble.84820a41.png","gB3Gx":"amazon@1x.100eb040.png","6p5Hd":"amazon@2x.fdf8ae2a.png","gLOvi":"applebook@1x.58f7dd67.png","ltMyQ":"applebook@2x.1c1863b9.png","kJVOm":"barnesnoble@1x.e62c1f9d.png","8ZirL":"barnesnoble@2x.84820a41.png","9v6fF":"symbol-defs.e6efdff2.svg","jU5Z1":"index.3ddc3561.js","i9NpT":"index.39704d67.js"}')),a("dTazW"),a("bUb57"),a("aFnU4");var i={};i=new URL(a("kyEFX").resolve("7aOuY"),import.meta.url).toString();var l={};l=new URL(a("kyEFX").resolve("33UjE"),import.meta.url).toString();var s={};s=new URL(a("kyEFX").resolve("jjvJg"),import.meta.url).toString();var c={};c=new URL(a("kyEFX").resolve("gB3Gx"),import.meta.url).toString();var p={};p=new URL(a("kyEFX").resolve("6p5Hd"),import.meta.url).toString();var g={};g=new URL(a("kyEFX").resolve("gLOvi"),import.meta.url).toString();var d={};d=new URL(a("kyEFX").resolve("ltMyQ"),import.meta.url).toString();var u={};u=new URL(a("kyEFX").resolve("kJVOm"),import.meta.url).toString();var m={};m=new URL(a("kyEFX").resolve("8ZirL"),import.meta.url).toString();var f={};f=new URL(a("kyEFX").resolve("9v6fF"),import.meta.url).toString();const b=document.querySelector("#bookList"),v=document.querySelector("#message");async function h(e){try{let t=await fetch("https://books-backend.p.goit.global/books/"+e);if(!t.ok)throw Error("Error");let o=await t.json();return o}catch(e){return console.log(e.message),null}}function y(){let e=JSON.parse(localStorage.getItem("targetBooks"))||[];return e}function k(e){let t=document.querySelector(".shopping-list-title");e&&(t.style.marginBottom="40px")}function E(e){let o=[{name:"Amazon",img:[t(i),t(c),t(p)]},{name:"Apple Books",img:[t(l),t(g),t(d)]},{name:"Barnes and Noble",img:[t(s),t(u),t(m)]}];o.forEach(t=>{t.link=e.buy_links.find(e=>e.name==t.name).url});let n=o.map(e=>`<li class="modal-shops-item">
            <a class="modal-link" href="${e.link}"
               target="_blank" name="${e.name}"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop" src="${e.img[0]}" alt="${e.name}" srcset="${e.img[1]} 1x, ${e.img[2]} 2x">
                    </a>
                </li>`).join(""),r=document.createElement("div");r.innerHTML=`
<div class="shopping-card">
      <img class="shopping-image" src="${e.book_image}" alt="${e.list_name}" id="${e._id}" width ="100px">
  <div class = "shopping-descr">
      <h2 class="book-card-title title-shop-list">${e.title}</h2>
      <h3 class="shopping-category title-shop-list">${e.list_name}</h3>
      <div class="shopping-description-container">  <p class="shopping-description">${e.description}</p> </div>
      <div class="link-book-shop">
      <span class="shopping-author">${e.author}</span>
          <ul class="list-shops">
                ${n}
            </ul>
            </div>
            </div>
      <button class="delete-button"><svg width="16" height="16" class="shopping-svg">
                    <use href="${t(f)}#icon-trash-03-1-1"></use></button>
    </div>
  `,b.appendChild(r);let a=r.querySelector(".delete-button");a.addEventListener("click",()=>{(function(e){let t=y().filter(t=>t!==e);localStorage.setItem("targetBooks",JSON.stringify(t))})(e._id),r.remove(),0===y().length&&(v.style.display="block")})}const _=y();b.innerHTML="",0===_.length?(v.style.display="block",k(!1)):(v.style.display="none",_.forEach(async e=>{try{let t=await h(e);E(t)}catch(e){console.log(e.message)}}),k(!0));const S=document.querySelectorAll(".book-card");S.forEach(async e=>{let t=e.querySelector(".shopping-image").id;try{let o=await h(t);o&&E(o,e)}catch(e){console.log(e.message)}});
//# sourceMappingURL=shopping-list.27f82252.js.map
