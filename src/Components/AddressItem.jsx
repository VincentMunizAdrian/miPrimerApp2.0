import { 
    Pressable, 
    StyleSheet, 
    Text, 
    View 
} from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";

/**
 * Set and return your location for ListAddress
 * @param location set the address
 * @param navigation travel to another screen
 */

const AddressItem = ({ 
    location, 
    navigation 
}) => {
    const onChangeLocation = () => {
        navigation.navigate('Location Selector')
    }

    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {location.address}
                </Text>
            </View>
            <Pressable onPress={onChangeLocation}>
                <Entypo name="location" size={30} color="black">
                    <Text style={styles.text2}>Change</Text>
                </Entypo>
            </Pressable>
        </View>
    );
};

export default AddressItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontSize: 17,
        color: "black",
    },
    text2: {
        fontSize: 19,
    },
});