import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { cs, HEIGHT, styleData, WIDTH } from '../../css/cs';

export default function MenuCard({ navigation }) {

    const menuImg = [
        {
            menuImage: require('../../assets/images/card-img/quiz.png'),
            title: 'Play Quiz'
        },
        {
            menuImage: require('../../assets/images/card-img/assignment.png'),
            title: 'Assignment'
        },
        {
            menuImage: require('../../assets/images/card-img/holiday.png'),
            title: 'School Holiday'
        },
        {
            menuImage: require('../../assets/images/card-img/calendra.png'),
            title: 'Time Table'
        },
        {
            menuImage: require('../../assets/images/card-img/results.png'),
            title: 'Result'
        },
        {
            menuImage: require('../../assets/images/card-img/date_sheet.png'),
            title: 'Date Sheet'
        },
        {
            menuImage: require('../../assets/images/card-img/doubts.png'),
            title: 'Ask Doubts'
        },
        {
            menuImage: require('../../assets/images/card-img/gallery.png'),
            title: 'School Gallery'
        },
        {
            menuImage: require('../../assets/images/card-img/leave.png'),
            title: 'Leave Application'
        },
        {
            menuImage: require('../../assets/images/card-img/password.png'),
            title: 'Change Password'
        },
        {
            menuImage: require('../../assets/images/card-img/event.png'),
            title: 'Events'
        },
        {
            menuImage: require('../../assets/images/card-img/logout.png'),
            title: 'Logout'
        },
    ]

    return (
        <View style={[cs.displayBetween, cs.fWrap]}>
            {menuImg.map((item, index) => {
                return (
                    <TouchableOpacity key={index} style={[styles.brandContainer, cs.boxShadow1]}>
                        <Image style={[]} resizeMode='cover' source={item.menuImage} />
                        <Text style={[cs.font15]}>{item.title}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    brandContainer: {
        margin: 5,
        width: WIDTH / 2 - 40,
        borderRadius: 10,
        height: HEIGHT / 5,
        borderTopWidth: 1,
        borderTopColor: '#efefef',
        padding: 15,
        backgroundColor: styleData.colorWhite,
        justifyContent: 'space-around'
    }
})