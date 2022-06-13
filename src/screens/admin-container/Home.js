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
import { VictoryChart, VictoryBar, VictoryTheme, VictoryPie, VictoryContainer, VictoryLabel } from 'victory-native';


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
    * Chart color style
    */
    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    /*
    * Bar
    * Chart
    */
    const examData = [
        {
            month: 1,
            earnings: 545
        },
        {
            month: 2,
            earnings: 445
        },
        {
            month: 3,
            earnings: 345
        },
        {
            month: 4,
            earnings: 445
        },
        {
            month: 5,
            earnings: 600
        },
        {
            month: 6,
            earnings: 445
        },
        {
            month: 7,
            earnings: 525
        },
    ]


    /*
    * Pie
    * Chart
    */



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
                        <View style={[cs.displayCenter]}>
                            <VictoryPie
                                // radius={({ datum }) => 50 + datum.y * 20}
                                style={{ labels: { fill: "white", fontSize: 12 } }}
                                height={HEIGHT / 5.2}
                                colorScale={[randomColor(), randomColor(), randomColor()]}
                                animate={{ duration: 2000 }}
                                cornerRadius={({ datum }) => 7}
                                innerRadius={12}
                                containerComponent={<VictoryContainer responsive={false} />}
                                data={[
                                    { x: 1, y: 5, label: "AT" },
                                    { x: 2, y: 4, label: "H" },
                                    { x: 3, y: 7, label: "AB" }
                                ]}
                                startAngle={-180}
                                endAngle={450}
                                padAngle={2}
                                // labels={({ datum }) => datum.label}
                                labelRadius={({ innerRadius }) => innerRadius + 11 }
                                labelComponent={<VictoryLabel angle={45} />}
                                padding={{ top: 0, bottom: 10, left:20, right:20 }}
                            />
                        </View>
                        <Text style={[cs.font30, cs.textBold, cs.mt1]}>80.39%</Text>
                        <Text>Attendance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ErrorPage')} style={[styles.topCard, cs.boxShadow1]}>
                        {/* <Image source={feesDueImg} alt="logo" /> */}

                        <View style={[cs.displayCenter]}>
                            <VictoryBar
                                style={{ data: { fill: randomColor() } }}
                                barWidth={12}
                                width={WIDTH / 2.9}
                                height={HEIGHT / 5.2}
                                alignment="middle"
                                barRatio={0.8}
                                cornerRadius={{ top: 4 }}
                                animate={{
                                    duration: 3000,
                                    onLoad: {
                                        duration: 2000,
                                        after: (() => randomColor())
                                    }
                                }}
                                data={examData} x="month" y="earnings"
                                // padding={{ top: 0, bottom: 10, l }}
                                padding={{ top: 0, bottom: 20, left:10, right: 10 }}
                            />
                        </View>
                        <Text style={[cs.font30, cs.textBold, cs.mt1]}>Last 7</Text>
                        <Text>Exam Reacord</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    style={{ height: HEIGHT / 2 }}>
                    <MenuCard menuCardData={menuCardData} />
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