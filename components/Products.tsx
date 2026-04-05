import { View, Text, StyleSheet } from "react-native";

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Producs Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontSize: 22,
    fontWeight: "bold",
  },
  inputContainer: {
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
