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
    const [errorMail, setErrorMail] = useState("");
    const [errorPassword, setErrorPassword] = useState("")

    const dispatch = useDispatch()

    const [triggerSignIn, resultSignIn] = useSignInMutation()
    const onSubmit = () => {

        //Submit logic with validations
        const isValidVariableEmail = isValidEmail(email)
        const isCorrectPassword = isAtLeastSixCharacters(password)

        if (isValidVariableEmail && isCorrectPassword) {
            triggerSignIn({
                email,
                password,
                returnSecureToken: true
            });
        }
        
        if (!isValidVariableEmail) setErrorMail ('Email is not correct')
        else setErrorMail('')
        if (!isCorrectPassword) setErrorPassword ('Password must be at least 6 characters')
        else setErrorPassword('')

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
                    error={errorMail}
                />
                <InputForm 
                    label={"password"}
                    onChange={(password)=>setPassword(password)}
                    error={errorPassword}
                    isSecure={true}
                />
                <SubmitButton 
                    onPress={onSubmit}
                    title = "Send"
                />
                <Text style={styles.sub}>Not have an account?</Text>
                <Pressable onPress={()=> navigation.navigate('Signup')}>
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
        // backgroundColor: colors.lightPink,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        // fontFamily: 'Josefin'
    },
    sub: {
        fontSize: 14,
        color: 'black',
    },
    subLink: {
        fontSize: 14,
        color: 'blue',
    }
})