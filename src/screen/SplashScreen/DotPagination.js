import React from "react";
import { View } from "react-native";
import styles from '../../styles/DotPagination.styles'

const DotPagination = ({index}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.dot,{backgroundColor:index===0?'black':'white'}]}/>
      <View style={[styles.dot,{backgroundColor:index===1?'black':'white'}]}/>
      <View style={[styles.dot,{backgroundColor:index===2?'black':'white'}]}/>
    </View>
  );
};

export default DotPagination;
