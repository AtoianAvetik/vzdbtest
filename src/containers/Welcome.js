import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import { Text, View, ScrollView } from 'react-native';

import * as styles from '../styles/main';
import { Background } from "./Background";

export class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;

        return(
            <ScrollView>
                <Background>
                    <View style={styles.locationInput.container}>
                        <View>
                            <Text style={styles.main.title}>
                                Leuk dat jullie meedoen aan Kraanwaterdag 2017!
                            </Text>
                        </View>
                        <View style={{paddingTop: 27,flex: 1}}>
                            <Text style={styles.main.text}>
                                Speel eerst de Kraanwaterdag-quiz via het digibord, gepresenteerd door YouTuber Nanne Meijer!
                                De link van deze quiz ontvang je op dinsdag 28 november per mail. Na de quiz gaan jullie het schoolplein op.
                                Hier spelen jullie de Zoek de waterbron-challenge met de hele klas of in groepjes.
                                Per groepje heb je één smartphone of tablet met deze app nodig.
                                Met de Zoek de waterbron-app gaan jullie op het schoolplein op zoek naar spetterende prijzen.
                                De hoofdprijs is een watertappunt voor op het schoolplein! En elke klas die meedoet wint iets leuks.
                            </Text>
                        </View>
                        <View style={{paddingTop: 30}}>
                            <Button
                                onPress={() => navigate('LocationInput')}
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