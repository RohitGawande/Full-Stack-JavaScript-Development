// DOM Selectors
const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

const showAllBtn = document.querySelector("#showAll");
const showCompletedBtn = document.querySelector("#showCompleted");
const showPendingBtn = document.querySelector("#showPending");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Initialize tasks on page load
renderTasks(tasks);

// Add task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = "";
    saveAndRender();
  }
});

// Render tasks
function renderTasks(taskArray) {
  taskList.innerHTML = "";

  taskArray.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    if (task.completed) taskDiv.classList.add("completed");

    taskDiv.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button onclick="toggleComplete(${index})">${task.completed ? "Undo" : "Complete"}</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskList.appendChild(taskDiv);
  });
}

// Toggle task completion
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveAndRender();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveAndRender();
}

// Filter tasks
showAllBtn.addEventListener("click", () => renderTasks(tasks));
showCompletedBtn.addEventListener("click", () =>
  renderTasks(tasks.filter(task => task.completed))
);
showPendingBtn.addEventListener("click", () =>
  renderTasks(tasks.filter(task => !task.completed))
);

// Save to localStorage and render
function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks(tasks);
}
