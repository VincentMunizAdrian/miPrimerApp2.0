import { 
    FlatList, 
    ImageBackground, 
    StyleSheet,
    View 
} from 'react-native';
import React from 'react';

import categories from '../Data/categories.json';
import CategoryItem from '../Components/CategoryItem';

const imagenBack = {uri: 'https://i.imgur.com/qQhkm4N.jpg'}

const Home = ({
    navigation
}) => {
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