import { blocks } from './refs.js'


const blocksEl = document.querySelector('.blocks')
const btnDownUp = document.querySelector('.button-scroll-down')


blocksEl.insertAdjacentHTML('beforeend', murkupFoundation(blocks))
btnDownUp.addEventListener('click', scrollDownUp)


function murkupFoundation(arr) {
  blocksEl.innerHTML=''
    return arr.map(({ title, url, img , id, imgr}) => `
    <li class="block">
   <div>
    <a href="${url}" class='gotofoundation' target="_blank">
        <p>0${id}</p>
        <img  class='image' src='${img}' srcset='${imgr}' alt="${title}">
    </a>
   </div>
  </li>`).join('')
}
 

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
      blocksEl.scrollBy({
      top: cardHeight * 1.5,
      behavior: "smooth",
      })
}

function scrollUp() { 
 
      blocksEl.scrollBy({
      top: -blocksEl.scrollHeight,
      behavior: "smooth",
      })
}

 



