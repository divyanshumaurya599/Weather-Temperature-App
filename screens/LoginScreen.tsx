// screens/LoginScreen.tsx
import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {signIn} from '../firebase/config';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signIn(email, password)
      .then(userCredential => {
        Alert.alert('Login Successful');
        console.log(userCredential.user);
      })
      .catch(error => {
        Alert.alert('Login Failed', error.message);
      });
  };

  return (
    <View style={{padding: 20}}>
      <Text>EmailesS</Text>
      <TextInput
        onChangeText={setEmail}
        value={email}
        style={{borderWidth: 1, marginBottom: 10}}
      />
      <Text>Passwvvvvvvveguiiugiugeiueugvvvvvvord</Text>
      <TextInput
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        style={{borderWidth: 1, marginBottom: 10}}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
