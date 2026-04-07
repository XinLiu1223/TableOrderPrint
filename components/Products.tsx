import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BUTTON } from "../model/ProductFeed";
import ColorButton from "./ColorButton";

type Props = { navigation: NativeStackNavigationProp<any> };

export default function ProductsScreen({ navigation }: Props) {
  const addButton = (props: {
    name: string;
    colorParam: string;
    id: number;
    description: string;
  }) => (
    <Button
      title={props.name}
      onPress={() => navigation.navigate("Details", { ...props })}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Producs Screen</Text>
      <View style={{ height: "50%", width: "80%" }}>
        <FlatList
          data={BUTTON}
          // renderItem={({ item }) => addButton({ ...item })}
          renderItem={({ item }) => <ColorButton {...item} />}
          keyExtractor={(item) => item.id.toString()}
          // numColumns={2}
          // columnWrapperStyle={{
          //   justifyContent: "space-between",
          //   width: "80%",
          // }}
        />
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
    marginVertical: 5,
  },
});
