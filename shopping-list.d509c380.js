function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=o.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},o.parcelRequired7c6=a),a.register("kyEFX",function(t,o){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var n,r,a={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)a[t[o]]=e[t[o]]},r=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.d509c380.js","7aOuY":"amazon1.875cac08.png","33UjE":"applebook1.09bf885c.png","jjvJg":"barnesnoble.84820a41.png","gB3Gx":"amazon@1x.100eb040.png","6p5Hd":"amazon@2x.fdf8ae2a.png","gLOvi":"applebook@1x.58f7dd67.png","ltMyQ":"applebook@2x.1c1863b9.png","kJVOm":"barnesnoble@1x.e62c1f9d.png","8ZirL":"barnesnoble@2x.84820a41.png","9v6fF":"symbol-defs.e6efdff2.svg","fnM73":"index.95c89cda.js","aAx91":"index.6616c715.js"}'));var i=a("dSs1Y");a("dTazW"),a("bUb57"),a("aFnU4"),a("ghT7p");var l={};l=new URL(a("kyEFX").resolve("7aOuY"),import.meta.url).toString();var s={};s=new URL(a("kyEFX").resolve("33UjE"),import.meta.url).toString();var c={};c=new URL(a("kyEFX").resolve("jjvJg"),import.meta.url).toString();var g={};g=new URL(a("kyEFX").resolve("gB3Gx"),import.meta.url).toString();var p={};p=new URL(a("kyEFX").resolve("6p5Hd"),import.meta.url).toString();var d={};d=new URL(a("kyEFX").resolve("gLOvi"),import.meta.url).toString();var u={};u=new URL(a("kyEFX").resolve("ltMyQ"),import.meta.url).toString();var m={};m=new URL(a("kyEFX").resolve("kJVOm"),import.meta.url).toString();var f={};f=new URL(a("kyEFX").resolve("8ZirL"),import.meta.url).toString();var b={};b=new URL(a("kyEFX").resolve("9v6fF"),import.meta.url).toString();const v=document.querySelector("#bookList"),h=document.querySelector("#message");async function y(e){try{let t=await fetch("https://books-backend.p.goit.global/books/"+e);if(!t.ok)throw Error("Error");let o=await t.json();return console.log(o),o}catch(e){return console.log(e.message),null}}function k(){let e=JSON.parse(localStorage.getItem("targetBooks"))||[];return console.log(localStorage.getItem("targetBooks")),e}function E(e){let t=document.querySelector(".shopping-list-title");e&&(t.style.marginBottom="40px")}function _(e){let o=[{name:"Amazon",img:[t(l),t(g),t(p)]},{name:"Apple Books",img:[t(s),t(d),t(u)]},{name:"Barnes and Noble",img:[t(c),t(m),t(f)]}];o.forEach(t=>{t.link=e.buy_links.find(e=>e.name==t.name).url});let n=o.map((e,t)=>`<li class="modal-shops-item">
            <a class="modal-link" href="${e.link}"
               target="_blank" name="${e.name}"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop${0===t?" first-img":""}" src="${e.img[0]}" alt="${e.name}" srcset="${e.img[1]} 1x, ${e.img[2]} 2x">
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
                    <use href="${t(b)}#icon-trash-03-1-1"></use></button>
    </div>
  `,v.appendChild(r);let a=r.querySelector(".delete-button");a.addEventListener("click",()=>{(function(e){(0,i.Loading).init();let t=k().filter(t=>t!==e);localStorage.setItem("targetBooks",JSON.stringify(t)),(0,i.Loading).remove()})(e._id),r.remove(),0===k().length&&(h.style.display="block")})}const S=k();v.innerHTML="",(0,i.Loading).init(),0===S.length?(h.style.display="block",E(!1)):(h.style.display="none",S.forEach(async e=>{try{let t=await y(e);_(t)}catch(e){console.log(e.message)}}),E(!0)),(0,i.Loading).remove();const H=document.querySelectorAll(".book-card");H.forEach(async e=>{let t=e.querySelector(".shopping-image").id;try{let o=await y(t);o&&_(o,e)}catch(e){console.log(e.message)}});
//# sourceMappingURL=shopping-list.d509c380.js.map
