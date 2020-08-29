import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const image = {
  uri:
    "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

const PostDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <Text style={styles.tagline}>Discover Switzerland</Text>
        <Text style={styles.placeName}>
          Explore the scenic beauty of Switzerland
        </Text>

        <TouchableOpacity style={styles.backIcon}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.favouriteIcon}>
          <Feather name="heart" size={22} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    height: 380,
    justifyContent: "flex-end",
  },
  tagline: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 14,
    marginVertical: 6,
  },
  placeName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 14,
    marginBottom: 30,
  },
  backIcon: {
    position: "absolute",
    left: 20,
    top: 40,
    backgroundColor: "#ff6200",
    padding: 10,
    borderRadius: 40,
  },
  favouriteIcon: {
    position: "absolute",
    right: 20,
    top: 40,
    backgroundColor: "#ff6200",
    padding: 10,
    borderRadius: 40,
  },
});

export default PostDetails;
