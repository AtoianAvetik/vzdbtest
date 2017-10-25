import React from 'react';
import { Text, View } from 'react-native';

import * as styles from '../styles/main';

export const Start = () => (
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
);
