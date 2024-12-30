import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ColorAdjuster from '../components/ColorAdjuster.js';

const COLOR_INCREMENT = 15;
const COLOR_DECREMENT = -15;

// action - this is an object thats tells me how i need to change my state object
const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { colorToChange: 'red' || 'green' || 'blue', amount 15 || -15 }

  // refactor based on community guidelines
  switch (action.type) {
    case 'red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const AdjustableColorScreenRefactor = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorAdjuster
        color="Red"
        onDecrease={() => dispatch({ type: 'change_red', payload: COLOR_DECREMENT })}
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
      />
      <ColorAdjuster
        color="Green"
        onDecrease={() => dispatch({ type: 'change_green', payload: COLOR_DECREMENT })}
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
      />
      <ColorAdjuster
        color="Blue"
        onDecrease={() => dispatch({ type: 'change_blue', payload: COLOR_DECREMENT })}
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
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

export default AdjustableColorScreenRefactor;
