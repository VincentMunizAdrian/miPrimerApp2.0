import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Order from '../Screens/Order';

const Stack = createNativeStackNavigator();

const OrderStack = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                header: () => {
                    return null;
                },
            })}
        >
            <Stack.Screen name='Order' component={Order}/>
        </Stack.Navigator>
    )
}

export default OrderStack