import "react-native-gesture-handler";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import AddChats from "./screens/AddChats";
import Chat from "./screens/Chat";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#4B0082" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={globalScreenOptions}>
        <Stack.Screen options={{ title: "Welcome to ChatMe" }} name="Login" component={Login} />
        <Stack.Screen options={{ title: "Register page" }} name="Register" component={Register} />
        <Stack.Screen options={{ title: "Chats" }} name="Home" component={Home} />
        <Stack.Screen options={{ title: "Add Chats" }} name="AddChat" component={AddChats} />
        <Stack.Screen options={{ title: "Discussion" }} name="Chats" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
