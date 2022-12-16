import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Image, Button, Input } from 'react-native-elements'; 
import { auth } from '../firebase';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
    
  }, []);

  function signIn() {
    auth
    .signInWithEmailAndPassword(email, password)
    .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />
      <Image
        source={
          {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6XJONfJud7_7E214FbaOAGPv--vjYl-5tJkIkIMntfJliGfZ'}
        }
        style={{ width:200, height:200, borderRadius: 30 }} 
      />
      <View style={{ height: 20 }} />
      <View style={styles.inputContainer}>
        <Input
          placeholder='Type your Email'
          autoFocus
          type='email'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder='Type your Password'
          secureTextEntry
          type='password'
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button 
        containerStyle={styles.button} 
        type= "outline" 
        onPress={signIn} 
        title="SIGN IN" 
        titleStyle={{color: "white"}}
        />
      <Button 
        onPress={ () => navigation.navigate("Register") }
        containerStyle={{backgroundColor: "white", width: 200}} 
        type="outline" 
        title="REGISTER" 
        titleStyle={{color: "#4B0082"}}
        /> 
      <View style={{ height: 30 }} />
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },

  inputContainer: {
    width: 300,
  },

  button: {
    width: 200,
    marginTop: 10,
    backgroundColor: "#4B0082"
  }
})