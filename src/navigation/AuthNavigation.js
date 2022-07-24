import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from "../screen";

const AuthStack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />

    </AuthStack.Navigator>
  );
}

export default AuthNavigation;
