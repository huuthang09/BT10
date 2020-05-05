import React from "react";
import { StyleSheet } from "react-native";
import { Tab, Tabs } from "native-base";
import KiemTon from "../Components/KiemTon";
import HinhAnh from "../Components/HinhAnh";

export default function TabLayout() {
  return (
    <Tabs
      tabBarUnderlineStyle={styles.container}
      tabContainerStyle={{ elevation: 0 }}
    >
      <Tab
        heading="Kiếm tồn"
        tabStyle={styles.tabText}
        activeTabStyle={styles.tabText}
        textStyle={styles.defaultTxt}
        activeTextStyle={styles.txt}
      >
        <KiemTon />
      </Tab>
      <Tab
        heading="Hình ảnh"
        tabStyle={styles.tabText}
        activeTabStyle={styles.tabText}
        textStyle={styles.defaultTxt}
        activeTextStyle={styles.txt}
      >
        <HinhAnh />
      </Tab>
      <Tab
        heading="Vị trí"
        tabStyle={styles.tabText}
        activeTabStyle={styles.tabText}
        textStyle={styles.defaultTxt}
        activeTextStyle={styles.txt}
      ></Tab>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff9800",
  },

  tabText: {
    backgroundColor: "#f5f5f6",
  },

  defaultTxt: {
    color: "#415167",
  },

  txt: {
    color: "#000",
    fontWeight: "bold",
  },
});
