import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "native-base";
import { Card } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ProductItem(item) {
  return (
    <Card style={styles.container}>
      <View style={styles.editContainer}>
        <Text style={styles.txtName}>{item.name}</Text>
        <View style={styles.iconContainer}>
          <View style={styles.icContainer}>
            <Icon
              type="MaterialIcons"
              name="edit"
              style={{ fontSize: 20, color: "#46abff" }}
            />
          </View>

          <View style={styles.icContainer}>
            <Icon
              type="Entypo"
              name="trash"
              style={{ fontSize: 20, color: "#f64744" }}
            />
          </View>
        </View>
      </View>

      <View style={styles.txtContainer}>
        <Text style={styles.txt}>Số lượng tồn chẵn</Text>
        <Text style={styles.txtRight}>{item.number}</Text>
      </View>
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>Hạn sử dụng</Text>
        <Text style={styles.txtRight}>{item.date}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },

  iconContainer: {
    flexDirection: "row",
  },

  icContainer: {
    marginHorizontal: wp("0.5%"),
    padding: 5,
    backgroundColor: "#FFF",
    borderRadius: 65,
  },

  editContainer: {
    padding: 5,
    flexDirection: "row",
    backgroundColor: "#c66a00",
    justifyContent: "space-between",
  },

  txtContainer: {
    flexDirection: "row",
    marginVertical: hp("1%"),
    justifyContent: "space-between",
  },

  txtName: {
    marginLeft: wp("1%"),
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },

  txt: {
    marginLeft: wp("1%"),
    fontSize: 16,
  },

  txtRight: {
    marginRight: wp("1%"),
    fontSize: 16,
  },
});
