import axios from 'axios';
const BOOKS_ID = `https://books-backend.p.goit.global/books/bookId`;

const bookList = document.querySelector('#bookList');
const message = document.querySelector('#message');

async function fetchBookData(bookId) {
  try {
    const response = await axios.get(`${BOOKS_ID}/${bookId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching book data:', error);
  }
}

function checkLocalStorageBooks() {
  const booksFromLocalStorage =
    JSON.parse(localStorage.getItem('shoppingListBooks')) || [];

  if (booksFromLocalStorage.length === 0) {
    message.style.display = 'block';
  } else {
    booksFromLocalStorage.forEach(async book => {
      const bookData = await fetchBookData(book.id);
      if (bookData) {
        createBookCard(bookData);
      }
    });
  }
}

function createBookCard(book) {
  const bookCard = document.createElement('div');
  bookCard.innerHTML = `
      <div class="book-card">
        <img class="book-image" src="${book.image}" alt="Book Image">
        <div class="book-title">${book.title}</div>
        <div class="book-category">${book.category}</div>
        <div class="book-description">${book.description}</div>
        <div class="book-author">Author: ${book.author}</div>
        <div class="book-links">
          ${book.links
            .map(
              link =>
                `<div class="book-link"><a href="${link}">Buy on ${link}</a></div>`
            )
            .join('')}
        </div>
        <button class="delete-button"><svg width="16" height="16" class="shopping-svg">
        <use href="./images/symboldefs.svg#btn-shopping-list"></use></button>
      </div>
    `;

  bookCard.querySelector('.delete-button').addEventListener('click', () => {
    removeBookFromLocalStorage(book);
    bookCard.remove();
  });

  bookList.appendChild(bookCard);
}

function removeBookFromLocalStorage(bookToRemove) {
  const updatedBooks = booksFromLocalStorage.filter(
    book => book.title !== bookToRemove.title
  );
  localStorage.setItem('shoppingListBooks', JSON.stringify(updatedBooks));
  if (updatedBooks.length === 0) {
    message.style.display = 'block';
  }
}
checkLocalStorageBooks();
