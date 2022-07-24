import React from "react";
import { Image, View } from "react-native";
import styles from '../styles/UserProfil.styles';

const UserProfil = ({source}) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

export default UserProfil;
