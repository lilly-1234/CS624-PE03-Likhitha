# CS624-PE03-Likhitha

A simple functional Todo app built using **React Native**. It allows users to add, complete, delete, and filter todo tasks using a tab-based UI.

## Features

- Add new todo items
- Mark todos as complete or undo them
- Delete tasks
- Filter todos using tab bar:All, Active, Complete

**Input:**  
The user types in a task using the input field and presses the "Submit" button. They can also select a filter tab (All, Active, or Complete), or press buttons to mark tasks as "Done", "Undo", or "Delete".

**Process:**  
The app processes the input by creating, modifying, or removing todo items in the internal state. Based on the selected filter, the app dynamically updates the displayed list. Tapping "Done" or "Undo" changes the completion status, and tapping "Delete" removes the task from the state.

**Output:**  
The updated todo list is rendered on the screen. Users see their task added, toggled as complete or incomplete, or removed. The visible list updates based on the selected tab to show all tasks, only active ones, or completed ones.


## Components

- `App.js` — Root component that manages state and logic
- `Heading.js` — Displays the app heading
- `Input.js` — Input field for entering todos
- `Button.js` — Submit button component
- `TodoList.js` — Renders list of todos
- `Todo.js` — Renders each individual todo with action buttons
- `TodoButton.js` — Reusable button for actions (Done, Undo, Delete)
- `TabBar.js` — Bottom navigation bar for filtering todos



