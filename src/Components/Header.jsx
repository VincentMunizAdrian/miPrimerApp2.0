import { 
    Pressable, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import { Ionicons } from '@expo/vector-icons';
// import ItemDetail from '../Screens/ItemDetail';
import ItemListCategory from '../Screens/ItemListCategory';
import object from '../Data/products.json'

const Header = ({
    route,
    navigation,
}
) => {

    // let title
    //     if (route.name === 'Home') title = 'Home'
    //     if (route.name === 'ListCategory') title = route.params.category
    //     if (route.name === 'Detail') title = 'Detail'

    return (
        <View style = {styles.containerHeader}>
            {
            route.name === "Home" ? 
            <Text style = {styles.textHeader}> Mundial de Figus </Text> :
            route.name === "ListCategory" ? 
            <Text style = {styles.textHeader}> {route.params.category} </Text> :
            <Text style = {styles.textHeader}> {route.params.title} </Text>
            }
            
            {
            route.name === "Home" ? null :
            <Pressable 
            style={styles.pressable}
            onPress={()=> navigation.goBack()}>
                <Ionicons name="arrow-back-circle-outline" size={36} color="black" />
            </Pressable>
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        height: 120,
        backgroundColor: colors.frenchGray,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    pressable:{
        position: 'absolute',
        left: 10,
        top: '37%'
    },
    textHeader: {
        fontSize: 32,
        fontFamily: 'Anton',
    },
})