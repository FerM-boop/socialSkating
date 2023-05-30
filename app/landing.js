import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'


import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

// Importing environmental variables
import { FIREBASE_APIKEY, FIREBASE_AUTHDOMAIN, FIREBASE_PROJECTID, FIREBASE_STORAGEBUCKET, FIREBASE_MESSAGINGSENDERID, FIREBASE_APPID, FIREBASE_MEASUREMENTID  } from '@env'


// Initialize Firebase
const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  projectId: FIREBASE_PROJECTID,
  storageBucket: FIREBASE_STORAGEBUCKET,
  messagingSenderId: FIREBASE_MESSAGINGSENDERID,
  appId: FIREBASE_APPID,
  measurementId: FIREBASE_MEASUREMENTID
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


export default function Landing() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setLoggedIn(false);
        setLoaded(true);
      } else {
        setLoggedIn(true);
        setLoaded(true);
      }
    });
  }, []);

  function onSignOut() {
    signOut(auth)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (!loaded) {
    return (
      <View>
        <Text style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>Loading...</Text>
      </View>
    );
  }

  if (!loggedIn) {
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            router.push('/auth/signUp');
          }}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            router.push('/auth/signIn');
          }}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
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
    width: 160,
    opacity: 0.7,
    margin: 5
  },
  buttonText: {
    color: '#FFFFFF',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});