const todoList = [];

function addTask(taskName) {
  const task = {
    name: taskName,
    completed: false,
  };
  todoList.push(task);
}

function completeTask(index) {
  if (todoList[index]) {
    todoList[index].completed = true;
  }
}

function removeTask(index) {
  todoList.splice(index, 1);
}

addTask('Learn JavaScript');
addTask('Build a project');
completeTask(0);
console.log(todoList); // Logs the updated task list
