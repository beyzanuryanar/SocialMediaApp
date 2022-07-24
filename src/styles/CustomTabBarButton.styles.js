import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container:{
    width: 60,
    height: 60,
    borderRadius: 23,
    backgroundColor: "black",
    transform: [{ rotate: "40deg" }],
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
  },
  icon:{
    transform: [{ rotate: "320deg" }]
  }
});
