import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react'
import { cs, HEIGHT, styleData } from '../../css/cs';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import starPattenImg from '../../assets/images/star_pattern.png';

export default function Assignment({navigation}) {
  return (
    <View style={[cs.f1]}>
            <StatusBar
                barStyle='light-content'
                translucent={true}
                backgroundColor={'transparent'}

            />
            <LinearGradient
                colors={[styleData.colorPrimary300, styleData.colorPrimary]}
                style={[styles.linearBg]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}

            >
                <View style={[cs.displayStart, cs.mt3, cs.itemCenter]}>
                    <TouchableOpacity onPress={() => navigation.goBack('')}>
                        <Icon name='chevron-left' size={30} color='white' />
                    </TouchableOpacity>
                    <Text style={[cs.font20, cs.colorWhite, cs.textBold]}>Assignment</Text>
                </View>
                <Image style={[styles.starBg]} resizeMode="stretch" source={starPattenImg} alt='logo' />
            </LinearGradient>
            <View style={[cs.boxRoundTop, cs.f1, { marginTop: -30 }]}>

            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    linearBg: {
        height: HEIGHT / 4.5,
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    starBg: {
        height: 40,
    },
})