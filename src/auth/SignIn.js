import { View, Text, StyleSheet, Image, StatusBar, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import loginBGImage from '../assets/images/group1.png'
import { cs, styleData, WIDTH } from '../css/cs';
import Icon from 'react-native-vector-icons/Feather';
import { CustomBtn } from '../component/allButton/CustomBtn';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;
export default function SignIn() {
  const [showPsw, setShowPsw] = useState(true)

  return (
    <ScrollView style={[cs.f1]}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={styleData.colorPrimary}

      />
      {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
        <Text>
          Sign in with Facebook
        </Text>
      </LinearGradient> */}
      <View style={[styles.container, cs.p5]}>
        <Image source={loginBGImage} alt='logo' />
        <Text style={[cs.font22, cs.colorWhite]}>Hi Student</Text>
        <Text style={[cs.colorWhite]}>Sign in to continue</Text>
      </View>
      <View style={[cs.boxRoundTop, { marginTop: -30 }]}>
        <View style={[cs.mt4]}>
          <Text style={[cs.font12]}>Mobile Number/Email</Text>
          <View style={[cs.displayBetween, styles.inputStyle]}>
            <View style={[cs.displayStart]}>
              <TextInput
                style={[cs.font18, { flex: 1, paddingLeft: 0 }]}
                placeholder="Syalfreelance@gmail.com"
                // onChangeText={(txt) => evantHandler(txt, "psw")}
                keyboardType="default"
              // defaultValue={password}
              />
            </View>
            <View>
              {/* <Ionicons onPress={eventShowPsw} name={showPsw ? "md-eye-outline" : "ios-eye-off-outline"} size={24} color={showPsw ? colorSuccess : colorGray} /> */}
            </View>
          </View>
        </View>
        <View style={[cs.mt2]}>
          <Text style={[cs.font12]}>Password</Text>
          <View style={[cs.displayBetween, styles.inputStyle]}>
            <View style={[cs.displayStart]}>
              <TextInput
                style={[cs.font18, { width: '90%', paddingLeft: 0 }]}
                placeholder="xxxxxxxx"
                // onChangeText={(txt) => evantHandler(txt, "psw")}
                keyboardType="default"
                secureTextEntry={showPsw}
              // defaultValue={password}  
              />
            </View>
            <View>
              <Icon onPress={() => setShowPsw(!showPsw)} name={showPsw ? "eye" : "eye-off"} size={24} color={showPsw ? styleData.colorGray : styleData.colorSuccess} />
            </View>
          </View>
        </View>
        <View style={[cs.my3]}>
          <CustomBtn
            // onPress={submitted}
            title='SIGN IN'
            bgColor={[styleData.colorPrimary, styleData.colorPrimary300]}
            color='white'
            paddingY={18}
            paddingX={20}
            align="space-between"
            fontSize={16}
            iconColor="white"
            rightIcon="arrow-right"
            bold={true}
          />

        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: styleData.colorPrimary
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: styleData.colorGray
  },
})