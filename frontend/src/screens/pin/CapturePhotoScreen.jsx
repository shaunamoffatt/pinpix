import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Button,
  Modal,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { styles } from "../../assets/styles/styles";
import { Camera } from "expo-camera";
import Colors from "../../constants/Colors";
import { Dimensions, ImageBackground } from "react-native";
import * as ImageManipulator from "expo-image-manipulator";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";

//TODO : extract out the image maniluplator from camera. also make camera a component
//levelup.gitconnected.com/expo-camera-app-and-passing-image-to-route-c5c86b3fb081
const CapturePhotoScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  //the camera
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  //Storing the photo
  const [photo, setPhoto] = useState(null);
  // to store and fix the dimensions of the camera
  const [ratio, setRatio] = useState("16:9");
  // modal visible
  const [modalVisible, setModalVisible] = useState(true);
  //for when a photo is takne
  const [isPreview, setIsPreview] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  //https://github.com/react-native-camera/react-native-camera/issues/1280
  const prepareRatio = async () => {
    if (Platform.OS === "android" && cameraRef) {
      const ratios = await cameraRef.getSupportedRatiosAsync();
      // See if the current device has your desired ratio, otherwise get the maximum supported one
      // Usually the last element of "ratios" is the maximum supported ratio
      const ratio =
        ratios.find((ratio) => ratio === "16:9") || ratios[ratios.length - 1];
      setRatio(ratio);
    }
  };

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const photoCaputred = await cameraRef.takePictureAsync(options);
      console.log(photoCaputred.uri);
      setPhoto(photoCaputred);
      setIsPreview(!isPreview);
    }
  };

  const flipCamera = () => {
    if (isPreview === true) {
      return;
    }

    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    //setIsPreview(false);
  };

  const editPhoto = () => {
    //TODO
  };

  const renderCancelPreviewButton = () => (
    <TouchableOpacity onPress={cancelPreview} style={{ margin: 20 }}>
      <View style={[styles.closeCross, { transform: [{ rotate: "45deg" }] }]} />
      <View
        style={[styles.closeCross, { transform: [{ rotate: "-45deg" }] }]}
      />
    </TouchableOpacity>
  );

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
      </View>
    );
  }

  //REnder Preview image
  if (isPreview === true) {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={isPreview}
        onRequestClose={() => {}}
      >
        <ImageBackground
          source={{ uri: photo.uri }}
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: Colors.earthGreen,
          }}
        >
          <Image
            source={{ uri: photo.uri }}
            style={{
              height: 550,
              resizeMode: "contain",
              justifyContent: "flex-end",
            }}
          />
          <View style={cameraStyles.bottomContainer}>
            {/* Capture  Button*/}
            <TouchableOpacity
              style={cameraStyles.exitButton}
              icon="close"
              mode="outlined"
              color="white"
              onPress={() => {
                setModalVisible(true);
                setIsPreview(false);
              }}
            >
              <MaterialIcons name="cancel" size={45} color="white" />
            </TouchableOpacity>
            {/* Capture  Button*/}
            <TouchableOpacity
              style={cameraStyles.captureButton}
              onPress={() => {
                //Pass the photo to the CreatePinScreen

                navigation.navigate("Create", { photo });
              }}
            >
              {/* Style of the capture  Button*/}
              <View style={cameraStyles.outerButton}>
                <AntDesign
                  name="checkcircle"
                  size={50}
                  color={Colors.earthGreen}
                />
                <View style={cameraStyles.centerIconBackground}></View>
              </View>
            </TouchableOpacity>

            {/* Flip Camera Button*/}
            <TouchableOpacity
              style={cameraStyles.reverseCam}
              icon="axis-z-rotate-clockwise"
              mode="outlined"
              color="white"
              onPress={() => editPhoto()}
            >
              <FontAwesome name="crop" size={45} color="white" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Modal>
    );
  }

  // TODO eventually some image manpulation
  //https://docs.expo.io/versions/latest/sdk/imagemanipulator/
  const _rotate90andFlip = async () => {
    const manipResult = await ImageManipulator.manipulateAsync(
      image.localUri || image.uri,
      [{ rotate: 90 }, { flip: ImageManipulator.FlipType.Vertical }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    setImage(manipResult);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {}}
    >
      <Camera
        onCameraReady={prepareRatio}
        style={{ flex: 1 }}
        ratio={ratio}
        flashMode={Camera.Constants.FlashMode.off}
        type={type}
        ref={(ref) => {
          setCameraRef(ref);
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "flex-end",
          }}
        >
          <View style={cameraStyles.bottomContainer}>
            {/* Exit  Button*/}
            <TouchableOpacity
              style={cameraStyles.exitButton}
              icon="close"
              mode="outlined"
              color="white"
              onPress={() => {
                navigation.navigate("Create");
              }}
            >
              <Ionicons name="md-exit" size={35} color="white" />
            </TouchableOpacity>
            {/* Capture  Button*/}
            <TouchableOpacity
              style={cameraStyles.captureButton}
              onPress={async () => takePicture()}
            >
              {/* Style of the capture  Button*/}
              <View style={cameraStyles.outerButton}>
                <View style={cameraStyles.innerButton}></View>
              </View>
            </TouchableOpacity>
            {/* Flip Camera Button*/}
            <TouchableOpacity
              style={cameraStyles.reverseCam}
              icon="axis-z-rotate-clockwise"
              mode="outlined"
              color="white"
              onPress={() => flipCamera()}
            >
              {type === Camera.Constants.Type.back ? (
                <Ionicons name="camera-reverse-sharp" size={35} color="white" />
              ) : (
                <Ionicons name="camera-reverse-sharp" size={35} color="white" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </Modal>
  );
};

export default CapturePhotoScreen;

const cameraStyles = StyleSheet.create({
  captureButton: { margin: 20 },

  innerButton: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "white",
    height: 60,
    width: 60,
    backgroundColor: "white",
  },
  outerButton: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "white",
    height: 75,
    width: 75,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  exitButton: {
    marginLeft: 20,
  },
  reverseCam: { marginRight: 20 },
  bottomContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomContainerBlack: {
    backgroundColor: Colors.earthGreen,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  centerIconView: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 100,
    backgroundColor: Colors.navy,
    width: 80,
    height: 80,
    bottom: 2,
    marginTop: 0,
    alignSelf: "center",
  },
  centerIconBackground: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    width: 80,
    height: 80,
    borderRadius: 1000,
    backgroundColor: "transparent",
    zIndex: -10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1,
  },
});
