const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const errorMessage = document.getElementById("errorMessage");
const taskContainer = document.getElementById("taskContainer");

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

    <p class="text-gray-600">
      Due Date: ${dueDate}
    </p>
  `;

  // Add card to screen
  taskContainer.appendChild(taskCard);

  // Clear Inputs
  taskInput.value = "";
  dateInput.value = "";
});