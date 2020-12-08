import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Button } from "native-base";
import { Entypo } from "@expo/vector-icons";

var items = new Array(9).fill("empty");
export default function App() {
  const [state, setState] = useState({
    isCross: true,
    message: "Start Game",
    msgColor: "black",
  });

  const { message, msgColor } = state;

  const onPress = (index) => {
    if (items[index] === "empty") {
      items[index] = state.isCross ? "Cross" : "Circle";
      setState({
        isCross: !state.isCross,
        message: state.isCross ? "Circle Turn" : "Cross Turn",
        msgColor:"black",
      });
    }
    winLogic();
  };

  const getIcon = (val) => {
    switch (val) {
      case "Cross":
        return "cross";
      case "Circle":
        return "circle";
      default:
        return "pencil";
    }
  };

  const winLogic = () => {
    if (
      items[0] !== "empty" &&
      items[0] === items[1] &&
      items[0] === items[2]
    ) {
      setWinMessage(items[0] + " Win");
    } else if (
      items[3] !== "empty" &&
      items[3] === items[4] &&
      items[3] === items[5]
    ) {
      setWinMessage(items[3] + " Win");
    } else if (
      items[6] !== "empty" &&
      items[6] === items[7] &&
      items[6] === items[8]
    ) {
      setWinMessage(items[6] + " Win");
    } else if (
      items[0] !== "empty" &&
      items[0] === items[3] &&
      items[0] === items[6]
    ) {
      setWinMessage(items[0] + " Win");
    } else if (
      items[1] !== "empty" &&
      items[1] === items[4] &&
      items[1] === items[7]
    ) {
      setWinMessage(items[1] + " Win");
    } else if (
      items[2] !== "empty" &&
      items[2] === items[5] &&
      items[2] === items[8]
    ) {
      setWinMessage(items[2] + " Win");
    } else if (
      items[0] !== "empty" &&
      items[0] === items[4] &&
      items[0] === items[8]
    ) {
      setWinMessage(items[0] + " Win");
    } else if (
      items[2] !== "empty" &&
      items[2] === items[4] &&
      items[2] === items[6]
    ) {
      setWinMessage(items[2] + " Win");
    } else if (!items.includes("empty")) {
      setState({ isCross: true, message: "Game Over", msgColor: "#FF3031" });
    }
  };

  const setWinMessage = (msg) => {
    setState({ isCross: true, message: msg, msgColor: "#6AB04A" });
  };

  const resetGame = () => {
    items = Array(9).fill("empty");
    setState({ isCross: true, message: "Start Game", msgColor: "black" });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={[styles.font, { color: msgColor }]}>{message}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {items.map((val, index) => {
          return (
            <TouchableOpacity style={styles.button} onPress={() => onPress(index)}>
              <Entypo
                name={getIcon(val)}
                style={[styles.font]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.container}>
        <Button style={styles.resetButton} rounded danger onPress={resetGame}>
          <Text style={{ color: "white" }}>Reset Game</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  font: {
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 5,
  },
  button: {
    justifyContent:"center",
    alignItems:"center",
    marginHorizontal: 2,
    marginVertical: 2,
    width: "32%",
    height: 100,
    backgroundColor: "#F3B431",
  },
  resetButton: {
    padding: 15,
  },
});
