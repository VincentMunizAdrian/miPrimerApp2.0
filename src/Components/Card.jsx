import { 
    StyleSheet, 
    View 
} from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Card = ({children, otherStyle=[]}) => {
    return (
        <View style = {[styles.containerCard, otherStyle]}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    containerCard:{
        width: 250,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
        borderWidth: 2,
        padding: 15,
        marginVertical: 12,
        borderColor: colors.black,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: colors.lightOnyx,
        borderRadius: 7,
    },
})