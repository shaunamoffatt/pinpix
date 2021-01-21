import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-native";
import logo from "./assets/logo.png";
import "react-native-gesture-handler";


import StartNavigator from './navigation/StartNavigator';

export default function App() {
  return (
    <StartNavigator/>
  );
};
