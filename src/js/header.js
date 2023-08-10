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
const mobileMenuItems = document.querySelectorAll('.mobile-container [data-page]');

mobileMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    currentPage = item.getAttribute('data-page');
    localStorage.setItem('currentPage', currentPage);
    updateMobileNavLinks();
  });
});

function updateMobileNavLinks() {
  mobileMenuItems.forEach(item => {
    const pageAttribute = item.getAttribute('data-page');
    item.classList.toggle('nav-item-current', currentPage === pageAttribute);
  });
}
updateNavLinks();

const userNameTextMobile = document.querySelector('#text-stephen')
const userNameLocal = localStorage.getItem("userName");

const menuBtnRef = document.querySelector("[data-menu-button]");
menuBtnRef.addEventListener('click', openBurger)

export function openBurger() {
  const mobileMenuSignIN = document.querySelector('.mobile-wrapper')
  const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  menuBtnRef.classList.toggle("is-open");
  menuBtnRef.setAttribute("aria-expanded", !expanded);
  
  if (userNameLocal) {
    mobileMenuSignIN.classList.toggle("is-hidden");
    userNameTextMobile.textContent = localStorage.getItem("userName");
     if (!mobileMenuSignIN.classList.contains('is-hidden')) {
    document.body.classList.toggle('no-scroll');
    }
  } else { 
    const mobileMenuSignUP = document.querySelector('.mobile-wrapper-signup');
    mobileMenuSignUP.classList.toggle("is-hidden");
    if (!mobileMenuSignUP.classList.contains('is-hidden')) {
      document.body.classList.toggle('no-scroll');
      }
  }

 
  
};


