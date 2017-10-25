import { createAction } from 'redux-actions';
import * as types from '../constants/actionTypes';

export const setDaysLeft = (daysLeft) => (
    createAction(types.SET_DAYS_LEFT)(daysLeft)
);