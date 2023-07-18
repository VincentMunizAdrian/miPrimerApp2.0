import { 
    StyleSheet,
    Text,
    Image,
    // useWindowDimensions,
    Pressable
} from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({
    item,
    setObjectChoice,
    setCategoryChoise
}) => {

    // const {width, height} = useWindowDimensions();
    // // console.log(width, height);

    const onSelect = (id) => {
        setObjectChoice(id)
        setCategoryChoise("")
    }

    return (
        <Pressable onPress={() => onSelect(item.id)}>
            <Card
                otherStyle={styles.otherStyleCard}
            >
                <Image
                resizeMode='cover'
                style={styles.image}
                source={{uri: item.imagen}}
                />
                <Text style={styles.categoryText}>{item.nombre}</Text>
            </Card>
        </Pressable>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: '100%',
        borderRadius: 8,
    },
    otherStyleCard: {
        justifyContent: 'center',
        height: 200,
        gap: 10,
    },
})