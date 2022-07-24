import {StyleSheet} from 'react-native';
import fontSize from "../config/fontSize";
import color from "../config/color";

export default StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'space-evenly',
    marginTop: 10
  },
  imageContainer:{
    alignItems:'center',
    justifyContent:'center',
    width:102,
    height:102,
    borderRadius:35,
    borderWidth:1,
    transform: [{ rotate: '50deg' }]
  },
  image:{
    margin:10,
    width:90,
    height:90,
    borderRadius:35
  },
  descriptionContainer:{
    marginTop:30,
    alignItems:'center'
  },
  name:{
    fontWeight:'bold',
    fontSize:fontSize["20"],
    color:color.black
  },
  username:{
    paddingTop:10,
    fontSize:fontSize["18"],
    color:color.gray
  }
});
