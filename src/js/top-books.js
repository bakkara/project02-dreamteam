import { fetchTopBooks } from './api.js';
import { elements } from './refs.js';
import { handlerSeeMoreBtn } from './books-from-category.js'; 
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { modal } from './modal-window.js';

function displayCategories(data) {
  elements.BooksInfo.innerHTML = "";
  const categoriesHtml = data.map(createTopBooks).join('');
  elements.BooksInfo.innerHTML = ` <h2 class="books-section-title">Best Sellers <span class="last-word">Books</span> </h2>`
  elements.BooksInfo.insertAdjacentHTML("beforeend",categoriesHtml) ;
  return ""
}

function createTopBooks(data) {
    const { list_name, books } = data;
    const screenWidth = window.screen.width;
    let numBooksToShow = 1;
    if (screenWidth >= 768 && screenWidth <= 1440) {
        numBooksToShow = 3
    } else if(screenWidth >= 1440){
        numBooksToShow = 5
    }
    // console.log(list_name);
    // console.log(books);
  
 
  const booksHtml = books.slice(0, numBooksToShow)
    .map((book) => {
      const {_id, title, author, book_image } = book;

      return `
        <div class="book-card" tabindex="0" data-id="${_id}">
         <div class = "book-img">
         <img src="${book_image}" alt="${title}" class="book-card-img" width="300" height="300" data-modal-open="true">
         <div class="overlay">
             <p class="overlay-text">quick view</p>
          </div> 
          </div>
       <h4 class="book-card-title">${title}</h4>
        <p class="book-card-author">${author}</p>
       </div>`;
    })
    .join('');

  return `
    <div class="top-category-item">
      <h2 class="name-top-category">${list_name}</h2>
      <div class="books-container">${booksHtml}</div>
      <div class="btn-container-top-books"><button class="see-more-btn" data-category="${list_name}">see more</button></div>
    </div>`;
}




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
}

renderTopBooks();


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