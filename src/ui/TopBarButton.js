import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import createIconSet from 'react-native-vector-icons/lib/create-icon-set';

import glyphMap from '../assets/fonts/iconFont/iconFont.json';
const Icon = createIconSet(glyphMap, 'iconFont', 'iconFont.ttf');

export class TopBarButton extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.warn(JSON.stringify(this.props))
    }

    render() {
        return(
            <TouchableOpacity
                onPress={() => this.props.navigate(this.props.options.nav)}
                style={this.props.options.style}>
                <Icon name="info" size={9} color={'#D8D8D8'}/>
            </TouchableOpacity>
        )
    }
}