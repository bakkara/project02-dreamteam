import { fetchTopBooks } from './api.js';
import { elements } from './refs.js';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

function displayCategories(categories) {
  elements.topBooksInfo.innerHTML = "";
  const categoriesHtml = categories.map(createTopBooks).join('');
  elements.topBooksInfo.innerHTML = categoriesHtml;
}

function createTopBooks(data) {
    const { list_name, books } = data;
    const screenWidth = window.screen.width;
    let numBooksToShow = 1;
    if (screenWidth >= 768 && screenWidth <= 1280) {
        numBooksToShow = 3
    } else if(screenWidth >= 1280){
        numBooksToShow = 5
    }
    // console.log(screenWidth);
    // console.log(numBooksToShow);
  const booksHtml = books.slice(0, numBooksToShow)
    .map((book) => {
      const {_id, title, author, book_image } = book;
      return `
        <div class="book-card" data-id="${_id}">
         <img src="${book_image}" alt="" class="book-card-img" width="300" height="300">
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

fetchTopBooks()
    .then(data => {
        Loading.remove();
        // console.log(data);
           const markup = displayCategories(data);
        elements.topBooksInfo.insertAdjacentHTML("beforeend", markup);
      addEventListenersToBooks();
      addEventListenersToButtons();
    })
    .catch((error) => {
        Report.failure(
            'Oops!',
            'Something went wrong! Try reloading the page!',
            'Okay',
        );
        // console.log(error);
    }
    )
        .finally(
            Loading.remove()
);

function addEventListenersToButtons() {
  const seeMoreButtons = document.querySelectorAll('.see-more-btn');
  seeMoreButtons.forEach(button => {
    const category = button.dataset.category;
    button.addEventListener('click', () => onSeeMoreClick(category));
  });
}

function onSeeMoreClick(category) {
 console.log(category);
    
}

function addEventListenersToBooks() {
  const bookCards = document.querySelectorAll('.book-card');
  bookCards.forEach(book => {
    const bookId = book.dataset.id;
    book.addEventListener('click', () => onOpenBook(bookId));
    });
};

function onOpenBook(bookId) { 
    console.log(bookId);
 }
