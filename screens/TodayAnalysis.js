import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';


// Styled components using nativewind
const SView = styled(View);
const SText = styled(Text);
const SImage = styled(Image);
const STouchableOpacity = styled(TouchableOpacity);
const SScrollView = styled(ScrollView);

const TodayAnalysis = ({ navigation }) => {
  return (
    <SView className="pt-14 bg-slate-300 flex-1">
      <SView className="border-black my-6 mx-3 h-14 border-solid items-center flex flex-row justify-evenly rounded-xl bg-white pr-16">
        <STouchableOpacity className="pr-5">
          <SImage source={require('../assets/appIMG/arrow_back.png')} />
        </STouchableOpacity>
        <SText className="font-bold text-2xl">Today Analysis</SText>
      </SView>
    </SView>
  );
};

export default withExpoSnack(TodayAnalysis);
