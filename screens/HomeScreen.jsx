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


const HomeScreen = ({ }) => {
  const navigation = useNavigation(); 
  
  return (
    <SView className='pt-14 bg-slate-300 flex-1'>
      <STouchableOpacity className='border-black m-6 h-24 items-center flex flex-row justify-evenly rounded-xl bg-emerald-400'>
        <SText className='font-bold text-2xl'>Department Attendance  </SText>
          <STouchableOpacity
          onPress={() => navigation.navigate('sectionedit')}>
          <SImage className='h-16 w-16'
            source={require('../assets/appIMG/dp profile.png')}
          />
          </STouchableOpacity>
      </STouchableOpacity>

      <STouchableOpacity onPress={() => navigation.navigate('section')}
      className='mx-6 mt-3 h-24  items-center flex flex-row justify-evenly bg-purple-300 rounded-xl '>
        <SText className='font-bold text-3xl'>I Year</SText>
        <SView className='flex flex-row space-x-5' > 
        <STouchableOpacity 
        onPress={() => navigation.navigate('yearedit')}>
        <SImage
              source={require('../assets/appIMG/Edit.png')}
            />
        </STouchableOpacity>
        <STouchableOpacity onPress={() => navigation.navigate('yeardelete')}>
        <SImage
              source={require('../assets/appIMG/delete.png')}
            />
        </STouchableOpacity> 
        </SView>
      </STouchableOpacity>

      <STouchableOpacity 
      onPress={() => navigation.navigate('section')}
      className='mx-6 mt-3 h-24 bg-sky-300 items-center flex flex-row justify-evenly rounded-xl'>
        <SText className='font-bold text-3xl'>II Year</SText>
        <SView className='flex flex-row space-x-5' > 
        <STouchableOpacity onPress={() => navigation.navigate('yearedit')}>
        <SImage
              source={require('../assets/appIMG/Edit.png')}
            />
        </STouchableOpacity>
        <STouchableOpacity onPress={() => navigation.navigate('yeardelete')}>
        <SImage
              source={require('../assets/appIMG/delete.png')}
            />
        </STouchableOpacity> 
        </SView>
      </STouchableOpacity>

      <STouchableOpacity 
      onPress={() => navigation.navigate('section')}
      className='mx-6 mt-3 h-24 bg-orange-300 border-solid items-center flex flex-row justify-evenly rounded-xl'>
        <SText className='font-bold text-3xl'>III Year</SText>
        <SView className='flex flex-row space-x-5' > 
        <STouchableOpacity onPress={() => navigation.navigate('yearedit')}>
        <SImage
              source={require('../assets/appIMG/Edit.png')}
            />
        </STouchableOpacity>
        <STouchableOpacity onPress={() => navigation.navigate('yeardelete')}>
        <SImage
              source={require('../assets/appIMG/delete.png')}
            />
        </STouchableOpacity> 
        </SView>
      </STouchableOpacity>

      <STouchableOpacity 
      onPress={() => navigation.navigate('section')}
      className='mx-6 mt-3 h-24 bg-fuchsia-300 border-solid items-center flex flex-row justify-evenly rounded-xl '>
        <SText className='font-bold text-3xl'>IV Year</SText>
        <SView className='flex flex-row space-x-5' > 
        <STouchableOpacity onPress={() => navigation.navigate('yearedit')}>
        <SImage
              source={require('../assets/appIMG/Edit.png')}
            />
        </STouchableOpacity>
        <STouchableOpacity onPress={() => navigation.navigate('yeardelete')}>
        <SImage
              source={require('../assets/appIMG/delete.png')}
            />
        </STouchableOpacity> 
        </SView>
      </STouchableOpacity>
    </SView>
  );
}


export default withExpoSnack(HomeScreen);
