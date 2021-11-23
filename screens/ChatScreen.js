import React, { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

function ChatScreen({ navigation, route }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTitleAlign: "left",
      headerTintColor: "black",
      headerBackTitleVisible: false,
      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar rounded />
          <Text>{route.params.chatName}</Text>
        </View>
      ),
    });
  }, [navigation]);
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {},
});

export default ChatScreen;
//Current Time 2:24:55
