import { 
    StyleSheet,
    Text,
    Image,
    useWindowDimensions,
    Pressable,
    View,
} from 'react-native'
import React from 'react'

import Card from './Card'
import { useDispatch } from 'react-redux';
import { setIdSelected } from '../Features/Shop/shopSlice';

const ProductItem = ({
    item,
    navigation
}) => {

    const {width} = useWindowDimensions();
    
    const dispatch = useDispatch()

    const onSelect = () => {
        dispatch(setIdSelected(item.id))
        navigation.navigate('Detail', {objectId: item.id, title: item.nombre})
    }

    return (
        <View style={{ width: width, alignItems: 'center'}}>
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
    otherStyleCard: {
        justifyContent: 'center',
    },
    image: {
        height: 150,
        width: '100%',
        borderRadius: 8,
    },
})