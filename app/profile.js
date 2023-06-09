import { View, Image } from "react-native";
import { Link, Stack } from "expo-router";
import { auth } from './landing';


export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen options={{ title:auth.currentUser.displayName }} />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Link href="/details">{auth.currentUser.displayName}'s profile </Link>
      <Image source={require('../assets/skate_gif.gif')}/>
    </View>
  );
}