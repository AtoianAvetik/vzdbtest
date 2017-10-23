import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import { TopBar } from "../ui";
import { Welcome } from '../containers/Welcome';
import { BRINInput } from '../containers/BRINInput';

const StartStack = StackNavigator(
    {
        Welcome: {screen: Welcome},
        BRINInput: {screen: BRINInput}
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

export class Start extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StartStack />
        )
    }
}
