import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function GalleryImage(props) {
  async function pickImage() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
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
      <Text style={styles.txtChoose}>Chọn hình trong bộ nhớ</Text>
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
