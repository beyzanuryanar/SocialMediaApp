import React, { useEffect, useRef } from "react";
import { Animated, Text } from "react-native";
import styles from "../styles/Title.styles";

const Title = ({ title }) => {
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
    <Animated.View style={{ transform: [{ translateX: translation }] }}>
      <Text style={styles.title}>{title}</Text>
    </Animated.View>
  );
};

export default Title;
