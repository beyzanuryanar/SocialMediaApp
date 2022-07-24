import { StyleSheet } from "react-native";
import { wp } from "../helper/global";
import color from "../config/color";
import fontSize from "../config/fontSize";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: wp(20),
    justifyContent:'center'
  },
  descriptionContainer: {
    marginHorizontal: 12,
    alignItems: "center",
  },
  name:{
    fontSize: fontSize["20"],
    color:color.black
  },
  status:{
    fontSize: fontSize["18"],
    color: "gray",
    marginTop: 10
  }
});
