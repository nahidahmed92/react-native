import React, { useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const reducer = (state, action) => {
  // state === { count: number }
  // action === {type: 'increase' || 'decrease' }

  switch (action.type) {
    case 'increase':
      return { ...state, count: state.count + action.payload };
    case 'decrease':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreenRefactor = () => {
  // TODO: use reducer instead of useState
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increase', payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrease', payload: 1 });
        }}
      />
      <Text>Counter Screen [Refactored]</Text>
      <Text>Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreenRefactor;
