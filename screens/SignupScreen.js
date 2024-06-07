// screens/SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AnimatedBackground from '../components/AnimatedBackground';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [homeAddress, setHomeAddress] = useState('');

  const handleSubmit = () => {
    navigation.navigate('Home');
  };

  return (
    <AnimatedBackground>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Create Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Surname"
          value={surname}
          onChangeText={setSurname}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Home Address"
          value={homeAddress}
          onChangeText={setHomeAddress}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </AnimatedBackground>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
  },
});
