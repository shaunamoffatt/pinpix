import React, { useState, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Header,
} from "react-native";
import { Context as AuthContext } from "../../utils/AuthContext";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { styles } from "../styles";
import { Appbar, Avatar, Button } from "react-native-paper";

import AsyncStorageItems from "../../constants/AsyncStorageItems"

const ProfileScreen = ({ navigation, route }) => {
  const [userName, setuserName] = useState("@dummyUser");
  const [followers, setfollowers] = useState("100");
  const [following, setfollowing] = useState("250");


  //TODO go to settings page..currently functions as a logout
  const { state, signout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showVeritcalScrollIndicator={false}>
        <Appbar.Header style={{ backgroundColor: "white" }}>
          <Appbar.Content title="" subtitle="" />
          <Appbar.Action
            icon="dots-vertical"
            onPress={() => {
              signout();
            }}
          />
        </Appbar.Header>

        <View style={styles.profilePicBar}>
          <TouchableOpacity
            numberOfLines={2}
            color={Colors.greenLight}
            onPress={() => console.log("Pressed")}
          >
            <Text style={{ textAlign: "center" }}>
              {followers}
              {"\nFollowers"}
            </Text>
          </TouchableOpacity>

          <Avatar.Image
            size={100}
            source={require("../../assets/default_profile.jpg")}
          />

          <TouchableOpacity
            numberOfLines={2}
            color={Colors.greenLight}
            onPress={() => console.log("Pressed")}
          >
            <Text style={{ textAlign: "center" }}>
              {following}
              {"\nFollowing"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.centerText}>{userName}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
