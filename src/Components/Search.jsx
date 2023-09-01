import { 
    StyleSheet,  
    View,
    TextInput,
    Text,
    Pressable,
    useWindowDimensions
} from 'react-native';
import React, { useState } from 'react';

import { colors } from '../Global/Colors';

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Search = ({
    onSearch,
    error = ""
}) => {

    const [keyWord, setKeyWord] = useState("")
    const {width} = useWindowDimensions()
    const cancelSearch = () => {
        setKeyWord("")
        onSearch("")
    }

    return (
        <View style={styles.searchContainer}>
            <View style={width >= 360 ? styles.searchContainerPress : styles.searchContainerPressSmallView}>
                <TextInput style={styles.searchText}
                    placeholder='Buscar...'
                    value={keyWord}
                    onChangeText={setKeyWord}
                />
                <View style={styles.searchButtons}>
                    <Pressable onPress={() => onSearch(keyWord)}>
                        <Ionicons name="search-circle-outline" size={36} color="black" />
                    </Pressable>
                    <Pressable onPress={cancelSearch}>
                        <MaterialIcons name="cancel" size={34} color="black" />
                    </Pressable>
                </View>
            </View>
            <View>
                {error ? <Text>{error}</Text> : null}
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    searchContainerPress: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    searchContainerPressSmallView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    searchButtons:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    searchText: {
        width: 200,
        padding: 8,
        fontSize: 18,
        backgroundColor: colors.gray,
        borderRadius: 10,
    },
})