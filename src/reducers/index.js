import { combineReducers } from 'redux';
import headerStateReducer from './headerStateReducer';
import detailStateReducer from './detailStateReducer';

export default combineReducers({
    headerStateReducer,
    detailStateReducer
});