import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { connect } from 'react-redux'

import NavigatorService from './services/navigator';
import { RootStack } from "./navigation/routes";
import { setAppState } from './actions/actionCreators'

class _Root extends Component {
    constructor(props) {
        super(props);

        this.state = {
            started: false
        }
    }

    componentDidMount() {
        this.props.setAppState();
        setTimeout(() => {
            SplashScreen.hide();
        }, 2000)
    }

    renderRoot(ComponentToRender) {
        return (
            <ComponentToRender
                ref={navigatorRef => {
                    NavigatorService.setContainer(navigatorRef);
                }}/>
        );
    }

    render() {
        return this.renderRoot(RootStack(this.state.started));
    }
}

const mapDispatchToProps = (dispatch) => ({
    setAppState() {
        return dispatch(setAppState());
    }
});

export const Root = connect(
    null,
    mapDispatchToProps
)(_Root);
