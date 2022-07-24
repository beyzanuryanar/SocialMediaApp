import {StyleSheet} from 'react-native';
import fontSize from "../config/fontSize";
import { isTablet } from "../helper/global";

export default StyleSheet.create({
  container:{
    borderRadius: isTablet?60:80,
    padding: 20,
    height: isTablet?120:80,
    marginHorizontal: 40,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor:'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  input:{
    flex: 1,
    textAlign: "center",
    fontSize: fontSize["18"]
  }

});
