import React from "react";
import { Header } from "../../component";
import MessagingCard from "./MessagingCard";
import SendInput from "./SendInput";
import UserInformation from "./UserInformation";
import { View, Image} from "react-native";
import styles from "../../styles/MessageDetail.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const MessageDetail = ({ route }) => {
  const { image } = route.params;
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../../asset/Message-user-bg.png")} />
        <View style={styles.position}>
          <Header back />
          <UserInformation source={{ uri: image }} />
        </View>
      </View>
      <MessagingCard />
      <SendInput />
    </KeyboardAwareScrollView>
  );
};

export default MessageDetail;
