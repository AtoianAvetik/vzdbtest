import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import TransitionConfiguration from './transitions';
import customGetStateForActionHandler from './customGetStateForActionHandler';

import * as styles from '../styles/main';
import { TopBar } from "../components/TopBar";
import { Welcome } from '../containers/Welcome';
import { LocationInput } from '../containers/LocationInput';
import { StartScreen } from '../containers/StartScreen';
import { InfoScreen } from "../containers/InfoScreen";
import { SliderScreen } from "../containers/SliderScreen";

export const StartStack = StackNavigator(
    {
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
        SliderScreen: {
            screen: SliderScreen,
            navigationOptions: {
                header: <View />,
            }
        },
        RadarScreen: {
            screen: SliderScreen,
            navigationOptions: {
                header: <TopBar />,
            }
        }
    },
    {
        initialRouteName: 'SliderScreen',
        headerMode : 'screen',
        mode : 'card ',
        navigationOptions: {
            header: <TopBar />,
        },
        transitionConfig: TransitionConfiguration
    }
);

export const WelcomeStack = StackNavigator(
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
        initialRouteName: 'Welcome',
        headerMode : 'float',
        mode : 'card ',
        navigationOptions: {
            header: <TopBar />,
        },
        transitionConfig: TransitionConfiguration
    }
);

export const RootStack = StackNavigator(
    {
        WelcomeStack: {screen: WelcomeStack},
        StartStack: {screen: StartStack},
    },
    {
        initialRouteName: 'WelcomeStack',
        headerMode : 'none',
        mode : 'card ',
        transitionConfig: TransitionConfiguration
    });

const prevGetStateForActionWelcomeStack = WelcomeStack.router.getStateForAction;
const prevGetStateForActionStartStack = StartStack.router.getStateForAction;
WelcomeStack.router.getStateForAction = (action, state) => {
    return customGetStateForActionHandler(action, state, prevGetStateForActionWelcomeStack);
};
StartStack.router.getStateForAction = (action, state) => {
    return customGetStateForActionHandler(action, state, prevGetStateForActionStartStack);
};