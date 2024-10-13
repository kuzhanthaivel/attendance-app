import { View, Text, Image,ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const login = () => {
  const navigation = useNavigation(); 

  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (Username && Password ) {
            setIsDisabled(false);  // Enable button if passwords match
        } else {
            setIsDisabled(true);   // Disable button if passwords don't match
        }
    }, [Password, Username]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.studentImage} source={require('../assets/appIMG/login.png')} />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>User Name:</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter User Name"
            value={Username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password:</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter Password"
            value={Password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity disabled={isDisabled}
          onPress={() => navigation.navigate('Home')} 
          style={styles.cancelButton}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row',
    justifyContent: 'center',paddingTop: 40,gap: 16, }}>
        <Text style={{ color: '#8693A5', fontSize: 16, marginBottom: 16 }}>Not a member?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{ color: '#1C2A41', fontSize: 16, textDecorationLine: 'underline', }} onPress={() => navigation.navigate('Register')} > Create an account. </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 56, // 'pt-14' in Tailwind (14 * 4 = 56)
    backgroundColor: '#CBD5E1', // 'bg-slate-300'
    flex: 1, // 'flex-1'
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
    paddingLeft: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
  },
  cancelButton: {
    marginHorizontal: 24,
    marginTop: 48, 
    height: 56,
    width: 112, 
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 12,
    backgroundColor: '#10B981', 
  },
  buttonText: {
    fontWeight: 'bold', 
    fontSize: 20, 
  },
});

export default login;
