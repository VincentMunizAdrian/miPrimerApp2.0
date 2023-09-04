import { 
    StyleSheet, 
    Text, 
    TextInput, 
    View 
} from 'react-native'
import React, { useState } from 'react'

import { colors } from '../Global/Colors';

/**
 * Inputform to enter data for LoginScreen and SignupScreen
 * @param label
 * @param onChange
 * @param error
 * @param isSecure
 */

const InputForm = ({
    label, 
    onChange, 
    error = "",
    isSecure = false
}) => {
    const [input, setInput] = useState("");
    const onChangeText = (text) => {
        setInput(text)
        onChange(text)
    }
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.subtitle}>{label}</Text>
            <TextInput
                style ={styles.input}
                value={input}
                onChangeText={onChangeText}
                secureTextEntry={isSecure}
                blurOnSubmit={true}
            />
            {error ? 
                <Text style = {styles.error}>
                    {error}
                </Text>
                :
                null
            }
        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
    },
    subtitle: {
        width: '90%',
        fontSize: 16,
        color: colors.black,
        fontFamily: 'Anton'
    },
    error: {
        fontSize: 16,
        color: 'red',
        fontStyle: 'italic',
    },
    input: {
        width: '95%',
        borderWidth: 0,
        borderBottomWidth: 3,
        padding: 2,
        fontSize: 14,
        color: colors.black,
        borderColor: colors.black,
        marginBottom: 2
    }
})