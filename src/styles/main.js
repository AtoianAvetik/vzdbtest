import {
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';
import * as COMMON from './common'

const {width, height} = Dimensions.get('window');

if ( Platform.OS === 'ios' ) {
    // iOS styles
}

export const main = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: COMMON.FONT_SIZES.title,
        lineHeight: COMMON.FONT_LINE_HEIGHTS.title,
        textAlign: 'center',
        fontFamily: COMMON.FONT_BOLD
    },
    text: {
        color: '#fff',
        fontSize: COMMON.FONT_SIZES.text,
        lineHeight: COMMON.FONT_LINE_HEIGHTS.text,
        textAlign: 'center',
        fontFamily: COMMON.FONT_NORMAL
    },
    button: {
        borderRadius: 100,
        borderColor: 'transparent',
        backgroundColor: COMMON.COLORS.secondary,
        height: 54,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.13,
        shadowRadius: 4,
        elevation: 1,
    },
    buttonDisable: {
      backgroundColor: '#53668F'
    },
    buttonText: {
        color: '#ffffff',
        borderWidth: 0,
        fontSize: COMMON.FONT_SIZES.button,
        fontFamily: COMMON.FONT_BOLD,
    },
    inputContainer: {
        marginTop: 30,
        marginHorizontal: 15,
        borderRadius: 12,
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        height: 50
    },
    input: {
        height: 50,
        fontSize: 20,
        lineHeight: 20,
        borderColor: 'transparent',
        borderWidth: 0
    }
});

export const brin = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(58,186,255,0.85)',
        paddingVertical: 36,
        paddingHorizontal: 26
    }
});