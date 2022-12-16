import { StyleSheet, Text, View, KeyboardAvoidingView, } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Input, Image, Button  } from 'react-native-elements'
import { useLayoutEffect } from 'react'
import { auth } from '../firebase'

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImageURL] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Login",
    });
  }, [navigation]);

  const signUp = () =>{

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL: image || 
          "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
        });
      })
      .catch((error) => alert(error.message));

  };

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light'/>

      <Image
        source={
         {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6XJONfJud7_7E214FbaOAGPv--vjYl-5tJkIkIMntfJliGfZ'}
        }
        style={{ width:150, height:150, borderRadius: 30 }} 
      />
      <View style={{ height: 20 }} />
      <View style={styles.inputContainer}>
        <Input
          placeholder='Put you full Name'
          autoFocus
          type='text' 
          value={name}
          onChangeText={text => setName(text)}
        />
        <Input
          placeholder='Put your Email'
          type='email' 
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder='Put your password'
          secureTextEntry
          type='password' 
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Input
          placeholder='Put your Profile photo'
          type='file' 
          value={image}
          onChangeText={text => setImageURL(text)}
          onSubmitEditing={signUp}
        />
      </View>
      <Button 
        containerStyle={styles.button} 
        type= "outline" 
        onPress={signUp} 
        title="SIGN UP" 
        titleStyle={{color: "white"}}
      />
    </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: -50,
    backgroundColor: "white",
  },

  inputContainer: {
    width: 300,
  },

  button: {
    width: 200,
    marginBottom: 10,
    backgroundColor: "#4B0082"
  }

})