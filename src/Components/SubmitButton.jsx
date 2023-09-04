import { 
    Pressable, 
    StyleSheet, 
    Text 
} from "react-native";
import React from "react";

/**
 * Submit the data for LoginScreen and onSubmit
 * @param onPress perform an action
 * @param title text of submit
 */

const SubmitButton = ({ 
    onPress, 
    title 
}) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: '60%'
    },
    text: {
        fontSize: 22
    },
});