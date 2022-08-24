import { Image, View } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require('./assets/marvel.jpg')} />

      </View>
    </View>
  );
}


