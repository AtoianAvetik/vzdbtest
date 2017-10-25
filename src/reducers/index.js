import { combineReducers } from 'redux';

import { user } from './user';
import { ui } from './ui';
import { daysLeft } from './daysLeft';

export default combineReducers({
    user,
    ui,
    daysLeft
});
