import { 
  Image,
  // Pressable,
  StyleSheet, 
  Text, 
  View 
} from 'react-native'
import React, { useEffect, useState } from 'react'
import objects from '../Data/products.json'
// import { Ionicons } from '@expo/vector-icons';

const ItemDetail = ({
  // idChoice,
  // setObjectChoice
  navigation,
  route
}) => {

  const {objectId: idChoice} = route.params;

  const [object, setObject] = useState(null)

  useEffect(() => {
    const objectChoice = objects.find(object => object.id === idChoice)
    setObject(objectChoice)
  }, [idChoice])

  console.log(object);

  return (
    <View>
      <View>
        {/* <Pressable onPress={()=> navigation.goBack()}>
            <Ionicons name="arrow-back-circle-outline" size={36} color="black" />
        </Pressable> */}
      </View>
      { object ? (
      <View>
        <Text>Algo de texto</Text>
        <Image
          source={{uri: object.imagen}}
          style={styles.image}
          resizeMode='contain'
        />
        <Text style={styles.textCategorySelect}>{object.nombre}</Text>
      </View>
      ) : null 
      }
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '80%',
  },
})