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
import { RadarScreen } from "../containers/RadarScreen";

function StartStack() {
    const StartStack = StackNavigator(
        {
            SliderScreen: {
                screen: SliderScreen,
                navigationOptions: {
                    header: <View />,
                }
            },
            RadarScreen: {
                screen: RadarScreen,
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
    const prevGetStateForActionStartStack = StartStack.router.getStateForAction;
    StartStack.router.getStateForAction = (action, state) => {
        return customGetStateForActionHandler(action, state, prevGetStateForActionStartStack);
    };
    return StartStack;
}

function WelcomeStack(started) {
    const WelcomeStack = StackNavigator(
        {
            WelcomeScreen: {screen: Welcome},
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
            initialRouteName: started ? 'StartScreen' : 'WelcomeScreen',
            headerMode: 'float',
            mode: 'card ',
            navigationOptions: {
                header: <TopBar/>,
            },
            transitionConfig: TransitionConfiguration
        }
    );
    const prevGetStateForActionWelcomeStack = WelcomeStack.router.getStateForAction;
    WelcomeStack.router.getStateForAction = (action, state) => {
        return customGetStateForActionHandler(action, state, prevGetStateForActionWelcomeStack);
    };
    return WelcomeStack;
}

export function RootStack(started) {
    return StackNavigator(
        {
            WelcomeStack: {screen: WelcomeStack(started)},
            StartStack: {screen: StartStack()},
        },
        {
            initialRouteName: 'WelcomeStack',
            headerMode : 'none',
            mode : 'card ',
            transitionConfig: TransitionConfiguration
        });
}