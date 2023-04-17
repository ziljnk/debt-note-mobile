import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/views/Login";
import AppIntro from "./src/views/AppIntro";

export default function App() {
  return (
    <View style={styles.container}>
      <AppIntro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
