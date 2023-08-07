import {  blocks } from './refs'

const blocksEl = document.querySelector('.blocks')
const buttonDown = document.querySelector('.button-scroll-down')
const buttonUp = document.querySelector('.button-scroll-up')

console.dir(blocksEl);
let newarr = []




function murkupFoundation(arr) {
   return arr.map(({ title, url, img , id}) => `
    <li class="block">
   <div>
    <a href="${url}" class='gotofoundation'>
        <p>0${id}</p>
        <img  class='image' src='${img}' alt="${title}" >
    </a>
   </div>
  </li>`).join('')
}

blocksEl.insertAdjacentHTML('beforeend', murkupFoundation(blocks))
buttonDown.addEventListener('click', scrollDown)
buttonUp.addEventListener('click', scrollUp)
blocksEl.scrollTo(0,0)

function scrollDown(evt) { 
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

function scrollUp() { 
  const { height: cardHeight } = document
                    .querySelector(".blocks")
                    .firstElementChild.getBoundingClientRect();
              blocksEl.scrollBy({
                    top: -cardHeight ,
                    behavior: "smooth",
                  });
}




