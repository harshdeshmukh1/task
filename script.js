document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const inputField = document.getElementById('task-input');
    const incompleteTasksList = document.getElementById('incomplete-tasks-list');
    const completedTasksList = document.getElementById('completed-tasks-list');

    addButton.addEventListener('click', () => {
        const task = inputField.value.trim();
        if (task) {
            const listItem = document.createElement('li');
            listItem.textContent = task;
            listItem.addEventListener('click', function() {
                if (this.classList.contains('completed')) {
                    this.remove();
                } else {
                    this.classList.add('completed');
                    completedTasksList.appendChild(this);
                }
            });
            incompleteTasksList.appendChild(listItem);
            inputField.value = ''; // Clear input field after adding
        }
    });
});
