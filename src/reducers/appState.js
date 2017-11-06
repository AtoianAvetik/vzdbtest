import * as types from '../actions/actionTypes';

const eventDate = new Date('2017-11-29');

export const appState = (state = {event: true, state: 'event', daysLeft: 0}, { type, payload }) => {
    switch (type) {
        case types.FETCH_CURRENT_DATE:
            return state;
        case types.FETCH_CURRENT_DATE_COMPLETE:
            const currentDate = Date.parse(payload.date.toString());
            state.daysLeft = calculateDaysLeft(currentDate);
            switch (true){
                case state.daysLeft === 0:
                    state.state = 'event';
                    state.event = true;
                    break;
                case state.daysLeft < 0:
                    state.state = 'after';
                    state.event = false;
                    break;
                case state.daysLeft > 0:
                    state.state = 'before';
                    state.event = false;
                    break;
            }
            return state;
        default:
            return state;
    }
};

function calculateDaysLeft(currentDate) {
    let timeDiff = eventDate.getTime() - currentDate;
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}