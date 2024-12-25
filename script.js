const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list"); 

function addTodo() {
    const task = todoInput.value.trim();
    if (task === "") {
        alert('Please enter a task!');
        return;
    } else {
        const listItem = document.createElement("li");
        listItem.classList.add('list');

        const checkBtn = document.createElement("input");
        checkBtn.type = "checkbox";
        checkBtn.id = "myCheckbox";
        checkBtn.name = "myCheckbox";
        checkBtn.value = task;

        const taskText = document.createElement("span");
        taskText.innerText = task;

        const dltBtn = document.createElement("button");
        dltBtn.textContent = "Delete Task";
        dltBtn.classList.add("delete-btn");

        listItem.appendChild(checkBtn);  
        listItem.appendChild(taskText);  
        listItem.appendChild(dltBtn);

        todoList.appendChild(listItem);

        todoInput.value = "";

        // Event listener to delete the task
        dltBtn.addEventListener("click", function() {
            todoList.removeChild(listItem);
        });

        // Event listener to toggle text decoration when checkbox is checked
        checkBtn.addEventListener("change", function() {
            if (checkBtn.checked) {
                taskText.classList.add('checked');
            } else {
                taskText.classList.remove('checked');
            }
        });
    }
}

addBtn.addEventListener("click", addTodo);
