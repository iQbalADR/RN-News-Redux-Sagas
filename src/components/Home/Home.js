/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import styles from './home.style';
import { connect } from 'react-redux';

import ActionIndicator from '../ActivityIndicator/ActivityIndicatorComponent';
import ViewList from '../FlatList/FlatListComponent';

import { getNewsHeaders } from '../../actions'

class Home extends Component {
  static navigationOptions = {
    title: 'News',
  };

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.getNewsHeaders();
  }

  navigateTo = (props) => {
    const { id, name } = props;
    this.props.navigation.navigate('NewsDetail',{
      id,
      name
    });
  }

  render() {
    const { data, isFetching, isDetail = false } = this.props;
    return (
      <View style={styles.container}>
        <ViewList data={data} navigateTo={this.navigateTo} isDetail={isDetail}></ViewList>
        { isFetching && <ActionIndicator/> }
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.headerStateReducer.isFetching,
  data: state.headerStateReducer.data,
});

const mapDispatchToProps = {
  getNewsHeaders
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)