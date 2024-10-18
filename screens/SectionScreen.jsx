import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SectionScreen = () => {
  const navigation = useNavigation();
  const { year } = route.params;
  const [section, setSection] = useState('');
  
  function SetSection(section) {
   setSection(section);
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.canGoBack() ? navigation.goBack() : console.log('No screen to go back to')}>
          <Image 
            source={require('../assets/appIMG/arrow_back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Select section</Text>
      </View>

      {/* Section A */}
      <TouchableOpacity 
      onPress={() => {
    navigation.navigate('sectionmenu'); 
  }} 
  style={styles.sectionContainer}>
        <Text style={styles.sectionText}>A Section</Text>
        <View style={styles.iconContainer}> 
          <TouchableOpacity 
          onPress={() => {
    SetSection('A'); 
    navigation.navigate('sectionedit', { year, section}); 
  }} >
            <Image
              source={require('../assets/appIMG/Edit.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('sectiondelete')}>
            <Image
              source={require('../assets/appIMG/delete.png')}
            />
          </TouchableOpacity> 
        </View>
      </TouchableOpacity>

      {/* Section B */}
      <TouchableOpacity      
       onPress={() => {
    SetSection('B'); 
    navigation.navigate('sectionmenu'); 
  }} 
   style={styles.sectionContainer}>
        <Text style={styles.sectionText}>B Section</Text>
        <View style={styles.iconContainer}> 
          <TouchableOpacity onPress={() => {
    SetSection('A'); 
    navigation.navigate('sectionedit', { year, section}); 
  }}>
            <Image
              source={require('../assets/appIMG/Edit.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('sectiondelete')}>
            <Image
              source={require('../assets/appIMG/delete.png')}
            />
          </TouchableOpacity> 
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Stylesheet for the component
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
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  sectionContainer: {
    marginHorizontal: 24,
    marginTop: 12,
    height: 96,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 12,
    backgroundColor: '#E2E8F0',
  },
  sectionText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});

export default SectionScreen;
