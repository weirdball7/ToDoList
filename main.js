document.addEventListener('DOMContentLoaded', function() {
    // Get references to the HTML elements
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    const updateButton = document.getElementById("update");

    // Add an event listener to the "Update" button
    updateButton.addEventListener("click", addTask);

    function addTask() {
        // Get the task text from the input field
        const newTaskText = taskInput.value;

        if (newTaskText.trim() !== "") {
            // Create a new task container div
            const taskContainer = document.createElement("div");
            taskContainer.classList.add("task-container");

            // Create a paragraph for the task text
            const taskDetail = document.createElement("p");
            taskDetail.textContent = newTaskText;
            taskDetail.classList.add("task-detail");

            // Create buttons for task options
            const taskOption1 = document.createElement("button");
            taskOption1.textContent = "Not Done";
            taskOption1.classList.add("task-option1");

            const taskOption2 = document.createElement("button");
            taskOption2.textContent = "In Progress";
            taskOption2.classList.add("task-option2");

            const taskOption3 = document.createElement("button");
            taskOption3.textContent = "Done";
            taskOption3.classList.add("task-option3");

            // Append elements to the task container
            taskContainer.appendChild(taskDetail);
            taskContainer.appendChild(taskOption1);
            taskContainer.appendChild(taskOption2);
            taskContainer.appendChild(taskOption3);

            // Append the new task container to the task list
            taskList.appendChild(taskContainer);

            // Clear the input field
            taskInput.value = "";
        }
    }
});
