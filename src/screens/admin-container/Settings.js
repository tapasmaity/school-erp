import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import { cs, HEIGHT } from '../../css/cs';
import MenuCard from '../../component/comon-component/MenuCard';
import TopHeaderBgComponent from '../../component/comon-component/TopHeaderBgComponent';
// Menu Card Data---------------!>
const menuCardData = [
    {
        menuImage: require('../../assets/images/card-img/password.png'),
        title: 'Change Password'
    },
    {
        menuImage: require('../../assets/images/card-img/logout.png'),
        title: 'Logout'
    },
]
export default function Settings() {
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
                    style={{ height: HEIGHT / 2 }}>
                    <MenuCard menuCardData={menuCardData} />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})