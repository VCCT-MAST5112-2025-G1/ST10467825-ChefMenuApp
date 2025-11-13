import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { MenuContext } from "../MenuContent";
import MenuList from "../components/MenuList";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GuestScreen({ navigation }: any) {
  const { menuItems } = useContext(MenuContext);
  const [selectedCourse, setSelectedCourse] = useState("all");

  const filteredItems = selectedCourse === "all"
    ? menuItems
    : menuItems.filter(
      (item) => item.course.toLowerCase() === selectedCourse.toLowerCase()
    );


  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.container}>
        <Text style={styles.title}>Guest Menu View</Text>

        <View style={styles.pickerContainer}>
          <Picker selectedValue={selectedCourse} onValueChange={(value) => setSelectedCourse(value)}>
            <Picker.Item label="Show All Courses" value="all" />
            <Picker.Item label="Starters" value="starter" />
            <Picker.Item label="Mains" value="main" />
            <Picker.Item label="Desserts" value="dessert" />
          </Picker>
        </View>

        <MenuList items={filteredItems} removeItem={() => { }} />
      </View>
      {/* BACK TO HOME BTN*/}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backButtonText}>← Back to Home</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
    backgroundColor: 'rgba(242, 237, 230, 0.85)',
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#3a2b1a"
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#fff",
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
})