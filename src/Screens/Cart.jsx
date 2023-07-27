import { 
  FlatList,
  StyleSheet,
  Text,
  View 
} from 'react-native'
import React from 'react'

import CartData from '../Data/cart.json'
import CartItem from '../Components/CartItem';
import { Pressable } from 'react-native';
import { colors } from '../Global/Colors';

const Cart = () => {
  
  // additional queda para el costo de envio
  const additional = 0

  const total = CartData.reduce((acc, currentItem) => acc += currentItem.precio*currentItem.quantity, additional)
  console.log(total);
  
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
        }}
      />
      <View style={styles.totalContainer}>
        <Pressable style={styles.confirmButton}>
          <Text style={styles.textCategory}>Confirmar Compra</Text>
          <Text style={styles.textCategory}>Total: ${total}</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  containerCart: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.platinum,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    width: 150,
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
    marginBottom: 120,
  },
  textCategory: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'Anton',
},
})