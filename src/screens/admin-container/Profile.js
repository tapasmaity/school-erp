import { View, Text, ScrollView, StatusBar, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { cs, HEIGHT, styleData, WIDTH } from '../../css/cs';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import starPattenImg from '../../assets/images/star_pattern.png';
import Badges from '../../component/badge/badges';

export default function Profile({ navigation }) {
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
                <View style={[cs.displayBetween, cs.mt3]}>
                    <TouchableOpacity onPress={() => navigation.goBack('')} style={[cs.displayStart]}>
                        <Icon name='chevron-left' size={30} color='white' />
                        <Text style={[cs.font20, cs.colorWhite, cs.textBold]}>My Profile</Text>
                    </TouchableOpacity>
                    <View>
                        <Badges
                            title='Done'
                            leftIcon='check'
                            paddingH={10}
                            font={15}
                            color='#6688CA'
                            iconColor='#6688CA'
                        />
                    </View>
                </View>
                <Image style={[styles.starBg]} resizeMode="stretch" source={starPattenImg} alt='logo' />
            </LinearGradient>
            <View style={[cs.boxRoundTop, { marginTop: -30 }]}>
                <ScrollView 
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                >
                    <View style={[styles.profileContainer]}>
                        <View style={[cs.displayStart]}>
                            <View style={[styles.profileImgSec, cs.mr1]}>
                                <Image style={[styles.profileImgSec]} resizeMode='cover' source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} />
                            </View>
                            <View>
                                <Text style={[cs.font18, cs.textBold]}>Akshey Syal</Text>
                                <Text style={[cs.colorGray]}>Class XI-B  |  Roll no: 04</Text>
                            </View>
                        </View>
                        <Feather name='camera' size={30} color={styleData.colorGray} />
                    </View>
                    <View style={[cs.displayBetween, cs.mt2]}>
                        <View style={{ width: WIDTH / 2.4 }}>
                            <Text style={[cs.font12]}>Aadhaar No</Text>
                            <View style={[cs.displayBetween, styles.inputStyle]}>
                                <View style={[cs.displayStart]}>
                                    <TextInput
                                        style={[cs.font15, { width: '100%', paddingLeft: 0, color:'#000000' }]}
                                        placeholder="7234 7635 4677 3556"
                                        placeholderTextColor="#979797"
                                        // onChangeText={(txt) => evantHandler(txt, "psw")}
                                        keyboardType="number-pad"
                                    // defaultValue={password}  
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: WIDTH / 2.4 }}>
                            <Text style={[cs.font12]}>Academic Year</Text>
                            <View style={[cs.displayBetween, styles.inputStyle]}>
                                <View style={[cs.displayStart]}>
                                    <TextInput
                                        style={[cs.font15, { width: '100%', paddingLeft: 0, color:'#000000' }]}
                                        placeholder="2020-2021"
                                        placeholderTextColor="#979797"
                                        // onChangeText={(txt) => evantHandler(txt, "psw")}
                                        keyboardType="number-pad"
                                    // defaultValue={password}  
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[cs.displayBetween, cs.mt2]}>
                        <View style={{ width: WIDTH / 2.4 }}>
                            <Text style={[cs.font12]}>Admission Class</Text>
                            <View style={[cs.displayBetween, styles.inputStyle]}>
                                <View style={[cs.displayStart]}>
                                    <TextInput
                                        style={[cs.font15, { width: '80%', paddingLeft: 0, color:'#000000' }]}
                                        placeholder="VI"
                                        placeholderTextColor="#979797"
                                        // onChangeText={(txt) => evantHandler(txt, "psw")}
                                        keyboardType="default"
                                    // defaultValue={password}  
                                    />
                                </View>
                                <View>
                                    <Icon name='lock' size={22} color={styleData.colorGray} />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: WIDTH / 2.4 }}>
                            <Text style={[cs.font12]}>Admission No</Text>
                            <View style={[cs.displayBetween, styles.inputStyle]}>
                                <View style={[cs.displayStart]}>
                                    <TextInput
                                        style={[cs.font15, { width: '80%', paddingLeft: 0, color:'#000000' }]}
                                        placeholder="T00221"
                                        placeholderTextColor="#979797"
                                        // onChangeText={(txt) => evantHandler(txt, "psw")}
                                        keyboardType="default"
                                    // defaultValue={password}  
                                    />
                                </View>
                                <View>
                                    <Icon name='lock' size={22} color={styleData.colorGray} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[cs.displayBetween, cs.mt2]}>
                        <View style={{ width: WIDTH / 2.4 }}>
                            <Text style={[cs.font12]}>Date of Admission</Text>
                            <View style={[cs.displayBetween, styles.inputStyle]}>
                                <View style={[cs.displayStart]}>
                                    <TextInput
                                        style={[cs.font15, { width: '80%', paddingLeft: 0, color:'#000000' }]}
                                        placeholder="01 Apr 2018"
                                        placeholderTextColor="#979797"
                                        // onChangeText={(txt) => evantHandler(txt, "psw")}
                                        keyboardType="default"
                                    // defaultValue={password}  
                                    />
                                </View>
                                <View>
                                    <Icon name='lock' size={22} color={styleData.colorGray} />
                                </View>
                            </View>
                        </View>
                        <View style={{ width: WIDTH / 2.4 }}>
                            <Text style={[cs.font12]}>Date of Birth</Text>
                            <View style={[cs.displayBetween, styles.inputStyle]}>
                                <View style={[cs.displayStart]}>
                                    <TextInput
                                        style={[cs.font15, { width: '80%', paddingLeft: 0, color:'#000000' }]}
                                        placeholder="22 July 1996"
                                        placeholderTextColor="#979797"
                                        // onChangeText={(txt) => evantHandler(txt, "psw")}
                                        keyboardType="default"
                                    // defaultValue={password}  
                                    />
                                </View>
                                <View>
                                    <Icon name='lock' size={22} color={styleData.colorGray} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[cs.mt2]}>
                        <Text style={[cs.font12]}>Parent Mail ID</Text>
                        <View style={[cs.displayBetween, styles.inputStyle]}>
                            <View style={[cs.displayStart]}>
                                <TextInput
                                    style={[cs.font15, { width: '80%', paddingLeft: 0, color:'#000000' }]}
                                    placeholder="parentboth84@gmail.com"
                                    placeholderTextColor="#979797"
                                    // onChangeText={(txt) => evantHandler(txt, "psw")}
                                    keyboardType="default"
                                // defaultValue={password}  
                                />
                            </View>
                            <View>
                                <Icon name='lock' size={22} color={styleData.colorGray} />
                            </View>
                        </View>
                    </View>
                    <View style={[cs.mt2]}>
                        <Text style={[cs.font12]}>Mother Name</Text>
                        <View style={[cs.displayBetween, styles.inputStyle]}>
                            <View style={[cs.displayStart]}>
                                <TextInput
                                    style={[cs.font15, { width: '80%', paddingLeft: 0, color:'#000000' }]}
                                    placeholder="Monica Larson"
                                    placeholderTextColor="#979797"
                                    // onChangeText={(txt) => evantHandler(txt, "psw")}
                                    keyboardType="default"
                                // defaultValue={password}  
                                />
                            </View>
                            <View>
                                <Icon name='lock' size={22} color={styleData.colorGray} />
                            </View>
                        </View>
                    </View>
                    <View style={[cs.mt2]}>
                        <Text style={[cs.font12]}>Father Name</Text>
                        <View style={[cs.displayBetween, styles.inputStyle]}>
                            <View style={[cs.displayStart]}>
                                <TextInput
                                    style={[cs.font15, { width: '80%', paddingLeft: 0, color:'#000000' }]}
                                    placeholder="Bernard Taylor"
                                    placeholderTextColor="#979797"
                                    // onChangeText={(txt) => evantHandler(txt, "psw")}
                                    keyboardType="default"
                                // defaultValue={password}  
                                />
                            </View>
                            <View>
                                <Icon name='lock' size={22} color={styleData.colorGray} />
                            </View>
                        </View>
                    </View>
                    <View style={[cs.mt2]}>
                        <Text style={[cs.font12]}>Parmanent Add.</Text>
                        <View style={[cs.displayBetween, styles.inputStyle]}>
                            <View style={[cs.displayStart]}>
                                <TextInput
                                    style={[cs.font15, { width: '80%', paddingLeft: 0, color:'#000000' }]}
                                    placeholder="Karol Bagh, Delhi"
                                    placeholderTextColor="#979797"
                                    // onChangeText={(txt) => evantHandler(txt, "psw")}
                                    keyboardType="default"
                                // defaultValue={password}  
                                />
                            </View>
                            <View>
                                <Icon name='lock' size={22} color={styleData.colorGray} />
                            </View>
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
    profileContainer: {
        borderWidth: 1,
        borderColor: '#5278C1',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    profileImgSec: {
        backgroundColor: styleData.colorLightGray,
        height: 70,
        width: 70,
        borderRadius: 10
    },
    inputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: styleData.colorGray
    },
})