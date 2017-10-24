import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import { StartStack, MainStack } from "./constans/routes";

export class Root extends Component {
    constructor() {
        super();
        this.state = {
            started: false
        };
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
