import { useState } from 'react';
import { Alert, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

export default function App() {
  const [name, setName] = useState("");
  
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='enter your name'
        value={name}
        onChangeText={(text) = setName(text)}
      />

      <Button
        title="Submit"
        type="solid"
        containerStyle={{ marginTop: 20 }}
        onPress={() => Alert.alert("Welcome", "Hello" + name + ", welcome to our app")}
      />
    </View>
  );
}


