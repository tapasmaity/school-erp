import { StyleSheet, Text, View, ScrollView, StatusBar, TextInput } from 'react-native'
import React from 'react'
import { cs, HEIGHT, styleData } from '../../css/cs'
import TopHeaderBgComponent from '../../component/comon-component/TopHeaderBgComponent'
import { CustomBtn } from '../../component/allButton/CustomBtn'
import FooterBgImg from '../../component/comon-component/FooterBgImg'

export default function ChangePassword() {
    return (
        <View style={[cs.f1]}>
            <StatusBar
                barStyle='light-content'
                translucent={true}
                backgroundColor='transparent'
            />
            <TopHeaderBgComponent title="Change Password" />
            <View style={[cs.boxRoundTop, cs.f1, { marginTop: -30 }]}>
                <ScrollView
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    style={[cs.f1, { marginBottom: HEIGHT / 8 }]}
                >
                    <View style={[cs.mb3]}>
                        <Text>Old Password</Text>
                        <View style={[cs.displayBetween, styles.inputStyle]}>
                            <View style={[cs.displayStart]}>
                                <TextInput
                                    style={[cs.font15, { width: '100%', paddingLeft: 0, color: '#000000' }]}
                                    placeholder="..."
                                    placeholderTextColor="#979797"
                                    // onChangeText={(txt) => evantHandler(txt, "psw")}
                                    keyboardType="default"
                                // defaultValue={password}  
                                />
                            </View>
                        </View>
                    </View>
                    <View style={[cs.mb3]}>
                        <Text>New Password</Text>
                        <View style={[cs.displayBetween, styles.inputStyle]}>
                            <View style={[cs.displayStart]}>
                                <TextInput
                                    style={[cs.font15, { width: '100%', paddingLeft: 0, color: '#000000' }]}
                                    placeholder="..."
                                    placeholderTextColor="#979797"
                                    // onChangeText={(txt) => evantHandler(txt, "psw")}
                                    keyboardType="default"
                                // defaultValue={password}  
                                />
                            </View>
                        </View>
                    </View>
                    <View style={[cs.mb3]}>
                        <Text>Repeat Password</Text>
                        <View style={[cs.displayBetween, styles.inputStyle]}>
                            <View style={[cs.displayStart]}>
                                <TextInput
                                    style={[cs.font15, { width: '100%', paddingLeft: 0, color: '#000000' }]}
                                    placeholder="..."
                                    placeholderTextColor="#979797"
                                    // onChangeText={(txt) => evantHandler(txt, "psw")}
                                    keyboardType="default"
                                // defaultValue={password}  
                                />
                            </View>
                        </View>
                    </View>
                    <CustomBtn
                        onPress={() => { }}
                        title='CHANGE PASSWORD'
                        bgColor={[styleData.colorPrimary, styleData.colorPrimary300]}
                        color='white'
                        paddingY={16}
                        paddingX={20}
                        align="center"
                        fontSize={18}
                        bold={true}
                        hover={true}
                    />
                </ScrollView>
            </View>
            <FooterBgImg />
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#A5A5A5'
    },
})