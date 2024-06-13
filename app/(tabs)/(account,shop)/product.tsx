import { View, Text } from "react-native";
import React from "react";

import { Link } from "expo-router";

const Product = () => {
  return (
    <View>
      <Text>Product</Text>
      <Link href="./product" push>
        PUSH Product
      </Link>
    </View>
  );
};

export default Product;
