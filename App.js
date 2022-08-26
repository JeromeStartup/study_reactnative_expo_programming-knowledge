import { View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Solid Button"
        type="solid"
        titleStyle={{ color: "yellow", fontSize: 30 }}
      />
      <Button
        title="Outline Button"
        type="outline"
        containerStyle={{ backgroundColor: "yellow" }}
        titleStyle={{ color: "red", fontSize: 30 }}
      />
      <Button
        title="Raise Button"
        type="solid"
        raised
      />
      <Button
        icon={<Ionicons name="md-checkmark-circle" size={32} color="green" />}
        title="Icon Button"
        color="white"
      />

      <Button title="loading" loading />
      <Button title="loading" loading={false} />
    </View>
  );
}


