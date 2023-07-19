import { 
    SafeAreaView, 
    StyleSheet,
    Platform,
    StatusBar
    // Text, 
    // View 
} from 'react-native'
import React from 'react'
import Header from '../Components/Header';
import ItemListCategory from '../Screens/ItemListCategory';
import Home from '../Screens/Home';
import ItemDetail from '../Screens/ItemDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <NavigationContainer>
                {/* <Header/> */}
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
                    })}
                    // screenOptions={
                    //     ({route}) => (
                    //         {
                    //             header: () => {
                    //                 return <Header title={
                    //                     route.name === 'Categories' ? 'Categories' :
                    //                     route.name === 'ItemListCategory' ? route.params.category :
                    //                     'Detail'
                    //                 }/>
                    //             }
                    //         }
                    //     )
                    // }
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