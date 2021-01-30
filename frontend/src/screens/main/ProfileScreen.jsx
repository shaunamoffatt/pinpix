import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import  CustomAppBar  from "../../components/AppBar";
import { styles } from "../styles";
const ProfileScreen = ({ navigation, route }) => {
  return (
   
    <SafeAreaView style={{flex:1}}>
     <CustomAppBar/>
      <ScrollView style={styles.container} showVeritcalScrollIndicator={false}>
        <Text style={styles.largeText}>Profile Screen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
