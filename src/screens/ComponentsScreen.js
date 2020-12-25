import React from "react"
import { Text, StyleSheet, View } from "react-native"

const ComponentsScreen = () => {
  const name = "Paula Darias"
  return (
    <View>
      <Text style={styles.textStyle}>Hola que tal como te llamas?</Text>
      <Text style={styles.subHead}>Me llamo {name}</Text>
    </View>

  )
}

const styles = StyleSheet.create ({
  textStyle: {
    fontSize: 50
  },
  subHead: {
    fontSize: 20
  }

})

export default ComponentsScreen