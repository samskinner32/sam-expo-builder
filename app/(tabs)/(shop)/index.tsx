import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { Link, router } from "expo-router";

const Shop = () => {
  const onPress = () => {
    router.navigate("/(shop)/category");
  };

  return (
    <View>
      <Text>Shop</Text>
      <Link href="./category">Relative Category</Link>
      <Link href="/(shop)/category">Absolute Category</Link>
      <TouchableOpacity onPress={onPress}>
        <Text>Link to category</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Shop;
