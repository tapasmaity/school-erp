import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react'
import { cs, HEIGHT, styleData } from '../../css/cs';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import starPattenImg from '../../assets/images/star_pattern.png';
import CustomTabBtn from '../../component/allButton/CustomTabBtn';

export default function TimeTable({ navigation }) {

    const timeTableData = [
        {
            subject: 'Computer Science',
            classTime: '08:15am - 9:00am',
            teacherName: 'Cherise James',
            period: 1
        },
        {
            subject: 'Mathematics',
            classTime: '09:00am - 09:45am',
            teacherName: 'Rivka Steadman',
            period: 2
        },
        {
            subject: 'English',
            classTime: '09:45am - 10:30am',
            teacherName: 'Marta Magana',
            period: 3
        },
        {
            subject: 'Lunch Break',
            classTime: '10:30am - 11:00am',
        },
        {
            subject: 'Science',
            classTime: '11:00am - 11:45am',
            teacherName: 'Danica Partridge',
            period: 4
        },
        {
            subject: 'Social Study',
            classTime: '11:45am - 12:30',
            teacherName: 'Kunal',
            period: 4
        },
    ]

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
                    <Text style={[cs.font20, cs.colorWhite, cs.textBold]}>Timetable</Text>
                </View>
                <Image style={[styles.starBg]} resizeMode="stretch" source={starPattenImg} alt='logo' />
            </LinearGradient>
            <View style={[cs.boxRoundTop, cs.f1, { marginTop: -30 }]}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    style={{ flex: 1 }}
                >
                    <View style={[cs.displayCenter,cs.mb2, cs.f1]}>
                        <CustomTabBtn
                            // onPress={handleChangeTab}
                            borderColor='#E1E3E8'
                            tabName={[" MON ", " TUE ", " WED ", " THU ", " FRI ", " SAT "]}
                            bold={true}
                        />
                    </View>
                    {
                        timeTableData.map((item, i) => {
                            return (
                                <View key={i} style={[styles.timeTablecard, cs.mb1]}>
                                    <View style={[cs.displayBetween, cs.pb1]}>
                                        <View>
                                            <Text style={[cs.mb1, cs.textBold, cs.font15]}>{item.subject}</Text>
                                            <Text>{item.classTime}</Text>
                                        </View>
                                        {
                                            item.teacherName && item.period ? <Text></Text> :<Image source={require('../../assets/images/lunch_break.png')} />
                                        }
                                    </View>
                                    {
                                        item.teacherName && item.period ?
                                            <View style={[cs.displayBetween, cs.pt1, { borderTopWidth: 1, borderTopColor: '#979797' }]}>
                                                <Text>{item.teacherName}</Text>
                                                <Text style={[cs.textBold]}>Period {item.period}</Text>
                                            </View>
                                            :
                                            <View></View>
                                    }
                                </View>
                            );
                        })
                    }
                </ScrollView>
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
    timeTablecard: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#979797',
        borderRadius: 15
    }
})