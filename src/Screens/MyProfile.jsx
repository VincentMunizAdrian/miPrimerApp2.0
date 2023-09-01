import { 
    Image, 
    StyleSheet, 
    View 
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import AddButton from "../Components/AddButton";
import { useGetProfileImageQuery, useMakingOrderMutation } from "../Services/shopServices";
import { signOut } from "../Features/User/userSlice";
import { clearUserCart } from "../Features/Cart/cartSlice";
import { deleteSession } from "../SQLite";

const MyProfile = ({navigation}) => {

    const {localId, profileImage} = useSelector(state => state.userReducer.value)
    const {data: image} = useGetProfileImageQuery(localId)
    const cameraImage = image?.image

    const launchCamera = async () => {
        navigation.navigate('Image Selector')
    };

    const launchLocation = async () => {
        navigation.navigate('List Address')
    }

    const launchOrders = async () => {
        navigation.navigate('My Order List')
    }

    const {items: CartData, total, updatedAt, user, id } = useSelector(state => state.cartReducer.value)
    
    const [triggerMakingOrder, orderResult] = useMakingOrderMutation()

    const dispatch = useDispatch()

    const onSignout = async () => {
        try {
            console.log("Deleting session...");
            const response = await deleteSession(localId)
            console.log("Session deleted: ")
            console.log(response)
            dispatch(signOut())
            {total != 0 ?
                triggerMakingOrder({items: CartData, total, updatedAt, user, id})
            : null}
            dispatch(clearUserCart())
        } catch (error) {
            console.log('Error while sign out:')
            console.log(error.message);
        }
    }


    return (
        <View style={styles.container}>
            {profileImage || cameraImage  ? (
                <Image
                    source={{uri: profileImage || cameraImage}}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Image
                    source={require("../Assets/Images/defaultProfile.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <AddButton onPress={launchCamera} title="Add profile picture" />
            <AddButton onPress={launchLocation} title="My Address" />
            <AddButton onPress={launchOrders} title="My Order List" />
            <AddButton onPress={onSignout} title="Sign Out" />
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});