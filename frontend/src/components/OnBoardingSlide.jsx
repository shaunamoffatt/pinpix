import React, { useState, useEffect } from "react";

import {
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
  Animated,
} from "react-native";

//import Animated, { Easing } from "react-native-reanimated";

//import { useTransition } from "react-native-redash";
import Colors from "../constants/Colors";
import { useFocusEffect } from "@react-navigation/native";
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
  index,
}) => {
  const { width, height } = Dimensions.get("window");

  const state = {
    ready: false,
    SlideInLeft: new Animated.Value(0),
    slideUpValue: new Animated.Value(0),
    fadeValue: new Animated.Value(0),
  };

  useEffect(
    React.useCallback(() => {
      return Animated.parallel([
        Animated.timing(state.SlideInLeft, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(state.fadeValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(state.slideUpValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }, [index])
  );

  let { slideUpValue, fadeValue, SlideInLeft } = state;
  return (
    <View style={{ width, height }}>
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
          source={imageSource}
          resizeMode="cover"
          style={styles.backgroundImage}
        >
          <Animated.Image
            source={overlayImageSource}
            resizeMode="cover"
            style={{
              transform: [
                {
                  translateX: SlideInLeft.interpolate({
                    inputRange: [0, 1],
                    outputRange: [width, 0],
                  }),
                },
              ],
              flex: 1,
              width: "100%",
              resizeMode: "cover",
            }}
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
