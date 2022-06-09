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
import { PieChart } from 'react-native-svg-charts'
import { StackedBarChart } from 'react-native-svg-charts';


// Menu Card Data---------------!>
const menuCardData = [
    {
        menuImage: require('../../assets/images/card-img/quiz.png'),
        title: 'Play Quiz'
    },
    {
        menuImage: require('../../assets/images/card-img/money.png'),
        title: 'Fees Due'
    },
    {
        menuImage: require('../../assets/images/card-img/assignment.png'),
        title: 'Assignment'
    },
    {
        menuImage: require('../../assets/images/card-img/holiday.png'),
        title: 'School Holiday'
    },
    {
        menuImage: require('../../assets/images/card-img/calendra.png'),
        title: 'Time Table'
    },
    {
        menuImage: require('../../assets/images/card-img/results.png'),
        title: 'Result'
    },
    {
        menuImage: require('../../assets/images/card-img/date_sheet.png'),
        title: 'Date Sheet'
    },
    {
        menuImage: require('../../assets/images/card-img/doubts.png'),
        title: 'Ask Doubts'
    },
    {
        menuImage: require('../../assets/images/card-img/gallery.png'),
        title: 'School Gallery'
    },
    {
        menuImage: require('../../assets/images/card-img/leave.png'),
        title: 'Leave Application'
    },
    {
        menuImage: require('../../assets/images/card-img/event.png'),
        title: 'Events'
    },
    {
        menuImage: require('../../assets/images/card-img/settings.jpg'),
        title: 'Settings'
    }
]
export default function Home({ navigation }) {
    const [showPsw, setShowPsw] = useState(true);

    /*
    * Bar
    * Chart
    */
    const barData = [
        {
            month: new Date(2015, 0, 1),
            apples: 3840,
            bananas: 1920,
            cherries: 960,
            dates: 400,
            oranges: 400,
        },
        {
            month: new Date(2015, 1, 1),
            apples: 1600,
            bananas: 1440,
            cherries: 960,
            dates: 400,
        },
        {
            month: new Date(2015, 2, 1),
            apples: 640,
            bananas: 960,
            cherries: 3640,
            dates: 400,
        },
        {
            month: new Date(2015, 3, 1),
            apples: 3320,
            bananas: 480,
            cherries: 640,
            dates: 400,
        },
    ]

    const colors = ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6']
    const keys = ['apples', 'bananas', 'cherries', 'dates']


    /*
    * Pie
    * Chart
    */
    const data = [50, 40, 10]

    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))


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
                        <Text style={[cs.colorWhite]}>Class XI-B  |  Admisson no: 04242</Text>
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
                        {/* <Image source={attenDanceImg} alt="logo" />
                        <Text style={[cs.font30, cs.textBold, cs.mt1]}>80.39%</Text>
                        <Text>Attendance</Text> */}
                        <PieChart style={{ height: 100 }} data={pieData} />

                        <Text style={[cs.font30, cs.textBold, cs.mt1]}>80.39%</Text>
                        <Text>Attendance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ErrorPage')} style={[styles.topCard, cs.boxShadow1]}>
                        {/* <Image source={feesDueImg} alt="logo" /> */}
                        <StackedBarChart
                            style={{ height: 100 }}
                            keys={keys}
                            colors={colors}
                            data={barData}
                            showGrid={false}
                            // contentInset={{ top: 30, bottom: 30 }}
                        />
                        <Text style={[cs.font30, cs.textBold, cs.mt1]}>Last 4</Text>
                        <Text>Exam Reacord</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    style={{ height: HEIGHT / 2 }}>
                    <MenuCard menuCardData={menuCardData}/>
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
        padding: 15,
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