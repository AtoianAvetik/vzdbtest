import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import { Text, View } from 'react-native';

import * as styles from '../styles/main';
import { Background } from "./Background";

export class Start extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;

        return(
            <Background>
                <View style={styles.start.container}>
                    <View style={{flex: 1}}>
                        <View style={styles.start.box}>
                            <Text style={styles.main.title}>Kraanwaterdag 2017</Text>
                            <Text style={styles.main.text}>Doe de kraanwaterdag-quiz via het digibord (de link is verstuurd per e-mail) en speel daarna via deze app de Diep Onder de Grond-challenge met jouw klas!</Text>
                        </View>
                        <View style={styles.start.box}>
                            <View style={{paddingVertical: 10}}>
                                <Text style={styles.start.textKomika}>Het is vandaag</Text>
                                <Text style={styles.start.textKomika}>kraanwaterdag!</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingTop: 34, paddingHorizontal: 11}}>
                        <Button
                            onPress={() => navigate('Welcome')}
                            style={styles.main.button}
                            textStyle={styles.main.buttonText}
                            children={'Volgende'}
                        />
                    </View>
                </View>
            </Background>
        )
    }
}
