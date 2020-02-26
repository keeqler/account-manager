import { combineReducers } from 'redux';

import form from './form/reducer';
import auth from './auth/reducer';

export default combineReducers({ auth, form });
