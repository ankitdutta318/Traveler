import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        This is Profile Page
      </Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.goBackBtn}
      >
        <Text style={styles.goBackText}> Go Back </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  goBackBtn: {
    margin: 20,
    backgroundColor: "#ff6200",
    padding: 16,
    borderRadius: 40,
    elevation: 5,
  },
  goBackText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default Profile;
