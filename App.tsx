import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MenuItem, Course } from "./types";

export default function App() {
  //State: array of menu items (empty at start)
  //state for all menu items
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  //controlled input states for the form
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");
  const [price, setPrice] = useState("");

  //function to add a new menu item
  const handleAddItem = () => {
    //validation check
    if (!name || !description || !course || !price) {
      alert!("Please fill in all fields before adding an item");
      return;
    }

    //error handling for course input so that category count is valid
    const formattedCourse = course.trim().toLowerCase();

    if (!["starter", "main", "dessert"].includes(formattedCourse)) {
      alert("Course must be Starter, Main, or Dessert");
      return;
    }

    //create new menu item object
    const newItem: MenuItem = {
      id: menuItems.length + 1, //simple id generation
      name,
      description,
      course: course as Course,
      price: parseFloat(price),
    };

    setMenuItems((prev) => [...prev, newItem]);

    //add item to the list
    setMenuItems([...menuItems, newItem]);

    //clear form
    setName("");
    setDescription("");
    setCourse("");
    setPrice("");
  };

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
      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Add a New Menu Item</Text>

        <TextInput
          style={styles.input}
          placeholder="Dish Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={course}
            onValueChange={(value) => setCourse(value)}
          >
            {" "}
            //picker-dropdown for course selection
            <Picker.Item label="Select Course" value="" />
            <Picker.Item label="Starter" value="starter" />
            <Picker.Item label="Main" value="main" />
            <Picker.Item label="Dessert" value="dessert" />
          </Picker>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Price"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        <Button title="Add Menu Item" onPress={handleAddItem} />
      </View>
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
      <Text style={styles.sectionTitle}>Current Menu</Text>
      {menuItems.length == 0 ? (
        <Text>No menu items added yet. Add some above!</Text>
      ) : (
        //list of menu items
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.menuItem}>
              <Text style={styles.menuName}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text style={styles.menuCourse}>{item.course}</Text>
              <Text style={styles.menuPrice}>R {item.price.toFixed(2)}</Text>
            </View>
          )}
        />
      )}
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
