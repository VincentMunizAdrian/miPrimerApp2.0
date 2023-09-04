import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '../Components/Header';
import Cart from '../Screens/Cart';

// NavigationStack Cart

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
            <Stack.Screen name='shopping cart' component={Cart}/>
        </Stack.Navigator>
    )
}

export default CartStack