import { 
    Pressable,
    StyleSheet, 
    Text,
} from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../Global/Colors'

const CategoryItem = ({
    item,
    setCategoryChoice
}) => {
    return (
        <Pressable
        onPress={()=>setCategoryChoice(item)}
        >
            <Card>
                <Text style={styles.textCategory}>{item}</Text>
            </Card>
        </Pressable>
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