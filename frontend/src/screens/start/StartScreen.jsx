import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import logo from "../../assets/hometreewhite.png";
import hands from "../../assets/onboarding/hands.png";
import { styles } from "../../assets/styles/styles";
import { Video } from "expo";

const StartScreen = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        {/* Background images */}
        <ImageBackground
          source={hands}
          resizeMode="cover"
          style={styles.backgroundImage}
        ></ImageBackground>
      </View>

      <View style={styles.center}>
        <Image source={logo} style={styles.logo} />

        <TouchableOpacity
          style={styles.buttonWhite}
          onPress={() => {
            props.navigation.navigate("User");
          }}
        >
          <Text style={styles.colorWhite}>Pledge or Donate</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.buttonWhite}
          onPress={() => {
            props.navigation.navigate("Member");
          }}
        >
          <Text style={styles.colorWhite}>Members or Volunteers</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

export default StartScreen;
