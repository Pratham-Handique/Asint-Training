// Task Manager Class
class TaskManager {
    constructor() {
        this.tasks = [];
        this.loadTasks();
    }

    // Create - Add a new task
    async addTask(description) {
        const newTask = {
            id: Date.now(),
            description,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        this.tasks.push(newTask);
        await this.saveTasks();
        return newTask;
    }

    // Read - Get all tasks
    async getTasks() {
        await this.loadTasks();
        return this.tasks;
    }

    // Update - Toggle task completion status
    async toggleTaskCompletion(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            task.updatedAt = new Date().toISOString();
            await this.saveTasks();
        }
        return task;
    }

    // Update - Edit task description
    async editTask(taskId, newDescription) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.description = newDescription;
            task.updatedAt = new Date().toISOString();
            await this.saveTasks();
        }
        return task;
    }

    // Delete - Remove a task
    async deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        await this.saveTasks();
    }

    // Save tasks to localStorage
    async saveTasks() {
        return new Promise(resolve => {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            resolve();
        });
    }

    // Load tasks from localStorage
    async loadTasks() {
        return new Promise(resolve => {
            const storedTasks = localStorage.getItem('tasks');
            this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
            resolve();
        });
    }
}

// UI Controller
class TaskManagerUI {
    constructor(taskManager) {
        this.taskManager = taskManager;
        this.taskInput = document.getElementById('taskInput');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.taskList = document.getElementById('taskList');
        
        this.addEventListeners();
        this.renderTasks();
    }

    addEventListeners() {
        this.addTaskBtn.addEventListener('click', async () => {
            await this.handleAddTask();
        });
        
        this.taskInput.addEventListener('keypress', async (e) => {
            if (e.key === 'Enter') {
                await this.handleAddTask();
            }
        });
    }

    async handleAddTask() {
        const description = this.taskInput.value.trim();
        if (description) {
            await this.taskManager.addTask(description);
            this.taskInput.value = '';
            await this.renderTasks();
        }
    }

    async renderTasks() {
        const tasks = await this.taskManager.getTasks();
        this.taskList.innerHTML = '';
        
        tasks.forEach(task => {
            const taskElement = document.createElement('li');
            taskElement.className = `task-item ${task.completed ? 'completed' : ''}`;
            taskElement.innerHTML = `
                <span>${task.description}</span>
                <div class="task-actions">
                    <button class="toggle-btn" data-id="${task.id}">
                        ${task.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button class="edit-btn" data-id="${task.id}">Edit</button>
                    <button class="delete-btn" data-id="${task.id}">Delete</button>
                </div>
            `;
            
            this.taskList.appendChild(taskElement);
        });
        
        // Add event listeners to dynamically created buttons
        document.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const taskId = Number(e.target.getAttribute('data-id'));
                await this.taskManager.toggleTaskCompletion(taskId);
                await this.renderTasks();
            });
        });
        
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const taskId = Number(e.target.getAttribute('data-id'));
                const task = this.taskManager.tasks.find(t => t.id === taskId);
                if (task) {
                    const newDescription = prompt('Edit task:', task.description);
                    if (newDescription !== null) {
                        await this.taskManager.editTask(taskId, newDescription);
                        await this.renderTasks();
                    }
                }
            });
        });
        
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const taskId = Number(e.target.getAttribute('data-id'));
                if (confirm('Are you sure you want to delete this task?')) {
                    await this.taskManager.deleteTask(taskId);
                    await this.renderTasks();
                }
            });
        });
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    const taskManager = new TaskManager();
    new TaskManagerUI(taskManager);
});