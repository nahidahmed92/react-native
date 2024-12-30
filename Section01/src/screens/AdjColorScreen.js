import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ColorAdjuster from '../components/ColorAdjuster.js';

const COLOR_INCREMENT = 15;
const COLOR_DECREMENT = 10;

const AdjustableColorScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
    }
  };

  return (
    <View>
      <ColorAdjuster
        color="Red"
        onDecrease={() => setColor('red', -1 * COLOR_DECREMENT)}
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
      />
      <ColorAdjuster
        color="Green"
        onDecrease={() => setGreen(green - COLOR_DECREMENT)}
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
      />
      <ColorAdjuster
        color="Blue"
        onDecrease={() => setBlue(blue - COLOR_DECREMENT)}
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          alignSelf: 'center',
          marginTop: 20,
        }}
      />
      <Text style={{ alignSelf: 'center' }}>
        RGB({red}, {green}, {blue})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AdjustableColorScreen;
