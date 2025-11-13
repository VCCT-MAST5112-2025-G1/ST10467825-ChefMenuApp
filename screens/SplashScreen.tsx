import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, "Splash">;

export default function SplashScreen() {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Logo.jpeg")} // adjust this path if needed
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>Christoffel's Kitchen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
    color: "#b38a3c",
    fontFamily: "serif",
  },
});
