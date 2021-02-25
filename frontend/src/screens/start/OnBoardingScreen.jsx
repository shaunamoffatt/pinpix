import React, { useState } from "react";
import Onboarding from "react-native-onboarding-swiper";
import {
  View,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Text
} from "react-native";

import Colors from "../../constants/Colors";

import acorn from "../../assets/onboarding/acorn.png";
import support from "../../assets/onboarding/support.png";
import hands from "../../assets/onboarding/hands.png";
import membership from "../../assets/onboarding/membership.png";
import leaves from "../../assets/onboarding/leaves.png";

import shape1 from "../../assets/onboarding/shape1.png";
import shape2 from "../../assets/onboarding/shape2.png";
import shape3 from "../../assets/onboarding/shape3.png";
//import shape4 from "../../assets/onboarding/shape4.png";

import OnBoardingSlide from "../../components/OnBoardingSlide";

import {
  SvgMembers,
  SvgHeart,
  SvgLogo,
  SvgLocation,
} from "../../components/SvgComponents";

import { FontAwesome } from '@expo/vector-icons'; 
import { FAB } from "react-native-paper";

import { styles } from "../../assets/styles/styles";
//https://medium.com/backticks-tildes/create-a-custom-app-intro-slider-in-react-native-4308fae83ad1
//TODO : extact onboarding component for each screen
const OnBoardingScreen = (props) => {
  const { width, height } = Dimensions.get("window");
  const [sliderState, setSliderState] = useState({ currentPage: 0 });

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;

    const { x } = event.nativeEvent.contentOffset;

    const indexOfNextScreen = Math.round(x / width);

    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };
  //<StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
  const { currentPage: pageIndex } = sliderState;

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event: any) => {
            setSliderPage(event);
          }}
        >
          {/* WELCOME */}
          <OnBoardingSlide
            index={pageIndex}
            imageSource={acorn}
            overlayImageSource={shape1}
            SvgComponent={<SvgLogo />}
            titleText="WELCOME"
            contentText="Thank you for helping us to establish and conserve the native woodlands of Ireland."
          />
          {/* SUPPORT US */}
          <OnBoardingSlide
            index={pageIndex}
            imageSource={support}
            overlayImageSource={shape3}
            SvgComponent={<SvgHeart />}
            titleText="SUPPORT US"
            contentText="Pledge trees or make a Donatation."
          />
          {/* MEMBER- SHIP" */}
          <OnBoardingSlide
            index={pageIndex}
            imageSource={membership}
            overlayImageSource={shape2}
            SvgComponent={<SvgMembers />}
            titleText="MEMBER- SHIP"
            contentText="Come together monthly to plant, prepare and care for our trees."
          />

          <OnBoardingSlide
            index={pageIndex}
            imageSource={leaves}
            overlayImageSource={shape1}
            SvgComponent={<SvgLocation />}
            titleText="SEE OUR WORK"
            contentText="Locate our Trees Planting Locations and Enjoy our active Blogs."
          />
        </ScrollView>
        {/* Bottom Slider Circles */}
        <View style={{ flexDirection: "row" }}>
          <View style={styles.paginationWrapper}>
            {Array.from(Array(4).keys()).map((key, index) => (
              <View
                style={[
                  styles.paginationDots,
                  { opacity: pageIndex === index ? 1 : 0.35 },
                ]}
                key={index}
              />
            ))}
          </View>
          {/* IF on the last slider view show the Next button */}
          <View style={styles.fab}>
            {pageIndex === 3 ? (
      <TouchableOpacity
        style={styles.buttonSmallRound}
        onPress={() => {
           props.navigation.navigate("Start");
        }}
      >
       <FontAwesome name="arrow-right" size={24} color="black" />
      </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default OnBoardingScreen;
