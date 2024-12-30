import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Ahmed</Text>
      <Button onPress={() => navigation.navigate('Component')} title="Component Screen" />
      <Button onPress={() => navigation.navigate('List')} title="Flat Lists" />
      <Button onPress={() => navigation.navigate('Image')} title="Image Screen" />
      <Button onPress={() => navigation.navigate('Counter')} title="Counter Screen" />
      <Button onPress={() => navigation.navigate('Color')} title="Color Screen" />
      <Button onPress={() => navigation.navigate('AdjColor')} title="Adjustable Color Screen" />
      <Button
        onPress={() => navigation.navigate('AdjColorRef')}
        title="Adjustable Color Screen [Refactored]"
      />
      <Button
        onPress={() => navigation.navigate('CounterRef')}
        title="Counter Screen [Refactored]"
      />
      <Button onPress={() => navigation.navigate('Text')} title="Text Screen" />
      <Button onPress={() => navigation.navigate('Box')} title="Box Screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default HomeScreen;
