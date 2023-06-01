import { View } from "react-native";
import { Link, Stack } from "expo-router";

export default function Chats() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ }} />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Link href="/details">DM's</Link>
    </View>
  );
}