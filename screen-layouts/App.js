import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen.js';
import ComponentScreen from './src/screens/ComponentScreen.js';
import ListScreen from './src/screens/ListScreen.js';
import ImageScreen from './src/screens/ImageScreen.js';
import CounterScreen from './src/screens/CounterScreen.js';
import ColorScreen from './src/screens/ColorScreen.js';
import AdjustableColorScreen from './src/screens/AdjColorScreen.js';
import AdjustableColorScreenRefactored from './src/screens/AdjColorScreenRefactor.js';
import CounterScreenRefactor from './src/screens/CounterScreenRefactor.js';
import TextScreen from './src/screens/TextScreen.js';
import BoxScreen from './src/screens/BoxScreen.js';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    AdjColor: AdjustableColorScreen,
    AdjColorRef: AdjustableColorScreenRefactored,
    CounterRef: CounterScreenRefactor,
    Text: TextScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
