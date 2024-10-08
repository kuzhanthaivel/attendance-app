import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const AddStudent = () => {
  const navigation = useNavigation(); 

  const [studentName, setStudentName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.canGoBack() ? navigation.goBack() : console.log('No screen to go back to')} 
          style={styles.backButton}>
          <Image source={require('../assets/appIMG/arrow_back.png')} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add student</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.studentImage} source={require('../assets/appIMG/st add.png')} />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Student Name:</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Student Name"
            value={studentName}
            onChangeText={setStudentName}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Registration Number:</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Registration Number"
            value={registrationNumber}
            onChangeText={setRegistrationNumber}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('sectionedit')} 
          style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('sectionedit')} 
          style={styles.addButton}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 56, // 'pt-14' in Tailwind (14 * 4 = 56)
    backgroundColor: '#CBD5E1', // 'bg-slate-300'
    flex: 1, // 'flex-1'
  },
  header: {
    borderColor: '#000', // 'border-black'
    marginVertical: 8, // 'my-2' in Tailwind (2 * 4 = 8)
    marginHorizontal: 12, // 'mx-3' in Tailwind (3 * 4 = 12)
    height: 56, // 'h-14' in Tailwind (14 * 4 = 56)
    alignItems: 'center', // 'items-center'
    flexDirection: 'row', // 'flex flex-row'
    justifyContent: 'space-evenly', // 'justify-evenly'
    borderRadius: 12, // 'rounded-xl'
    backgroundColor: '#FFF', // 'bg-white'
    paddingRight: 64, // 'pr-16' in Tailwind (16 * 4 = 64)
  },
  backButton: {
    paddingRight: 20, // 'pr-5' in Tailwind (5 * 4 = 20)
  },
  headerText: {
    fontWeight: 'bold', // 'font-bold'
    fontSize: 24, // 'text-2xl' in Tailwind (2xl ~ 24px)
  },
  imageContainer: {
    alignItems: 'center', // 'item-center'
  },
  studentImage: {
    width: '100%', // 'w-full'
  },
  inputContainer: {
    marginHorizontal: 24, // 'mx-6' in Tailwind (6 * 4 = 24)
    marginTop: 32, // 'mt-8' in Tailwind (8 * 4 = 32)
    height: 192, // 'h-48' in Tailwind (48 * 4 = 192)
    padding: 20, // 'p-5' in Tailwind (5 * 4 = 20)
    justifyContent: 'space-evenly', // 'justify-evenly'
    borderRadius: 12, // 'rounded-xl'
    backgroundColor: '#F1F5F9', // 'bg-slate-100'
  },
  inputGroup: {
    flexDirection: 'column', // 'flex flex-col'
    gap: 16, // 'gap-4' in Tailwind (4 * 4 = 16)
  },
  inputLabel: {
    fontWeight: 'bold', // 'font-bold'
    fontSize: 20, // 'text-xl' in Tailwind (xl ~ 20px)
  },
  inputField: {
    paddingLeft: 32, // 'pl-8' in Tailwind (8 * 4 = 32)
  },
  buttonContainer: {
    flexDirection: 'row', // 'flex flex-row'
    justifyContent: 'space-evenly', // 'justify-evenly'
  },
  cancelButton: {
    marginHorizontal: 24, // 'mx-6' in Tailwind (6 * 4 = 24)
    marginTop: 48, // 'mt-12' in Tailwind (12 * 4 = 48)
    height: 56, // 'h-14' in Tailwind (14 * 4 = 56)
    width: 112, // 'w-28' in Tailwind (28 * 4 = 112)
    alignItems: 'center', // 'items-center'
    justifyContent: 'space-evenly', // 'justify-evenly'
    borderRadius: 12, // 'rounded-xl'
    backgroundColor: '#10B981', // 'bg-green-500'
  },
  addButton: {
    marginHorizontal: 24, // 'mx-6' in Tailwind (6 * 4 = 24)
    marginTop: 48, // 'mt-12' in Tailwind (12 * 4 = 48)
    height: 56, // 'h-14' in Tailwind (14 * 4 = 56)
    width: 112, // 'w-28' in Tailwind (28 * 4 = 112)
    alignItems: 'center', // 'items-center'
    justifyContent: 'space-evenly', // 'justify-evenly'
    borderRadius: 12, // 'rounded-xl'
    backgroundColor: '#EF4444', // 'bg-red-500'
  },
  buttonText: {
    fontWeight: 'bold', // 'font-bold'
    fontSize: 20, // 'text-xl' in Tailwind (xl ~ 20px)
  },
});

export default AddStudent;
