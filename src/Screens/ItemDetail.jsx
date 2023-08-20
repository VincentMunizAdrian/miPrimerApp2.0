import { 
  Image,
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  Button,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addCartItem } from '../Features/Cart/cartSlice'

import Card from '../Components/Card';
import Counter from '../Components/Counter';
import objects from '../Data/products.json';
import { colors } from '../Global/Colors';

const imagenBack = {uri: 'https://i.imgur.com/qQhkm4N.jpg'}

const ItemDetail = ({
  route,
  navigation
}) => {

  const dispatch = useDispatch()

  const {objectId: idChoice} = route.params;

  const [object, setObject] = useState(null)

  useEffect(() => {
    const objectChoice = objects.find(object => object.id === idChoice)
    setObject(objectChoice)
  }, [idChoice])

  const cantidad = useSelector(state => state.counterReducer.value)

  const onAddCart = () => {
      dispatch(addCartItem({...object, quantity: cantidad}))
      navigation.navigate('Home')
  }

//   const returnHome = () => {
// }

  return (
    <ImageBackground
        source={imagenBack}
        resizeMode='stretch'
        style={{width: '100%', height: '100%'}}
      >
    <View style={styles.containerCard}>

      { object ? (
          
        <Card anotherStyle={styles.anotherStyleCard}>
            <View style={styles.containerTitle}>
              <Text style={styles.textTitle}>{object.nombre}</Text>
            </View>

            <View style={styles.internalContainer}>
              <View>
                <Image
                  source={{uri: object.imagen}}
                  style={styles.image}
                  resizeMode='cover'
                />
              </View>
              <View style={styles.textAndButtonContainer}>
                <View style={styles.text}>
                  <Text>Posición: {object.posicion}</Text>
                  <Text>Pais: {object.category}</Text>
                  <Text>Torneo: {object.torneo}</Text>
                  <Text>Precio: $ {object.precio}</Text>
                </View>
                <Counter
                  />
              </View>
            </View>
            <View>
                <Button
                  onPress={onAddCart}
                  title="Agregar al carrito"
                  color= {colors.onyx}
                />
            </View>
        </Card>
            ) : null 
        } 

    </View>
        </ImageBackground>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  anotherStyleCard: {
    flexDirection: 'column',
    width: '90%',
    height: '45%',
  },
  containerCard:{
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTitle:{
    width: '100%',
    justifyContent:'flex-start',
    fontStyle: 'Anton'
  },
  textTitle: {
    fontSize: 28,
  },
  internalContainer:{
    width: '100%',
    height: 250,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textAndButtonContainer: {
    width: '50%',
    alignItems: 'center',
  },
  text: {
    width: '80%',
    padding: 8,
    backgroundColor: colors.white,
    borderRadius: 6,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
})