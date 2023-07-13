import { 
    StyleSheet,
    Text,
    Image
} from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({item}) => {
    return (
    <Card
        otherStyle={styles.otherStyleCard}
    >
        <Text style={styles.categoryText}>{item.nombre}</Text>
        <Image
        resizeMode='cover'
        style={styles.image}
        source={{uri: item.imagen}}
        />
    </Card>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    image: {
    height: 100,
    width: 100,
    borderRadius: 8,
    },
    otherStyleCard: {
    flexDirection: 'row',
    height: 150,
    justifyContent: 'space-between',
    },
})