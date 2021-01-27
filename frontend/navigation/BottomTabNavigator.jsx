import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainStackNavigator from "./RootNavigator";
import CreatePinNavigator from "./RootNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Create" component={CreatePinNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
