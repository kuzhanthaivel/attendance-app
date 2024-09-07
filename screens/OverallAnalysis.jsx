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

const OverallAnalysis = ({ navigation }) => {
  // State for each student's toggle state
  const [expandedList, setExpandedList] = useState({});

  // Function to toggle the expansion of a list item
  const toggleExpand = (id) => {
    setExpandedList((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the state for the given ID
    }));
  };

  // Example data for the list of absent students
  const absentStudents = [
    { id: '1', name: 'John Doe', rollNumber: '110821104044', absentst: 0, percentagest: 100, presentCountst: 80 },
    { id: '2', name: 'Jane Smith', rollNumber: '110821104045', absentst: 20, percentagest: 75, presentCountst: 60 },
    { id: '4', name: 'Alex Brown', rollNumber: '110821104047', absentst: 60, percentagest: 25, presentCountst: 20 },
    { id: '3', name: 'Sam Johnson', rollNumber: '110821104046', absentst: 40, percentagest: 50, presentCountst: 40 },
    { id: '5', name: 'John Doe', rollNumber: '110821104044', absentst: 0, percentagest: 100, presentCountst: 80 },
    { id: '6', name: 'Jane Smith', rollNumber: '110821104045', absentst: 20, percentagest: 75, presentCountst: 60 },
    { id: '7', name: 'Alex Brown', rollNumber: '110821104047', absentst: 60, percentagest: 25, presentCountst: 20 },
    { id: '8', name: 'Sam Johnson', rollNumber: '110821104046', absentst: 40, percentagest: 50, presentCountst: 40 },
  ];

  return (
    <SView className="pt-14 bg-slate-300 flex-1">
      <SView className="border-black my-6 mx-3 h-14 border-solid items-center flex flex-row justify-evenly rounded-xl bg-white pr-16">
        <STouchableOpacity className="pr-5">
          <SImage source={require('../assets/appIMG/arrow_back.png')} />
        </STouchableOpacity>
        <SText className="font-bold text-2xl">Overall Analysis</SText>
      </SView>


      <SScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        {/* List of absent students */}
        {absentStudents.map((student) => (
          <SView key={student.id} className='mx-6 mt-5 border-solid items-center flex flex-col justify-start rounded-xl bg-slate-200'>
            <SView className='flex flex-row items-center justify-between w-full p-3'>
              <SImage className='h-20 w-20' source={require('../assets/appIMG/st profile.png')} />
              <SView className='flex justify-start items-start'>
                <SText className='text-base font-extrabold'>{student.rollNumber}</SText>
                <SText className='font-bold text-sm'>{student.name}</SText>
              </SView>
              <STouchableOpacity onPress={() => toggleExpand(student.id)}>
                <SImage
                  source={
                    expandedList[student.id]
                      ? require('../assets/appIMG/Arrow up.png') // Up arrow image
                      : require('../assets/appIMG/Arrow down.png') // Down arrow image
                  }
                />
              </STouchableOpacity>
            </SView>

            {expandedList[student.id] && (
              <SView className='pb-5'>
                {/* Additional content shown when expanded */}
                <SView className="flex flex-row justify-evenly justify-items-center gap-x-20">
                  <SView className="flex flex-row">
                    <SText className="font-bold text-xl text-red-600">{student.absentst}</SText>
                    <SText className="font-bold text-xl text-red-600">A</SText>
                  </SView>
                  <SView className="flex flex-row">
                    <SText className="font-bold text-xl text-green-600">{student.presentCountst}</SText>
                    <SText className="font-bold text-xl text-green-600">P</SText>
                  </SView>
                  <SView className="flex flex-row">
                    <SText className="font-bold text-xl text-blue-600">{student.percentagest}</SText>
                    <SText className="font-bold text-xl text-blue-600">%</SText>
                  </SView>
                </SView>

                {/* Progress Bar for Individual Student */}
                <SView className="mt-2">
                  <SView className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
                    <SView
                      className="h-full bg-green-500"
                      style={{ width: `${student.percentagest}%` }}
                    />
                  </SView>
                </SView>
              </SView>
            )}
          </SView>
        ))}
      </SScrollView>
    </SView>
  );
};

export default withExpoSnack(OverallAnalysis);





