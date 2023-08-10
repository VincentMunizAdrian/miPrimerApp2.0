import { 
    StyleSheet,
    View,
    FlatList,
} from 'react-native';
import { ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Search from '../Components/Search';
import ProductItem from '../Components/ProductItem';
import { colors } from '../Global/Colors';
import { useGetProductsByCategoryQuery } from '../Services/shopServices';


const imagenBack = {uri: 'https://i.imgur.com/qQhkm4N.jpg'}

const ItemListCategory = ({
    navigation,
    route
}) => {

    const {category} = route.params
    const categorySelected = useSelector(state => state.shopReducer.value.categorySelected)
    const {data: productsSelected, isLoading, isError} = useGetProductsByCategoryQuery(categorySelected)

    // console.log(productsSelected);
    
    const [products, setProducts] = useState([])
    const [keyWord, setKeyWord] = useState("")
    const [searchError, setSearchError] = useState("")

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

    return (
        <View style = {styles.containerHome}>
            <ImageBackground
                source={imagenBack}
                resizeMode='stretch'
                style={{width: '100%', height: '100%'}}
            >
                <Search
                onSearch={onSearch}
                error= {searchError}
                />
                <FlatList
                    style={styles.list}
                    data={products}
                    keyExtractor={product => product.id}
                    renderItem={({item}) => <ProductItem 
                    item={item}
                    navigation={navigation}
                    />} 
                    showsVerticalScrollIndicator={false}
                />
            </ImageBackground>
        </View>
    )
}

export default ItemListCategory

const styles = StyleSheet.create({
    containerHome: {
        height: '100%',
        backgroundColor: colors.platinum,
        alignItems: 'center',
    },
})