import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function SocAppHomeScreen() {
  return (
    <View style={styles.rootView}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.profileView}>
        <Text>Alex</Text>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
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
  profileView: {
    alignItems: "center",
    // justifyContent: "center",
    height: 50,
    // borderWidth: 1,
  },
  inputContainer: {
    flexDirection: "column",
    width: "90%",
    alignItems: "center",
    marginVertical: 10,
  },
  textName: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },
  textDescription: {
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 5,
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
