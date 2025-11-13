import React, { useContext } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import { MenuItem } from "../types";
import MenuList from "../components/MenuList";
import { MenuContext } from "../MenuContent";
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { SafeAreaView } from 'react-native-safe-area-context';

// defining navigation types
type RootStackParamList = {
  Home: undefined;
  Chef: undefined;
  Guest: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;


export default function HomeScreen() {
  //menuItems fetched from context
  const { menuItems, setMenuItems } = useContext(MenuContext);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  //count of total items
  const totalCount = menuItems.length;

  //count items by category
  const startersCount = menuItems.filter(
    (item) => item.course.toLowerCase() == "starter"
  ).length;

  const mainsCount = menuItems.filter(
    (item) => item.course.toLowerCase() == "main"
  ).length;

  const dessertsCount = menuItems.filter(
    (item) => item.course.toLowerCase() == "dessert"
  ).length;

  // Calculate total price of all menu items
  const totalPrice = menuItems.reduce((sum, item) => sum + item.price, 0);

  // helper to calculate average price
  const average = (items: MenuItem[], course: string) => {
    const filtered = items.filter(i => i.course.toLowerCase() === course.toLowerCase());
    if (filtered.length === 0) return 0;
    return filtered.reduce((sum, i) => sum + i.price, 0) / filtered.length;
  };

  const starterAvg = average(menuItems, "starter");
  const mainAvg = average(menuItems, "main");
  const dessertAvg = average(menuItems, "dessert");

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.title}>Chef's Digital Menu</Text>
        {/* menu item form*/}
        {/* Display total items */}
        <Text style={styles.countText}>Total Items: {totalCount}</Text>

        {/* Display item counts per category */}
        <View style={styles.countContainer}>
          <Text style={styles.countText}>Starters: {startersCount}</Text>
          <Text style={styles.countText}>Mains: {mainsCount}</Text>
          <Text style={styles.countText}>Desserts: {dessertsCount}</Text>
        </View>
        <Text style={styles.sectionTitle}>Average Prices</Text>
        <Text>Starters Avg: R {starterAvg.toFixed(2)}</Text>
        <Text>Mains Avg: R {mainAvg.toFixed(2)}</Text>
        <Text>Desserts Avg: R {dessertAvg.toFixed(2)}</Text>

        {/* Display total price */}
        <Text style={styles.countText}>
          Total Price: R {totalPrice.toFixed(2)}
        </Text>
        {/* Menu Items List */}
        {/* Menu Items List */}
        <Text style={styles.sectionTitle}>Current Menu</Text>
        <MenuList items={menuItems} removeItem={() => { }} />
        <Button title="Chef Screen" onPress={() => navigation.navigate("Chef")} />
        <View style={{ height: 10 }} />
        <Button title="Guests" onPress={() => navigation.navigate("Guest")} />
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    backgroundColor: 'rgba(242, 237, 230, 0.85)',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
    color: "#3a2b1a"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    color: "#3a2b1a"
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  menuItem: {
    backgroundColor: 'rgba(240, 240, 240, 0.9)',
    padding: 10,
    borderRadius: 8,
    marginVertical: 6,
  },
  menuName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  menuCourse: {
    fontStyle: "italic",
  },
  menuPrice: {
    color: "#2e8b57",
    fontWeight: "600",
  },
  countText: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#2e8b57",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  countContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'rgba(240, 240, 240, 0.9)',
    borderRadius: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
  },
  bottomButtonContainer: {
    padding: 20,
    paddingBottom: 30,
    backgroundColor: "#f2ede6",
    borderTopWidth: 1,
    borderTopColor: "d4cfc5",
  },
  backButton: {
    backgroundColor: "#3a2b1a",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
