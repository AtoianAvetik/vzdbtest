import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export const Background = (props) => (
    <ImageBackground source={require('../assets/img/background.png')}  style={styles.background} resizeMode={'cover'}>
        {props.children}
    </ImageBackground >
);

const styles = StyleSheet.create({
    background: {
        flex: 1
    }
});
