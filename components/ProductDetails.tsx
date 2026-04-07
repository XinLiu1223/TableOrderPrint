import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";

type RootStackParamList = { Details: { colorParam: string } };
type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const DetailsScreen = ({ navigation, route }: Props) => {
  useEffect(() => {
    navigation.setOptions({ title: `Product ${colorParam}` });
  });
  const { colorParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Product Details {colorParam}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
});

export default DetailsScreen;
