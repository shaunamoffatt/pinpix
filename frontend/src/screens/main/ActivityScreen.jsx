import React, { useState, useContext, useEffect, useCallback } from "react";
import { View, Text, Image, ScrollView, RefreshControl } from "react-native";
import { styles } from "../../assets/styles/styles";
import { Context as PostContext } from "../../context/PostContext";
import { Provider as PostProvider } from "../../context/PostContext";

const ActivityScreen = ({ navigation, route }) => {
  const { state, getPosts } = useContext(PostContext);
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

  //https://reactnative.dev/docs/refreshcontrol
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getPosts().then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let testimages;
      try {
        let posts = await getPosts().then(() => {
          setLoaded(true);
          console.log("TTHISI IS IN THE ACTIVITY SCREENJSX");
        });
        return () => {
          setLoaded(false);
        };
      } catch (e) {
        alert(e);
      }
    };
    if (!loaded) bootstrapAsync();
  }, [loaded]);

  return (
    <PostProvider>
      <View styles={styles.containerWhite}></View>
      <ScrollView
        style={styles.contentContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={styles.largeTextDark}>ImagePost</Text>
        {loaded
          ? state.images.map((image) => {
              var image_uri = "";
              image_uri += image;
              {
                /**TODO: abstract this out into its own component*/
              }
              return (
                <View
                  key={image}
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 250,
                      height: 250,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    source={{
                      uri: image, //"https://pinpix.s3.amazonaws.com/image/6095d327eb24e132d04c0f04/image/6095d327eb24e132d04c0f04"
                    }}
                  />
                  {/**TODO: put in the title here */}
                  <Text>{image_uri}</Text>
                </View>
              );
            })
          : null}
      </ScrollView>
    </PostProvider>
  );
};

export default ActivityScreen;
