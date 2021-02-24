import React, { useState } from "react";

import {
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";

import Animated, { Easing } from 'react-native-reanimated';

//import { useTransition } from "react-native-redash";
import Colors from "../constants/Colors";

import { FAB } from "react-native-paper";

import { styles } from "../assets/styles/styles";
//https://medium.com/backticks-tildes/create-a-custom-app-intro-slider-in-react-native-4308fae83ad1
//TODO : extact onboarding component for each screen
const OnBoardingSlide = ({
  imageSource,
  overlayImageSource,
  titleText,
  contentText,
  SvgComponent,
}) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View style={{ width, height }}>
      <View style={styles.backgroundContainer}>
        {/* Background images */}
        <ImageBackground
          source={imageSource}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
          <Image
            source={overlayImageSource}
            resizeMode="cover"
            style={styles.backgroundImage}
          />
        </ImageBackground>
      </View>

      <View style={styles.onBoardingIconCenter}>
        {/*Svg */}
        {SvgComponent}
      </View>
      <View style={{ flex: 1.8, marginBottom: 40 }}>
        <Text style={styles.largeText}>{titleText}</Text>
        <Text style={styles.mediumText}>{contentText}</Text>
      </View>
    </View>
  );
};
export default OnBoardingSlide;
