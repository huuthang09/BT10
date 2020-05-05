import React, { useEffect } from "react";
import { TouchableOpacity, Alert, Text, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function CameraImage(props) {
  useEffect(() => {
    getPermission();
  }, []);

  async function getPermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      Alert.alert("Sorry, we need camera roll permissions to make this work!");
    }
  }

  async function pickImage() {
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
      });
      if (!result.cancelled) {
        props.passGalleryData(result.uri);
      }
    } catch (E) {}
  }

  return (
    <TouchableOpacity onPress={pickImage}>
      <Text style={styles.txtChoose}>Chụp hình từ Camera</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  txtChoose: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: hp("2%"),
  },
});
