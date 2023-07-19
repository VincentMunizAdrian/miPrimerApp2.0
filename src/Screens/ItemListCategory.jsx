import { 
    StyleSheet,
    View,
    FlatList,
    // Text,
    // Pressable,
    useWindowDimensions
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../Global/Colors';
import productsRaw from '../Data/products.json';
import Search from '../Components/Search';
import ProductItem from '../Components/ProductItem';
// import { Ionicons } from '@expo/vector-icons';

const ItemListCategory = ({
    // category,
    // setCategory,
    // setObjectChoice
    navigation,
    route
}) => {

    const {category} = route.params

    console.log(category);

    // const [selectedCategory, setSelectedCategory] = useState(category)
    // const [selectedCategory, setSelectedCategory] = useState(category)
    const [products, setProducts] = useState([])
    const [keyWord, setKeyWord] = useState("")
    const [searchError, setSearchError] = useState("")
    const {width, height} = useWindowDimensions

    useEffect(() => {
    // const productsFiltred = productsRaw.filter(product => product.category === selectedCategory && product.nombre.toLowerCase().includes(keyWord.toLowerCase()))
    const productsFiltred = productsRaw.filter(product => product.category === category && product.nombre.toLowerCase().includes(keyWord.toLowerCase()))
    setProducts(productsFiltred)
    // }, [selectedCategory, keyWord])
    }, [category, keyWord])

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
            <View style={styles.conteinerTitleCategory}>
                {/* <Pressable onPress={()=> setCategory("")}> */}
                {/* <Pressable onPress={()=> navigation.goBack()}>
                    <Ionicons name="arrow-back-circle-outline" size={36} color="black" />
                </Pressable> */}
                {/* <Text style={styles.textCategorySelect}>{category}</Text> */}
            </View>  
                <Search
                onSearch={onSearch}
                error= {searchError}
                />
                <FlatList
                    data={products}
                    keyExtractor={product => product.id}
                    renderItem={({item}) => <ProductItem 
                        item={item}
                        navigation={navigation}
                        // setObjectChoice={setObjectChoice}
                        // setCategoryChoise={setCategory}
                    />}
                    showsVerticalScrollIndicator={false}
                />
        </View>
    )
}

export default ItemListCategory

const styles = StyleSheet.create({
    containerHome: {
        height: '90%',
        backgroundColor: colors.platinum,
        alignItems: 'center',
    },
    conteinerTitleCategory:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
    },
    textCategorySelect: {
        fontFamily: 'Anton',
        fontSize: 28,
        marginTop: 15,
    } 
})