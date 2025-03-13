/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import HomeScreen from './src/screens/home';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default App;
