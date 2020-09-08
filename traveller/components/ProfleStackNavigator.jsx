import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

// import screens
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import Notifications from "../screens/Notifications";

const Stack = createStackNavigator();

const ProfileStackNavigator = ({ navigation, route }) => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      headerMode="float"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: route.params.name,
          headerLeft: () => (
            <Feather
              onPress={() => navigation.toggleDrawer()}
              name="menu"
              size={22}
              color={colors.text}
              style={{ paddingLeft: 20 }}
            />
          ),
          headerRight: () => (
            <Feather
              onPress={() => navigation.navigate("Notifications")}
              name="bell"
              size={22}
              color={colors.text}
              style={{ paddingRight: 20 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: "Edit Profile",
          headerRight: () => (
            <Feather
              onPress={() => navigation.navigate("Profile")}
              name="check"
              size={22}
              color={colors.text}
              style={{ paddingRight: 20 }}
            />
          ),
        }}
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

const styles = StyleSheet.create({});

export default ProfileStackNavigator;
