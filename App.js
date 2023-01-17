import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppBar, HStack, IconButton, Backdrop, BackdropSubheader, Button} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  const [revealed, setRevealed] = useState(false);
  return (
    <Backdrop
      revealed={revealed}
      header={
    <AppBar
    title="Title" 
    transparent
    leading={props => (
      <IconButton
        icon={props => (
          <Icon name={revealed ? "close" : "menu"} {...props} />
        )}
        onPress={() => setRevealed(prevState => !prevState)}
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
      <Button title="Click Me" onPress={() => alert("🎉🎉🎉")}/>
      <StatusBar style="auto" />
    </View>
  </Backdrop>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
