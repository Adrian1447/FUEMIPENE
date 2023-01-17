import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  AppBar,
  Backdrop,
  BackdropSubheader,
  Button,
  IconButton,
} from "@react-native-material/core";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  const [revealed, setRevealed] = useState(false);
  const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <Backdrop
      revealed={revealed}
      header={
        <AppBar
          title="Title"
          transparent
          leading={(props) => (
            <IconButton
              icon={(props) => (
                <Icon name={revealed ? "close" : "menu"} {...props} />
              )}
              onPress={() => setRevealed((prevState) => !prevState)}
              {...props}
            />
          )}
        />
      }
      backLayer={<View style={{ height: 120 }} />}
    >
      <BackdropSubheader title="Subheader" />
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title="Click Me" onPress={() => alert("🎉🎉🎉")} />
        <StatusBar style="auto" />
      </View>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
    </Backdrop>
  );
}
