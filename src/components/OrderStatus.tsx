import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  status: string;
};

const OrderStatus: React.FC<Props> = ({ status }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.status}>Order Status: {status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
  },
  status: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OrderStatus;
