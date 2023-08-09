import { Report } from 'notiflix/build/notiflix-report-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { elements } from './refs.js';
import { createModalMarkup } from './markup.js';
import { getBook } from './api';
import { load, save } from './storage.js';

let scrollWidth = '';
const modalBookObj = {}; /**ініціалізація об'єкту з інформацією про книгу */

/**
 * основна функція
 * @param {*} id - ідентифікатор книги, отриманий при виборі
 */
export async function modal(id) {
  try {
    scrollWidth =
      window.innerWidth -
      elements.body.clientWidth +
      'px'; /*визначаємо ширину скролу*/
    Loading.standard(); /** вкл спінер */
    const modalBook = await getBook(id); /** запит на api */
    const [...targetBooks] =
      load('targetBooks'); /** оримуємо масив книг з лок, сховища */

    /** оновлюємо отриманими даними наш об'єкт книги*/
    modalBookObj.bookId = id;
    modalBookObj.bookArr = targetBooks;
    modalBookObj.isInLS = isInStorage(modalBookObj);

    /**відмальовуємо розмітку */
    elements.modalBookCard.innerHTML = createModalMarkup(modalBook);

    toggleBtn(modalBookObj.isInLS); /** заповнюємо текстом головну кнопку  */
    toggleModal(); /** відкриваємо модалку */
    Loading.remove(); /**викл спінер через */
    addListeners(); /** "вішаємо" слухачів на події */
  } catch (err) {
    console.log(err);
    Report.failure(
      'Notiflix Failure',
      '"Failure is simply the opportunity to begin again, this time more intelligently." <br/><br/>- Henry Ford',
      'Okey... Fix it',
      () => {
        location.reload();
      }
    );
  }
}

/**
 * перевіряє чи є дана книга в масиві, що отриманий з лок. схов.
 * @param {*} obj об'єкт з інфо про книгу, в т ч масив книг з лс
 * @returns буль, на запитання чи є книга в локальній пам'яті
 */
function isInStorage(obj) {
  if (!obj.bookArr.length) return false;
  return obj.bookArr.some(i => i === obj.bookId);
}

/**
 * при кліку на головну кнопку мутує масив отриманий з локал. схов.
 * і передає новий масив книг, для збереження в ЛС
 * та запускає функцію зміни стану кнопки
 */
function clickHandler() {
  if (modalBookObj.isInLS) {
    const idx = modalBookObj.bookArr.indexOf(modalBookObj.bookId);
    modalBookObj.bookArr.splice(idx, 1);
    modalBookObj.isInLS = false;
  } else {
    modalBookObj.bookArr.push(modalBookObj.bookId);
    modalBookObj.isInLS = true;
  }
  save('targetBooks', modalBookObj.bookArr); /**збереження в лс */
  toggleBtn(modalBookObj.isInLS); /**зміна кнопки */
}

/**
 * запускає слухачів при відкритті модалки
 */
function addListeners() {
  elements.modalBtnClose.addEventListener('click', handlerClose);
  document.addEventListener('keydown', handlerCloseEsc);
  elements.modalMainBtn.addEventListener('click', clickHandler);
  elements.modal.addEventListener('click', handlerCloseW);
}

/**
 * видаляє слухачів з модалки та закриває модалку
 */
function handlerClose() {
  document.removeEventListener('keydown', handlerCloseEsc);
  elements.modalMainBtn.removeEventListener('click', clickHandler);
  elements.modal.removeEventListener('click', handlerCloseW);
  toggleModal();
}

/**
 *  * запускає функцію закриття модалки при даних умовах
 * @param {*} e подія при натисненні кнопки чи при кліку
 */
function handlerCloseW(e) {
  if (!e.target.closest('.modal-window')) handlerClose();
}

function handlerCloseEsc(e) {
  if (e.key === 'Escape') handlerClose();
}

/**
 * змінює стан головної кнопки
 * @param {*} bool -наявність даної книги в локал. схов.(true- значить є в лс)
 * @returns
 */
function toggleBtn(bool) {
  if (!bool) {
    elements.modalMainBtn.nextElementSibling.classList.add('js-hidden-text');
    setTimeout(() => {
      elements.modalMainBtn.classList.remove('js-modal-remove');
      elements.modalMainBtn.textContent = 'add to shopping list';
    }, 100);

    return;
  }
  elements.modalMainBtn.textContent = 'remove from the shopping list';
  elements.modalMainBtn.classList.add('js-modal-remove');
  setTimeout(() => {
    elements.modalMainBtn.nextElementSibling.classList.remove('js-hidden-text');
  }, 50);
}

/**
 * відкриває/закриває модалку
 */
function toggleModal() {
  elements.body.style.paddingRight = elements.modal.classList.contains(
    'is-open'
  )
    ? '0px'
    : scrollWidth;
  elements.modal.classList.toggle('is-open');
  elements.body.classList.toggle('no-scroll');
}
