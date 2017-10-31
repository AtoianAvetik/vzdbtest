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

const prevGetStateForActionHomeStack = MainStack.router.getStateForAction;
MainStack.router.getStateForAction = (action, state) => {
    if (state && action.type === 'ReplaceCurrentScreen') {
        const routes = state.routes.slice(0, state.routes.length - 1);
        routes.push(action);
        return {
            ...state,
            routes,
            index: routes.length - 1,
        };
    }
    return prevGetStateForActionHomeStack(action, state);
}