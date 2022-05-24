/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import splashImg from './src/assets/images/vector.png';

const Stack = createNativeStackNavigator();
import { Image, StyleSheet } from 'react-native';
import SignIn from './src/auth/SignIn';
import { styleData } from './src/css/cs';


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
      background: '#ffffff'
    },
  };

  const scrBodystyle = (headerShow, title, navigation) => {
    // const changeStyle = () => {
    //   let bgHeader = styleData.colorPrimary
    //   if (title === "Hot Retailers") {
    //     return bgHeader = styleData.colorRed300
    //   } else if (title === 'Warm Retailers') {
    //     return bgHeader = styleData.colorYellow500
    //   } else if (title === 'Cool Retailers') {
    //     return bgHeader = styleData.colorAquaGreen300
    //   } else {
    //     return bgHeader
    //   }
    // }
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
        backgroundColor: 'blue',
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
      {hideSplash ? <Image style={styles.splashImage} source={splashImg} alt="logo" /> :
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={({ navigation, route }) => scrBodystyle(false, 'OTP', navigation)}
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
