import React, { useState } from 'react'; // Import useState from React
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';
import { RadioButton } from 'react-native-paper';

// Styled components using nativewind
const SView = styled(View);
const SText = styled(Text);
const SImage = styled(Image);
const STouchableOpacity = styled(TouchableOpacity);

function YearEdit() {
  // State to manage the selected radio button for year and section
  const [yearChecked, setYearChecked] = useState('');
  const [sectionChecked, setSectionChecked] = useState('');

  return (
    <SView className='pt-14 bg-slate-300 flex-1 '>
      {/* Header with back button and title */}
      <SView className='border-black my-6 mx-3 h-14 border-solid items-center flex flex-row justify-evenly rounded-xl bg-white'>
        <STouchableOpacity>
          <SImage source={require('../assets/appIMG/arrow_back.png')} />
        </STouchableOpacity>
        <SText className='font-bold text-2xl'>Department Attendance</SText>
      </SView>

      {/* Section for attendance details */}
      <SView className='mx-6 mt-8 border-solid p-5 flex flex-col justify-evenly rounded-xl bg-slate-100'>
        {/* Year Selection */}
        <SView className='flex flex-col gap-4'>
          <SText className='font-bold text-xl'>Year</SText>
          <SView className='flex flex-row gap-4'>
            {/* Radio Button Options for Year */}
            <SView className='flex flex-row items-center'>
              <RadioButton
                value="first"
                status={yearChecked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setYearChecked('first')}
              />
              <SText>I</SText>
            </SView>

            <SView className='flex flex-row items-center'>
              <RadioButton
                value="second"
                status={yearChecked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setYearChecked('second')}
              />
              <SText>II</SText>
            </SView>

            <SView className='flex flex-row items-center'>
              <RadioButton
                value="third"
                status={yearChecked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setYearChecked('third')}
              />
              <SText>III</SText>
            </SView>

            <SView className='flex flex-row items-center'>
              <RadioButton
                value="fourth"
                status={yearChecked === 'fourth' ? 'checked' : 'unchecked'}
                onPress={() => setYearChecked('fourth')}
              />
              <SText>IV</SText>
            </SView>
          </SView>
        </SView>

        {/* Section Selection */}
        <SView className='flex flex-col gap-4'>
          <SText className='font-bold text-xl'>Section</SText>
          <SView className='flex flex-row gap-4'>
            {/* Radio Button Options for Section */}
            <SView className='flex flex-row items-center'>
              <RadioButton
                value="first"
                status={sectionChecked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setSectionChecked('first')}
              />
              <SText>A</SText>
            </SView>

            <SView className='flex flex-row items-center'>
              <RadioButton
                value="second"
                status={sectionChecked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setSectionChecked('second')}
              />
              <SText>B</SText>
            </SView>

            <SView className='flex flex-row items-center'>
              <RadioButton
                value="third"
                status={sectionChecked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setSectionChecked('third')}
              />
              <SText>C</SText>
            </SView>

            <SView className='flex flex-row items-center'>
              <RadioButton
                value="fourth"
                status={sectionChecked === 'fourth' ? 'checked' : 'unchecked'}
                onPress={() => setSectionChecked('fourth')}
              />
              <SText>D</SText>
            </SView>
          </SView>
        </SView>
      </SView>

      {/* Save button */}
      <SView className='items-center'>
      <STouchableOpacity
        className='mx-6 mt-12 h-14 w-28  border-solid items-center  flex justify-evenly rounded-xl bg-green-500'
        >
        <SText className='font-bold text-xl'>Save</SText>
        </STouchableOpacity>
        </SView>
    </SView>
  );
}

export default withExpoSnack(YearEdit);
