import { View, Text, StyleSheet, Image, StatusBar, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import starPattenImg from '../../assets/images/star_pattern.png';
import attenDanceImg from '../../assets/images/attendance.png';
import feesDueImg from '../../assets/images/fees_due.png';
import { cs, HEIGHT, styleData, WIDTH } from '../../css/cs';
import Icon from 'react-native-vector-icons/Feather';
import { CustomBtn } from '../../component/allButton/CustomBtn';
import Badges from '../../component/badge/badges';
import MenuCard from '../../component/comon-component/MenuCard';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;
export default function Home({ navigation }) {
    const [showPsw, setShowPsw] = useState(true)

    return (
        <ScrollView style={[cs.f1]}>
            <StatusBar
                barStyle='light-content'
                translucent={true}
                backgroundColor={'transparent'}

            />
            <LinearGradient
                colors={[styleData.colorPrimary300, styleData.colorPrimary]}
                style={styles.linearBg}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}

            >
                <View style={[cs.displayBetween]}>
                    <View>
                        <Text style={[cs.font22, cs.colorWhite, cs.textBold]}>Hi Akshey</Text>
                        <Text style={[cs.colorWhite]}>Class XI-B  |  Roll no: 04</Text>
                        <View style={[cs.mt1]}>
                            <Badges
                                title='2020-2021'
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Image style={[styles.profileContainer]} resizeMode='cover' source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
                    </TouchableOpacity>
                </View>
                <Image source={starPattenImg} alt='logo' />
            </LinearGradient>
            <View style={[cs.boxRoundTop, { marginTop: -30 }]}>
                <View style={styles.cartTopContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Attendance')} style={[styles.topCard, cs.boxShadow1]} >
                        <Image source={attenDanceImg} alt="logo" />
                        <Text style={[cs.font30, cs.textBold, cs.mt1]}>80.39%</Text>
                        <Text>Attendance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Fees')} style={[styles.topCard, cs.boxShadow1]}>
                        <Image source={feesDueImg} alt="logo" />
                        <Text style={[cs.font30, cs.textBold, cs.mt1]}>&#8377; 6500</Text>
                        <Text>Fees Due</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    style={{ height: HEIGHT / 2 }}>
                    <MenuCard />
                </ScrollView>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: styleData.colorPrimary
    },
    // inputStyle: {
    //     borderBottomWidth: 1,
    //     borderBottomColor: styleData.colorGray
    // },
    linearBg: {
        height: HEIGHT / 2.3,
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    cartTopContainer: {
        marginTop: - HEIGHT / 7.4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    topCard: {
        // borderWidth: 1,
        // borderColor: styleData.colorPrimary300,
        backgroundColor: 'white',
        width: WIDTH / 2.4,
        paddingVertical: 15,
        paddingLeft: 15,
        borderRadius: 15,
        margin: 5
    },
    profileContainer: {
        width: 60,
        height: 60,
        backgroundColor: styleData.colorGray,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
    }

})