import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import { Text, View, TextInput } from 'react-native';

import NavigatorService from '../services/navigator';
import * as styles from '../styles/main';
import { Background } from "./Background";

export class LocationInput extends Component {
    constructor(props) {
        super(props);
    }

    onNavigate() {
        const {navigation} = this.props;
        NavigatorService.replaceScreen('StartScreen');
        // NavigatorService.navigate('StartScreen');
    }

    render() {
        return(
            <Background>
                <View style={styles.locationInput.container}>
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
