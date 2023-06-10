import { View, Pressable, StyleSheet, Text } from "react-native";
import { Link, Stack } from "expo-router";
import { auth } from "./landing"
import {signOut } from "firebase/auth";

//Sign Out BTN Function
function onSignOut() {
  signOut(auth)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{  }} />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Link href="/details">Settings</Link>
      <Pressable
        style={styles.button}
        onPress={() => {
          onSignOut();
        }}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </Pressable>
    </View>
  );
}

// Styling
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#0a0a0a',
    height: 60,
    width: 160,
    opacity: 0.7,
    margin: 5
  },
  buttonText: {
    color: '#FFFFFF',
  }
});