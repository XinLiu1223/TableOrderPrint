import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function SocAppHomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontSize: 22,
    fontWeight: "bold",
  },
  container: {
    flexDirection: "column",
    width: "90%",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: "70%",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
