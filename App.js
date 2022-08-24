import { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import styles from './styles';

export default function App() {
  const [age, setAge] = useState(0);

  const ageHandler = () => {
    if (age > 21) {
      Alert.alert("Yay!!", "You can drink")
    } else {
      Alert.alert("oops", "Sorry, You can not drink")
    }
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <TextInput style={styles.input} onChangeText={(text) => setAge(text)} />
      <Button title="Can I Drink" onPress={() => ageHandler()} />
    </View>
  );
}


