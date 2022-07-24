import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/Header.styles";
import color from "../config/color";

const Header = ({ title, back, menu }) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={[styles.container, {
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }]}
    >
      {
        back ?
          <>
            <TouchableOpacity onPress={goBack}>
              <Icon name={"arrow-left"} size={25} color={color.black} />
            </TouchableOpacity>
            {
              menu && <TouchableOpacity onPress={goBack}>
                <Icon name={"menu"} size={25} color={color.black} />
              </TouchableOpacity>
            }
          </>
          :
          <>
            <Text style={styles.title}>{title}</Text>
            <Icon name={"bell"} size={25} color={color.black} />
          </>
      }
    </View>
  );
};

export default Header;
