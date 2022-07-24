import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from '../../styles/NextButton.styles'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../config/color";

const NextButton = ({onPress,index}) => {
  return(
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        style={styles.image}
        source={index===1?require('../../asset/Button-next-v2.png'):require('../../asset/Button-next.png')}
      />
      <View style={styles.nextContainer}>
        <Text style={[styles.title,{color:index===1?color.black:color.white}]}>Next</Text>
        <Icon name={'arrow-right'} color={index===1?color.black:color.white} size={25} />
      </View>
    </TouchableOpacity>
  )
}

export default NextButton
