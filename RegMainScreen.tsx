import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function RegMainForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);
  const submitForm = () => {
    alert(`Email: ${email} Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Registration Form</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          inputMode="email"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <Button
        title="Submit Form"
        onPress={submitForm}
        accessibilityLabel="Registration Form Submission"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontSize: 22,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "column",
    width: "90%",
    alignItems: "center",
    marginVertical: 10,
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
