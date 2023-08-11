!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",function(t,n){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return o},function(e){return o=e});var r,o,i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i.register("aNJCr",function(t,n){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,o={};r=function(e){var t=o[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[e]=t),t}}),i("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.0c3bd36c.js","kxKJ3":"symbol-defs.e6efdff2.svg","ei4R3":"amazon1.875cac08.png","c8Zp5":"applebook1.09bf885c.png","jeqkq":"barnesnoble.84820a41.png","2kw6b":"amazon@1x.100eb040.png","5iIId":"amazon@2x.fdf8ae2a.png","1WDfw":"applebook@1x.58f7dd67.png","dD20i":"applebook@2x.1c1863b9.png","E6g71":"barnesnoble@1x.e62c1f9d.png","96m6w":"barnesnoble@2x.84820a41.png","jXFiS":"index.41a4a8d5.js","k70Y7":"index.8e021ad5.js"}')),i("xpKCW"),i("i8Q71"),i("k5quo"),i("32ZrB");var a=i("7rQOT"),l={};l=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("ei4R3");var s={};s=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("c8Zp5");var c={};c=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("jeqkq");var d={};d=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("2kw6b");var u={};u=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("5iIId");var p={};p=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("1WDfw");var g={};g=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("dD20i");var f={};f=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("E6g71");var m={};m=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("96m6w");var h={};h=i("aNJCr").getBundleURL("jSFKT")+i("iE7OH").resolve("kxKJ3");let b=document.querySelector("#bookList"),v=document.querySelector("#message");async function H(e){try{let t=await fetch("https://books-backend.p.goit.global/books/"+e);if(!t.ok)throw Error("Error");let n=await t.json();return n}catch(e){return console.log(e.message),null}}function E(){let e=JSON.parse(localStorage.getItem("targetBooks"))||[];return e}function _(e){let t=document.querySelector(".shopping-list-title");e&&(t.style.marginBottom="40px")}function S(e){let n=[{name:"Amazon",img:[t(l),t(d),t(u)]},{name:"Apple Books",img:[t(s),t(p),t(g)]},{name:"Barnes and Noble",img:[t(c),t(f),t(m)]}];n.forEach(t=>{t.link=e.buy_links.find(e=>e.name==t.name).url});let r=n.map((e,t)=>`<li class="modal-shops-item">
            <a class="modal-link" href="${e.link}"
               target="_blank" name="${e.name}"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop${0===t?" first-img":""}" src="${e.img[0]}" alt="${e.name}" srcset="${e.img[1]} 1x, ${e.img[2]} 2x">
                    </a>
                </li>`).join(""),o=document.createElement("div");o.innerHTML=`
<div class="shopping-card">
      <img class="shopping-image" src="${e.book_image}" alt="${e.list_name}" id="${e._id}" width ="100px">
  <div class = "shopping-descr">
      <h2 class="book-card-title title-shop-list">${e.title}</h2>
      <h3 class="shopping-category title-shop-list">${e.list_name}</h3>
      <div class="shopping-description-container">  <p class="shopping-description">${e.description}</p> </div>
      <div class="link-book-shop">
      <span class="shopping-author">${e.author}</span>
          <ul class="list-shops">
                ${r}
            </ul>
            </div>
            </div>
      <button class="delete-button"><svg width="16" height="16" class="shopping-svg">
                    <use href="${t(h)}#icon-trash-03-1-1"></use></button>
    </div>
  `,b.appendChild(o);let i=o.querySelector(".delete-button");i.addEventListener("click",()=>{(function(e){(0,a.Loading).init();let t=E().filter(t=>t!==e);localStorage.setItem("targetBooks",JSON.stringify(t)),(0,a.Loading).remove()})(e._id),o.remove(),0===E().length&&(v.style.display="block")})}let k=E();b.innerHTML="",(0,a.Loading).init(),0===k.length?(v.style.display="block",_(!1)):(v.style.display="none",k.forEach(async e=>{try{let t=await H(e);S(t)}catch(e){console.log(e.message)}}),_(!0)),(0,a.Loading).remove();let y=document.querySelectorAll(".book-card");y.forEach(async e=>{let t=e.querySelector(".shopping-image").id;try{let n=await H(t);n&&S(n,e)}catch(e){console.log(e.message)}})}();
//# sourceMappingURL=shopping-list.0c3bd36c.js.map