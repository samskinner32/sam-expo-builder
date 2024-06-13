import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import {
  Content,
  fetchOneEntry,
  type BuilderContent,
} from "@builder.io/sdk-react-native";
import { Link, router } from "expo-router";

const BUILDER_API_KEY = "<key>";
const MODEL_NAME = "page";

const Shop = () => {
  const [content, setContent] = React.useState<BuilderContent | null>(null);

  React.useEffect(() => {
    fetchOneEntry({
      model: MODEL_NAME,
      apiKey: BUILDER_API_KEY,
      userAttributes: {
        urlPath: "/",
      },
    })
      .then((data) => {
        setContent(data);
      })
      .catch((err) => console.error("Error fetching Builder Content: ", err));
  }, []);

  const onPress = () => {
    router.navigate("/(shop)/category");
  };

  return (
    <View>
      <Text>Shop</Text>
      <Link href="/(shop)/category">Category</Link>
      <TouchableOpacity onPress={onPress}>
        <Text>Link to category</Text>
      </TouchableOpacity>
      {content ? (
        <Content
          apiKey={BUILDER_API_KEY}
          model={MODEL_NAME}
          content={content}
        />
      ) : (
        <Text>Not Found.</Text>
      )}
    </View>
  );
};

export default Shop;
