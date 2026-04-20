import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import RegMainForm from "./RegMainScreen";
import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import ProductsScreen from "./components/Products";
import ProductsDetails from "./components/ProductDetails";
import CustomDrawer from "./components/CustomDrawer";
import useButtonItemsReducer from "./reducer/buttonItems";
import { ButtonContext } from "./utils/ButtonContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

type RootStackParamList = {
  Home: undefined;
  Products: undefined;
  Store: undefined;
  Details: {
    colorParam: string;
    name: string;
    id: number;
    description: string;
  };
  Registration: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="Products"
        component={StackScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

function StackScreen() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Details" component={ProductsDetails} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Products"
        component={DrawerScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function DrawerScreen() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      {/* <Drawer.Screen name="Products" component={ProductsScreen} /> */}
      <Drawer.Screen name="Store" component={ProductsScreen} />
      <Drawer.Screen name="Details" component={ProductsDetails} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const { itemsReducer, itemsDispatcher } = useButtonItemsReducer();

  useEffect(() => {
    async function loadButtonItems() {
      try {
        const savedButtonItemsJsonString =
          await AsyncStorage.getItem("buttonItems");
        if (savedButtonItemsJsonString !== null) {
          const savedButtonItems = JSON.parse(savedButtonItemsJsonString);
          itemsDispatcher({
            type: "RESTORE",
            initializedItem: savedButtonItems,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
    loadButtonItems();
  }, []);

  return (
    <ButtonContext.Provider
      value={{ reducer: itemsReducer, dispatch: itemsDispatcher }}
    >
      <NavigationContainer>
        {/* {HomeDrawer()} */}
        {HomeStack()}
        {/* <Stack.Navigator> */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Products" component={ProductsScreen} /> */}
        {/* <Stack.Screen name="Details" component={ProductsDetails} /> */}
        {/* <Stack.Screen name="Registration" component={RegMainForm} /> */}
        {/* </Stack.Navigator> */}
        {/* <RegMainForm /> */}
        <StatusBar style="auto" />
      </NavigationContainer>
    </ButtonContext.Provider>
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
