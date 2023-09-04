import { 
    View, 
    Animated, 
    Image 
} from 'react-native';
import React from 'react';

/**
 * Loader for Home
 */

const Loader = () => {
    const rebotaAnimada = new Animated.Value(0);

    Animated.loop(
        Animated.sequence([
        Animated.timing(rebotaAnimada, {
            toValue: 200,
            duration: 800,
            useNativeDriver: true,
        }),
        Animated.timing(rebotaAnimada, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
        }),
        ]),
        { iterations: -1 }
    ).start();


    return (
        <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
            <Animated.View
                style={{
                position: 'absolute',
                transform: [{ translateY: rebotaAnimada }],
                }}
            >
                <Image
                source={require('../Assets/Images/ball.png')}
                style={{ width: 100, height: 100 }}
                />
            </Animated.View>
        </View>
    );
};

export default Loader;