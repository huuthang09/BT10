import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function UserInfo() {
  const [user, setUser] = React.useState({
    fullName: "",
    contact: "",
    phone: "",
    address: "",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>Tên khách hàng</Text>
      <TextInput
        label="Nhập tên của bạn..."
        value={user.fullName}
        onChangeText={(text) => setUser({ fullName: text })}
      />
      <Text style={styles.txtTitle}>Người liên hệ</Text>
      <TextInput
        label="Nhập tên người liên hệ..."
        value={user.contact}
        onChangeText={(text) => setUser({ contact: text })}
      />
      <Text style={styles.txtTitle}>Số điện thoại</Text>
      <TextInput
        label="Nhập SĐT của bạn..."
        value={user.phone}
        onChangeText={(text) => setUser({ phone: text })}
      />
      <Text style={styles.txtTitle}>Địa chỉ</Text>
      <TextInput
        label="Nhập địa chỉ của bạn..."
        value={user.address}
        onChangeText={(text) => setUser({ address: text })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp("3%"),
    marginVertical: hp("1%"),
    backgroundColor: "#f5f5f6",
  },

  txtTitle: {
    fontSize: 20,
    marginVertical: hp("1%"),
    fontWeight: "bold",
  },
});
