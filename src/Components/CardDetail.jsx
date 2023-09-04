import { 
    ImageBackground,
    StyleSheet, 
    View 
} from 'react-native'
import React from 'react'

import { colors } from '../Global/Colors'

/**
 * Format of the containerItems for ItemDetail
 * @param children format for default
 * @param anotherStyle format for customize
 */

const CardDetail = ({
    children, 
    anotherStyle=[]
}) => {
    return (
        <View style={styles.container}>
            <View style = {[styles.containerCard, anotherStyle]}>
            <ImageBackground
            source={require('../Assets/Images/backDetail.jpg')}
            resizeMode='cover'
            style={styles.imagen}
        >
                {children}
            </ImageBackground>
            </View>
        </View>
    )
}

export default CardDetail

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    containerCard:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        width: '90%',
        height: '70%',
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        borderWidth: 2,
        borderColor: colors.black,
        borderRadius: 7,
    },
    imagen: {
        width: '100%',
        height: '100%'
    },
})