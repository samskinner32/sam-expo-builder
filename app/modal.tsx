import { View, Text } from "react-native";
import React from "react";

import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Modal = () => {
  return (
    <View>
      <Text>Modal</Text>
      <Link href="../">Dismiss</Link>
      <StatusBar style="light" />
    </View>
  );
};

export default Modal;
