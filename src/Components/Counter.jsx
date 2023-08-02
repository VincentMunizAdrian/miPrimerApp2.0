import { 
    Pressable, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

// import { addCartItem } from '../Features/Cart/cartSlice'
import { increment, decrement } from '../Features/Counter/counterSlice'
import { colors } from '../Global/Colors'

const Counter = () => {
    
    const dispatch = useDispatch()

    const count = useSelector(state => state.counterReducer.value);

    // const onAddCart = () => {
    //     dispatch(addCartItem({...item, quantity: count}))
    // }

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
            
            {/* <View>
                por ahora el Button queda sin funcionar
                <Button
                    onPress={onAddCart}
                    title="Agregar al carrito"
                    color= {colors.onyx}
                />
            </View> */}
            
        </View>
    )
}

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 10,
    },
    buttonsContainer: {
        backgroundColor: colors.frenchGray,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        borderRadius: 5
    },
    button: {
        backgroundColor: colors.gray,
        borderRadius: 5
    },
    span: {
        width: "50%",
        textAlign: "center",
        fontSize: 26,
    },
    buttonText: {
        fontSize: 30,
    },
});