import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
import paramsReducer from './paramsReducer';

export default combineReducers({
    images: imageReducer,
    params: paramsReducer
});