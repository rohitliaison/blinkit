import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import OrderStatus from "../components/OrderStatus";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../AppNavigator";

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;

type Props = {
  route: OrderScreenRouteProp;
};

const OrderScreen: React.FC<Props> = ({ route }) => {
  const { cart } = route.params;
  const [status, setStatus] = useState<string>("Preparing");
  const [deliveryLocation, setDeliveryLocation] = useState({
    latitude: 28.7041,
    longitude: 77.1025,
  });

  useEffect(() => {
    setTimeout(() => {
      setStatus("Out for Delivery");
      setDeliveryLocation({
        latitude: 28.7041,
        longitude: 77.2025,
      });
    }, 5000);

    setTimeout(() => {
      setStatus("Delivered");
    }, 10000);
  }, []);

  return (
    <View style={styles.container}>
      <OrderStatus status={status} />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 28.7041,
          longitude: 77.1025,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={deliveryLocation}
          title="Delivery Location"
          description="Your order is here"
        />
        <Polyline
          coordinates={[
            { latitude: 28.7041, longitude: 77.1025 },
            {
              latitude: deliveryLocation.latitude,
              longitude: deliveryLocation.longitude,
            },
          ]}
          strokeColor="#000"
          strokeWidth={3}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default OrderScreen;
