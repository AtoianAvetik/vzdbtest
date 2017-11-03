import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux'

import * as styles from '../styles/main';
import { Background } from "./Background";
import { Timer } from "../components/Timer";
import { Start } from "../components/Start";

class _StartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            started: true
        };
    }

    componentDidMount() {
        // const started = this.props.daysLeft <= 0;
        // this.setState({started});
    }

    renderRoot(ComponentToRender) {
        const {navigate} = this.props.navigation;

        return (
            <ScrollView>
                <Background>
                    <View style={styles.start.container}>
                        <ComponentToRender daysLeft={this.props.daysLeft}/>
                        <View style={{paddingTop: 34, paddingHorizontal: 11}}>
                            <Button
                                isDisabled={!this.state.started}
                                disabledStyle={styles.main.buttonDisable}
                                onPress={() => navigate('StartStack')}
                                style={styles.main.button}
                                textStyle={styles.main.buttonText}
                                children={'Volgende'}
                            />
                        </View>
                    </View>
                </Background>
            </ScrollView>
        );
    }

    render() {
        return this.state.started ? this.renderRoot(Start) : this.renderRoot(Timer);
    }
}

const mapStateToProps = (state) => ({
    daysLeft: state.daysLeft
});

export const StartScreen = connect(
    mapStateToProps
)(_StartScreen);
