import { 
    FlatList, 
    ImageBackground, 
    StyleSheet,
    Text,
    View 
} from 'react-native';
import React, { useState } from 'react';

import CategoryItem from '../Components/CategoryItem';
import { useGetCategoriesQuery, useGetProductsQuery } from '../Services/shopServices';
import { useEffect } from 'react';
import ProductItem from '../Components/ProductItem';
import Loader from '../Components/Loader';

const imagenBack = {uri: 'https://i.imgur.com/qQhkm4N.jpg'}

const Home = ({
    navigation,
}) => {
    const [waitLoading, setWaitLoading] = useState(true)

    const {data: categories, isLoading, isError} = useGetCategoriesQuery()
    const {data: randomObjects} = useGetProductsQuery()
    const [cards, setCards] = useState([])
    const [figuritas, setFiguritas] = useState([])
    const [album, setAlbum] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setWaitLoading(false);
        }, 3000)
    }, []);

    // Limitar el array a un máximo de 7 elementos
    
    useEffect(() => {
        if (randomObjects) {
            
            const filterData = randomObjects.filter((itemListHome) => itemListHome.category === "Cards")
            const randomData = filterData.sort(() => Math.random() - 0.5);
            const limitedData = randomData.slice(0, 3);
            
            setCards(limitedData)
        }
    }, [randomObjects])
    
    useEffect(() => {
        if (randomObjects) {
            
            const filterData = randomObjects.filter((itemListHome) => itemListHome.category === "Figuritas")
            const randomData = filterData.sort(() => Math.random() - 0.5);
            const limitedData = randomData.slice(0, 5);
            
            setFiguritas(limitedData)
        }
    }, [randomObjects])
    
    useEffect(() => {
        if (randomObjects) {
            
            const filterData = randomObjects.filter((itemListHome) => itemListHome.category === "Album")
            const randomData = filterData.sort(() => Math.random() - 0.5);
            const limitedData = randomData.slice(0, 5);
            
            setAlbum(limitedData)
        }
    }, [randomObjects])
    
    // console.log(cards);
    // console.log(isError);
    // console.log(isLoading);
    // console.log(categories);
    return (
        <View style = {styles.containerHome}>

            {/* <Loader/> */}
            
                
                <ImageBackground
                source={imagenBack}
                resizeMode='stretch'
                style={styles.imagen}
            >
                <Text>Categories</Text>
                <FlatList
                    data={categories}
                    keyExtractor={category => category}
                    renderItem={({item}) => <CategoryItem item={item} navigation={navigation} 
                    />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.wrapper}
                    horizontal={true}
                    style={styles.flatlist}
                    
                />
                <FlatList
                    data={cards}
                    keyExtractor={cards => cards.id}
                    renderItem={({item}) => <ProductItem 
                        item={item}
                        navigation={navigation}
                    // renderItem={({item}) => <CategoryItem item={item} navigation={navigation} 
                    />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.wrapper}
                    horizontal={true}
                    style={styles.flatlist}
                />
                <FlatList
                    data={figuritas}
                    keyExtractor={figuritas => figuritas.id}
                    renderItem={({item}) => <ProductItem 
                        item={item}
                        navigation={navigation}
                    // renderItem={({item}) => <CategoryItem item={item} navigation={navigation} 
                    />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.wrapper}
                    horizontal={true}
                    style={styles.flatlist}
                />
                <FlatList
                    data={album}
                    keyExtractor={album => album.id}
                    renderItem={({item}) => <ProductItem 
                        item={item}
                        navigation={navigation}
                    // renderItem={({item}) => <CategoryItem item={item} navigation={navigation} 
                    />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.wrapper}
                    horizontal={true}
                    style={styles.flatlist}
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
    wrapper: {
        gap: 20,
    },
    // flatlist: {
    //     width: '80%'
    // }
})