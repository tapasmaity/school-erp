import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { cs, HEIGHT, styleData, WIDTH } from '../../css/cs';
import { useNavigation } from '@react-navigation/native';

// Menu Card Data---------------!>
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

export default function MenuCard() {

    const navigation = useNavigation();


    /*
    * Menu Card
    * evant
    * Handlar
    */
    const handleRouting = (type) => {
        if (type === 'Play Quiz') {
            navigation.navigate('ErrorPage')
        }
        if (type === 'Assignment') {
            navigation.navigate('Assignment')
        }
        if (type === 'School Holiday') {
            navigation.navigate('ErrorPage')
        }
        if (type === 'Time Table') {
            navigation.navigate('TimeTable')
        }
        if (type === 'Result') {
            navigation.navigate('ResultScreen')
        }
        if (type === 'Date Sheet') {
            navigation.navigate('DataSheet')
        }
        if (type === 'Ask Doubts') {
            navigation.navigate('ErrorPage')
        }
        if (type === 'School Gallery') {
            navigation.navigate('ErrorPage')
        }
        if (type === 'Leave Application') {
            navigation.navigate('ErrorPage')
        }
        if (type === 'Change Password') {
            navigation.navigate('ErrorPage')
        }
        if (type === 'Events') {
            navigation.navigate('ErrorPage')
        }
        if (type === 'Logout') {
            navigation.navigate('ErrorPage')
        }
    }

    
    return (
        <View style={[cs.displayBetween, cs.fWrap]}>
            {menuImg.map((item, index) => {
                return (
                    <TouchableOpacity onPress={() => handleRouting(item.title)} key={index} style={[styles.brandContainer, cs.boxShadow1]}>
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