import './js/support.js';

import img1 from './images/amazon.png';
import img2 from './images/applebook.png';
import img3 from './images/barnesnoble.png';

const bookList = document.querySelector('#bookList');
const message = document.querySelector('#message');
const bookStore = {
  buy_links: [
    {
      name: 'Amazon',
      url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
    },
    {
      name: 'Apple Books',
      url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
    },
    {
      name: 'Barnes and Noble',
      url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
    },
  ],
};

async function getBook(bookId) {
  const BASE_URL = 'https://books-backend.p.goit.global/books/';
  const searchUrl = BASE_URL + bookId;
  try {
    const response = await fetch(searchUrl);
    if (!response.ok) {
      throw new Error('Error');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
    return null;
  }
}
function loadBooksFromLocalStorage() {
  const booksFromLocalStorage =
    JSON.parse(localStorage.getItem('targetBooks')) || [];
  return booksFromLocalStorage;
}

function displayBooksInShoppingList(bookIds) {
  bookList.innerHTML = '';
  if (bookIds.length === 0) {
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
    bookIds.forEach(async bookId => {
      try {
        const bookData = await getBook(bookId);
        createBookCard(bookData);
      } catch (err) {
        console.log(err.message);
      }
    });
  }
}
function findStoreLink(book) {
  const modalStoresEl = bookList.querySelectorAll('.modal-link');
  modalStoresEl.forEach(storeEl => {
    const storeName = storeEl.getAttribute('name');
    const storeLink = bookStore.buy_links.find(
      obj => obj.name === storeName
    )?.url;
    storeEl.href = storeLink;
  });
}

function createBookCard(book) {
  const bookCard = document.createElement('div');

  bookCard.innerHTML = `
<div class="shopping-card">
      <img class="shopping-image" src="${book.book_image}" alt="${book.list_name}" id="${book._id}">
      <h2 class="shop-title">${book.title}</h2>
      <h3 class="shopping-category">${book.list_name}</h3>
      <p class="shopping-description">${book.description}</p>
      <span class="shopping-author">${book.author}</span>
          <ul class="modal-shops">
                        <li class="modal-shops-item">
                            <a class="modal-link" href="#" target="_blank" name="Amazon" rel="noreferrer noopener">
                                <img class="modal-img-shop" src="${img1}" alt="amazon store">
                            </a>
                        </li>
                        <li class="modal-shops-item">
                            <a class="modal-link" href="#" target="_blank" name="Apple Books" rel="noreferrer noopener">
                                <img class="modal-img-shop" src="${img2}" alt="apple store">
                            </a>
                        </li>
                        <li class="modal-shops-item">
                            <a class="modal-link" href="#" target="_blank" name="Barnes and Noble"
                                rel="noreferrer noopener">
                                <img class="modal-img-shop" src="${img3}"
                                    alt="barnes and noble store">
                            </a>
                        </li>
                    </ul>
      <button class="delete-button"><svg width="16" height="16" class="shopping-svg">
                    <use href="./images/symbol-defs.svg#icon-trash-03-1-1"></use></button>
    </div>
  `;

  bookList.appendChild(bookCard);

  const deleteButton = bookCard.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    removeBookFromLocalStorage(book._id);
    bookCard.remove();

    if (loadBooksFromLocalStorage().length === 0) {
      message.style.display = 'block';
    }
  });
  findStoreLink(book);
}

function removeBookFromLocalStorage(bookIdToRemove) {
  const updatedBooks = loadBooksFromLocalStorage().filter(
    bookId => bookId !== bookIdToRemove
  );
  localStorage.setItem('targetBooks', JSON.stringify(updatedBooks));
}

const bookIdsFromLocalStorage = loadBooksFromLocalStorage();
displayBooksInShoppingList(bookIdsFromLocalStorage);

const bookCards = document.querySelectorAll('.book-card');
bookCards.forEach(bookCard => {
  const bookId = bookCard.querySelector('.book-image').id;
  getBook(bookId).then(bookData => findStoreLink(bookData));
});
