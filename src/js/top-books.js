import { fetchTopBooks } from './api.js';
import { elements } from './refs.js';
import { handlerSeeMoreBtn } from './books-from-category.js'; 
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { modal } from './modal-window.js';
import { createCartBookMarcup } from './markup.js';

function displayCategories(data) {
  elements.BooksInfo.innerHTML = "";
  const categoriesHtml = data.map(createTopBooks).join('');
  elements.BooksInfo.innerHTML = ` <h2 class="books-section-title">Best Sellers <span class="last-word">Books</span> </h2>`
  elements.BooksInfo.insertAdjacentHTML("beforeend",categoriesHtml) ;
  return ""
}

function createTopBooks(data) {
    const { list_name, books } = data;
    const screenWidth = window.innerWidth;
    let numBooksToShow = 1;
    if (screenWidth >= 768 && screenWidth <= 1440) {
        numBooksToShow = 3
    } else if(screenWidth >= 1440){
        numBooksToShow = 5
  };

  const booksSliise = books.slice(0, numBooksToShow);
  const booksHtml = createCartBookMarcup(booksSliise);
  
  return `
    <div class="top-category-item">
      <h2 class="name-top-category">${list_name}</h2>
      <div class="books-container">${booksHtml}</div>
      <div class="btn-container-top-books"><button class="see-more-btn" data-category="${list_name}">see more</button></div>
    </div>`;
}

window.addEventListener('resize', renderTopBooks);
renderTopBooks();

function addEventListenersToButtons() {
  const seeMoreButtons = document.querySelectorAll('.see-more-btn');
  seeMoreButtons.forEach(button => {
    const category = button.dataset.category;
    button.addEventListener('click', () => handlerSeeMoreBtn(category));
  });
}

function renderTopBooks() {
  fetchTopBooks()
    .then(data => {
        Loading.remove();
        // console.log(data);
        const markup = displayCategories(data);
        elements.BooksInfo.insertAdjacentHTML("beforeend", markup);
        addEventListenersToBooks();
        addEventListenersToButtons();
    })
    .catch((error) => {
        Report.failure(
            'Oops!',
            'Something went wrong! Try reloading the page!',
            'Okay',
        );
        console.log(error);
    }
    )
        .finally(
            Loading.remove()
);
};


function addEventListenersToBooks() {
  const bookCards = document.querySelectorAll('.book-card');
  bookCards.forEach(book => {
    const bookId = book.dataset.id;
    book.addEventListener('click', () => onOpenBook(bookId));
  });
}

function onOpenBook(bookId) {
  console.log(bookId);
  modal(bookId);
}


export {renderTopBooks}