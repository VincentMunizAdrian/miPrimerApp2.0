import { 
    Image, 
    View, 
    StyleSheet, 
    Text 
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddButton from "../Components/AddButton";
import { colors } from "../Global/Colors";
import { usePostProfileImageMutation } from "../Services/shopServices";
import { saveImage } from "../Features/User/userSlice";

import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null);

    const [triggerSaveImage, resultSaveImage] = usePostProfileImageMutation();
    const dispatch = useDispatch();
    const { localId } = useSelector((state) => state.userReducer.value);

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
            return false;
        }
        return true;
    };

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermissions();

        if (isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            console.log(result.assets);

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        }
    };

    const confirmImage = async () => {
        try {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status === "granted") {
                console.log("Only valid on emulators and physical devices");
                const response = await MediaLibrary.createAssetAsync(image);
                console.log(response.uri);
                triggerSaveImage({
                    image: response.uri,
                    localId: localId,
                });
                dispatch(saveImage(response.uri));
            }
        } catch (error) {
            console.log(error);
        }
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {image ? (
                <>
                    <Image source={{ uri: image }} style={styles.image} />
                    <AddButton title="Take another photo" onPress={pickImage} />
                    <AddButton title="Confirm photo" onPress={confirmImage} />
                </>
            ) : (
                <>
                    <View style={styles.noPhotoContainer}>
                        <Text>No photo to show...</Text>
                    </View>
                    <AddButton title="Take a photo" onPress={pickImage} />
                </>
            )}
        </View>
    );
};

export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        marginTop: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.red,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});