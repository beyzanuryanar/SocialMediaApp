import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../config/color";
import styles from "../styles/CustomTabBarButton.styles";

const CustomTabBarButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon style={styles.icon} name={"plus-circle-outline"} color={color.white} size={30} />
    </TouchableOpacity>
  );
};

export default CustomTabBarButton;
