// src/screens/ChefScreen.tsx
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MenuContext } from "../MenuContent";
import { MenuItem, Course } from "../types";

export default function ChefScreen() {
  const { menuItems, setMenuItems } = useContext(MenuContext);

  //controlled input states for the form
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");
  const [price, setPrice] = useState("");

  //function to add a new menu item
  const handleAddItem = () => {
    //validation check
    if (!name || !description || !course || !price) {
      alert("Please fill in all fields before adding an item");
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

    //clear form
    setName("");
    setDescription("");
    setCourse("");
    setPrice("");
  };

  return (
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
          {/*picker-dropdown for course selection */}
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
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#2e8b57",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
});
