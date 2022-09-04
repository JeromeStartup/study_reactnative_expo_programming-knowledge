import { useState } from 'react';
import { Alert, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

export default function App() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <Button
          title="Solid Button"
          type="solid"
          titleStyle={{ color: "yellow", fontSize: 30 }}

        />

        <Button
          title="Outline Button"
          type="outline"
          titleStyle={{ color: "red" }}
          containerStyle={{ marginTop: 10, backgroundColor: "yellow" }}
        />

        <Button
          title="Solid Button"
          type="solid"
          titleStyle={{ color: "yellow", fontSize: 30 }}
          containerStyle={{ marginTop: 10 }}
          raised
        />

        <Button
          title="loading"
          type="solid"
          titleStyle={{ color: "yellow", fontSize: 30 }}
          containerStyle={{ marginTop: 10 }}
          loading={true}
        />
      </View>

      <View>
        <TextInput
          placeholder='enter your name'
          value={name}
          onChangeText={(text) => setName(text)}
          onSubmitEditing={() => Alert.alert("Welcome", "Hello" + name + ", welcome to our app")}
        />

        <Button
          title="Submit"
          type="solid"
          containerStyle={{ marginTop: 20 }}
          onPress={() => Alert.alert("Welcome", "Hello" + name + ", welcome to our app")}
        />
      </View>
    </View>
  );
}


