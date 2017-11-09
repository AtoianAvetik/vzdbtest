import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux'

import LinearGradient from 'react-native-linear-gradient';

import * as styles from '../styles/main';

export class _InfoScreen extends Component {
    constructor(props) {
        super(props)

        this.infoData = {
            title1: {
                before: 'Kraanwaterdag',
                event: 'Kraanwaterdag',
                after: 'Kraanwaterdag'
            },
            text1: {
                before: 'Wereldwijd onderzoek toont aan dat kraanwater drinken gezond is: het is goed voor je hart, brein, stofwisseling, concentratievermogen én het voorkomt hoofdpijn. Eén suikerhoudend drankje minder per dag leidt al tot gewichtsafname bij schoolkinderen. Daarbij kunnen leerlingen die overgestapt zijn op water drinken zich beter en langer concentreren.',
                event: 'Wereldwijd onderzoek toont aan dat kraanwater drinken gezond is: het is goed voor je hart, brein, stofwisseling, concentratievermogen én het voorkomt hoofdpijn. Eén suikerhoudend drankje minder per dag leidt al tot gewichtsafname bij schoolkinderen. Daarbij kunnen leerlingen die overgestapt zijn op water drinken zich beter en langer concentreren.',
                after: 'Wereldwijd onderzoek toont aan dat kraanwater drinken gezond is: het is goed voor je hart, brein, stofwisseling, concentratievermogen én het voorkomt hoofdpijn. Eén suikerhoudend drankje minder per dag leidt al tot gewichtsafname bij schoolkinderen. Daarbij kunnen leerlingen die overgestapt zijn op water drinken zich beter en langer concentreren.'
            },
            title2: {
                before: 'Zet in je agenda: 29 november 2017',
                event: '29 november 2017',
                after: '29 november 2017'
            },
            text2: {
                before: 'Tijdens Kraanwaterdag 2017 kunnen klassen van scholen in het Vitens verzorgingsgebied meedoen aan de educatieve Kraanwaterdag-quiz, gepresenteerd door YouTuber Nanne Meijer! Daarna kunnen jullie, de juffen en meesters, met je hele klas of in groepjes op het schoolplein op zoek naar ‘de bron’ tijdens de Zoek de waterbron-challenge. Per groepje heb je één smartphone of tablet nodig met deze app. Inloggen doet elk groepje met het BRIN-nummer van jullie school. Op elk schoolplein ligt een bron verstopt met daarin spetterende prijzen. Vind je met jouw klas het felbegeerde watertappunt? Dan winnen jullie het tappunt voor op het schoolplein! Niet de hoofdprijs gewonnen? Geen zorgen, elke school krijgt leuke prijzen.',
                event: 'Vandaag kunnen klassen van scholen in het Vitens verzorgingsgebied meedoen aan de educatieve Kraanwaterdag-quiz, gepresenteerd door YouTuber Nanne Meijer! Daarna kunnen jullie, de juffen en meesters, met je hele klas of in groepjes op het schoolplein op zoek naar ‘de bron’ tijdens de Zoek de waterbron-challenge. Per groepje heb je één smartphone of tablet nodig met deze app. Inloggen doet elk groepje met het BRIN-nummer van jullie school. Op elk schoolplein ligt een bron verstopt met daarin spetterende prijzen. Vind je met jouw klas het felbegeerde watertappunt? Dan winnen jullie het tappunt voor op het schoolplein! Niet de hoofdprijs gewonnen? Geen zorgen, elke school krijgt leuke prijzen.',
                after: 'Op 29 november konden klassen van scholen in het Vitens verzorgingsgebied meedoen aan de educatieve Kraanwaterdag-quiz, gepresenteerd door YouTuber Nanne Meijer! Daarna gingen de juffen en meesters met de hele klas of in groepjes op het schoolplein op zoek naar ‘de bron’ tijdens de Zoek de waterbron-challenge. Op elk schoolplein lag een bron verstopt met daarin spetterende prijzen met als hoofdprijs het felbegeerde watertappunt!'
            },
        }
    }

    render() {
       return (
        <ScrollView contentContainerStyle={{minHeight: "100%"}}>
            <LinearGradient colors={['#3ABAFF', '#288EC5']} style={styles.locationInput.linearGradient}>
                <View>
                    <Text style={styles.main.title}>
                        { this.infoData.title1[this.props.appState] }
                    </Text>
                </View>
                <View style={{paddingTop: 27,flex: 1}}>
                    <Text style={styles.main.text}>
                        { this.infoData.text1[this.props.appState] }
                    </Text>
                </View>
                <View>
                    <Text style={styles.main.title}>
                        { this.infoData.title2[this.props.appState] }
                    </Text>
                </View>
                <View style={{paddingTop: 27,flex: 1}}>
                    <Text style={styles.main.text}>
                        { this.infoData.text2[this.props.appState] }
                    </Text>
                </View>
            </LinearGradient>
        </ScrollView>
       )
    }
}


const mapStateToProps = (state) => ({
    appState: state.appState.state
});

export const InfoScreen = connect(
    mapStateToProps
)(_InfoScreen);