!function(){let e=document.querySelector("#bookList"),t=document.querySelector("#message");async function o(e){try{let t=await fetch("https://books-backend.p.goit.global/books/"+e);if(!t.ok)throw Error("Error");let o=await t.json();return o}catch(e){return console.log(e.message),null}}function s(){let e=JSON.parse(localStorage.getItem("targetBooks"))||[];return e}let l=s();e.innerHTML="",0===l.length?t.style.display="block":(t.style.display="none",l.forEach(async l=>{try{let i=await o(l);(function(o){let l=document.createElement("div");l.innerHTML=`
<div class="book-card">
      <img class="book-image" src="${o.book_image}" alt="${o.list_name}">
      <div class="book-title">${o.title}</div>
      <div class="book-category">${o.list_name}</div>
      <div class="book-description">${o.description}</div>
      <div class="book-author">${o.author}</div>
      <div class="book-links">
        ${o.links?o.links.map(e=>`<div class="book-link"><a href="${e}">Buy on ${e}</a></div>`).join(""):""}
      </div>
      <button class="delete-button"><svg width="16" height="16" class="shopping-svg">
                    <use href="./img/symbol-defs.svg#icon-dump"></use></button>
    </div>
  `,e.appendChild(l);let i=l.querySelector(".delete-button");i.addEventListener("click",()=>{(function(e){let t=s().filter(t=>t!==e);localStorage.setItem("targetBooks",JSON.stringify(t))})(o._id),l.remove(),0===s().length&&(t.style.display="block")})})(i)}catch(e){console.log(e.message)}}))}();
//# sourceMappingURL=shopping-list.50f0987c.js.map
