import { 
    Modal,
    StyleSheet, 
    Text, 
    View,
    Pressable,
    Image
} from "react-native";
import { useDispatch } from "react-redux";
import React, { useState } from "react";

import { colors } from "../Global/Colors";
import { removeCartItem } from "../Features/Cart/cartSlice";

import { FontAwesome } from '@expo/vector-icons';

/**
 * Format with data of the items for Cart
 * @param cartItem return the format flatList container
 */

const CartItem = ({ 
    cartItem 
}) => {

    const dispatch = useDispatch()
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.card}>
            <View style={styles.textImgContainer}>
                <Image
                    source={{uri: cartItem.imagen}}
                    style={styles.image}
                    resizeMode='cover'
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{cartItem.nombre} </Text>
                    <Text>Cantidad: {cartItem.quantity} U.</Text>
                    <Text style={styles.text2}>Subtotal: ${cartItem.precio * cartItem.quantity}</Text>
                </View>
            </View>

            <Pressable
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <FontAwesome name="trash-o" size={34} color="black" />
            </Pressable>
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <>
                            <Text style={styles.modalText}>Delete this product?</Text>
                        </>
                        <View style={styles.yesOrNoButton}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={()=> dispatch(removeCartItem(cartItem.id))
                                & setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>✔</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>✖</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.platinum,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textImgContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    image: {
        width: 60,
        borderRadius: 7,
    },
    textContainer: {
        width: "60%",
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        flexDirection: 'column',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        backgroundColor: colors.platinum,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    yesOrNoButton: {
        flexDirection: 'row',
        gap:20,
        marginTop: 20
    },
    buttonClose: {
        backgroundColor: colors.gray,
    },
});