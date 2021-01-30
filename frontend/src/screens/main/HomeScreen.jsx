import React, { useState, useEffect, fragment } from "react";
//import { ActivityIndicator } from "react-native";
import { styles } from "../styles";
import Colors from "../../constants/Colors";
import { ActivityIndicator } from 'react-native-paper';
import MapView from "react-native-maps";
//https://docs.expo.io/versions/latest/sdk/map-view/
const HomeScreen = ({}) => {
  const state = {
    mapLoaded: true,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
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
