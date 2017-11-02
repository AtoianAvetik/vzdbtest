import React from 'react';
import { Animated, Easing, I18nManager } from 'react-native';

let rightSlide = (sceneProps) => {
    const { layout, position, scene } = sceneProps;
    const { index } = scene;

    const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [layout.initWidth, 0, 0]
    });

    // const opacity = position.interpolate({
    //     inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
    //     outputRange: [0, 1, 1, 0.3, 0]
    // });
    const opacity = position.interpolate({
        inputRange: [1, 1, 1, 1, 1],
        outputRange: [1, 1, 1, 1, 1]
    });

    return { opacity, transform: [{ translateX }] }
};

export default TransitionConfiguration = () => {
    return {
        transitionSpec: {
            duration: 500,
            easing: Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
            timing: Animated.timing,
        },
        // Define scene interpolation, eq. custom transition
        screenInterpolator: (sceneProps) => {
            const {position, scene} = sceneProps;
            const {index, route} = scene;
            const params = route.params || {}; // <- That's new
            const transition = params.transition || 'default'; // <- That's new

            return {
                default: rightSlide(sceneProps),
            }[transition];
        }
    }
};