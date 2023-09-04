import { 
    Image,
    Pressable, 
    StyleSheet, 
    Text, 
} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

import { BlurView } from 'expo-blur';

import { colors } from '../Global/Colors'

import { Ionicons } from '@expo/vector-icons';

/**
 * Navigation header for CartStack, MyProfileStack and ShopStack
 * @param route navigate between route names
 * @param navigation navigate back
 */

const Header = ({
    route,
    navigation,
}) => {

    const {email} = useSelector(state => state.userReducer.value)

    return (
        <BlurView style = {styles.containerHeader}>
            <Image
                source={require('../Assets/Images/backGroundImage.jpg')}
                resizeMode='cover'
                style={styles.imagen}
            />
            {
                route.name === "Home" ? 
            <Text style = {styles.textHeader}> Mundial de Figus </Text> :
            route.name === "ListCategory" ? 
            <Text style = {styles.textHeader}> {route.params.category} </Text> :
            route.name === "Detail" ?
            <Text style = {styles.textHeader}> {route.params.title} </Text> :
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
            
        </BlurView>
    )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        marginTop: 10,
        width: '95%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        alignSelf: 'center',
        borderRadius: 15
    },
    buttonBack:{
        position: 'absolute',
        left: 10,
        top: '27%'
    },
    textHeader: {
        fontSize: 32,
        fontFamily: 'Anton',
        color: colors.black
    },
    imagen: {
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 15,
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
})