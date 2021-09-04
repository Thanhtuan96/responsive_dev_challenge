const toggleBtn = document.querySelector('.btn-toggle');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.contains('active')
        ? menu.classList.remove('active')
        : menu.classList.add('active');
});
