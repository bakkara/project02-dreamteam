import { elements } from "./refs.js";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
    elements.scrollToTopBtnEl.style.display = 'flex';
  } else {
    elements.scrollToTopBtnEl.style.display = 'none';
  }
}

elements.scrollToTopBtnEl.addEventListener('click', backToTop);

export function backToTop(value = 0) {
  document.body.scrollTop = value;
  document.documentElement.scrollTop = value;
}

export {scrollFunction}