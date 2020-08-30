import React from "react";
import { StyleSheet } from "react-native";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";

// Navigation setup
import "react-native-gesture-handler";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import screens
import StackNavigator from "./components/StackNavigator";
import DrawerComponent from "./components/DrawerComponent";
import Profile from "./screens/Profile";
import Favourites from "./screens/Favourites";
import Settings from "./screens/Settings";
import Support from "./screens/Support";

const Drawer = createDrawerNavigator();

const Navigation = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <NavigationContainer theme={theme === "light" ? DefaultTheme : DarkTheme}>
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
};

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
