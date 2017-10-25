import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import { Text, View, TextInput } from 'react-native';

import * as styles from '../styles/main';
import { Background } from "./Background";

export class LocationInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;

        return(
            <Background>
                <View style={styles.brin.container}>
                    <View>
                        <Text style={styles.main.title}>
                            Vul hier je Vestigings-nummer in
                        </Text>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={styles.main.inputContainer}>
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholder={' Vestigings-nummer'}
                                placeholderTextColor={'#DADADA'}
                                maxLength={6}
                                style={styles.main.input} />
                        </View>
                    </View>
                    <View style={{paddingTop: 30}}>
                        <Button
                            onPress={() => navigate('StartScreen')}
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
