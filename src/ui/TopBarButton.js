import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import createIconSet from 'react-native-vector-icons/lib/create-icon-set';

import NavigatorService from '../services/navigator';
import glyphMap from '../assets/fonts/iconFont/iconFont.json';
const Icon = createIconSet(glyphMap, 'iconFont', 'iconFont.ttf');

export class TopBarButton extends Component {
    constructor(props) {
        super(props);
    }

    onNavigate() {
        if ( this.props.options.type === 'close' ) {
            NavigatorService.back()
        } else {
            NavigatorService.navigate(this.props.options.nav);
        }
    }

    render() {
        return(
            <TouchableOpacity
                onPress={this.onNavigate.bind(this)}
                style={this.props.options.style}>
                <Icon name={this.props.options.type} size={9} color={'#D8D8D8'}/>
            </TouchableOpacity>
        )
    }
}