import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react';
import TopHeaderBgComponent from '../../component/comon-component/TopHeaderBgComponent'
import { cs, HEIGHT, styleData } from '../../css/cs'
import FooterBgImg from '../../component/comon-component/FooterBgImg';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Dropdown } from 'react-native-element-dropdown';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { CustomBtn } from '../../component/allButton/CustomBtn';

const teachers = [
    { label: 'Shubhanil Roy', value: '1' },
    { label: 'Kunal Pramanik', value: '2' },
    { label: 'Pabitra Mandol', value: '3' },
    { label: 'Sudip Laheri', value: '4' },
];
const subject = [
    { label: 'Science', value: '1' },
    { label: 'English', value: '2' },
    { label: 'Hindi', value: '3' },
    { label: 'Math', value: '4' },
    { label: 'Social Study', value: '5' },
    { label: 'Drawing', value: '6' },
    { label: 'Computer', value: '7' },
    { label: 'Sport', value: '8' },
];

export default function AskDoubts() {
    const [value, setValue] = useState(null);
    const [subValue, setSubValue] = useState(null);

    return (
        <View style={[cs.f1]}>
            <StatusBar
                barStyle='light-content'
                translucent={true}
                backgroundColor='transparent'
            />
            <TopHeaderBgComponent title="Ask Doubt" />
            <View style={[cs.boxRoundTop, cs.f1, { marginTop: -30 }]}>
                <ScrollView
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    style={[cs.f1 ,{marginBottom:HEIGHT /8}]}
                >
                    <View style={[cs.mb2]}>
                        <Text>Select Teacher</Text>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={[cs.font15]}
                            selectedTextStyle={[cs.font15]}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={{ width: 30 }}
                            data={teachers}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder="Select an teacher"
                            searchPlaceholder="Search..."
                            value={value}
                            onChange={item => {
                                setValue(item.value);
                            }}
                            renderLeftIcon={() => (
                                <EvilIcons style={[cs.mr05]} color="black" name="user" size={24} />
                            )}
                        />
                    </View>
                    <View style={[cs.mb1]}>
                        <Text>Select Subject</Text>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={[cs.font15]}
                            selectedTextStyle={[cs.font15]}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={{ width: 30 }}
                            data={subject}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder="Select"
                            searchPlaceholder="Search..."
                            value={subValue}
                            onChange={item => {
                                setSubValue(item.value);
                            }}
                            renderLeftIcon={() => (
                                <AntDesign style={[cs.mr05]} color="black" name="book" size={20} />
                            )}
                        />
                    </View>
                    <View style={[cs.mt2]}>
                        <Text>Title</Text>
                        <View style={[cs.displayBetween, styles.inputStyle]}>
                            <View style={[cs.displayStart]}>
                                <TextInput
                                    style={[cs.font15, { width: '100%', paddingLeft: 0, color: '#000000' }]}
                                    placeholder="Factoring a sum or difference of two cubes"
                                    placeholderTextColor="#979797"
                                    // onChangeText={(txt) => evantHandler(txt, "psw")}
                                    keyboardType="default"
                                // defaultValue={password}  
                                />
                            </View>
                        </View>
                    </View>
                    <View style={[cs.mt2]}>
                        <Text>Doubt Description</Text>
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
                    <View style={[cs.my3]}>
                        <CustomBtn
                            onPress={() => {}}
                            title='SEND REQUEST'
                            bgColor={[styleData.colorPrimary, styleData.colorPrimary300]}
                            color='white'
                            paddingY={16}
                            paddingX={20}
                            align="center"
                            fontSize={18}
                            bold={true}
                        />

                    </View>
                </ScrollView>
            </View>
            <FooterBgImg />
        </View>
    )
}

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#A5A5A5',
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    inputStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#A5A5A5'
    },
})