import {StyleSheet} from 'react-native';
import { isTablet } from "../helper/global";

export default StyleSheet.create({
  container:{
    width: isTablet?100:60,
    height: isTablet?100:60,
    borderRadius: isTablet?43:23,
    backgroundColor: "black",
    transform: [{ rotate: "40deg" }],
    alignItems:'center',
    justifyContent:'center'
  },
  icon:{
    transform: [{ rotate: "320deg" }]
  }
});
