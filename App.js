import { Text, TextInput, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import styles from './styles';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 10, backgroundColor: 'yellow' }} key={1}>
        <Text>Normal TextInput</Text>
        <TextInput placeholder='email' />
      </View>

      <View style={{ marginTop: 10, backgroundColor: 'pink' }} key={2}>
        <Text>React Native TextInput</Text>
        <Input placeholder='email' />
        <Input placeholder='email' type='email' leftIcon={<AntDesign name="mail" size={24} color="black" />} />
        <Input placeholder='password' />
        <Input placeholder='password' secureTextEntry rightIcon={<MaterialCommunityIcons name="onepassword" size={24} color="red" />} />
      </View>

      <View style={{ marginTop: 30 }} key={3}>
        <Text>State Exercise</Text>
        <Input placeholder='email' type='email' leftIcon={<AntDesign name="mail" size={24} color="black" />}
          onChangeText={(text) => setEmail(text)}
        />
        <Input placeholder='password' secureTextEntry leftIcon={<MaterialCommunityIcons name="onepassword" size={24} color="black" />}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          title="Login"
          type="outline"
          onPress={() => {
            console.log(email);
            console.log(password);
          }}
        />
      </View>
    </View>
  );
}


