import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import { Text, View, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';

import NavigatorService from '../services/navigator';
import * as styles from '../styles/main';

export class SliderScreen extends Component {
    constructor(props) {
        super(props);
    }

    onNavigate() {
        NavigatorService.navigate('RadarScreen')
    }

    render() {
        const {navigate} = this.props.navigation;

        return(
            <Swiper
                style={styles.slider.container}
                showsButtons={false}
                loop={false}
                dotStyle={{
                    backgroundColor: '#fff',
                    marginLeft: 7,
                    marginRight: 7,
                }}
                paginationStyle={{
                    top: '30%'
                }}
                activeDotStyle={{
                    backgroundColor: '#39579A',
                    width: 11,
                    height: 11,
                    borderRadius: 6,
                    marginLeft: 7,
                    marginRight: 7
                }}>
                <View style={styles.slider.slide}>
                    <View style={styles.slider.imageContainer}>
                        <Image
                            source={require('../assets/img/slider-1.png')}
                            style={styles.slider.image}/>
                    </View>
                    <View style={styles.slider.descriptionContainer}>
                        <ScrollView>
                            <View style={{paddingBottom: 30}}>
                                <Text style={styles.slider.title}>Tijd om te beginnen!</Text>
                                <Text style={styles.slider.text}>Jullie gaan met de hele klas op zoek naar de bron van jullie kraanwater.
                                    Loop samen rond over het schoolplein tot de bron gevonden is!</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.slider.slide}>
                    <View style={styles.slider.imageContainer}>
                        <Image
                            source={require('../assets/img/slider-2.png')}
                            style={styles.slider.image}/>
                    </View>
                    <View style={styles.slider.descriptionContainer}>
                        <ScrollView>
                            <View style={{paddingBottom: 30}}>
                                <Text style={styles.slider.title}>Zoeken naar de bron…</Text>
                                <Text style={styles.slider.text}>Het kan een paar minuten zoeken zijn voor jullie de bron gevonden hebben, maar geef niet op… Er zijn namelijk leuke prijzen te winnen!</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.slider.slide}>
                    <View style={styles.slider.imageContainer}>
                        <Image
                            source={require('../assets/img/slider-3.png')}
                            style={styles.slider.image}/>
                    </View>
                    <View style={styles.slider.descriptionContainer}>
                        <ScrollView>
                            <View style={{justifyContent: 'space-between', paddingBottom: 30}}>
                                <Text style={styles.slider.title}>Staan jullie op het schoolplein?</Text>
                                <Button
                                    onPress={this.onNavigate.bind(this)}
                                    style={styles.main.button}
                                    textStyle={styles.main.buttonText}
                                    children={'Start!'}/>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Swiper>
        )
    }
}