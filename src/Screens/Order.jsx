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
// import { useGetOrdersQuery } from '../Services/orderServices'
import { useGetOrdersQuery } from '../Services/orderServices'
// import { useState } from 'react'

const Order = () => {
  const email = useSelector(state => state.userReducer.value.email)
  const { data: orderData, isLoading, isError } = useGetOrdersQuery(email);


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
        data={orderData}
        keyExtractor={orderItem => orderItem.id}
        renderItem={({item}) => {
          return (
            <OrderItem
              item={item}
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