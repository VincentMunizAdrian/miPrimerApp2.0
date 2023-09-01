import { 
    Pressable,
    StyleSheet, 
    Text,
    View,
    useWindowDimensions,
} from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'

import Card from './Card'
import { setCategorySelected } from '../Features/Shop/shopSlice'
import { colors } from '../Global/Colors'

const CategoryItem = ({
    item,
    navigation
}) => {

    const {width} = useWindowDimensions()

    const dispatch = useDispatch()

    const onSelectCategory = () => {
        dispatch(setCategorySelected(item))
        navigation.navigate('ListCategory', {category: item})
    }

    return (
        <View style={{width: width, alignItems: 'center'}}>
            <Pressable onPress={onSelectCategory}>
                <Card>
                    <Text style={styles.textCategory}>{item}</Text>
                </Card>
            </Pressable>
        </View>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    textCategory: {
        color: colors.white,
        fontSize: 20,
        fontFamily: 'Anton',
    },
})