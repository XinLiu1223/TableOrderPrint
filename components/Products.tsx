import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { BUTTON } from "../model/ProductFeed";
import ColorButton from "./ColorButton";

type Props = { navigation: NativeStackNavigationProp<any> };

export default function ProductsScreen({ navigation }: Props) {
  const [buttons, setButtons] = useState(BUTTON);

  const addButton = (props: {
    name: string;
    colorParam: string;
    id: number;
    description: string;
  }) => (
    <View style={styles.buttonColumn}>
      <Button
        title={props.name}
        onPress={() => navigation.navigate("Details", { ...props })}
      />
    </View>
  );

  const deleteColorButton = (btnId: number) =>
    setButtons(buttons.filter((btn) => btn.id !== btnId));

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Producs Screen</Text>
      <View style={styles.listBody}>
        <FlatList
          // data={BUTTON}
          data={buttons}
          // renderItem={({ item }) => addButton({ ...item })}
          renderItem={({ item }) => (
            <ColorButton {...item} deleteItem={deleteColorButton} />
          )}
          keyExtractor={(item) => item.id.toString()}
          // numColumns={2}
          // columnWrapperStyle={styles.columnWrapper}
        />
      </View>
      <View style={styles.goHomeButton}>
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
    // justifyContent: "center",
  },
  textHeader: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  listBody: {
    // marginVertical: 10,
    height: "80%",
    width: "90%",
  },
  buttonColumn: {
    marginHorizontal: 10,
  },
  columnWrapper: {
    justifyContent: "space-between",
    width: "80%",
  },
  goHomeButton: {
    // marginTop: 10,
  },
});
