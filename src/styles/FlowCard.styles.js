import { StyleSheet } from "react-native";
import fontSize from "../config/fontSize";
import { isTablet } from "../helper/global";

export default StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 20,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: isTablet?500:300,
    borderRadius: 20,
  },
  descriptionContainer: {
    position: "absolute",
    marginVertical: 10,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    justifyContent: "space-between",
  },
  postContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  informationContainer: {
    paddingLeft: 10,
  },
  username: {
    color: "white",
    fontWeight: "500",
    fontSize:fontSize["18"]
  },
  date: {
    color: "#b8b3b3",
    fontSize:fontSize["16"]
  },
  icon: {
    alignItems: "flex-end",
  },
  userButtonContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: 20,
    justifyContent: "space-evenly",
    width: "100%",
  },
  userButton: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "rgba(119,115,115,0.8)",
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  title: {
    color: "white",
    paddingLeft: 5,
    fontSize:fontSize["16"]
  },
  flowList: {
    flex: 1,
  },
});
