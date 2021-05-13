import React, { useState, useEffect, fragment } from "react";
//import { ActivityIndicator } from "react-native";
import { styles } from "../../assets/styles/styles";
import Colors from "../../constants/Colors";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
//53.268648037445374, -9.047254430981548
const HomeScreen = ({}) => {
  const state = {
    mapLoaded: true,
  };

  const [region, setRegion] = useState({
    longitude: -9.047254430981548,
    latitude: 53.268648037445374,
    longitudeDelta: 0.002,
    latitudeDelta: 0.09,
  });

  const GEOLOCATION_OPTIONS = {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 1000,
  };

  //https://reactnativemaster.com/react-native-geolocation-example
  // could use to store some more info on posts
  const getGeocodeAsync = async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location);
    this.setState({ geocode });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return <View>Need Permission to use Location</View>;
      }
      //Check for the persons moving
      Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
    })();
  }, []);

  //Updates the users location on the map
  const locationChanged = (location) => {
    region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.05,
    };
    //setRegion(location);
  };

  if (!state.mapLoaded) {
    return (
      <ActivityIndicator
        size="large"
        color={Colors.earthGreen}
        style={styles.container}
      />
    );
  }

  return (
    <View style={styles.containerWhite}>
      <MapView
        style={{ flex: 1 }}
        region={region}
        showsUserLocation={true}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        <MapView.Marker coordinate={region} title="marker" description="" />
      </MapView>
      {/** TODO add markers in region from posts */}
    </View>
  );
};
export default HomeScreen;
