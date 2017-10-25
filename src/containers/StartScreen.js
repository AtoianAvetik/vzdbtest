import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import { View } from 'react-native';

import * as styles from '../styles/main';
import { Background } from "./Background";
import { Timer } from "../components/Timer";
import { Start } from "../components/Start";

export class StartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            started: false,
            daysLeft: 0
        };
    }

    componentWillMount() {
        const daysLeft = this.props.navigation.state.params.daysLeft;
        const started = daysLeft < 0;
        this.setState({started, daysLeft})
    }

    renderRoot(ComponentToRender) {
        const {navigate} = this.props.navigation;

        return (
            <Background>
                <View style={styles.start.container}>
                    <ComponentToRender daysLeft={this.state.daysLeft}/>
                    <View style={{paddingTop: 34, paddingHorizontal: 11}}>
                        <Button
                            isDisabled={!this.state.started}
                            disabledStyle={styles.main.buttonDisable}
                            onPress={() => navigate('Welcome')}
                            style={styles.main.button}
                            textStyle={styles.main.buttonText}
                            children={'Volgende'}
                        />
                    </View>
                </View>
            </Background>
        );
    }

    render() {
        return this.state.started ? this.renderRoot(Start) : this.renderRoot(Timer);
    }
}
