import amazon from '../images/amazon1.png';
import applebook from '../images/applebook1.png';
import barnesnoble from '../images/barnesnoble.png';

function createModalMarkup(book) {
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
                <li class="modal-shops-item">
                    <a class="modal-link" href="${
                      book.buy_links.find(i => i.name === 'Amazon').url
                    }" target="_blank" name="Amazon"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop" src="${amazon}" alt="amazon store">
                    </a>
                </li>
                <li class="modal-shops-item">
                    <a class="modal-link" href="${
                      book.buy_links.find(i => i.name === 'Apple Books').url
                    }" target="_blank" name="Apple Books"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop" src="${applebook}" alt="apple store">
                    </a>
                </li>
                <li class="modal-shops-item">
                    <a class="modal-link" href="${
                      book.buy_links.find(i => i.name === 'Barnes and Noble')
                        .url
                    }" target="_blank" name="Barnes and Noble"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop" src="${barnesnoble}" alt="barnes and noble store">
                    </a>
                </li>
            </ul>
        </div>`;
}

function createCartBookMarcup(data) { 
const cartBook = data.map(({_id, book_image, title, author }) => 

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
  ).join('');
  return cartBook;
}


export { createModalMarkup };
export { createCartBookMarcup };

