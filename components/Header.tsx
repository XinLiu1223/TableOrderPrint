import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Image,
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
} from "react-native";

type RootStackParamList = {
  Profile: undefined;
};

export default function Header() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.header}>
      {/* <Text style={styles.text}>Header</Text> */}
      <Image
        source={require("../assets/images/header-background-unspecified.png")}
        style={styles.headerImage}
      />
      <View style={styles.iconTextView}>
        <View style={styles.textView}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Alex
          </Text>
        </View>
        <View style={styles.iconView}>
          <AntDesign
            name="edit"
            size={30}
            color={"white"}
            onPress={() => navigation.navigate("Profile")}
          />
        </View>
      </View>
      <View style={styles.profileView}>
        {/* <Text style={styles.text}>Header</Text> */}
        <Image
          source={require("../assets/images/alex-profile-image.png")}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 150,
    alignItems: "center",
    marginBottom: 60,
  },
  headerImage: {
    position: "absolute",
  },
  profileView: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "absolute",
    top: 100,
    borderColor: "white",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  iconTextView: {
    flexDirection: "row",
  },
  textView: {
    position: "absolute",
    top: 40,
    left: "-3%",
  },
  iconView: {
    top: 40,
    right: -120,
    position: "relative",
  },
});
