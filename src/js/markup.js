import amazon from '../images/amazon1.png';
import applebook from '../images/applebook1.png';
import barnesnoble from '../images/barnesnoble.png';
import amazon1x from '../images/amazon@1x.png';
import amazon2x from '../images/amazon@2x.png';
import applebook1x from '../images/applebook@1x.png';
import applebook2x from '../images/applebook@2x.png';
import barnesnoble1x from '../images/barnesnoble@1x.png';
import barnesnoble2x from '../images/barnesnoble@2x.png';


function createModalMarkup(book) {
  /**створюю об'єкт з даними про назви магазинів і посиланнь на зображення*/
  const storesImgs = [
    {
      name: 'Amazon',
      img: [amazon, amazon1x, amazon2x],
    },
    {
      name: 'Apple Books',
      img: [applebook, applebook1x, applebook2x],
    },
    {
      name: 'Barnes and Noble',
      img: [barnesnoble, barnesnoble1x, barnesnoble2x],
    },
  ];

  /**шукаю посилання на сторінку магазинів і записую їх в попередній об'єкт */
  storesImgs.forEach(i => {
    i.link = book.buy_links.find(item => item.name == i.name).url;
  });

  /**формую розмітку блоку "Магазини" */
  const storesListMarkup = storesImgs
    .map(
      i => `<li class="modal-shops-item">
            <a class="modal-link" href="${i.link}"
               target="_blank" name="${i.name}"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop" src="${i.img[0]}" alt="${i.name}" srcset="${i.img[1]} 1x, ${i.img[2]} 2x">
                    </a>
                </li>`
    )
    .join('');

  /**формую картку модалки */
  return `<div class="modal-img-wrap">
              <img src="${book.book_image}" 
              alt="${book.list_name}" 
              id="${book._id}" class="modal-img">
          </div>
          <div>
            <h2 class="modal-title">${book.title}</h2>
            <h3 class="modal-autor">${book.author}</h3>
            <p class="modal-descr">${book.description || book.list_name}</p>
            <ul class="modal-shops">
                ${storesListMarkup}
            </ul>
          </div>`;
}

function createCartBookMarcup(data) {
  const cartBook = data
    .map(
      ({ _id, book_image, title, author }) =>
        `<div class="book-card" tabindex="0" data-id="${_id}">
       <div class = "book-img">
         <img src="${book_image}" alt="${title}" class="book-card-img" width="300" height="300"  data-modal-open="true">
           <div class="overlay">
             <p class="overlay-text">quick view</p>
          </div>       
         </div>
         <h4 class="book-card-title">${title}</h4>
        <p class="book-card-author">${author}</p>
       </div>`
    )
    .join('');
  return cartBook;
}

function murkupFoundation(arr) {
  // blocksEl.innerHTML=''
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
 
export { createModalMarkup, createCartBookMarcup};
export { murkupFoundation }

