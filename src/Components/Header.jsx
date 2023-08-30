import { 
    Pressable, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import React from 'react'

import { colors } from '../Global/Colors'

import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const Header = ({
    route,
    navigation,
}) => {

    const {email} = useSelector(state => state.userReducer.value)

    return (
        <View style = {styles.containerHeader}>
            {
            route.name === "Home" ? 
            <Text style = {styles.textHeader}> Mundial de Figus </Text> :
            route.name === "ListCategory" ? 
            <Text style = {styles.textHeader}> {route.params.category} </Text> :
            route.name === "Detail" ?
            <Text style = {styles.textHeader}> {route.params.title} </Text> :
            // route.name === "My Order List" ? 
            // <Text style = {styles.textHeader}> My Order List </Text> :
            <Text style = {styles.textHeader}> {route.name} </Text> 
            }
            
            {
            route.name === "Home" ? null : 
            route.name === "Signup" ? null :
            route.name === "Login" ? null 
            : <Pressable 
                style={styles.buttonBack}
                onPress={()=> navigation.goBack()}>
                    <Ionicons name="arrow-back-circle-outline" size={38} color="black" />
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
    buttonBack:{
        position: 'absolute',
        left: 10,
        top: '37%'
    },
    textHeader: {
        fontSize: 32,
        fontFamily: 'Anton',
    },
})