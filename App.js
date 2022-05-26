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
          <Stack.Navigator initialRouteName="SignIn">
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
