// =======================
// Dark Mode
// =======================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        darkModeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

// =======================
// To-Do List
// =======================

const taskInput = document.querySelector(".todo-box input");
const addBtn = document.querySelector(".todo-box button");
const taskList = document.getElementById("taskList");

// Load saved tasks
window.onload = function () {
    loadTasks();
};

// Add task button
addBtn.addEventListener("click", addTask);

// Press Enter to add task
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addTask();
    }
});

// Add task function
function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    createTask(taskText);

    saveTask(taskText);

    taskInput.value = "";
}

// Create task element
function createTask(taskText) {

    const li = document.createElement("li");

    li.innerHTML = `
        ${taskText}
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(li);

    // Delete task
    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
        deleteTask(taskText);
    });

}

// =======================
// Local Storage
// =======================

// Save task
function saveTask(task) {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

// Load tasks
function loadTasks() {

    taskList.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        createTask(task);
    });

}

// Delete task
function deleteTask(task) {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = tasks.filter(item => item !== task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

}