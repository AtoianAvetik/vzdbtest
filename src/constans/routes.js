import React from 'react';
import { StackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import { TopBar } from "../ui";
import { Welcome } from '../containers/Welcome';
import { LocationInput } from '../containers/LocationInput';
import { Start } from '../containers/Start';
import { Timer } from '../containers/Timer';
import { TopBarButton } from '../ui';

export const StartStack = StackNavigator(
    {
        Welcome: {screen: Welcome},
        LocationInput: {screen: LocationInput},
        Start: {screen: Start},
        Timer: {
            screen: Timer,
            navigationOptions: {
                headerRight : <TopBarButton />
            }
        }
    },
    {
        headerMode : 'float',
        mode : 'card ',
        navigationOptions: {
            header: <TopBar />
        },
        transitionConfig: getSlideFromRightTransition
    }
);

export const MainStack = StackNavigator(
    {
        Welcome: {screen: Welcome}
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