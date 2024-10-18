import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation(); 
  const [year, setYear] = useState('');

  function SetYear(year) {
    setYear(year);
    console.log(year)
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.departmentAttendance}>
        <Text style={styles.textBold}>Department Attendance</Text>
        <TouchableOpacity>
          <Image style={styles.profileImage} source={require('../assets/appIMG/dp profile.png')} />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.yearButton} 
      onPress={() => {
    SetYear(1); 
    navigation.navigate('section', { year}); 
  }}
      >
        <Text style={styles.textYear}>I Year</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('yearedit')}>
            <Image source={require('../assets/appIMG/Edit.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('yeardelete')}>
            <Image source={require('../assets/appIMG/delete.png')} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.yearButton, styles.secondYear]} 
      onPress={() => {
    SetYear(2); 
    navigation.navigate('section', { year}); 
  }}>
        <Text style={styles.textYear}>II Year</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('yearedit')}>
            <Image source={require('../assets/appIMG/Edit.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('yeardelete')}>
            <Image source={require('../assets/appIMG/delete.png')} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.yearButton, styles.thirdYear]} 
        onPress={() => {
    SetYear(3); 
    navigation.navigate('section', { year}); 
  }}>
        <Text style={styles.textYear}>III Year</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('yearedit')}>
            <Image source={require('../assets/appIMG/Edit.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('yeardelete')}>
            <Image source={require('../assets/appIMG/delete.png')} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.yearButton, styles.fourthYear]}
             onPress={() => {
    SetYear(4); 
    navigation.navigate('section', { year}); 
  }}>
        <Text style={styles.textYear}>IV Year</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('yearedit')}>
            <Image source={require('../assets/appIMG/Edit.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('yeardelete')}>
            <Image source={require('../assets/appIMG/delete.png')} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 56, // equivalent to pt-14
    backgroundColor: '#cbd5e1', // bg-slate-300
    flex: 1,
  },
  departmentAttendance: {
    borderColor: 'black',
    margin: 24, // m-6
    height: 96, // h-24
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 24, // rounded-xl
    backgroundColor: '#34d399', // bg-emerald-400
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 24, // text-2xl
  },
  profileImage: {
    height: 64, // h-16
    width: 64, // w-16
  },
  yearButton: {
    marginHorizontal: 24, // mx-6
    marginTop: 12, // mt-3
    height: 96, // h-24
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 24, // rounded-xl
    backgroundColor: '#d8b4fe', // bg-purple-300
  },
  secondYear: {
    backgroundColor: '#7dd3fc', // bg-sky-300
  },
  thirdYear: {
    backgroundColor: '#fdba74', // bg-orange-300
  },
  fourthYear: {
    backgroundColor: '#f472b6', // bg-fuchsia-300
  },
  textYear: {
    fontWeight: 'bold',
    fontSize: 24, // text-3xl
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 20, // space-x-5
  },
});

export default HomeScreen;
