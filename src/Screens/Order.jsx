import { 
  FlatList,
  StyleSheet,
  View 
} from 'react-native'
import React from 'react'

import OrderInfo from '../Data/ordes.json'
import OrderItem from '../Components/OrderItem'

const Order = () => {
  return (
    <View>
      <FlatList 
        data={OrderInfo}
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

const styles = StyleSheet.create({})