import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import HomeScreen from "./Screens/Home";
import ProfileScreen from "./Screens/ProfileScreen";
import Xd from "./Screens/xd";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="Xd"
          component={Xd}
          options={{ title: "Contador" }}
        />
        <Stack.Screen name="xd" component={Xd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
