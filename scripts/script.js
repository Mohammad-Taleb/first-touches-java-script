const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask(){
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const newTask = document.createElement('li');
  newTask.textContent = taskText;

  taskList.appendChild(newTask);

  taskInput.value = '';
}