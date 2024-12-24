
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
// const dltBtn = document.getElementById("dlt-btn");
const todoList = document.getElementById("todo-list"); 

function addTodo(){
    const task = todoInput.value.trim();
    if(task === ""){
        alert('please enter a task!');
        return;
    }else {
        const listItem = document.createElement("li");
        
        listItem.innerText = task;
        listItem.classList.add('list');

        todoList.appendChild(listItem);
        const dltBtn = document.createElement("button");
        dltBtn.textContent = "Delete Task";
        dltBtn.id = "dlt-btn";
        todoList.appendChild(dltBtn);

        todoInput.value = "";
    }
}

function dltTask(){
    const li = document.getElementsByClassName("list")[0];
    todoList.removeChild(li);
}
addBtn.addEventListener("click", addTodo);
dltBtn.addEventListener("click", dltTask);