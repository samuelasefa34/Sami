function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dateInput = document.getElementById("dateInput");
  const taskText = taskInput.value.trim();
  const taskDate = dateInput.value;

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  // Checkbox
  const checkbox = document.createElement("span");
  checkbox.className = "checkbox";
  checkbox.onclick = () => {
    checkbox.classList.toggle("checked");
    li.classList.toggle("completed");
  };

  // Task Text & Date
  const taskInfo = document.createElement("div");
  taskInfo.className = "task-info";

  const textSpan = document.createElement("span");
  textSpan.className = "task-text";
  textSpan.textContent = taskText;

  const dateSpan = document.createElement("span");
  dateSpan.className = "task-date";
  dateSpan.textContent = taskDate ? `📅 ${taskDate}` : "";

  taskInfo.appendChild(textSpan);
  if (taskDate) taskInfo.appendChild(dateSpan);

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "×";
  deleteBtn.onclick = () => li.remove();

  // Add all to li
  li.appendChild(checkbox);
  li.appendChild(taskInfo);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  // Clear inputs
  taskInput.value = "";
  dateInput.value = "";
}
