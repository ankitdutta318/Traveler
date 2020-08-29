import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableWithoutFeedback,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

const avatar = {
  uri: "https://api.adorable.io/avatars/60/abott@adorable.png",
};

const DrawerComponent = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // toggle theme function
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          {/* User info section */}
          <View style={styles.userInfoSection}>
            {/* Avatar and Username section */}
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Image source={avatar} style={styles.avatar} />
              <View
                style={{
                  flexDirection: "column",
                  marginLeft: 15,
                  marginTop: 5,
                }}
              >
                <Text style={styles.title}>Ankit Dutta</Text>
                <Text style={styles.secondaryText}>@ankitdutta318</Text>
              </View>
            </View>

            {/* Followers, Following and Favourites section */}
            <View style={styles.row}>
              <View style={styles.section}>
                <Text style={[styles.secondaryText, styles.paragraph]}>
                  125
                </Text>
                <Text style={styles.secondaryText}>Followers</Text>
              </View>
              <View style={styles.section}>
                <Text style={[styles.secondaryText, styles.paragraph]}>77</Text>
                <Text style={styles.secondaryText}>Following</Text>
              </View>
              <View style={styles.section}>
                <Text style={[styles.secondaryText, styles.paragraph]}>43</Text>
                <Text style={styles.secondaryText}>Favourites</Text>
              </View>
            </View>
          </View>

          {/* Drawer navigation section */}
          <View style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              labelStyle={{ fontSize: 16 }}
              icon={() => <Feather name="home" size={16} color="#666" />}
              onPress={() => props.navigation.navigate("Home")}
            />
            <DrawerItem
              label="Profile"
              labelStyle={{ fontSize: 16 }}
              icon={() => <Feather name="user" size={16} color="#666" />}
              onPress={() => props.navigation.navigate("Profile")}
            />
            <DrawerItem
              label="Favourites"
              labelStyle={{ fontSize: 16 }}
              icon={() => <Feather name="heart" size={16} color="#666" />}
              onPress={() => props.navigation.navigate("Favourites")}
            />
            <DrawerItem
              label="Settings"
              labelStyle={{ fontSize: 16 }}
              icon={() => <Feather name="settings" size={16} color="#666" />}
              onPress={() => props.navigation.navigate("Settings")}
            />
            <DrawerItem
              label="Support"
              labelStyle={{ fontSize: 16 }}
              icon={() => <Feather name="help-circle" size={16} color="#666" />}
              onPress={() => props.navigation.navigate("Support")}
            />
          </View>

          {/* Preferences section */}
          <View
            style={{
              padding: 20,
              borderBottomColor: "#f4f4f4",
              borderBottomWidth: 1,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#666" }}>
              Preferences
            </Text>
            <TouchableWithoutFeedback onPress={toggleTheme}>
              <View style={styles.preference}>
                <Text style={{ fontSize: 16, color: "#666" }}>Dark Theme</Text>
                <Switch
                  onValueChange={toggleTheme}
                  value={isDarkTheme}
                  trackColor={{ true: "#f4f3f4" }}
                  thumbColor={"#ffa32f"}
                  style
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Sign Out"
          labelStyle={{ fontSize: 16 }}
          icon={() => <Feather name="log-out" size={16} color="#666" />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingBottom: 20,
    borderBottomColor: "#f4f4f4",
    borderBottomWidth: 1,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderColor: "#ff6200",
    borderWidth: 1,
  },
  title: {
    fontSize: 22,
    marginTop: 3,
    fontWeight: "bold",
  },
  secondaryText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#666",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: "#f4f4f4",
    borderBottomWidth: 1,
  },
  drawerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerComponent;
