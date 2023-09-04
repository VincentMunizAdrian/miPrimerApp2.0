import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignupScreen from "../Screens/SignupScreen";
import LoginScreen from "../Screens/LoginScreen";

// NavigationStack between login and log screens

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={() => ({
                header: () => {
                    return null
                },
            })}
        >
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;