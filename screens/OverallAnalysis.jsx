import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const OverallAnalysis = () => {
  const navigation = useNavigation();
  const [expandedList, setExpandedList] = useState({});

  const toggleExpand = (id) => {
    setExpandedList((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const absentStudents = [
    { id: '1', name: 'John Doe', rollNumber: '110821104044', absentst: 0, percentagest: 100, presentCountst: 80 },
    { id: '2', name: 'Jane Smith', rollNumber: '110821104045', absentst: 20, percentagest: 75, presentCountst: 60 },
    { id: '4', name: 'Alex Brown', rollNumber: '110821104047', absentst: 60, percentagest: 25, presentCountst: 20 },
    { id: '3', name: 'Sam Johnson', rollNumber: '110821104046', absentst: 40, percentagest: 50, presentCountst: 40 },
    // More student objects...
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.canGoBack() ? navigation.goBack() : console.log('No screen to go back to')}
          style={styles.backButton}>
          <Image source={require('../assets/appIMG/arrow_back.png')} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Overall Analysis</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        {absentStudents.map((student) => (
          <View key={student.id} style={styles.studentCard}>
            <View style={styles.studentInfoRow}>
              <Image style={styles.studentImage} source={require('../assets/appIMG/st profile.png')} />
              <View style={styles.studentDetails}>
                <Text style={styles.studentRoll}>{student.rollNumber}</Text>
                <Text style={styles.studentName}>{student.name}</Text>
              </View>
              <TouchableOpacity onPress={() => toggleExpand(student.id)}>
                <Image
                  source={
                    expandedList[student.id]
                      ? require('../assets/appIMG/Arrow up.png')
                      : require('../assets/appIMG/Arrow down.png')
                  }
                />
              </TouchableOpacity>
            </View>

            {expandedList[student.id] && (
              <View style={styles.expandedContent}>
                <View style={styles.rowWithSpacing}>
                  <View style={styles.statusRow}>
                    <Text style={styles.absentText}>{student.absentst}</Text>
                    <Text style={styles.absentText}> A</Text>
                  </View>
                  <View style={styles.statusRow}>
                    <Text style={styles.presentText}>{student.presentCountst}</Text>
                    <Text style={styles.presentText}> P</Text>
                  </View>
                  <View style={styles.statusRow}>
                    <Text style={styles.totalText}>{student.percentagest}</Text>
                    <Text style={styles.totalText}> %</Text>
                  </View>
                </View>

                <View style={styles.individualProgressBarContainer}>
                  <View style={styles.individualProgressBarBackground}>
                    <View style={[styles.progressBar, { width: `${student.percentagest}%` }]} />
                  </View>
                </View>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  absentText: {
    color: '#DC2626',
    fontWeight: 'bold',
    fontSize: 18,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#22C55E',
  },
  presentText: {
    color: '#16A34A',
    fontWeight: 'bold',
    fontSize: 18,
  },
  totalText: {
    color: '#2563EB',
    fontWeight: 'bold',
    fontSize: 18,
  },
  container: {
    flex: 1,
    paddingTop: 56,
    backgroundColor: '#E2E8F0',
  },
  statusRow: {
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    height: 56,
    marginHorizontal: 12,
    marginVertical: 16,
    paddingRight: 64,
  },
  rowWithSpacing: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 40,
  },
  backButton: {
    paddingRight: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  studentCard: {
    marginHorizontal: 24,
    marginTop: 20,
    backgroundColor: '#E2E8F0',
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    paddingBottom: 16,
  },
  studentInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 12,
  },
  studentImage: {
    height: 80,
    width: 80,
  },
  studentDetails: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  studentRoll: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  studentName: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  expandedContent: {
    padding: 12,
    backgroundColor: '#F1F5F9',
  },
  individualProgressBarContainer: {
    marginTop: 3,
  },
  individualProgressBarBackground: {
    width: '100%',
    height: 14,
    backgroundColor: '#86EFAC',
    borderRadius: 9999,
    overflow: 'hidden',
  },
  
});

export default OverallAnalysis;
