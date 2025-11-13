import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MenuContext } from "../MenuContent";
import { MenuItem, Course } from "../types";
import MenuList from "../components/MenuList";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChefScreen({ navigation }: any) {
  const { menuItems, setMenuItems } = useContext(MenuContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");
  const [price, setPrice] = useState("");

  const handleRemoveItem = (id: number) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddItem = () => {
    if (!name || !description || !course || !price) {
      alert("Please fill in all fields before adding an item");
      return;
    }

    const formattedCourse = course.trim().toLowerCase();
    if (!["starter", "main", "dessert"].includes(formattedCourse)) {
      alert("Course must be Starter, Main, or Dessert");
      return;
    }

    const newItem: MenuItem = {
      id: Date.now(),
      name,
      description,
      course: course as Course,
      price: parseFloat(price),
    };

    setMenuItems((prev) => [...prev, newItem]);
    setName("");
    setDescription("");
    setCourse("");
    setPrice("");
  };

  return (
    // wrapping everything in SafeAreaView
    <SafeAreaView style={styles.container} edges={['top']}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <>
            {/* forcing screen title to the top*/}
            <Text style={styles.screenTitle}>Chef Menu Management</Text>

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
              <Picker selectedValue={course} onValueChange={(value) => setCourse(value)}>
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
            <Text style={styles.sectionTitle}>Current Menu</Text>
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.menuItemContainer}>
            <Text style={styles.menuItemName}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>R {item.price.toFixed(2)}</Text>
            <Button title="Remove" onPress={() => handleRemoveItem(item.id)} />
          </View>
        )}
        ListFooterComponent={
          <>
            <Text style={styles.totalText}>
              Total: R {menuItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
            </Text>
            <View style={styles.listBottomPadding} />
          </>
        }
        contentContainerStyle={styles.formContainer}
      />
      {/* BACK TO HOME BTN*/}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backButtonText}>← Back to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: 'rgba(242, 237, 230, 0.85)',
  },
  screenTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 10,
    textAlign: "center",
    color: "#3a2b1a",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 10,
    marginTop: 20,
    color: "#3a2b1a",
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
  menuItemContainer: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  menuItemName: {
    fontWeight: "bold",
  },
  totalText: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  listBottomPadding: {
    height: 20,
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
