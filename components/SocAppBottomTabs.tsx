import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SocAppHomeScreen from "../screens/HomeScreen";
import Notifications from "../screens/Notifications";
import Categories from "../screens/Categories";
import Profile from "../screens/Profile";
import { Image } from "react-native";

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

const BottomTabs = createBottomTabNavigator<RootStackParamList>();
export default function SocAppBottomTabs() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          // backgroundColor: "grey",
        },
      }}
    >
      <BottomTabs.Screen
        name="SocAppHome"
        component={SocAppHomeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={require("../assets/images/home-selected.png")} />
            ) : (
              <Image source={require("../assets/images/home-unselected.png")} />
            ),
          tabBarShowLabel: false,
        }}
      />
      <BottomTabs.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../assets/images/notifications-selected.png")}
              />
            ) : (
              <Image
                source={require("../assets/images/notifications-unselected.png")}
              />
            ),
          // tabBarShowLabel: false,
        }}
      />
      <BottomTabs.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../assets/images/categories-selected.png")}
              />
            ) : (
              <Image
                source={require("../assets/images/categories-unselected.png")}
              />
            ),
          // tabBarShowLabel: false,
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../assets/images/profile-selected.png")}
              />
            ) : (
              <Image
                source={require("../assets/images/profile-unselected.png")}
              />
            ),
          // tabBarShowLabel: false,
        }}
      />
    </BottomTabs.Navigator>
  );
}
