import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';

// Styled components using nativewind
const SView = styled(View);
const SText = styled(Text);
const SImage = styled(Image);
const STouchableOpacity = styled(TouchableOpacity);
const SScrollView = styled(ScrollView);

const Report = ({ navigation }) => {
  const absentStudents = [
    { id: '1', rollNumber: '110821104044', presentCountst: 40, absentst: 1, total: 99 },
    { id: '2', rollNumber: '110821104045', presentCountst: 40, absentst: 8, total: 100 },
    { id: '3', rollNumber: '110821104046', presentCountst: 40, absentst: 8, total: 95 },
    { id: '4', rollNumber: '110821104047', presentCountst: 40, absentst: 12, total: 84 },
    { id: '5', rollNumber: '110821104048', presentCountst: 40, absentst: 12, total: 30 },
    { id: '6', rollNumber: '110821104049', presentCountst: 40, absentst: 12, total: 50 },
    { id: '7', rollNumber: '110821104050', presentCountst: 40, absentst: 12, total: 100 },
    { id: '8', rollNumber: '110821104051', presentCountst: 39, absentst: 12, total: 80 },    
    { id: '9', rollNumber: '110821104044', presentCountst: 40, absentst: 1, total: 99 },
    { id: '11', rollNumber: '110821104045', presentCountst: 40, absentst: 8, total: 100 },
    { id: '12', rollNumber: '110821104046', presentCountst: 40, absentst: 8, total: 95 },
    { id: '13', rollNumber: '110821104047', presentCountst: 40, absentst: 12, total: 84 },
    { id: '14', rollNumber: '110821104048', presentCountst: 40, absentst: 12, total: 30 },
    { id: '15', rollNumber: '110821104049', presentCountst: 40, absentst: 12, total: 50 },
    { id: '16', rollNumber: '110821104050', presentCountst: 40, absentst: 12, total: 100 },
    { id: '17', rollNumber: '110821104051', presentCountst: 39, absentst: 12, total: 80 },
  ];

  return (
    <SView className="pt-14 bg-slate-300 flex-1">
      <SView className="border-black my-6 mx-3 h-14 items-center flex flex-row justify-evenly rounded-xl bg-white pr-16">
        <STouchableOpacity className="pr-5">
          <SImage source={require('../assets/appIMG/arrow_back.png')} />
        </STouchableOpacity>
        <SText className="font-bold text-2xl">Report</SText>
      </SView>
      <SScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      {/* Table Headers */}
      <SView className="flex-row justify-around bg-white p-3 mx-5 rounded-lg">
        <SText className="font-bold text-base">Register number</SText>
        <SText className="font-bold text-base">P</SText>
        <SText className="font-bold text-base">A</SText>
        <SText className="font-bold text-base">%</SText>
      </SView>

      
        {/* Table Rows */}
        {absentStudents.map((student) => (
          <SView
            key={student.id}
            className="flex-row justify-around bg-slate-100 p-3 mx-5 rounded-xl"
          >
            <SText className="text-base">{student.rollNumber}</SText>
            <SText className="text-base text-green-500">{student.presentCountst}</SText>
            <SText className="text-base text-red-500">{student.absentst}</SText>
            <SText className="text-base">{student.total}</SText>
          </SView>
        ))}
      </SScrollView>

      <SView className="items-center">
        <STouchableOpacity className="h-14 mb-3 mt-3 w-28  items-center flex justify-evenly rounded-xl bg-green-500">
          <SText className="font-bold text-xl">Download</SText>
        </STouchableOpacity>
      </SView>
    </SView>
  );
};

export default withExpoSnack(Report);
