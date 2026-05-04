import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function SocAppHomeScreen() {
  const followBlock = ({
    followText,
    followNum,
  }: {
    followText: string;
    followNum: number;
  }) => {
    return (
      <View style={styles.followView}>
        <Text style={styles.textTitle}>{followText}</Text>
        <Text style={styles.followNumber}>{followNum}</Text>
      </View>
    );
  };

  return (
    <View style={styles.rootView}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.profileView}>
        <Text>Alex</Text>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
      <View style={styles.folowerAndFollowing}>
        {followBlock({ followText: "Followers", followNum: 10 })}
        {followBlock({ followText: "Following", followNum: 30 })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    alignItems: "center",
  },
  textHeader: {
    fontSize: 22,
    fontWeight: "bold",
  },
  container: {
    flexDirection: "column",
    width: "90%",
    alignItems: "center",
    marginVertical: 10,
  },
  profileView: {
    alignItems: "center",
    height: 30,
  },
  folowerAndFollowing: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "95%",
    height: 50,
    borderRadius: 5,
    marginBottom: 10,
  },

  followView: {
    flexDirection: "row",
    alignItems: "center",
  },
  followNumber: {
    marginHorizontal: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },
  inputContainer: {
    flexDirection: "column",
    width: "90%",
    alignItems: "center",
    marginVertical: 10,
  },
  textName: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 5,
  },
  textDescription: {
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: "70%",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
