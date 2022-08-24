import { TextInput, TouchableWithoutFeedback, View, Keyboard } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log("keyboard is dissmissed");
    }}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Enter your name" />
      </View>
    </TouchableWithoutFeedback>
  );
}


