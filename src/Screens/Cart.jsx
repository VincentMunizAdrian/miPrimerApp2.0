import { 
  DevSettings,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  View 
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesome5 } from '@expo/vector-icons';

import CartItem from '../Components/CartItem';
import { colors } from '../Global/Colors';
import { usePostCartMutation } from '../Services/shopServices';
import { removeFullCart } from '../Features/Cart/cartSlice';
import { signOut } from '../Features/User/userSlice';

const Cart = () => {
  const {items: CartData, total, updatedAt, user, id} = useSelector(state => state.cartReducer.value)
  const [triggerPostCart, result] = usePostCartMutation()
  const dispatch = useDispatch()

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(removeFullCart())
    }
  }, [result])
  
  const onConfirm = () => {
    triggerPostCart({items: CartData, total, updatedAt, user, id})
    setModalVisible(true)
    // DevSettings.reload()
  }

  return (
    <View style={styles.containerCart}>
      <FlatList
        data={CartData}
        keyExtractor={cartItem => cartItem.id} 
        renderItem={({item}) => {
          return (
            <CartItem
              cartItem={item}
            />
          )
        }
      }
      showsVerticalScrollIndicator={false}
      />

      <View style={styles.totalContainer}>
        {
          total === 0 ? 
          <View style={styles.emptyCartContainer}>
            <Text style={styles.emptyCartMsj}>The cart is empty</Text>
            <FontAwesome5 name="sad-cry" size={32} color="black" />
          </View>
          : 
          <Pressable 
          style={styles.confirmButton}
          onPress={onConfirm}
          >
          <Text style={styles.textCategory}>Confirmar Compra</Text>
          <Text style={styles.textCategory}>Total: ${total}</Text>
        </Pressable>
        }
      </View>
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
                      <View>
                        <Text style={styles.textModal}>Your order is done,</Text>
                        <Text style={styles.textModal}>thanks for buying</Text>
                      </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            //se decidio recargar la app para que traiga las ordenes realizadas
                            onPress={() => {setModalVisible(!modalVisible), DevSettings.reload()}}
                        >
                            <Text style={styles.textStyle}>Continue Shop</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  containerCart: {
    flex: 1,
    justifyContent: 'space-between',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    width: 130,
    shadowColor: "#000",
    shadowOffset:{
        width: 0,
        height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    borderWidth: 2,
    marginVertical: 12,
    borderColor: colors.black,
    backgroundColor: colors.lightOnyx,
    borderRadius: 7,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  textCategory: {
    color: colors.white,
    fontSize: 15,
    fontFamily: 'Anton',
  },
  emptyCartContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    bottom: '70%',
  },
  emptyCartMsj: {
    fontSize: 28,
    fontFamily: 'Anton'
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
    gap:20
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
  textModal: {
    fontSize: 34,
    fontFamily: 'Anton',
  }
})