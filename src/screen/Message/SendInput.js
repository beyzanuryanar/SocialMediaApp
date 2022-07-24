import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { SendButton } from "../../component";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "../../styles/SendInput.styles";

const SendInput = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { marginBottom: insets.bottom > 0 ? insets.bottom : 20 }]}>
      <TextInput style={styles.input} placeholder="Write a message" />
      <SendButton />
    </View>
  );
};

export default SendInput;
