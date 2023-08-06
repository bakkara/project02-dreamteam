import { createModalMarkup } from './markup.js';
import { getBook } from './api';
import { load, save } from './storage.js';

const btnCloseModalEl = document.querySelector('[data-modal-close]');
const modalEl = document.querySelector('.modal-wrapper');
const modalBookCardEl = document.querySelector('.book-modal-wrap');
const modalStoresEl = document.querySelectorAll('.modal-link');
const modalMainBtnEl = document.querySelector('.modal-btn-main');
// const modalTextUderBtnEl = document.querySelector('.modal-bottom-text');
const modalBookObj = {};

export async function modal(id) {
  try {
    const modalBook = await getBook(id);
    const [...targetBooks] = load('targetBooks');

    modalBookObj.bookId = id;
    modalBookObj.bookArr = targetBooks;
    modalBookObj.isInLS = isInStorage(modalBookObj);

    modalBookCardEl.innerHTML = createModalMarkup(modalBook);
    findStoreLink(modalBook);

    console.log(modalBookObj);

    toggleModal();
    toggleBtn(modalBookObj.isInLS);
    addListeners();
  } catch (err) {
    console.log(err.message);
  }
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
    modalMainBtnEl.nextElementSibling.classList.add('is-hidden-text');
    modalMainBtnEl.classList.remove('modal-btn-main-remove');
    return;
  }
  modalMainBtnEl.textContent = 'remove from the shopping list';
  modalMainBtnEl.classList.add('modal-btn-main-remove');
  modalMainBtnEl.nextElementSibling.classList.remove('is-hidden-text');
}

function toggleModal() {
  modalEl.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

function isInStorage(obj) {
  if (!obj.bookArr.length) return false;
  return obj.bookArr.some(i => i === obj.bookId);
}

function addListeners() {
  btnCloseModalEl.addEventListener('click', handlerClose);
  document.addEventListener('keydown', handlerClose);
  modalMainBtnEl.addEventListener('click', clickHandler);
}

function clickHandler() {
  listenModal(modalBookObj);
}

function handlerClose() {
  document.removeEventListener('keydown', handlerClose);
  modalMainBtnEl.removeEventListener('click', clickHandler);
  toggleModal();
}
let a = 0;
function listenModal(obj) {
  a = +1;
  console.log('listenModal', obj, a);
  if (obj.isInLS) {
    const idx = obj.bookArr.indexOf(obj.bookId);
    obj.bookArr.splice(idx, 1);
    obj.isInLS = false;
  } else {
    obj.bookArr.push(obj.bookId);
    obj.isInLS = true;
  }
  save('targetBooks', obj.bookArr);
  console.log('listen2', obj);
  toggleBtn(obj.isInLS);
}
