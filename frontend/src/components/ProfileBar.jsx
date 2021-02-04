import React, { useState, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Context as AuthContext } from "../utils/AuthContext";

import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { styles } from "../screens/styles";
import { Avatar, Button } from "react-native-paper";

const ProfileBar = ({ navigation, route }) => {
  const [userName, setuserName] = useState("@dummyUser");
  const [followers, setfollowers] = useState("100");
  const [following, setfollowing] = useState("250");

  //TODO go to settings page..currently functions as a logout
  const { state, signout } = useContext(AuthContext);

  return (
    <View>
      {/** HEADER- SignoutButton */}
      <View style={styles.headerRight}>
        <TouchableOpacity
          onPress={() => {
            signout();
          }}
        >
          <FontAwesome name="sign-out" size={24} color={Colors.navy} />
        </TouchableOpacity>
      </View>
      {/** PROFILE PICTURES AND FOLLOWER SECTION */}
      <View style={styles.profilePicBar}>
        {/** FOLLOWERS */}
        <TouchableOpacity
          numberOfLines={2}
          onPress={() => console.log("Pressed")}
        >
          <Text style={{ textAlign: "center" }}>
            {followers}
            {"\nFollowers"}
          </Text>
        </TouchableOpacity>
        {/** PROFILE PIC */}
        <Avatar.Image
          size={100}
          source={require("../assets/default_profile.jpg")}
        />
        {/** FOLLOWING */}
        <TouchableOpacity
          numberOfLines={2}
          onPress={() => console.log("Pressed")}
        >
          <Text style={{ textAlign: "center" }}>
            {following}
            {"\nFollowing"}
          </Text>
        </TouchableOpacity>
      </View>
      {/** USER NAME SECTION */}
      <View style={styles.container}>
        <Text style={styles.centerText}>{userName}</Text>
      </View>
    </View>
  );
};

export default ProfileBar;
