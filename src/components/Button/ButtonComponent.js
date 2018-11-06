import React, { Component } from 'react';
import { Keyboard, TouchableOpacity, Text } from 'react-native';

import styles from './buttonComponent.styles';

export default class ButtonComponent extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    const { title, onPress} = this.props;

    return (
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.title}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
};