import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Home from './src/components/Home/Home';
import store from './src/store';
import RootStack from './src/navigators/rootStack'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}