import { 
    ImageBackground,
    TouchableOpacity,
    StyleSheet, 
    Text, 
    View 
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { BlurView } from 'expo-blur';

import SubmitButton from "../Components/SubmitButton";
import InputForm from "../Components/InputForm";
import { colors } from "../Global/Colors";
import { useSignUpMutation } from "../Services/authServices";
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth";
import { setUser } from "../Features/User/userSlice";
import { setUserCart } from "../Features/Cart/cartSlice";
import { insertSession } from "../SQLite";

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const [triggerSignUp, result] = useSignUpMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        try {
            const isValidVariableEmail = isValidEmail(email)
            const isCorrectPassword = isAtLeastSixCharacters(password)
            const isRepeatedPasswordCorrect = password === confirmPassword
            
            if (isValidVariableEmail && isCorrectPassword && isRepeatedPasswordCorrect) {
                const request = {
                    email,
                    password,
                    returnSecureToken: true
                }
                triggerSignUp(request)
            }
            
            if (!isValidVariableEmail) setErrorMail ('Email is not correct')
            else setErrorMail('')
            if (!isCorrectPassword) setErrorPassword ('Password must be at least 6 characters')
            else setErrorPassword('')
            if (!isRepeatedPasswordCorrect) setErrorConfirmPassword ('Passwords must match')
            else setErrorConfirmPassword('')

        } catch (err) {
            console.log("Catch error");
        }
    };

    useEffect(() => {
        (async () => {
            try {
                if (result.isSuccess) {
                    const response = await insertSession({
                        idToken: result.data.idToken,
                        localId: result.data.localId,
                        email: result.data.email,
                    })

                    dispatch(
                        setUser({
                            email: result.data.email,
                            idToken: result.data.idToken,
                            localId: result.data.localId,
                            profileImage: "",
                            location: {
                                latitude: "",
                                longitude: "",
                                address: ""
                            },
                        })
                    )
                    dispatch(setUserCart(result.data.email))
                } 
            } catch (error) {
            }
        })()
    }, [result])



    return (
        <ImageBackground
            source={require('../Assets/Images/backGroundImage.jpg')}
            resizeMode='stretch'
            style={styles.imagen}
        >                
            <View style={styles.main}>
                <BlurView intensity={70} tint='light' style={styles.blurContainer}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Signup</Text>
                        <InputForm 
                            label={"email"} 
                            onChange={setEmail} 
                            error={errorMail} 
                        />
                        <InputForm
                            label={"password"}
                            onChange={setPassword}
                            error={errorPassword}
                            isSecure={true}
                        />
                        <InputForm
                            label={"confirm password"}
                            onChange={setconfirmPassword}
                            error={errorConfirmPassword}
                            isSecure={true}
                        />
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonSubmit}>
                                <SubmitButton onPress={onSubmit} title="Send" />
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.1}
                                style={styles.buttonLogin}
                                onPress={() => navigation.navigate("Login")}>
                                <Text style={styles.subLink}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        {errorMail ? 
                        <Text style={styles.sub}>Already have an account?</Text>
                        : null
                        }
                    </View>
                </BlurView>    
            </View>
        </ImageBackground>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 42,
        fontFamily: 'Anton',
        color: 'black',
    },
    sub: {
        fontSize: 16,
        color: "black",
    },
    buttonSubmit: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'green',
        backgroundColor: colors.white,
        width: '32%',
        borderRadius: 20
    },
    buttonLogin: {
        backgroundColor: colors.onyx,
        height: 40,
        width: 80,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subLink: {
        fontSize: 16,
        fontFamily: "Anton",
        color: colors.white,
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
});