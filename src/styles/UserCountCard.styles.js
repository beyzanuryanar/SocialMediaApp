import {StyleSheet} from 'react-native';
import { hp } from "../helper/global";
import fontSize from "../config/fontSize";
import color from "../config/color";

export default StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:hp(7)
  },
  itemContainer:{
    alignItems:'center'
  },
  title:{
    color:color.gray,
    fontSize:fontSize["18"]
  },
  count:{
    paddingTop:10,
    fontWeight:'bold',
    fontSize:fontSize["22"],
    color:color.black
  }
});
