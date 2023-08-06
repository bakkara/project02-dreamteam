import {  blocks } from './refs'
console.log(blocks);
console.log('hello');


const blocksEl = document.querySelector('.blocks')
console.dir(blocksEl);

    
function murkupFoundation(arr) { 
   return arr.map(({ title, url, img , id}) => `
    <li class="block">
   <div>
    <a href="${url}" class='gotofoundation'>
        <p>${id}</p>
        <img  class='image' src='${img}' alt="${title}" style="height:32px;width:150px;" >
    </a>
   </div>
  </li>`).join('')
}

blocksEl.insertAdjacentHTML('beforeend', murkupFoundation(blocks)) 