import { Stack } from "expo-router";

export default function AccountLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: true, title: "My Account" }}
      />
      <Stack.Screen
        name="settings"
        options={{ headerShown: true, title: "Settings" }}
      />
      <Stack.Screen
        name="profile"
        options={{ headerShown: true, title: "Profile" }}
      />
    </Stack>
  );
}
