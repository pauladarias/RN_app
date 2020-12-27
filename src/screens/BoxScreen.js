import React, { useState } from "react"
import { Text, View, StyleSheet, TextInput } from "react-native"

const BoxScreen = () => {
  return <View style={styles.viewStyle}>
    <Text style={styles.textOneStyle}>Child 1</Text>
    <Text style={styles.textTwoStyle}>Child 2</Text>
    <Text style={styles.textThreeStyle}>Child 3</Text>
  </View>
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 7,
    borderColor: "black",
    flexDirection: "row",
    height: 600,
    justifyContent: "space-between"


  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    width: 100,
    height: 100,



  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "green",
    width: 100,
    alignSelf: "flex-end",
    height: 100,



  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "purple",
    width: 100,
    height: 100,


  }
})

export default BoxScreen