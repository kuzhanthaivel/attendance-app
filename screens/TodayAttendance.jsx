import { View, Text, Image, TouchableOpacity, ScrollView, Switch } from 'react-native';
import React, { useState } from 'react';
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';
import { RadioButton } from 'react-native-paper'; // Import the RadioButton from the correct library
import { useNavigation } from '@react-navigation/native';
// Styled components using nativewind
const SView = styled(View);
const SText = styled(Text);
const SImage = styled(Image);
const STouchableOpacity = styled(TouchableOpacity);
const SScrollView = styled(ScrollView);

const TodayAnalysis = ({ }) => {
  const navigation = useNavigation(); 

  // State to manage attendance status
  const [attStatus, setAttStatus] = useState({});
  const [holiday, setHoliday] = useState(false); // Holiday state

  const students = [
    { id: '110821104044', name: 'John Doe' },
    { id: '110821104047', name: 'Manikandan' },
    { id: '110821104025', name: 'Prashant' },
    { id: '110821104039', name: 'Babay' },
    { id: '110821104037', name: 'Babay' },
    { id: '110821104034', name: 'Babay' },
    { id: '110821104035', name: 'Babay' },
    { id: '110821104033', name: 'Babay' },
    // Add more students as needed
  ];

  const handleAttendanceChange = (studentId, status) => {
    setAttStatus((prevStatus) => ({
      ...prevStatus,
      [studentId]: status,
    }));
  };

  const toggleHoliday = () => {
    setHoliday(!holiday);
    if (!holiday) {
      // If setting to holiday, clear attendance
      setAttStatus({});
    }
  };

  return (
    <SView className="pt-14 bg-slate-300 flex-1">
      <SView className="border-black my-6 mx-3 h-14 border-solid items-center flex flex-row justify-evenly rounded-xl bg-white pr-16">
        <STouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : console.log('No screen to go back to')} className="pr-5">
          <SImage source={require('../assets/appIMG/arrow_back.png')} />
        </STouchableOpacity>
        <SText className="font-bold text-2xl">Today Attendance</SText>
      </SView>

      {/* Holiday Toggle */}
      <SView className="mx-6 border-1 mb-3 mt-4 border-solid items-center flex flex-row justify-evenly rounded-xl bg-slate-200">
        <SText className="font-bold text-2xl mr-2">Holiday</SText>
        <Switch
          className="h-10 w-20"
          value={holiday}
          onValueChange={toggleHoliday}
          thumbColor={holiday ? 'green' : 'gray'}
        />
      </SView>

      <SScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        {students.map((student, index) => (
          <SView
            key={index}
            className="mx-6 mt-4 h-24 border-solid items-center flex flex-row justify-evenly rounded-xl bg-slate-200"
          >
            <SImage className="h-20 w-20" source={require('../assets/appIMG/st profile.png')} />
            <SView className="flex justify-start items-start">
              <SText className="text-base font-extrabold text-center">{student.id}</SText>
              <SText className="font-bold text-sm text-center">{student.name}</SText>
            </SView>
            <SView className="flex flex-col">
              <SView className="flex flex-row items-center">
                <RadioButton
                  value="present"
                  status={attStatus[student.id] === 'present' ? 'checked' : 'unchecked'}
                  onPress={() => handleAttendanceChange(student.id, 'present')}
                  color={attStatus[student.id] === 'present' ? 'green' : 'gray'}
                  disabled={holiday} // Disable if holiday
                />
                <SText className="font-extrabold">P</SText>
              </SView>
              <SView className="flex flex-row items-center">
                <RadioButton
                  value="absent"
                  status={attStatus[student.id] === 'absent' ? 'checked' : 'unchecked'}
                  onPress={() => handleAttendanceChange(student.id, 'absent')}
                  color={attStatus[student.id] === 'absent' ? 'red' : 'gray'}
                  disabled={holiday} // Disable if holiday
                />
                <SText className="font-extrabold">A</SText>
              </SView>
            </SView>
          </SView>
        ))}
      </SScrollView>

      {/* Submit Button */}
      <SView className="items-center">
  <STouchableOpacity
    onPress={() => {
      console.log('Attendance Submitted!'); // Log message
      navigation.navigate('sectionmenu'); // Navigation action
    }}
    className="h-14 mb-3 mt-3 w-28 border-solid items-center flex justify-evenly rounded-xl bg-green-500"
  >
    <SText className="font-bold text-xl">Submit</SText>
  </STouchableOpacity>
</SView>

    </SView>
  );
};

export default withExpoSnack(TodayAnalysis);
