import {StyleSheet} from 'react-native';
import color from "../config/color";
import { hp } from "../helper/global";

export default StyleSheet.create({
  container:{
    shadowColor: color.black,
    margin:20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    height:hp(6),
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:color.white,
    borderRadius:15
  },
  icon:{
    paddingHorizontal:10
  }
});
