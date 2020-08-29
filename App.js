import { StyleSheet, View } from "react-native";

// Navigation setup
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import screens
import StackNavigator from "./components/StackNavigator";
import DrawerComponent from "./components/DrawerComponent";
import Profile from "./screens/Profile";
import Favourites from "./screens/Favourites";
import Settings from "./screens/Settings";
import Support from "./screens/Support";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        edgeWidth={80}
        drawerStyle={{
          elevation: 150,
          width: 300,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
        drawerContent={(props) => <DrawerComponent {...props} />}
      >
        <Drawer.Screen name="Home" component={StackNavigator} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Favourites" component={Favourites} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Support" component={Support} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
