function createModalMarkup(book) {
  return `<div class="modal-img-wrap">
              <img src="${book.book_image}" class="modal-img"
              alt="${book.list_name}" 
              id="${book._id}">
            </div>
            <h2 class="modal-title">${book.title}</h2>
            <h3 class="modal-autor">${book.author}</h3>
            <p class="modal-descr">I${book.description || book.list_name}</p>
  `;
}

export { createModalMarkup };
