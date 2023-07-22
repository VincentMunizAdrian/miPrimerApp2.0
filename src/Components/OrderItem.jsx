import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import React from 'react'

import { Feather } from "@expo/vector-icons";

import { colors } from "../Global/Colors";

const OrderItem = ({order}) => {
      // additional queda para el costo de envio
    const additional = 0
    const factura = order.items.reduce(
    (acc, currentItem) => (acc += currentItem.precio * currentItem.quantity), additional 
    );
    console.log(factura);

    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {new Date(order.createdAt).toLocaleString()}
                </Text>
                <Text style={styles.text2}>${factura}</Text>
            </View>
            <Feather name="search" size={30} color="black" />
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    card: {
        height: 100,
        // backgroundColor: colors.peach,
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
        // fontFamily: '',
        fontSize: 17,
        color: "black",
    },
    text2: {
        // fontFamily: '',
        fontSize: 19,
        color: "gray",
    },
});