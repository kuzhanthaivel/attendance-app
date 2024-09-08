import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';

// Styled components using nativewind
const SView = styled(View);
const SText = styled(Text);
const SImage = styled(Image);
const STouchableOpacity = styled(TouchableOpacity);

const SectionMenu = ({ }) => {
    const navigation = useNavigation(); 
  return (
    <SView className='pt-14 bg-slate-300 flex-1'>
      <STouchableOpacity className='border-black my-6  mx-3 h-14 border-solid items-center flex flex-row justify-evenly  rounded-xl bg-white pr-16 '>
      <STouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : console.log('No screen to go back to')} className='pr-5'> 
          <SImage 
            source={require('../assets/appIMG/arrow_back.png')}
          />
          </STouchableOpacity>
        <SText className='font-bold text-2xl'>Select from the menu </SText>
      </STouchableOpacity>

      <STouchableOpacity onPress={() => navigation.navigate('todayattendance')}
      className='mx-6 mt-43 h-24 border-solid items-center flex flex-row justify-evenly rounded-xl bg-slate-100 '>
        <SText className='font-bold text-2xl'>today attendance</SText>
      </STouchableOpacity>

      <STouchableOpacity onPress={() => navigation.navigate('todayanalysis')}
      className='mx-6 mt-3 h-24 bg-slate-100 border-solid items-center flex flex-row justify-evenly rounded-xl'>
        <SText className='font-bold text-2xl'>Today attandance analysis</SText>
      </STouchableOpacity>

      <STouchableOpacity onPress={() => navigation.navigate('yesterdayanalysis')}
       className='mx-6 mt-4 h-24 border-solid items-center flex flex-row justify-evenly rounded-xl bg-slate-100 '>
        <SText className='font-bold text-2xl'>Yesterday attandance analysis</SText>
      </STouchableOpacity>

      <STouchableOpacity onPress={() => navigation.navigate('overallanalysis')}
      className='mx-6 mt-3 h-24 bg-slate-100 border-solid items-center flex flex-row justify-evenly rounded-xl'>
        <SText className='font-bold text-2xl'>Overall attandance analysis</SText>
      </STouchableOpacity>

      <STouchableOpacity onPress={() => navigation.navigate('report')}
      className='mx-6 mt-3 h-24 bg-slate-100 border-solid items-center flex flex-row justify-evenly rounded-xl'>
        <SText className='font-bold text-2xl'>Report</SText>
      </STouchableOpacity>
      {/*onPress={() => navigation.navigate('Details')}*/}
      
    </SView>
  );
}

export default withExpoSnack(SectionMenu);