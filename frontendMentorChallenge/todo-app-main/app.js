const todoInput = document.querySelector('.todo-input');
const todosContainer = document.querySelectorAll('.todo-task');
const themeToggleBtn = document.querySelector('.btn-theme');
const desktopPanel = document.querySelector('.desktop-panel');
const mobilePanel = document.querySelector('.mobile-panel');

const pannelToggle = () => {
    window.innerWidth >= 768
        ? (desktopPanel.style = 'display: block')
        : (mobilePanel.style = 'display: block');
};

const themeToogle = () => {
    themeToggleBtn.addEventListener('click', () => {
        document.querySelector('html').getAttribute('data-theme') === 'dark'
            ? document.querySelector('html').setAttribute('data-theme', 'light')
            : document.querySelector('html').setAttribute('data-theme', 'dark');
    });
};

themeToogle();
