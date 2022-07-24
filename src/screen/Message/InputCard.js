import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TextInput, View } from "react-native";
import color from "../../config/color";
import styles from '../../styles/InputCard.styles';
import { isTablet } from "../../helper/global";
import fontSize from "../../config/fontSize";

const InputCard = () => {
  return (
    <View style={styles.container}>
      <Icon name={'magnify'} size={isTablet?50:30} color={color.black} style={styles.icon} />
      <TextInput
        placeholder="Search for contacts"
        style={{fontSize:fontSize["17"]}}
      />
    </View>
  );
};

export default InputCard;
