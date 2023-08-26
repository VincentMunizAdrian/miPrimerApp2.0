// Las ordenes llegan por json local, hay que agregar uno para ordenes en RDB
// y que lleguen por usuario. 

import { 
  FlatList,
  StyleSheet,
  View 
} from 'react-native'
import React, { useEffect } from 'react'

// import OrderInfo from '../Data/ordes.json'
import OrderItem from '../Components/OrderItem'
import { colors } from '../Global/Colors'
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../Services/orderServices'
// import { useState } from 'react'

const Order = () => {
  // const email = useSelector(state => state.cartReducer.value.user)
  // const email = useSelector(state => state.userReducer.value.email)
  const email = useSelector(state => state.cartReducer.value.user)
  console.log(email);
  const { data: orderData, isLoading, isError } = useGetOrdersQuery(email);

  console.log(isLoading);
  console.log(isError);

  // const [orders, setOrders] = useState([])

  // useEffect(() => {
  //   if(orderData) {
  //     const ordersDone = orderData.filter( order =>
  //     order.email === order.user)
  //     setOrders(ordersDone)
  //   }
  // }, [orderData])

  return (
    <View style={styles.containerOrder}>
      <FlatList 
        // data={OrderInfo}
        data={orderData}
        // data={orders}
        keyExtractor={orderItem => orderItem.id}
        renderItem={({item}) => {
          return (
            <OrderItem
              order={item}
            />
          )
        }}
      />
    </View>
  )
}

export default Order

const styles = StyleSheet.create({
  containerOrder: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.platinum,
  },
})