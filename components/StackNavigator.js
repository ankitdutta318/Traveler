import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import screens
import Home from "../screens/Home";
import PostDetails from "../screens/PostDetails";
import Notifications from "../screens/Notifications";

const Stack = createStackNavigator();

const StackNavigator = ({ navigation }) => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="PostDetails" component={PostDetails} />
    <Stack.Screen name="Notifications" component={Notifications} />
  </Stack.Navigator>
);

export default StackNavigator;
