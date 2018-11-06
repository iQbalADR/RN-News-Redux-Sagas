import React, {Component} from 'react';
import { WebView } from 'react-native';

export default class WebNews extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
    });

    constructor(props) {
        super(props);
    }

    render() {
        const { url } = this.props.navigation.state.params;
        return (
            <WebView
                source={{uri: `${url}`}}
                style={{marginTop: 20}}
            />
        );
    }
}