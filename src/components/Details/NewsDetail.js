import React, {Component} from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './detail.style';

import ActionIndicator from '../ActivityIndicator/ActivityIndicatorComponent';
import ViewList from '../FlatList/FlatListComponent';

import { getNewsDetails } from '../../actions'

class NewsDetail extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.name}`,
    });

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.navigation.state.params,
        };
    }

    componentDidMount() {
        const { id } = this.props.navigation.state.params;
        this.props.getNewsDetails(id);
    }

    navigateTo = (props) => {
        const { title, url } = props;
        this.props.navigation.navigate('WebNews',{
          title,
          url
        });
    }

    render() {
        const { data = [], isFetching, isDetail = true } = this.props;
        return (
          <View style={styles.container}>
            <ViewList data={data} navigateTo={this.navigateTo} isDetail={isDetail}></ViewList>
            { isFetching && <ActionIndicator/> }
          </View>
        );
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.detailStateReducer.isFetching,
    data: state.detailStateReducer.data,
});
  
const mapDispatchToProps = {
    getNewsDetails
}
  
export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail)