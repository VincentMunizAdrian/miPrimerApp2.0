import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../Components/Header';
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
            <Stack.Screen name='Tu Lista de Compras' component={Order}/>
        </Stack.Navigator>
    )
}

export default OrderStack