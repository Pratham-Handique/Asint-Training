let tasks = [];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("taskForm");
  const taskList = document.getElementById("taskList");

  loadTasksAsync();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();

    if (task) {
      // CREATE
      addTask(task, (err, result) => {
        if (err) {
          console.error("Add task error:", err);
        } else {
          taskInput.value = "";
          renderTasks();
        }
      });
    }
  });

  taskList.addEventListener("click", async (e) => {
    const index = e.target.dataset.index;
    if (e.target.classList.contains("delete")) {
      try {
        await deleteTask(index);
        renderTasks();
      } catch (err) {
        console.error("Delete task error:", err);
      }
    } else if (e.target.classList.contains("edit")) {
      const newTask = prompt("Edit task:", tasks[index]);
      if (newTask) {
        try {
          await updateTask(index, newTask);
          renderTasks();
        } catch (err) {
          console.error("Update task error:", err);
        }
      }
    }
  });
});

function addTask(task, callback) {
  setTimeout(() => {
    if (!task) return callback("Invalid task", null);
    tasks.push(task);
    callback(null, task);
  }, 200);
}

async function loadTasksAsync() {
  try {
    const result = await getTasks();
    renderTasks(result);
  } catch (err) {
    console.error("Load error:", err);
  }
}

function getTasks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (tasks) {
        resolve(tasks);
      } else {
        reject("No tasks found");
      }
    }, 300);
  });
}

async function updateTask(index, newTask) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (tasks[index]) {
        tasks[index] = newTask;
        resolve(newTask);
      } else {
        reject("Task not found");
      }
    }, 300);
  });
}

async function deleteTask(index) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (tasks[index]) {
        tasks.splice(index, 1);
        resolve();
      } else {
        reject("Task not found");
      }
    }, 300);
  });
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <span>
        <button class="edit" data-index="${index}">Edit</button>
        <button class="delete" data-index="${index}">Delete</button>
      </span>
    `;
    taskList.appendChild(li);
  });
}
