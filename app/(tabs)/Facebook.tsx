import { StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function index() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  return (
    <View style={styles.Container}>
      <View style={styles.box1}>
      <Text style={styles.title}>Facebook.com</Text>
      </View>
      <View style={styles.box2}>
      <Text style={styles.title}></Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name} 
        onChangeText={text => setName(text)} 
      />
      </View>
      <View style={styles.box3}>
      <Text style={styles.title}></Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}   
      />
      </View>
      <View style={styles.box4}>
      <Text style={styles.title}></Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password} 
        onChangeText={text => setPassword(text)}  
      />
      </View>
      <View style={styles.box5}>
      <Text style={styles.title}></Text>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      </View>
      <Text>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
  Container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  box1: {
    borderWidth:0,
    height: 60,
    borderColor:'black',
    backgroundColor: 'Blue',
  },
  
  title: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})