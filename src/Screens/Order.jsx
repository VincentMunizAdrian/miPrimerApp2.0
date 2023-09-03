import { 
  FlatList,
  StyleSheet,
  View,
  ScrollView,
  RefreshControl
} from 'react-native'
import React, { useEffect } from 'react'

import OrderItem from '../Components/OrderItem'
import { colors } from '../Global/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../Services/orderServices'

const Order = () => {
  
  // const [refreshing, setRefreshing] = React.useState(false);
  
  // const dispatch = useDispatch()

  const email = useSelector(state => state.userReducer.value.email)
  const { data: orderData, isLoading, isError } = useGetOrdersQuery(email);
  
// useEffect (() => {
//   (async () => {
//     try {
//       if (orderData) {
//         dispatch(useGetOrdersQuery())
//       }
//     } catch(err) {}
//   })
// })
  // const onRefresh = React.useCallback(() => {
  //   dispatch(useGetOrdersQuery())
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //   }, 2000);
  // }, []);

  return (
    <View style={styles.containerOrder}>
      {/* <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>

      </ScrollView> */}
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