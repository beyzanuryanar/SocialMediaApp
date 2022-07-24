import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
import styles from '../styles/SendButton.styles';
import color from "../config/color";
import { isTablet } from "../helper/global";

const SendButton = () => {
  return (
    <View style={styles.container} >
      <Icon style={styles.icon} name={'navigation-variant-outline'} color={color.white} size={isTablet?50:30} />
    </View>
  );
};

export default SendButton;
