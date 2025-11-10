import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import { MenuItem } from "../types";
import MenuList from "../components/MenuList";
import { MenuContext } from "../MenuContent";

export default function HomeScreen() {
  //menuItems fetched from context
  const { menuItems, setMenuItems } = useContext(MenuContext);

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
      // Display total price
      <Text style={styles.countText}>
        Total Price: R {totalPrice.toFixed(2)}
      </Text>
      {/* Menu Items List */}
      {/* Menu Items List */}
      <Text style={styles.sectionTitle}>Current Menu</Text>
      <MenuList items={menuItems} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
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
    backgroundColor: "#f8f8f8",
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
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
  },
});
