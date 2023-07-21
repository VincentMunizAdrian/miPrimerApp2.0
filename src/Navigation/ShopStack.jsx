import { 
    StyleSheet, 
} from 'react-native'
import React from 'react'

import Header from '../Components/Header';
import ItemListCategory from '../Screens/ItemListCategory';
import Home from '../Screens/Home';
import ItemDetail from '../Screens/ItemDetail';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const ShopStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={({route, navigation}) => (
                {
                    header: () => {
                        return <Header
                            route = {route}
                            navigation = {navigation}
                        />
                    }
                }
            )}
        >
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='ListCategory'
                component={ItemListCategory}
            />
            <Stack.Screen
                name='Detail'
                component={ItemDetail}
            />
        </Stack.Navigator>
    )
}

export default ShopStack

const styles = StyleSheet.create({})