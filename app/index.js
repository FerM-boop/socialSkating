import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Button } from "react-native";

const gifSource = require('../assets/skate_gif.gif')

export default function Page() {
  return (
    <ImageBackground source={gifSource} resizeMode="cover" style={styles.image}>
      <View style={styles.container}> 
        <View style={styles.main}>
          <Text style={styles.title}>Social Skating</Text>
          <Text style={styles.subtitle}>A social media by skaters for skaters.</Text>
          <Link href='/auth/landing'>
            <Button
              title='Test'
            />
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 'auto',
    width: 'auto',
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
