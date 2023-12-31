import { 
    SafeAreaView, 
    StyleSheet,
    Platform,
    StatusBar,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';
import { getSession } from '../SQLite';
import { setUser } from '../Features/User/userSlice';
import { setUserCart } from '../Features/Cart/cartSlice';

// Root of Navigation between screens

const Navigator = () => {

    const {email} = useSelector(state => state.userReducer.value)

    const dispatch = useDispatch()
    
    useEffect(() => {
        (async () => {
            try {
                const session = await getSession()
                if (session?.rows.length) {
                    const user = session.rows._array[0]
                    dispatch(setUser({
                        ...user,
                        profileImage: "",
                        location: {
                            latitude: "",
                            longitude: "",
                            address: ""
                        },
                    }))
                    dispatch(setUserCart(user.email))
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
})