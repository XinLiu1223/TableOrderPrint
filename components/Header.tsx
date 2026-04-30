import { Image, View, StyleSheet, useWindowDimensions } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      {/* <Text style={styles.text}>Header</Text> */}
      <Image
        source={require("../assets/images/header-background-unspecified.png")}
        style={styles.header}
      />
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
  text: {},
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
});
