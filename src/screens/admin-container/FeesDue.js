import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { cs, HEIGHT, styleData } from '../../css/cs'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import starPattenImg from '../../assets/images/star_pattern.png';

export default function FeesDue({ navigation }) {
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
                    <Text style={[cs.font20, cs.colorWhite, cs.textBold]}>Fees Due</Text>
                </View>
                <Image style={[styles.starBg]} resizeMode="stretch" source={starPattenImg} alt='logo' />
            </LinearGradient>
            <View style={[cs.boxRoundTop, cs.f1, { marginTop: -30 }]}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    style={{ flex: 1 }}
                >

                    <View style={[styles.feeListContainer, cs.mb2]}>
                        <View style={[cs.p1]}>
                            <View style={[cs.displayBetween, styles.bBottom, cs.py1]}>
                                <Text>Receipt No.</Text>
                                <Text>#98761</Text>
                            </View>
                            <View style={[styles.bBottom, cs.py1]}>
                                <View style={[cs.displayBetween, cs.py05]}>
                                    <Text>Month</Text>
                                    <Text>October</Text>
                                </View>
                                <View style={[cs.displayBetween, cs.py05]}>
                                    <Text>Payment Date	</Text>
                                    <Text>10 Oct 20</Text>
                                </View>
                            </View>
                            <View style={[cs.displayBetween, cs.py1]}>
                                <Text>Total Pending Amount</Text>
                                <Text>₹999</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>navigation.navigate('PayOnline')} style={[styles.payBtn]}>
                            <Text style={[cs.font18, cs.mr1, cs.colorWhite]}>PAY NOW</Text>
                            <FontAwesome name='long-arrow-right' size={20} color='white' />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.feeListContainer, cs.mb2]}>
                        <View style={[cs.p1]}>
                            <View style={[cs.displayBetween, styles.bBottom, cs.py1]}>
                                <Text>Receipt No.</Text>
                                <Text>#98431</Text>
                            </View>
                            <View style={[styles.bBottom, cs.py1]}>
                                <View style={[cs.displayBetween, cs.py05]}>
                                    <Text>Month</Text>
                                    <Text>September</Text>
                                </View>
                                <View style={[cs.displayBetween, cs.py05]}>
                                    <Text>Payment Date</Text>
                                    <Text>10 Oct 20</Text>
                                </View>
                                <View style={[cs.displayBetween, cs.py05]}>
                                    <Text>Pay Mode</Text>
                                    <Text>Cash on Counter</Text>
                                </View>
                            </View>
                            <View style={[cs.displayBetween, cs.py1]}>
                                <Text>Total Amount</Text>
                                <Text>₹999</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={[styles.payBtn]}>
                            <Text style={[cs.font18, cs.mr1, cs.colorWhite]}>DOWNLOAD</Text>
                            <FontAwesome name='download' size={20} color='white' />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.feeListContainer, cs.mb2]}>
                        <View style={[cs.p1]}>
                            <View style={[cs.displayBetween, styles.bBottom, cs.py1]}>
                                <Text>Receipt No.</Text>
                                <Text>#98761</Text>
                            </View>
                            <View style={[styles.bBottom, cs.py1]}>
                                <View style={[cs.displayBetween, cs.py05]}>
                                    <Text>Month</Text>
                                    <Text>August</Text>
                                </View>
                                <View style={[cs.displayBetween, cs.py05]}>
                                    <Text>Payment Date	</Text>
                                    <Text>10 Oct 20</Text>
                                </View>
                            </View>
                            <View style={[cs.displayBetween, cs.py1]}>
                                <Text>Total Amount</Text>
                                <Text>₹999</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={[styles.payBtn]}>
                            <Text style={[cs.font18, cs.mr1, cs.colorWhite]}>DOWNLOAD</Text>
                            <FontAwesome name='download' size={20} color='white' />
                        </TouchableOpacity>
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
    feeListContainer: {
        borderWidth: 1,
        borderColor: '#E1E3E8',
        borderRadius: 10
    },
    bBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#E1E3E8'
    },
    payBtn: {
        backgroundColor: '#6789CA',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55
    }
})