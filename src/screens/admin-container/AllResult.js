import { StyleSheet, Text, View, StatusBar, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { cs, HEIGHT, randomColor, styleData, WIDTH } from '../../css/cs';
import { VictoryChart, VictoryTheme, VictoryLine, VictoryPolarAxis, VictoryVoronoiContainer } from 'victory-native';
import { CustomBtn } from '../../component/allButton/CustomBtn';
import Entypo from 'react-native-vector-icons/Entypo';


export default function AllResult({ navigation }) {
    const [dropValue, setDropValue] = useState(0);

    /*
    * Chart
    * Data
    */
    const cardData = [
        {
            year: '2015',
            subjects: [
                {
                    subject_name: 'English',
                    totalMarks: 100,
                    getMarks: 74,
                    grade: 'B'
                },
                {
                    subject_name: 'Hindi',
                    totalMarks: 100,
                    getMarks: 87,
                    grade: 'B'
                },
                {
                    subject_name: 'Science',
                    totalMarks: 100,
                    getMarks: 74,
                    grade: 'B'
                },
                {
                    subject_name: 'Math',
                    totalMarks: 100,
                    getMarks: 83,
                    grade: 'B'
                },
                {
                    subject_name: 'Social Study',
                    totalMarks: 100,
                    getMarks: 90,
                    grade: 'A'
                },
                {
                    subject_name: 'Drawing',
                    totalMarks: 100,
                    getMarks: 78,
                    grade: 'B'
                },
                {
                    subject_name: 'Computer',
                    totalMarks: 100,
                    getMarks: 96,
                    grade: 'A+'
                },
            ]
        },
        {
            year: '2016',
            subjects: [
                {
                    subject_name: 'English',
                    totalMarks: 100,
                    getMarks: 85,
                    grade: 'B'
                },
                {
                    subject_name: 'Hindi',
                    totalMarks: 100,
                    getMarks: 73,
                    grade: 'B'
                },
                {
                    subject_name: 'Science',
                    totalMarks: 100,
                    getMarks: 74,
                    grade: 'B'
                },
                {
                    subject_name: 'Math',
                    totalMarks: 100,
                    getMarks: 90,
                    grade: 'A'
                },
                {
                    subject_name: 'Drawing',
                    totalMarks: 100,
                    getMarks: 78,
                    grade: 'B'
                },
                {
                    subject_name: 'Computer',
                    totalMarks: 100,
                    getMarks: 96,
                    grade: 'A+'
                },
            ]
        },
        {
            year: '2017',
            subjects: [
                {
                    subject_name: 'English',
                    totalMarks: 100,
                    getMarks: 74,
                    grade: 'B'
                },
                {
                    subject_name: 'Hindi',
                    totalMarks: 100,
                    getMarks: 87,
                    grade: 'B'
                },
                {
                    subject_name: 'Science',
                    totalMarks: 100,
                    getMarks: 74,
                    grade: 'B'
                },
                {
                    subject_name: 'Math',
                    totalMarks: 100,
                    getMarks: 83,
                    grade: 'B'
                },
                {
                    subject_name: 'Social Study',
                    totalMarks: 100,
                    getMarks: 90,
                    grade: 'A'
                },
                {
                    subject_name: 'Drawing',
                    totalMarks: 100,
                    getMarks: 78,
                    grade: 'B'
                },
                {
                    subject_name: 'Computer',
                    totalMarks: 100,
                    getMarks: 96,
                    grade: 'A+'
                },
            ]
        },
        {
            year: '2018',
            subjects: [
                {
                    subject_name: 'English',
                    totalMarks: 100,
                    getMarks: 74,
                    grade: 'B'
                },
                {
                    subject_name: 'Science',
                    totalMarks: 100,
                    getMarks: 74,
                    grade: 'B'
                },
                {
                    subject_name: 'Math',
                    totalMarks: 100,
                    getMarks: 83,
                    grade: 'B'
                },
                {
                    subject_name: 'Social Study',
                    totalMarks: 100,
                    getMarks: 90,
                    grade: 'A'
                },
                {
                    subject_name: 'Computer',
                    totalMarks: 100,
                    getMarks: 96,
                    grade: 'A+'
                },
            ]
        },
        {
            year: '2019',
            subjects: [
                {
                    subject_name: 'English',
                    totalMarks: 100,
                    getMarks: 74,
                    grade: 'B'
                },
                {
                    subject_name: 'Hindi',
                    totalMarks: 100,
                    getMarks: 87,
                    grade: 'B'
                },
                {
                    subject_name: 'Science',
                    totalMarks: 100,
                    getMarks: 74,
                    grade: 'B'
                },
                {
                    subject_name: 'Math',
                    totalMarks: 100,
                    getMarks: 83,
                    grade: 'B'
                },
                {
                    subject_name: 'Social Study',
                    totalMarks: 100,
                    getMarks: 90,
                    grade: 'A'
                },
                {
                    subject_name: 'Drawing',
                    totalMarks: 100,
                    getMarks: 78,
                    grade: 'B'
                },
                {
                    subject_name: 'Computer',
                    totalMarks: 100,
                    getMarks: 96,
                    grade: 'A+'
                },
            ]
        },
        {
            year: '2020',
            subjects: [
                {
                    subject_name: 'English',
                    totalMarks: 100,
                    getMarks: 74,
                    grade: 'B'
                },
                {
                    subject_name: 'Hindi',
                    totalMarks: 100,
                    getMarks: 87,
                    grade: 'B'
                },
                {
                    subject_name: 'Science',
                    totalMarks: 100,
                    getMarks: 74,
                    grade: 'B'
                },
                {
                    subject_name: 'Math',
                    totalMarks: 100,
                    getMarks: 83,
                    grade: 'B'
                },
                {
                    subject_name: 'Social Study',
                    totalMarks: 100,
                    getMarks: 90,
                    grade: 'A'
                },
                {
                    subject_name: 'Drawing',
                    totalMarks: 100,
                    getMarks: 78,
                    grade: 'B'
                },
                {
                    subject_name: 'Computer',
                    totalMarks: 100,
                    getMarks: 96,
                    grade: 'A+'
                },
            ]
        },
        {
            year: '2021',
            subjects: [
                {
                    subject_name: 'English',
                    totalMarks: 100,
                    getMarks: 74,
                    grade: 'B'
                },
                {
                    subject_name: 'Hindi',
                    totalMarks: 100,
                    getMarks: 87,
                    grade: 'B'
                },
                {
                    subject_name: 'Science',
                    totalMarks: 100,
                    getMarks: 74,
                    grade: 'B'
                },
                {
                    subject_name: 'Math',
                    totalMarks: 100,
                    getMarks: 83,
                    grade: 'B'
                },
                {
                    subject_name: 'Social Study',
                    totalMarks: 100,
                    getMarks: 90,
                    grade: 'A'
                },
                {
                    subject_name: 'Drawing',
                    totalMarks: 100,
                    getMarks: 78,
                    grade: 'B'
                },
                {
                    subject_name: 'Computer',
                    totalMarks: 100,
                    getMarks: 96,
                    grade: 'A+'
                },
            ]
        },
    ]


    /*
    * Chart
    * Data
    */
    const chartLineData = [
        { x: '15', y: 30 },
        { x: '16', y: 90 },
        { x: '17', y: 50 },
        { x: '18', y: 60 },
        { x: '19', y: 70 },
        { x: '20', y: 68 },
        { x: '21', y: 90 },
        { x: '22', y: 100 }
    ]

    const eventHandler = (val) => {
        if (val === dropValue) {
            setDropValue(null)
        } else {
            setDropValue(val);
        }
    }

    return (
        <View style={[cs.f1]}>
            <StatusBar
                barStyle='dark-content'
                translucent={true}
                backgroundColor={'transparent'}
            />
            <ImageBackground>
                <VictoryLine
                    style={{
                        data: {
                            stroke: randomColor(),
                            strokeWidth: ({ data }) => 5
                        },
                        labels: { fill: randomColor(), fontSize: 12 }
                    }}
                    interpolation="natural"
                    data={chartLineData}
                    labels={({ datum }) => datum.x + '/' + datum.y}
                    theme={VictoryTheme.material}
                    height={HEIGHT / 2.8}
                    width={WIDTH}
                    padding={{top:60, bottom:10, left:10, right:10}}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}
                />
                <TouchableOpacity onPress={() => navigation.goBack('')} style={[styles.backBtn]}>
                    <Entypo name='chevron-left' size={30} color='white' />
                </TouchableOpacity>
            </ImageBackground>
            <View style={[cs.boxRoundTop,cs.f1, { marginTop: -30 }]}>
                <View style={[cs.displayColumnCenter]}>
                    <Text style={[cs.font22, cs.textBold, cs.colorTextGray, cs.mb05]}>Akshay Syal !!</Text>
                </View>
                <ScrollView
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    style={[cs.f1]}
                >
                    {cardData && cardData.map((item, i) => {
                        return (
                            <View key={i} style={[styles.cardContainer]}>
                                <TouchableOpacity onPress={() => eventHandler(i)} style={[cs.displayBetween, cs.bgcolorAquaGreen, cs.py2, cs.px1]}>
                                    <Text style={[cs.font15, cs.textBold]}>{item.year} Exam Result</Text>
                                    <Entypo name='chevron-right' size={24} color='#000000' />
                                </TouchableOpacity>

                                {
                                    dropValue === i ?
                                    <View>
                                        <View style={[styles.resultSheet, cs.m1]}>
                                            <View style={[cs.displayBetween]}>
                                                <View>
                                                    {
                                                        item.subjects.map((sub, index) => {
                                                            return (
                                                                <Text key={index} style={[cs.p1]}>{sub.subject_name}</Text>
                                                            );
                                                        })
                                                    }
                                                </View>
                                                <View style={[cs.displayBetween]}>
                                                    <View style={{ borderBottomLeftRadius: 10, borderTopLeftRadius: 10, overflow: 'hidden' }}>
                                                        {
                                                            item.subjects.map((sub, m) => {
                                                                return (
                                                                    <Text key={m} style={[styles.marks]}>{sub.totalMarks}</Text>
                                                                );
                                                            })
                                                        }
                                                    </View>
                                                    <View>
                                                        {
                                                            item.subjects.map((sub, t) => {
                                                                return (
                                                                    <Text key={t} style={[styles.getMarks]}>{sub.getMarks} - {sub.grade}</Text>
                                                                );
                                                            })
                                                        }
                                                    </View>
                                                </View>
                                            </View>

                                        </View>
                                        <View style={[cs.mx1, cs.mb1]}>
                                            <CustomBtn
                                                onPress={() => { }}
                                                title='DOWNLOAD PDF'
                                                bgColor={[styleData.colorPrimary, styleData.colorPrimary300]}
                                                color='white'
                                                paddingY={14}
                                                paddingX={20}
                                                align="space-between"
                                                fontSize={16}
                                                iconColor="white"
                                                iconSize={24}
                                                rightIcon="file-pdf"
                                                bold={true}
                                            />
                                        </View>
                                    </View>
                                    :
                                    <View></View>
                                }
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderWidth: 1,
        borderColor: '#A5A5A5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 5
    },
    feedsHeaderContainer: {
        height: HEIGHT / 2.5,
        backgroundColor: styleData.colorAquaGreen300,
        position: "relative"
    },
    backBtn: {
        position: 'absolute',
        top: 60,
        left: 25,
        backgroundColor: '#00000030',
        borderRadius: 5
    },
    linearBg: {
        height: HEIGHT / 2.5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'relative'
    },
    percentage: {
        position: 'absolute',
        top: '38%',
        textAlign: 'center',
    },
    resultSheet: {
        borderWidth: 1,
        borderColor: '#E1E3E8',
        borderRadius: 10,
        overflow: 'hidden'
    },
    marks: {
        backgroundColor: '#E6EFFF',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    getMarks: {
        backgroundColor: '#E1E3E8',
        paddingHorizontal: 20,
        paddingVertical: 10
    }
})