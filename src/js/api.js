import axios from "axios";
const BASE_URL = 'https://books-backend.p.goit.global/books/';
const TOP_BOOKS_URL = `https://books-backend.p.goit.global/books/top-books`

async function fetchTopBooks()  {
    const config = {
    method: 'get',
    baseURL: TOP_BOOKS_URL,
    params: {
       
    }
}
    try {
    const response = await axios.get('', config);
        console.log(response);
        return response.data;
  } catch (error) {
    console.error(error);
  }
}


export{ fetchTopBooks}