import { StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./src/components/TabNavigator";

import Login from "./src/views/Login";
import AppIntro from "./src/views/AppIntro";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="AppIntro" component={AppIntro} />
      <Stack.Screen name="Main" 
      // options={{headerShown: false}}
      component={TabNavigator} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

