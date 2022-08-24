import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function App() {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    console.warn("DOM is updated", number)

    if(number>30){
      console.warn("DOM is updated to 30", number)
    }
  })
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{number}</Text>
      <Button title="Update" onPress={() => setNumber(number + 1)} />
    </View>
  );
}


