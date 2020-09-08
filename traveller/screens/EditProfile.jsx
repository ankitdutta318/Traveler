import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";

const avatar = {
  uri: "https://api.adorable.io/avatars/100/abott@adorable.png",
};

const EditProfile = () => {
  const { colors, dark } = useTheme();

  const bottomSheetRef = React.createRef();
  const animattionValue = new Animated.Value(1);

  const renderHeader = () => (
    <View
      style={{
        ...styles.header,
        backgroundColor: dark ? "#262626" : "#ffffff",
      }}
    >
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );

  const renderContent = () => (
    <View
      style={{
        ...styles.panel,
        backgroundColor: dark ? "#262626" : "#ffffff",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={{ ...styles.panelTitle, color: colors.text }}>
          Upload Photo
        </Text>
        <Text style={styles.panelSubtitle}>Choose your profile picture</Text>
      </View>

      <TouchableOpacity
        style={{ ...styles.panelButton, backgroundColor: colors.primary }}
      >
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.panelButton, backgroundColor: colors.primary }}
      >
        <Text style={styles.panelButtonTitle}>Choose from Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.panelButton, backgroundColor: "#da392b" }}
      >
        <Text style={styles.panelButtonTitle}>Remove Profile Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.panelButton,
          backgroundColor: "#f4f4f4",
          borderWidth: 1,
          borderColor: "#ccc",
        }}
        onPress={() => bottomSheetRef.current.snapTo(1)}
      >
        <Text style={{ ...styles.panelButtonTitle, color: "#000" }}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        renderContent={renderContent}
        renderHeader={renderHeader}
        snapPoints={[330, 0]}
        initialSnap={1}
        callbackNode={animattionValue}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.3, Animated.multiply(animattionValue, 1.0)),
        }}
      >
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={() => bottomSheetRef.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={avatar}
                style={{ height: 100, width: 100, elevation: 100 }}
                imageStyle={{ borderRadius: 50 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  <Feather
                    name="plus-circle"
                    size={26}
                    color={colors.text}
                    style={{
                      backgroundColor: colors.background,
                      borderRadius: 50,
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              color: colors.text,
              marginTop: 10,
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Ankit Dutta
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.formItem}>
            <Text style={styles.formItemLabel}>Name</Text>
            <TextInput
              textContentType="name"
              placeholder="John Doe"
              placeholderTextColor="#aaa"
              autoCapitalize="words"
              autoCompleteType="off"
              autoCorrect={false}
              style={{ ...styles.textInput, color: colors.text }}
            />
          </View>
          <View style={styles.formItem}>
            <Text style={styles.formItemLabel}>Username</Text>
            <TextInput
              textContentType="username"
              placeholder="jdoe"
              placeholderTextColor="#aaa"
              autoCompleteType="username"
              autoCorrect={false}
              style={{ ...styles.textInput, color: colors.text }}
            />
          </View>
          <View style={styles.formItem}>
            <Text style={styles.formItemLabel}>Location</Text>
            <TextInput
              textContentType="addressCityAndState"
              placeholder="Bengaluru, India"
              autoCompleteType="street-address"
              autoCorrect={false}
              placeholderTextColor="#aaa"
              style={{ ...styles.textInput, color: colors.text }}
            />
          </View>
          <View style={styles.formItem}>
            <Text style={styles.formItemLabel}>Bio</Text>
            <TextInput
              placeholder="Something about me"
              autoCapitalize="sentences"
              autoCorrect={false}
              placeholderTextColor="#aaa"
              style={{ ...styles.textInput, color: colors.text }}
            />
          </View>
          <View style={styles.formItem}>
            <Text style={styles.formItemLabel}>Phone</Text>
            <TextInput
              textContentType="telephoneNumber"
              placeholder="xx-xxxx-xxxx"
              keyboardType="number-pad"
              maxLength={10}
              autoCorrect={false}
              placeholderTextColor="#aaa"
              style={{ ...styles.textInput, color: colors.text }}
            />
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  submitButton: {
    padding: 10,
    paddingHorizontal: 10,
    width: 100,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  panel: {
    padding: 20,
    paddingTop: 20,
  },
  header: {
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 10,
    backgroundColor: "#00000040",
  },
  panelTitle: {
    fontSize: 24,
    height: 30,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
  },
  panelButton: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  action: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  form: {
    marginTop: 10,
  },
  formItem: {
    padding: 10,
  },
  formItemLabel: {
    paddingHorizontal: 5,
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#888",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#999",
    fontSize: 14,
    paddingHorizontal: 10,
    height: 35,
  },
});
