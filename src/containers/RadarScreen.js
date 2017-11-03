import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Button from 'apsl-react-native-button';

import NavigatorService from '../services/navigator';
import * as styles from '../styles/main';

export class RadarScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        NavigatorService.removePrevScreenFromStack();
    }

    onNavigate() {
        NavigatorService.navigate('WelcomeScreen')
    }

    render() {
        return (
            <View>
                <Text>
                    Radar
                </Text>
                <Button
                    onPress={this.onNavigate.bind(this)}
                    style={styles.main.button}
                    textStyle={styles.main.buttonText}
                    children={'Start!'}/>
            </View>
        )
    }
}