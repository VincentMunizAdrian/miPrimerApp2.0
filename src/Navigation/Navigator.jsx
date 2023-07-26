import { 
    SafeAreaView, 
    StyleSheet,
    Platform,
    StatusBar,
    View,
} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ShopStack from './ShopStack';
import CartStack from './CartStack';
import OrderStack from './OrderStack';
import { colors } from '../Global/Colors';

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <NavigationContainer>
                <Tab.Navigator                
                    screenOptions={() => ({
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarStyle: styles.navigatorBar,
                        tabBarHideOnKeyboard: true,
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
                                        <Entypo name="shop" size={26} color={ focused ? "black" : colors.gray} />
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
                                        <Ionicons name="md-cart-outline" size={28} color={ focused ? "black" : colors.gray} />
                                        {/* lo dejo para un condicional */}
                                        {/* <Ionicons name="md-cart-sharp" size={34} color="black" /> */}
                                    </View>
                                )
                            }} 
                        }
                    />
                    <Tab.Screen
                        name='Order'
                        component={OrderStack}
                        options={{
                            tabBarIcon: ({focused}) => {
                                return (
                                    <View>
                                        <MaterialCommunityIcons name="clipboard-list-outline" size={28} color={ focused ? "black" : colors.gray} />
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
        height: 50,
        backgroundColor: colors.whiteGray,
        borderTopColor: colors.onyx,
        borderTopWidth: 2,
    },
    // navigatorBar: {
    //     height: 65,
    //     backgroundColor: colors.whiteGray,
    //     shadowColor: colors.black,
    //     elevation: 8,
    //     position: 'absolute',
    //     bottom: 25,
    //     left: 20,
    //     right: 20,
    //     borderRadius: 80,
    //     borderBottomColor: colors.onyx,
    //     borderBottomWidth: 2,
    //     borderRightColor: colors.onyx,
    //     borderRightWidth: 2,
    //     borderTopColor: colors.onyx,
    //     borderTopWidth: 2,
    //     borderLeftColor: colors.onyx,
    //     borderLeftWidth: 2,
    // },
})