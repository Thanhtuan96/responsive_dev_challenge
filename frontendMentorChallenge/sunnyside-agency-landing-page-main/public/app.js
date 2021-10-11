const toggleBtn = document.querySelector('.toggle-btn');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', () => {
    links.classList.toggle('toggle-active');
});
