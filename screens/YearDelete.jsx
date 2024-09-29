import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const YearDelete = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.canGoBack() ? navigation.goBack() : console.log('No screen to go back to')} 
          style={styles.backButton}
        >
          <Image 
            source={require('../assets/appIMG/arrow_back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Year delete</Text>
      </View>

      {/* Alert Section */}
      <View style={styles.alertContainer}>
        <Image 
          source={require('../assets/appIMG/Alert.png')}
        />
        <Text style={styles.alertText}>WOULD YOU LIKE TO DELETE SECTIONS?</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}
          style={[styles.button, styles.cancelButton]}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}
          style={[styles.button, styles.deleteButton]}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// StyleSheet for styling the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56,
    backgroundColor: '#CBD5E1',
  },
  header: {
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
  alertContainer: {
    marginHorizontal: 24,
    marginTop: 80,
    height: 160,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 12,
    backgroundColor: '#E2E8F0',
  },
  alertText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 4,
  },
  button: {
    marginHorizontal: 24,
    marginTop: 48,
    height: 56,
    width: 112,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  cancelButton: {
    backgroundColor: '#10B981',
  },
  deleteButton: {
    backgroundColor: '#EF4444',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
});

export default YearDelete;
