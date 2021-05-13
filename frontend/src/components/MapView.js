import React, { useEffect, useRef } from "react";
import { MapView, FileSystem, Constants } from "expo";
import { Button } from "react-native-elements";
//TODO revise.. I dont think ill use mapboxgl but if i change my mind have a look here
//otherwise delete this file or edited to fit 
//https://www.codementor.io/@danielamah/ultimate-guide-to-integrating-react-native-with-mapboxgl-a-google-map-alternative-19zkltyrqz
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken(
  "pk.eyJ1IjoiZGlsbHlkb25uYSIsImEiOiJja2tqdHMzZ2UwazFxMnRzN3p0NGM4bXpqIn0.nOF9PXlxzZma7eusW1os6A"
);

export default class Map extends React.Component {
  state = {
    urlTemplate: "http://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
    offlineUrlTemplate: `${FileSystem.documentDirectory}tiles/{z}/{x}/{y}.png`,
    isOffline: false,
  };
  render() {
    const { isOffline } = this.state;
    const urlTemplate = isOffline
      ? this.state.offlineUrlTemplate
      : this.state.urlTemplate;
    return (
      <View style={{ flex: 1, height: "100%", width: "100%" }}>
        <MapView
          style={{ flex: 1 }}
          onRegionChange={(mapRegion) => this.setState({mapRegion}) }>
          <MapView.UrlTile urlTemplate={urlTemplate} zIndex={1} />
        </MapView>
      </View>
    );
  }
}
