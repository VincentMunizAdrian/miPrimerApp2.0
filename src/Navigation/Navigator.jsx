import { 
    SafeAreaView, 
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Header from '../Components/Header';
// import ItemListCategory from '../Screens/ItemListCategory';
// import Home from '../Screens/Home';
// import ItemDetail from '../Screens/ItemDetail';
import ShopStack from './ShopStack';
import CartStack from './CartStack';

// const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <NavigationContainer>
                {/* <Stack.Navigator
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
                </Stack.Navigator> */}
                {/* <ShopStack/> */}
                {/* <CartStack/> */}
                <Tab.Navigator
                // initialRouteName='Home'
                
                screenOptions={(
                    // {route, navigation}
                ) => (
                    {
                        // header: () => {
                        //     return <Header
                        //     route = {route}
                        //     navigation = {navigation}
                        //     />
                        // },
                        headerShown: false,
                        tabBarShowLabel: false,
                    }
                )}
                >
                    <Tab.Screen
                        name='Shop'
                        component={ShopStack}
                    />
                    <Tab.Screen
                        name='Cart'
                        component={CartStack}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS ==="android" ? StatusBar.currentHeight : 0
    },
})