import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { useButtonContext } from "../utils/ButtonContext";

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
          inactiveBackgroundColor={item.colorParam}
        />
      ))}
    </DrawerContentScrollView>
  );
}
