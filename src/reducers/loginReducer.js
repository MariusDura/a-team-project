import _ from 'lodash';


export default function (state = {
    isLoggedIn: false
}, action) {
    switch (action.type) {
        case 'LOGIN':
            return _.assign({}, state, { isLoggedIn: action.payload});
        default:
            return state;
    }
}