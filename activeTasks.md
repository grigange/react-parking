### **To-Do List Application** 📝

A foundational React project that covers the essentials of state management and component interaction.

---

### **Requirements**

* **User Interface**:
    * An **input field** for adding new tasks.
    * A button to **submit** the new task.
    * A list displaying all **current tasks**.
    * A "Delete" button next to each task to **remove it** from the list.

* **State Management**:
    * Use the `useState` hook to manage an array of task objects.
    * Each task object should have a unique `id` and `title`, `detail` properties.

* **Core Functionality**:
    * **Adding Tasks**: When a user types a task and clicks "Add," a new object is created and added to the state array.
    * **Displaying Tasks**: The component should map over the state array and render each task.
    * **Deleting Tasks**: Clicking a task's "Delete" button should filter the task out of the state array, causing the component to re-render without it.

---

### **Bonus Challenges**

* Add a "Mark as Complete" button for each task. When clicked, it should change the task's style (e.g., add a strikethrough).
* Implement a button to clear all completed tasks.
* Store the tasks in the browser's local storage so they persist even after a page refresh.