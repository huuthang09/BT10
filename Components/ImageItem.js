import React from "react";
import { StyleSheet, Image, Dimensions, View } from "react-native";
import { Card } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "native-base";

export default function ImageItem(item) {
  return (
    <Card style={styles.container}>
      <Image
        style={{ height: hp("20%") }}
        source={{ uri: item.image }}
        resizeMode="cover"
      />

      <View style={styles.icContainer}>
        <Icon
          type="AntDesign"
          name="close"
          style={{ fontSize: 30, color: "#FFF" }}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: Dimensions.get("window").width / 3,
    maxWidth: Dimensions.get("window").width,
  },

  icContainer: {
    alignSelf: "flex-end",
    padding: 5,
    borderRadius: 65,
    backgroundColor: "#000",
    position: "absolute",
  },
});
