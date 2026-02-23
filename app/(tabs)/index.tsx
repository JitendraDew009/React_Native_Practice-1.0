import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import { Link, useNavigation, Tabs } from 'expo-router';

const SignUpScreen = () => {
const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    
     <Tabs>
     
     </Tabs>
    // Handle sign-up logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <View style={styles.logoRow}>
      <Image
      source={{ uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' }}
      style={{ width: 40, height: 40, marginRight: 8 }}
    />
      <Text style={{ fontSize: 20, fontWeight: '700', color: 'white' }}>React Native</Text>
      </View>
      <View style={styles.icon}>
      <Text style={{ fontSize: 30, fontWeight: '800', color: 'white', margin:10 }}>=</Text>
      </View>
      </View>

      
      <View style={styles.mainContainer}>

      <Image source={{uri: 'https://static.vecteezy.com/system/resources/previews/049/401/766/non_2x/react-icon-on-white-square-button-free-png.png'}}
       style={{width: 80, height: 80, alignSelf:"center"}} />

        <Text style={styles.title}>Create Your Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor='gray'
          value={name}
          onChangeText={setName}
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
        <Text style={{ fontSize: 16, fontWeight: '300', color: 'white', textAlign:'center' }}>Already have an account?</Text>
        
        <TouchableOpacity style={styles.login} onPress={() =>navigation.navigate('Loginpage')}>
            <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
               
      </View>
      <View >
    
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
    backgroundColor: 'white',
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
  title:{
    fontSize: 38,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
    color:'white'
  },
  logo: {
    marginVertical:18,
    margin: 20,
    
    // justifyContent:"space-between",
  },
  icon: {
    justifyContent:'space-around',
    marginRight:10,
    marginTop:10,
  },
  link:{
    color: 'white',
    fontSize:'15',
    fontWeight:'400'
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
    fontWeight: 'condensedBold',
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

export default SignUpScreen;
