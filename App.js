/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/State/Store';
import Navigator from './src/Navigation/Navigator';

const App: () => React$Node = () => {
  return (
    <Provider store={configureStore().store}>
      <Navigator />
    </Provider>
  );
};

export default App;
