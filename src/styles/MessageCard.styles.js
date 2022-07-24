import {StyleSheet} from 'react-native';
import color from "../config/color";
import fontSize from "../config/fontSize";

export default StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:"rgba(255,255,255,0.6)",
    borderRadius:33,
    marginVertical:10
  },
  descriptionContainer:{
    flex:1,
    padding:20
  },
  username:{
    color:color.black,
    fontSize:fontSize["17"]
  },
  message:{
    color:color.gray,
    fontSize:fontSize["17"],
    flexWrap:'wrap'
  }
});
