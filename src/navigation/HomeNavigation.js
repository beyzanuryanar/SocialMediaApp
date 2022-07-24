import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screen';

const HomeStack = createNativeStackNavigator();

function HomeNavigation() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />

    </HomeStack.Navigator>
  );
}

export default HomeNavigation;
