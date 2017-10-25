import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import { Text, View, TextInput } from 'react-native';

import * as api from '../services/api';
import * as styles from '../styles/main';
import { Background } from "./Background";

export class LocationInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eventDate: new Date('2017-11-29'),
            daysLeft: 0
        };

    }

    componentDidMount() {
        api.get('date')
            .then((data) => {
                const currentDate = Date.parse(data.date.toString());
                const daysLeft = this.calculateDaysLeft(currentDate);
                this.setState({daysLeft});
            })
    }

    calculateDaysLeft(currentDate) {
        let timeDiff = this.state.eventDate.getTime() - currentDate;
        return Math.floor(timeDiff / (1000 * 3600 * 24));
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
                            onPress={() => navigate('StartScreen', {daysLeft: this.state.daysLeft})}
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
