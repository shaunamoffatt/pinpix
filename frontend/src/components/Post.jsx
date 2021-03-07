import React, { useState, useEffect, useContext } from "react";
import {
  Avatar,
  withTheme,
  Card,
  Title,
  Paragraph,
  List,
  Button,
} from "react-native-paper";
//import HTML from "react-native-render-html";
import ImageLoad from "react-native-image-placeholder";
import {
  Share,
  ScrollView,
  TouchableOpacity,
  Animated,
  Text,
  View,
  Dimensions,
} from "react-native";
//import ContentPlaceholder from '../components/ContentPlaceholder';
import moment from "moment";
import { styles } from "../../assets/styles/styles";
import { useFadeIn } from "../../hooks/fadeIn";
const Post = ({ navigation, route }) => {
  return (
    <Animated.View>
      <ScrollView style={{}}>
        <Card>
          <Card.Content>
            <Title>Title</Title>
            <List.Item
              title="{`${post[0]._embedded.author[0].name}`}"
              description="{`${post[0]._embedded.author[0].description}`}"
              left={(props) => {
                return (
                  <Avatar.Image
                    size={55}
                    source={{
                     // uri: `${post[0]._embedded.author[0].avatar_urls[96]}`,
                    }}
                  />
                );
              }}
            />
            <List.Item
              title={`Published on 
              //moment(post[0].date,"YYYYMMDD").fromNow()}`}
            />
            <Paragraph>This will be where the posts will be</Paragraph>
          </Card.Content>
          <ImageLoad
            style={{ width: "100%", height: 250 }}
            loadingStyle={{ size: "large", color: "grey" }}
           // source={{ uri: post[0].jetpack_featured_media_url }}
          />
          <Card.Content>

          </Card.Content>
        </Card>
      </ScrollView>
    </Animated.View>
  );
};

export default CreatePinScreen;
