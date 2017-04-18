import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//import editProfileReducer from './editProfileReducer';

export default combineReducers({
    routing: routerReducer,
    //editProfile: editProfileReducer
});