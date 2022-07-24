import React, { useEffect, useRef } from "react";
import { UserProfil } from "../../component";
import { Animated, Text, View } from "react-native";
import styles from '../../styles/UserInformation.styles'

const UserInformation = ({source}) => {
  const translation = useRef(
    new Animated.Value(-200),
  ).current;

  useEffect(() => {
    Animated.spring(translation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container,{transform: [{ translateX: translation }]}]}>
      <UserProfil source={source}/>
      <View style={styles.descriptionContainer}>
        <Text style={styles.name}>Charlie Kelly</Text>
        <Text style={styles.status}>Online</Text>
      </View>
    </Animated.View>
  );
};

export default UserInformation;
