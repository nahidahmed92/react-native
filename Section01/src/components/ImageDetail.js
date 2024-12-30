import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ image, title, score }) => {
  return (
    <View>
      <Image source={image} style={styles.size} />
      <Text style={styles.fontSize}>{title}</Text>
      <Text style={styles.fontSize}>Cheater Level: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  size: {
    width: 180,
    height: 180,
  },
  fontSize: {
    fontSize: 20,
  },
});

export default ImageDetail;
