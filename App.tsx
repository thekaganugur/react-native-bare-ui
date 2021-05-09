import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ExampleApp from "./example";
import { theme } from "./src/theme";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemeProvider theme={theme}>
        <ExampleApp />
      </ThemeProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
