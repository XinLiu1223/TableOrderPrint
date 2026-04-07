import { View, StyleSheet, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

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
      <View style={styles.productContainer}>
        <Text>{name}</Text>
        <View style={styles.buttonStyle}></View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    width: "100%",
    height: 55,
    backgroundColor: "lightgrey",
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  textHeader: {
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonStyle: {
    height: "50%",
    width: "50%",
    borderRadius: 15,
  },
  pressed: {
    backgroundColor: "green",
  },
  unPressed: {
    backgroundColor: "grey",
  },
});
