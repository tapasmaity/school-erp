import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import React from 'react'
import { cs, HEIGHT, styleData } from '../../css/cs';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import starPattenImg from '../../assets/images/star_pattern.png';
import { CustomBtn } from '../../component/allButton/CustomBtn';

export default function PayOnline({ navigation }) {
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
                    <Text style={[cs.font20, cs.colorWhite, cs.textBold]}>Pay Online</Text>
                </View>
                <Image style={[styles.starBg]} resizeMode="stretch" source={starPattenImg} alt='logo' />
            </LinearGradient>
            <View style={[cs.boxRoundTop, cs.f1, { marginTop: -30 }]}>
                <View style={[cs.mt2]}>
                    <Text style={[cs.font12]}>Date</Text>
                    <View style={[cs.displayBetween, styles.inputStyle]}>
                        <View style={[cs.displayStart]}>
                            <TextInput
                                style={[cs.font15, { width: '80%', paddingLeft: 0, color: '#000000' }]}
                                placeholder="DD-MM-YYYY"
                                placeholderTextColor="#979797"
                                // onChangeText={(txt) => evantHandler(txt, "psw")}
                                keyboardType="default"
                                defaultValue='01 Feb 2022'
                            />
                        </View>
                        <View>
                            <AntDesign name='calendar' size={22} color={styleData.colorGray} />
                        </View>
                    </View>
                </View>

                <View style={[cs.mt2]}>
                    <Text style={[cs.font12]}>Period</Text>
                    <View style={[cs.displayBetween, styles.inputStyle]}>
                        <View style={[cs.displayStart]}>
                            <TextInput
                                style={[cs.font15, { width: '80%', paddingLeft: 0, color: '#000000' }]}
                                placeholder="DD-MM-YYYY"
                                placeholderTextColor="#979797"
                                // onChangeText={(txt) => evantHandler(txt, "psw")}
                                keyboardType="default"
                                defaultValue='28 Feb 2022'
                            />
                        </View>
                        <View>
                            <AntDesign name='calendar' size={22} color={styleData.colorGray} />
                        </View>
                    </View>
                </View>

                <View style={[cs.mt2]}>
                    <Text style={[cs.font12]}>Total Fees</Text>
                    <View style={[cs.displayBetween, styles.inputStyle]}>
                        <View style={[cs.displayStart]}>
                            <TextInput
                                style={[cs.font15, { width: '80%', paddingLeft: 0, color: '#000000' }]}
                                placeholder="Amount"
                                placeholderTextColor="#979797"
                                // onChangeText={(txt) => evantHandler(txt, "psw")}
                                keyboardType="default"
                                defaultValue='₹999'
                            />
                        </View>
                    </View>
                </View>
                <View style={[styles.payBtn]}>
                    <CustomBtn
                        onPress={() => navigation.navigate('Home')}
                        title='PAY NOW'
                        bgColor={[styleData.colorPrimary, styleData.colorPrimary300]}
                        color='white'
                        paddingY={20}
                        paddingX={20}
                        align="space-between"
                        fontSize={18}
                        iconColor="white"
                        rightIcon="arrow-right"
                        bold={true}
                    />

                </View>
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
    inputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: styleData.colorGray
    },
    payBtn: {
        position: 'absolute',
        bottom: 20,
        left:15,
        right:15
    },
})