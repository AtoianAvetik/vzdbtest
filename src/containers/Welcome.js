import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import { Text, View } from 'react-native';

import * as styles from '../styles/main';
import { Background } from "./Background";

export class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    onNavigate() {
        this.props.navigation.navigate('BRINInput');
    }

    render() {
        return(
            <Background>
                <View style={styles.brin.container}>
                    <View>
                        <Text style={styles.main.title}>
                            Leuk dat jullie meedoen aan Kraanwaterdag 2017!
                        </Text>
                    </View>
                    <View style={{paddingTop: 32,flex: 1}}>
                        <Text style={styles.main.text}>
                            Doe eerst de Kraanwaterdag-quiz via het digibord. Het linkje ontvang je per mail. Speel daarna met deze app de Diep Onder de Grond-challenge met jouw klas. Via GPS ga je op het schoolplein op zoek naar spetterende prijzen. De hoofdprijs is een kraanwatertappunt voor op het schoolplein! En elke klas die meedoet wint iets leuks.
                        </Text>
                    </View>
                    <View style={{paddingTop: 30}}>
                        <Button
                            onPress={this.onNavigate.bind(this)}
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