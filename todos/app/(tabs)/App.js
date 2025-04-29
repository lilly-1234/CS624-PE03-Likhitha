import { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Pressable } from 'react-native'; 

import Heading from './Heading';
import Input from './Input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    };
  }

  inputChange(inputValue) {
    this.setState({ inputValue });
  }
  // // Function to handle todo submit button
  submitTodo = () => {
    const { inputValue, todos } = this.state;
    // Check if inputValue is not empty
    if (inputValue.trim() !== '') {
      const todo = {
        title: inputValue, // Create a new todo task with title
      };
      // Create a new array by adding the new todo task to the existing todos tasks
      const newTodos = [...todos, todo];

      this.setState(
        { todos: newTodos, inputValue: '' },
        () => {
          // Log the input value that was added to the todo
          console.log('Input Value:', inputValue);
        }
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <View>
            <Heading />
            <Input 
              inputValue={this.state.inputValue}
              inputChange={(text) => this.inputChange(text)}
            />
            
            {/* Submit Button Customization using pressing */}
            <Pressable style={styles.button} onPress={this.submitTodo}>
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>

          </View>
        </ScrollView>
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
  },
  button: {
    backgroundColor: 'white', 
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#black', 
    fontSize: 16,
  }
});

export default App;
