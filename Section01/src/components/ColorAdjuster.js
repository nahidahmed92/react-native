import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ColorAdjuster = ({ color, onDecrease, onIncrease }) => {
  return (
    <View>
      <Text style={styles.header}>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
  },
});

export default ColorAdjuster;
