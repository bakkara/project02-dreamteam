import { title } from 'process';
import { getOneCategoriesBooksFromApi } from './fetch_API_categories.js';
import { Report } from 'notiflix/build/notiflix-report-aio';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
const booksSection = document.querySelector('.books-list');
// const button = document.querySelector('.see-more-btn');
// button.addEventListener('click', handlerSeeMoreBtn);
// console.dir(button);
// console.log(button.dataset.category);

let category;

export function handlerSeeMoreBtn(categories) { 
  // categories = evt.currentTarget.dataset.category;
  category = categories;
  getOneCategoriesBooksFromApi(categories).then(resp => {
    console.log('resp', resp);
          // Loading.remove();
      createGalleryCategoriesBooksMarkup(resp);
      cardsListners();
    
    // blueWord(categories);
  }).catch(error => {
    console.log(error);
    Report.failure(
      'Oops!',
      'Something went wrong! Try reloading the page!',
      'Okay',
    );
  })
}


function createGalleryCategoriesBooksMarkup(data) { 
  const categoryHeader = `<h2 class="books-section-title category-books-title"> </h2>`;
     
   const cartBook = data.map(({_id, book_image, title, author }) => 
// //    `<div class="photo-card">
// //       <img src="${book_image}" alt="${title}" loading="lazy" />
// //       <div class="info">
// //         <p class="title-book">${title}</p>
// //         <p class="author-name">${author}</p>      
// //       </div>
// // </div>`
     `<div class="book-card" data-id="${_id}">
       <div class = "book-img">
         <img src="${book_image}" alt="${title}" class="book-card-img" width="300" height="300"  data-modal-open="true">
           <div class="overlay">
             <p class="overlay-text">quick view</p>
          </div>       
         </div>
         <h4 class="book-card-title">${title}</h4>
        <p class="book-card-author">${author}</p>
       </div>`
  ).join('');
  let booksCategoryContainer = `<div class="books-container books-container-category"></div>`;
  booksSection.innerHTML = '';
  booksSection.insertAdjacentHTML('beforeend', booksCategoryContainer);
  booksSection.insertAdjacentHTML('afterbegin', categoryHeader);
  const booksCategContainer = document.querySelector('.books-container');
   booksCategContainer.insertAdjacentHTML('beforeend', cartBook);
  
  const categoryBooksHeader = document.querySelector('.books-section-title');
  const categoriesWordsArr = category.split(' ');
  const lastCategoryWord = categoriesWordsArr[categoriesWordsArr.length - 1];
  const allWordsExceptLast = categoriesWordsArr.slice(0, -1).join(' ');
  categoryBooksHeader.textContent = allWordsExceptLast;
  console.log(lastCategoryWord);
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
    console.log(bookId);
 }
