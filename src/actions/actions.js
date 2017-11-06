import { createAction } from 'redux-actions';
import * as types from './actionTypes';

export const setAppState = (appState) => (
    createAction(types.SET_APP_STATE)(appState)
);