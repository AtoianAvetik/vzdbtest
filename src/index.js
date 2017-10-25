import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { connect } from 'react-redux'

import * as api from './services/api';
import { StartStack, MainStack } from "./constants/routes";
import { setDaysLeft } from './actions/actions'

class _Root extends Component {
    static defaultProps = {
        eventDate: new Date('2017-11-29')
    };

    constructor(props) {
        super(props);

        this.state = {
            started: true
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
                }, 2000)
            })
            .catch((err) => console.log('err:', err));
    }

    calculateDaysLeft(currentDate) {
        let timeDiff = this.props.eventDate.getTime() - currentDate;
        return Math.floor(timeDiff / (1000 * 3600 * 24));
    };

    renderRoot(ComponentToRender) {
        return (
            <ComponentToRender daysLeft={this.props.daysLeft}/>
        );
    }

    render() {
        const { started } = this.state;
        return started ? this.renderRoot(MainStack) : this.renderRoot(StartStack);
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
