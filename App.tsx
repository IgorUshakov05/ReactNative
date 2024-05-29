import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, ListRenderItem } from 'react-native';

interface Task {
  key: string;
  name: string;
}

const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, { key: Math.random().toString(), name: task }]);
      setTask('');
    }
  };

  const renderItem: ListRenderItem<Task> = ({ item }) => (
    <Text style={styles.task}>{item.name}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  task: {
    padding: 10,
    fontSize: 18,
    backgroundColor: '#fff',
    marginBottom: 5,
    borderRadius: 5,
  },
});

export default App;
