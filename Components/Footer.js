import React from "react";
import { BottomNavigation } from "react-native-material-ui";
export default function Footer() {
  const [tab, setTab] = React.useState({
    active: "ttctkh",
  });
  return (
    <BottomNavigation
      active={tab.active}
      style={{
        container: { backgroundColor: "#2d3446" },
      }}
    >
      <BottomNavigation.Action
        style={{
          icon: { color: tab.active == "ttctkh" ? "#ff9800" : "#FFFFFF" },
          label: { color: tab.active == "ttctkh" ? "#ff9800" : "#FFFFFF" },
        }}
        key="ttctkh"
        icon="account-circle"
        label="TTCTKH"
        onPress={() => setTab({ active: "ttctkh" })}
      />
      <BottomNavigation.Action
        style={{
          icon: { color: tab.active == "dathang" ? "#ff9800" : "#FFFFFF" },
          label: { color: tab.active == "dathang" ? "#ff9800" : "#FFFFFF" },
        }}
        key="dathang"
        icon="list"
        label="Đặt hàng"
        onPress={() => setTab({ active: "dathang" })}
      />
      <BottomNavigation.Action
        style={{
          icon: { color: tab.active == "ghichu" ? "#ff9800" : "#FFFFFF" },
          label: { color: tab.active == "ghichu" ? "#ff9800" : "#FFFFFF" },
        }}
        key="ghichu"
        icon="note"
        label="Ghi chú"
        onPress={() => setTab({ active: "ghichu" })}
      />
      <BottomNavigation.Action
        style={{
          icon: { color: tab.active == "baocao" ? "#ff9800" : "#FFFFFF" },
          label: { color: tab.active == "baocao" ? "#ff9800" : "#FFFFFF" },
        }}
        key="baocao"
        icon="book"
        label="Báo cáo"
        onPress={() => setTab({ active: "baocao" })}
      />
    </BottomNavigation>
  );
}
