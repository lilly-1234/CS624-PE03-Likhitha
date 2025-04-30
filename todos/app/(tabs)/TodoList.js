import React from 'react'
import { View } from 'react-native'

import Todo from './Todo'
// Component to render a list of todos
// Props:
// - todos: array of todo objects
// - deleteTodo: function to delete a specific todo
// - toggleComplete: function to toggle completion status

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  
  // Map through todos array and create Todo components
  let todosArr = todos.map((todo, i) => {
    return (
      <Todo
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        key={i}
        todo={todo} />
    )
  })
  
  // Render all the todo items inside a View
  return (
    <View>
      {todosArr}
    </View>
  )
}

export default TodoList