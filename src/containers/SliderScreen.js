import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import { Text, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';

import * as styles from '../styles/main';

export class SliderScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;

        return(
            <Swiper
                style={styles.slider.container}
                showsButtons={false}
                loop={false}>
                <View style={styles.slider.slide}>
                    <Text style={styles.slider.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slider.slide}>
                    <Text style={styles.slider.text}>Beautiful</Text>
                </View>
                <View style={styles.slider.slide}>
                    <Text style={styles.slider.text}>And simple</Text>
                    <Button
                        onPress={() => navigate('RadarScreen')}
                        style={styles.main.button}
                        textStyle={styles.main.buttonText}
                        children={'Start!'}
                    />
                </View>
            </Swiper>
        )
    }
}