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
    height: 200,

  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1

  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1,
    ...StyleSheet.absoluteFillObject


  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 5

  }
})

export default BoxScreen