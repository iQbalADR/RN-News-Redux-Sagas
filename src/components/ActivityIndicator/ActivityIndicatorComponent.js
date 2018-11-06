import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import styles from './activityIndicatorComponent.style';

export default class activityIndicatorComponent extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.title}>
          {"LOADING"}
        </Text>
      </View>
    );
  }
};