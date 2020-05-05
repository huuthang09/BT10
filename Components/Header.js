import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { Icon } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function Header() {
  React.useEffect(() => {
    toggleCount();
  }, []);

  async function toggleCount() {
    const interval = setInterval(runSecond, 1000);
    return () => clearInterval(interval);
  }

  async function runSecond() {
    setCount((prevState) => ({
      second: prevState.second + 1,
    }));
  }

  const [count, setCount] = React.useState({
    second: 0,
  });
  return (
    <Appbar.Header style={styles.container}>
      <Icon
        type="AntDesign"
        name="left"
        style={{ fontSize: 20, color: "#FFF" }}
      />
      <Appbar.Content title="Check in" />
      <View style={styles.timeContainer}>
        <Icon
          type="AntDesign"
          name="clockcircleo"
          style={{ fontSize: 15, color: "#f64744" }}
        />
        <Text style={styles.textTime}>{count.second}</Text>
      </View>
      <View style={styles.sendContainer}>
        <Icon
          type="MaterialIcons"
          name="send"
          style={{ fontSize: 15, color: "#ff9800" }}
        />
      </View>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2d3446",
  },

  timeContainer: {
    backgroundColor: "#453646",
    marginRight: wp("2%"),
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  textTime: {
    color: "#f64744",
    marginLeft: wp("1%"),
    fontSize: 20,
  },

  sendContainer: {
    borderRadius: 65,
    padding: 5,
    borderWidth: 1,
    borderColor: "#ff9800",
  },
});
