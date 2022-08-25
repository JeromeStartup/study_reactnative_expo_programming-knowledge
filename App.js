import { View } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        containerStyle={{ height: 50, width: 50 }}
        source={{
          uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        }}
      />
       <Avatar
        rounded
        containerStyle={{ height: 50, width: 50 }}
        source={{
          uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        }}
      />
       <Avatar
        rounded
        containerStyle={{ height: 50, width: 50 }}
        source={{
          uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
        }}
      />
    </View>
  );
}


