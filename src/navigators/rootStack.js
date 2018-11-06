import { createStackNavigator } from 'react-navigation';
import Home from '../components/Home/Home';
import NewsDetail from '../components/Details/NewsDetail';
import WebNews from '../components/WebView/Web';

const RootStack = createStackNavigator({
    Home: {
        screen: Home,
    },
    NewsDetail: {
        screen: NewsDetail
    },
    WebNews: {
        screen: WebNews
    }
},{
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
});

export default RootStack;