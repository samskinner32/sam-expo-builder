import { View, Text } from "react-native";
import React from "react";

import { Link } from "expo-router";

const Account = () => {
  return (
    <View>
      <Text>Account</Text>
      <Link href="./settings">Settings</Link>
      <Link href="./profile">Profile</Link>
      <Link href="./product">Product</Link>
    </View>
  );
};

export default Account;
