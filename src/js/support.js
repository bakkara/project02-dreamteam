import { blocks } from './refs.js'
import { murkupFoundation } from './markup.js'


const blocksEl = document.querySelector('.blocks')
const btnDownUp = document.querySelector('.button-scroll-down')

blocksEl.innerHTML=''
blocksEl.insertAdjacentHTML('beforeend', murkupFoundation(blocks))
btnDownUp.addEventListener('click', scrollDownUp)


function scrollDownUp() { 
  let scrollBottom =blocksEl.scrollHeight - blocksEl.scrollTop - blocksEl.clientHeight;
    if (scrollBottom > 1)  {
       scrollDown()
    } else {
    scrollUp()
  }
}

function scrollDown() { 
    const { height: cardHeight } = document
                    .querySelector(".blocks")
                    .firstElementChild.getBoundingClientRect();
    const element = document.getElementsByClassName("block")[0];
    const margin = window.getComputedStyle(element).marginBottom;
 
    blocksEl.scrollBy({
    top: cardHeight + Number.parseInt(margin),
    behavior: "smooth",
    })
}

function scrollUp() { 
      blocksEl.scrollBy({
      top: -blocksEl.scrollHeight,
      behavior: "smooth",
      })
}

 



