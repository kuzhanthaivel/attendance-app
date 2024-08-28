import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { styled } from 'nativewind';
import img from '../assets/Group 1.png';
import { ScrollView } from 'react-native-gesture-handler';

const ResultScreen = ({ route, navigation }) => {
  const bmi = route.params?.bmi;

  const StyledView = styled(View);
  const StyledText = styled(Text);
  const StyledButton = styled(Button);

  const getWeightStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      return { status: 'Underweight 😔', color: 'blue' };
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      return { status: 'Normal Weight 😊', color: 'green' };
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      return { status: 'Overweight 😐', color: 'orange' };
    } else {
      return { status: 'Obese 😮', color: 'red' };
    }
  };

  const { status, color } = getWeightStatus(parseFloat(bmi));

  return (
    <ScrollView style={{ flex: 1 }}>
      <StyledView className={`bg-${color}-100 h-screen`}>
        {bmi !== null && (
          <>
            <StyledText className='pt-40 font-semibold text-xl text-center text-blue-600'>
              Your BMI is:
            </StyledText>
            <StyledText className={`font-bold text-6xl text-center mt-5 text-${color}-700`}>
              {bmi}
            </StyledText>
            <StyledText className={`pt-5 text-center text-${color}-800`}>
              Weight Status: {status}
            </StyledText>
          </>
        )}

        <StyledView className='pl-20 mt-40'>
          <Image source={img} alt='image' />
        </StyledView>
      </StyledView>
    </ScrollView>
  );
};

export default ResultScreen;
