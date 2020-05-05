import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { Icon } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Overlay } from "react-native-elements";
import CameraImage from "../Components/CameraImage";
import GalleryImage from "../Components/GalleryImage";
import ImageItem from "../Components/ImageItem";

export default function HinhAnh() {
  const [visible, setVisible] = React.useState(false);
  const [galleryData, setGalleryData] = React.useState({
    data: [],
  });

  async function toggleOverlay() {
    setVisible(!visible);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleOverlay} style={styles.addContainer}>
        <Icon
          type="AntDesign"
          name="camera"
          style={{ fontSize: 25, color: "#ff9800" }}
        />
        <Text style={styles.txtAdd}>Chụp ảnh</Text>
      </TouchableOpacity>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <CameraImage
          passGalleryData={(link) => {
            galleryData.data.push({
              id: galleryData.data.length,
              image: link,
            });
          }}
        />
        <GalleryImage
          passGalleryData={(link) => {
            galleryData.data.push({
              id: galleryData.data.length,
              image: link,
            });
          }}
        />
      </Overlay>

      <FlatList
        data={galleryData.data}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => ImageItem(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f6",
  },

  txtChoose: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: hp("2%"),
  },

  addContainer: {
    marginVertical: hp("2%"),
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#ffa41f",
    backgroundColor: "#fffbf4",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    elevation: 10,
  },

  txtAdd: {
    color: "#ff9800",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: wp("1%"),
  },
});
