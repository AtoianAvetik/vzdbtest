import React from 'react';
import { Text, View } from 'react-native';

import * as styles from '../styles/main';

export const Timer = (props) => (
    <View style={{flex: 1}}>
        <View style={styles.start.box}>
            <Text style={styles.main.title}>Kraanwaterdag 2017</Text>
            <Text style={styles.main.text}>Op woensdag 29 november is het zo ver: Kraanwaterdag! Speel de educatieve Kraanwater-quiz op het digibord en ga daarna op het schoolplein op zoek naar toffe prijzen, tijdens de Diep Onder de Grond-challenge!</Text>
        </View>
        <View style={styles.start.box}>
            <View style={{paddingVertical: 10}}>
                <View style={styles.start.timerContainer}>
                    <Text style={styles.start.timerText}>over...   </Text>
                    <Text style={styles.start.timerBox}>{props.daysLeft}</Text>
                    <Text style={styles.start.timerText}>   dagen</Text>
                </View>
                <Text style={styles.main.text}>is het Kraanwaterdag</Text>
            </View>
        </View>
    </View>
);
