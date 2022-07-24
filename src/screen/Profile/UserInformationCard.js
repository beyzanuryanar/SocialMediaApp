import React, { useEffect, useRef } from "react";
import { Animated, Image, Text, View } from "react-native";
import styles from '../../styles/UserInformationCard.styles'
import { getUserInfo } from "../../constant/mock";

const UserInformationCard = () => {
  const translation = useRef(
    new Animated.Value(100),
  ).current;

  useEffect(() => {
    Animated.spring(translation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container,{transform: [{ translateX: translation }]}]}>
      <View style={styles.imageContainer}>
        <Image source={{uri:getUserInfo[0].image}}
               style={styles.image}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.name}>{getUserInfo[0].name}</Text>
        <Text style={styles.username}>{getUserInfo[0].username}</Text>
      </View>
    </Animated.View>
  );
};

export default UserInformationCard;
