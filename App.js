import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState("Programming");
  const [person, setPerson] = useState({ name: "tony", age: 30 });

  const clickMe = () => {
    setName("Knowledge")
    setPerson({ name: "Brijen", age: 24 })
  }

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>My name is {person.name} and my age is {person.age}</Text>
      <View style={styles.button}>
        <Button title="change"  onPress={clickMe}/>
      </View>
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
  button: {
    backgroundColor: "red",
    padding: 10,
    margin: 20
  }
});
