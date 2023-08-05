!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var i=t[e];delete t[e];var l={id:e,exports:{}};return o[e]=l,i.call(l.exports,l,l.exports),l.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,o){t[e]=o},e.parcelRequired7c6=i);var l=i("dIxxU");let s=document.querySelector("#bookList"),n=document.querySelector("#message");async function a(e){try{let o=await (0,l.default).get(`https://books-backend.p.goit.global/books/bookId/${e}`);return o.data}catch(e){console.error("Error fetching book data:",e)}}!function(){let e=JSON.parse(localStorage.getItem("shoppingListBooks"))||[];0===e.length?n.style.display="block":e.forEach(async e=>{let o=await a(e.id);o&&function(e){let o=document.createElement("div");o.innerHTML=`
      <div class="book-card">
        <img class="book-image" src="${e.image}" alt="Book Image">
        <div class="book-title">${e.title}</div>
        <div class="book-category">${e.category}</div>
        <div class="book-description">${e.description}</div>
        <div class="book-author">Author: ${e.author}</div>
        <div class="book-links">
          ${e.links.map(e=>`<div class="book-link"><a href="${e}">Buy on ${e}</a></div>`).join("")}
        </div>
        <button class="delete-button"><svg width="16" height="16" class="shopping-svg">
        <use href="./images/symboldefs.svg#btn-shopping-list"></use></button>
      </div>
    `,o.querySelector(".delete-button").addEventListener("click",()=>{(function(e){let o=booksFromLocalStorage.filter(o=>o.title!==e.title);localStorage.setItem("shoppingListBooks",JSON.stringify(o)),0===o.length&&(n.style.display="block")})(e),o.remove()}),s.appendChild(o)}(o)})}()}();
//# sourceMappingURL=shopping-list.31e7667b.js.map
