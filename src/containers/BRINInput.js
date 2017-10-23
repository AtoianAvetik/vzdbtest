import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import { Text, View, TextInput } from 'react-native';

import * as styles from '../styles/main';
import { TopBar } from "../ui";
import { Background } from "./Background";

export class BRINInput extends Component {
    constructor(props) {
        super(props);
    }

    onNavigate() {
        this.props.navigation.navigate('Welcome');
    }

    render() {
        return(
            <Background>
                <View style={styles.brin.container}>
                    <View>
                        <Text style={styles.main.title}>
                            Vul hier je BRIN-nummer in
                        </Text>
                    </View>
                    <View style={{flex: 1}}>
                        <View style={styles.main.inputContainer}>
                            <TextInput
                                underlineColorAndroid='transparent'
                                placeholder={' 12AB'}
                                placeholderTextColor={'#DADADA'}
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
