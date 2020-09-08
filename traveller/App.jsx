import React, { useEffect } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { Appearance, AppearanceProvider } from "react-native-appearance";
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
import HomeStackNavigator from "./components/HomeStackNavigator";
import ProfileStackNavigator from "./components/ProfleStackNavigator";
import DrawerComponent from "./components/DrawerComponent";
import Favourites from "./screens/Favourites";
import Settings from "./screens/Settings";
import Support from "./screens/Support";
import { toggleTheme } from "./actions/themeActions";

const Drawer = createDrawerNavigator();

const Navigation = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  // load OS theme preference
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      dispatch(toggleTheme(colorScheme));
    });
    return () => subscription.remove();
  }, []);

  return (
    <NavigationContainer theme={theme === "light" ? DefaultTheme : DarkTheme}>
      <Drawer.Navigator
        initialRouteName="Home"
        edgeWidth={80}
        drawerStyle={{
          width: "80%",
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
        drawerContent={(props) => <DrawerComponent {...props} />}
      >
        <Drawer.Screen name="HomeStack" component={HomeStackNavigator} />
        <Drawer.Screen name="ProfileStack" component={ProfileStackNavigator} />
        <Drawer.Screen name="Favourites" component={Favourites} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Support" component={Support} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <AppearanceProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </AppearanceProvider>
  );
};

export default App;
