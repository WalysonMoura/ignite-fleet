import { Routes } from "@/routes";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
   /*  <ThemeProvider> */
      <SafeAreaProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes/>
      </SafeAreaProvider>
    /* </ThemeProvider> */
  );
}
