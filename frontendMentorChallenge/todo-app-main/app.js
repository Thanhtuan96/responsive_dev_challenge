const todoInput = document.querySelector('.todo-input');
const todoTasks = document.querySelectorAll('.todo-task');
const todoContainer = document.querySelector('.todo-container');
const themeToggleBtn = document.querySelector('.btn-theme');
const desktopPanel = document.querySelector('.desktop-panel');
const mobilePanel = document.querySelector('.mobile-panel');
const tasksEmpty = document.querySelector('.tasks-empty');
const countItem = document.querySelectorAll('.count');

let initialWidth = window.innerWidth;

// this function use to toggel dark theme and light them
const themeToogle = () => {
    document.querySelector('html').getAttribute('data-theme') === 'dark'
        ? document.querySelector('html').setAttribute('data-theme', 'light')
        : document.querySelector('html').setAttribute('data-theme', 'dark');
};
// this function use to check which panel will be shown went create initial todo item
const pannelCheck = (list) => {
    window.innerWidth >= 768
        ? (desktopPanel.style = 'display: block')
        : (mobilePanel.style = 'display: block');
    if (list.length === 0) {
        desktopPanel.style = 'display: none';
        mobilePanel.style = 'display: none';
    }
    if (window.innerWidth != initialWidth) {
        if (window.innerWidth < 768) {
            if (desktopPanel.style.display == 'block') {
                desktopPanel.style = 'display: none';
                mobilePanel.style = 'display: block';
            }
        } else {
            if (mobilePanel.style.display == 'block') {
                mobilePanel.style = 'display: none';
                desktopPanel.style = 'display: block';
            }
        }

        initialWidth = window.innerWidth;
    }
};

// this function to check has any item in localStorage and display
const checkAnyItem = () => {
    const list = JSON.parse(localStorage.getItem('tasks'));
    displayTodoItem(list);
    pannelCheck(list);
};

//todo items count
const updateCountItem = () => {
    const list = JSON.parse(localStorage.getItem('tasks'));
    countItem.forEach((item) => {
        item.textContent = list.length;
    });
};

//this function use to display item from localStorage to DOM
const displayTodoItem = (list) => {
    console.log(list.length);
    if (list.length === 0) {
        tasksEmpty.style = 'display: block; border-radius: 8px;';
        todoContainer.style = 'display: none';
        desktopPanel.style = 'display: none';
        mobilePanel.style = 'display: none';
    } else {
        tasksEmpty.style = 'display: none;';
        todoContainer.style = 'display: block';
        let displayItem = '';
        list.forEach((item, key) => {
            displayItem += `<div class="todo-block todo-line todo-task" data-id=${key}>
                    <input type="checkbox" class="check-complete">
                    <p class='task'>${item}</p>
                    <button class='delete-btn' ></button>
                </div>`;
            todoContainer.innerHTML = displayItem;
        });
    }
    updateCountItem();
    pannelCheck(list);
    deleteItemBtns(list);
    checkComplete();
};

//this function make a delete event btn for each item has been display
const deleteItemBtns = (list) => {
    const deleteBtns = document.querySelectorAll('.todo-task .delete-btn');
    // add delete event for each button
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.parentElement.getAttribute('data-id'));
            list.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(list));
            checkAnyItem();
        });
    });
};

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

//this function to make item completed
const checkComplete = () => {
    const checkCompleteBtns = document.querySelectorAll('.check-complete');
    checkCompleteBtns.forEach((item) => {
        item.addEventListener('click', function () {
            item.nextElementSibling.classList.toggle('completed');
            if (item.nextElementSibling.classList.contains('completed')) {
                item.style = `background: no-repeat url(images/icon-check.svg) center/60%, linear-gradient(to bottom, #57ddff, #c058f3);`;
            } else item.style = `backgroudn: none`;
        });
    });
};

const todoApp = () => {
    //get initial item to display into DOM
    let todoLists = JSON.parse(localStorage.getItem('tasks')) || [];
    window.addEventListener('DOMContentLoaded', () => {
        displayTodoItem(todoLists);
    });

    todoInput.addEventListener('keyup', createNewToDoItemAndSave);

    themeToggleBtn.addEventListener('click', themeToogle);

    window.addEventListener('resize', pannelCheck);
};

todoApp();
