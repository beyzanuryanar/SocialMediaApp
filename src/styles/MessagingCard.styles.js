import {StyleSheet} from 'react-native';
import fontSize from "../config/fontSize";
import { hp } from "../helper/global";
import color from "../config/color";

export default StyleSheet.create({
  container:{
    flex:1,
  },
  messageContainer:{
    margin:10
  },
  incoming:{
    alignItems:'flex-start',
    borderTopRightRadius:20,
    backgroundColor:'#fafafa',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    minWidth:'60%',
    maxWidth:'80%',
    left:10
  },
  incomingMessage:{
    paddingVertical:10,
    paddingHorizontal:20,
    fontSize:fontSize["17"],
    color:color.black
  },
  send:{
    alignItems:'flex-end',
    borderTopLeftRadius:20,
    backgroundColor:'#fafafa',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    right:10,
  },
  sendMessage:{
    paddingVertical:10,
    paddingHorizontal:20,
    fontSize:fontSize["17"],
    color:color.black
  }
});
