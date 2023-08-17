document.addEventListener('DOMContentLoaded', function() {
    const taskName = document.getElementById('task-input').value;
    const task = document.getElementById('task-container');
    // const parent = task.parentNode;
    const taskClone = task.cloneNode(true);
    const updateButton = document.getElementById('update');
    document.removeChild(task);

    updateButton.addEventListener('click', createTask);

    function createTask() {
        let taskTitle = taskClone.firstChild;
        taskTitle.innerHTML = taskName;
        document.body.appendChild(taskClone);
}
});
