import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';
import { useNavigation } from '@react-navigation/native';

// Styled components using nativewind
const SView = styled(View);
const SText = styled(Text);
const SImage = styled(Image);
const STouchableOpacity = styled(TouchableOpacity);
const SScrollView = styled(ScrollView);

const SectionEdit = ({ }) => {
  const navigation = useNavigation();
  return (
    <SView className='pt-14 bg-slate-300 flex-1 '>

      <SView className='border-black my-6 mx-3 h-14 border-solid items-center flex flex-row justify-evenly rounded-xl bg-white pr-16 '>
      <STouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : console.log('No screen to go back to')} className='pr-5'> 
          <SImage 
            source={require('../assets/appIMG/arrow_back.png')}
          />
          </STouchableOpacity>
        <SText className='font-bold text-2xl'>Section Edit</SText>
      </SView>
     <SScrollView
     showsVerticalScrollIndicator={false} 
     showsHorizontalScrollIndicator={false}
     >
      <SView
      className='mx-6 mt-5 h-24 border-solid items-center flex flex-row justify-evenly rounded-xl bg-slate-200'>
        
        <SImage className='h-20 w-20'
        source={require('../assets/appIMG/st profile.png')}
        />
        <SView  className='flex justify-start items-start'>
        <SText className='text-base font-extrabold text-center'>110821104044</SText>
        <SText className='font-bold text-sm text-center'>John Doe</SText>
        </SView>
        
        <STouchableOpacity><SImage 
      source={ require('../assets/appIMG/delete.png')}
      /></STouchableOpacity>
      </SView>
      
      <SView
      className='mx-6 mt-4 h-24 border-solid items-center flex flex-row justify-evenly rounded-xl bg-slate-200'>
        <SImage className='h-20 w-20'
        source={require('../assets/appIMG/st profile.png')}
        />
        <SView  className='flex justify-start items-start'>
        <SText className='text-base font-extrabold text-center'>110821104047</SText>
        <SText className='font-bold text-sm text-center'>manikandan</SText>
        </SView>
        <STouchableOpacity><SImage 
      source={ require('../assets/appIMG/delete.png')}
      /></STouchableOpacity>
      </SView>

      <SView
      className='mx-6 mt-4 h-24 border-solid items-center flex flex-row justify-evenly rounded-xl bg-slate-200'>
        <SImage className='h-20 w-20'
        source={require('../assets/appIMG/st profile.png')}
        />
        <SView  className='flex justify-start items-start'>
        <SText className='text-base font-extrabold text-center'>110821104025</SText>
        <SText className='font-bold text-sm text-center'>prashant</SText>
        </SView>
        <STouchableOpacity><SImage 
      source={ require('../assets/appIMG/delete.png')}
      /></STouchableOpacity>
      </SView>

      <SView
      className='mx-6 mt-4 h-24 border-solid items-center flex flex-row justify-evenly rounded-xl bg-slate-200'>
        <SImage className='h-20 w-20'
        source={require('../assets/appIMG/st profile.png')}
        />
        <SView  className='flex justify-start items-start'>
        <SText className='text-base font-extrabold text-center'>110821104044</SText>
        <SText className='font-bold text-sm text-center'>Babay</SText>
        </SView>
        <STouchableOpacity><SImage 
      source={ require('../assets/appIMG/delete.png')}
      /></STouchableOpacity>
      </SView>

      
      <SView
      className='mx-6 mt-4 h-24 border-solid items-center flex flex-row justify-evenly rounded-xl bg-slate-200'>
        <SImage className='h-20 w-20'
        source={require('../assets/appIMG/st profile.png')}
        />
        <SView  className='flex justify-start items-start'>
        <SText className='text-base font-extrabold text-center'>110821104044</SText>
        <SText className='font-bold text-sm text-center'>Babay</SText>
        </SView>
        <STouchableOpacity><SImage 
      source={ require('../assets/appIMG/delete.png')}
      /></STouchableOpacity>
      </SView><SView
      className='mx-6 mt-4 h-24 border-solid items-center flex flex-row justify-evenly rounded-xl bg-slate-200'>
        <SImage className='h-20 w-20'
        source={require('../assets/appIMG/st profile.png')}
        />
        <SView  className='flex justify-start items-start'>
        <SText className='text-base font-extrabold text-center'>110821104044</SText>
        <SText className='font-bold text-sm text-center'>Babay</SText>
        </SView>
        <STouchableOpacity><SImage 
      source={ require('../assets/appIMG/delete.png')}
      /></STouchableOpacity>
      </SView><SView
      className='mx-6 mt-4 h-24 border-solid items-center flex flex-row justify-evenly rounded-xl bg-slate-200'>
        <SImage className='h-20 w-20'
        source={require('../assets/appIMG/st profile.png')}
        />
        <SView  className='flex justify-start items-start'>
        <SText className='text-base font-extrabold text-center'>110821104044</SText>
        <SText className='font-bold text-sm text-center'>Babay</SText>
        </SView>
        <STouchableOpacity><SImage 
      source={ require('../assets/appIMG/delete.png')}
      /></STouchableOpacity>
      </SView><SView
      className='mx-6 mt-4 h-24 border-solid items-center flex flex-row justify-evenly rounded-xl bg-slate-200'>
        <SImage className='h-20 w-20'
        source={require('../assets/appIMG/st profile.png')}
        />
        <SView  className='flex justify-start items-start'>
        <SText className='text-base font-extrabold text-center'>110821104044</SText>
        <SText className='font-bold text-sm text-center'>Babay</SText>
        </SView>
        <STouchableOpacity><SImage 
      source={ require('../assets/appIMG/delete.png')}
      /></STouchableOpacity>
      </SView>

      </SScrollView>

      <SView className='absolute bottom-10 right-10'>
        <STouchableOpacity className='bg-slate-200 h-14 w-14 items-center flex justify-evenly rounded-full'>
          <SImage
            source={require('../assets/appIMG/Add.png')}
          />
        </STouchableOpacity>
      </SView>




      
    </SView>
  )
}

export default withExpoSnack(SectionEdit);

