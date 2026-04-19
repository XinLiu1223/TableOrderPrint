import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { useButtonContext } from "../utils/ButtonContext";
import { StyleSheet } from "react-native";

export default function CustomDrawer(props: DrawerContentComponentProps) {
  const { navigation } = props;
  const { reducer, dispatch } = useButtonContext();

  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      {reducer.buttonItems.map((item) => (
        <DrawerItem
          label={item.name}
          onPress={() =>
            navigation.navigate("Details", {
              id: item.id,
              name: item.name,
              colorParam: item.colorParam,
              description: item.description,
            })
          }
          key={item.id}
          style={styles.customItem}
          inactiveBackgroundColor={item.colorParam}
          // activeBackgroundColor="black"
        />
      ))}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  customItem: {
    marginVertical: 5,
    // marginHorizontal: 10,
  },
  itemBackground: {
    backgroundColor: "lightblue",
  },
});
