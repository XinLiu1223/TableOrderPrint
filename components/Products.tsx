import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = { navigation: NativeStackNavigationProp<any> };

export default function ProductsScreen({ navigation }: Props) {
  const addButton = (color: string) => (
    <Button
      title={color}
      onPress={() => navigation.navigate("Details", { colorParam: color })}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Producs Screen</Text>
      <View style={styles.buttonView}>
        {addButton("Red")}
        {addButton("RedA")}
      </View>
      <View style={styles.buttonView}>
        {addButton("Orange")}
        {addButton("OrangeA")}
      </View>
      <View style={styles.buttonView}>
        {addButton("Green")}
        {addButton("GreenA")}
      </View>
      <View style={styles.buttonView}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
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
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
});
