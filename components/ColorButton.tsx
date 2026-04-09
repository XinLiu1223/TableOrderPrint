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
  };
};

type Props = {
  id: number;
  name: string;
  colorParam: string;
  description: string;
};

export default function ColorButton(props: Props) {
  const { name, colorParam } = props;
  const navigate =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Pressable
      onPress={() => navigate.navigate("Details", { ...props })}
      style={({ pressed }) => (pressed ? styles.pressed : styles.unPressed)}
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.textStyle}>{name}</Text>
        <View
          style={[
            styles.buttonStyle,
            {
              backgroundColor: colorParam,
            },
          ]}
        >
          {/* <AntDesign name="delete" size={20} color="red" />
        <View style={styles.buttonStyle}></View> */}
        </View>
      </View>
    </Pressable>
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
    backgroundColor: "lightgrey",
  },
});
