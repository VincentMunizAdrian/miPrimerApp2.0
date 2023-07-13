import { 
    StyleSheet,  
    View,
    TextInput,
    Text,
    Pressable
} from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../Global/Colors';
import { MaterialIcons } from '@expo/vector-icons';

const Search = ({
    onSearch,
    error = ""
}) => {
    const [keyWord, setKeyWord] = useState("")

    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchContainerPress}>
                <TextInput style={styles.searchText}
                    placeholder='Buscar...'
                    value={keyWord}
                    onChangeText={setKeyWord}
                />
                <Pressable onPress={() => onSearch(keyWord)}>
                    <Ionicons name="search-circle-outline" size={36} color="black" />
                </Pressable>
                <Pressable onPress={() => setKeyWord("")}>
                    <MaterialIcons name="cancel" size={34} color="black" />
                </Pressable>
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
        marginVertical: 50,
    },
    searchContainerPress: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    searchText: {
        width: 250,
        padding: 8,
        fontSize: 18,
        backgroundColor: colors.gray,
        borderRadius: 10,
    },
})