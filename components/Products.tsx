import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = { navigation: NativeStackNavigationProp<any> };

export default function ProductsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Producs Screen</Text>
      <View style={styles.buttonView}>
        <Button
          title="Red"
          onPress={() => navigation.navigate("Details", { colorParam: "Red" })}
        ></Button>
        <Button
          title="RedA"
          onPress={() => navigation.navigate("Details", { colorParam: "RedA" })}
        ></Button>
      </View>
      <View style={styles.buttonView}>
        <Button
          title="Orange"
          onPress={() =>
            navigation.navigate("Details", { colorParam: "Orange" })
          }
        ></Button>
        <Button
          title="OrangeA"
          onPress={() =>
            navigation.navigate("Details", { colorParam: "OrangeA" })
          }
        ></Button>
      </View>
      <View style={styles.buttonView}>
        <Button
          title="Green"
          onPress={() =>
            navigation.navigate("Details", { colorParam: "Green" })
          }
        ></Button>
        <Button
          title="GreenA"
          onPress={() =>
            navigation.navigate("Details", { colorParam: "GreenA" })
          }
        ></Button>
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
