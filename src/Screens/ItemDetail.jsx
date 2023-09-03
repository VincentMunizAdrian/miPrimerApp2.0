import { 
  Image,
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  Button,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addCartItem } from '../Features/Cart/cartSlice'
import Card from '../Components/Card';
import Counter from '../Components/Counter';
import { colors } from '../Global/Colors';
import { useGetProductsByIdQuery } from '../Services/shopServices';
import { setCounterBack } from '../Features/Counter/counterSlice';
import CardDetail from '../Components/CardDetail';
import { BlurView } from 'expo-blur';

const ItemDetail = ({
  route,
  navigation
}) => {

  const dispatch = useDispatch()

  const object = useSelector(state => state.shopReducer.value.idSelected)
  const { data, isLoading, isError } = useGetProductsByIdQuery(object);

  const cantidad = useSelector(state => state.counterReducer.value)

  const onAddCart = () => {
    dispatch(addCartItem({...object, quantity: cantidad}))
    navigation.navigate('Home')
    dispatch(setCounterBack())
    showToastWithGravity()
  }

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'your product has been added to the cart',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  };

  return (

    <BlurView intensity={70} tint='light'>
      { object ? (
        
        <CardDetail style={styles.anotherStyleCard}>
            <View style={styles.internalContainer}>
              <View>
                <Image
                  source={{uri: object.imagen}}
                  style={styles.image}
                  resizeMode='cover'
                  />
              </View>
              
              <View style={styles.containerTextTitle}>
                <Text style={styles.textTitle}>{object.nombre}</Text>
              
                  <View style={styles.containerText}>
                    <Text style={styles.text}>Posición: {object.posicion}</Text>
                    <Text style={styles.text}>Pais: {object.category}</Text>
                    <Text style={styles.text}>Torneo: {object.torneo}</Text>
                    <Text style={styles.text}>Precio: $ {object.precio}</Text>
                  </View>
              </View>
            </View>

            
            <View style={styles.ButtonContainer}>
              <Button
                onPress={onAddCart}
                title="Add to Cart"
                color= {colors.onyx}
                />
              <Counter/>
            </View>
            
        </CardDetail>
            ) : null 
          } 
          </BlurView>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  anotherStyleCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTextTitle:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'
  },
  textTitle: {
    fontSize: 36,
    fontFamily: 'Anton',
    color: colors.onyx,
    marginBottom: 20,
  },
  containerText: {
    gap: 10
  },
  text: {
    fontSize: 16,
    fontFamily: 'Anton'
  },
  internalContainer:{
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '75%',
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  image: {
    width: 160,
    height: 240,
    borderRadius: 10,
  },
})