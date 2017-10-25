import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'

import { Root } from './src';
import configureStore from './src/store'

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <Root />
    </Provider>
);

AppRegistry.registerComponent('VZDBTest', () => App);
