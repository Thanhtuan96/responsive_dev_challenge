const todoInput = document.querySelector('.todo-input');
const todoTasks = document.querySelectorAll('.todo-task');
const todoContainer = document.querySelector('.todo-container');
const themeToggleBtn = document.querySelector('.btn-theme');
const desktopPanel = document.querySelector('.desktop-panel');
const mobilePanel = document.querySelector('.mobile-panel');
const tasksEmpty = document.querySelector('.tasks-empty');

// this function use to check which panel will be shown went create initial todo item
const pannelCheck = () => {
    window.innerWidth >= 768
        ? (desktopPanel.style = 'display: block')
        : (mobilePanel.style = 'display: block');
};

// this function use to toggel dark theme and light them
const themeToogle = () => {
    themeToggleBtn.addEventListener('click', () => {
        document.querySelector('html').getAttribute('data-theme') === 'dark'
            ? document.querySelector('html').setAttribute('data-theme', 'light')
            : document.querySelector('html').setAttribute('data-theme', 'dark');
    });
};

themeToogle();

const deleteItemAndRefresh = (list) => {
    localStorage.setItem('tasks', JSON.stringify(list));
    displayTodoItem(list);
};

const displayTodoItem = (list) => {
    let displayItem = '';
    if (list === []) {
        tasksEmpty.style = 'display: block';
        todoContainer.style = 'display: none';
    } else {
        list.forEach((item, key) => {
            displayItem += `<div class="todo-block todo-line todo-task" data-id=${key}>
                    <input type="checkbox" class="check-complete">
                    <p>${item}</p>
                    <button class='delete-btn' ></button>
                </div>`;
            todoContainer.innerHTML = displayItem;
        });

        const deleteBtns = document.querySelectorAll('.todo-task .delete-btn');

        deleteBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                const index = parseInt(
                    btn.parentElement.getAttribute('data-id')
                );
                list.splice(index, 1);
                console.log(list[0] === null);
                displayTodoItem(list);
            });
        });
    }
};

const deleteItem = () => {};

// create new item and store it to localStorage

const createNewToDoItemAndSave = (e) => {
    e.preventDefault();
    let todoLists = JSON.parse(localStorage.getItem('tasks')) || [];

    if (e.key === 'Enter' && todoInput.value != '') {
        todoLists.push(todoInput.value);
        localStorage.setItem('tasks', JSON.stringify(todoLists));
        todoInput.value = '';
    }
    displayTodoItem(todoLists);
};

const todoApp = () => {
    let todoLists = JSON.parse(localStorage.getItem('tasks')) || [];
    window.addEventListener('DOMContentLoaded', () => {
        displayTodoItem(todoLists);
    });
    todoInput.addEventListener('keyup', createNewToDoItemAndSave);
};

todoApp();
