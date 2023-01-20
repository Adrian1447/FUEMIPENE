import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { AppBar, FAB, HStack, IconButton } from "@react-native-material/core";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Heatmap } from "react-native-maps";

export default function App() {
  let points = [
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.12167, longitude: -79.0358, weight: 1 },
    { latitude: -8.12167, longitude: -79.0358, weight: 1 },
    { latitude: -8.12167, longitude: -79.0358, weight: 1 },
    { latitude: -8.21167, longitude: -78.0558, weight: 1 },
    { latitude: -5.11167, longitude: -79.0558, weight: 1 },
    { latitude: -5.11167, longitude: -79.0558, weight: 1 },
    { latitude: -5.11167, longitude: -79.0558, weight: 1 },
    { latitude: -2.11167, longitude: -77.0558, weight: 1 },
    { latitude: -2.11167, longitude: -77.0558, weight: 1 },
    { latitude: -2.11167, longitude: -77.0558, weight: 1 },
    { latitude: 1.11167, longitude: -80.0558, weight: 1 },
    { latitude: 1.11167, longitude: -80.0558, weight: 1 },
    { latitude: 1.11167, longitude: -80.0558, weight: 1 },
    { latitude: 1.11167, longitude: -80.0558, weight: 1 },
    { latitude: 1.11167, longitude: -80.0558, weight: 1 },
    { latitude: 1.11167, longitude: -80.0558, weight: 1 },
    { latitude: 1.11167, longitude: -80.0558, weight: 1 },
    { latitude: 1.11167, longitude: -80.0558, weight: 1 },
    { latitude: 1.11167, longitude: -80.0558, weight: 1 },
    { latitude: 1.11167, longitude: -80.0558, weight: 1 },
    { latitude: 1.11167, longitude: -80.0558, weight: 1 },
    { latitude: 1.11167, longitude: -80.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
    { latitude: -8.11167, longitude: -79.0558, weight: 1 },
  ];

  const [revealed, setRevealed] = useState(false);
  const stylesMap = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: "100%",
      height: "100%",
    },
  });
  const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View
      style={{
        position: "relative",
        height: "100%",
      }}
    >
      <AppBar
        title="Dashboard"
        color="white"
        tintColor="black"
        leading={(props) => (
          <IconButton
            icon={(props) => (
              <Icon
                style={{ color: "grey" }}
                name={revealed ? "close" : "menu"}
                {...props}
              />
            )}
            onPress={() => setRevealed((prevState) => !prevState)}
            {...props}
          />
        )}
        trailing={(props) => (
          <HStack>
            <IconButton
              icon={(props) => (
                <Icon style={{ color: "grey" }} name="magnify" {...props} />
              )}
              {...props}
            />
            <IconButton
              icon={(props) => (
                <Icon
                  style={{ color: "grey" }}
                  name="bell-outline"
                  {...props}
                />
              )}
              {...props}
            />
            <IconButton
              icon={(props) => (
                <Icon
                  style={{ color: "grey" }}
                  name="dots-vertical"
                  {...props}
                />
              )}
              {...props}
            />
          </HStack>
        )}
      />

      <View style={stylesMap.container}>
        <MapView
          style={stylesMap.map}
          region={{
            latitude: -8.14389,
            longitude: -79.0558,
            latitudeDelta: 0.09,
            longitudeDelta: 0.0121,
          }}
        >
          <Heatmap
            points={points}
            opacity={1}
            radius={20}
            maxIntensity={100}
            gradientSmoothing={10}
            heatmapMode={"POINTS_DENSITY"}
          />
        </MapView>
      </View>

      <AppBar
        style={{
          position: "absolute",
          start: 0,
          end: 0,
          bottom: 0,
          backgroundColor: "#0E4DA4",
        }}
        variant="bottom"
        leading={(props) => (
          <IconButton
            icon={(props) => <Icon name="account-tie-hat" {...props} />}
            {...props}
          />
        )}
      >
        <FAB
          icon={(props) => <Icon name="plus" {...props} />}
          style={{
            position: "absolute",
            top: -28,
            alignSelf: "center",
          }}
        />
      </AppBar>
    </View>
  );
}
