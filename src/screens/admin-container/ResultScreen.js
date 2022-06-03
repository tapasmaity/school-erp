import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import React from 'react';
import bgResultImg from '../../assets/images/result.png';
import LinearGradient from 'react-native-linear-gradient';
import { cs, HEIGHT, styleData } from '../../css/cs';
import { CustomBtn } from '../../component/allButton/CustomBtn';

export default function ResultScreen() {
    return (
        <View style={[cs.f1]}>
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
                <Image style={{ width: '100%' }} resizeMode='cover' source={bgResultImg} alt='logo' />
                <View style={[styles.percentage]}>
                    <Text style={[cs.textCenter, cs.textBold, { fontSize: 40 }]}>85%</Text>
                    <Text style={[cs.textCenter, cs.textBold, { fontSize: 14 }]}>GRADE  A</Text>
                </View>
            </LinearGradient>
            <View style={[cs.boxRoundTop, { marginTop: -30 }]}>
                <View style={[cs.displayColumnCenter]}>
                    <Text style={[cs.font15, cs.textBold]}>You are Excellent</Text>
                    <Text style={[cs.font25, cs.textBold]}>Akshay Syal !!</Text>
                </View>
                <View style={[styles.resultSheet, cs.my1]}>
                    <View style={[cs.displayBetween]}>
                        <View>
                            <Text style={[cs.p1]}>English</Text>
                            <Text style={[cs.p1]}>Hindi</Text>
                            <Text style={[cs.p1]}>Science</Text>
                            <Text style={[cs.p1]}>Math</Text>
                            <Text style={[cs.p1]}>Social Study</Text>
                            <Text style={[cs.p1]}>Drawing</Text>
                            <Text style={[cs.p1]}>Computer</Text>
                        </View>
                        <View style={[cs.displayBetween]}>
                            <View style={{ borderBottomLeftRadius: 10, borderTopLeftRadius: 10, overflow: 'hidden' }}>
                                <Text style={[styles.marks]}>100</Text>
                                <Text style={[styles.marks]}>100</Text>
                                <Text style={[styles.marks]}>100</Text>
                                <Text style={[styles.marks]}>100</Text>
                                <Text style={[styles.marks]}>100</Text>
                                <Text style={[styles.marks]}>100</Text>
                                <Text style={[styles.marks]}>100</Text>
                            </View>
                            <View>
                                <Text style={[styles.getMarks]}>74 - B</Text>
                                <Text style={[styles.getMarks]}>87 - B</Text>
                                <Text style={[styles.getMarks]}>74 - B</Text>
                                <Text style={[styles.getMarks]}>87 - B</Text>
                                <Text style={[styles.getMarks]}>89 - B</Text>
                                <Text style={[styles.getMarks]}>78 - B</Text>
                                <Text style={[styles.getMarks]}>96 - A</Text>
                            </View>
                        </View>
                    </View>

                </View>
                <CustomBtn
                    onPress={() =>{}}
                    title='DOWNLOAD PDF'
                    bgColor={[styleData.colorPrimary, styleData.colorPrimary300]}
                    color='white'
                    paddingY={16}
                    paddingX={20}
                    align="space-between"
                    fontSize={18}
                    iconColor="white"
                    iconSize={24}
                    rightIcon="file-pdf"
                    bold={true}
                />
            </View>
            <Image style={[styles.footerImg]} source={require('../../assets/images/footer.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
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
    },
    footerImg: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
})