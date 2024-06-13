import { View, Text } from "react-native";
import React from "react";

import { Link } from "expo-router";

const Category = () => {
  return (
    <View>
      <Text>Category</Text>
      <Link href="./product">Product</Link>
    </View>
  );
};

export default Category;
