import { 
    Pressable, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement } from '../Features/Counter/counterSlice'
import { colors } from '../Global/Colors'

/**
 * select the number of objects ordered for ItemDetail
 */

const Counter = () => {
    
    const dispatch = useDispatch()
    const count = useSelector(state => state.counterReducer.value);
    

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Pressable 
                    style={styles.button}
                    onPress={() => dispatch(decrement())}
                >
                    <Text style={styles.buttonText}> - </Text>
                </Pressable>

                <Text style={styles.span}>{count}</Text>

                <Pressable 
                    style={styles.button}
                    onPress={() => dispatch(increment())}
                    >
                    <Text style={styles.buttonText}> + </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Counter;

const styles = StyleSheet.create({
    container: {
        width: "40%",
        marginTop: 10,
    },
    buttonsContainer: {
        backgroundColor: colors.frenchGray,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 5
    },
    button: {
        borderRadius: 5,
    },
    span: {
        fontSize: 24,
        fontFamily: 'Anton',
    },
    buttonText: {
        fontSize: 28,
        fontFamily: 'Anton',
        bottom: 3,
    },
});