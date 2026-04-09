import { StatusBar } from "expo-status-bar";
import RegMainForm from "./RegMainScreen";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import ProductsScreen from "./components/Products";
import ProductsDetails from "./components/ProductDetails";

type RootStackParamList = {
  Home: undefined;
  Producs: undefined;
  Details: {
    colorParam: string;
    name: string;
    id: number;
    description: string;
  };
  Registration: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Producs" component={ProductsScreen} />
        <Stack.Screen name="Details" component={ProductsDetails} />
        {/* <Stack.Screen name="Registration" component={RegMainForm} /> */}
      </Stack.Navigator>
      {/* <RegMainForm /> */}
      <StatusBar style="auto" />
    </NavigationContainer>
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
