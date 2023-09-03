import { 
    StyleSheet,
    View,
    FlatList,
    ImageBackground,
    useWindowDimensions
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Search from '../Components/Search';
import ProductItem from '../Components/ProductItem';
import { colors } from '../Global/Colors';
import { useGetProductsByCategoryQuery } from '../Services/shopServices';


// const imagenBack = {uri: 'https://i.imgur.com/qQhkm4N.jpg'}

const ItemListCategory = ({
    navigation,
    route
}) => {

    const {category} = route.params
    const categorySelected = useSelector(state => state.shopReducer.value.categorySelected)
    const {data: productsSelected, isLoading, isError} = useGetProductsByCategoryQuery(categorySelected)
    const {data: randomObjects} = useGetProductsByCategoryQuery(categorySelected)
    
    const [products, setProducts] = useState([])
    const [keyWord, setKeyWord] = useState("")
    const [searchError, setSearchError] = useState("")
    const [object, setObject] = useState([])

    useEffect(() => {
    if (productsSelected) {
        const productsFiltred = productsSelected.filter(product => product.category === category && product.nombre.toLowerCase().includes(keyWord.toLowerCase()))
        setProducts(productsFiltred)
        }
    }, [productsSelected, keyWord])

    const onSearch = (input) => {
    const searching = /^[a-zA-Z0-9\ ]*$/
    const searchingEvaluation = searching.test(input)

    if(searchingEvaluation) {
        setKeyWord(input)
        setSearchError("")
    } else {
        setSearchError("ERROR: Ingresar solo letras y numeros")}
    }

    useEffect(() => {
        if (randomObjects) {
            
            const filterData = randomObjects.filter((itemListHome) => itemListHome.category === categorySelected )
            const randomData = filterData.sort(() => Math.random() - 0.5);
            
            setObject(randomData)
        }
    }, [randomObjects])
    
    const {width} = useWindowDimensions();
    // console.log(width);
    return (
        <View style = {styles.containerHome}>
                <Search
                onSearch={onSearch}
                error= {searchError}
                />
                <FlatList
                    // style={styles.list}
                    data={object}
                    // numColumns={2}
                    keyExtractor={product => product.id}
                    renderItem={({item}) => 
                        <ProductItem 
                            item={item}
                            navigation={navigation}
                        />} 
                    showsVerticalScrollIndicator={false}
                />
        </View>
    )
}

export default ItemListCategory

const styles = StyleSheet.create({
    containerHome: {
        width: '100%',
        height: '100%',
        // alignItems: 'center',
    },
})