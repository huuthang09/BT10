import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Icon } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as firebase from "firebase";
import "firebase/firestore";
import ProductItem from "../Components/ProductItem";

export default function KiemTon() {
  const firebaseConfig = {
    apiKey: "AIzaSyDtONWGBmy7cuH7Y1t2y3yADa_R_5yCtkU",
    authDomain: "reactnative-275502.firebaseapp.com",
    databaseURL: "https://reactnative-275502.firebaseio.com/",
    projectId: "reactnative-275502",
    storageBucket: "reactnative-275502.appspot.com",
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  React.useEffect(() => {
    loadData();
  }, []);

  const [list, setList] = React.useState({
    value: "",
    id: null,
    newList: [],
  });

  async function sendData() {
    const dbh = firebase.firestore();
    dbh
      .collection("Product")
      .doc(list.newList.length.toString())
      .set({
        id: list.newList.length,
        name: "Bia Lon KGB",
        number: Math.floor(Math.random() * 99 + 1),
        date: "15/12/2020",
      })
      .then(() => Alert.alert("Thêm thành công"));
  }

  async function loadData() {
    const dbh = firebase.firestore();
    dbh.collection("Product").onSnapshot((querySnapshot) => {
      const products = [];

      querySnapshot.forEach((documentSnapshot) => {
        products.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setList({
        newList: products,
      });
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={sendData} style={styles.addContainer}>
        <Icon
          type="AntDesign"
          name="plus"
          style={{ fontSize: 25, color: "#ff9800" }}
        />
        <Text style={styles.txtAdd}>Thêm sản phẩm</Text>
      </TouchableOpacity>

      <FlatList
        style={styles.flatList}
        data={list.newList}
        renderItem={({ item }) => ProductItem(item)}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f6",
  },

  flatList: {
    flex: 1,
    marginHorizontal: wp("3%"),
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
