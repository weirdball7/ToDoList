document.addEventListener('DOMContentLoaded', function() {
    
    const task = document.getElementById('task-container');
    // const parent = task.parentNode;
    
    const updateButton = document.getElementById('update');
    // document.body.removeChild(task);

    updateButton.addEventListener('click', createTask);

    function createTask() {
        const taskName = document.getElementById('task-input').value;
        const taskClone = task.cloneNode(true);
        let taskTitle = taskClone.firstChild;
        taskTitle.innerHTML = taskName;
        document.body.appendChild(taskClone);
    }
});
