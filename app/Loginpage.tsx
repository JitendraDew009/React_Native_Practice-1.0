import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, ToastAndroid } from 'react-native';
import { Link, useNavigation, Navigator } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
  console.log('error message')
  // alert('Error', 'All fields are required');
    if (!email || !password) {
    alert('All fields are required', );
    ToastAndroid.show('All fields are required', ToastAndroid.SHORT)
    // return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Please enter a valid email', );
    // return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters');
    // return;
  }

  // Simulated credential check
  const validEmail = 'test@gmail.com';
  const validPassword = 'pswd123';

  if (email === validEmail && password === validPassword) {
    alert('Login Successful', `Welcome ${email}`);
  } else {
    alert('Login Failed', 'Invalid email or password');
  }
};


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logoRow}>
          <Image
            source={{ uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' }}
            style={{ width: 40, height: 40, marginRight: 8 }}
          />
          <Text style={{ fontSize: 30, fontWeight: '700', color: 'white' }}>React Native</Text>
        </View>
        <View style={styles.icon}>
          <Text style={{ fontSize: 40, fontWeight: '800', color: 'white', margin:10 }}>=</Text>
        </View>
      </View>
      
      <Text style={styles.title}>Sign in</Text>

     <TextInput
            //    style={styles.input}
            //    placeholder="Your Name"
            //    placeholderTextColor='gray'
            //    value={email}
            //    onChangeText={setName}
             />
     
             <TextInput
               style={styles.input}
               placeholder="Enter your email"
               placeholderTextColor='gray'
               value={email}
               onChangeText={setEmail}
             />
             
             <TextInput
               style={styles.input}
               placeholder="Enter your password"
               placeholderTextColor='gray'
               secureTextEntry
               value={password}
               onChangeText={setPassword}
             />
            <Text style={{ fontSize: 16, fontWeight: '300', color: 'white', textAlign:'center' }}>Create an account</Text>
                    
            <TouchableOpacity style={styles.login} onPress={() =>navigation.navigate('index')}>
              <Text style={styles.loginText}>Here</Text>
            </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20232A',
  },
  headerContainer: {
    height: '18%',
    width: '100%',
    backgroundColor: '#121212',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#20232A',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 15,
  },
  title: {
    fontSize: 38,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
    color: 'white',
  },
  icon: {
    justifyContent: 'space-around',
    marginRight: 10,
    marginTop: 10,
  },
  link: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 8,
    paddingHorizontal: 16,
    color: 'white',
  },
  button: {
    backgroundColor: '#04D9FF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  login: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: '#1e90ff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
