import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";

type RootStackParamList = {
  Details: {
    name: string;
    colorParam: string;
    id: number;
    description: string;
  };
};
type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const DetailsScreen = ({ navigation, route }: Props) => {
  const { colorParam, name, description } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: `Product ${name}`,
      headerStyle: { backgroundColor: colorParam },
    });
  });

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 22,
          color: colorParam,
          marginBottom: 10,
        }}
      >
        Product Details {colorParam}
      </Text>
      <Text style={styles.textDescription}>{description}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textDescription: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
});

export default DetailsScreen;
