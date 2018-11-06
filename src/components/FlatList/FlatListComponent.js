import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Moment from 'moment';

import RowHome from './Row/RowHome';
import RowDetail from './Row/RowDetail';
import styles from './flatListComponent.styles';


export default class flatListComponent extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    Moment.locale('en');
    const { data, navigateTo, isDetail } = this.props;
    return (
      <FlatList
          style={styles.container}
          data={data}
          renderItem={isDetail 
                      ? ({item}) => <RowDetail {...item} navigateTo={navigateTo} />
                      : ({item}) => <RowHome {...item} navigateTo={navigateTo} />}
          keyExtractor={(item, index) => index.toString()}
      />
    );
  }
};