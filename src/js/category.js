import axios from 'axios';

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
        `<li class="categories-list-item">${list_name}</li>`
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


function onCategoryClick(event) {
    console.log(event)
    if (event.target.textContent === 'All categories') {
       event.target.classList.remove('active')
    } else {        
        event.target.classList.add('active')
    }
}

