import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoButton from './TodoButton';

// Component to render a single todo item with "Done/Undo" and "Delete" butto
const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  if (!todo) {
    return null; 
  }

  return (
    <View style={styles.todoContainer}>
      <Text style={styles.todoText}>
        {todo.title}
      </Text>

      <View style={styles.buttons}>
        <TodoButton
          name={todo.complete ? 'Undo' : 'Done'}
          onPress={() => toggleComplete(todo.todoIndex)}
          complete={todo.complete}
        />
        <TodoButton
          name="Delete"
          onPress={() => deleteTodo(todo.todoIndex)}
          deleteButton
        />
      </View>
    </View>
  );
};

// Styles for the todo container and elements
const styles = StyleSheet.create({
  todoContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5
  },
  todoText: {
    fontSize: 16
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10
  }
});

export default Todo;
