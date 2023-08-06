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

async function getBook(str) {
  const searchUrl = BASE_URL + str;
  try {
    const data = await axios(searchUrl);
    return data.data;
  } catch (err) {
    console.log(err);
  }
}

export { fetchTopBooks, getBook };
