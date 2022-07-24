import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Message, MessageDetail} from '../screen';

const MessageStack = createNativeStackNavigator();

function MessageNavigation() {
  return (
    <MessageStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MessageStack.Screen name="Message" component={Message} />
    </MessageStack.Navigator>
  );
}

export default MessageNavigation;
