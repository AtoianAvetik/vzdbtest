import { createAsyncCreator } from '../services/asyncCreators';
import * as api from '../services/api';
import * as types from './actionTypes';

export const setAppState = () => (
    createAsyncCreator(
        types.FETCH_CURRENT_DATE,
        types.FETCH_CURRENT_DATE_COMPLETE,
        () => api.get('date')
    )
);
