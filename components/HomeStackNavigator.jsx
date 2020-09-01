import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import screens
import Home from "../screens/Home";
import PostDetails from "../screens/PostDetails";
import Notifications from "../screens/Notifications";

const Stack = createStackNavigator();

const HomeStackNavigator = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="float"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetails}
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: "My Notifications",
          headerRight: () => (
            <TouchableOpacity>
              <Text
                style={{
                  paddingRight: 20,
                  fontWeight: "bold",
                  color: colors.primary,
                }}
              >
                Mark all as read
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
