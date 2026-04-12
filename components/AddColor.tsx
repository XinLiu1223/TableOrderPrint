import { useEffect, useRef, useState } from "react";
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
  onEdit,
  editId,
  editItem,
}: {
  closeModal: () => void;
  onAdd: (addedColor: {
    name: string;
    colorParam: string;
    description: string;
  }) => void;
  onEdit: (updatedColor: {
    id: number;
    name: string;
    colorParam: string;
    description: string;
  }) => void;
  editId: number | null;
  editItem?: {
    id: number;
    name: string;
    colorParam: string;
    description: string;
  } | null;
}) {
  const [colorBtn, setColorBtn] = useState<{
    name: string;
    colorParam: string;
    description: string;
  }>(
    editId !== null && editItem
      ? {
          name: editItem.name,
          colorParam: editItem.colorParam,
          description: editItem.description,
        }
      : { name: "", colorParam: "", description: "" },
  );

  const onChangeField = (key: string, value: string) =>
    setColorBtn({
      ...colorBtn,
      [key]: value,
    });

  useEffect(() => console.log(colorBtn), [colorBtn]);

  const colorRef = useRef<TextInput>(null);
  const descRef = useRef<TextInput>(null);

  const addColorWithSimpleValidate = () => {
    if (!colorBtn.name.trim() || !colorBtn.colorParam.trim()) {
      alert("name and color fields are required");
      return;
    }
    onAdd(colorBtn);
    closeModal();
  };

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
            onSubmitEditing={() => colorRef.current?.focus()}
          >
            {colorBtn.name}
          </TextInput>
          <TextInput
            ref={colorRef}
            style={styles.inputField}
            placeholder="color param: "
            onChangeText={(text) => onChangeField("colorParam", text)}
            onSubmitEditing={() => descRef.current?.focus()}
          >
            {colorBtn.colorParam}
          </TextInput>
          <TextInput
            ref={descRef}
            style={styles.inputField}
            placeholder="description: "
            onChangeText={(text) => onChangeField("description", text)}
          >
            {colorBtn.description}
          </TextInput>
        </View>
        <View style={styles.btnStyle}>
          <Button
            title={editId ? "Update" : "Add"}
            onPress={() => {
              if (editId && editItem) {
                onEdit({ ...colorBtn, id: editItem.id });
                closeModal();
              } else {
                addColorWithSimpleValidate();
                closeModal();
              }
            }}
          />
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
