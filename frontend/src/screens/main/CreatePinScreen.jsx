import React, { useState, useEffect, useContext } from "react";
import { Context as PostContext } from "../../context/PostContext";

import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableHighlight,
  ScrollView,
  Image,
  View,
  Platform,
  Text,
  Button as SubmitBtn,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import Colors from "../../constants/Colors";
// picking an image from phone https://docs.expo.io/versions/latest/sdk/imagepicker/
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../../assets/styles/styles";
import { useFadeIn } from "../../hooks/fadeIn";
import { Camera } from "expo-camera";

const CreatePinScreen = ({ navigation, route }) => {
  const { state, createPost } = useContext(PostContext);
  //States for the input values
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // adapted scalling height text input from https://medium.com/@manojsinghnegi/react-native-auto-growing-text-input-8638ac0931c8
  const [inputHeight, setInputHeight] = useState();

  const { width, height } = Dimensions.get("window");
  const [hasPermission, setHasPermission] = useState(false);
  //https://docs.expo.io/versions/latest/sdk/camera/
  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      // try get permission for the camera
      const { cam_status } = await Camera.requestPermissionsAsync();
      setHasPermission(cam_status === "granted");
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();
  }, []);

  useEffect(() => {
    // adding listeners everytime props.x changes
    if (state.hasPosted) {
      alert("POST SAVED" + state.hasPosted);
      //Clear the form
      setImage(null);
      navigation.navigate("Heart");
    }
    return () => {
      // removing the listener when props.x changes
    };
  }, [state]);

  //If we get an image from the CapturePhotoScrenn Camera
  useEffect(() => {
    if (route.params?.photo) {
      setImage(route.params.photo);
    }
  }, [route.params?.photo]);

  const resetForm = () => {
    this.setState(this.baseState);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      //aspect: [4, 3],
      quality: 1,
      cropping: true,
      multiple: false,
      sortOrder: "asc",
      maxFiles: 1, //can change
      // we don't need the base64 here as we upload the file directly
      // from the FS rather than a base64-encoded string of it
      includeBase64: false,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result);
    }
  };

  return (
    <ScrollView style={styles.containerWhite}>
      <View style={styles.contentContainer}>
        {/* Page Title */}
        <Text style={styles.largeTextDark}>CreatePost</Text>

        {/* Display Error Messages returned from the API */}
        {state.errorMessage ? (
          <Text style={styles.errorMessage}>{state.errorMessage}</Text>
        ) : null}
        {/* Post Title Input Field */}
        <TextInput
          label="Post Title"
          style={{ margin: 10 }}
          placeholder="Post Title ..."
          editable={true}
          multiline={false}
          onChangeText={setTitle}
          onContentSizeChange={(e) => setInputHeight}
        />
        {/* Image Shows if one is uploaded.. initially only allow one image per post */}
        <View>
          {image && (
            <ImageBackground
              source={{ uri: image.uri }}
              style={createPinStyles.image}
            >
              <TouchableHighlight onPress={() => setImage(null)}>
                <MaterialIcons name="clear" size={30} color="white" />
              </TouchableHighlight>
            </ImageBackground>
          )}
        </View>
        {/* Post Description Input Field */}
        <TextInput
          style={{ margin: 10 }}
          label="Your Post"
          placeholder="Your Post ..."
          editable={true}
          multiline={true}
          onChangeText={setBody}
          onContentSizeChange={(e) => setInputHeight}
        />

        {/* Container of Upload and Capture Images Buttons */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            margin: 0,
          }}
        >
          {/* Upload Button */}
          <Button
            compact="true"
            icon="upload"
            mode="default"
            onPress={pickImage}
          >
            Upload-Photo
          </Button>
          {/* Capture Button TODO implement capture Image*/}
          <Button
            compact="true"
            icon="camera"
            mode="default"
            onPress={() => {
              navigation.navigate("Capture");
            }}
          >
            Capture-Photo
          </Button>
          {/* Permission error*/}
          {hasPermission ? (
            <Text tyle={styles.errorMessage}>No access to camera</Text>
          ) : null}
        </View>
        {/* Save Post Button */}
        <TouchableOpacity
          style={styles.buttonPink}
          onPress={() => {
            createPost({ title, image, body });
          }}
        >
          <Text style={styles.colorWhite}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreatePinScreen;

const createPinStyles = StyleSheet.create({
  image: {
    height: 250,
    flex: 1,
    width: null,
    resizeMode: "contain",
  },
});
