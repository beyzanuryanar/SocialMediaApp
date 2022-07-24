import React from "react";
import { FlatList, View, Text } from "react-native";
import styles from'../../styles/MessagingCard.styles';
import { getMessageDetail } from "../../constant/mock";


const Item = ({ item }) => {
  return (
    <View style={[styles.messageContainer,{alignItems:item.messageType===0?'flex-start':'flex-end'}]}>
      {
        item.messageType===0?
          <View style={styles.incoming}>
            <Text style={styles.incomingMessage}>{item.description}</Text>
          </View>
          :
          <View style={styles.send}>
            <Text style={styles.sendMessage}>{item.description}</Text>
          </View>
      }
    </View>
  );
};

const MessagingCard = () => {

  const renderItem = ({ item }) => (
    <Item
      item={item}
    />
  );

  return (
    <View style={styles.container}>
      {
        getMessageDetail.map((item)=>(
          <View key={item.id} style={[styles.messageContainer,{alignItems:item.messageType===0?'flex-start':'flex-end'}]}>
            {
              item.messageType===0?
                <View style={styles.incoming}>
                  <Text style={styles.incomingMessage}>{item.description}</Text>
                </View>
                :
                <View style={styles.send}>
                  <Text style={styles.sendMessage}>{item.description}</Text>
                </View>
            }
          </View>
        ))
      }
    </View>
  );
};

export default MessagingCard;
