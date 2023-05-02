import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Button } from "react-native-web";

export default function Page() {
  return (
    <View style={styles.container}>
      <ImageBackground source="../assets/skate_gif.gif" resizeMode="cover" style={styles.image}>
        <View style={styles.main}>
          <Text style={styles.title}>Social Skating</Text>
          <Text style={styles.subtitle}>A social media by skaters for skaters.</Text>
          <Link href="/auth/landing">
            <Button
              title="Get started"
            />
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
