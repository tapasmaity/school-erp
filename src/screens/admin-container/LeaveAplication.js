import { StyleSheet, Text, View, StatusBar, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { cs, styleData } from '../../css/cs'
import TopHeaderBgComponent from '../../component/comon-component/TopHeaderBgComponent'
import CustomTabBtn from '../../component/allButton/CustomTabBtn';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Badges from '../../component/badge/badges';
import Entypo from 'react-native-vector-icons/Entypo';

export default function LeaveAplication({navigation}) {

    /*
    * Leaves
    * Data
    */
    const leaveData = [
        {
            cardHeader: 'December 2021',
            cardTitle: 'Half Day Application',
            leaveDate: 'Wed, 16 June',
            leaveType: 'Casual',
            status: 'Awaiting'
        },
        {
            cardHeader: 'November 2021',
            cardTitle: 'Full Day Application',
            leaveDate: 'Mon, 28 Nov',
            leaveType: 'Sick',
            status: 'Approved'
        },
        {
            cardHeader: 'September 2021',
            cardTitle: '3 Days Application',
            leaveDate: 'Wed, 22 Sep - Fri, 25 Sep',
            leaveType: 'Casual',
            status: 'Declined'
        },
        {
            cardHeader: 'August 2021',
            cardTitle: 'Full Day Application',
            leaveDate: 'Wed, 02 Aug',
            leaveType: 'Sick',
            status: 'Approved'
        },
    ]

    /*
    * Card Style
    * Status
    */
    const changeStyle = (type) => {
        var bgColor = '#00000060';
        var color = '#000000';
        if (type === "Awaiting") {
            bgColor = '#fff4be';
            color= '#fbbc05'
        } else if (type === 'Approved') {
            bgColor = '#beffcf';
            color = styleData.colorSuccess;
        } else if (type === 'Declined') {
            bgColor = '#ffccc8';
            color=styleData.colorRed400
        } else {
            bgColor = '#ffccc8'
        }
        return ({ bgColor, color });
    }
    return (
        <View style={[cs.f1]}>
            <StatusBar
                barStyle='light-content'
                translucent={true}
                backgroundColor={'transparent'}
            />
            <TopHeaderBgComponent title='Leaves' />
            <View style={[cs.boxRoundTop, cs.f1, { marginTop: -30 }]}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    style={{ flex: 1 }}
                >
                    <View style={[cs.displayAround, cs.mb2, cs.f1]}>
                        <CustomTabBtn
                            // onPress={handleChangeTab}
                            borderColor='#E1E3E8'
                            tabName={[" All ", " Casual ", " Sick "]}
                            bold={true}
                            font={15}
                            radius={5}
                        />
                        <TouchableOpacity onPress={()=>navigation.navigate('AddLeaveAplication')} style={[styles.btnAdd, cs.boxShadow1]}>
                            <MaterialIcons name='add' size={24} color={styleData.colorPrimary} />
                        </TouchableOpacity>
                    </View>

                    {
                        leaveData.map((item, i) => {
                            return (
                                <View key={i} style={[cs.mb2]}>
                                    <Text style={[cs.colorTextGray, cs.mb1]}>{item.cardHeader}</Text>
                                    <View style={[styles.leaveCardContainer]}>
                                        <View>
                                            <Text style={[cs.colorTextGray]}>{item.cardTitle}</Text>
                                            <Text style={[cs.font18, cs.textBold]}>{item.leaveDate}</Text>
                                            <Text style={item.leaveType === 'Casual' ? { color: '#fbbc05' } : {color:'#42b9b3'}}>{item.leaveType}</Text>
                                        </View>
                                        <View>
                                            <Badges
                                                title={item.status}
                                                bgColor={changeStyle(item.status).bgColor}
                                                color={changeStyle(item.status).color}
                                                radius={7}
                                                paddingH={12}
                                                paddingV={3}
                                                font={12}

                                            />
                                            <View style={[cs.displayEnd]}>
                                                <TouchableOpacity style={[styles.backBtn]}>
                                                    <Entypo name='chevron-right' size={26} color='white' />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
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
    btnAdd: {
        backgroundColor: styleData.colorWhite,
        padding: 6,
        borderRadius: 50
    },
    leaveCardContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#A5A5A5',
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backBtn: {
        marginTop: 10,
        backgroundColor: styleData.colorAquaGreen200,
        borderRadius: 5,
        width: 26,
        height: 26,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})