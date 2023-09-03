import { 
    StyleSheet, 
    Text, 
    View,
    Alert,
    Modal,
    Pressable,
    FlatList
} from 'react-native'
import React, {useEffect, useState} from 'react';

import { colors } from "../Global/Colors";

import { Fontisto } from '@expo/vector-icons';
import { useGetOrdersQuery } from '../Services/orderServices';

const OrderItem = ({item}) => {
    const nuevoArreglo = item.items.map(objeto => ({
        nombre: objeto.nombre,
        quantity: objeto.quantity,
        precio: objeto.precio
    }));

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             if (nuevoArreglo) {
    //                 const orderDone = await useGetOrdersQuery({
    //                     nombre: objeto.nombre,
    //                     quantity: objeto.quantity,
    //                     precio: objeto.precio
    //                 })
    //             }
    //         }catch (err) {
    //         }
    //     })
    // }, [])


    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Fecha y Hora:</Text>
                <Text style={styles.text}>
                    {item.updatedAt}
                </Text>
                <Text style={styles.text2}>Total: ${item.total}</Text>
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
                    <FlatList
                        data={nuevoArreglo}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.orderList}>
                                <View style={styles.itemsColum}>
                                    <Text>Name Item:</Text>
                                    <Text>{item.nombre}</Text>
                                </View>
                                <View>
                                    <Text>Quantity:</Text>
                                    <Text>{item.quantity}</Text>
                                </View>
                                <View>
                                    <Text>Price:</Text>
                                    <Text>{item.precio}</Text>
                                </View>
                            </View>)}
                    />

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
    orderList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '99%',
        gap: 10,
        padding: 30,
        borderColor: 'red'
    },
});