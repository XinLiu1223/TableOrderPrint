import { View, Text, StyleSheet, Button, FlatList, Modal } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import { BUTTON } from "../model/ProductFeed";
import ColorButton from "./ColorButton";
import AddColorModal from "./AddColor";

type Props = { navigation: NativeStackNavigationProp<any> };

export default function ProductsScreen({ navigation }: Props) {
  const [buttons, setButtons] = useState(BUTTON);
  const [isOpen, setOpen] = useState(false);
  const [edit, setEdit] = useState<number | null>(null);

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

  const addColorButton = (addedColor: {
    name: string;
    colorParam: string;
    description: string;
  }) => {
    setOpen(false);
    setButtons([...buttons, { ...addedColor, id: buttons.length + 1 }]);
  };

  const updateColorButton = (updatedColor: {
    name: string;
    colorParam: string;
    id: number;
    description: string;
  }) => {
    setButtons(
      buttons.map((btn) => (btn.id === updatedColor.id ? updatedColor : btn)),
    );
    setOpen(false);
  };

  const openEdit = (id: number) => {
    setOpen(!isOpen);
    setEdit(id);
  };

  const closeModal = () => setOpen(false);

  useEffect(() => console.log(buttons), [buttons]);

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Producs Screen</Text>
      <View style={styles.listBody}>
        <FlatList
          // data={BUTTON}
          data={buttons}
          // renderItem={({ item }) => addButton({ ...item })}
          renderItem={({ item }) => (
            <ColorButton
              {...item}
              deleteItem={deleteColorButton}
              openEdit={(id) => openEdit(id)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          // numColumns={2}
          // columnWrapperStyle={styles.columnWrapper}
        />
      </View>
      {isOpen ? (
        <AddColorModal
          closeModal={() => closeModal()}
          onAdd={(colorItem) => addColorButton(colorItem)}
          onEdit={(updatedItem) => updateColorButton(updatedItem)}
          editId={edit}
          editItem={
            edit !== null ? buttons.find((btn) => btn.id === edit) : null
          }
        />
      ) : null}
      <View style={styles.goHomeButton}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button
          title="Add Item"
          onPress={() => {
            setEdit(null);
            setOpen(!isOpen);
          }}
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
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  modalStyle: {
    height: "50%",
    width: "80%",
    justifyContent: "center",
    marginTop: "50%",
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#f1e5d1",
  },
  modalTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
