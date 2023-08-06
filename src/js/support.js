import {  blocks } from './refs'

const blocksEl = document.querySelector('.blocks')
const buttonEl = document.querySelector('.support-button-scroll')
// const ulfoundsEl = document.querySelector('.ulfounds')
// const image = document.querySelector('.image')
console.dir(blocksEl);
let newarr = []




function murkupFoundation(arr) {
   return arr.map(({ title, url, img , id}) => `
    <li class="block">
   <div>
    <a href="${url}" class='gotofoundation'>
        <p>0${id}</p>
        <img  class='image' src='${img}' alt="${title}" height=100% width =100%>
    </a>
   </div>
  </li>`).join('')
}

blocksEl.insertAdjacentHTML('beforeend', murkupFoundation(blocks))
buttonEl.addEventListener('click', onLoad)
blocksEl.scrollTo(0,0)

function onLoad(evt) { 
   smoothScrolling()
}
 

function smoothScrolling() { 
  const { height: cardHeight } = document
                    .querySelector(".blocks")
                    .firstElementChild.getBoundingClientRect();
              blocksEl.scrollBy({
                    top: cardHeight ,
                    behavior: "smooth",
                  });
}




