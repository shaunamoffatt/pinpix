import React, { useState } from "react";
import Onboarding from "react-native-onboarding-swiper";
import {
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  ImageBackground,
} from "react-native";

import Colors from "../../constants/Colors";
//import logo from "../../assets/logo.png";
import acorn from "../../assets/onboarding/acorn.png";
import support from "../../assets/onboarding/support.png";
import hands from "../../assets/onboarding/hands.png";
import membership from "../../assets/onboarding/membership.png";
import leaves from "../../assets/onboarding/leaves.png";
import { SvgMembers, SvgHeart, SvgLogo, SvgLocation } from "../../components/SvgComponents";

import { styles } from "../../assets/styles/styles";
//https://medium.com/backticks-tildes/create-a-custom-app-intro-slider-in-react-native-4308fae83ad1
const OnBoardingScreen = ({}) => {
  const { width, height } = Dimensions.get("window");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
      >
        <View style={{ width, height }}>
          <ImageBackground source={acorn} style={styles.backgroundImage}>
            <View style={styles.onBoardingIconCenter}>
              <SvgLogo />
            </View>
            <View style={{ flex: 1.75, marginBottom: 30 }}>
              <Text style={styles.largeText}>WELCOME</Text>
              <Text style={styles.mediumText}>
                Thank you for helping us to establish and conserve the native
                woodlands of Ireland.
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{ width, height }}>
          <ImageBackground source={support} style={styles.backgroundImage}>
            <View style={styles.onBoardingIconCenter}>
              <SvgHeart />
            </View>
            <View style={{ flex: 1.75, marginBottom: 30 }}>
              <Text style={styles.largeText}>SUPPORT US</Text>
              <Text style={styles.mediumText}>
                Pledge trees or make a Donatation.
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{ width, height }}>
          <ImageBackground source={membership} style={styles.backgroundImage}>
            <View style={styles.onBoardingIconCenter}>
              <SvgMembers />
            </View>
            <View style={{ flex: 1.75, marginBottom: 30 }}>
              <Text style={styles.largeText}>MEMBER- SHIP</Text>
              <Text style={styles.mediumText}>
                Come together monthly to plant, prepare and care for our trees.
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{ width, height }}>
          <ImageBackground source={leaves} style={styles.backgroundImage}>
            <View style={styles.onBoardingIconCenter}>
              <SvgLocation />
            </View>
            <View style={{ flex: 1.75, marginBottom: 30 }}>
              <Text style={styles.largeText}>SEE OUR WORK</Text>
              <Text style={styles.mediumText}>
                Locate our Trees Planting Locations and Enjoy our active Blogs.
              </Text>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default OnBoardingScreen;
