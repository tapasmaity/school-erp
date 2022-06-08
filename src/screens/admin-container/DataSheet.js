import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import TopHeaderBgComponent from '../../component/comon-component/TopHeaderBgComponent'
import { cs, HEIGHT, styleData, WIDTH } from '../../css/cs';
import Feather from 'react-native-vector-icons/Feather'
import FooterBgImg from '../../component/comon-component/FooterBgImg';

export default function DataSheet() {
    return (
        <View style={[cs.f1]}>
            <StatusBar
                barStyle='light-content'
                translucent={true}
                backgroundColor='transparent'
            />
            <TopHeaderBgComponent title='Datasheet' />
            <View style={[cs.boxRoundTop, cs.f1, { marginTop: -30 }]}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    style={{ flex: 1, marginBottom:HEIGHT / 8 }}
                >

                    <View style={[cs.displayBetween]}>
                        <View style={[cs.displayColumnCenter, cs.pr2, { width: WIDTH / 6.7 }]}>
                            <Text style={[cs.font22, cs.textBold]}>11</Text>
                            <Text style={[cs.textBold]}>JAN</Text>
                        </View>
                        <View style={[cs.displayBetween, cs.f1, styles.cardSubMenu]}>
                            <View>
                                <Text style={[cs.textBold, cs.font15, cs.mb05]}>Science</Text>
                                <Text style={[cs.colorGray]}>Monday</Text>
                            </View>
                            <View style={[cs.displayStart]}>
                                <Feather name='clock' size={18} color={styleData.colorGray} />
                                <Text style={[cs.colorGray]}>09:00 AM</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[cs.displayBetween]}>
                        <View style={[cs.displayColumnCenter, cs.pr2, { width: WIDTH / 6.7 }]}>
                            <Text style={[cs.font22, cs.textBold]}>13</Text>
                            <Text style={[cs.textBold]}>JAN</Text>
                        </View>
                        <View style={[cs.displayBetween, cs.f1, styles.cardSubMenu]}>
                            <View>
                                <Text style={[cs.textBold, cs.font15, cs.mb05]}>English</Text>
                                <Text style={[cs.colorGray]}>Wednesday</Text>
                            </View>
                            <View style={[cs.displayStart]}>
                                <Feather name='clock' size={18} color={styleData.colorGray} />
                                <Text style={[cs.colorGray]}>09:00 AM</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[cs.displayBetween]}>
                        <View style={[cs.displayColumnCenter, cs.pr2, { width: WIDTH / 6.7 }]}>
                            <Text style={[cs.font22, cs.textBold]}>15</Text>
                            <Text style={[cs.textBold]}>JAN</Text>
                        </View>
                        <View style={[cs.displayBetween, cs.f1, styles.cardSubMenu]}>
                            <View>
                                <Text style={[cs.textBold, cs.font15, cs.mb05]}>Hindi</Text>
                                <Text style={[cs.colorGray]}>Friday</Text>
                            </View>
                            <View style={[cs.displayStart]}>
                                <Feather name='clock' size={18} color={styleData.colorGray} />
                                <Text style={[cs.colorGray]}>09:00 AM</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[cs.displayBetween]}>
                        <View style={[cs.displayColumnCenter, cs.pr2, { width: WIDTH / 6.7 }]}>
                            <Text style={[cs.font22, cs.textBold]}>18</Text>
                            <Text style={[cs.textBold]}>JAN</Text>
                        </View>
                        <View style={[cs.displayBetween, cs.f1, styles.cardSubMenu]}>
                            <View>
                                <Text style={[cs.textBold, cs.font15, cs.mb05]}>Math</Text>
                                <Text style={[cs.colorGray]}>Monday</Text>
                            </View>
                            <View style={[cs.displayStart]}>
                                <Feather name='clock' size={18} color={styleData.colorGray} />
                                <Text style={[cs.colorGray]}>09:00 AM</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[cs.displayBetween]}>
                        <View style={[cs.displayColumnCenter, cs.pr2, { width: WIDTH / 6.7 }]}>
                            <Text style={[cs.font22, cs.textBold]}>20</Text>
                            <Text style={[cs.textBold]}>JAN</Text>
                        </View>
                        <View style={[cs.displayBetween, cs.f1, styles.cardSubMenu]}>
                            <View>
                                <Text style={[cs.textBold, cs.font15, cs.mb05]}>Social Study</Text>
                                <Text style={[cs.colorGray]}>Wednesday</Text>
                            </View>
                            <View style={[cs.displayStart]}>
                                <Feather name='clock' size={18} color={styleData.colorGray} />
                                <Text style={[cs.colorGray]}>09:00 AM</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[cs.displayBetween]}>
                        <View style={[cs.displayColumnCenter, cs.pr2, { width: WIDTH / 6.7 }]}>
                            <Text style={[cs.font22, cs.textBold]}>22</Text>
                            <Text style={[cs.textBold]}>JAN</Text>
                        </View>
                        <View style={[cs.displayBetween, cs.f1, styles.cardSubMenu]}>
                            <View>
                                <Text style={[cs.textBold, cs.font15, cs.mb05]}>Drawing</Text>
                                <Text style={[cs.colorGray]}>Friday</Text>
                            </View>
                            <View style={[cs.displayStart]}>
                                <Feather name='clock' size={18} color={styleData.colorGray} />
                                <Text style={[cs.colorGray]}>09:00 AM</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[cs.displayBetween]}>
                        <View style={[cs.displayColumnCenter, cs.pr2, { width: WIDTH / 6.7 }]}>
                            <Text style={[cs.font22, cs.textBold]}>25</Text>
                            <Text style={[cs.textBold]}>JAN</Text>
                        </View>
                        <View style={[cs.displayBetween, cs.f1, styles.cardSubMenu]}>
                            <View>
                                <Text style={[cs.textBold, cs.font15, cs.mb05]}>Computer</Text>
                                <Text style={[cs.colorGray]}>Monday</Text>
                            </View>
                            <View style={[cs.displayStart]}>
                                <Feather name='clock' size={18} color={styleData.colorGray} />
                                <Text style={[cs.colorGray]}>09:00 AM</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[cs.displayBetween]}>
                        <View style={[cs.displayColumnCenter, cs.pr2, { width: WIDTH / 6.7 }]}>
                            <Text style={[cs.font22, cs.textBold]}>26</Text>
                            <Text style={[cs.textBold]}>JAN</Text>
                        </View>
                        <View style={[cs.displayBetween, cs.f1, styles.cardSubMenu]}>
                            <View>
                                <Text style={[cs.textBold, cs.font15, cs.mb05]}>Sport</Text>
                                <Text style={[cs.colorGray]}>Tuesday</Text>
                            </View>
                            <View style={[cs.displayStart]}>
                                <Feather name='clock' size={18} color={styleData.colorGray} />
                                <Text style={[cs.colorGray]}>09:00 AM</Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>
            <FooterBgImg />
        </View>
    )
}

const styles = StyleSheet.create({
    cardSubMenu: {
        borderTopWidth: 1,
        borderTopColor: '#A5A5A5',
        paddingVertical: 10
    }
})