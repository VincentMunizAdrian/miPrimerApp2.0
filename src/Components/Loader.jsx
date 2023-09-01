import { 
    StyleSheet, 
    View, 
    Animated, 
} from 'react-native'
import React from 'react'


const Loader = () => {
    const ballAnimation = new Animated.Value(0);

    const startAnimation = () => {
        Animated.timing(ballAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        }).start();
    };

    const ballStyle = {
        transform: [
        {
            translateY: ballAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 200],
            }),
        },
        ],
    };

    return (
        <View style={styles.container}>
        <Animated.View style={[styles.ball, ballStyle]} source={{uri:'../Assets/Images/ball.png'}}/>
            {/* <Image source={{uri:'../Assets/Images/ball.png'}}/> */}
        <View style={styles.shadow} />
        </View>
    );

}

export default Loader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ball: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'radial-gradient(circle at 0 0, hsl(60,100%,50%) 25%, hsl(60,100%,30%) 70%, hsl(60,100%,1%))',
        animation: 'rebota 1s alternate infinite ease-in',
    },
    shadow: {
        width: 100,
        height: 1,
        backgroundColor: '#000',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        borderRadius: 50,
        position: 'absolute',
        top: 288,
        opacity: 0.2,
        transform: [{ scale: 0.5 }],
        animation: 'sombra 1s alternate infinite ease-in',
    },
})