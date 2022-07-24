import React from "react";
import { ImageBackground, View } from "react-native";
import styles from '../styles/Layout.styles'

const Layout = ({children, source, color}) => {
  return (
    <View style={[styles.container,{backgroundColor:color}]}>
      <ImageBackground source={source} resizeMode="cover" style={styles.container}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default Layout;
