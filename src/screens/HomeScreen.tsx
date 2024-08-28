import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import ProductList from "../components/ProductList";
import { Product } from "../data/products";
import { RootStackParamList } from "../AppNavigator";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handlePlaceOrder = () => {
    navigation.navigate("Order", { cart });
  };

  return (
    <View style={styles.container}>
      <ProductList onAddToCart={handleAddToCart} />
      <Button title="Place Order" onPress={handlePlaceOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
