import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MessageDetail} from '../screen';

const MessageDetailStack = createNativeStackNavigator();

function MessageDetailNavigation() {
  return (
    <MessageDetailStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MessageDetailStack.Screen name="MessageDetail" component={MessageDetail} />
    </MessageDetailStack.Navigator>
  );
}

export default MessageDetailNavigation;
