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

export { createModalMarkup };
