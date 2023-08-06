import axios from 'axios';
// import 'overlayscrollbars/overlayscrollbars.css';
// import { OverlayScrollbars } from 'overlayscrollbars';
import { handlerSeeMoreBtn } from './books-from-category.js'; 
// import { renderTopBooks } from './top-books.js'; 

const URL = 'https://books-backend.p.goit.global/books/category-list';

const categoryList = document.querySelector('.category-list');

categoryList.addEventListener('click', onclickCategory);
categoryList.addEventListener('mouseover', MouseClickAccentOn);
categoryList.addEventListener('mouseout', MouseClickAccentOff);

const getCategoryList = async () => {
  const response = await axios(URL);
  return response.data;
};

function renderCategoryList(data) {
  return data
    .map(
      ({ list_name }) =>
        `<li class="category-li">
            <a class="category" href="#">
                <span class="category-span">${list_name}</span>
            </a>
        </li>`
    )
    .join('');
}

getCategoryList()
  .then(data =>
    categoryList.insertAdjacentHTML(
      'beforeend',
      renderCategoryList(data)
    )
  )
  .catch(error => console.log(error));

// const osInstance = OverlayScrollbars(document.querySelector('#myElement'), {});

// OverlayScrollbars({ 
//     target: document.querySelector('#myElement') 
// }, {
//     showNativeOverlaidScrollbars: true
// });

function onclickCategory(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'SPAN') {
      return
    }
    if (event.target.textContent === 'All categories') {
      removeUpperCase();
      makeUpperCase(event.target);

      // renderTopBooks();

    } else {        
      removeUpperCase();
      makeUpperCase(event.target);
      
      handlerSeeMoreBtn();
    }
}

function makeUpperCase(data) {
    data.classList.add('upper-case');
};

function removeUpperCase() {
    const toRemove = document.querySelectorAll('.category-span');
    toRemove.forEach(el => el.classList.remove('upper-case'))
};

function MouseClickAccentOn(event) {
    if (event.target.nodeName !== 'SPAN') {
        return;
    }
    const Accent = event.target;
    Accent.classList.add('active');
};

function MouseClickAccentOff(event) {
    const Accent = event.target;
    Accent.classList.remove('active');
};


