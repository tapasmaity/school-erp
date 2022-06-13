import { StyleSheet, Text, View, StatusBar, ScrollView, Image, TextInput, Platform, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { cs, styleData, WIDTH } from '../../css/cs';
import TopHeaderBgComponent from '../../component/comon-component/TopHeaderBgComponent';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CustomBtn } from '../../component/allButton/CustomBtn';

export default function AddLeaveAplication() {
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [selectInput, setSelectInput] = useState('')
    const [fromDate, setFromDate] = useState('Select date')
    const [toDate, setToDate] = useState('Select date')
    const [value, setValue] = useState(null);

    const handleOnChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        // let fTime = 'Hours: ' + tempDate.getHours() + '| Minutes: ' + tempDate.getMinutes();
        console.log(selectInput)
        if (selectInput === 'from-date') {
            setFromDate(fDate);
            // setFromDate(fDate + '/n' + fTime);
        } else {
            setToDate(fDate);
            // setToDate(fDate + '/n' + fTime);
        }
    }

    const showMode = (currentMode, type) => {
        setShow(true);
        setMode(currentMode);
        setSelectInput(type);
    }





    const leaveTypeData = [
        { label: 'Casual', value: '1' },
        { label: 'Sick', value: '2' }
    ];


    return (
        <View style={[cs.f1]}>
            <StatusBar
                barStyle='light-content'
                translucent={true}
                backgroundColor={'transparent'}
            />
            <TopHeaderBgComponent title='New Leave' />
            <View style={[cs.boxRoundTop, cs.f1, { marginTop: -30 }]}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    style={{ flex: 1 }}
                >

                    <View>
                        <View style={[cs.mb2]}>
                            <Text>Leave Type</Text>
                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={[cs.font15]}
                                selectedTextStyle={[cs.font15]}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={{ width: 30 }}
                                data={leaveTypeData}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="Select type"
                                searchPlaceholder="Search..."
                                value={value}
                                onChange={item => {
                                    setValue(item.value);
                                }}
                                renderLeftIcon={() => (
                                    <Image style={[cs.mr1, { width: 30, height: 30 }]} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6521/6521749.png' }} />
                                )}
                            />
                        </View>

                        <View>
                            <Text>Cause</Text>
                            <View style={[cs.displayStart, cs.itemCenter, styles.inputStyle, cs.mb2]}>
                                <View style={[cs.mr1]}>
                                    <Image style={[cs.mr1, { width: 30, height: 30 }]} source={{ uri: 'https://www.freeiconspng.com/thumbs/writing-icon/writing-icon-28.png' }} />
                                </View>
                                <TextInput
                                    style={[cs.font18, cs.f1, {}]}
                                    placeholder="Type text message..."
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>

                        <View>
                            <Text>From Date</Text>
                            <TouchableOpacity onPress={() => showMode('date', 'from-date')} style={[cs.displayStart, cs.itemCenter, styles.inputStyle, cs.mb2]}>
                                <View style={[cs.mr1]}>
                                    <Image style={[cs.mr1, { width: 30, height: 30 }]} source={{ uri: 'https://www.kindpng.com/picc/m/683-6831607_blue-calendar-icon-png-transparent-png.png' }} />
                                </View>
                                <Text style={[cs.f1, { paddingVertical: 15 }]}>{fromDate}</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text>To Date</Text>
                            <TouchableOpacity onPress={() => showMode('date', 'to-date')} style={[cs.displayStart, cs.itemCenter, styles.inputStyle, cs.mb2]}>
                                <View style={[cs.mr1]}>
                                    <Image style={[cs.mr1, { width: 30, height: 30 }]} source={{ uri: 'https://www.kindpng.com/picc/m/683-6831607_blue-calendar-icon-png-transparent-png.png' }} />
                                </View>
                                <Text style={[cs.f1, { paddingVertical: 15 }]}>{toDate}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[cs.my3]}>
                            <CustomBtn
                                onPress={() => {}}
                                title='Apply For Leave'
                                bgColor={[styleData.colorPrimary, styleData.colorPrimary300]}
                                color='white'
                                paddingY={18}
                                paddingX={20}
                                align="center"
                                fontSize={18}
                                iconColor="white"
                                bold={true}
                            />

                        </View>

                        {/* <View style={[cs.m2]}>
                            <Button title='DatePicker' onPress={() => showMode('date')} />
                        </View>
                        <View style={[cs.m2]}>
                            <Button title='TimePicker' onPress={() => showMode('time')} />
                        </View> */}
                        {show &&
                            <DateTimePicker
                                testID='dateTimePicker'
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display='default'
                                onChange={handleOnChange}
                            />
                        }
                    </View>
                </ScrollView>
            </View>
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
        borderBottomColor: styleData.colorGray
    },
})