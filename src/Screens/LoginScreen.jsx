import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { colors } from '../Global/Colors'
import { useSignInMutation } from '../Services/authServices'
import { useState } from 'react'
import { isAtLeastSixCharacters, isValidEmail } from '../Validations/auth'
import { setUser } from '../Features/User/userSlice'
import { useDispatch } from 'react-redux'

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorEmailPassword, setErrorEmailPassword] = useState("")

    const dispatch = useDispatch()

    const [triggerSignIn, resultSignIn] = useSignInMutation()
    const onSubmit = () => {
        const isValidVariableEmail = isValidEmail(email)
        const isCorrectPassword = isAtLeastSixCharacters(password)

        if (isValidVariableEmail && isCorrectPassword) {
            triggerSignIn({
                email,
                password,
                returnSecureToken: true
            });
        }
        
        if (!isValidVariableEmail || !isCorrectPassword) setErrorEmailPassword ('The Email or the Password is/are not correct')
    }

    console.log(resultSignIn);

    useEffect(() => {
        if (resultSignIn.isSuccess) {
            dispatch(
                setUser({
                    email: resultSignIn.data.email,
                    idToken: resultSignIn.data.idToken,
                    localId: resultSignIn.data.localId,
                    profileImage: ""
                })
            )
        }
    }, [resultSignIn])

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Login to start</Text>
                <InputForm 
                    label={"email"}
                    onChange={(email)=>setEmail(email)}
                />
                <InputForm 
                    label={"password"}
                    onChange={(password)=>setPassword(password)}
                    error={errorEmailPassword}
                    isSecure={true}
                />
                <SubmitButton 
                    onPress={onSubmit}
                    title = "Send"
                />
                <Text style={styles.sub}>If don't have an account... Sign Up!</Text>
                <Pressable
                    style={styles.buttonSignUp}
                    onPress={()=> navigation.navigate('Signup')}>
                    <Text style={styles.subLink}>Here to</Text>
                    <Text style={styles.subLink}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
    },
    sub: {
        fontSize: 14,
        color: 'black',
    },
    buttonSignUp: {
        backgroundColor: colors.onyx,
        height: 60,
        width: 80,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subLink: {
        fontFamily: 'Anton',
        fontSize: 16,
        color: colors.white
    }
})