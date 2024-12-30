import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CounterScreen = () => {
  const [counter, SetCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          SetCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          SetCounter(counter - 1);
        }}
      />
      <Text>Counter Screen</Text>
      <Text>Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
