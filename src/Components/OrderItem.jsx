import { 
    StyleSheet, 
    Text, 
    View,
    Alert,
    Modal,
    Pressable,
} from 'react-native'
import React, {useState} from 'react';

import { Fontisto } from '@expo/vector-icons';

import { colors } from "../Global/Colors";

const OrderItem = ({item}) => {
      // additional queda para el costo de envio
    // const additional = 0
    // const factura = order.items.reduce(
    // (acc, currentItem) => (acc += currentItem.precio * currentItem.quantity), additional 
    // );
    // console.log(factura);

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Fecha y Hora:</Text>
                <Text style={styles.text}>
                    {item.updatedAt}
                    {/* {new Date(item.createdAt).toLocaleString()} */}
                </Text>
                {/* <Text style={styles.text2}>Total: ${factura}</Text> */}
                <Text style={styles.text2}>Total: ${item.total}</Text>
                {/* <Text>
                    {item.total}
                </Text> */}
            </View>
            <Pressable
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Fontisto name="preview" size={30} color="black" />
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
                    <Text style={styles.modalText}>N° de pedido: {item.id} </Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default OrderItem

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
        paddingTop: 20,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: 'Anton',
        fontSize: 17,
        color: "black",
    },
    text2: {
        fontFamily: 'Anton',
        fontSize: 19,
        color: "gray",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
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
    buttonClose: {
        backgroundColor: colors.gray,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        fontFamily: 'Anton',
        textAlign: 'center',
        marginBottom: 15,
    },
});