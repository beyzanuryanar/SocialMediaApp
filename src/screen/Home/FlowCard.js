import React from "react";
import { FlatList, Image, TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../config/color";
import styles from '../../styles/FlowCard.styles';
import { getFlow } from '../../constant/mock';
import { isTablet } from "../../helper/global";
import { Title } from "../../component";
import StoryCard from "./StoryCard";


const UserButton =({name,title})=>(
  <TouchableOpacity style={styles.userButton}>
    <Icon name={name} size={isTablet?40:25} color={color.white}/>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
)

const Item = ({ item }) => (
  <View style={styles.container}>
    <Image
      source={{uri:item.image}}
      style={styles.image}
    />
    <View style={styles.descriptionContainer}>
      <View style={styles.imageContainer}>
        <View style={styles.postContainer}>
          <Image source={{uri:item.userPhoto}} style={styles.userImage} />
          <View style={styles.informationContainer}>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.date}>{item.postDate}</Text>
          </View>
        </View>
        <View style={styles.icon}>
          <Icon name={'dots-vertical'} color={color.white} size={30} />
        </View>
      </View>
    </View>
    <View style={styles.userButtonContainer}>
      <UserButton name={'heart-outline'} title={item.like}/>
      <UserButton name={'message-outline'} title={item.comment}/>
      <UserButton name={'bookmark-outline'} title={item.saved}/>
    </View>
  </View>
);

const FlowCard = () => {

  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    <View style={styles.flowList}>
      <FlatList
        data={getFlow}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={()=><><Title title={'Feed'}/>
          <StoryCard /></>}
      />
    </View>
  );
};

export default FlowCard;
