import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Profile} from '../screen';

const ProfileStack = createNativeStackNavigator();

function ProfileNavigation() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="Profile" component={Profile} />

    </ProfileStack.Navigator>
  );
}

export default ProfileNavigation;
