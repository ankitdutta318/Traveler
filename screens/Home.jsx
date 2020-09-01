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
  TextInput,
  StatusBar,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const image = {
  uri:
    "https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

const recentImage = {
  uri:
    "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
};

const Home = ({ navigation }) => {
  const { colors, dark } = useTheme();
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

  const goToPost = () => {
    navigation.navigate("PostDetails");
  };

  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={image}
          style={{ width: "100%", height: 270, elevation: 100 }}
          imageStyle={{ borderBottomRightRadius: 65 }}
        >
          <View style={styles.dakOverlay}></View>
          <View style={styles.searchContainer}>
            <Text style={styles.userGreet}>Hi Ankit,</Text>
            <Text style={styles.userText}>
              Where would you like to go today?
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.searchBox}
              placeholder="Search Destination"
              placeholderTextColor="#666"
            ></TextInput>
            <Feather
              name="search"
              size={22}
              color="#666"
              style={styles.searchIcon}
            />
          </View>
          <Feather
            onPress={() => navigation.toggleDrawer()}
            name="menu"
            size={22}
            color="#fff"
            style={styles.menuIcon}
          />
          <Feather
            onPress={() => navigation.navigate("Notifications")}
            name="bell"
            size={22}
            color="#fff"
            style={styles.notificationIcon}
          />
        </ImageBackground>
      </View>

      <ScrollView>
        {/* Top Trending section */}
        <View style={{ paddingLeft: 20, paddingTop: 20 }}>
          <Text style={{ ...styles.subHeader, color: colors.text }}>
            Top Trending
          </Text>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={gallery}
            renderItem={({ item }) => {
              return (
                <View style={{ paddingVertical: 20, paddingLeft: 16 }}>
                  <TouchableOpacity
                    style={{ elevation: 50 }}
                    onPress={goToPost}
                  >
                    <Image
                      source={item.image}
                      style={{
                        width: 150,
                        marginRight: 8,
                        height: 250,
                        borderRadius: 10,
                        borderWidth: dark ? 1 : 0,
                        borderColor: colors.primary,
                      }}
                    />
                    <View style={styles.imageOverlay}></View>
                    <Feather
                      name="map-pin"
                      size={16}
                      color="#fff"
                      style={styles.imageLocationIcon}
                    />
                    <Text style={styles.imageText}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        {/* Recently Viewed section */}
        <View style={{ marginBottom: 60 }}>
          <View
            style={{
              padding: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ ...styles.subHeader, color: colors.text }}>
              Recently Viewed
            </Text>
            <Text style={{ ...styles.subHeaderExtra, color: colors.primary }}>
              View All
            </Text>
          </View>
          <Image
            source={recentImage}
            style={{
              width: "92%",
              height: 250,
              borderRadius: 10,
              alignSelf: "center",
            }}
          />
          <View style={{ position: "absolute", bottom: 0, padding: 16 }}>
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="map-pin"
                color="#fff"
                size={20}
                style={{ marginLeft: 10, position: "relative", top: 4 }}
              />
              <Text
                style={{
                  fontSize: 22,
                  color: "#fff",
                  fontWeight: "normal",
                  marginBottom: 10,
                  marginHorizontal: 10,
                }}
              >
                Venice
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: "#fff",
                fontWeight: "normal",
                marginBottom: 4,
                opacity: 0.9,
                marginLeft: 16,
              }}
            >
              Venice, the capital of northern Italy's Veneto Region in the
              Adriatic Sea
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: "100%",
  },
  dakOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 270,
    backgroundColor: "#000",
    opacity: 0.2,
    borderBottomRightRadius: 65,
  },
  searchContainer: {
    paddingTop: 100,
    paddingLeft: 16,
  },
  userGreet: {
    fontSize: 38,
    fontWeight: "bold",
    color: "white",
  },
  userText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "white",
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: "#fff",
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: "90%",
  },
  searchIcon: {
    position: "absolute",
    top: 30,
    right: 60,
    opacity: 0.6,
  },
  menuIcon: {
    position: "absolute",
    top: 35,
    left: 16,
  },
  notificationIcon: {
    position: "absolute",
    top: 35,
    right: 16,
  },
  subHeader: { fontSize: 22, fontWeight: "bold" },
  subHeaderExtra: { fontSize: 14, fontWeight: "bold" },
  imageOverlay: {
    height: 250,
    width: 150,
    marginRight: 8,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.2,
  },
  imageLocationIcon: {
    position: "absolute",
    marginTop: 4,
    left: 10,
    bottom: 10,
  },
  imageText: {
    position: "absolute",
    color: "#fff",
    marginTop: 4,
    fontSize: 14,
    left: 30,
    bottom: 10,
  },
});

export default Home;
