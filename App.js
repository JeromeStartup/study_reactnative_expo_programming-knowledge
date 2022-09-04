import { useState } from 'react';
import { Text, View } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import styles from './styles';

export default function App() {
  const [message, setMessage] = useState(10)
  return (
    <View style={styles.container}>
      <View style={styles.container}>

        <Text>success</Text>
        <Badge status="success" />

        <Text>Error</Text>
        <Badge status="error" />

        <Text>Primary</Text>
        <Badge status="primary" />

        <Text>warning</Text>
        <Badge status="warning" />
      </View>

      <View style={styles.container}>
        <View>
          <Avatar
            rounded
            source={{
              uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
            }}
            size="large"
          />
        </View>
        <Badge
          value={message}
          containerStyle={{ position: "absolute", left: 80, top: 25 }}
        />
      </View>

    </View>
  );
}


