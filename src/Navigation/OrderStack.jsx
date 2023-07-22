import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Header from '../Components/Header';
import Cart from '../Screens/Cart';
import Order from '../Screens/Order';


const Stack = createNativeStackNavigator();


const OrderStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Order'
            screenOptions={({ route, navigation }) => ({
                header: () => {
                    return <Header route={route} navigation={navigation}/>;
                },
            })}
        >
            <Stack.Screen name='OrderScreen' component={Order}/>
        </Stack.Navigator>
    )
}

export default OrderStack

const styles = StyleSheet.create({})