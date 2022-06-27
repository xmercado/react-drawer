import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import "react-native-gesture-handler";

export default function About() {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});