const themeSwitcher = document.querySelector('#theme-switch');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  themeSwitcher.checked = true;
  document.body.classList.add('dark-theme');
}

themeSwitcher.addEventListener('click', () => {
  const newTheme = savedTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  document.body.classList.toggle('dark-theme');
});