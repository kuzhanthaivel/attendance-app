import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { withExpoSnack } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const Report = () => {
  const navigation = useNavigation();
  const absentStudents = [
    { id: '1', rollNumber: '110821104044', presentCountst: 40, absentst: 1, total: 99 },
    { id: '2', rollNumber: '110821104045', presentCountst: 40, absentst: 8, total: 100 },
    { id: '3', rollNumber: '110821104046', presentCountst: 40, absentst: 8, total: 95 },
    { id: '4', rollNumber: '110821104047', presentCountst: 40, absentst: 12, total: 84 },
    { id: '5', rollNumber: '110821104048', presentCountst: 40, absentst: 12, total: 30 },
    { id: '6', rollNumber: '110821104049', presentCountst: 40, absentst: 12, total: 50 },
    { id: '7', rollNumber: '110821104050', presentCountst: 40, absentst: 12, total: 100 },
    { id: '8', rollNumber: '110821104051', presentCountst: 39, absentst: 12, total: 80 },
     { id: '9', rollNumber: '110821104052', presentCountst: 35, absentst: 5, total: 90 },
    { id: '10', rollNumber: '110821104053', presentCountst: 30, absentst: 10, total: 70 },
    { id: '11', rollNumber: '110821104054', presentCountst: 38, absentst: 7, total: 85 },
    { id: '12', rollNumber: '110821104055', presentCountst: 41, absentst: 4, total: 95 },
    { id: '13', rollNumber: '110821104056', presentCountst: 36, absentst: 6, total: 80 },
    { id: '14', rollNumber: '110821104057', presentCountst: 33, absentst: 11, total: 75 },
    { id: '15', rollNumber: '110821104058', presentCountst: 42, absentst: 3, total: 98 },
    { id: '16', rollNumber: '110821104059', presentCountst: 39, absentst: 2, total: 95 },
    { id: '17', rollNumber: '110821104060', presentCountst: 37, absentst: 4, total: 91 },
    { id: '18', rollNumber: '110821104061', presentCountst: 34, absentst: 6, total: 88 },
    { id: '19', rollNumber: '110821104062', presentCountst: 32, absentst: 9, total: 78 },
    { id: '20', rollNumber: '110821104063', presentCountst: 40, absentst: 5, total: 95 },
    { id: '21', rollNumber: '110821104064', presentCountst: 31, absentst: 10, total: 70 },
    { id: '22', rollNumber: '110821104065', presentCountst: 29, absentst: 12, total: 65 },
    { id: '23', rollNumber: '110821104066', presentCountst: 38, absentst: 7, total: 85 },
    { id: '24', rollNumber: '110821104067', presentCountst: 43, absentst: 2, total: 95 },
    { id: '25', rollNumber: '110821104068', presentCountst: 30, absentst: 9, total: 70 },
    { id: '26', rollNumber: '110821104069', presentCountst: 34, absentst: 6, total: 88 },
    { id: '27', rollNumber: '110821104070', presentCountst: 39, absentst: 4, total: 91 },
    { id: '28', rollNumber: '110821104071', presentCountst: 35, absentst: 5, total: 90 },
    { id: '29', rollNumber: '110821104072', presentCountst: 30, absentst: 10, total: 70 },
    { id: '30', rollNumber: '110821104073', presentCountst: 36, absentst: 4, total: 85 },
    { id: '31', rollNumber: '110821104074', presentCountst: 41, absentst: 3, total: 95 },
    { id: '32', rollNumber: '110821104075', presentCountst: 39, absentst: 2, total: 95 },
    { id: '33', rollNumber: '110821104076', presentCountst: 33, absentst: 11, total: 75 },
    { id: '34', rollNumber: '110821104077', presentCountst: 42, absentst: 3, total: 98 },
    { id: '35', rollNumber: '110821104078', presentCountst: 37, absentst: 4, total: 91 },
    { id: '36', rollNumber: '110821104079', presentCountst: 34, absentst: 6, total: 88 },
    { id: '37', rollNumber: '110821104080', presentCountst: 32, absentst: 9, total: 78 },
    { id: '38', rollNumber: '110821104081', presentCountst: 31, absentst: 10, total: 70 },
    { id: '39', rollNumber: '110821104082', presentCountst: 29, absentst: 12, total: 65 },
    { id: '40', rollNumber: '110821104083', presentCountst: 40, absentst: 5, total: 95 },
  ];

  const generatePDF = async () => {
    try {
      const htmlContent = `
        <html>
          <head>
            <style>
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid #000; padding: 8px; text-align: center; }
              th { background-color: #f2f2f2; }
            </style>
          </head>
          <body>
            <h1>Report</h1>
            <table>
              <thead>
                <tr>
                  <th>Register Number</th>
                  <th>P</th>
                  <th>A</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                ${absentStudents.map(student => `
                  <tr>
                    <td>${student.rollNumber}</td>
                    <td>${student.presentCountst}</td>
                    <td>${student.absentst}</td>
                    <td>${student.total}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </body>
        </html>
      `;

      let options = {
        html: htmlContent,
        fileName: 'Report',
        directory: 'Documents',
      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.canGoBack() ? navigation.goBack() : console.log('No screen to go back to')}
          style={styles.backButton}
        >
          <Image source={require('../assets/appIMG/arrow_back.png')} />
        </TouchableOpacity>
        <Text style={styles.title}>Report</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Register number</Text>
          <Text style={styles.tableHeaderText}>P</Text>
          <Text style={styles.tableHeaderText}>A</Text>
          <Text style={styles.tableHeaderText}>%</Text>
        </View>

        {absentStudents.map((student) => (
          <View key={student.id} style={styles.tableRow}>
            <Text style={styles.tableText}>{student.rollNumber}</Text>
            <Text style={styles.presentText}>{student.presentCountst}</Text>
            <Text style={styles.absentText}>{student.absentst}</Text>
            <Text style={styles.tableText}>{student.total}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.downloadContainer}>
        <TouchableOpacity onPress={generatePDF} style={styles.downloadButton}>
          <Text style={styles.downloadText}>Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 14 * 4, 
    backgroundColor: '#CBD5E1', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
    marginVertical: 6,
    marginHorizontal: 3, 
    height: 56, 
    borderRadius: 10, 
    paddingRight: 16, 
  },
  backButton: {
    paddingRight: 20, 
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold', 
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    padding: 12, 
    marginHorizontal: 20, 
    borderRadius: 10, 
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: 'bold', 
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F1F5F9', 
    padding: 12, 
    marginHorizontal: 20,
    marginTop: 10, 
    borderRadius: 10, 
  },
  tableText: {
    fontSize: 16,
  },
  presentText: {
    fontSize: 16, 
    color: '#22C55E', 
  },
  absentText: {
    fontSize: 16, 
    color: '#EF4444', 
  },
  downloadContainer: {
    alignItems: 'center',
    marginTop: 10, 
  },
  downloadButton: {
    height: 56, 
    width: 112, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#22C55E',
    borderRadius: 10,
    marginBottom: 12, 
    marginTop: 12,
  },
  downloadText: {
    fontSize: 18, 
    fontWeight: 'bold', 
  },
});

export default withExpoSnack(Report);
