import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';
import img from '../assets/Group 1.png';
import { useNavigation } from '@react-navigation/native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const HomeScreen = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const calculateBMI = () => {
    setLoading(true); 
    setTimeout(() => {
      const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
      setBMI(bmiValue);
      setLoading(false); 
      navigation.navigate('Result', { bmi: bmiValue });
    }, 500); 
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <StyledView className='bg-blue-100 h-screen'>
        <StyledView className='m-10'>
          <StyledText className='text-xl pt-0'>Welcome😊</StyledText>
          <StyledText className='mt-2 text-3xl font-semibold'>BMI calculator</StyledText>
          <StyledText className='pl-16 text-2xl mt-5'>Check your <StyledText className='font-bold'>BMI</StyledText></StyledText>
          <StyledView className='flex justify-center'>
            <StyledText className='mt-3 text-2xl'>Enter Your Height (cm):</StyledText>
            <StyledTextInput className='border-2 border-black rounded-md pl-5'
              keyboardType="numeric"
              placeholder='Enter Your Height'
              value={height}
              onChangeText={(text) => setHeight(text)}
            />
          </StyledView>
          <StyledView className='pb-5 pt-5'>
            <StyledText className='pl-0 text-2xl'>Enter your Weight (kg):</StyledText>
            <StyledTextInput className='border-2 border-black rounded-md pl-5'
              keyboardType="numeric"
              placeholder='Enter Your weight'
              value={weight}
              onChangeText={(text) => setWeight(text)}
            />
          </StyledView>

          <TouchableOpacity
            style={{ backgroundColor: 'blue', borderRadius: 10, padding: 15, alignItems: 'center', marginHorizontal: 20, marginTop: 20 }}
            onPress={calculateBMI}
          >
            <StyledText style={{ color: 'white', fontSize: 18 }}>Calculate BMI</StyledText>
          </TouchableOpacity>

          <Spinner
            visible={loading}
            textContent={'Loading...'}
            textStyle={{ color: '#FFF' }}
          />
          <StyledView className='pl-20 h-60 w-60 mt-14'>
            <Image source={img} alt='image' />
          </StyledView>
        </StyledView>
      </StyledView>
    </ScrollView>
  );
};

export default withExpoSnack(HomeScreen);
