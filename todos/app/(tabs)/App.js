import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';
import TabBar from './TabBar'; 

//Initializing index to uniquely identify the todos
let todoIndex = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '', // Current value of the input field
      todos: [],     // Array to hold todo items
      type: 'All'   // Filter type: All, Active, or Complete
    };
    // Bind methods to the class instance
    this.submitTodo = this.submitTodo.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setType = this.setType.bind(this);
  }
  
  // Update inputValue in state when user types
  inputChange(inputValue) {
    this.setState({ inputValue });
  }
  // Creating a new todo and adding it to the list
  submitTodo() {
    // Ignore empty or whitespace user inputs
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }
    // Creating a new todo object
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    };
    todoIndex++;
    console.log(todo)
    // Adding the new todo task to the existing tasks
    const todos = [...this.state.todos, todo];
    this.setState({ todos, inputValue: '' });
  }
  
  // Toggle the 'complete' status of a todo
  toggleComplete(todoIndex) {
    const todos = this.state.todos.map(todo => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    this.setState({ todos });
  }
  // Delete a todo task by its index
  deleteTodo(todoIndex) {
    const todos = this.state.todos.filter(todo => todo.todoIndex !== todoIndex);
    this.setState({ todos });
  }
  // Set the current filter type
  setType(type) {
    this.setState({ type });
  }

  render() {
    const { inputValue, todos, type } = this.state;
    // Filter todos based on selected type
    let filteredTodos = todos;
    if (type === 'Active') {
      filteredTodos = todos.filter(todo => !todo.complete);
    } else if (type === 'Complete') {
      filteredTodos = todos.filter(todo => todo.complete);
    }

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input inputValue={inputValue} inputChange={this.inputChange} />
          <TodoList
            todos={filteredTodos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>

        {/* Bottom tab bar to filter todos */}
        <TabBar type={type} setType={this.setType} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20
  }
});

export default App;
