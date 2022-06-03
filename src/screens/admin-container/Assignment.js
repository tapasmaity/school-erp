import { View, Text, StatusBar, StyleSheet, ScrollView } from 'react-native';
import React from 'react'
import { cs, styleData } from '../../css/cs';
import Badges from '../../component/badge/badges';
import { CustomBtn } from '../../component/allButton/CustomBtn';
import TopHeaderBgComponent from '../../component/comon-component/TopHeaderBgComponent';

export default function Assignment({ navigation }) {
    return (
        <View style={[cs.f1]}>
            <StatusBar
                barStyle='light-content'
                translucent={true}
                backgroundColor={'transparent'}
            />
            <TopHeaderBgComponent title="Assignment" />
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
    assignCardContainer: {
        marginBottom: 15,
        padding: 15,
        borderWidth: 1,
        borderColor: '#979797',
        borderRadius: 15
    }
})