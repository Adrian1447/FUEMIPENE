import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import HomeScreen from "./Home";
import ProfileScreen from "./ProfileScreen";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
