import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ImageCard from "./ImageCard";
import SavedCard from "./SavedCard";
import styles from '../../styles/UserPhotoCard.styles';
import color from "../../config/color";

const UserPhotoCard = () => {
  return (
    <>
      <View style={styles.container}>
        <View  style={styles.iconContainer}>
          <Icon name={'image-outline'} color={color.black} size={30}/>
        </View>
        <ImageCard/>
      </View>
      <View style={styles.container}>
        <View  style={styles.iconContainer}>
          <Icon name={'bookmark-outline'} color={color.black} size={30}/>
        </View>
        <SavedCard/>
      </View>
    </>
  );
};

export default UserPhotoCard;
