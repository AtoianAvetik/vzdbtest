import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux'

import { setAppState } from '../actions/actions'
import * as styles from '../styles/main';
import { Background } from "./Background";


class _StartScreen extends Component {
    constructor(props) {
        super(props);
    }

    ComponentToRender() {
        switch(this.props.appState) {
            case 'before':
                return (
                    <View style={{flex: 1}}>
                        <View style={styles.start.box}>
                            <Text style={styles.main.title}>Kraanwaterdag 2017</Text>
                            <Text style={styles.main.text}>Op woensdag 29 november is het zo ver: Kraanwaterdag! Speel de educatieve Kraanwater-quiz op het digibord en ga daarna op het schoolplein op zoek naar toffe prijzen, tijdens de Diep Onder de Grond-challenge!</Text>
                        </View>
                        <View style={styles.start.box}>
                            <View style={{paddingTop: 10, paddingBottom: 0}}>
                                <View style={styles.start.timerContainer}>
                                    <Text style={styles.start.timerText}>over...   </Text>
                                    <Text style={styles.start.timerBox}>{this.props.daysLeft}</Text>
                                    <Text style={styles.start.timerText}>   dagen</Text>
                                </View>
                                <Text style={styles.main.text}>is het Kraanwaterdag</Text>
                            </View>
                        </View>
                    </View>
                );
            case 'event':
                return (
                    <View style={{flex: 1}}>
                        <View style={styles.start.box}>
                            <Text style={styles.main.title}>Kraanwaterdag 2017</Text>
                            <Text style={styles.main.text}>Speel de Kraanwaterdag-quiz via het digibord (de link is verstuurd per e-mail) en speel daarna via deze app de Zoek de waterbron-challenge met de hele klas of in groepjes! Per groepje heb je één smartphone of tablet met deze app nodig. Inloggen kan elk groepje doen met het BRIN-nummer van jullie school.</Text>
                        </View>
                        <View style={styles.start.box}>
                            <View style={{paddingVertical: 10}}>
                                <Text style={styles.start.textKomika}>Het is vandaag</Text>
                                <Text style={styles.start.textKomika}>kraanwaterdag!</Text>
                            </View>
                        </View>
                    </View>
                );
            case 'after':
                return (
                    <View style={{flex: 1}}>
                        <View style={styles.start.box}>
                            <Text style={styles.main.title}>Kraanwaterdag 2017</Text>
                            <Text style={styles.main.text}>Het was een spetterend succes! Houd Facebook en Instagram in de gaten voor nieuwe Kraanwaterschool-activiteiten.</Text>
                        </View>
                        <View style={styles.start.box}>
                            <View style={{paddingVertical: 10}}>
                                <Text style={styles.start.textKomika}>Bedankt voor je</Text>
                                <Text style={styles.start.textKomika}>deelname!</Text>
                            </View>
                        </View>
                    </View>
                );
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        console.log(this.props);

        return (
            <ScrollView contentContainerStyle={{minHeight: "100%"}}>
                <Background>
                    <View style={styles.start.container}>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Button
                                onPress={() => this.props.setAppState('before')}
                                style={{flex: 0.3, marginHorizontal: 10, backgroundColor: '#39579A', borderColor: 'transparent', height: 30,}}
                                textStyle={{color: '#fff', fontSize: 12}}
                                children={'BEFORE'}
                            />
                            <Button
                                onPress={() => this.props.setAppState('event')}
                                style={{flex: 0.3, marginHorizontal: 10, backgroundColor: '#39579A', borderColor: 'transparent', height: 30,}}
                                textStyle={{color: '#fff', fontSize: 12}}
                                children={'EVENT'}
                            />
                            <Button
                                onPress={() => this.props.setAppState('after')}
                                style={{flex: 0.3, marginHorizontal: 10, backgroundColor: '#39579A', borderColor: 'transparent', height: 30,}}
                                textStyle={{color: '#fff', fontSize: 12}}
                                children={'AFTER'}
                            />
                        </View>
                        { this.ComponentToRender() }
                        <View style={{paddingTop: 34, paddingHorizontal: 11}}>
                            <Button
                                isDisabled={!this.props.event}
                                disabledStyle={styles.main.buttonDisable}
                                onPress={() => navigate('SliderScreen')}
                                style={styles.main.button}
                                textStyle={styles.main.buttonText}
                                children={'Volgende'}
                            />
                        </View>
                    </View>
                </Background>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => ({
    daysLeft: state.appState.daysLeft,
    appState: state.appState.state,
    event: state.appState.event,
});

const mapDispatchToProps = (dispatch) => ({
    setAppState(state) {
        dispatch(setAppState(state));
    }
});

export const StartScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(_StartScreen);
