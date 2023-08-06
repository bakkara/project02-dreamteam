const footerList = document.querySelector('.footer-list')
const footerBlock = document.querySelector('.footer-block')

footerBlock.addEventListener('click', () => {
    footerBlock.classList.toggle('is-hidden');
    footerList.classList.toggle('is-hidden');
    
})