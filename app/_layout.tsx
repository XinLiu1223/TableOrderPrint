import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
    <>
      <PaperProvider>
        <StatusBar style="inverted" />
        <Stack />
      </PaperProvider>
    </>
  );
}
