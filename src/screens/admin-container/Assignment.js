import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react'
import { cs, HEIGHT, styleData } from '../../css/cs';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import starPattenImg from '../../assets/images/star_pattern.png';
import Badges from '../../component/badge/badges';
import { CustomBtn } from '../../component/allButton/CustomBtn';

export default function Assignment({ navigation }) {
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
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    style={{ flex: 1 }}
                >
                    <View style={[styles.assignCardContainer]}>
                        <Badges
                            title='Mathamatics'
                            bgColor={styleData.colorPrimary200}
                            color={styleData.colorPrimary}
                            radius={7}
                            paddingH={12}
                            paddingV={4}
                            font={15}
                        />
                        <Text style={[cs.textBold, cs.my1]}>Surface Areas and Volumes</Text>
                        <View style={[cs.displayBetween, cs.my05]}>
                            <Text>Assign Date</Text>
                            <Text>10 Nov 20</Text>
                        </View>
                        <View style={[cs.displayBetween, cs.my05]}>
                            <Text>Last Submission Date</Text>
                            <Text>10 Dec 20</Text>
                        </View>
                        <View style={[cs.my05]}>
                            <CustomBtn
                                onPress={() => { }}
                                title='TO BE SUBMITTED'
                                bgColor={[styleData.colorPrimary, styleData.colorPrimary300]}
                                color='white'
                                paddingY={15}
                                paddingX={20}
                                align="center"
                                fontSize={16}
                                bold={true}
                                hover={true}
                            />

                        </View>
                    </View>

                    <View style={[styles.assignCardContainer]}>
                        <Badges
                            title='Science'
                            bgColor={styleData.colorPrimary200}
                            color={styleData.colorPrimary}
                            radius={7}
                            paddingH={12}
                            paddingV={4}
                            font={15}
                        />
                        <Text style={[cs.textBold, cs.my1]}>Structure of Atoms</Text>
                        <View style={[cs.displayBetween, cs.my05]}>
                            <Text>Assign Date</Text>
                            <Text>10 Oct 20</Text>
                        </View>
                        <View style={[cs.displayBetween, cs.my05]}>
                            <Text>Last Submission Date</Text>
                            <Text>20 Oct 30</Text>
                        </View>
                        <View style={[cs.my05]}>
                            <CustomBtn
                                onPress={() => { }}
                                title='TO BE SUBMITTED'
                                bgColor={[styleData.colorPrimary, styleData.colorPrimary300]}
                                color='white'
                                paddingY={15}
                                paddingX={20}
                                align="center"
                                fontSize={16}
                                bold={true}
                                hover={true}
                            />

                        </View>
                    </View>

                    <View style={[styles.assignCardContainer]}>
                        <Badges
                            title='English'
                            bgColor={styleData.colorPrimary200}
                            color={styleData.colorPrimary}
                            radius={7}
                            paddingH={12}
                            paddingV={4}
                            font={15}
                        />
                        <Text style={[cs.textBold, cs.my1]}>My Bestfriend Essay</Text>
                        <View style={[cs.displayBetween, cs.my05]}>
                            <Text>Assign Date</Text>
                            <Text>10 Sep 20</Text>
                        </View>
                        <View style={[cs.displayBetween, cs.my05]}>
                            <Text>Last Submission Date</Text>
                            <Text>20 Sep 30</Text>
                        </View>
                        <View style={[cs.my05]}>
                            <CustomBtn
                                onPress={() => { }}
                                title='TO BE SUBMITTED'
                                bgColor={[styleData.colorPrimary, styleData.colorPrimary300]}
                                color='white'
                                paddingY={15}
                                paddingX={20}
                                align="center"
                                fontSize={16}
                                bold={true}
                                hover={true}
                            />

                        </View>
                    </View>

                    <View style={[styles.assignCardContainer]}>
                        <Badges
                            title='Computer'
                            bgColor={styleData.colorPrimary200}
                            color={styleData.colorPrimary}
                            radius={7}
                            paddingH={12}
                            paddingV={4}
                            font={15}
                        />
                        <Text style={[cs.textBold, cs.my1]}>Basic Structure</Text>
                        <View style={[cs.displayBetween, cs.my05]}>
                            <Text>Assign Date</Text>
                            <Text>10 Jun 20</Text>
                        </View>
                        <View style={[cs.displayBetween, cs.my05]}>
                            <Text>Last Submission Date</Text>
                            <Text>20 Jun 30</Text>
                        </View>
                        <View style={[cs.my05]}>
                            <CustomBtn
                                onPress={() => { }}
                                title='TO BE SUBMITTED'
                                bgColor={[styleData.colorPrimary, styleData.colorPrimary300]}
                                color='white'
                                paddingY={15}
                                paddingX={20}
                                align="center"
                                fontSize={16}
                                bold={true}
                                hover={true}
                            />

                        </View>
                    </View>
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
    assignCardContainer: {
        marginBottom: 15,
        padding: 15,
        borderWidth: 1,
        borderColor: '#979797',
        borderRadius: 15
    }
})