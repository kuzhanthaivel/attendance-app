import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function YearEdit() {
  const navigation = useNavigation();
  const [yearChecked, setYearChecked] = useState('');
  const [sectionChecked, setSectionChecked] = useState('');

  return (
    <View style={styles.container}>
      {/* Header with back button and title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : console.log('No screen to go back to')}>
          <Image source={require('../assets/appIMG/arrow_back.png')} />
        </TouchableOpacity>
        <Text style={styles.headerText}>year edit</Text>
      </View>

      {/* Section for attendance details */}
      <View style={styles.formContainer}>
        {/* Year Selection */}
        <View style={styles.selectionGroup}>
          <Text style={styles.label}>Year</Text>
          <View style={styles.radioButtonGroup}>
            {/* Radio Button Options for Year */}
            <View style={styles.radioButtonContainer}>
              <RadioButton
                value="first"
                status={yearChecked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setYearChecked('first')}
              />
              <Text>I</Text>
            </View>

            <View style={styles.radioButtonContainer}>
              <RadioButton
                value="second"
                status={yearChecked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setYearChecked('second')}
              />
              <Text>II</Text>
            </View>

            <View style={styles.radioButtonContainer}>
              <RadioButton
                value="third"
                status={yearChecked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setYearChecked('third')}
              />
              <Text>III</Text>
            </View>

            <View style={styles.radioButtonContainer}>
              <RadioButton
                value="fourth"
                status={yearChecked === 'fourth' ? 'checked' : 'unchecked'}
                onPress={() => setYearChecked('fourth')}
              />
              <Text>IV</Text>
            </View>
          </View>
        </View>

        {/* Section Selection */}
        <View style={styles.selectionGroup}>
          <Text style={styles.label}>Section</Text>
          <View style={styles.radioButtonGroup}>
            {/* Radio Button Options for Section */}
            <View style={styles.radioButtonContainer}>
              <RadioButton
                value="first"
                status={sectionChecked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setSectionChecked('first')}
              />
              <Text>A</Text>
            </View>

            <View style={styles.radioButtonContainer}>
              <RadioButton
                value="second"
                status={sectionChecked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setSectionChecked('second')}
              />
              <Text>B</Text>
            </View>

            <View style={styles.radioButtonContainer}>
              <RadioButton
                value="third"
                status={sectionChecked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setSectionChecked('third')}
              />
              <Text>C</Text>
            </View>

            <View style={styles.radioButtonContainer}>
              <RadioButton
                value="fourth"
                status={sectionChecked === 'fourth' ? 'checked' : 'unchecked'}
                onPress={() => setSectionChecked('fourth')}
              />
              <Text>D</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Save button */}
      <View style={styles.saveButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// StyleSheet for styling the components
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
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  formContainer: {
    marginHorizontal: 24,
    marginTop: 32,
    padding: 20,
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
  },
  selectionGroup: {
    flexDirection: 'column',
    gap: 16,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  radioButtonGroup: {
    flexDirection: 'row',
    gap: 16,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveButtonContainer: {
    alignItems: 'center',
  },
  saveButton: {
    marginHorizontal: 24,
    marginTop: 48,
    height: 56,
    width: 112,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#10B981',
  },
  saveButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
});

export default YearEdit;
