import {StyleSheet} from 'react-native';
import { hp } from "../helper/global";

export default StyleSheet.create({
  scrollContainer:{
    flex:1,
    backgroundColor:'white'
  },
  container:{
    margin:7,
  },
  image:{
    height: hp(30),
    borderRadius:35,
    width:'100%'
  },
  position:{
    position:'absolute'
  }
});
