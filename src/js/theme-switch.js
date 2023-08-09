import { elements} from "./refs.js";

// перевіряємо збережену тему в localStorage
let savedTheme = localStorage.getItem('theme');

// обробник події зміни теми
elements.themeSwitcher.addEventListener("change", changeTheme)


// функція для застосування теми
function applyTheme(themeName) {
    
    let themeUrl = `./css/theme-${themeName}.css`;
    console.log(themeUrl);
    console.log(themeName);
    elements.themeLink.setAttribute('href', themeUrl);
    
}

// функція для зміни теми
function changeTheme(event) {
    // const isDarkTheme = event.target.checked;
    
    console.log(event.target.checked);

    if (event.target.checked) {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
        // elements.themeLink.setAttribute('href', "./css/theme-dark.css");
        
    } else {
        applyTheme('light');
        localStorage.setItem('theme', 'light');
        // elements.themeLink.setAttribute('href', "./css/theme-light.css");
    }
        
}

// Застосовуємо збережену тему при завантаженні сторінки
applyTheme(savedTheme || 'light'); // Використовуємо 'light' як значення за замовчуванням
console.log(elements.themeSwitcher.checked)

