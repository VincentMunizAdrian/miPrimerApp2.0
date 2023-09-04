import { 
    StyleSheet, 
    View 
} from 'react-native'
import React from 'react'

import { colors } from '../Global/Colors'

/**
 * Format of the containerItems for CategoryItem, ProductItem
 * @param children format for default
 * @param otherStyle format for customize
 */

const Card = ({
    children, 
    otherStyle=[]
}) => {
    return (
        <View style = {[styles.containerCard, otherStyle]}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    containerCard:{
        width: 150,
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
        backgroundColor: colors.lightOnyx,
        borderRadius: 7,
    },
})