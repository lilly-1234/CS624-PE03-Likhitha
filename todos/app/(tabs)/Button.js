import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
// Button component for submitting todos
const Button = ({ submitTodo }) => {
  return (
    // using pressable to custom the buttom it calls submitTodo when pressed
    <Pressable style={styles.button} onPress={submitTodo}>
      <Text style={styles.buttonText}>Submit</Text>
    </Pressable>
  );
};

// Styling for the button and its text
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 4,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 15,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  }
});

export default Button;