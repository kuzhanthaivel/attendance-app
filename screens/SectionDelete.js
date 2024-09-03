import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';

// Styled components using nativewind
const SView = styled(View);
const SText = styled(Text);
const SImage = styled(Image);
const STouchableOpacity = styled(TouchableOpacity);


const SectionDelete = ({ navigation }) => {
  return (
    <SView className='pt-14 bg-slate-300 flex-1'>
      <STouchableOpacity className='border-black my-6 mx-3 h-14 border-solid items-center flex flex-row justify-evenly rounded-xl bg-white pr-16 '>
      <STouchableOpacity className='pr-5'> 
          <SImage 
            source={require('../assets/appIMG/arrow_back.png')}
          />
          </STouchableOpacity>
        <SText className='font-bold text-2xl'>Select section </SText>
      </STouchableOpacity>

      <STouchableOpacity
      className='mx-6 mt-28 h-40 border-solid items-center flex flex-row justify-evenly rounded-xl bg-slate-100  '>
      <SImage 
            source={require('../assets/appIMG/Alert.png')}
          />
        <SText className='font-bold text-xl text-center'>WOULD YOU LIKE TO DELETE STUDENTS DETAILS ?</SText>
      </STouchableOpacity>
      {/*onPress={() => navigation.navigate('Details')}*/}

      <SView className='flex flex-row justify-evenly  '>
      <STouchableOpacity
        className='mx-6 mt-12 h-14 w-28  border-solid items-center flex justify-evenly rounded-xl bg-green-500'
        >
        <SText className='font-bold text-xl'>Cancel</SText>
        </STouchableOpacity>
        <STouchableOpacity
        className='mx-6 mt-12 h-14 w-28  border-solid items-center flex justify-evenly rounded-xl bg-red-500'
        >
        <SText className='font-bold text-xl'>Delete</SText>
        </STouchableOpacity>
      </SView>
    </SView>
  )
}

export default withExpoSnack(SectionDelete);