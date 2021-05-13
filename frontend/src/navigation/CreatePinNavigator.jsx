import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CreatePinScreen from "../screens/main/CreatePinScreen";
import CapturePhotoScreen from "../screens/pin/CapturePhotoScreen";
import EditPhotoScreen from "../screens/pin/EditPhotoScreen";

const PinStack = createStackNavigator();

const CreatePinNavigator = ({}) => {
  return (
    <PinStack.Navigator>
      <PinStack.Screen name="Create" component={CreatePinScreen} />
      <PinStack.Screen name="Capture" component={CapturePhotoScreen} />
      {/** <PinStack.Screen name="EditPhoto" component={EditPhotoScreen} />*/}
    </PinStack.Navigator>
  );
};

export default CreatePinNavigator;
