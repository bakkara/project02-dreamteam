import {  blocks } from './refs'

const blocksEl = document.querySelector('.blocks')
const buttonDown = document.querySelector('.button-scroll-down')
const buttonUp = document.querySelector('.button-scroll-up')

function murkupFoundation(arr) {
   return arr.map(({ title, url, img , id}) => `
    <li class="block">
   <div>
    <a href="${url}" class='gotofoundation'>
        <p>0${id}</p>
        <img  class='image' src='${img}' alt="${title}" target="_blank">
    </a>
   </div>
  </li>`).join('')
}

blocksEl.insertAdjacentHTML('beforeend', murkupFoundation(blocks))
buttonDown.addEventListener('click', scrollDown)
buttonUp.addEventListener('click', scrollUp)

function scrollDown(evt) { 
  const { height: cardHeight } = document
                    .querySelector(".blocks")
                    .firstElementChild.getBoundingClientRect();
              blocksEl.scrollBy({
                    top: cardHeight ,
                    behavior: "smooth",
                  });
}

function scrollUp(evt) { 
  const { height: cardHeight } = document
                    .querySelector(".blocks")
                    .firstElementChild.getBoundingClientRect();
              blocksEl.scrollBy({
                    top: -cardHeight ,
                    behavior: "smooth",
                  });
}




