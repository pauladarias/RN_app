import React, { useReducer }from "react"
import { View, Text, StyleSheet } from "react-native"
import ColorCounter from "../components/ColorCounter"

const COLOR_INCREMENT = 15

const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number}
    // action === { colorToChange: "red" || "green" || "blue", ammpunt: 15 || -15}

    switch (action.colorToChange) {
      case "red":
        return { ...state, red: state.red + action.ammount}
      case "green":
        return { ...state, green: state.red + action.ammount}
      case "blue":
        return { ...state, blue: state.red + action.ammount}   
      default:
        state   
    }
}

const SquareScreen = () => {

  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})


  return <View>
    <ColorCounter 
      onIncrease={() => 
        dispatch({ colorToChange: "red", ammount: COLOR_INCREMENT })} 
      onDecrease={() => 
        dispatch({ colorToChange: "red", ammount: -1 * COLOR_INCREMENT })} 
      color="Red"
    />

    <ColorCounter 
      onIncrease={() => 
        dispatch({ colorToChange: "green", ammount: COLOR_INCREMENT })} 
      onDecrease={() => 
        dispatch({ colorToChange: "green", ammount: -1 * COLOR_INCREMENT })} 
      color="Green"
    />
    <ColorCounter 
      onIncrease={() => 
        dispatch({ colorToChange: "blue", ammount: COLOR_INCREMENT })} 
      onDecrease={() => 
        dispatch({ colorToChange: "blue", ammount: -1 * COLOR_INCREMENT })} 
      color="Blue"
    />
    <View style={{ height:150, width:150, backgroundColor: `rgb(${state.red},${state.green},${state.blue})`}}></View>
  </View>
}

const styles = StyleSheet.create()

export default SquareScreen