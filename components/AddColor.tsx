import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Modal,
  TextInput,
} from "react-native";

export default function AddColorModal({
  closeModal,
  onAdd,
}: {
  closeModal: () => void;
  onAdd: (addedColor: {
    name: string;
    colorParam: string;
    description: string;
  }) => void;
}) {
  //   const [isOpen, setOpen] = useState(false);
  const [colorBtn, setColorBtn] = useState<{
    name: string;
    colorParam: string;
    description: string;
  }>({
    name: "",
    colorParam: "",
    description: "",
  });

  const onChangeField = (key: string, value: string) =>
    setColorBtn({
      ...colorBtn,
      [key]: value,
    });

  useEffect(() => console.log(colorBtn), [colorBtn]);

  return (
    <Modal
      //   visible={isOpen}
      onRequestClose={() => closeModal()}
      transparent={true}
    >
      <View style={styles.modalStyle}>
        <Text style={styles.modalTextStyle}>Modal Screen</Text>
        <View style={styles.formField}>
          <TextInput
            style={styles.inputField}
            placeholder="name: "
            onChangeText={(text) => onChangeField("name", text)}
          >
            {colorBtn.name}
          </TextInput>
          <TextInput
            style={styles.inputField}
            placeholder="description: "
            onChangeText={(text) => onChangeField("description", text)}
          >
            {colorBtn.description}
          </TextInput>
          <TextInput
            style={styles.inputField}
            placeholder="color param: "
            onChangeText={(text) => onChangeField("colorParam", text)}
          >
            {colorBtn.colorParam}
          </TextInput>
        </View>
        <View style={styles.btnStyle}>
          <Button title="Add" onPress={() => onAdd(colorBtn)} />
          <Button title="Close" onPress={() => closeModal()} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  goHomeButton: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-evenly",
  },
  modalStyle: {
    height: "60%",
    width: "80%",
    // justifyContent: "center",
    paddingTop: 10,
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
  formField: {
    marginVertical: 10,
  },
  inputField: {
    alignSelf: "center",
    width: "90%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 5,
  },
  btnStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // width: "80%",
    marginVertical: 10,
  },
});
