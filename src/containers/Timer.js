import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import { Text, View } from 'react-native';

import * as styles from '../styles/main';
import { Background } from "./Background";

export class Timer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {state} = this.props.navigation;

        return(
            <Background>
                <View style={styles.start.container}>
                    <View style={{flex: 1}}>
                        <View style={styles.start.box}>
                            <Text style={styles.main.title}>Kraanwaterdag 2017</Text>
                            <Text style={styles.main.text}>Op woensdag 29 november is het zo ver: Kraanwaterdag! Speel de educatieve Kraanwater-quiz op het digibord en ga daarna op het schoolplein op zoek naar toffe prijzen, tijdens de Diep Onder de Grond-challenge!</Text>
                        </View>
                        <View style={styles.start.box}>
                            <View style={{paddingVertical: 10}}>
                                <View style={styles.start.timerContainer}>
                                    <Text style={styles.start.timerText}>over...   </Text>
                                    <Text style={styles.start.timerBox}>{state.params.date}</Text>
                                    <Text style={styles.start.timerText}>   dagen</Text>
                                </View>
                                <Text style={styles.main.text}>is het Kraanwaterdag</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingTop: 34, paddingHorizontal: 11}}>
                        <Button
                            isDisabled={true}
                            style={styles.main.button}
                            disabledStyle={styles.main.buttonDisable}
                            textStyle={styles.main.buttonText}
                            children={'Volgende'}
                        />
                    </View>
                </View>
            </Background>
        )
    }
}
