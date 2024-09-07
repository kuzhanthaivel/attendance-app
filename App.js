import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SectionScreen from './screens/SectionScreen';
import SectionMenu from './screens/SectionMenu';
import SectionEdit from './screens/SectionEdit';
import SectionDelete from './screens/SectionDelete';
import AddStudent from './screens/AddStudent';
import Login from './screens/Login';
import OverallAnalysis from './screens/OverallAnalysis';
import Profile from './screens/Profile';
import Report from './screens/Report';
import TodayAnalysis from './screens/TodayAnalysis';
import TodayAttendance from './screens/TodayAttendance';
import YearDelete from './screens/YearDelete';
import YearEdit from './screens/YearEdit';
import YesterdayAnalysis from './screens/YesterdayAnalysis';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="todayattendance" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />{/* done*/}
        <Stack.Screen name="section" component={SectionScreen} />{/* done*/}
        <Stack.Screen name="sectionmenu" component={SectionMenu} />{/* done*/}
        <Stack.Screen name="sectionedit" component={SectionEdit} />{/* done*/}
        <Stack.Screen name="sectiondelete" component={SectionDelete} />{/* done*/}
        <Stack.Screen name="addstudent" component={AddStudent} />{/* done*/}
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="overallanalysis" component={OverallAnalysis} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="report" component={Report} />
        <Stack.Screen name="todayanalysis" component={TodayAnalysis} />
        <Stack.Screen name="todayattendance" component={TodayAttendance} />
        <Stack.Screen name="yeardelete" component={YearDelete} />{/* done*/}
        <Stack.Screen name="yearedit" component={YearEdit} />{/* done*/}
        <Stack.Screen name="yesterdayanalysis" component={YesterdayAnalysis} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Register the main component using the name from app.json
AppRegistry.registerComponent('AttendanceApp', () => App);
export default App;
