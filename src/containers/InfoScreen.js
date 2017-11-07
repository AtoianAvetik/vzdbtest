import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import * as styles from '../styles/main';

export const InfoScreen = () => (
    <ScrollView contentContainerStyle={{minHeight: "100%"}}>
        <LinearGradient colors={['#3ABAFF', '#288EC5']} style={styles.locationInput.linearGradient}>
            <View>
                <Text style={styles.main.title}>
                    Kraanwaterdag 2017
                </Text>
            </View>
            <View style={{paddingTop: 27,flex: 1}}>
                <Text style={styles.main.text}>
                    Hier komt info over KWD. Op woensdag 29 november is het zo ver: Kraanwaterdag! We beginnen met een leuke en educatieve quiz op het digibord en daarna gaat de Diep onder de Grond-challenge van start via deze app! En daarna komt nog meer informatie.
                </Text>
            </View>
            <View>
                <Text style={styles.main.title}>
                    Nog een titel
                </Text>
            </View>
            <View style={{paddingTop: 27,flex: 1}}>
                <Text style={styles.main.text}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                </Text>
            </View>
        </LinearGradient>
    </ScrollView>
)