import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [fruit, setFruit] = useState([
    { name: "Apple", id: "1" },
    { name: "Mango", id: "2" },
    { name: "Banana", id: "3" },
    { name: "Orange", id: "4" },
    { name: "grapes", id: "5" },
    { name: "starawberry", id: "6" },
    { name: "pineapple", id: "7" },
    { name: "water melon", id: "8" },
    { name: "papaw", id: "9" }
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={fruit}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    fontSize: 22,
    backgroundColor: "yellow",
    marginTop: 20,
    padding: 20
  }
});
