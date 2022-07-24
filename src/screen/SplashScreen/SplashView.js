import React,{useEffect,useRef} from "react";
import { Animated, Image, Text, View } from "react-native";
import styles from '../../styles/SplashView.styles'

const SplashView = ({index}) => {

  const translation = useRef(
    new Animated.Value(100)
  ).current;

  useEffect(()=>{
    Animated.spring(translation,{
      toValue:0,
      useNativeDriver:true
    }).start()
  },[])

  return (
    <View style={[styles.container]}>
      <Animated.View style={[styles.titleContainer,{transform: [{ translateX: translation }]}]}>
        <Text style={styles.title}>Welcome To</Text>
        <Text style={styles.appName}>Socially</Text>
      </Animated.View>
      <Animated.View style={[{transform: [{ translateX: translation }]}]}>
        <Image
          style={styles.image}
          source={index===1?require('../../asset/Frame.png'):require('../../asset/Hero.png')}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
};

export default SplashView;
