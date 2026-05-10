import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import RegMainForm from "./RegMainScreen";
import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import ProductsScreen from "./components/Products";
import ProductsDetails from "./components/ProductDetails";
import CustomDrawer from "./components/CustomDrawer";
import useButtonItemsReducer from "./reducer/buttonItems";
import { ButtonContext } from "./utils/ButtonContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import HelpScreen from "./components/HelpScreen";
import SocAppBottomTabs from "./components/SocAppBottomTabs";
import ActionButton from "./components/ActionButton";
import Header from "./components/Header";
import { PaperProvider } from "react-native-paper";
import { Stack } from "expo-router";

type RootStackParamList = {
  Home: undefined;
  Products: undefined;
  Store: undefined;
  MyTabs: undefined;
  Help: undefined;
  Details: {
    colorParam: string;
    name: string;
    id: number;
    description: string;
  };
  Registration: undefined;
  SocAppHome: undefined;
  Notifications: undefined;
  Categories: undefined;
  Profile: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();
const BottomTabs = createBottomTabNavigator<RootStackParamList>();
const NativeStack = createNativeStackNavigator<RootStackParamList>();

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

function BottomTabsScreen(numOfBtns?: number) {
  return (
    <BottomTabs.Navigator screenOptions={{}}>
      {/* <BottomTabs.Screen name="Home" component={HomeScreen} /> */}
      <BottomTabs.Screen
        name="MyTabs"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? "green" : "black"}
            />
          ),
          tabBarBadge: numOfBtns,
        }}
      />
      <BottomTabs.Screen
        name="Help"
        component={HelpScreen}
        options={{
          // headerShown: false,
          // tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Feather
              name="help-circle"
              size={24}
              color={focused ? "green" : "black"}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

function StackScreen() {
  return (
    <NativeStack.Navigator>
      {/* <NativeStack.Screen name="Home" component={Home} /> */}
      <NativeStack.Screen name="Products" component={ProductsScreen} />
      <NativeStack.Screen name="Details" component={ProductsDetails} />
    </NativeStack.Navigator>
  );
}

function HomeStack() {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="Home" component={HomeScreen} />
      <NativeStack.Screen
        name="Products"
        component={DrawerScreen}
        options={{ headerShown: false }}
      />
    </NativeStack.Navigator>
  );
}

function DrawerScreen() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      {/* <NativeStack.Screen name="Home" component={Home} /> */}
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
    <PaperProvider>
      <StatusBar style="auto" />
      {/* <Stack screenOptions={{}} /> */}
      <ButtonContext.Provider
        value={{ reducer: itemsReducer, dispatch: itemsDispatcher }}
      >
        <NavigationContainer>
          {/* {HomeDrawer()} */}
          {/* {HomeStack()} */}
          {/* uncomment this line to see the previous app */}
          {/* {BottomTabsScreen(itemsReducer.buttonItems.length)} */}
          {/* <NativeStack.Navigator> */}
          {/* <NativeStack.Screen name="Home" component={HomeScreen} /> */}
          {/* <NativeStack.Screen name="Products" component={ProductsScreen} /> */}
          {/* <NativeStack.Screen name="Details" component={ProductsDetails} /> */}
          {/* <NativeStack.Screen name="Registration" component={RegMainForm} /> */}
          {/* </NativeStack.Navigator> */}
          {/* <RegMainForm /> */}
          <Header />
          {SocAppBottomTabs()}
          <ActionButton />
          <StatusBar style="auto" />
        </NavigationContainer>
      </ButtonContext.Provider>
    </PaperProvider>
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
