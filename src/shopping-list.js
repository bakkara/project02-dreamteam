const bookList = document.querySelector('#bookList');
const message = document.querySelector('#message');

async function getBook(bookId) {
  const BASE_URL = 'https://books-backend.p.goit.global/books/';
  const searchUrl = BASE_URL + bookId;
  try {
    const response = await fetch(searchUrl);
    if (!response.ok) {
      throw new Error('Error');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
    return null;
  }
}
function loadBooksFromLocalStorage() {
  const booksFromLocalStorage =
    JSON.parse(localStorage.getItem('targetBooks')) || [];
  return booksFromLocalStorage;
}

function displayBooksInShoppingList(bookIds) {
  bookList.innerHTML = '';
  if (bookIds.length === 0) {
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
    bookIds.forEach(async bookId => {
      try {
        const bookData = await getBook(bookId);
        createBookCard(bookData);
      } catch (err) {
        console.log(err.message);
      }
    });
  }
}
function createBookCard(book) {
  const bookCard = document.createElement('div');
  bookCard.innerHTML = `
<div class="book-card">
      <img class="book-image" src="${book.book_image}" alt="${book.list_name}">
      <div class="book-title">${book.title}</div>
      <div class="book-category">${book.list_name}</div>
      <div class="book-description">${book.description}</div>
      <div class="book-author">${book.author}</div>
      <div class="book-links">
        ${
          book.links
            ? book.links
                .map(
                  link =>
                    `<div class="book-link"><a href="${link}">Buy on ${link}</a></div>`
                )
                .join('')
            : ''
        }
      </div>
      <button class="delete-button"><svg width="16" height="16" class="shopping-svg">
                    <use href="./img/symbol-defs.svg#icon-dump"></use></button>
    </div>
  `;

  bookList.appendChild(bookCard);

  const deleteButton = bookCard.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    removeBookFromLocalStorage(book._id);
    bookCard.remove();

    if (loadBooksFromLocalStorage().length === 0) {
      message.style.display = 'block';
    }
  });
}

function removeBookFromLocalStorage(bookIdToRemove) {
  const updatedBooks = loadBooksFromLocalStorage().filter(
    bookId => bookId !== bookIdToRemove
  );
  localStorage.setItem('targetBooks', JSON.stringify(updatedBooks));
}

const bookIdsFromLocalStorage = loadBooksFromLocalStorage();
displayBooksInShoppingList(bookIdsFromLocalStorage);
