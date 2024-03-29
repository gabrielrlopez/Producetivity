import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/produce3.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo_transparent.png")}
          style={styles.logo}
        />
        <Text style={styles.slogan}>
          Making your job easier, and you faster
        </Text>
      </View>
      <View style={styles.getStartedButton}>
        <Button
          color="#fff"
          title="Create a new cart"
          onPress={() => navigation.navigate("Name Your First Cart")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  slogan: {
    color: "#fff",
    fontSize: 18,
  },
  getStartedButton: {
    justifyContent: "center",
    width: "100%",
    height: 70,
    backgroundColor: "#66cc33",
  },
});

export default WelcomeScreen;
