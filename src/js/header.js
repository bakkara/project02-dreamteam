let currentPage = localStorage.getItem('currentPage') || 'index';

const navList = document.querySelector('.nav-list');
navList.addEventListener('click', (evt) => {
  const currentItem = evt.target.closest('.nav-item');

  if (currentItem) {
    currentPage = currentItem.getAttribute('data-page');
    localStorage.setItem('currentPage', currentPage);
    updateNavLinks();
  }
});

function updateNavLinks() {
  const homeLink = document.querySelector('.nav-item[data-page="index"]');
  const shoppingListLink = document.querySelector('.nav-item[data-page="shopping-list"]');
  
  homeLink.classList.toggle('nav-item-current', currentPage === 'index');
  shoppingListLink.classList.toggle('nav-item-current', currentPage === 'shopping-list');
}

updateNavLinks();

const userNameTextMobile = document.querySelector('#text-stephen')
const userNameLocal = localStorage.getItem("userName");

const menuBtnRef = document.querySelector("[data-menu-button]");
menuBtnRef.addEventListener('click', openBurger)

function openBurger() {
  const mobileMenu = document.querySelector('.mobile-wrapper')
  const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  menuBtnRef.classList.toggle("is-open");
  menuBtnRef.setAttribute("aria-expanded", !expanded);
  
  if (userNameLocal) userNameTextMobile.textContent = localStorage.getItem("userName");

  if (!mobileMenu.classList.contains('is-hidden')) {
    document.body.classList.toggle('no-scroll');
    }
  mobileMenu.classList.toggle("is-open");
  
};

