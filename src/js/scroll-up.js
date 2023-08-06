let scrollToTopBtnEl = document.querySelector('.scroll-up-btn');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtnEl.style.display = 'flex';
  } else {
    scrollToTopBtnEl.style.display = 'none';
  }
}

scrollToTopBtnEl.addEventListener('click', backToTop);

export function backToTop(value = 0) {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = value;
}