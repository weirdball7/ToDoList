document.addEventListener('DOMContentLoaded', function() {
    // Get references to the HTML elements
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
    const updateButton = document.getElementById("update");

    // Global variables
    var taskContainer;
    var taskDetail;
    var taskOption1;
    var taskOption2;
    var taskOption3;
    var deleteBtn
    var previousClickedButton; // Store the previously clicked button

    // Add an event listener to the "Update" button
    updateButton.addEventListener("click", addTask);

    function addTask() {
        // Get the task text from the input field
        const newTaskText = taskInput.value;

        if (newTaskText.trim() !== "") {
            // Create a new task container div
            taskContainer = document.createElement("div");
            taskContainer.classList.add("task-container");

            // Create a paragraph for the task text
            taskDetail = document.createElement("p");
            taskDetail.textContent = newTaskText;
            taskDetail.classList.add("task-detail");

            // Create buttons for task options
            taskOption1 = document.createElement("button");
            taskOption1.textContent = "Not Done";
            taskOption1.classList.add("task-option1");

            taskOption2 = document.createElement("button");
            taskOption2.textContent = "In Progress";
            taskOption2.classList.add("task-option2");

            taskOption3 = document.createElement("button");
            taskOption3.textContent = "Done";
            taskOption3.classList.add("task-option3");

            deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("delete");

            // Add event listeners for the task buttons
            taskOption1.addEventListener('click', taskIncomplete);
            taskOption2.addEventListener('click', taskPending);
            taskOption3.addEventListener('click', taskComplete);
            deleteBtn.addEventListener('click', deleteTask);

            // Append elements to the task container
            taskContainer.appendChild(taskDetail);
            taskContainer.appendChild(taskOption1);
            taskContainer.appendChild(taskOption2);
            taskContainer.appendChild(taskOption3);
            taskContainer.appendChild(deleteBtn);

            // Append the new task container to the task list
            taskList.appendChild(taskContainer);
            taskIncomplete();

            // Clear the input field
            taskInput.value = "";
        }
    }

    const resetButtonColors = () => {
        if (previousClickedButton === taskOption3) {
            previousClickedButton.style.backgroundColor = '#22A699'; // Replace with your original color
        }
        
        if (previousClickedButton === taskOption2) {
            previousClickedButton.style.backgroundColor = '#F2BE22'; // Replace with your original color
        }
        
        if (previousClickedButton === taskOption1) {
            previousClickedButton.style.backgroundColor = '#F24C3D';
        }
    };

    const taskComplete = () => {
        console.log('Task Completed');
        taskContainer.style.backgroundColor = 'rgba(63, 191, 4, 0.7)';
        taskOption3.style.backgroundColor = 'rgba(97, 88, 87, 0.7)';
        resetButtonColors();
        previousClickedButton = taskOption3;
    };

    const taskPending = () => {
        console.log('Task in Progress');
        taskContainer.style.backgroundColor = 'rgba(214, 189, 0, 0.7)';
        taskOption2.style.backgroundColor = 'rgba(97, 88, 87, 0.7)';
        resetButtonColors();
        previousClickedButton = taskOption2;
    };

    const taskIncomplete = () => {
        console.log("Haven't even started");
        taskContainer.style.backgroundColor = 'rgba(245, 71, 59, 0.7)';
        taskOption1.style.backgroundColor = 'rgba(97, 88, 87, 0.7)';
        resetButtonColors();
        previousClickedButton = taskOption1;
    };



    const deleteTask = () => {
        taskList.removeChild(taskContainer);
    }
});
