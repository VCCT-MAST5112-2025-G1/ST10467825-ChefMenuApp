import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { menuData } from "./data/menuData";
import { MenuProvider } from "./MenuContent";
import { ImageBackground, StyleSheet } from "react-native";

//importing the screens
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import ChefScreen from "./screens/ChefScreen";
import GuestScreen from "./screens/GuestScreen";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ImageBackground source={require("./assets/textured-bckg.png")}
      style={styles.background}
      resizeMode="cover">
      <MenuProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash" screenOptions={{
            headerShown: false,
            //making screen cards transparent
            contentStyle: { backgroundColor: 'transparent' },
            //makes the animation background transparent
            animationTypeForReplace: 'push',
          }}>
            <Stack.Screen name="Splash" component={SplashScreen} options={{ contentStyle: { backgroundColor: 'transparent' } }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ contentStyle: { backgroundColor: 'transparent' } }} />
            <Stack.Screen name="Chef" component={ChefScreen} options={{ contentStyle: { backgroundColor: 'transparent' } }} />
            <Stack.Screen name="Guest" component={GuestScreen} options={{ contentStyle: { backgroundColor: 'transparent' } }} />

          </Stack.Navigator>
        </NavigationContainer>
      </MenuProvider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});