import { useState } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

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
    <View style={[{ marginTop: 40, padding: 20, backgroundColor: 'pink' }]}>
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

