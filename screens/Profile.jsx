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

function Profile() {
  // State to control visibility of login button and student count section
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle the Google Login click
  const handleLogin = () => {
    // Set state to logged in
    setIsLoggedIn(true);
  };

  return (
    <SView className='pt-14 bg-slate-300 flex-1'>
      {/* Header Section */}
      <SView className='border-black pr-10 my-6 mx-3 h-14 border-solid items-center flex flex-row justify-evenly rounded-xl bg-white '>
        <STouchableOpacity>
          <SImage 
            source={require('../assets/appIMG/arrow_back.png')}
          />
        </STouchableOpacity>
        <SText className='font-bold text-2xl'>Profile</SText>
      </SView>

      {/* Conditionally render the Login Button or the Student Count Section */}
      {!isLoggedIn ? (
        // Google Login Button
        <STouchableOpacity 
          className='mx-6 mt-3 p-3 bg-slate-100 border-solid items-center flex flex-row justify-evenly rounded-xl'
          onPress={handleLogin}
        >
          <SText>Log In With Google</SText>
          <SImage 
            className='h-7 w-7'
            source={require('../assets/appIMG/google.png')}
          />
        </STouchableOpacity>
      ) : (
        // Student Count Section
        <SView className='mx-6 mt-3 p-3 bg-slate-100 border-solid flex flex-col justify-evenly rounded-xl'>
          <SText className='font-bold text-2xl underline'>Student count...</SText>
          <SScrollView className='space-y-3'>
            {/* First Year */}
            <SView className='px-3'>
              <SText className='font-bold text-xl underline'>I year</SText>
              <SView className='px-3'>
                <SText className='font-semibold text-lg '>Absence: </SText>
                <SText className='font-semibold text-lg '>Present: </SText>
                <SText className='font-semibold text-lg '>Total: </SText>
              </SView>
            </SView>
            
            {/* Second Year */}
            <SView className='px-3'>
              <SText className='font-bold text-xl underline'>II year</SText>
              <SView className='px-3'>
                <SText className='font-semibold text-lg '>Absence: </SText>
                <SText className='font-semibold text-lg '>Present: </SText>
                <SText className='font-semibold text-lg '>Total: </SText>
              </SView>
            </SView>
            
            {/* Third Year */}
            <SView className='px-3'>
              <SText className='font-bold text-xl underline'>III year</SText>
              <SView className='px-3'>
                <SText className='font-semibold text-lg '>Absence: </SText>
                <SText className='font-semibold text-lg '>Present: </SText>
                <SText className='font-semibold text-lg '>Total: </SText>
              </SView>
            </SView>
            
            {/* Fourth Year */}
            <SView className='px-3'>
              <SText className='font-bold text-xl underline'>IV year</SText>
              <SView className='px-3 '>
                <SText className='font-semibold text-lg '>Absence: </SText>
                <SText className='font-semibold text-lg '>Present: </SText>
                <SText className='font-semibold text-lg '>Total: </SText>
              </SView>
            </SView>
          </SScrollView>
        </SView>
      )}
    </SView>
  );
}

export default withExpoSnack(Profile);
