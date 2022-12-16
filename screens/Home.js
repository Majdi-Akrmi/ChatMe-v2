import { StyleSheet, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import CustomerListItem from '../components/CustomerListItem';
import { Avatar } from 'react-native-elements';
import { auth, db } from '../firebase';
import { AntDesign , SimpleLineIcons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
    const [chats, setChats] = useState([]);

    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        });
    };

    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot(snapshot =>{
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
        return unsubscribe;
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "ChatMe",
            headerStyle: { backgroundColor: "#9932CC" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "black",

            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                        <Avatar 
                            rounded
                            source={{ uri: auth?.currentUser?.photoURL }}
                        />
                    </TouchableOpacity>
                </View>
            ),
            
            headerRight: () => (
                <View 
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: 80,
                        marginRight: 20,
                    }}
                >
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="camerao" size={24} color="white"  />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate("AddChat") }
                        activeOpacity={0.5}
                    >
                        <SimpleLineIcons name="pencil" size={24} color='white' />
                    </TouchableOpacity>
                </View>
                ),
        });
    }, [navigation]); 

    const enterChat = (id, chatName) => {
        navigation.navigate("Chats", {
            id,
            chatName,
        });
    };

  return (
    <SafeAreaView>
        <ScrollView>
            {chats.map(({id, data: {chatName}}) => (
                <CustomerListItem 
                    key={id} 
                    id={id} 
                    chatName={chatName}
                    enterChat={enterChat}
                />
            ))}         
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})