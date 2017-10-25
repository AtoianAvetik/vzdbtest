import * as types from '../constants/actionTypes';

export const daysLeft = (state = '', { type, payload }) => {
    switch (type) {
        case types.SET_DAYS_LEFT:
            return payload;
        default:
            return state;
    }
};
