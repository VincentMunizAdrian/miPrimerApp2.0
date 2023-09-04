import { 
    Pressable, 
    StyleSheet, 
    Text 
} from "react-native";
import React from "react";

import { colors } from "../Global/Colors";

/**
 * Perform an action that is required for ImageSelector, ListAddress, LocationSelector and MyProfile
 * @param title name the button with the title of your need
 * @param onPress take the action you need
 * @param color return for default the color of the button already set
 */

const AddButton = ({
    title = "",
    onPress = () => {},
    color = colors.platinum,
}) => {
    return (
        <Pressable
            style={{ ...styles.button, backgroundColor: color }}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    button: {
        width: "80%",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        borderRadius: 20,
    },
    text: {
        fontFamily: "Anton",
        fontSize: 18,
    },
});