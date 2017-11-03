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
        },
    },
    {
        headerMode: 'float',
        mode: 'card ',
        navigationOptions: {
            header: <TopBar/>,
        },
        transitionConfig: TransitionConfiguration
    }
);

const StartStack = StackNavigator(
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
        headerMode: 'float',
        mode: 'card ',
        navigationOptions: {
            header: <TopBar/>,
        },
        transitionConfig: TransitionConfiguration
    }
);

const prevGetStateForActionWelcomeStack = WelcomeStack.router.getStateForAction;
const prevGetStateForActionStartStack = StartStack.router.getStateForAction;
WelcomeStack.router.getStateForAction = (action, state) => {
    return customGetStateForActionHandler(action, state, prevGetStateForActionWelcomeStack);
};
StartStack.router.getStateForAction = (action, state) => {
    return customGetStateForActionHandler(action, state, prevGetStateForActionStartStack);
};

export function RootStack(started) {
    const RootStack = StackNavigator(
        {
            WelcomeStack: {
                screen: WelcomeStack,
                navigationOptions: {
                    header: <View />,
                }
            },
            StartStack: {
                screen: StartStack,
                navigationOptions: {
                    header: <View />,
                }
            },
            SliderScreen: {
                screen: SliderScreen,
                navigationOptions: {
                    header: <View />,
                }
            },
            RadarScreen: {
                screen: RadarScreen
            }
        },
        {
            initialRouteName: started ? 'StartStack' : 'WelcomeStack',
            headerMode : 'screen',
            mode : 'card ',
            navigationOptions: {
                header: <TopBar />,
            },
            transitionConfig: TransitionConfiguration
        });
    const prevGetStateForActionRootStack = RootStack.router.getStateForAction;
    RootStack.router.getStateForAction = (action, state) => {
        return customGetStateForActionHandler(action, state, prevGetStateForActionRootStack);
    };
    return RootStack;
}