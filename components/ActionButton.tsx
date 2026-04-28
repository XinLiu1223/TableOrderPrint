import { Image, View, StyleSheet, useWindowDimensions } from "react-native";

export default function ActionButton() {
  const screenWidth = useWindowDimensions().width;

  return (
    <View style={[styles.actionView, { right: (screenWidth - 60) / 2 }]}>
      <Image
        source={require("../assets/images/action-image.png")}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  actionView: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#000000",
    position: "absolute",
    bottom: 70,
    right: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
