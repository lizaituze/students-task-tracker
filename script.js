const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const errorMessage = document.getElementById("errorMessage");
const taskContainer = document.getElementById("taskContainer");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskName = taskInput.value.trim();
  const dueDate = dateInput.value;

  // Validation
  if (taskName === "" || dueDate === "") {
    errorMessage.classList.remove("hidden");
    return;
  }

  errorMessage.classList.add("hidden");

  // Create Task Card
  const taskCard = document.createElement("div");

  taskCard.className =
    "bg-white p-5 rounded-xl shadow-md border border-gray-200";

  taskCard.innerHTML = `
  <h4 class="text-xl font-bold mb-2">${taskName}</h4>

  <p class="text-gray-600 mb-4">
    Due Date: ${dueDate}
  </p>

  <button
    class="deleteBtn bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-lg"
  >
    Delete
  </button>
`;
const deleteBtn = taskCard.querySelector(".deleteBtn");

deleteBtn.addEventListener("click", () => {
  taskCard.remove();
});
  // Add card to screen
  taskContainer.appendChild(taskCard);

  // Clear Inputs
  taskInput.value = "";
  dateInput.value = "";
});