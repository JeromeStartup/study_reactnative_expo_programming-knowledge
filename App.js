import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [fruit, setFruit] = useState([
    { name: "Apple", key: "1" },
    { name: "Mango", key: "2" },
    { name: "Banana", key: "3" },
    { name: "Orange", key: "4" },
    { name: "grapes", key: "5" },
    { name: "starawberry", key: "6" },
    { name: "pineapple", key: "7" },
    { name: "water melon", key: "8" },
    { name: "papaw", key: "9" }
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
        {
          fruit.map((item) => {
            return (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )
          })
        }
      </ScrollView>
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
