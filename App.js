import { useState } from 'react';
import { Button, Image, View } from 'react-native';
import styles from './styles';

export default function App() {
  const [dice, setDice] = useState(1);

  const images = {
    pics: {
      '0': require('./assets/dice/dice-six-faces-one.png'),
      '1': require('./assets/dice/dice-six-faces-two.png'),
      '2': require('./assets/dice/dice-six-faces-three.png'),
      '3': require('./assets/dice/dice-six-faces-four.png'),
      '4': require('./assets/dice/dice-six-faces-five.png'),
      '5': require('./assets/dice/dice-six-faces-six.png')
    }
  }
  return (
    <View style={styles.container}>
      <Image source={images.pics[dice]} />
      <Button title="Roll" onPress={() => setDice(Math.floor(Math.random() * 6))} />
    </View>
  );
}


