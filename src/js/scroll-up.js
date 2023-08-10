import { renderTopBooks, displayCategories, countTopCategories } from "./top-books.js";


let scrollToTopBtnEl = document.querySelector('.scroll-up-btn');
const bookGuard = document.querySelector('.books-guard')

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
};

const observer = new IntersectionObserver(handlerPagination, options);


displayCategories(data,countTopCategories)
.then()


function handlerPagination(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        // Відмалювати наступні 4 категорії
        numTopCategoriesToShow += 4;
        renderTopBooks();

      // observer.unobserve(entry.target);
    }
});
// if (numTopCategoriesToShow >= 5) {

//     // Викликати scrollFunction після першого handlerPagination
//     scrollFunction();
//   }
// }
  
}


// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//     scrollToTopBtnEl.style.display = 'flex';
//   } else {
//     scrollToTopBtnEl.style.display = 'none';
//   }
// }

// scrollToTopBtnEl.addEventListener('click', backToTop);

// export function backToTop(value = 0) {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = value;
// }

