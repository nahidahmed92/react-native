import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, SetPassword] = useState('');

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newValue) => {
          setName(newValue);
        }}
        style={styles.textInput}
        value={name}
      />
      <Text>Hi! My name is {name}</Text>

      <Text>Enter Password:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newPass) => {
          SetPassword(newPass);
        }}
        style={styles.textInput}
        value={password}
      />
      {password.length > 5 ? (
        <Text style={{ color: 'green' }}>Password requirement meant</Text>
      ) : (
        <Text style={{ color: 'red' }}>Password must be longer than 5 characters</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default TextScreen;
