import { 
    StyleSheet, 
    Text, 
    View,
    ImageBackground,
    TouchableOpacity
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { BlurView } from 'expo-blur';

import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { colors } from '../Global/Colors'
import { useSignInMutation } from '../Services/authServices'
import { isAtLeastSixCharacters, isValidEmail } from '../Validations/auth'
import { setUser } from '../Features/User/userSlice'
import { setUserCart } from '../Features/Cart/cartSlice'
import { insertSession } from '../SQLite'

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorEmailPassword, setErrorEmailPassword] = useState("")

    const [triggerSignIn, resultSignIn] = useSignInMutation()
    const dispatch = useDispatch()
    
    const onSubmit = () => {
        try {
            const isValidVariableEmail = isValidEmail(email)
            const isCorrectPassword = isAtLeastSixCharacters(password)
    
            if (isValidVariableEmail && isCorrectPassword) {
                const request = {
                    email,
                    password,
                    returnSecureToken: true    
                }
                triggerSignIn(request);
            }
            
            if (!isValidVariableEmail || !isCorrectPassword) setErrorEmailPassword ('The Email or the Password are not correct')
            else setErrorEmailPassword ('')

        } catch (err) {
            console.log("catchError");
        }
        }

    useEffect(()=> {
        (async ()=> {
            try {
                if(resultSignIn.isSuccess) {                    
                    const response = await insertSession({
                        idToken: resultSignIn.data.idToken,
                        localId: resultSignIn.data.localId,
                        email: resultSignIn.data.email,
                    })
                    
                    dispatch(setUser({
                        email: resultSignIn.data.email,
                        idToken: resultSignIn.data.idToken,
                        localId: resultSignIn.data.localId,
                        profileImage: "",
                        location: {
                            latitude: "",
                            longitude: "",
                            address: "",
                        }
                    }))
                    dispatch(setUserCart(resultSignIn.data.email))
                }
            } catch (error) {
            }
        })()
    }, [resultSignIn])
    
    return (
        <ImageBackground
            source={require('../Assets/Images/backGroundImage.jpg')}
            resizeMode='stretch'
            style={styles.imagen}
        >
            <View style={styles.main}>
                <BlurView intensity={70} tint='light' style={styles.blurContainer}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Mundial de Figus</Text>
                        <InputForm 
                            label={"email"}
                            onChange={setEmail}
                            error={errorEmailPassword}
                            />
                        <InputForm 
                            label={"password"}
                            onChange={setPassword}
                            error={errorEmailPassword}
                            isSecure={true}
                            />
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonSubmit}>
                                <SubmitButton 
                                    onPress={onSubmit}
                                    title = "Send"
                                />
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.1}
                                style={styles.buttonSignUp}
                                onPress={()=> navigation.navigate('Signup')}>
                                <Text style={styles.subLink}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                        {
                            errorEmailPassword ? 
                            <Text style={styles.sub}>If don't have an account... Sign Up!</Text>
                            : null
                        }
                    </View>
                </BlurView>
            </View>
        </ImageBackground>
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        paddingVertical: 20,
    },
    title: {
        fontSize: 42,
        fontFamily: 'Anton',
        color: 'black',
    },
    buttonSubmit: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'green',
        backgroundColor: colors.white,
        width: '31%',
        borderRadius: 20
    },
    sub: {
        fontSize: 16,
        color: 'black',
    },
    buttonSignUp: {
        backgroundColor: colors.onyx,
        height: 40,
        width: 80,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subLink: {
        fontFamily: 'Anton',
        fontSize: 16,
        color: colors.white
    },
    imagen: {
        width: '100%',
        height: '100%'
    },
    blurContainer: {
        borderRadius: 15,
        width: '90%'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
    },
})