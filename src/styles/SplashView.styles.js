import { StyleSheet } from "react-native";
import { hp, wp } from "../helper/global";
import color from "../config/color";
import fontSize from "../config/fontSize";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: hp(10),
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: fontSize["19"],
    fontWeight: "400",
    color: color.gray,
  },
  appName: {
    fontSize: fontSize["30"],
    fontWeight: "bold",
    color: color.black,
  },
  image: {
    width: wp(85),
    height: hp(35),
  },
});
