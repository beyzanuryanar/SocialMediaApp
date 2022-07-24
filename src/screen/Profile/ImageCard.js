import React from "react";
import { Image, View } from "react-native";
import styles from '../../styles/ImageCard.styles'
import { getUserInfo } from "../../constant/mock";

const ImageCard = () => {

  return (
    <View style={styles.container}>
      {
        getUserInfo[0].imagePhoto.map((item)=>(
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

export default ImageCard;
