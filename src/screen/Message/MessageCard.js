import React from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";
import { Title, UserProfil } from "../../component";
import styles from '../../styles/MessageCard.styles';
import {getMessage} from '../../constant/mock';
import InputCard from "./InputCard";

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={{padding:10,flexDirection:'row'}}>
      <UserProfil source={{uri:item.image}}/>
      <View style={styles.descriptionContainer}>
        <Text style={styles.username}>{item.username}</Text>
        <Text numberOfLines={2} style={styles.message}>{item.message}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const MessageCard = ({navigation}) => {

  const renderItem = ({ item }) => (
    <Item
      item={item}
      onPress={()=>navigation.navigate('MessageDetailNavigation',{screen: 'MessageDetail',params:{image:item.image}})}
    />
  );

  return (
    <FlatList
      data={getMessage}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={()=><><Title title={'Messages'}/>
        <InputCard/></>}
    />
  );
};

export default MessageCard;
