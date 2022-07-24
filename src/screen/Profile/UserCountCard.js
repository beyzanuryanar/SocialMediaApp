import React from "react";
import { Text, View } from "react-native";
import styles from '../../styles/UserCountCard.styles';
import { getUserInfo } from "../../constant/mock";

const UserCountItem =({title, count})=>(
  <View style={styles.itemContainer}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.count}>{count}</Text>
  </View>
)

const UserCountCard = () => {
  return (
    <View style={styles.container}>
      <UserCountItem title={"Posts"} count={getUserInfo[0].postCount}/>
      <UserCountItem title={"Followers"} count={getUserInfo[0].followersCount}/>
      <UserCountItem title={"Follows"} count={getUserInfo[0].followsCount}/>
    </View>
  );
};

export default UserCountCard;
