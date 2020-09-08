import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

const image = {
  uri:
    "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

const PostDetails = ({ navigation }) => {
  const { colors } = useTheme();
  const [gallery, setgallery] = useState([
    {
      image: {
        uri:
          "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      title: "Switzerland",
      key: "1",
    },
    {
      image: {
        uri:
          "https://travel.usnews.com/static-travel/images/destinations/331/edited_south_island_nz_getty_irma_ferreira_445x280.jpg",
      },
      title: "New Zeland",
      key: "2",
    },
    {
      image: {
        uri:
          "https://travel.usnews.com/static-travel/images/destinations/108/main_image_cropped_rome_445x280.jpg",
      },
      title: "Rome",
      key: "3",
    },
    {
      image: {
        uri:
          "https://travel.usnews.com/static-travel/images/destinations/288/tahiti_main_getty_samantha_t_photography_edited_445x280.jpg",
      },
      title: "Tahiti",
      key: "4",
    },
  ]);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ ...styles.container, backgroundColor: colors.card }}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <Text style={styles.tagline}>Discover Switzerland</Text>
        <Text style={styles.placeName}>
          Explore the scenic beauty of Switzerland
        </Text>

        <TouchableOpacity
          onPress={goBack}
          style={{ ...styles.backIcon, backgroundColor: colors.primary }}
        >
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.favouriteIcon, backgroundColor: colors.primary }}
        >
          <Feather name="heart" size={22} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>

      <TouchableOpacity
        style={{ ...styles.bookTicketBtn, backgroundColor: colors.primary }}
      >
        <Text style={styles.bookTicketText}>Book Now</Text>
      </TouchableOpacity>

      <ScrollView style={{ backgroundColor: colors.card }}>
        <Text style={{ ...styles.header, color: colors.text }}>
          About the place
        </Text>
        <Text style={{ ...styles.description, color: colors.text }}>
          Switzerland is a mountainous Central European country, home to
          numerous lakes, villages and the high peaks of the Alps. Its cities
          contain medieval quarters, with landmarks like capital Bern’s
          Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country
          is also known for its ski resorts and hiking trails. Banking and
          finance are key industries, and Swiss watches and chocolate are world
          renowned.
        </Text>
        <Text style={{ ...styles.description, color: colors.text }}>
          Switzerland is a mountainous Central European country, home to
          numerous lakes, villages and the high peaks of the Alps. Its cities
          contain medieval quarters, with landmarks like capital Bern’s
          Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country
          is also known for its ski resorts and hiking trails. Banking and
          finance are key industries, and Swiss watches and chocolate are world
          renowned.
        </Text>
        <Text style={{ ...styles.description, color: colors.text }}>
          Switzerland is a mountainous Central European country, home to
          numerous lakes, villages and the high peaks of the Alps. Its cities
          contain medieval quarters, with landmarks like capital Bern’s
          Zytglogge clock tower and Lucerne’s wooden chapel bridge. The country
          is also known for its ski resorts and hiking trails. Banking and
          finance are key industries, and Swiss watches and chocolate are world
          renowned.
        </Text>

        <View>
          <Text style={styles.header}>Suggested Places</Text>
          <FlatList
            horizontal={true}
            data={gallery}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingBottom: 40 }}>
                  <View>
                    <Image
                      source={item.image}
                      style={{
                        width: 150,
                        height: 150,
                        marginHorizontal: 10,
                        borderRadius: 10,
                      }}
                    />
                    <View style={styles.darkOverlay}></View>
                    <Feather
                      name="map-pin"
                      size={16}
                      color="#fff"
                      style={styles.imageLocationIcon}
                    />
                    <Text style={styles.imageText}>{item.title}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 10,
    borderRadius: 40,
  },
  favouriteIcon: {
    position: "absolute",
    right: 20,
    top: 40,
    padding: 10,
    borderRadius: 40,
  },
  bookTicketBtn: {
    position: "absolute",
    right: 12,
    top: 350,
    padding: 16,
    borderRadius: 40,
    elevation: 5,
  },
  bookTicketText: {
    color: "#fff",
    fontSize: 14,
  },
  header: {
    padding: 14,
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    paddingHorizontal: 14,
    fontSize: 16,
    fontWeight: "normal",
    opacity: 0.3,
    justifyContent: "flex-start",
    textAlign: "justify",
    lineHeight: 26,
  },
  imageLocationIcon: {
    marginHorizontal: 14,
    marginTop: 4,
    position: "absolute",
    left: 10,
    bottom: 10,
  },
  imageText: {
    marginHorizontal: 14,
    marginTop: 4,
    position: "absolute",
    left: 30,
    bottom: 10,
    color: "#fff",
    fontSize: 14,
  },
  darkOverlay: {
    width: 150,
    height: 150,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});

export default PostDetails;
