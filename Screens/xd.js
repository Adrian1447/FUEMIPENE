import { Button } from "@react-native-material/core";
import React, { useState } from "react";
import { Text, View } from "react-native";

export default function App() {
  const [loginState, setLoginState] = useState("loading");

  const showLoading = (loadinggg) => {
    if (loadinggg === "success") {
      return <Text>El exito....</Text>;
    } else if (loadinggg === "error") {
      return <Text>Puta la cage....</Text>;
    } else {
      return <Text>Cargando espera pe no seas cagon....</Text>;
    }
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Button
        title="cargandoooo"
        onPress={() => setLoginState("loading")}
      ></Button>
      <Button title="success" onPress={() => setLoginState("success")}></Button>
      <Button title="error" onPress={() => setLoginState("error")}></Button>
      <Text>El estado de login es:</Text>
      <Text>{showLoading(loginState)}</Text>
    </View>
  );
}
