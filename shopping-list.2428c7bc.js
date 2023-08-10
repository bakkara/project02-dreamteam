!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",function(t,n){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return o},function(e){return o=e});var r,o,a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a.register("aNJCr",function(t,n){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,o={};r=function(e){var t=o[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[e]=t),t}}),a("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.2428c7bc.js","kxKJ3":"symbol-defs.e6efdff2.svg","ei4R3":"amazon1.875cac08.png","c8Zp5":"applebook1.09bf885c.png","jeqkq":"barnesnoble.84820a41.png","2kw6b":"amazon@1x.100eb040.png","5iIId":"amazon@2x.fdf8ae2a.png","1WDfw":"applebook@1x.58f7dd67.png","dD20i":"applebook@2x.1c1863b9.png","E6g71":"barnesnoble@1x.e62c1f9d.png","96m6w":"barnesnoble@2x.84820a41.png","iToWk":"index.be7fee22.js","itRIy":"index.061bab24.js"}')),a("xpKCW"),a("i8Q71"),a("k5quo"),((e,t)=>{let n=e.findIndex(e=>e.current),r=`
        <ul class="pagination-list">
            <li class="previous">
                ${e[0].current?`
                    <span>‹</span>
                `:`
                    <a href="${e[n-1].url}">‹</a>
                `}
            </li>
            ${e.map((e,t)=>`
                <li${e.current?' class="current"':""}>
                    ${e.current?`
                        <span>${t+1}</span>
                    `:`
                        <a href="${e.url}">${t+1}</a>
                    `}
                </li> 
            `).join("")}
            <li class="next">
                ${e[e.length-1].current?`
                    <span>›</span>
                `:`
                    <a href="${e[n+1].url}">›</a>
                `}
            </li>
        </ul>
    `;document.querySelector(t).innerHTML=r})([{url:"/page1"},{url:"/page2"},{url:"/page3",current:!0},{url:"/page4"},{url:"/page5"}],".pagination");var l={};l=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("ei4R3");var i={};i=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("c8Zp5");var s={};s=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("jeqkq");var c={};c=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("2kw6b");var u={};u=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("5iIId");var p={};p=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("1WDfw");var d={};d=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("dD20i");var g={};g=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("E6g71");var f={};f=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("96m6w");var h={};h=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("kxKJ3");let m=document.querySelector("#bookList"),b=document.querySelector("#message");async function v(e){try{let t=await fetch("https://books-backend.p.goit.global/books/"+e);if(!t.ok)throw Error("Error");let n=await t.json();return console.log(n),n}catch(e){return console.log(e.message),null}}function H(){let e=JSON.parse(localStorage.getItem("targetBooks"))||[];return console.log(localStorage.getItem("targetBooks")),e}function E(e){let t=document.querySelector(".shopping-list-title");e&&(t.style.marginBottom="40px")}function S(e){let n=[{name:"Amazon",img:[t(l),t(c),t(u)]},{name:"Apple Books",img:[t(i),t(p),t(d)]},{name:"Barnes and Noble",img:[t(s),t(g),t(f)]}];n.forEach(t=>{t.link=e.buy_links.find(e=>e.name==t.name).url});let r=n.map(e=>`<li class="modal-shops-item">
            <a class="modal-link" href="${e.link}"
               target="_blank" name="${e.name}"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop" src="${e.img[0]}" alt="${e.name}" srcset="${e.img[1]} 1x, ${e.img[2]} 2x">
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
  `,m.appendChild(o);let a=o.querySelector(".delete-button");a.addEventListener("click",()=>{(function(e){let t=H().filter(t=>t!==e);localStorage.setItem("targetBooks",JSON.stringify(t))})(e._id),o.remove(),0===H().length&&(b.style.display="block")})}let _=H();m.innerHTML="",0===_.length?(b.style.display="block",E(!1)):(b.style.display="none",_.forEach(async e=>{try{let t=await v(e);S(t)}catch(e){console.log(e.message)}}),E(!0));let k=document.querySelectorAll(".book-card");k.forEach(async e=>{let t=e.querySelector(".shopping-image").id;try{let n=await v(t);n&&S(n,e)}catch(e){console.log(e.message)}})}();
//# sourceMappingURL=shopping-list.2428c7bc.js.map
