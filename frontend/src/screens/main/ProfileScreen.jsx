import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import ProfileBar from "../../components/ProfileBar";
import ProfileTabNavigator from "../../navigation/ProfileTabNavigator";
import { styles } from "../styles";
const ProfileScreen = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showVeritcalScrollIndicator={false}>
        <ProfileBar />
        <ProfileTabNavigator />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
