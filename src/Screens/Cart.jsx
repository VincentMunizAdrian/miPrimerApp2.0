import { 
  FlatList,
  StyleSheet,
  Text,
  View 
} from 'react-native'
import React from 'react'
import { Pressable } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import CartItem from '../Components/CartItem';
import { colors } from '../Global/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { usePostCartMutation } from '../Services/shopServices';
import { useEffect } from 'react';
import { removeFullCart } from '../Features/Cart/cartSlice';
import { useGetPreOrdersQuery } from '../Services/orderServices';
import PreCartItem from '../Components/PreCartItem';

const Cart = () => {
  const {items: CartData, total, updatedAt, user, id} = useSelector(state => state.cartReducer.value)
  const [triggerPostCart, result] = usePostCartMutation()
  const dispatch = useDispatch()
  
  const email = useSelector(state => state.userReducer.value.email)
  const {data: preOrder} = useGetPreOrdersQuery(email)

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(removeFullCart())
    }
  }, [result])
  
  const onConfirm = () => {
    triggerPostCart({items: CartData, total, updatedAt, user, id})
  }
  
  // const {data: preOrderData, isLoading, isError} = useGetPreOrdersQuery(email);
  // const totalCompra = useSelector(state => state.cartReducer.value.item)
  
  // console.log(totalCompra);
  // console.log(result);

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
      
      {/* {preOrder ? 
        <FlatList
        data={preOrder}
        // data={preOrderData}
        keyExtractor={cartItem => cartItem.id} 
        renderItem={({item}) => {
          return (
            <PreCartItem
              cartItem={item}
            />
          )
        }}
      /> :
        <FlatList
        data={CartData}
        // data={preOrderData}
        keyExtractor={cartItem => cartItem.id} 
        renderItem={({item}) => {
          return (
            <CartItem
              cartItem={item}
            />
          )
        }}
      />} */}

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
})