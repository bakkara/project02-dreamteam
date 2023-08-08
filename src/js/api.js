import axios from 'axios';
const BASE_URL = 'https://books-backend.p.goit.global/books/';
const TOP_BOOKS_URL = `top-books`

async function fetchTopBooks() {
  const config = {
    method: 'get',
    baseURL: BASE_URL+TOP_BOOKS_URL,
    params: {
       
    }
}
    try {
    const response = await axios.get('', config);
        // console.log(response);
        return response.data;

  } catch (error) {
    console.error(error);
  }
}

/**
 *запит на апі, (на мою думку оптимізованіша функція)
 * @param {*} str -довільний рядок з потрібними ключами для запиту
 * @returns об'єкт(и) за запитом
 */
async function getBook(str) {
  const searchUrl = BASE_URL + str;
  const { data } = await axios(searchUrl);
  return data;
}


export { fetchTopBooks, getBook };