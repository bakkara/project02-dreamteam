import { getOneCategoriesBooksFromApi } from './fetch_API_categories.js';
const booksSection = document.querySelector('.container');
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
    createGalleryCategoriesBooksMarkup(resp);
    cardsListners();

    // blueWord(categories);
}).catch(error => console.log(error))
}


function createGalleryCategoriesBooksMarkup(data) { 
  const categoryHeader = `<h2 class="books-section-title category-books-title"> <span class="last-word"></span></h2>`;
     
   const cartBook = data.map(({_id, book_image, title, author }) => 
// //    `<div class="photo-card">
// //       <img src="${book_image}" alt="${title}" loading="lazy" />
// //       <div class="info">
// //         <p class="title-book">${title}</p>
// //         <p class="author-name">${author}</p>      
// //       </div>
// // </div>`
   `<div class="book-card" data-id="${_id}">
         <img src="${book_image}" alt="${title}" class="book-card-img" width="300" height="300"  data-modal-open="true">
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
  // blueWord(categories);
    const categoryBooksHeader = document.querySelector('.books-section-title');
  const lastWordSpan = categoryBooksHeader.querySelector('.last-word');
  const categoriesWordsArr = category.split(' ');
  const lastCategoryWord = categoriesWordsArr[categoriesWordsArr.length - 1];
  const allWordsExceptLast = categoriesWordsArr.slice(0, -1).join(' ');
  categoryBooksHeader.textContent = allWordsExceptLast;
  console.log(lastCategoryWord);
  lastWordSpan.textContent = lastCategoryWord;
  lastWordSpan.classList.add('blue-word');
  console.log(lastWordSpan);
};

// function blueWord(categories) {

// }

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
