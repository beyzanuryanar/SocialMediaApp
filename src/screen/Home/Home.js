import React  from "react";
import Header from "../../component/Header";
import { View } from "react-native";
import { Layout } from "../../component";
import FlowCard from "./FlowCard";
import styles from '../../styles/Home.styles';

const Home = () => {
  return (
    <Layout source={require("../../asset/Homepage.png")}>
      <Header title={"Socially"} />
      <View style={styles.container}>
        <FlowCard/>
      </View>
    </Layout>
  );
};

export default Home;
