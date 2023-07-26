import { 
    Button,
    Pressable, 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement } from '../Features/Counter/counterSlice'
import { colors } from '../Global/Colors'

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
            
            <View>
                {/* por ahora el Button queda sin funcionar */}
                <Button
                    onPress={()=>{}}
                    title="Agregar al carrito"
                    color= {colors.onyx}
                />
            </View>
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
        // backgroundColor: colors.pink,
        padding: 10,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    button: {
        padding: 10,
        // backgroundColor: colors.lightPink,
    },
    span: {
        // backgroundColor: colors.red,
        width: "60%",
        padding: 10,
        textAlign: "center",
        fontSize: 20,
    },
    spanInput: {
        // backgroundColor: colors.peach,
        width: "60%",
        padding: 10,
        textAlign: "center",
        fontSize: 16,
    },
    buttonText: {
        fontSize: 18,
        // fontFamily: "Josefin",
    },
});