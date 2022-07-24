import React from "react";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import styles from '../../styles/StoryCard.styles';
import { getStory } from '../../constant/mock'

const Item = ({ item }) => (
  <Image
    source={{uri:item.image}}
    style={styles.itemImage}
  />
);

const HeaderItem = ({onPress}) =>(
  <TouchableOpacity onPress={onPress}>
    <Image
      source={require('../../asset/Button.png')}
      style={styles.image}
    />
  </TouchableOpacity>
)

const StoryCard = () => {

  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  const ListHeaderComponent = () => (
    <HeaderItem onPress={null}/>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={getStory}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};

export default StoryCard;
