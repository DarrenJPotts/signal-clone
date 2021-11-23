import { StatusBar } from "expo-status-bar";
import React, { useState, useNavigation, useEffect } from "react";
import { Platform } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { View, StyleSheet, Text, KeyboardAvoidingViewBase } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { auth } from "../firebase/firebase";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigation.replace("HomeScreen");
      }
    });

    return unsubscribe;
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  const register = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.Container}
      keyboardVerticalOffset={Platform.OS == "android" ? -520 : 0}
    >
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={styles.image}
      />
      <View style={styles.InputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <View>
        <Button title="Login" containerStyle={styles.button} onPress={signIn} />
        <Button
          title="Register"
          type="outline"
          containerStyle={styles.button}
          onPress={register}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    marginTop: 10,
    width: 200,
  },
  image: {
    width: 200,
    height: 200,
  },
  InputContainer: {
    width: 300,
  },
});

export default LoginScreen;
