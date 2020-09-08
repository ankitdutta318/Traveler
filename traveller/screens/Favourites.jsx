import React from "react";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Favourites = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.background,
      }}
    >
      <Text
        style={{
          color: colors.text,
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        This is Favourites Page
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

export default Favourites;
