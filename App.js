import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState("Brijen")
  const [age, setAge] = useState(24)

  return (
    <View style={styles.container}>
      <Text>Enter your name: </Text>
      <TextInput style={styles.input} onChangeText={(text) => setName(text)} placeholder="Enter your Name" />
      <Text>Enter your age: </Text>
      <TextInput style={styles.input} onChangeText={(text) => setAge(text)} placeholder="Enter your Age"  keyboardType='numeric'/>
      <Text>My name is {name} and my age is {age} years</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: "Black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 150
  }
});
