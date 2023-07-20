import { 
    Pressable,
    StyleSheet, 
    Text,
    View,
    useWindowDimensions,
} from 'react-native'

import React from 'react'
import Card from './Card'
import { colors } from '../Global/Colors'

const CategoryItem = ({
    item,
    navigation
}) => {

    const {width} = useWindowDimensions()

    return (
        <View style={{width: width, alignItems: 'center'}}>
            <Pressable
            onPress={()=>navigation.navigate('ListCategory', {category: item})}
            >
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