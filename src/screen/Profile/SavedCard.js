import React from "react";
import { Image, View } from "react-native";
import styles from '../../styles/SavedCard.styles';
import { getUserInfo } from "../../constant/mock";

const SavedCard = () => {

  return (
    <View style={styles.container}>
      {
        getUserInfo[0].savedPhoto.map((item)=>(
          <Image
            key={item.id}
            source={{uri:item.image}}
            style={styles.image}
          />
        ))
      }
    </View>
  );
};

export default SavedCard;
