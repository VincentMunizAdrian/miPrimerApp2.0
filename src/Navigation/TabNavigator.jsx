import { 
    StyleSheet,
    View,
} from 'react-native';
import React from 'react';

import ShopStack from './ShopStack';
import CartStack from './CartStack';
import { colors } from '../Global/Colors';

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import MyProfileStack from './MyProfileStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// NavigationTabs between Shop, Cart and Profile

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
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
                            </View>
                        )
                    }} 
                }
            />
            <Tab.Screen
                name='myProfile'
                component={MyProfileStack}
                options={{
                    tabBarIcon: ({focused}) => {
                        return (
                            <View>
                                <FontAwesome5 name="user-circle" size={28} color={ focused ? "black" : colors.gray}/>
                            </View>
                        )
                    }} 
                }
            />
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    navigatorBar: {
        height: 50,
        backgroundColor: colors.whiteGray,
        borderTopColor: colors.onyx,
        borderTopWidth: 2,
    },
})