import { 
    StyleSheet, 
    Text, 
    TouchableOpacity,
    SafeAreaView, 
    StatusBar, 
    View, 
    KeyboardAvoidingView, 
    Platform, 
    ScrollView, 
    TextInput, 
    Keyboard, 
    TouchableWithoutFeedback 
} from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { Avatar } from 'react-native-elements';
import { auth, db } from '../firebase';
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import firebase from 'firebase/compat';

const Chat = ({ navigation, route }) => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useLayoutEffect(() => {
        const unsubscribe = db
            .collection("chats")
            .doc(route.params.id)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => 
                setMessages(
                snapshot.docs.map(doc =>({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );

        return unsubscribe;
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Discussion",
            headerStyle: { backgroundColor: "#9932CC" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "black",
            headerTitleAlign: "left",

            headerTitle: () => (
                <View 
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }} 
                >
                    <Avatar 
                        rounded
                        source={{ 
                            uri: messages[(messages).length - 1]?.data.photoURL || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
                        }}
                    />
                    <Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }}>{route.params.chatName}</Text>    
                </View>
            ),

            headerLeft: () => (
                <TouchableOpacity 
                    style={{ marginLeft: 10 }}
                    onPress={navigation.goBack}
                >
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
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
                        <Entypo name="video-camera" size={24} color="white"  />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="call" size={24} color='white' />
                    </TouchableOpacity>
                </View>
                ),
        });
    }, [navigation, messages]); 

    const sendMessage = () => {
        Keyboard.dismiss();

        db.collection('chats').doc(route.params.id).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL
        })
        setInput("")

    };
    
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style='light' />  
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding": "height"}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
                <ScrollView contentContainerStyle={{ paddingTop: 15 }}>
                    {messages.map(({id, data}) => (
                        data.email === auth.currentUser.email ? (
                            <View key={id} style={styles.reciever}>
                                <Avatar 
                                    // WEB
                                    containerStyle={{
                                        position:"absolute",
                                        bottom: -15,
                                        right: -5,
                                    }}
                                    position="absolute"
                                    bottom={-15}
                                    right={-5}
                                    rounded
                                    size={30}
                                    source={{
                                        uri: data.photoURL,
                                    }}
                                />
                                <Text style={styles.recieverText}>{data.message}</Text>
                            </View>
                        ): (
                            <View key={id} style={styles.sender}>
                                <Avatar 
                                     // WEB
                                    containerStyle={{
                                        position:"absolute",
                                        bottom: -15,
                                        left: -5,
                                    }}
                                    position="absolute"
                                    bottom={-15}
                                    left={-5}
                                    rounded
                                    size={30}
                                    source={{
                                        uri: data.photoURL,
                                    }}
                                />
                                <Text style={styles.senderText}>{data.message}</Text>
                                <Text style={styles.senderName}>{data.displayName}</Text>
                            </View>
                        )
                    )   )} 
                </ScrollView>
                <View style={styles.footer}>
                <   TouchableOpacity>
                        <Entypo name="emoji-happy" size={24} color="#9932CC" />
                    </TouchableOpacity>
                    <TextInput
                        value={input}
                        onChangeText={(text) => setInput(text)}
                        onSubmitEditing={sendMessage}
                        placeholder="Type a Message"
                        style={styles.TextInput} 
                    />
                    <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                        <Ionicons name="send" size={24} color='#9932CC' />
                    </TouchableOpacity>
                </View>
            </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    TextInput: {
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        marginLeft: 15,
        backgroundColor: "#ececec",
        padding: 10,
        color: "black",
        borderRadius: 30,
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 15,
        justifyContent: "space-between",
    },
    reciever: {
        padding: 15,
        backgroundColor: "#ececec",
        alignSelf: "flex-end",
        borderRadius: 20,
        marginRight: 15,
        marginBottom: 20,
        maxWidth: "80%",
        position: "relative",
    },
    recieverText:{
        color: "black",
        fontWeight: "500",
        marginRight: 10,
    },
    sender: {
        padding: 15,
        backgroundColor: "#9932CC",
        alignSelf: 'flex-start',
        borderRadius: 20,
        margin: 15,
        marginBottom: 20,
        maxWidth: "80%",
        position: "relative",
    },
    senderText:{
        color: "white",
        fontWeight: "500",
        marginLeft: 10,
    },
    senderName: {
        left: 10,
        paddingRight: 10,
        fontSize: 10,
        color: "white",
    }

})