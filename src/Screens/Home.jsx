import { 
    FlatList, 
    ScrollView, 
    StyleSheet,
    Text,
    View 
} from 'react-native';
import React, { useState, useEffect } from 'react';

import CategoryItem from '../Components/CategoryItem';
import ProductItem from '../Components/ProductItem';
import Loader from '../Components/Loader';
import { useGetCategoriesQuery, useGetProductsQuery } from '../Services/shopServices';

//no se pudo llegar a componetizar toda esta screen

const Home = ({
    navigation,
}) => {
    const [waitLoading, setWaitLoading] = useState(true)
    const [cards, setCards] = useState([])
    const [figuritas, setFiguritas] = useState([])
    const [album, setAlbum] = useState([])

    const {data: categories, isLoading, isError} = useGetCategoriesQuery()
    const {data: randomObjects} = useGetProductsQuery()
    

    useEffect(() => {
        setTimeout(() => {
            setWaitLoading(false);
        }, 3000)
    }, []);
    
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
    
    return (

        <View style = {styles.containerHome}>
        { waitLoading ? <Loader/> :

            <ScrollView>
                <View style={styles.separateLine}>
                    <Text style={styles.separateText}>Categories</Text>
                    <View style={[styles.borderLine, styles.borderLineCategories]}></View>
                </View>
                <FlatList
                    data={categories}
                    keyExtractor={category => category}
                    renderItem={({item}) => 
                        <CategoryItem 
                            item={item} 
                            navigation={navigation} 
                        />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.wrapper}
                    horizontal={true}
                    style={styles.flatlistCategories}
                />
                
                <View style={styles.separateLine}>
                    <Text style={styles.separateText}>Cards</Text>
                    <View style={[styles.borderLine, styles.borderLineCards]}></View>
                </View>
                <FlatList
                    data={cards}
                    keyExtractor={cards => cards.id}
                    renderItem={({item}) => 
                        <ProductItem 
                            item={item}
                            navigation={navigation}
                        />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.wrapper}
                    horizontal={true}
                    style={styles.flatlist}
                />

                <View style={styles.separateLine}>
                    <Text style={styles.separateText}>Figuritas</Text>
                    <View style={[styles.borderLine, styles.borderLineFiguritas]}></View>
                </View>
                <FlatList
                    data={figuritas}
                    keyExtractor={figuritas => figuritas.id}
                    renderItem={({item}) => 
                        <ProductItem 
                            item={item}
                            navigation={navigation}
                        />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.wrapper}
                    horizontal={true}
                    style={styles.flatlist}
                />
                
                <View style={styles.separateLine}>
                    <Text style={styles.separateText}>Album</Text>
                    <View style={[styles.borderLine, styles.borderLineAlbum]}></View>
                </View>
                <FlatList
                    data={album}
                    keyExtractor={album => album.id}
                    renderItem={({item}) => 
                        <ProductItem 
                            item={item}
                            navigation={navigation}
                        />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.wrapper}
                    horizontal={true}
                    style={styles.flatlist}
                />
            </ScrollView>
            }
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    borderLine: {
        height: 5,
        backgroundColor: 'green',
        borderRadius: 15,
        marginTop: 10,
    },
    borderLineCategories: {
        width: '61%'
    },
    borderLineCards: {
        width: '75%'
    },
    borderLineFiguritas: {
        width: '66.5%'
    },
    borderLineAlbum: {
        width: '73%'
    },
    separateText: {
        fontSize: 24,
        fontFamily: 'Anton',
        fontStyle: 'italic',
    },
    separateLine: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginTop: 10,
        gap: 10
    },
    containerHome: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        paddingVertical: 20,
        marginBottom: 10,
    },
    flatlist: {
        height: '70%'
    },  
    flatlistCategories: {
        height: '50%',
    },
})