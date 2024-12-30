import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');

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
