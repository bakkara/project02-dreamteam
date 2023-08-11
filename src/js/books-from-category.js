import { getOneCategoriesBooksFromApi } from './api.js';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { modal } from './modal-window.js';
import { createCartBookMarcup } from './markup.js';
import { observer, bookGuard } from './top-books.js';
const booksSection = document.querySelector('.books-list');

let category;

export function handlerSeeMoreBtn(categories) {   
  booksSection.innerHTML="";
  observer.unobserve(bookGuard);
  category = categories;
  getOneCategoriesBooksFromApi(categories).then(resp => {    
          
      createGalleryCategoriesBooksMarkup(resp);
      cardsListners();
        
  }).catch(error => {
    
    Report.failure(
      'Oops!',
      'Something went wrong! Try reloading the page!',
      'Okay',
    );
  })
}


function createGalleryCategoriesBooksMarkup(data) { 
  const categoryHeader = `<h2 class="books-section-title category-books-title"> </h2>`;     
 
  let booksCategoryContainer = `<div class="books-container books-container-category"></div>`;
  booksSection.innerHTML = '';
  booksSection.insertAdjacentHTML('beforeend', booksCategoryContainer);
  booksSection.insertAdjacentHTML('afterbegin', categoryHeader);
  const booksCategContainer = document.querySelector('.books-container');
   booksCategContainer.insertAdjacentHTML('beforeend', createCartBookMarcup(data));
  
  const categoryBooksHeader = document.querySelector('.books-section-title');
  const categoriesWordsArr = category.split(' ');
  const lastCategoryWord = categoriesWordsArr[categoriesWordsArr.length - 1];
  const allWordsExceptLast = categoriesWordsArr.slice(0, -1).join(' ');
  categoryBooksHeader.textContent = allWordsExceptLast;  
   const titleCategory = document.querySelector('.category-books-title');
  titleCategory.insertAdjacentHTML('beforeend', ` <span class="last-word">${lastCategoryWord}</span>`);
 
};

function cardsListners() {
  const bookCards = document.querySelectorAll('.book-card');
  bookCards.forEach(book => {
    const bookId = book.dataset.id;
    book.addEventListener('click', () => onOpenBook(bookId));
    });
}

function onOpenBook(bookId) {  
  modal(bookId);
 }
