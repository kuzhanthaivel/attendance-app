import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';

// Styled components using nativewind
const SView = styled(View);
const SText = styled(Text);
const SImage = styled(Image);
const STouchableOpacity = styled(TouchableOpacity);
const STextInput = styled(TextInput); 


const AddStudent = ({ navigation }) => {

  const [studentName, setStudentName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  return (
    <SView className='pt-14 bg-slate-300 flex-1'>
      <SView className='border-black my-2 mx-3 h-14 border-solid items-center flex flex-row justify-evenly rounded-xl bg-white pr-16 '>
      <STouchableOpacity className='pr-5'> 
          <SImage 
            source={require('../assets/appIMG/arrow_back.png')}
          />
          </STouchableOpacity>
        <SText className='font-bold text-2xl'>Add student </SText>
      </SView>
      <SView className=''>
      <SImage className='w-full ' 
      source={require('../assets/appIMG/st add.png')}
      />
      </SView>
      

      <SView
      className='mx-6 mt-8 h-48 border-solid p-5 flex flex-col justify-evenly rounded-xl bg-slate-100  '>
          <SView className='flex flex-col  gap-4'>
          <SText className='font-bold text-xl  '>Student Name:</SText>
          <STextInput
          className='item-center pl-8'
            placeholder='Enter Student Name'
            value={studentName}
            onChangeText={setStudentName}
          />
          </SView>
          <SView className='flex flex-col gap-4 text-left '>
          <SText className='font-bold text-xl'>Registration Number:</SText>
          <STextInput className='item-center pl-8'
          placeholder='Enter Registration Number'
          value={registrationNumber}
          onChangeText={setRegistrationNumber}
          />
          </SView>
          
          
      </SView>
      {/*onPress={() => navigation.navigate('Details')}*/}

      <SView className='flex flex-row justify-evenly  '>
      <STouchableOpacity
        className='mx-6 mt-12 h-14 w-28 border-solid items-center flex justify-evenly rounded-xl bg-green-500'
        >
        <SText className='font-bold text-xl'>Cancel</SText>
        </STouchableOpacity>
        <STouchableOpacity
        className='mx-6 mt-12 h-14 w-28 border-solid items-center flex justify-evenly rounded-xl bg-red-500'
        >
        <SText className='font-bold text-xl'>Add</SText>
        </STouchableOpacity>
      </SView>
    </SView>
  )
}

export default withExpoSnack(AddStudent);





