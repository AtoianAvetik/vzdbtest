import { combineReducers } from 'redux';

import { user } from './user';
import { ui } from './ui';
import { appState } from './appState';

export default combineReducers({
    user,
    ui,
    appState
});
