import {StyleSheet} from 'react-native';
import color from "../config/color";
import fontSize from "../config/fontSize";

export default StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:20
  },
  title:{
    color: color.black,
    fontSize: fontSize["20"],
    fontWeight: "bold"
  }
});
