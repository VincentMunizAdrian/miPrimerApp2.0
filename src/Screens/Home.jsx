import { 
    FlatList, 
    ImageBackground, 
    StyleSheet,
    View 
} from 'react-native';
import React from 'react';

import CategoryItem from '../Components/CategoryItem';
import { useGetCategoriesQuery } from '../Services/shopServices';

const imagenBack = {uri: 'https://i.imgur.com/qQhkm4N.jpg'}

const Home = ({
    navigation,
}) => {
    const {data: categories, isLoading, isError} = useGetCategoriesQuery()
    
    console.log(isError);
    console.log(isLoading);
    console.log(categories);
    return (
        <View style = {styles.containerHome}>
            <ImageBackground
                source={imagenBack}
                resizeMode='stretch'
                style={styles.imagen}
            >

                <FlatList
                    data={categories}
                    keyExtractor={category => category}
                    renderItem={({item}) => <CategoryItem item={item} navigation={navigation} 
                    />}
                    showsVerticalScrollIndicator={false}
                />
            </ImageBackground>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    containerHome: {
        height: '100%',
        alignItems: 'center',
    },
    imagen: {
        width: '100%',
        height: '100%'
    },
})