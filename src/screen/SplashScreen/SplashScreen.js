import React, { useState } from "react";
import NextButton from "./NextButton";
import DotPagination from "./DotPagination";
import SplashView from "./SplashView";
import { Layout } from "../../component";

const SplashScreen = ({navigation}) => {
  const [index, setIndex]=useState(0);

  const handleNext = () => {
    if(index<=1){
      setIndex(index+1)
    }else{
      navigation.navigate('AppNavigation')
    }
  }

  return (
    <Layout source={require('../../asset/Splashv1.png')}>
      <SplashView index={index}/>
      <DotPagination index={index} />
      <NextButton onPress={handleNext} index={index}/>
    </Layout>
  );
};

export default SplashScreen;
