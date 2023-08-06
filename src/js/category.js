import axios from 'axios';
// import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';

const URL = 'https://books-backend.p.goit.global/books/category-list';
const categoryList = document.querySelector('.category-list');

const getCategoryList = async () => {
  const response = await axios(URL);
  return response.data;
};

function renderCategoryList(data) {
  return data
    .map(
      ({ list_name }) =>
        `
            <li class="category-li">
                <a class="category" href="#">
                    <span class="category-span">${list_name}</span>
                </a>
            </li>
        `
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

OverlayScrollbars({ 
    target: document.querySelector('#myElement') 
}, {
    showNativeOverlaidScrollbars: true
});


categoryList.addEventListener('click', onclickCategory);

function onclickCategory(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'SPAN') {
        return
    }
    if (event.target.textContent === 'All categories') {
        removeUpperCase();
        makeUpperCase(event.target);
    } else {        
        removeUpperCase();
        makeUpperCase(event.target);
    }
}

function makeUpperCase(data) {
    data.classList.add('upper-case');
};

function removeUpperCase() {
    const rem = document.querySelectorAll('.category-span');
    rem.forEach(el => el.classList.remove('upper-case'))
};

function seeMoreFunc(data) {
    removeUpperCase();
    const newDom = document.querySelectorAll('.category-span');
    newDom.forEach(el => {
        if (el.textContent === data) el.classList.add('upper-case')
    });
}


categoryList.addEventListener('mouseover', MouseClickAccentOn);
categoryList.addEventListener('mouseout', MouseClickAccentOff);

function MouseClickAccentOn(event) {
    if (event.target.nodeName !== 'SPAN') {
        return;
    }
    const line = event.target;
    line.classList.add('active');
};

function MouseClickAccentOff(event) {
    const line = event.target;
    line.classList.remove('active');
};
