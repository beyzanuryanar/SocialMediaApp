import React from "react";
import { View, ScrollView } from "react-native";
import { Layout } from "../../component";
import Header from "../../component/Header";
import UserInformationCard from "./UserInformationCard";
import UserCountCard from "./UserCountCard";
import UserPhotoCard from "./UserPhotoCard";
import styles from '../../styles/Profile.styles'

const Profile = () => {
  return (
    <Layout source={require('../../asset/Profile.png')}>
      <Header back/>
      <ScrollView>
        <UserInformationCard/>
        <UserCountCard/>
        <View style={styles.container}>
          <UserPhotoCard/>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Profile;
