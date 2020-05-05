import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import UserInfo from "./Components/UserInfo";
import TabLayout from "./Components/Tabs";
import { Icon } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function App() {
  React.useEffect(() => {
    console.ignoredYellowBox = true;
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <UserInfo />
        <TabLayout />
      </ScrollView>
      <View style={styles.button}>
        <Icon
          type="MaterialCommunityIcons"
          name="format-horizontal-align-right"
          style={{ fontSize: 40, color: "#FFF" }}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f6",
  },

  button: {
    backgroundColor: "#fdae3b",
    padding: 10,
    position: "absolute",
    top: hp("90%"),
    alignSelf: "center",
    borderRadius: 65,
    borderWidth: 3,
    borderColor: "#FFF",
    elevation: 15,
  },
});
