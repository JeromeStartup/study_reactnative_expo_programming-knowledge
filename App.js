import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: "Brijen", key: "1" },
    { name: "Jeff", key: "2" },
    { name: "Tony", key: "3" },
    { name: "Raj", key: "4" },
    { name: "Bruce", key: "5" }
  ]);

  const pressHandler = (name) => {
    console.log(name);
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => (

          <View>
            <TouchableOpacity onPress={() => pressHandler(item.name)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
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
    marginTop: 20
  },
  item: {
    fontSize: 22,
    backgroundColor: "yellow",
    marginTop: 30,
    padding: 20
  }
});
