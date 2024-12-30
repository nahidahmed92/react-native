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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
