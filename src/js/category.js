import axios from 'axios';
import { handlerSeeMoreBtn } from './books-from-category.js'; 
import { renderTopBooks } from './top-books.js';
import { elements } from './refs.js';


const URL = 'https://books-backend.p.goit.global/books/category-list';

elements.categoryList.addEventListener('click', onclickCategory);
elements.categoryList.addEventListener('mouseover', mouseClickAccentOn);
elements.categoryList.addEventListener('mouseout', mouseClickAccentOff);

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
    elements.categoryList.insertAdjacentHTML(
      'beforeend',
      renderCategoryList(data)
    )
  )
  .catch(error => console.log(error));


function onclickCategory(event) {
  event.preventDefault();


  if (event.target.nodeName !== 'SPAN') {
      return
  }

  const category = event.target.innerText;
  
  if (category === "ALL CATEGORIES" || category === "All categories") {
    removeUpperCase();
    makeUpperCase(event.target);

    renderTopBooks();
  } else {
    removeUpperCase();
    makeUpperCase(event.target);

    handlerSeeMoreBtn(event.target.textContent)
  }
}


function makeUpperCase(data) {
    data.classList.add('upper-case');
};

function removeUpperCase() {
    const toRemove = document.querySelectorAll('.category-span');
    toRemove.forEach(el => el.classList.remove('upper-case'))
};

function mouseClickAccentOn(event) {

  if (event.target.nodeName !== 'SPAN') {
        return;
    }
    const accent = event.target;
    accent.classList.add('active');
};

function mouseClickAccentOff(event) {
    const accent = event.target;
    accent.classList.remove('active');
};


