import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ImageDetail from '../components/ImageDetail';
import ListScreen from './ListScreen';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Nahid Ahmed" image={require('../../assets/nahid.jpg')} score={0} />
      <ImageDetail title="Forida Ahmed" image={require('../../assets/forida.jpg')} score={10} />
      <ImageDetail title="Sean Blair" image={require('../../assets/sean.jpg')} score={10} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
