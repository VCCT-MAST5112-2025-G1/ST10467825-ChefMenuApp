import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { MenuItem } from "../types";
import { Button } from "react-native-paper";

type MenuListProps = {
  items: MenuItem[];
  removeItem: (id: number) => void;
};

export default function MenuList({ items, removeItem }: MenuListProps) {
  if (items.length === 0) {
    return <Text>No menu items added yet. Add some above!</Text>;
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.menuItem}>
          <Text style={styles.menuName}>{item.name}</Text>
          <Text>{item.description}</Text>
          <Text style={styles.menuCourse}>{item.course}</Text>
          <Text style={styles.menuPrice}>R {item.price.toFixed(2)}</Text>
          <Button
            title="Remove"
            onPress={() => removeItem(item.id)}
            color="#ff4d4d"
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
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
});
