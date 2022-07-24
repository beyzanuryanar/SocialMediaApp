import React from "react";
import { Header, Layout, SendButton } from "../../component";
import { View } from "react-native";
import MessageCard from "./MessageCard";
import styles from '../../styles/Message.styles';

const Message = ({navigation}) => {
  return (
    <Layout source={require('../../asset/Conversations.png')}>
      <Header menu back/>
      <View style={styles.container}>
        <MessageCard navigation={navigation}/>
        <View style={styles.buttonContainer}>
          <SendButton/>
        </View>
      </View>
    </Layout>
  );
};

export default Message;
