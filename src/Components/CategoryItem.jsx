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
import { colors } from '../Global/Colors'
import { setCategorySelected } from '../Features/Shop/shopSlice'

/**
 * Returns an array for each category for Home
 * @param item get the data of the objects
 * @param navigation navigate to array with selected name
 */

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
        <View style={{width: width, justifyContent: 'center', alignItems: 'center'}}>
            <Pressable onPress={onSelectCategory}>
                <Card otherStyle={styles.otherStyleCard}>
                    <Text style={styles.textCategory}>{item}</Text>
                </Card>
            </Pressable>
        </View>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    otherStyleCard: {
        width: '100%',
    },
    textCategory: {
        color: colors.white,
        fontSize: 45,
        fontFamily: 'Anton',
    },
})