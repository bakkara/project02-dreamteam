import { Loading } from 'notiflix/build/notiflix-loading-aio';
import './js/support.js';
import './js/header.js';
import './js/fire-base.js';
import './js/burger.js';
// import './js/pagination.js';
import './js/dark-theme.js';

import amazon from './images/amazon1.png';
import applebook from './images/applebook1.png';
import barnesnoble from './images/barnesnoble.png';
import amazon1x from './images/amazon@1x.png';
import amazon2x from './images/amazon@2x.png';
import applebook1x from './images/applebook@1x.png';
import applebook2x from './images/applebook@2x.png';
import barnesnoble1x from './images/barnesnoble@1x.png';
import barnesnoble2x from './images/barnesnoble@2x.png';

import sprite from './images/symbol-defs.svg';

const bookList = document.querySelector('#bookList');
const message = document.querySelector('#message');

// Отримуємо дані про книгу за її ідентифікатором
async function getBook(bookId) {
  const BASE_URL = 'https://books-backend.p.goit.global/books/';
  const searchUrl = BASE_URL + bookId;
  try {
    const response = await fetch(searchUrl);
    if (!response.ok) {
      throw new Error('Error');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
    return null;
  }
}
// Завантажуємо масив ідентифікаторів книг з локального сховища
function loadBooksFromLocalStorage() {
  const booksFromLocalStorage =
    JSON.parse(localStorage.getItem('targetBooks')) || [];
  console.log(localStorage.getItem('targetBooks'));
  return booksFromLocalStorage;
}
// Оновлюємо відступ заголовку в залежності від того, чи додані книги до списку
function updateMainTitleMargin(isBooksAdded) {
  const mainTitle = document.querySelector('.shopping-list-title');
  if (isBooksAdded) {
    mainTitle.style.marginBottom = '40px';
  }
}

// Відображаємо карточки книг на сторінці
function displayBooksInShoppingList(bookIds) {
  bookList.innerHTML = '';
  Loading.init();
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
  Loading.remove();
}

// Створюємо HTML-структуру карточки книги
function createBookCard(book) {
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

  const bookCard = document.createElement('div');

  bookCard.innerHTML = `
<div class="shopping-card">
      <img class="shopping-image" src="${book.book_image}" alt="${book.list_name}" id="${book._id}" width ="100px">
  <div class = "shopping-descr">
      <h2 class="book-card-title title-shop-list">${book.title}</h2>
      <h3 class="shopping-category title-shop-list">${book.list_name}</h3>
      <div class="shopping-description-container">  <p class="shopping-description">${book.description}</p> </div>
      <div class="link-book-shop">
      <span class="shopping-author">${book.author}</span>
          <ul class="list-shops">
                ${storesListMarkup}
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

// Видаляємо ідентифікатор книги зі списку локального сховища
function removeBookFromLocalStorage(bookIdToRemove) {
  Loading.init();
  const updatedBooks = loadBooksFromLocalStorage().filter(
    bookId => bookId !== bookIdToRemove
  );
  localStorage.setItem('targetBooks', JSON.stringify(updatedBooks));
  Loading.remove();
}

// Завантажуємо ідентифікатори книг з локального сховища та відображає їх карточки
const bookIdsFromLocalStorage = loadBooksFromLocalStorage();
displayBooksInShoppingList(bookIdsFromLocalStorage);

// Отримуємо всі карточки книг на сторінці
const bookCards = document.querySelectorAll('.book-card');
bookCards.forEach(async bookCard => {
  const bookId = bookCard.querySelector('.shopping-image').id;
  try {
    const bookData = await getBook(bookId);
    if (bookData) {
      createBookCard(bookData, bookCard);
    }
  } catch (err) {
    console.log(err.message);
  }
});
