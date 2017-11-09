import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import {
    Text,
    View,
    TextInput,
    ScrollView,
    Keyboard
} from 'react-native';
import { CheckBox } from 'react-native-elements'

import api from '../services/api';
import Storage from '../services/storage';
import * as styles from '../styles/main';
import NavigatorService from '../services/navigator';
import { Background } from "./Background";

export class LocationInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                valid: false,
                dirty: false
            },
            school: null,
            checked: true
        }
    }

    onNavigate() {
        NavigatorService.navigate('StartScreen', {disableBackFromScreen: true})
    }

    isLocationNumberValid(value) {
        let form = {
            dirty: value.length > 0
        };
        this.setState({form});
        api.get('location_number', {'number': value})
            .then((school) =>{
                form['valid'] = true;
                this.onLocationNumberValid(school, form);
            })
            .catch((error) => {
                form['valid'] = false;
                this.onLocationNumberInvalid(error, form);
            });
    }

    onLocationNumberValid(school, form) {
        this.setState({school, form});
        Keyboard.dismiss();
    }

    onLocationNumberInvalid(error, form) {
        this.setState({school: null, form});
        Storage.remove('school');
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
        Storage.store('school', this.state.school)
            .then(() => {
                this.onNavigate();
            });
    }

    render() {
        return(
            <ScrollView  contentContainerStyle={{minHeight: "100%"}}>
                <Background>
                    <View style={styles.locationInput.container}>
                        <View>
                            <Text style={styles.main.title}>
                                Vul hier het BRIN + vestigingsnummer van jouw basisschool in:
                            </Text>
                        </View>
                        <View style={{flex: 1, marginBottom: 20}}>
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
                        {this.state.form.valid &&
                        <View style={{flex: 1}}>
                            <Text style={[styles.locationInput.text, {fontSize: 16}]}>Dit Vestigings-nummer is gekoppeld aan:</Text>
                            <Text style={[styles.locationInput.text, {fontWeight: 'bold', fontSize: 16}]}>{this.state.school.name}</Text>
                            <Text style={[styles.locationInput.text, {fontSize: 16}]}>Klopt dit?</Text>
                        </View>
                        }
                        <CheckBox
                            title='Ja, dit is mijn basisschool'
                            center
                            checked={this.state.checked}
                            onPress={() => {this.setState({checked: !this.state.checked})}}
                        />
                        {(this.state.form.dirty && !this.state.form.valid) &&
                        <View style={{flex: 1}}>
                            <Text style={styles.locationInput.text}>Dit BRIN-nummer komt niet overeen met de lijst van aangemelde scholen. Heb je het volledige BRIN + vestigingsnummer ingevuld, bijvoorbeeld: 12AB00?</Text>
                            <Text style={styles.locationInput.text}>Let op: als jouw school niet binnen het Vitens verzorgingsgebied ligt, of je hebt jouw klas niet van tevoren aangemeld, dan kun je helaas niet meedoen.</Text>
                        </View>
                        }
                        <View style={{paddingTop: 30}}>
                            <Button
                                onPress={this.onSubmit.bind(this)}
                                isDisabled={!this.state.checked}
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
