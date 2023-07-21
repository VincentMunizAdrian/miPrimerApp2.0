import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Header from '../Components/Header';
import Cart from '../Screens/Cart';


const Stack = createNativeStackNavigator();


const CartStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={({ route, navigation }) => ({
                header: () => {
                    return <Header route={route} navigation={navigation}/>;
                },
            })}
        >
            <Stack.Screen name='CartScreen' component={Cart}/>
        </Stack.Navigator>
    )
}

export default CartStack

const styles = StyleSheet.create({})