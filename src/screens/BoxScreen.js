import React, { useState } from "react"
import { Text, View, StyleSheet, TextInput } from "react-native"

const BoxScreen = () => {
  return <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>Box Screen</Text>
  </View>
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 7,
    borderColor: "black"
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
    margin: 20
  }
})

export default BoxScreen