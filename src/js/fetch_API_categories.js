import axios from 'axios';


export async function getOneCategoriesBooksFromApi(category) {
    
    const resp = await axios.get(`https://books-backend.p.goit.global/books/category?category=${category}`);
    console.log(resp);
    return await resp.data;
}





