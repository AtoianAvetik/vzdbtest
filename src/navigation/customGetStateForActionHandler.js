import React from 'react';

const backFromScreenOff = [];

export default function customGetStateForActionHandler(action, state, prevGetStateForActionStack) {
    if (action.params && action.params.disableBackFromScreen) {
        backFromScreenOff.push(action.routeName)
    }
    //replace prev screen to current screen in stack
    if ((state && action.type === 'ReplaceCurrentScreen') || (action.params && action.params.replaceCurrentScreen)) {
        const routes = state.routes.slice(0, state.routes.length - 1);
        routes.push(action);
        return {
            ...state,
            routes,
            index: routes.length - 1,
        };
    }
    // Do not allow to go back from Login
    if (action.type === "Navigation/BACK" && state && (backFromScreenOff.indexOf(state.routes[state.index].routeName) !== -1)) {
        return null;
    }
    // back to seted screen
    if (action.type === "Navigation/BACK" && state && state.routes[state.index].params && state.routes[state.index].params.backScreen) {
        const newIndex = state.routes.findIndex((el) => {
            return el.routeName === state.routes[state.index].params.backScreen;
        });
        const newRoutes = state.routes.filter((r, i) => i <= newIndex);
        return prevGetStateForActionStack(action, { index: newIndex, routes: newRoutes });
    }
    // Remove prev screen from stack
    if ( state && action.type === 'RemovePrevFromStack' ) {
        const routes = state.routes.slice();
        routes.splice(routes.length - 2, 1);
        return {
            ...state,
            routes,
            index: routes.length - 1,
        };
    }
    // Remove prev screen from stack
    if ( state && action.type === "Navigation/NAVIGATE" && action.params && action.params.removePrevFromStack ) {
        const routes = state.routes.slice();
        routes.splice(routes.length - 1, 1);
        routes.push(action);
        return {
            ...state,
            routes,
            index: routes.length - 1,
        };
    }
    return prevGetStateForActionStack(action, state);
}