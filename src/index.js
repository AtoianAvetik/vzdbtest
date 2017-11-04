import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { connect } from 'react-redux'

import api from './services/api';
import NavigatorService from './services/navigator';
import { RootStack } from "./navigation/routes";
import { setDaysLeft } from './actions/actions'

class _Root extends Component {
    static defaultProps = {
        eventDate: new Date('2017-11-29')
    };

    constructor(props) {
        super(props);

        this.state = {
            started: false
        }
    }

    componentDidMount() {
        api.get('date')
            .then((data) => {
                const currentDate = Date.parse(data.date.toString());
                const daysLeft = this.calculateDaysLeft(currentDate);
                this.props.setDaysLeft(daysLeft);
                setTimeout(() => {
                    SplashScreen.hide();
                }, 1000)
            })
            .catch((err) => console.log('err:', err));
    }

    calculateDaysLeft(currentDate) {
        let timeDiff = this.props.eventDate.getTime() - currentDate;
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    };

    renderRoot(ComponentToRender) {
        return (
            <ComponentToRender
                daysLeft={this.props.daysLeft}
                ref={navigatorRef => {
                    NavigatorService.setContainer(navigatorRef);
                }}/>
        );
    }

    render() {
        return this.renderRoot(RootStack(this.state.started));
    }
}

const mapStateToProps = (state) => ({
    daysLeft: state.daysLeft
});

const mapDispatchToProps = (dispatch) => ({
    setDaysLeft(daysLeft) {
        return dispatch(setDaysLeft(daysLeft));
    }
});

export const Root = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Root);
