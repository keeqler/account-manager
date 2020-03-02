import { combineReducers } from 'redux';

import auth from './auth/reducer';
import form from './form/reducer';

export default combineReducers({ auth, form });
