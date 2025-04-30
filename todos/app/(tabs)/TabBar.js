import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

// TabBar component displays three tabs - All, Active, Complete
const TabBar = ({ type, setType }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.tab} onPress={() => setType('All')}>
        <Text style={[styles.tabText, type === 'All' && styles.activeTabText]}>All</Text>
      </Pressable>
      <Pressable style={styles.tab} onPress={() => setType('Active')}>
        <Text style={[styles.tabText, type === 'Active' && styles.activeTabText]}>Active</Text>
      </Pressable>
      <Pressable style={styles.tab} onPress={() => setType('Complete')}>
        <Text style={[styles.tabText, type === 'Complete' && styles.activeTabText]}>Complete</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  // Container for the tab bar
  container: {
    height: 50,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff'
  },
  // Style for each individual tab
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // Text style for tab labels
  tabText: {
    fontSize: 16,
    color: '#777'
  },
  // Style to the currently active tab
  activeTabText: {
    color: 'black',
    fontWeight: 'bold'
  }
});

export default TabBar;
