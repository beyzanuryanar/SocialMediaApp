import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigation from "./AuthNavigation";
import AppNavigation from "./AppNavigation";
import MessageDetailNavigation from "./MessageDetailNavigation";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        <Stack.Screen name="AppNavigation" component={AppNavigation} />
        <Stack.Screen name="MessageDetailNavigation" component={MessageDetailNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
