import { fetchTopBooks } from './api.js';
import { elements } from './refs.js';
import { handlerSeeMoreBtn } from './books-from-category.js'; 
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { modal } from './modal-window.js';
import { createCartBookMarcup } from './markup.js';

Loading.standard('Loading data, please wait...', {
  backgroundColor: 'rgba(0.5,0,0,0.2)',
});

let countTopCategories = 4;
let startCount = 0;

let scrollToTopBtnEl = document.querySelector('.scroll-up-btn');
const bookGuard = document.querySelector('.books-guard')

const options = {
    root: null,
    rootMargin: "600px",
    threshold: 0,
};

const observer = new IntersectionObserver(handlerPagination, options);

function displayCategories(data) {
  // let dataToShow = data.slice(0,)
  // elements.BooksInfo.innerHTML = "";
  const categoriesHtml = data.slice(startCount,countTopCategories).map(createTopBooks).join('');
  // elements.BooksInfo.innerHTML = ` <h2 class="books-section-title">Best Sellers <span class="last-word">Books</span> </h2>`
  elements.BooksInfo.insertAdjacentHTML("beforeend",categoriesHtml) ;
  const guard = observer.observe(bookGuard)
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

export async function renderTopBooks() {

  elements.BooksInfo.innerHTML = "";
  elements.BooksInfo.innerHTML = ` <h2 class="books-section-title">Best Sellers <span class="last-word">Books</span> </h2>`
  
  fetchTopBooks()
    .then(data => {
        
        const markup = displayCategories(data);
        elements.BooksInfo.insertAdjacentHTML("beforeend", markup);
        Loading.remove();
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

function handlerPagination(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      
        countTopCategories += 4;
        startCount += 4;
        Loading.standard('Loading data, please wait...', {
          backgroundColor: 'rgba(0.5,0,0,0.2)',
        });

        fetchTopBooks()
        .then(data => {
            
            const markup = displayCategories(data);
            elements.BooksInfo.insertAdjacentHTML("beforeend", markup);
            Loading.remove();
            addEventListenersToBooks();
            addEventListenersToButtons();
            if (data.lenght <= countTopCategories){
              observer.unobserve(entries.target)
            }
            
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
    })
}