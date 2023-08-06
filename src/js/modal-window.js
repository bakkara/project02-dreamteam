import { createModalMarkup } from './markup.js';
import { getBook } from './api';
import { load, save } from './storage.js';

const btnCloseModalEl = document.querySelector('[data-modal-close]');
const modalEl = document.querySelector('.modal-wrapper');
const modalBookCardEl = document.querySelector('.book-modal-wrap');
const modalStoresEl = document.querySelectorAll('.modal-link');
const modalMainBtnEl = document.querySelector('.modal-btn-main');
// const modalTextUderBtnEl = document.querySelector('.modal-bottom-text');

export async function modal(id) {
  try {
    const modalBook = await getBook(id);

    modalBookCardEl.innerHTML = createModalMarkup(modalBook);
    findStoreLink(modalBook);

    toggleModal();

    addListeners();
    modalMainBtnEl.addEventListener('click', onModalBtnClick);
    function onModalBtnClick() {
      listenModal(id);
    }
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

function isInStorage(arr, id) {
  if (!arr.length) return false;
  return arr.some(i => i === id);
}

function addListeners() {
  modalMainBtnEl.addEventListener('click', onModalBtnClick);
  btnCloseModalEl.addEventListener('click', toggleModal);
  // modalEl.addEventListener('click', handlerClose);
  document.addEventListener('keydown', handlerCloseEsc);
}

// function handlerClose(evt) {
//   toggleModal();
// }

function handlerCloseEsc(evt) {
  if (evt.key !== 'Escape') return;
  toggleModal();
  document.removeEventListener('keydown', handlerCloseEsc);
}
// доробити!!!!!
function listenModal(id) {
  const [...targetBooks] = load('targetBooks');
  const bool = isInStorage(targetBooks, id);
  toggleBtn(bool);
  if (bool) {
    arr.splice(arr.indexOf(id), 1);
  } else {
    arr.push(id);
  }
  save('targetBooks', arr);
}
