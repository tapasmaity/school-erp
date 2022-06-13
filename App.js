import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splashImg from './src/assets/images/vector.png';

const Stack = createNativeStackNavigator();
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import SignIn from './src/screens/auth/SignIn';
import { styleData } from './src/css/cs';
import LinearGradient from 'react-native-linear-gradient';
import Home from './src/screens/admin-container/Home';
import Profile from './src/screens/admin-container/Profile';
import Attendance from './src/screens/admin-container/Attendance';
import FeesDue from './src/screens/admin-container/FeesDue';
import PayOnline from './src/screens/admin-container/PayOnline';
import Assignment from './src/screens/admin-container/Assignment';
import ErrorPage from './src/screens/ErrorPage';
import TimeTable from './src/screens/admin-container/TimeTable';
import ResultScreen from './src/screens/admin-container/ResultScreen';
import DataSheet from './src/screens/admin-container/DataSheet';
import AskDoubts from './src/screens/admin-container/AskDoubts';
import ChangePassword from './src/screens/admin-container/ChangePassword';
import SchoolImgGallery from './src/screens/admin-container/SchoolImgGallery';
import EventsAndPrograms from './src/screens/admin-container/EventsAndPrograms';
import FeedDetails from './src/screens/admin-container/FeedDetails';
import LeaveAplication from './src/screens/admin-container/LeaveAplication';
import Settings from './src/screens/admin-container/Settings';
import AddLeaveAplication from './src/screens/admin-container/AddLeaveAplication';


const App = () => {
  const [hideSplash, setHideSplash] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHideSplash(false);
    }, 5000); // amount of time the splash is shown from the time component is rendered
  }, []);


  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };

  const scrBodystyle = (headerShow, title, navigation) => {
    const changeStyle = () => {
      let bgHeader = styleData.colorPrimary
      if (title === "My Profile") {
        return bgHeader = styleData.colorAquaGreen300
      } else {
        return bgHeader
      }
    }
    const navScreen = {
      title: title,
      headerTitleAlign: 'left',
      headerShadowVisible: false,
      // headerRight: () => (
      //   <TouchableOpacity
      //     onPress={() => navigation.goBack()}
      //   >
      //     {title === 'Log In' ? <Text></Text> : <Text>Back</Text>}
      //   </TouchableOpacity>
      // ),

      headerStyle: {
        backgroundColor: changeStyle(),
      },

      headerTintColor: '#fff',
      headerShown: headerShow,

      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
    return navScreen;
  }
  return (
    <>
      {hideSplash ?
        <View>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
          <Image style={styles.splashImage} source={splashImg} alt="logo" />
        </View>
        :
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="Attendance"
              component={Attendance}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="Fees"
              component={FeesDue}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="PayOnline"
              component={PayOnline}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="Assignment"
              component={Assignment}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="TimeTable"
              component={TimeTable}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="ResultScreen"
              component={ResultScreen}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="DataSheet"
              component={DataSheet}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="AskDoubts"
              component={AskDoubts}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="SchoolImgGallery"
              component={SchoolImgGallery}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="Events"
              component={EventsAndPrograms}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="FeedDetails"
              component={FeedDetails}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="LeaveAplication"
              component={LeaveAplication}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="AddLeaveAplication"
              component={AddLeaveAplication}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
            <Stack.Screen
              name="ErrorPage"
              component={ErrorPage}
              options={({ navigation, route }) => scrBodystyle(false, '', navigation)}
            />
          </Stack.Navigator>
        </NavigationContainer>
      }
    </>

  );
};


export default App;

const styles = StyleSheet.create({
  splashImage: {
    width: '100%',
    height: '100%'
  }
})
