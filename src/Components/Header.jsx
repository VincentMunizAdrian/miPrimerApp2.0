import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Header = () => {
    return (
        <View
            style = {styles.containerHeader}>
            <Text style = {styles.textHeader}> Mundial de Figus </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        height: 120,
        backgroundColor: colors.frenchGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 32,
        fontFamily: 'Anton',
    },
})