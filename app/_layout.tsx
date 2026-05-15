import { PRIMARY_COLOR } from "@/constants";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PaperProvider, MD3LightTheme } from "react-native-paper";

export default function RootLayout() {
  const theme = {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      // primary: "#013C7A",
      primary: PRIMARY_COLOR,
    },
  };
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar style="inverted" />
        <Stack />
      </PaperProvider>
    </>
  );
}
