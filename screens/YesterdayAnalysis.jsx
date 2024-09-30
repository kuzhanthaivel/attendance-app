import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const TodayAnalysis = () => {
  const navigation = useNavigation();
  const [absentCount, setAbsentCount] = useState(45);
  const [presentCount, setPresentCount] = useState(16);
  const [presentPercentage, setPresentPercentage] = useState(0);
  const [expandedList, setExpandedList] = useState({});

  useEffect(() => {
    const totalCount = absentCount + presentCount;
    const percentage = totalCount > 0 ? ((presentCount / totalCount) * 100).toFixed() : 0;
    setPresentPercentage(percentage);
  }, [absentCount, presentCount]);

  const toggleExpand = (id) => {
    setExpandedList((prevState) => ({
      ...prevState,
      [id]: !prevState[id], 
    }));
  };

  const absentStudents = [
    { id: '1', name: 'John Doe', rollNumber: '110821104044', absentst: 0, percentagest: 100, presentCountst: 80 },
    { id: '2', name: 'Jane Smith', rollNumber: '110821104045', absentst: 20, percentagest: 75, presentCountst: 60 },
    { id: '3', name: 'Sam Johnson', rollNumber: '110821104046', absentst: 40, percentagest: 50, presentCountst: 40 },
    { id: '4', name: 'Alex Brown', rollNumber: '110821104047', absentst: 60, percentagest: 25, presentCountst: 20 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : console.log('No screen to go back to')} style={styles.backButton}>
          <Image source={require('../assets/appIMG/arrow_back.png')} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Yesterday Analysis</Text>
      </View>

      <View style={styles.analysisContainer}>
        <View style={styles.row}>
          <Text style={styles.boldText}>Absent</Text>
          <Text style={styles.boldText}>Present</Text>
          <Text style={styles.boldText}>Total</Text>
        </View>
        <View style={styles.rowWithSpacing}>
          <View style={styles.statusRow}>
            <Text style={styles.absentText}>{absentCount}</Text>
            <Text style={styles.absentText}> A</Text>
          </View>
          <View style={styles.statusRow}>
            <Text style={styles.presentText}>{presentCount}</Text>
            <Text style={styles.presentText}> P</Text>
          </View>
          <View style={styles.statusRow}>
            <Text style={styles.totalText}>{presentPercentage}</Text>
            <Text style={styles.totalText}> %</Text>
          </View>
        </View>
      </View>

      {/* Progress Bars for Absent and Present */}
      <View style={styles.progressContainer}>
        <Text style={styles.boldText}>Present:</Text>
        <View style={styles.progressBarBackgroundp}>
          <View style={[styles.progressBar, { width: `${presentPercentage}%` }]} />
        </View>
        <Text style={styles.boldText}>Absent:</Text>
        <View style={styles.progressBarBackgrounda}>
          <View style={[styles.progressBarAbsent, { width: `${100 - presentPercentage}%` }]} />
        </View>
      </View>

      <Text style={styles.absenceListHeader}>Yesterday Absence List...</Text>

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
  container: {
    flex: 1,
    backgroundColor: '#E2E8F0',
    paddingTop: 56,
  },
  header: {
    borderColor: 'black',
    marginVertical: 24,
    marginHorizontal: 12,
    height: 56,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 16,
    paddingRight: 64,
  },
  backButton: {
    paddingRight: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  analysisContainer: {
    marginHorizontal: 24,
    marginTop: 16,
    height: 112,
    backgroundColor: '#F1F5F9',
    justifyContent: 'space-around',
    borderRadius: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  rowWithSpacing: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 40,
  },
  statusRow: {
    flexDirection: 'row',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  absentText: {
    color: '#DC2626',
    fontWeight: 'bold',
    fontSize: 18,
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
  progressContainer: {
    marginHorizontal: 24,
    padding: 24,
    marginTop: 16,
    height: 224,
    backgroundColor: '#F1F5F9',
    justifyContent: 'space-evenly',
    borderRadius: 16,
  },
  progressBarBackgroundp: {
    width: '100%',
    height: 14,
    backgroundColor: '#86EFAC',
    borderRadius: 9999,
    overflow: 'hidden',
  },
  progressBarBackgrounda: {
    width: '100%',
    height: 14,
    backgroundColor: '#D17E7A',
    borderRadius: 9999,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#22C55E',
  },
  progressBarAbsent: {
    height: '100%',
    backgroundColor: '#B3261E',
  },
  absenceListHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 40,
    marginTop: 20,
    textDecorationLine: 'underline',
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

export default TodayAnalysis;
