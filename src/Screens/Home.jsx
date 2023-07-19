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
    // setCategoryChoice
    navigation
}) => {
    return (
        <View style = {styles.containerHome}>
            <FlatList
                data={categories}
                keyExtractor={category => category}
                // renderItem={({item}) => <CategoryItem item={item} setCategoryChoice={setCategoryChoice}/>}
                renderItem={({item}) => <CategoryItem item={item} navigation={navigation} 
                />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    containerHome: {
        backgroundColor: colors.platinum,
        alignItems: 'center',
    },
})