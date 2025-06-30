function changeText() {
  document.getElementById("message").innerText = "Sona College of Technology";
}

const box = document.getElementById("box");
box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "cyan";
  box.title = "You are hovering over the box";
});
box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "lightblue";
});

function calculateSum() {
  const num1 = parseFloat(document.getElementById("num1").value) || 0;
  const num2 = parseFloat(document.getElementById("num2").value) || 0;
  const sum = num1 + num2;
  document.getElementById("result").innerText = sum;
}

function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();

  if (taskText === " ") return;

  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");
  newTask.textContent = taskText;

  taskList.appendChild(newTask);
  taskInput.value = " ";
}
