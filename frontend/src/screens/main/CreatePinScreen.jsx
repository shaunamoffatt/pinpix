import React, { useState, useEffect, useContext } from "react";
import { Context as PostContext } from "../../context/PostContext";
import {
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
// picking an image from phone https://docs.expo.io/versions/latest/sdk/imagepicker/
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../../assets/styles/styles";
import { Colors } from "../../constants/Colors";
import { useFadeIn } from "../../hooks/fadeIn";

const CreatePinScreen = ({ navigation, route }) => {
  const { state, createPost } = useContext(PostContext);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // adapted scalling height text input from https://medium.com/@manojsinghnegi/react-native-auto-growing-text-input-8638ac0931c8
  const [inputHeight, setInputHeight] = useState();

  let newStyle = {
    inputHeight,
  };

  const { width, height } = Dimensions.get("window");
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

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

  const clearImage = () => {
    setImage(null);
  };

  return (
    <ScrollView style={styles.contentContainer}>
      {/* Page Title */}
      <Text style={styles.largeTextDark}>CreatePost</Text>
      {/* Post Title Input Field */}
      <TextInput
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
            style={{ width: width, height: 250 }}
          >
            <TouchableHighlight onPress={() => clearImage()}>
              <MaterialIcons name="clear" size={30} color="white" />
            </TouchableHighlight>
          </ImageBackground>
        )}
      </View>
      {/* Post Description Input Field */}
      <TextInput
        style={{ margin: 10 }}
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
        <Button compact="true" icon="upload" mode="default" onPress={pickImage}>
          Upload-Photo
        </Button>
        {/* Capture Button TODO implement capture Image*/}
        <Button compact="true" icon="camera" mode="default" onPress={{}}>
          Capture-Photo
        </Button>
      </View>
      {/* Save Post Button */}
      <TouchableOpacity style={styles.buttonPink} onPress={() => {}}>
        <Text style={styles.colorWhite}>Save</Text>
      </TouchableOpacity>
      <Button
        type="submit"
        compact="true"
        icon="camera"
        mode="contained"
        onPress={() => {
          createPost({ title, image, body });
        }}
      >
        Save Post
      </Button>
    </ScrollView>
  );
};

export default CreatePinScreen;
