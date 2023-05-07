import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

const gifSource = require('../assets/skate_gif.gif')

export default function Page() {
  const router = useRouter();
  return (
    <ImageBackground source={gifSource} resizeMode="cover" style={styles.image}>
      <View style={styles.container}> 
        <View style={styles.main}>
          <Text style={styles.title}>Social Skating</Text>
          <Text style={styles.subtitle}>A social media by skaters for skaters.</Text>
          <Pressable
            style={styles.button}
            onPress={() => {
              router.push('/landing');
            }}>
            <Text style={styles.buttonText}>➜</Text>
            
          </Pressable>
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#0a0a0a',
    height: 60,
    width: 100,
    opacity: 0.7,
    margin: 5
  },
  buttonText: {
    color: '#FFFFFF',
  }
});
