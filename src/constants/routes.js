import React from 'react';
import { StackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import * as styles from '../styles/main';
import { TopBar } from "../components/TopBar";
import { TopBarButton } from "../ui";
import { Welcome } from '../containers/Welcome';
import { LocationInput } from '../containers/LocationInput';
import { StartScreen } from '../containers/StartScreen';
import { InfoScreen } from "../containers/InfoScreen";

// export const StartStack = StackNavigator(
//     {
//         Welcome: {screen: Welcome},
//         LocationInput: {screen: LocationInput},
//         StartScreen: {
//             screen: StartScreen,
//             navigationOptions: {
//                 header: <TopBar rightButton={<TopBarButton />} />,
//             }
//         }
//     },
//     {
//         headerMode : 'float',
//         mode : 'card ',
//         navigationOptions: {
//             header: <TopBar />,
//         },
//         transitionConfig: getSlideFromRightTransition
//     }
// );

export const StartStack = StackNavigator(
    {
        Welcome: {screen: Welcome},
        LocationInput: {screen: LocationInput},
        StartScreen: {
            screen: StartScreen,
            navigationOptions: {
                header: ({navigate}) => (
                        <TopBar
                            rightButton={
                                <TopBarButton
                                    navigate={navigate}
                                    options={{
                                        type: "info",
                                        style: styles.start.topBarButton,
                                        nav: "InfoScreen"
                                    }}/>
                            }/>
                    )
            }
        },
        InfoScreen: {
            screen: InfoScreen,
            navigationOptions: {
                header: ({navigate}) => (
                    <TopBar
                        rightButton={
                            <TopBarButton
                                navigate={navigate}
                                options={{
                                    type: "close",
                                    style: styles.start.topBarButton,
                                    nav: "StartScreen"
                                }}/>
                        }/>
                )
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

export const MainStack = StackNavigator(
    {
        StartScreen: {
            screen: StartScreen,
            navigationOptions: {
                header: <TopBar rightButton={<TopBarButton />} />,
            }
        }
    },
    {
        headerMode : 'float',
        mode : 'card ',
        navigationOptions: {
            header: TopBar
        },
        transitionConfig: getSlideFromRightTransition
    }
);