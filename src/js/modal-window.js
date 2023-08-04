const btnCloseModalEl = document.querySelector('.btn-modal-close');
const modalEl = document.querySelector('.btn-modal-close');
console.log(btnCloseModalEl);

export function modal(id) {
  console.log(id);
}

function toggleModal() {
  modalEl.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}
