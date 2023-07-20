import { 
    Pressable, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import React from 'react'

import { colors } from '../Global/Colors'

import { Ionicons } from '@expo/vector-icons';

const Header = ({
    route,
    navigation,
}
) => {
    return (
        <View style = {styles.containerHeader}>
            {
            route.name === "Home" ? 
            <Text style = {styles.textHeader}> Mundial de Figus </Text> :
            route.name === "ListCategory" ? 
            <Text style = {styles.textHeader}> {route.params.category} </Text> :
            <Text style = {styles.textHeader}> {route.params.title} </Text>
            }
            
            {
            route.name === "Home" ? null :
            <Pressable 
            style={styles.pressable}
            onPress={()=> navigation.goBack()}>
                <Ionicons name="arrow-back-circle-outline" size={36} color="black" />
            </Pressable>
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        height: 80,
        backgroundColor: colors.frenchGray,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    pressable:{
        position: 'absolute',
        left: 10,
        top: '37%'
    },
    textHeader: {
        fontSize: 32,
        fontFamily: 'Anton',
    },
})