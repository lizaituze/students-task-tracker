const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const errorMessage = document.getElementById("errorMessage");
const taskContainer = document.getElementById("taskContainer");

// Get saved tasks from local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save tasks to local storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Show tasks on the page
function renderTasks() {
  taskContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskCard = document.createElement("div");

    taskCard.className =
      "bg-white p-5 rounded-xl shadow-md border border-gray-200";

    taskCard.innerHTML = `
      <h4 class="text-xl font-bold mb-2">${task.name}</h4>

      <p class="text-gray-600 mb-4">
        Due Date: ${task.date}
      </p>

      <button
        class="deleteBtn bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-lg"
      >
        Delete
      </button>
    `;

    const deleteBtn = taskCard.querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    taskContainer.appendChild(taskCard);
  });
}

// Add new task
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskName = taskInput.value.trim();
  const dueDate = dateInput.value;

  if (taskName === "" || dueDate === "") {
    errorMessage.classList.remove("hidden");
    return;
  }

  errorMessage.classList.add("hidden");

  const newTask = {
    name: taskName,
    date: dueDate,
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  taskInput.value = "";
  dateInput.value = "";
});

// Load saved tasks when page opens
renderTasks();