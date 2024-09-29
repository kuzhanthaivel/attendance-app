import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SectionMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : console.log('No screen to go back to')} style={styles.backButton}>
          <Image source={require('../assets/appIMG/arrow_back.png')} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Select from the menu</Text>
      </TouchableOpacity>

      {/* Menu options */}
      <TouchableOpacity onPress={() => navigation.navigate('todayattendance')} style={styles.menuButton}>
        <Text style={styles.menuText}>Today Attendance</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('todayanalysis')} style={styles.menuButton}>
        <Text style={styles.menuText}>Today Attendance Analysis</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('yesterdayanalysis')} style={styles.menuButton}>
        <Text style={styles.menuText}>Yesterday Attendance Analysis</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('overallanalysis')} style={styles.menuButton}>
        <Text style={styles.menuText}>Overall Attendance Analysis</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('report')} style={styles.menuButton}>
        <Text style={styles.menuText}>Report</Text>
      </TouchableOpacity>
    </View>
  );
}

// StyleSheet for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56,
    backgroundColor: '#CBD5E1',
  },
  headerContainer: {
    borderColor: '#000',
    marginVertical: 24,
    marginHorizontal: 12,
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 12,
    backgroundColor: '#fff',
    paddingRight: 64,
  },
  backButton: {
    paddingRight: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  menuButton: {
    marginHorizontal: 24,
    marginTop: 16,
    height: 96,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 12,
    backgroundColor: '#E2E8F0',
  },
  menuText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default SectionMenu;
