import { 
    SafeAreaView, 
    StyleSheet,
    Platform,
    StatusBar,
} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import ShopStack from './ShopStack';
// import CartStack from './CartStack';
// import OrderStack from './OrderStack';
// import { colors } from '../Global/Colors';

import AuthStack from './AuthStack';
import { useDispatch, useSelector } from 'react-redux';
import TabNavigator from './TabNavigator';
import { useEffect } from 'react';
import { getSession } from '../SQLite';
import { setUser } from '../Features/User/userSlice';
// import { Ionicons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';
// import MyProfileStack from './MyProfileStack';

// const Tab = createBottomTabNavigator();

const Navigator = () => {

    const {email} = useSelector(state => state.userReducer.value)

    const dispatch = useDispatch()

    //Get stored sessions
    useEffect(()=> {
        (async ()=> {
            try {
                const session = await getSession()
                if (session?.rows.length) {
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            } catch (error) {
                
            }
        })()
    }, [])

    return (
        <SafeAreaView style = {styles.container}>
            <NavigationContainer>
                { email ? 
                    <TabNavigator/>
                    // <Tab.Navigator
                    //     screenOptions={() => ({
                    //         headerShown: false,
                    //         tabBarShowLabel: false,
                    //         tabBarStyle: styles.navigatorBar,
                    //         tabBarHideOnKeyboard: true,
                    //     }
                    // )}
                    //     >
                    //     <Tab.Screen
                    //         name='Shop'
                    //         component={ShopStack}
                    //         options={{
                    //             tabBarIcon: ({focused}) => {
                    //                 return (
                    //                     <View>
                    //                         <Entypo name="shop" size={26} color={ focused ? "black" : colors.gray} />
                    //                     </View>
                    //                 )
                    //             }} 
                    //         }
                    //     />
                    //     <Tab.Screen
                    //         name='Cart'
                    //         component={CartStack}
                    //         options={{
                    //             tabBarIcon: ({focused}) => {
                    //                 return (
                    //                     <View>
                    //                         <Ionicons name="md-cart-outline" size={28} color={ focused ? "black" : colors.gray} />
                    //                     </View>
                    //                 )
                    //             }} 
                    //         }
                    //     />
                    //     <Tab.Screen
                    //         name='Order'
                    //         component={OrderStack}
                    //         options={{
                    //             tabBarIcon: ({focused}) => {
                    //                 return (
                    //                     <View>
                    //                         <MaterialCommunityIcons name="clipboard-list-outline" size={28} color={ focused ? "black" : colors.gray} />
                    //                     </View>
                    //                 )
                    //             }} 
                    //         }
                    //     />
                    //     <Tab.Screen
                    //         name='myProfile'
                    //         component={MyProfileStack}
                    //         options={{
                    //             tabBarIcon: ({focused}) => {
                    //                 return (
                    //                     <View>
                    //                         <FontAwesome5 name="user-circle" size={28} color={ focused ? "black" : colors.gray}/>
                    //                     </View>
                    //                 )
                    //             }} 
                    //         }
                    //     />
                    // </Tab.Navigator>
                    : <AuthStack/>
                }

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
    // navigatorBar: {
    //     height: 50,
    //     backgroundColor: colors.whiteGray,
    //     borderTopColor: colors.onyx,
    //     borderTopWidth: 2,
    // },
})