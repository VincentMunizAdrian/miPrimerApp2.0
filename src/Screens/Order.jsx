// Las ordenes llegan por json local, hay que agregar uno para ordenes en RDB
// y que lleguen por usuario. 

import { 
  FlatList,
  StyleSheet,
  View 
} from 'react-native'
import React from 'react'

// import OrderInfo from '../Data/ordes.json'
import OrderItem from '../Components/OrderItem'
import { colors } from '../Global/Colors'
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../Services/orderServices'

const Order = () => {
  const email = useSelector(state => state.userReducer.value.email)
    const { data: orderData, isLoading, isError } = useGetOrdersQuery(email);

  return (
    <View style={styles.containerOrder}>
      <FlatList 
        // data={OrderInfo}
        data={orderData}
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