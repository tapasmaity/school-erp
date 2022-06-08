import { StyleSheet, Text, View, StatusBar, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { cs, styleData } from '../../css/cs'
import TopHeaderBgComponent from '../../component/comon-component/TopHeaderBgComponent'
import CustomTabBtn from '../../component/allButton/CustomTabBtn';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function LeaveAplication() {
    return (
        <View style={[cs.f1]}>
            <StatusBar
                barStyle='light-content'
                translucent={true}
                backgroundColor={'transparent'}
            />
            <TopHeaderBgComponent title='Leaves' />
            <View style={[cs.boxRoundTop, cs.f1, { marginTop: -30 }]}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    style={{ flex: 1 }}
                >
                    <View style={[cs.displayAround, cs.mb2, cs.f1]}>
                        <CustomTabBtn
                            // onPress={handleChangeTab}
                            borderColor='#E1E3E8'
                            tabName={[" All ", " Casual ", " Sick "]}
                            bold={true}
                            font={15}
                            radius={5}
                        />
                        <TouchableOpacity style={[styles.btnAdd, cs.boxShadow1]}>
                            <MaterialIcons name='add' size={24} color={styleData.colorPrimary} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btnAdd: {
        backgroundColor: styleData.colorWhite,
        padding: 6,
        borderRadius: 50
    }
})