import { useState } from 'react';
import { Alert, Button, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import styles from './styles';

export default function App() {
  const [reading, setReading] = useState(false);
  const [writing, setWriting] = useState(false);
  const [music, setMusic] = useState(false);

  const hobbies = []

  const click = () => {
    if (reading === true) {
      hobbies.push("reading")
    }
    if (writing === true) {
      hobbies.push("writing")
    }
    if (music === true) {
      hobbies.push("music")
    }

    Alert.alert("Hobbies", "Hello user, your hobbies are " + hobbies.toString())
  }
  return (
    <View style={styles.container}>
      <CheckBox
        title="Reading"
        checked={reading}
        onPress={() => setReading(!reading)}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
      />
      <CheckBox title="Writing" checked={writing} onPress={() => setWriting(!writing)} checkedTitle="Writing is my hobby" />
      <CheckBox title="Music" checked={music} onPress={() => setMusic(!music)} checkedColor="red" />

      <Button title='Click' onPress={click} />
    </View>
  );
}


