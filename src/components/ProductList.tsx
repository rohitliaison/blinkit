import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { products, Product } from "../data/products";

type Props = {
  onAddToCart: (product: Product) => void;
};

const ProductList: React.FC<Props> = ({ onAddToCart }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.product}>
          <Text>{item.name}</Text>
          <Text>${item.price.toFixed(2)}</Text>
          <Button title="Add to Cart" onPress={() => onAddToCart(item)} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  product: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default ProductList;
