import React from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const NameCart = () => {
  return (
    <>
      <View style={styles.container}>
        <FontAwesome5
          name={"shopping-cart"}
          solid
          style={{ fontSize: 100, position: "absolute", top: 70 }}
        />
        <TextInput style={styles.input} defaultValue="Cart#1" />
      </View>

      <View style={styles.nextButton}>
        <Button color="#fff" title="Next" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  input: {
    position: "absolute",
    bottom: 320,
    width: "50%",
    height: 70,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 30,
  },

  nextButton: {
    bottom: 0,
    position: "absolute",
    justifyContent: "center",
    width: "100%",
    height: 70,
    backgroundColor: "#66cc33",
  },
});

export default NameCart;
