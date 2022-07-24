import {StyleSheet} from 'react-native';
import { isTablet } from "../helper/global";
import color from "../config/color";

export default StyleSheet.create({
  container:{
    flexDirection:'row'
  },
  image:{
    width:isTablet?100:55,
    height:isTablet?100:55,
    borderRadius:isTablet?50:27.5,
    margin:10
  },
  itemImage:{
    width:isTablet?100:55,
    height:isTablet?100:55,
    borderRadius:isTablet?50:27.5,
    margin:10,
    borderWidth:2,
    borderColor:color.secondary
  }
});
