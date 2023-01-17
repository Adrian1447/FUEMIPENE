import { Text } from "@react-native-material/core";
import { Button, View } from "react-native";

export default function ProfileScreen({ navigation, route }) {
  return (
    <View>
      <Text>This is {route.params.name}'s profile</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
