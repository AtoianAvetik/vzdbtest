import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'

import { store } from './store';
import { StartStack, MainStack } from "./constans/routes";

export class Root extends Component {
    constructor() {
        super();
        this.state = {
            started: false
        };
    }

    componentDidMount() {
        // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        setTimeout(() => {
            SplashScreen.hide();
        }, 2000)
    }

    renderRoot(ComponentToRender) {
        return (
            <Provider store={store}>
                <ComponentToRender />
            </Provider>
        );
    }

    render() {
        const { started } = this.state;
        return started ? this.renderRoot(MainStack) : this.renderRoot(StartStack);
    }
}
