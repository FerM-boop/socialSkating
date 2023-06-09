import { Text, View, Pressable, TextInput, StyleSheet } from 'react-native'
import React, { Component } from 'react'

import 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../landing';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }

    this.onSignIn = this.onSignIn.bind(this)
  }

  onSignIn(){
    const { email, password} = this.state;
    signInWithEmailAndPassword( auth, email, password)
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
            placeholder='Password...'
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
        />
        <Pressable
        style={styles.button}
        onPress={() => {
          this.onSignIn()
        }
        }>
        <Text style={styles.buttonText}>Sign In</Text>    
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