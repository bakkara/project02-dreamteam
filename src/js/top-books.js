import { fetchTopBooks } from './api.js';
import { elements } from './refs.js';
import { handlerSeeMoreBtn } from './books-from-category.js'; 
import { Report } from 'notiflix/build/notiflix-report-aio';
import { modal } from './modal-window.js';
import { createCartBookMarcup } from './markup.js';

const loader = document.querySelector('.loader');

let countTopCategories = 4;
let startCount = 0;

const bookGuard = document.querySelector('.books-guard')

const options = {
    root: null,
    rootMargin: "600px",
    threshold: 0,
};

const observer = new IntersectionObserver(handlerPagination, options);

function displayCategories(data) {
  const categoriesHtml = data.slice(startCount,countTopCategories).map(createTopBooks).join('');
  elements.booksInfo.insertAdjacentHTML("beforeend",categoriesHtml) ;
  const guard = observer.observe(bookGuard);
  return ""
}

function createTopBooks(data) {
    const { list_name, books } = data;
    const booksHtml = createCartBookMarcup(books);
  
  return `
    <div class="top-category-item">
      <h2 class="name-top-category">${list_name}</h2>
      <div class="books-container top-books-container">${booksHtml}</div>
      <div class="btn-container-top-books"><button class="see-more-btn" data-category="${list_name}">see more</button></div>
    </div>`;
}


renderTopBooks();


function addEventListenersToButtons() {
  const seeMoreButtons = document.querySelectorAll('.see-more-btn');
  seeMoreButtons.forEach(button => {
    const category = button.dataset.category;
    button.addEventListener('click', () => handlerSeeMoreBtn(category));
  });
}

export async function renderTopBooks() {
  if (loader) {
    loader.style.display = 'block';
  }
  elements.booksInfo.innerHTML = "";
  elements.booksInfo.innerHTML =` <h2 class="books-section-title">Best Sellers <span class="last-word">Books</span> </h2>`;
  countTopCategories = 4;
  startCount = 0;
  fetchTopBooks()
    .then(data => {
        if (loader) {
          loader.style.display = 'none';
        }
        const markup = displayCategories(data);
        elements.booksInfo.insertAdjacentHTML("beforeend", markup);
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
            // Loading.remove()
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
  modal(bookId);
}

function handlerPagination(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (loader) {
        loader.style.display = 'block';
      }
        
        fetchTopBooks()
        .then(data => {
            countTopCategories += 4;
            startCount += 4;
            const markup = displayCategories(data);
            elements.booksInfo.insertAdjacentHTML("beforeend", markup);
            if (loader) {
              loader.style.display = 'none';
            }
            addEventListenersToBooks();
            addEventListenersToButtons();
            if (data.length === 0) {
              Report.failure(
                'Oops!',
                'Sorry, but no books on all categories were found. Please choose another category.',
                'Okay',
              );
              
            }
        
              
            if (data.length <= countTopCategories){
              observer.unobserve(bookGuard)
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
        .finally(() => {
          loader.style.display = 'none';
        });
    }
    })
}

export {observer, bookGuard}