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
        <Pressable>
          <Text>Confirmar Compra</Text>
        </Pressable>
          <Text>Total: ${total}</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  containerCart: {
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 120,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})