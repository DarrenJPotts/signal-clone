import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import AddChatScreen from "../screens/AddChatScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: { color: "white" },
  headerTitleAlign: "center",
};

const MainNavigator = () => (
  <Stack.Navigator screenOptions={globalScreenOptions}>
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{ headerTitle: "Register" }}
    />
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="AddChatScreen" component={AddChatScreen} />
    <Stack.Screen name="Chat" component={ChatScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
