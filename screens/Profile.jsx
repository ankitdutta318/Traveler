import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  StatusBar,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const avatar = {
  uri: "https://api.adorable.io/avatars/80/abott@adorable.png",
};

const Profile = ({ navigation }) => {
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
    {
      image: {
        uri:
          "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      title: "Switzerland",
      key: "5",
    },
    {
      image: {
        uri:
          "https://travel.usnews.com/static-travel/images/destinations/331/edited_south_island_nz_getty_irma_ferreira_445x280.jpg",
      },
      title: "New Zeland",
      key: "6",
    },
    {
      image: {
        uri:
          "https://travel.usnews.com/static-travel/images/destinations/108/main_image_cropped_rome_445x280.jpg",
      },
      title: "Rome",
      key: "7",
    },
    {
      image: {
        uri:
          "https://travel.usnews.com/static-travel/images/destinations/288/tahiti_main_getty_samantha_t_photography_edited_445x280.jpg",
      },
      title: "Tahiti",
      key: "8",
    },
    {
      image: {
        uri:
          "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      title: "Switzerland",
      key: "9",
    },
    {
      image: {
        uri:
          "https://travel.usnews.com/static-travel/images/destinations/331/edited_south_island_nz_getty_irma_ferreira_445x280.jpg",
      },
      title: "New Zeland",
      key: "10",
    },
    {
      image: {
        uri:
          "https://travel.usnews.com/static-travel/images/destinations/108/main_image_cropped_rome_445x280.jpg",
      },
      title: "Rome",
      key: "11",
    },
    {
      image: {
        uri:
          "https://travel.usnews.com/static-travel/images/destinations/288/tahiti_main_getty_samantha_t_photography_edited_445x280.jpg",
      },
      title: "Tahiti",
      key: "12",
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      <Feather
        onPress={() => navigation.toggleDrawer()}
        name="menu"
        size={22}
        color={colors.text}
        style={styles.leftIcon}
      />
      <Feather
        onPress={() => navigation.navigate("Notifications")}
        name="bell"
        size={22}
        color={colors.text}
        style={styles.rightIcon}
      />
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row" }}>
          <Image source={avatar} style={styles.avatar} />

          {/* Followers, Following and Favourites section */}
          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={styles.column}>
              <Text style={{ ...styles.title, color: colors.text }}>125</Text>
              <Text style={styles.secondaryText}> Followers </Text>
            </View>
            <View style={styles.column}>
              <Text style={{ ...styles.title, color: colors.text }}>77</Text>
              <Text style={styles.secondaryText}> Following </Text>
            </View>
            <View style={styles.column}>
              <Text style={{ ...styles.title, color: colors.text }}>43</Text>
              <Text style={styles.secondaryText}> Trips </Text>
            </View>
          </View>
        </View>

        {/* about section */}
        <View style={{ marginVertical: 10 }}>
          <Text style={{ ...styles.title, color: colors.text }}>
            Ankit Dutta
          </Text>
          <Text style={styles.secondaryText}>
            <Feather name="map-pin" size={14} color="#999" /> Bengaluru, India
          </Text>
          <Text style={styles.about}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nesciunt doloribus inventore cumque quo quae consequatur voluptas
            ipsa aut beatae accusamus enim deleniti facere similique qui,
            voluptatem minus libero ullam?
          </Text>
        </View>

        {/* user actions section */}
        <View
          style={{
            marginVertical: 10,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: colors.primary,
            }}
          >
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: colors.primary,
            }}
          >
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Featured */}
      <View style={{ marginHorizontal: 10 }}>
        <Text style={{ ...styles.title, color: colors.text }}>
          Featured Trips
        </Text>
        <FlatList
          horizontal={true}
          data={gallery}
          style={{ marginTop: 20 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={{ paddingBottom: 0 }}>
                <Image
                  source={item.image}
                  style={{
                    width: 100,
                    height: 100,
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
            );
          }}
        />
      </View>

      {/* My Trips sections */}
      <View style={{ margin: 10, paddingVertical: 10 }}>
        <Text style={{ ...styles.title, color: colors.text }}>My Trips</Text>
        <View style={styles.postContainer}>
          {gallery.map((post) => (
            <Image
              source={post.image}
              key={post.key}
              style={{
                width: "32%",
                height: 100,
                margin: 2,
                borderRadius: 5,
              }}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  userInfoSection: {
    marginHorizontal: 20,
    marginTop: 40,
    paddingBottom: 20,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  leftIcon: {
    position: "absolute",
    top: 0,
    left: 16,
  },
  rightIcon: {
    position: "absolute",
    top: 0,
    right: 16,
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
  about: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
    color: "#666",
  },
  button: {
    width: 150,
    height: 30,
    justifyContent: "center",
    padding: 16,
    borderRadius: 5,
    elevation: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
  },
  column: { marginLeft: 30, alignItems: "center" },
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
    width: 100,
    height: 100,
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
  postContainer: {
    paddingVertical: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  sliderContainer: {
    height: 200,
    width: "90%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: "30%",
    marginHorizontal: 0,
    alignSelf: "center",
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 70,
    height: 70,
    backgroundColor: "#fdeae7" /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: "center",
    marginTop: 5,
    color: "#de4f35",
  },
  cardsWrapper: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
});

export default Profile;
