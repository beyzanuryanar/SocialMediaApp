import {StyleSheet} from 'react-native';
import { wp } from "../helper/global";
import fontSize from "../config/fontSize";

export default StyleSheet.create({
  container:{
    alignItems:'flex-end'
  },
  image:{
    width: wp(50),
    height: wp(50)
  },
  title:{
    fontSize:fontSize["20"],
    paddingRight:10
  },
  nextContainer:{
    flexDirection:'row',
    position:'absolute',
    fontWeight:'600',
    bottom:wp(14),
    right:wp(8),
  }
});
