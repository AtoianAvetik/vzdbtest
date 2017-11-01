import React from 'react';
import { StackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import * as styles from '../styles/main';
import { TopBar } from "../components/TopBar";
import { Welcome } from '../containers/Welcome';
import { LocationInput } from '../containers/LocationInput';
import { StartScreen } from '../containers/StartScreen';
import { InfoScreen } from "../containers/InfoScreen";

export const MainStack = StackNavigator(
    {
        Welcome: {screen: Welcome},
        LocationInput: {screen: LocationInput},
        StartScreen: {
            screen: StartScreen,
            navigationOptions: {
                header: <TopBar rightButton={{
                    type: "info",
                    style: styles.start.topBarButton,
                    nav: "InfoScreen"
                }}/>,
            }
        },
        InfoScreen: {
            screen: InfoScreen,
            navigationOptions: {
                header: <TopBar rightButton={{
                    type: "close",
                    style: styles.start.topBarButton
                }}/>,
            }
        }
    },
    {
        headerMode : 'float',
        mode : 'card ',
        navigationOptions: {
            header: <TopBar />,
        },
        transitionConfig: getSlideFromRightTransition
    }
);

const backToScreenOff = [];
const backFromScreenOff = [];
const prevGetStateForActionHomeStack = MainStack.router.getStateForAction;
MainStack.router.getStateForAction = (action, state) => {
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
    // Do not allow to go back to Login
    if (action.type === "Navigation/BACK" && state) {
        const newRoutes = state.routes.filter(r => backToScreenOff.indexOf(r.routeName) === -1);
        const newIndex = newRoutes.length - 1;
        return prevGetStateForActionHomeStack(action, { index: newIndex, routes: newRoutes });
    }
    // state && console.warn(JSON.stringify(state.routes));
    // Remove prev screen from stack
    if ( state && action.type === 'RemovePrevFromStack' ) {
        // const routes = state.routes.slice();
        // routes.splice(routes.length - 2, 1);
        // console.warn(JSON.stringify(routes));
        // return {
        //     ...state,
        //     routes,
        //     index: routes.length - 1,
        // };
    }
    if ((state && action.type === 'RemovePrevFromStack') || (action.params && action.params.removeCurrentFromStack) ) {
        // const routes = state.routes.slice();
        // routes.splice(routes.length - 1, 1);
        // console.warn(JSON.stringify(routes));
        // return {
        //     ...state,
        //     routes,
        //     index: routes.length - 1,
        // };
    }
    if (action.params && action.params.disableBackFromScreen) {
        backFromScreenOff.push(action.routeName)
    }
    if (action.params && action.params.disableBackToScreen) {
        backFromScreenOff.push(action.routeName)
    }
    return prevGetStateForActionHomeStack(action, state);
};