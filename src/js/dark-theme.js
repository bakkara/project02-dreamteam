
    // let savedTheme = localStorage.getItem('theme');

    // switchTheme()

    // function switchTheme() {
    //     const themeSwitcher = document.querySelector('#theme-switch');
        
    //     if (!savedTheme) {
    //     localStorage.setItem('theme', 'dark');
    //     } else {
    //     if (savedTheme === 'dark') {
    //         themeSwitcher.checked = true;
    //         document.body.classList.toggle('dark-theme');
    //     }
    //     }
    
    //     themeSwitcher.addEventListener('click', changeTheme);
    //     function changeTheme() {
    //     document.body.classList.toggle('dark-theme');
    //     if (savedTheme === 'dark') {
    //         localStorage.setItem('theme', 'light');
    //         savedTheme = 'light';
    //     } else {
    //         localStorage.setItem('theme', 'dark');
    //         savedTheme = 'dark';
    //     }
    //     }
    // }

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