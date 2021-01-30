import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";
import HomeScreen from "../screens/main/HomeScreen";
import SearchScreen from "../screens/main/SearchScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import ActivityScreen from "../screens/user/ActivityScreen";
import CreatePinScreen from "../screens/main/CreatePinScreen";

import Colors from "../constants/Colors";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

let iconSize = 25;
let bigIconSize = 50;
const BottomTabNavigator = ({}) => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        activeTintColor: Colors.pink,
        indicatorStyle: {
          borderBottomColor: Colors.navy,
          borderBottomWidth: 2,
        },
        inactiveTintColor: Colors.greenLight,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-home"
              color={color}
              size={focused ? iconSize * 1.25 : iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-search-sharp"
              color={color}
              size={focused ? iconSize * 1.25 : iconSize}
            />
          ),
          tabBarBadge: null,
        }}
      />
      <Tab.Screen
        name="AddPin"
        component={CreatePinScreen}
        options={{
          tabBarLabel: "Add Pin",
          //https://github.com/entria/react-native-view-overflow#manual-installation
          tabBarIcon: ({ color, size, focused }) => (
            <View style={tabStyles.centerIconView}>
              <AntDesign
                name="pluscircle"
                color={color}
                style={tabStyles.iconStyle}
                size={focused ? bigIconSize * 1.25 : bigIconSize}
              />
              <View style={tabStyles.centerIconBackground}></View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Heart"
        component={HomeScreen}
        options={{
          tabBarLabel: "Favs",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-heart-sharp"
              color={color}
              size={focused ? iconSize * 1.25 : iconSize}
            />
          ),
          tabBarBadge: null,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name="user-circle"
              color={color}
              size={focused ? iconSize * 1.25 : iconSize}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const tabStyles = StyleSheet.create({
  iconStyle: {
    zIndex: -10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
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
    backgroundColor: "white",
    zIndex: -10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1,
  },
});
