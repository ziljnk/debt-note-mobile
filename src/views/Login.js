import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { Component, useState } from "react";

const screenWidth = Dimensions.get("window").width;
export function Login({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topBackground}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../images/main_logo.png")}
          ></Image>
        </View>
      </View>
      <View style={styles.bottomBackground}>
        <View style={styles.inputComponent}>
          <Text style={styles.labelInput}>Username</Text>
          <TextInput
            style={styles.usernameTextField}
            placeholder="example@gmail.com"
          ></TextInput>
        </View>
        <View style={styles.inputComponent}>
          <Text style={styles.labelInput}>Password</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              secureTextEntry={hidePassword}
              style={styles.passwordTextField}
              placeholder="example"
            ></TextInput>
            <TouchableOpacity
              style={styles.showPassword}
              onPress={togglePasswordVisibility}
            >
              {!hidePassword ? (
                <Text style={{ fontWeight: 800 }}>Hide</Text>
              ) : (
                <Text style={{ fontWeight: 800 }}>Show</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.logInButton}
          onPress={() => {
            navigation.navigate("VideoCall");
          }}
        >
          <Text style={{ fontWeight: 500 }}>Continue</Text>
        </TouchableOpacity>

        <View style={styles.horizontalLine}>
          <View style={styles.childHorizontalLine}></View>
          <Text style={{}}>or</Text>
          <View style={styles.childHorizontalLine}></View>
        </View>

        <View style={styles.otherLogIn}>
          <TouchableOpacity style={styles.logInGoogleFacebookButton}>
            <Image
              style={styles.googleFacebookIcon}
              source={require("../images/google-icon.png")}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logInGoogleFacebookButton}>
            <Image
              style={styles.googleFacebookIcon}
              source={require("../images/facebook-icon.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  topBackground: {
    backgroundColor: "#22577E",
    width: screenWidth,
    alignItems: "center",
    height: "25%",
    borderBottomRightRadius: "60%",
    borderBottomLeftRadius: "60%",
  },
  logoContainer: {
    borderRadius: "100%",
    marginTop: 100,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    borderWidth: 2,
    borderColor: "lightgray",
  },
  logo: {
    width: 170,
    height: 170,
    resizeMode: "center",
  },
  bottomBackground: {
    paddingHorizontal: 40,
    marginTop: 110,
  },
  passwordTextField: {
    borderWidth: 0.5,
    height: 45,
    paddingHorizontal: 15,
    borderRadius: 200,
    borderColor: "lightgray",
    marginTop: 5,
    flex: 1,
    paddingRight: 30,
  },
  usernameTextField: {
    borderWidth: 0.5,
    height: 45,
    paddingHorizontal: 15,
    borderRadius: 25,
    borderColor: "lightgray",
    marginTop: 5,
  },
  inputComponent: {
    marginTop: 15,
  },
  labelInput: {
    fontWeight: 500,
  },
  showPassword: {
    position: "absolute",
    top: 19,
    right: 20,
  },
  buttonLogIn: {
    borderWidth: 0.5,
    borderColor: "lightgray",
    width: 100,
    height: 50,
  },
  logInButton: {
    height: 45,
    borderWidth: 0.5,
    borderColor: "lightgray",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#B9E9FC",
  },
  horizontalLine: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
  },
  childHorizontalLine: {
    height: 1,
    width: 100,
    backgroundColor: "gray",
    borderWidth: 0.1,
  },
  logInGoogleFacebookButton: {
    height: 45,
    width: 45,
    borderRadius: "100%",
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "lightgray",
  },
  googleFacebookIcon: {
    resizeMode: "center",
  },
  otherLogIn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 15,
  },
});
export default Login;
