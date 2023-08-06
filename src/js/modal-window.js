import { createModalMarkup } from './markup.js';
import { getBook } from './api';
import { load, save } from './storage.js';

const btnCloseModalEl = document.querySelector('[data-modal-close]');
const modalEl = document.querySelector('.modal-wrapper');
const modalBookCardEl = document.querySelector('.book-modal-wrap');
const modalStoresEl = document.querySelectorAll('.modal-link');
const modalMainBtnEl = document.querySelector('.modal-btn-main');

export async function modal(id) {
  try {
    const modalBook = await getBook(id);

    modalBookCardEl.innerHTML = createModalMarkup(modalBook);
    findStoreLink(modalBook);

    const [...targetBooks] = load('targetBooks');
    const t = isInStorage(targetBooks, id);
    console.log(t);

    toggleBtn(t);

    modalMainBtnEl.addEventListener('click', onClickBtn);

    addListeners();
  } catch (err) {
    console.log(err);
  }
  toggleModal();
}

function findStoreLink(book) {
  modalStoresEl.forEach(
    storeEl =>
      (storeEl.href = book.buy_links.find(obj => obj.name === storeEl.name).url)
  );
}

function toggleBtn(bool) {
  if (!bool) {
    modalMainBtnEl.textContent = 'add to shopping list';
    modalMainBtnEl.nextElementSibling.classList.add('is-hidden');
    return;
  }
  modalMainBtnEl.textContent = 'remove from the shopping list';
  modalMainBtnEl.nextElementSibling.classList.remove('is-hidden');
}

function toggleModal() {
  modalEl.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

function isInStorage(arr, id) {
  for (const a of arr) {
    if (a === id) {
      return true;
    }
    return false;
  }
}

function addListeners() {
  btnCloseModalEl.addEventListener('click', handlerClose);
  /* modalEl.addEventListener('click', handlerClose); */
  document.addEventListener('keydown', handlerClose);
}

function handlerClose(evt) {
  console.log(btnCloseModalEl);
  console.log(evt.target);
  toggleModal();
  document.removeEventListener('keydown', handlerClose);
}

function onClickBtn(bool) {
  console.log(bool);
}
