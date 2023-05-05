import { Text, View, Pressable, TextInput, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { app, auth, googleProvider } from './landing';

export default class register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      password_confirm: '',
      first_name: '',
      last_name: '',
      age: '', 
    }

    this.onSignUp = this.onSignUp.bind(this)
  }

  onSignUp(){
    const { email, password, password_confirm, username, first_name, last_name, age } = this.state;
    createUserWithEmailAndPassword( auth, email, password)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  onGoogleSignUp(){
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
            placeholder='E-mail...'
            onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
            placeholder='Username...'
            onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
            placeholder='Password...'
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
        />
        <TextInput
            placeholder='Confirm Password...'
            secureTextEntry={true}
            onChangeText={(password_confirm) => this.setState({ password_confirm })}
        />
        <TextInput
            placeholder='Name...'
            onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
            placeholder='Lastname...'
            onChangeText={(lastname) => this.setState({ lastname })}
        />
        <Pressable
        style={styles.button}
        onPress={() => this.onSignUp()}>
        <Text style={styles.buttonText}>Create Account</Text>    
        </Pressable>
        <Pressable
        style={styles.button}
        onPress={() => this.onGoogleSignUp()}>
        <Text style={styles.buttonText}>Sign Up with Google</Text>    
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
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
        width: 180,
        opacity: 0.7,
        margin: 5
      },
      buttonText: {
        color: '#FFFFFF',
      }
  });