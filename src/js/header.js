// (() => {
//     const mobileMenu = document.querySelector('.menu-container');
//     const openMenuBtn = document.querySelector('.icon-cross');
//     const closeMenuBtn = document.querySelector('.icon-menu');
  
//     const toggleMenu = () => {
//       const isMenuOpen =
//         openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//       openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//       mobileMenu.classList.toggle('is-open');
  
//       const scrollLockMethod = !isMenuOpen
//         ? 'disableBodyScroll'
//         : 'enableBodyScroll';
//       bodyScrollLock[scrollLockMethod](document.body);
//     };
  
//     openMenuBtn.addEventListener('click', toggleMenu);
//     closeMenuBtn.addEventListener('click', toggleMenu);
  
//     // Close the mobile menu on wider screens if the device orientation changes
//     window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//       if (!e.matches) return;
//       mobileMenu.classList.remove('is-open');
//       openMenuBtn.setAttribute('aria-expanded', false);
//       bodyScrollLock.enableBodyScroll(document.body);
//     });
//   })();

// });


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


(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
    });
})();