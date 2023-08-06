import { Report } from 'notiflix/build/notiflix-report-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { elements } from './refs.js';
import { createModalMarkup } from './markup.js';
import { getBook } from './api';
import { load, save } from './storage.js';

const modalBookObj = {};

export async function modal(id) {
  try {
    Loading.standard();
    const modalBook = await getBook(id);
    const [...targetBooks] = load('targetBooks');

    modalBookObj.bookId = id;
    modalBookObj.bookArr = targetBooks;
    modalBookObj.isInLS = isInStorage(modalBookObj);

    elements.modalBookCard.innerHTML = createModalMarkup(modalBook);
    findStoreLink(modalBook);

    toggleModal();
    Loading.remove(250);
    toggleBtn(modalBookObj.isInLS);
    addListeners();
  } catch (err) {
    Report.failure(
      'Notiflix Failure',
      '"Failure is simply the opportunity to begin again, this time more intelligently." <br/><br/>- Henry Ford',
      'Okay',
      { timeout: 2000 }
    );
    location.reload(300);
  }
}

function findStoreLink(book) {
  elements.modalStores.forEach(
    storeEl =>
      (storeEl.href = book.buy_links.find(obj => obj.name === storeEl.name).url)
  );
}

function isInStorage(obj) {
  if (!obj.bookArr.length) return false;
  return obj.bookArr.some(i => i === obj.bookId);
}

function clickHandler() {
  if (modalBookObj.isInLS) {
    const idx = modalBookObj.bookArr.indexOf(modalBookObj.bookId);
    modalBookObj.bookArr.splice(idx, 1);
    modalBookObj.isInLS = false;
  } else {
    modalBookObj.bookArr.push(modalBookObj.bookId);
    modalBookObj.isInLS = true;
  }
  save('targetBooks', modalBookObj.bookArr);
  toggleBtn(modalBookObj.isInLS);
}

function addListeners() {
  elements.modalBtnClose.addEventListener('click', handlerClose);
  document.addEventListener('keydown', handlerCloseW);
  elements.modalMainBtn.addEventListener('click', clickHandler);
  elements.modal.addEventListener('click', handlerCloseW);
}

function handlerClose() {
  document.removeEventListener('keydown', handlerCloseW);
  elements.modalMainBtn.removeEventListener('click', clickHandler);
  elements.modal.removeEventListener('click', handlerCloseW);
  toggleModal();
}

function handlerCloseW(e) {
  if (e.key !== 'Escape' && e.target.closest('.modal-window')) return;
  handlerClose();
}

function toggleBtn(bool) {
  if (!bool) {
    elements.modalMainBtn.textContent = 'add to shopping list';
    elements.modalMainBtn.nextElementSibling.classList.add('js-hidden-text');
    elements.modalMainBtn.classList.remove('js-modal-remove');
    return;
  }
  elements.modalMainBtn.textContent = 'remove from the shopping list';
  elements.modalMainBtn.nextElementSibling.classList.remove('js-hidden-text');
  elements.modalMainBtn.classList.add('js-modal-remove');
}

function toggleModal() {
  elements.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}
