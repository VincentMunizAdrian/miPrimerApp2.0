import { 
    FlatList, 
    StyleSheet,
    View 
} from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import categories from '../Data/categories.json'
import CategoryItem from '../Components/CategoryItem'

const Home = ({
    setCategoryChoice
}) => {
    return (
        <View style = {styles.containerHome}>
            <FlatList
                data={categories}
                keyExtractor={category => category}
                renderItem={({item}) => <CategoryItem item={item} setCategoryChoice={setCategoryChoice}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    containerHome: {
        height: '90%',
        backgroundColor: colors.platinum,
        alignItems: 'center',
    },
})