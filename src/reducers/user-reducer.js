import * as t from '../constants/action-types';
import config from '../config.js';

const initialState = {
    authenticated: null,
    greet: '',
    authenticateCheckComplete: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case t.USER_TWITER_AUTH_SUCCESS:
            return { ...payload };
        case t.USER_TWITER_AUTH_FAIL:
            return { ...payload};  
		default:
			return state;
	}
};