import './js/support.js';

import './js/fire-base.js';

import './js/burger.js';

import amazon from './images/amazon1.png';
import applebook from './images/applebook1.png';
import barnesnoble from './images/barnesnoble.png';

import sprite from './images/symbol-defs.svg';

const bookList = document.querySelector('#bookList');
const message = document.querySelector('#message');

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

function updateMainTitleMargin(isBooksAdded) {
  const mainTitle = document.querySelector('.shopping-list-title');
  if (isBooksAdded) {
    mainTitle.style.marginBottom = '40px';
  }
}

function displayBooksInShoppingList(bookIds) {
  bookList.innerHTML = '';
  if (bookIds.length === 0) {
    message.style.display = 'block';
    updateMainTitleMargin(false);
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
    updateMainTitleMargin(true);
  }
}

function createBookCard(book) {
  const bookCard = document.createElement('div');

  bookCard.innerHTML = `
<div class="shopping-card">
      <img class="shopping-image" src="${book.book_image}" alt="${
    book.list_name
  }" id="${book._id}" width ="100px">
  <div class = "shopping-descr">
      <h2 class="book-card-title">${book.title}</h2>
      <h3 class="shopping-category">${book.list_name}</h3>
      <div class="shopping-description-container">  <p class="shopping-description">${
        book.description
      }</p> </div>
      <div class="link-book-shop">
      <span class="shopping-author">${book.author}</span>
          <ul class="list-shops">
                <li class="modal-shops-item">
                    <a class="modal-link" href="${
                      book.buy_links.find(i => i.name === 'Amazon').url
                    }" target="_blank" name="Amazon"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop amazon-img" src="${amazon}" alt="amazon store">
                    </a>
                </li>
                <li class="modal-shops-item">
                    <a class="modal-link" href="${
                      book.buy_links.find(i => i.name === 'Apple Books').url
                    }" target="_blank" name="Apple Books"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop shopping-img-store" src="${applebook}" alt="apple store">
                    </a>
                </li>
                <li class="modal-shops-item">
                    <a class="modal-link" href="${
                      book.buy_links.find(i => i.name === 'Barnes and Noble')
                        .url
                    }" target="_blank" name="Barnes and Noble"
                        rel="noreferrer noopener">
                        <img class="modal-img-shop shopping-img-store" src="${barnesnoble}" alt="barnes and noble store">
                    </a>
                </li>
            </ul>
            </div>
            </div>
      <button class="delete-button"><svg width="16" height="16" class="shopping-svg">
                    <use href="${sprite}#icon-trash-03-1-1"></use></button>
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
