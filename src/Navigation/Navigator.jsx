import { 
    SafeAreaView, 
    StyleSheet,
    Platform,
    StatusBar,
    View
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
import { colors } from '../Global/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

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
                        tabBarStyle: styles.navigatorBar,
                    }
                    )}
                    >
                    <Tab.Screen
                        name='Shop'
                        component={ShopStack}
                        options={{
                            tabBarIcon: ({focused}) => {
                                return (
                                    <View>
                                        <Entypo name="shop" size={30} color={ focused ? "black" : colors.gray} />
                                    </View>
                                )
                            }} 
                        }
                    />
                    <Tab.Screen
                        name='Cart'
                        component={CartStack}
                        options={{
                            tabBarIcon: ({focused}) => {
                                return (
                                    <View>
                                        <Ionicons name="md-cart-outline" size={34} color={ focused ? "black" : colors.gray} />

                                        {/* lo dejo para un condicional */}
                                        {/* <Ionicons name="md-cart-sharp" size={34} color="black" /> */}
                                    </View>
                                )
                            }} 
                        }
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
    navigatorBar: {
        height: 70,
        backgroundColor: colors.whiteGray,
        shadowColor: colors.black,
        elevation: 8,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 80,
        borderBottomColor: colors.onyx,
        borderBottomWidth: 2,
        borderRightColor: colors.onyx,
        borderRightWidth: 2,
        borderTopColor: colors.onyx,
        borderTopWidth: 2,
        borderLeftColor: colors.onyx,
        borderLeftWidth: 2,
    },
})