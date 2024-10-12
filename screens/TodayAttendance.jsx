import { View, Text, Image, TouchableOpacity, ScrollView, Switch, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper'; // Import the RadioButton from the correct library
import { useNavigation } from '@react-navigation/native';

const TodayAnalysis = () => {
  const navigation = useNavigation(); 


  const [attStatus, setAttStatus] = useState({});
  const [holiday, setHoliday] = useState(false); 

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
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : console.log('No screen to go back to')} style={styles.backButton}>
          <Image source={require('../assets/appIMG/arrow_back.png')} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Today Attendance</Text>
      </View>

      {/* Holiday Toggle */}
      <View style={styles.holidayToggle}>
        <Text style={styles.holidayText}>Holiday</Text>
        <Switch
          value={holiday}
          onValueChange={toggleHoliday}
          thumbColor={holiday ? 'green' : 'gray'}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        {students.map((student, index) => (
          <View key={index} style={styles.studentCard}>
            <Image style={styles.studentImage} source={require('../assets/appIMG/st profile.png')} />
            <View>
              <Text style={styles.studentId}>{student.id}</Text>
              <Text style={styles.studentName}>{student.name}</Text>
            </View>
            <View>
              <View style={styles.radioRow}>
                <RadioButton
                  value="present"
                  status={attStatus[student.id] === 'present' ? 'checked' : 'unchecked'}
                  onPress={() => handleAttendanceChange(student.id, 'present')}
                  color={attStatus[student.id] === 'present' ? 'green' : 'gray'}
                  disabled={holiday} // Disable if holiday
                />
                <Text style={styles.radioText}>P</Text>
              </View>
              <View style={styles.radioRow}>
                <RadioButton
                  value="absent"
                  status={attStatus[student.id] === 'absent' ? 'checked' : 'unchecked'}
                  onPress={() => handleAttendanceChange(student.id, 'absent')}
                  color={attStatus[student.id] === 'absent' ? 'red' : 'gray'}
                  disabled={holiday} // Disable if holiday
                />
                <Text style={styles.radioText}>A</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Submit Button */}
      <View style={styles.submitContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log('Attendance Submitted!'); // Log message
            navigation.navigate('sectionmenu'); // Navigation action
          }}
          style={styles.submitButton}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 56, // pt-14 equivalent
    backgroundColor: '#CBD5E1', // bg-slate-300
    flex: 1,
  },
  header: {
    marginVertical: 24, // my-6
    marginHorizontal: 12, // mx-3
    height: 56, // h-14
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    backgroundColor: 'white',
    paddingRight: 64, // pr-16
  },
  backButton: {
    paddingRight: 20, // pr-5
  },
  headerText: {
    fontSize: 24, // text-2xl
    fontWeight: 'bold',
  },
  holidayToggle: {
    marginHorizontal: 24, // mx-6
    marginBottom: 12, // mb-3
    marginTop: 16, // mt-4
    height: 56, // same as student card height for consistency
    borderWidth: 1,
    borderColor: '#D1D5DB', // lighter border for bg-slate-200
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    backgroundColor: '#E5E7EB', // bg-slate-200
  },
  holidayText: {
    fontSize: 24, // text-2xl
    fontWeight: 'bold',
    marginRight: 8, // mr-2
  },
  studentCard: {
    marginHorizontal: 24, // mx-6
    marginTop: 16, // mt-4
    height: 96, // h-24
    borderWidth: 1,
    borderColor: '#D1D5DB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    backgroundColor: '#E5E7EB',
  },
  studentImage: {
    height: 80, // h-20
    width: 80, // w-20
  },
  studentId: {
    fontSize: 16, // text-base
    fontWeight: '800', // font-extrabold
    textAlign: 'center',
  },
  studentName: {
    fontSize: 14, // text-sm
    fontWeight: 'bold',
    textAlign: 'center',
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText: {
    fontWeight: '800', // font-extrabold
  },
  submitContainer: {
    alignItems: 'center',
  },
  submitButton: {
    height: 56, // h-14
    marginBottom: 12, // mb-3
    marginTop: 12, // mt-3
    width: 112, // w-28
    borderWidth: 1,
    borderColor: '#38A169', // green border color
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#38A169', // bg-green-500
  },
  submitText: {
    fontSize: 20, // text-xl
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TodayAnalysis;
