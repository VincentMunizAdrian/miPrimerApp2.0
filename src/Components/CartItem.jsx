import { 
    StyleSheet, 
    Text, 
    View 
} from "react-native";
import React from "react";

import { colors } from "../Global/Colors";

import { FontAwesome } from '@expo/vector-icons';

const CartItem = ({ cartItem }) => {
    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{cartItem.nombre} </Text>
                <Text>Cantidad: {cartItem.quantity} U.</Text>
                <Text style={styles.text2}>Subtotal: ${cartItem.precio * cartItem.quantity}</Text>
            </View>
            {/* Por ahora se deja sin logica el boton para eliminar */}
            <FontAwesome name="trash-o" size={34} color="black" />
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.whiteGray,
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
        fontFamily: "Anton",
        fontSize: 19,
    },
    text2: {
        fontFamily: "Anton",
        fontSize: 14,
    },
});