import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

// Reusable component for student card
const StudentCard = ({ rollNumber, name, imageSource, onDelete }) => (
  <View style={styles.studentCard}>
    <Image style={styles.studentImage} source={imageSource} />
    <View style={styles.studentInfo}>
      <Text style={styles.rollNumber}>{rollNumber}</Text>
      <Text style={styles.studentName}>{name}</Text>
    </View>
    <TouchableOpacity onPress={onDelete}>
      <Image source={require('../assets/appIMG/delete.png')} />
    </TouchableOpacity>
  </View>
);

const SectionEdit = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : console.log('No screen to go back to')} style={styles.backButton}>
          <Image source={require('../assets/appIMG/arrow_back.png')} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Section Edit</Text>
      </View>

      {/* Scrollable List */}
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <StudentCard
          rollNumber='110821104044'
          name='John Doe'
          imageSource={require('../assets/appIMG/st profile.png')}
          onDelete={() => console.log('Delete John Doe')}
        />
        <StudentCard
          rollNumber='110821104047'
          name='Manikandan'
          imageSource={require('../assets/appIMG/st profile.png')}
          onDelete={() => console.log('Delete Manikandan')}
        />
        <StudentCard
          rollNumber='110821104025'
          name='Prashant'
          imageSource={require('../assets/appIMG/st profile.png')}
          onDelete={() => console.log('Delete Prashant')}
        />
        <StudentCard
          rollNumber='110821104044'
          name='Babay'
          imageSource={require('../assets/appIMG/st profile.png')}
          onDelete={() => console.log('Delete Babay')}
        />
      </ScrollView>

      {/* Floating Add Button */}
      <View style={styles.addButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('addstudent')} style={styles.addButton}>
          <Image source={require('../assets/appIMG/Add.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56,
    backgroundColor: '#CBD5E1',
  },
  header: {
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
  studentCard: {
    marginHorizontal: 24,
    marginTop: 16,
    height: 96,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 12,
    backgroundColor: '#E2E8F0',
  },
  studentImage: {
    height: 80,
    width: 80,
  },
  studentInfo: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rollNumber: {
    fontWeight: '800',
    fontSize: 16,
    textAlign: 'center',
  },
  studentName: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 40,
    right: 40,
  },
  addButton: {
    backgroundColor: '#E2E8F0',
    height: 56,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
  },
});

export default SectionEdit;
