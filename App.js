import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, TouchableWithoutFeedback,Keyboard, View } from 'react-native';
import styles from './styles';

export default function App() {
  const [name, setName] = useState("");

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={(text) => setName(text)} />
        <TouchableOpacity onPress={() => Alert.alert("Your Details", "Your name is " + name.toString())}>
          <View style={styles.button}>
            <Text>Press</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}


