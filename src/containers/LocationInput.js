import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import { Text, View, TextInput, ScrollView, Keyboard } from 'react-native';

import * as api from '../services/api';
import * as styles from '../styles/main';
import NavigatorService from '../services/navigator';
import { Background } from "./Background";

export class LocationInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valid: false,
            school: null
        }
    }

    onNavigate() {
        const {navigate} = this.props.navigation;
        NavigatorService.navigate('StartScreen', {disableBackFromScreen: true})
    }

    isLocationNumberValid(value) {
        api.get('location_number', {'number': value})
            .then((school) =>{
                this.onLocationNumberValid(school);
            })
            .catch((error) => {
                this.onLocationNumberInvalid(error);
            });
    }

    onLocationNumberValid(school) {
        this.setState({school, valid: true});
        console.warn(this.state.school)
        Keyboard.dismiss();
    }

    onLocationNumberInvalid(error) {
        this.setState({school: null, valid: false});
        console.warn(error)
        // this._storage.remove('school');
    }

    onSubmit(){
        Keyboard.dismiss();
        // if (this.form.valid) {
        //     this._api.post('location_number', this.form.value)
        //         .subscribe((school: School) => {
        //             if (school) {
        //                 this._storage.store('school', school);
        //                 this.onNavigate();
        //                 Keyboard.dismiss();
        //             }
        //         });
        // }
        this.onNavigate();
    }

    render() {
        return(
            <ScrollView  contentContainerStyle={{minHeight: "100%"}}>
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
                                    onChangeText={value => this.isLocationNumberValid(value)}
                                    style={styles.main.input} />
                            </View>
                        </View>
                        <View style={{flex: 1}}>
                            <Text>1</Text>
                        </View>
                        <View style={{paddingTop: 30}}>
                            <Button
                                onPress={this.onSubmit.bind(this)}
                                isDisabled={!this.state.valid}
                                style={styles.main.button}
                                disabledStyle={styles.main.buttonDisable}
                                textStyle={styles.main.buttonText}
                                children={'Volgende'}
                            />
                        </View>
                    </View>
                </Background>
            </ScrollView>
        )
    }
}
