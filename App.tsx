import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//importing the screens
import HomeScreen from "./screens/HomeScreen";
import ChefScreen from "./screens/ChefScreen";
import GuestScreen from "./screens/GuestScreen";
import SplashScreen from "./screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chef" component={ChefScreen} />
        <Stack.Screen name="Guest" component={GuestScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
