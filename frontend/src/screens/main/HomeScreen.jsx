import React, { useState, useEffect, fragment } from "react";
//import { ActivityIndicator } from "react-native";
import { styles } from "../styles";
import Colors from "../../constants/Colors";
import { ActivityIndicator } from 'react-native-paper';
import MapView from "react-native-maps";
//https://docs.expo.io/versions/latest/sdk/map-view/
//53.268648037445374, -9.047254430981548
const HomeScreen = ({}) => {
  const state = {
    mapLoaded: true,
    region: {
      longitude: -9.047254430981548,
      latitude: 53.268648037445374,
      longitudeDelta: 0.002,
      latitudeDelta: 0.09,
    },
  };

  useEffect(() => {
    // check if map is loaded
  });

  if (!state.mapLoaded) {
    return <ActivityIndicator size="large" color={Colors.greenLight} style={styles.container}/>;
  }

  return <MapView region={state.region} style={{ flex: 1 }} />;
};
export default HomeScreen;
