import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "./HomeNavigation";
import MessageNavigation from "./MessageNavigation";
import ProfileNavigation from "./ProfileNavigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { Add, Favorite } from "../screen";
import color from "../config/color";
import CustomTabBarButton from "./CustomTabBarButton";

const Tab = createBottomTabNavigator();

function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        showLabel: false,
        borderTopRightRadius: 30,
      }}
    >
      <Tab.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name={"home"} size={25} color={focused ? color.primary : color.black} />
          ),
        }}
      />
      <Tab.Screen
        name="MessageNavigation"
        component={MessageNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name={"message-outline"} size={25} color={focused ? color.primary : color.black} />
          ),
          tabBarStyle: { display: 'none' }
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name={"plus-circle-outline"} size={25} color={color.white} />
          ),
          tabBarButton: (props) => (<CustomTabBarButton {...props} />),
        }} />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name={"heart-outline"} size={25} color={focused ? color.primary : color.black} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileNavigation"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name={"account-circle"} size={25} color={focused ? color.primary : color.black} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigation;

