const taskInput = document.getElementById('task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            <span class="task-text">${taskText}</span>
            <button class="delete-task">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';

        taskItem.querySelector('.delete-task').addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }
});

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('task-checkbox')) {
        const taskText = e.target.nextElementSibling;
        taskText.style.textDecoration = e.target.checked ? 'line-through' : 'none';
    }
});

