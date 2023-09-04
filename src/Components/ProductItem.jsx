import { 
    StyleSheet,
    Text,
    Image,
    Pressable,
    View,
} from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';

import Card from './Card'
import { colors } from '../Global/Colors';
import { setIdSelected } from '../Features/Shop/shopSlice';

/**
 * Returns an array for Home and ItemListCategory
 * @param item
 * @param navigation
 */

const ProductItem = ({
    item,
    navigation
}) => {
    const dispatch = useDispatch()

    const onSelect = () => {
        dispatch(setIdSelected(item))
        navigation.navigate('Detail', {objectId: item.id, title: item.nombre})
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={onSelect}>
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
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        padding: 25,
        marginLeft: 3,
    },
    otherStyleCard: {
        height: 220,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 150,
        width: '100%',
        borderRadius: 8,
    },
    categoryText: {
        fontSize: 14,
        fontFamily: 'Anton',
        color: colors.white,
    },
})