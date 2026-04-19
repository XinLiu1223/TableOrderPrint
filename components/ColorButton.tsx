import { View, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";

type RootStackParamList = {
  Details: {
    id: number;
    name: string;
    colorParam: string;
    description: string;
    // deleteItem: (btnId: number) => void;
    // openEdit: (btnId: number) => void;
  };
};

type Props = {
  id: number;
  name: string;
  colorParam: string;
  description: string;
  deleteItem: (btnId: number) => void;
  openEdit: (btnId: number) => void;
};

export default function ColorButton(props: Props) {
  const { name, colorParam, deleteItem, id, openEdit } = props;
  const navigate =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={() => navigate.navigate("Details", { ...props })}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.pressableStyle]
            : [styles.unPressed, styles.pressableStyle]
        }
      >
        <Text style={styles.textStyle}>{name}</Text>
        <View
          style={[
            styles.buttonStyle,
            {
              backgroundColor: colorParam,
            },
          ]}
        ></View>
      </Pressable>
      <View style={styles.iconStyle}>
        <Pressable onPress={() => deleteItem(id)}>
          <AntDesign name="delete" size={25} color="red" />
        </Pressable>
      </View>
      <View style={styles.iconStyle}>
        <Pressable onPress={() => openEdit(id)}>
          <AntDesign name="edit" size={25} color="green" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: "100%",
    height: 55,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  buttonStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    // borderColor: "black",
    // borderWidth: 2,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  textStyle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  pressed: {
    backgroundColor: "gold",
  },
  unPressed: {
    // backgroundColor: "lightgrey",
  },
  pressableStyle: {
    // flex: 6,
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
  },
  iconStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    borderLeftColor: "black",
    borderLeftWidth: 2,
  },
});
