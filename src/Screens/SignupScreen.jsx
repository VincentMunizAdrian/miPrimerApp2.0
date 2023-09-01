import { 
    Pressable, 
    StyleSheet, 
    Text, 
    View 
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

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
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Signup</Text>
                <InputForm label={"email"} onChange={setEmail} error={errorMail} />
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
                <SubmitButton onPress={onSubmit} title="Send" />
                <Text style={styles.sub}>Already have an account?</Text>
                <Pressable
                    style={styles.buttonLogin}
                    onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLink}>Login</Text>
                </Pressable>
            </View>
        </View>
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
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
    },
    sub: {
        fontSize: 14,
        color: "black",
    },
    buttonLogin: {
        backgroundColor: colors.onyx,
        height: 30,
        width: 50,
        alignItems: 'center',
        borderRadius: 5
    },
    subLink: {
        fontSize: 16,
        fontFamily: "Anton",
        color: colors.white,
    },
});