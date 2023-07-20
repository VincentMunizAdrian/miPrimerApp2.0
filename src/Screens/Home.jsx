import { 
    FlatList, 
    StyleSheet,
    View 
} from 'react-native';
import React from 'react';

import { colors } from '../Global/Colors';
import categories from '../Data/categories.json';
import CategoryItem from '../Components/CategoryItem';

const Home = ({
    navigation
}) => {
    return (
        <View style = {styles.containerHome}>
            <FlatList
                data={categories}
                keyExtractor={category => category}
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
        height: '100%',
        backgroundColor: colors.platinum,
        alignItems: 'center',
    },
})